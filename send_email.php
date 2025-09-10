<?php
// Configurações de CORS para permitir requisições do frontend
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Responder a requisições OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Verificar se é uma requisição POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
    exit();
}

// Obter dados do formulário
$input = json_decode(file_get_contents('php://input'), true);

// Validar dados obrigatórios
if (empty($input['name']) || empty($input['email']) || empty($input['phone']) || 
    empty($input['subject']) || empty($input['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Todos os campos são obrigatórios']);
    exit();
}

// Sanitizar dados
$name = htmlspecialchars(trim($input['name']));
$email = filter_var(trim($input['email']), FILTER_VALIDATE_EMAIL);
$phone = htmlspecialchars(trim($input['phone']));
$subject = htmlspecialchars(trim($input['subject']));
$message = htmlspecialchars(trim($input['message']));

// Validar email
if (!$email) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email inválido']);
    exit();
}

try {
    // Configurações do servidor SMTP
    $smtp_host = 'smtp.hostinger.com';
    $smtp_port = 465;
    $smtp_username = 'suporte@mixcapital.com.br';
    $smtp_password = 'MixSuporte4443#';
    $from_email = 'suporte@mixcapital.com.br';
    $to_email = 'suporte@mixcapital.com.br';
    
    // Criar o corpo do email em HTML
    $email_subject = '[CONTATO SITE] ' . $subject;
    $email_body = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Nova mensagem de contato</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
            .content { background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #495057; }
            .value { margin-top: 5px; }
            .message-box { background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>Nova mensagem de contato - MIX CAPITAL</h2>
                <p>Recebida em: ' . date('d/m/Y H:i:s') . '</p>
            </div>
            
            <div class="content">
                <div class="field">
                    <div class="label">Nome:</div>
                    <div class="value">' . $name . '</div>
                </div>
                
                <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">' . $email . '</div>
                </div>
                
                <div class="field">
                    <div class="label">Telefone:</div>
                    <div class="value">' . $phone . '</div>
                </div>
                
                <div class="field">
                    <div class="label">Assunto:</div>
                    <div class="value">' . $subject . '</div>
                </div>
                
                <div class="field">
                    <div class="label">Mensagem:</div>
                    <div class="message-box">' . nl2br($message) . '</div>
                </div>
            </div>
        </div>
    </body>
    </html>
    ';
    
    // Usar cURL para enviar via SMTP (método mais confiável)
    $boundary = md5(time());
    
    $headers = "From: $from_email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    
    // Configurar contexto para stream
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);
    
    // Tentar enviar usando diferentes métodos
    $mail_sent = false;
    
    // Método 1: Configurar SMTP via ini_set
    ini_set('SMTP', $smtp_host);
    ini_set('smtp_port', $smtp_port);
    ini_set('sendmail_from', $from_email);
    
    $mail_sent = @mail($to_email, $email_subject, $email_body, $headers);
    
    // Método 2: Se falhou, tentar com socket direto
    if (!$mail_sent) {
        $socket = @fsockopen('ssl://' . $smtp_host, $smtp_port, $errno, $errstr, 30);
        
        if ($socket) {
            // Implementação básica SMTP
            $response = fgets($socket, 512);
            
            fputs($socket, "EHLO " . $_SERVER['HTTP_HOST'] . "\r\n");
            $response = fgets($socket, 512);
            
            fputs($socket, "AUTH LOGIN\r\n");
            $response = fgets($socket, 512);
            
            fputs($socket, base64_encode($smtp_username) . "\r\n");
            $response = fgets($socket, 512);
            
            fputs($socket, base64_encode($smtp_password) . "\r\n");
            $response = fgets($socket, 512);
            
            if (strpos($response, '235') !== false) {
                fputs($socket, "MAIL FROM: <$from_email>\r\n");
                $response = fgets($socket, 512);
                
                fputs($socket, "RCPT TO: <$to_email>\r\n");
                $response = fgets($socket, 512);
                
                fputs($socket, "DATA\r\n");
                $response = fgets($socket, 512);
                
                $email_data = "Subject: $email_subject\r\n";
                $email_data .= $headers . "\r\n";
                $email_data .= $email_body . "\r\n.\r\n";
                
                fputs($socket, $email_data);
                $response = fgets($socket, 512);
                
                if (strpos($response, '250') !== false) {
                    $mail_sent = true;
                }
                
                fputs($socket, "QUIT\r\n");
            }
            
            fclose($socket);
        }
    }
    
    if ($mail_sent) {
        echo json_encode([
            'success' => true, 
            'message' => 'Mensagem enviada com sucesso! Retornaremos em breve.'
        ]);
    } else {
        throw new Exception('Falha ao enviar email via SMTP');
    }
    
} catch (Exception $e) {
    error_log('Erro ao enviar email: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Erro interno do servidor. Tente novamente mais tarde.'
    ]);
}
?>