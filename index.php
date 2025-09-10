<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="assets/images/logo.png" type="image/png">
    <title>MIX CAPITAL - Gateway de Pagamentos Seguro e Ágil</title>
    <meta name="description" content="Revolucione suas transações com o gateway de pagamentos mais completo do Brasil. PIX, cartões, boleto e muito mais com MIX CAPITAL." />
    <meta name="author" content="MIX CAPITAL" />
    <meta name="keywords" content="gateway pagamentos, PIX, cartão crédito, boleto, pagamento online, MIX CAPITAL" />

    <meta property="og:title" content="MIX CAPITAL - Gateway de Pagamentos Seguro e Ágil" />
    <meta property="og:description" content="Revolucione suas transações com o gateway de pagamentos mais completo do Brasil. PIX, cartões, boleto e muito mais com MIX CAPITAL." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@mixcapital" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <!-- Google Fonts - Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="assets/css/style.css">
    
    <!-- Lucide Icons (CDN) -->
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <nav class="nav">
                <!-- Logo -->
                <div class="logo">
                    <img src="assets/images/logo.png" alt="MIX CAPITAL Logo" class="logo-img">
                </div>

                <!-- Desktop Navigation -->
                <div class="nav-desktop">
                    <a href="#solucoes" class="nav-link">Soluções</a>
                    <a href="#diferenciais" class="nav-link">Taxas</a>
                    <button onclick="openContactModal()" class="nav-link">Contato</button>
                </div>

                <!-- CTA Button -->
                <div class="cta-desktop">
                    <button class="btn btn-cta" onclick="window.open('https://acessoaconta.com.br/Login/mixcapital', '_blank')">
                        Abra sua conta
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
                    <i data-lucide="menu"></i>
                </button>
            </nav>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="mobile-menu">
                <div class="mobile-menu-content">
                    <a href="#solucoes" class="mobile-nav-link">Soluções</a>
                    <a href="#diferenciais" class="mobile-nav-link">Taxas</a>
                    <button onclick="openContactModal()" class="mobile-nav-link">Contato</button>
                    <button class="btn btn-cta mobile-cta" onclick="window.open('https://acessoaconta.com.br/Login/mixcapital', '_blank')">
                        Abra sua conta
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <div class="hero-grid">
                    <!-- Content -->
                    <div class="hero-content">
                        <h1 class="hero-title">
                            Simplifique ao gerar 
                            <span class="text-gradient">cobranças</span> 
                            com agilidade e segurança
                        </h1>
                        
                        <p class="hero-description">
                            Com a MIX CAPITAL você tem tudo o que precisa em um só lugar, 
                            sem dores de cabeça e preocupações com burocracias
                        </p>

                        <div class="hero-buttons">
                            <button class="btn btn-cta" onclick="window.open('https://acessoaconta.com.br/Login/mixcapital', '_blank')">
                                Abra sua conta
                                <i data-lucide="arrow-right"></i>
                            </button>
                            
                            <button class="btn btn-ghost">
                                <i data-lucide="play"></i>
                                Saiba mais
                            </button>
                        </div>

                        <!-- Trust Indicators -->
                        <div class="trust-indicators">
                            <div class="trust-item">
                                <div class="trust-dot"></div>
                                <span>Banco Central</span>
                            </div>
                            <div class="trust-item">
                                <div class="trust-dot"></div>
                                <span>PCI DSS Certificado</span>
                            </div>
                            <div class="trust-item">
                                <div class="trust-dot"></div>
                                <span>99.9% Uptime</span>
                            </div>
                        </div>
                    </div>

                    <!-- Hero Image -->
                    <div class="hero-image">
                        <div class="hero-image-container">
                            <img src="assets/images/hero-dashboard.jpg" alt="Dashboard do gateway de pagamentos MIX CAPITAL" class="dashboard-img">
                            <div class="hero-overlay"></div>
                        </div>
                        
                        <!-- Floating Elements -->
                        <div class="floating-element floating-pix">PIX</div>
                        <div class="floating-element floating-secure">SEGURO</div>
                    </div>
                </div>
            </div>

            <!-- Background Elements -->
            <div class="bg-element bg-element-1"></div>
            <div class="bg-element bg-element-2"></div>
        </section>

        <!-- Payment Solutions Section -->
        <section id="solucoes" class="solutions">
            <div class="container">
                <div class="section-header">
                    <span class="section-subtitle">NOSSAS SOLUÇÕES</span>
                    <h2 class="section-title">
                        Tudo que você precisa para 
                        <span class="text-gradient">vender online</span>
                    </h2>
                    <p class="section-description">
                        Soluções completas de pagamento para impulsionar o seu negócio
                    </p>
                </div>

                <div class="solutions-grid">
                    <div class="solution-card">
                        <div class="solution-icon">
                            <i data-lucide="wallet" stroke="#a5b0bd"></i>
                        </div>
                        <h3 class="solution-title">Conta Digital</h3>
                        <p class="solution-description">Conta completa para sua empresa com cartão e extrato</p>
                        <ul class="solution-features">
                            <li><span class="feature-dot"></span>Cartão empresarial</li>
                            <li><span class="feature-dot"></span>Extrato em tempo real</li>
                            <li><span class="feature-dot"></span>Gestão financeira</li>
                        </ul>
                    </div>

                    <div class="solution-card">
                        <div class="solution-icon">
                            <i data-lucide="credit-card" stroke="#a5b0bd"></i>
                        </div>
                        <h3 class="solution-title">Gateway de Pagamento</h3>
                        <p class="solution-description">Aceite todas as formas de pagamento com segurança</p>
                        <ul class="solution-features">
                            <li><span class="feature-dot"></span>Múltiplas bandeiras</li>
                            <li><span class="feature-dot"></span>Segurança avançada</li>
                            <li><span class="feature-dot"></span>Controle total</li>
                        </ul>
                    </div>

                    <div class="solution-card">
                        <div class="solution-icon">
                            <i data-lucide="link" stroke="#a5b0bd"></i>
                        </div>
                        <h3 class="solution-title">Link de Pagamento</h3>
                        <p class="solution-description">Crie links personalizados em segundos</p>
                        <ul class="solution-features">
                            <li><span class="feature-dot"></span>Criação rápida</li>
                            <li><span class="feature-dot"></span>Múltiplas formas</li>
                            <li><span class="feature-dot"></span>Relatórios completos</li>
                        </ul>
                    </div>

                    <div class="solution-card">
                        <div class="solution-icon">
                            <i data-lucide="arrow-left-right" stroke="#a5b0bd"></i>
                        </div>
                        <h3 class="solution-title">Câmbio</h3>
                        <p class="solution-description">Conversão de moedas para seu negócio internacional</p>
                        <ul class="solution-features">
                            <li><span class="feature-dot"></span>Operação rápida</li>
                            <li><span class="feature-dot"></span>Múltiplas moedas</li>
                            <li><span class="feature-dot"></span>Controle cambial</li>
                        </ul>
                    </div>

                    <div class="solution-card">
                        <div class="solution-icon">
                            <i data-lucide="qr-code" stroke="#a5b0bd"></i>
                        </div>
                        <h3 class="solution-title">PIX</h3>
                        <p class="solution-description">Transferências instantâneas 24/7 com custos baixos</p>
                        <ul class="solution-features">
                            <li><span class="feature-dot"></span>Recebimento imediato</li>
                            <li><span class="feature-dot"></span>QR Code dinâmico</li>
                            <li><span class="feature-dot"></span>API completa</li>
                        </ul>
                    </div>

                    <div class="solution-card">
                        <div class="solution-icon">
                            <i data-lucide="file-text" stroke="#a5b0bd"></i>
                        </div>
                        <h3 class="solution-title">Boleto</h3>
                        <p class="solution-description">Emissão automática com registro online</p>
                        <ul class="solution-features">
                            <li><span class="feature-dot"></span>Vencimento flexível</li>
                            <li><span class="feature-dot"></span>Juros e multa</li>
                            <li><span class="feature-dot"></span>Conciliação automática</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Differentials Section -->
        <section id="diferenciais" class="differentials">
            <div class="container">
                <div class="section-header">
                    <span class="section-subtitle">NOSSOS DIFERENCIAIS</span>
                    <h2 class="section-title">
                        Revolucione suas 
                        <span class="text-gradient">transações</span>
                    </h2>
                    <p class="section-description">
                        Tecnologia de ponta e atendimento humanizado para o seu sucesso
                    </p>
                </div>

                <div class="differentials-grid">
                    <div class="differential-card">
                        <div class="differential-icon">
                            <i data-lucide="trending-down" stroke="#a5b0bd"></i>
                        </div>
                        <div class="differential-content">
                            <div class="differential-header">
                                <h3 class="differential-title">Taxas Competitivas</h3>
                                <span class="differential-metric">Baixas de Verdade</span>
                            </div>
                            <p class="differential-description">
                                Taxas baixas e transparentes para maximizar seus lucros
                            </p>
                        </div>
                    </div>

                    <div class="differential-card">
                        <div class="differential-icon">
                            <i data-lucide="zap" stroke="#a5b0bd"></i>
                        </div>
                        <div class="differential-content">
                            <div class="differential-header">
                                <h3 class="differential-title">Sem Burocracias</h3>
                                <span class="differential-metric">24h aprovação</span>
                            </div>
                            <p class="differential-description">
                                Cadastro simplificado e aprovação em até 24 horas
                            </p>
                        </div>
                    </div>

                    <div class="differential-card">
                        <div class="differential-icon">
                            <i data-lucide="shield" stroke="#a5b0bd"></i>
                        </div>
                        <div class="differential-content">
                            <div class="differential-header">
                                <h3 class="differential-title">Segurança Garantida</h3>
                                <span class="differential-metric">PCI DSS Level 1</span>
                            </div>
                            <p class="differential-description">
                                Criptografia de ponta e certificações internacionais
                            </p>
                        </div>
                    </div>

                    <div class="differential-card">
                        <div class="differential-icon">
                            <i data-lucide="headphones" stroke="#a5b0bd"></i>
                        </div>
                        <div class="differential-content">
                            <div class="differential-header">
                                <h3 class="differential-title">Suporte 24/7</h3>
                                <span class="differential-metric">24/7 disponível</span>
                            </div>
                            <p class="differential-description">
                                Atendimento especializado sempre que você precisar
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Stats Section -->
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number">R$ 500M+</div>
                        <div class="stat-label">Transações Processadas</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">10K+</div>
                        <div class="stat-label">Clientes Ativos</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">99.9%</div>
                        <div class="stat-label">Uptime Sistema</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">&lt; 1s</div>
                        <div class="stat-label">Tempo Resposta</div>
                    </div>
                </div>
            </div>

            <!-- Background Elements -->
            <div class="bg-element bg-element-3"></div>
            <div class="bg-element bg-element-4"></div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <!-- Company Info -->
                <div class="footer-section">
                    <div class="footer-logo">
                        <div class="footer-logo-icon">M</div>
                        <span class="footer-logo-text">MIX CAPITAL</span>
                    </div>
                    
                    <p class="footer-description">
                        Gateway de pagamentos completo para revolucionar suas transações 
                        com segurança, agilidade e condições competitivas.
                    </p>

                    <div class="social-links">
                        <a href="#" class="social-link"><i data-lucide="facebook"></i></a>
                        <a href="#" class="social-link"><i data-lucide="twitter"></i></a>
                        <a href="#" class="social-link"><i data-lucide="instagram"></i></a>
                        <a href="#" class="social-link"><i data-lucide="linkedin"></i></a>
                    </div>
                </div>

                <!-- Products -->
                <div class="footer-section">
                    <h3 class="footer-title">PRODUTOS</h3>
                    <ul class="footer-links">
                        <li><a href="#">Gateway de Pagamento</a></li>
                        <li><a href="#">PIX</a></li>
                        <li><a href="#">Cartão de Crédito</a></li>
                        <li><a href="#">Boleto Bancário</a></li>
                        <li><a href="#">Link de Pagamento</a></li>
                        <li><a href="#">API de Pagamentos</a></li>
                    </ul>
                </div>

                <!-- Support -->
                <div class="footer-section">
                    <h3 class="footer-title">SUPORTE</h3>
                    <ul class="footer-links">
                        <li><a href="#">Central de Ajuda</a></li>
                        <li><a href="#">Documentação</a></li>
                        <li><a href="#">Status do Sistema</a></li>
                        <li><button onclick="openContactModal()" class="footer-link-btn">Contato</button></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Webinars</a></li>
                    </ul>
                </div>

                <!-- Contact -->
                <div class="footer-section">
                    <h3 class="footer-title">CONTATO</h3>
                    <div class="contact-info">
                        <div class="contact-item">
                            <i data-lucide="mail" class="contact-icon"></i>
                            <span>suporte@mixcapital.com.br</span>
                        </div>
                        <div class="contact-item">
                            <i data-lucide="phone" class="contact-icon"></i>
                            <span>(21) 4149-0055</span>
                        </div>
                        <div class="contact-item">
                            <i data-lucide="map-pin" class="contact-icon"></i>
                            <div>
                                <div>Avenida Julio de SA Bierrenbach Alm 00065</div>
                                <div>Blc 004 Sal 0422 - Jacarepaguá</div>
                                <div>Rio de Janeiro - RJ, Brasil</div>
                                <div>CEP: 22775-028</div>
                            </div>
                        </div>
                        
                        <div class="company-info">
                            <div><strong>CNPJ:</strong> 61.853.820/0001-10</div>
                            <div><strong>Razão Social:</strong> MIX CAPITAL MIX CAPITAL GTW LTDA</div>
                        </div>
                    </div>

                    <!-- Certifications -->
                    <div class="certifications">
                        <span class="footer-title">CERTIFICAÇÕES</span>
                        <div class="certification-badges">
                            <span class="badge badge-success">PCI DSS</span>
                            <span class="badge badge-primary">BANCO CENTRAL</span>
                            <span class="badge badge-primary">ISO 27001</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="footer-bottom">
                <div class="footer-copyright">
                    © 2024 MIX CAPITAL. Todos os direitos reservados.
                </div>
                
                <div class="footer-legal">
                    <button onclick="openPrivacyModal()" class="footer-legal-link">Política de Privacidade</button>
                    <button onclick="openTermsModal()" class="footer-legal-link">Termos de Uso</button>
                    <a href="#" class="footer-legal-link">LGPD</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Contact Modal -->
    <div id="contact-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Entre em contato conosco</h2>
                <button class="modal-close" onclick="closeContactModal()">
                    <i data-lucide="x"></i>
                </button>
            </div>

            <div class="modal-body">
                <div class="contact-grid">
                    <!-- Contact Information -->
                    <div class="contact-info-section">
                        <h3 class="contact-info-title">Informações de contato</h3>
                        <p class="contact-info-description">
                            Estamos aqui para ajudar. Entre em contato através dos canais abaixo 
                            ou envie-nos uma mensagem usando o formulário.
                        </p>

                        <div class="contact-details">
                            <div class="contact-detail">
                                <i data-lucide="mail" class="contact-detail-icon"></i>
                                <div>
                                    <p class="contact-detail-title">E-mail</p>
                                    <p class="contact-detail-text">suporte@mixcapital.com.br</p>
                                    <p class="contact-detail-note">Resposta em até 24h</p>
                                </div>
                            </div>

                            <div class="contact-detail">
                                <i data-lucide="phone" class="contact-detail-icon"></i>
                                <div>
                                    <p class="contact-detail-title">Telefone</p>
                                    <p class="contact-detail-text">(21) 4149-0055</p>
                                    <p class="contact-detail-note">Seg-Sex: 9h às 18h</p>
                                </div>
                            </div>

                            <div class="contact-detail">
                                <i data-lucide="map-pin" class="contact-detail-icon"></i>
                                <div>
                                    <p class="contact-detail-title">Endereço</p>
                                    <p class="contact-detail-text">
                                        Avenida Julio de SA Bierrenbach Alm 00065<br>
                                        Blc 004 Sal 0422 - Jacarepaguá<br>
                                        Rio de Janeiro - RJ, Brasil<br>
                                        CEP: 22775-028
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="business-hours">
                            <h4 class="business-hours-title">Horário de atendimento</h4>
                            <div class="business-hours-list">
                                <p><strong>Segunda a Sexta:</strong> 9h às 18h</p>
                                <p><strong>Sábado:</strong> 9h às 14h</p>
                                <p><strong>Domingo:</strong> Fechado</p>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <div class="contact-form-section">
                        <h3 class="contact-form-title">Envie uma mensagem</h3>

                        <form id="contact-form" class="contact-form">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="name" class="form-label">Nome *</label>
                                    <input type="text" id="name" name="name" class="form-input" placeholder="Seu nome completo" required>
                                </div>

                                <div class="form-group">
                                    <label for="phone" class="form-label">Telefone *</label>
                                    <input type="tel" id="phone" name="phone" class="form-input" placeholder="(11) 99999-9999" required>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="email" class="form-label">E-mail *</label>
                                <input type="email" id="email" name="email" class="form-input" placeholder="seu@email.com" required>
                            </div>

                            <div class="form-group">
                                <label for="subject" class="form-label">Assunto *</label>
                                <input type="text" id="subject" name="subject" class="form-input" placeholder="Como podemos ajudar?" required>
                            </div>

                            <div class="form-group">
                                <label for="message" class="form-label">Mensagem *</label>
                                <textarea id="message" name="message" class="form-textarea" placeholder="Descreva sua solicitação ou dúvida..." required></textarea>
                            </div>

                            <div class="form-separator"></div>

                            <button type="submit" class="btn btn-cta btn-full">
                                <i data-lucide="send"></i>
                                Enviar mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Cookie Modal -->
    <div id="cookie-modal" class="cookie-modal">
        <div class="cookie-card">
            <div class="cookie-header">
                <div class="cookie-icon">
                    <i data-lucide="cookie"  stroke="#a5b0bd"></i>
                </div>
                <div class="cookie-content">
                    <h3 class="cookie-title">Cookies e Privacidade</h3>
                    <p class="cookie-description">
                        Utilizamos cookies para melhorar sua experiência, personalizar conteúdo 
                        e analisar nosso tráfego. Conforme a LGPD, você pode gerenciar suas preferências.
                    </p>
                </div>
                <button class="cookie-close" onclick="declineCookies()">
                    <i data-lucide="x"></i>
                </button>
            </div>

            <div class="cookie-buttons">
                <button class="btn btn-cta" onclick="acceptCookies()">
                    Aceitar Cookies
                </button>
                <button class="btn btn-ghost" onclick="declineCookies()">
                    Apenas Essenciais
                </button>
            </div>

            <div class="cookie-footer">
                <a href="#" class="cookie-policy-link">
                    Política de Privacidade
                </a>
            </div>
        </div>
    </div>

    <!-- Loading Overlay -->
    <div id="loading" class="loading">
        <div class="loading-spinner"></div>
        <p class="loading-text">Enviando mensagem...</p>
    </div>

    <!-- Toast Notification -->
    <div id="toast" class="toast">
        <div class="toast-content">
            <div class="toast-icon">
                <i data-lucide="check-circle"></i>
            </div>
            <div>
                <strong class="toast-title">Sucesso!</strong>
                <p class="toast-description">Sua mensagem foi enviada com sucesso.</p>
            </div>
        </div>
    </div>

    <!-- JavaScript -->
    <script src="assets/js/main.js"></script>
</body>
</html>