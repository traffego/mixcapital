// MIX CAPITAL - Main JavaScript

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Check for cookie consent
    checkCookieConsent();
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Initialize form handling
    initContactForm();
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active');
}

// Close mobile menu when clicking on links
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('mobile-nav-link')) {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.remove('active');
    }
});

// Contact Modal Functions
function openContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('contact-modal');
    if (e.target === modal) {
        closeContactModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeContactModal();
    }
});

// Cookie Functions
function checkCookieConsent() {
    const cookieConsent = localStorage.getItem('mixcapital-cookie-consent');
    if (!cookieConsent) {
        const cookieModal = document.getElementById('cookie-modal');
        cookieModal.classList.add('active');
    }
}

function acceptCookies() {
    localStorage.setItem('mixcapital-cookie-consent', 'accepted');
    const cookieModal = document.getElementById('cookie-modal');
    cookieModal.classList.remove('active');
}

function declineCookies() {
    localStorage.setItem('mixcapital-cookie-consent', 'declined');
    const cookieModal = document.getElementById('cookie-modal');
    cookieModal.classList.remove('active');
}

// Privacy Modal Functions
function openPrivacyModal() {
    showSimpleModal('Política de Privacidade', getPrivacyContent());
}

function openTermsModal() {
    showSimpleModal('Termos de Uso', getTermsContent());
}

function showSimpleModal(title, content) {
    // Create modal HTML
    const modalHTML = `
        <div class="modal active" id="simple-modal">
            <div class="modal-content" style="max-width: 48rem; background-color: #1e3a8a; color: white;">
                <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.2);">
                    <h2 class="modal-title" style="color: white;">${title}</h2>
                    <button class="modal-close" onclick="closeSimpleModal()" style="color: white;">
                        <i data-lucide="x"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div style="max-height: 60vh; overflow-y: auto; font-size: 0.875rem; line-height: 1.6; color: white;">
                        ${content}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
    
    // Initialize icons
    setTimeout(() => lucide.createIcons(), 100);
}

function closeSimpleModal() {
    const modal = document.getElementById('simple-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Contact Form Handling
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', handleContactSubmit);
    }
}

async function handleContactSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Coletar dados do formulário
    const contactData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Validar campos obrigatórios
    if (!contactData.name || !contactData.email || !contactData.phone || 
        !contactData.subject || !contactData.message) {
        showToast('Erro!', 'Todos os campos são obrigatórios.', 'error');
        return;
    }
    
    // Validar formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
        showToast('Erro!', 'Por favor, insira um email válido.', 'error');
        return;
    }
    
    // Show loading
    showLoading();
    
    try {
        // Enviar dados para o PHP
        const response = await fetch('send_email.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData)
        });
        
        const result = await response.json();
        
        // Hide loading
        hideLoading();
        
        if (result.success) {
            // Show success message
            showToast('Sucesso!', result.message || 'Sua mensagem foi enviada com sucesso. Retornaremos em breve.', 'success');
            
            // Reset form and close modal
            form.reset();
            closeContactModal();
        } else {
            // Show error message
            showToast('Erro!', result.message || 'Ocorreu um erro ao enviar sua mensagem.', 'error');
        }
        
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        hideLoading();
        showToast('Erro!', 'Erro de conexão. Verifique sua internet e tente novamente.', 'error');
    }
}

// Loading Functions
function showLoading() {
    const loading = document.getElementById('loading');
    loading.classList.add('active');
}

function hideLoading() {
    const loading = document.getElementById('loading');
    loading.classList.remove('active');
}

// Feedback Functions - Solução alternativa ao toast
function showToast(title, message, type = 'success') {
    // Solução simples e confiável usando alert
    const emoji = type === 'success' ? '✅' : '❌';
    const fullMessage = `${emoji} ${title}\n\n${message}`;
    alert(fullMessage);
}

// Content Functions
function getPrivacyContent() {
    return `
        <p style="margin-bottom: 1rem; text-align: justify;">
            Esta Política de Privacidade ("Política") indica como as suas informações e dados pessoais serão coletados, usados, compartilhados e armazenados em razão do uso dos Serviços relacionados à parceria. Este documento é parte integrante dos Termos de Uso, que contêm uma visão geral dos Serviços e, sem prejuízo de outras definições atribuídas nesta Política, as definições que são contempladas nos Termos de Uso, aplicam-se a esta Política.
        </p>
        
        <p style="margin-bottom: 1rem; text-align: justify;">
            A Mix Capital Mix Capital Gtw LTDA, sociedade com sede na Avenida Julio de SA Bierrenbach Alm 00065 Blc 004 Sal 0422, Jacarepagua, Rio de Janeiro RJ, 22775-028, inscrita no CNPJ/MF sob o n.º 61.853.820/0001-10, de nome Fantasia Mix Capital disponibiliza uma conta de pagamento digital com o intuito de facilitar suas Compras em Estabelecimentos e que também permite a realização de Saques, Transferência entre Contas, Pagamento de Boletos e Contas de Consumo, Recarga de Celular, entre outras funcionalidades (os "Serviços") e PINBANK BRASIL INSTITUIÇÃO DE PAGAMENTOS S.A, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 17.079.937/0001-05, com sede na Avenida Paulista, 1063 Conjunto 401 - 4 andar, Bela Vista - São Paulo Estado de São Paulo - SP - Cep: 01311-200 (a "Parceira").
        </p>
        
        <p style="margin-bottom: 1rem; text-align: justify;">
            No contexto da sua adesão aos Serviços e uso dos mesmos, Você terá estabelecido uma relação direta com a Mix Capital, a qual será pautada nos Termos de Uso e em eventuais outros documentos que regerem tal relação, conforme o caso. A Parceira, por sua vez, é uma parceira de negócios da Mix Capital e integra a relação estabelecida entre Você e a Mix Capital na medida em que a Parceira disponibilizará à Você, em conjunto com a Mix Capital, os componentes financeiros necessários à prestação dos Serviços que Você selecionar junto à Mix Capital, incluindo, quando aplicável, a emissão de cartão e a disponibilização de conta de pagamento. Em razão da existência dessa relação, essa Política de Privacidade se aplica à forma como a Mix Capital e a Parceira utilizam os seus dados pessoais de forma conjunta para possibilitar a prestação dos Serviços.
        </p>
        
        <p style="margin-bottom: 1rem; text-align: justify;">
            Quando Você utiliza os Serviços, Você confia seus dados e informações à Mix Capital e à Parceira. Estas se comprometem a preservar essa confiança. Por isso, este documento foi elaborado com o intuito de esclarecer quais dados pessoais são coletados dos usuários dos Serviços ("Você") e a forma de tratamento de tais dados pessoais no contexto da prestação dos Serviços.
        </p>
        
        <p style="margin-bottom: 1rem; text-align: justify; font-weight: bold;">
            A ACEITAÇÃO DESTA POLÍTICA DEVERÁ SER FEITA QUANDO VOCÊ SE CADASTRAR EM NOSSAS APLICAÇÕES (AS "APLICAÇÕES") PARA USUFRUIR DOS SERVIÇOS. A ACEITAÇÃO SE DARÁ NO MOMENTO EM QUE VOCÊ, DE FORMA AFIRMATIVA, CONCORDAR COM O USO DOS SEUS DADOS PARA CADA UMA DAS FINALIDADES AQUI DESCRITAS. ISSO INDICARÁ QUE VOCÊ ESTÁ CIENTE E EM TOTAL ACORDO COM A FORMA COMO AS SUAS INFORMAÇÕES E OS SEUS DADOS SERÃO UTILIZADOS. CASO VOCÊ NÃO CONCORDE COM ESTA POLÍTICA, POR FAVOR, NÃO A ACEITE E NÃO CONTINUE O SEU PROCEDIMENTO DE CADASTRO. TODAVIA, CASO ISSO ACONTEÇA, POR FAVOR, EXPLIQUE O MOTIVO DE DISCORDÂNCIA ATRAVÉS DOS CANAIS INDICADOS AO FINAL DESTA POLÍTICA PARA QUE POSSAMOS MELHORAR OS SERVIÇOS.
        </p>
        
        <p style="margin-bottom: 1rem; text-align: justify;">
            Este documento foi redigido de forma simples e acessível, contando com vários exemplos de coleta e de uso dos dados, justamente para que Você possa ler e entender a forma como utilizamos os seus dados para lhe oferecer uma experiência segura e confortável durante o uso dos Serviços.
        </p>
        
        <p style="margin-bottom: 1rem;">
            Dividimos esta Política da seguinte forma, para facilitar a sua compreensão:
        </p>
        <ul style="margin-bottom: 1rem; padding-left: 1.5rem;">
            <li>Que tipos de dados a Mix Capital e a Parceira coletam?</li>
            <li>Com quem os seus dados são compartilhados?</li>
            <li>Onde os dados são armazenados?</li>
            <li>Quais são os direitos dos titulares de dados?</li>
            <li>Por quanto tempo os dados serão armazenados?</li>
            <li>Como funciona a Segurança da Informação?</li>
            <li>Como falar com a Mix Capital?</li>
            <li>Mudanças na Política</li>
        </ul>
        
        <h3 style="color: white; margin: 1.5rem 0 1rem 0; font-weight: bold;">1. QUE TIPOS DE DADOS A MIX CAPITAL E A PARCEIRA COLETAM?</h3>
        <p style="margin-bottom: 1rem; text-align: justify;">
            Em geral, os dados pessoais que Você fornece são usados para que Você possa usufruir dos Serviços, bem como para que eles possam ser aprimorados. Os seus dados pessoais são utilizados para atingir as finalidades apresentadas na tabela abaixo, com as respectivas bases legais, que autorizam o seu tratamento:
        </p>
        
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Dados Pessoais</p>
        <p style="margin-bottom: 1rem; text-align: justify;">
            CPF, nome completo, data de nascimento, endereço residencial, endereço de e-mail, nome completo da mãe, número de telefone, foto da cédula de identidade ou CNH, uma foto estilo autorretrato (selfie) do titular e Autodeclaração de Pessoa Exposta Politicamente (PEP).
        </p>
        
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Finalidades</p>
        <ul style="margin-bottom: 1rem; padding-left: 1.5rem;">
            <li>Verificar a sua identidade;</li>
            <li>Cadastro nos Serviços;</li>
            <li>Análise de crédito;</li>
            <li>Identificar e prevenir eventuais situações de fraude;</li>
            <li>Identificar e prevenir eventuais ameaças de segurança;</li>
        </ul>
        
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Base Legal</p>
        <p style="margin-bottom: 1rem;">Cumprimento de Obrigação Legal e/ou Consentimento</p>
        
        <h3 style="color: white; margin: 1.5rem 0 1rem 0; font-weight: bold;">2. COM QUEM SEUS DADOS SÃO COMPARTILHADOS?</h3>
        <p style="margin-bottom: 1rem; text-align: justify;">
            Por ser um Serviço que envolve operações de pagamento, a Mix Capital e a Parceira podem atuar em conjunto com outras empresas para realizar diversas atividades, inclusive para a avaliação da sua capacidade financeira, como por meio da verificação de credit score e acompanhamento da situação da sua inscrição no CPF.
        </p>
        
        <p style="margin-bottom: 1rem; text-align: justify;">
            Desta forma, a Mix Capital e a Parceira reservam-se no direito de compartilhar as suas informações com terceiros no intuito de receber, analisar e tomar decisões sobre solicitações relacionadas aos Serviços. Tais compartilhamentos de informações com terceiros podem incluir dados pessoais relativos à sua situação financeira, e, sempre que for possível, de forma pseudoanonimizada, visando preservar ao máximo a sua privacidade.
        </p>
        
        <p style="margin-bottom: 1rem; text-align: justify;">
            A Mix Capital e a Parceira não licenciam, nem transferem seus dados pessoais para ninguém, exceto para as modalidades de empresas elencadas abaixo.
        </p>
        
        <p style="margin-bottom: 0.5rem; font-weight: bold;">BUREAU DE CRÉDITO:</p>
        <p style="margin-bottom: 1rem; text-align: justify;">
            A Mix Capital e a Parceira irão compartilhar seus dados pessoais, quando Você consentir com a adesão aos Serviços, com empresas que realizam a análise de seu perfil pessoal com relação à risco de concessão de crédito, a fim de dar maior segurança às operações e evitar eventuais fraudes.
        </p>
        
        <p style="margin-bottom: 0.5rem; font-weight: bold;">ANALYTICS:</p>
        <p style="margin-bottom: 1rem; text-align: justify;">
            Os dados armazenados pela Mix Capital e a Parceira podem vir a ser utilizados para fins de reconhecimento de perfis e hábitos de consumo coletivos dos usuários dos Serviços, a fim de gerar dados estatísticos (analytics), que possibilitem compreender melhor como é o acesso dos usuários às Aplicações. É considerado importante porque, dessa forma, será possível melhorar a prestação de serviços e customizar produtos mais direcionados aos interesses dos usuários. Importante: Os dados relacionados a Você e utilizados para essa finalidade são pseudonimizáveis, não permitindo a sua identificação quando analisados de forma agregada, nem tornando identificáveis os titulares dos dados pessoais analisados para finalidades estatísticas.
        </p>
        
        <p style="margin-bottom: 0.5rem; font-weight: bold;">VISA:</p>
        <p style="margin-bottom: 1rem; text-align: justify;">
            Seus dados pessoais, incluindo o número do seu Cartão, podem ser compartilhados com a Visa para que haja sua integração (e de seus adicionais, quando indicados) às plataformas promocionais da Visa, a fim de que Você tenha acesso (e seus adicionais, quando indicados) a descontos, ofertas e promoções disponibilizados pela Visa e seus parceiros. Recomendamos a leitura dos Termos de Uso e dos Avisos de Privacidade da plataforma disponíveis em www.vaidevisa.com.br. Caso Você não tenha interesse em participar da plataforma promocional, você poderá acessá-la e solicitar sua exclusão, ou, se preferir, acionar um dos canais de comunicação da Visa e requerer sua exclusão.
        </p>
        
        <p style="margin-bottom: 0.5rem; font-weight: bold;">PARA RESGUARDAR E PROTEGER OS DIREITOS DA MIX CAPITAL E A PARCEIRA:</p>
        <p style="margin-bottom: 1rem; text-align: justify; font-weight: bold;">
            SEM PREJUÍZO DO DISPOSTO NAS LEGISLAÇÕES BRASILEIRAS APLICÁVEIS, A MIX CAPITAL E A PARCEIRA SE RESERVAM DO DIREITO DE ACESSAR, LER, PRESERVAR E DIVULGAR QUAISQUER DADOS NECESSÁRIOS PARA CUMPRIR UMA OBRIGAÇÃO LEGAL OU UMA ORDEM JUDICIAL EMANADA DE AUTORIDADES COMPETENTES; FAZER CUMPRIR OU APLICAR OS TERMOS DE USO E OUTROS ACORDOS FIRMADOS COM VOCÊ; OU PROTEGER OS DIREITOS, PROPRIEDADE OU SEGURANÇA DA MIX CAPITAL E DA PARCEIRA, E SEUS RESPECTIVOS REPRESENTANTES, PRESTADORES DE SERVIÇOS, COLABORADORES OU USUÁRIOS.
        </p>
        
        <h3 style="color: white; margin: 1.5rem 0 1rem 0; font-weight: bold;">3. ONDE OS DADOS SÃO ARMAZENADOS?</h3>
        <p style="margin-bottom: 1rem; text-align: justify;">
            A Mix Capital e a Parceira podem transferir dados pessoais coletados no Brasil para os Estados Unidos da América ou outro país. Essa transferência ocorrerá quando a empresa responsável pela hospedagem de suas informações, a qual pode ser contratada pela Mix Capital e/ou pela Parceira, estiver localizada em outro território. No entanto, antes de transferir seus dados para outro país, será garantido que o país proporciona o grau de proteção de dados pessoais exigido nesta Política de Privacidade, ou que a Mix Capital e a Parceira garantirão a observância, independentemente da legislação estrangeira, dos princípios, direitos do titular e proteção de dados pessoais expostos nesta Política de Privacidade, em consonância com a Lei nº 13.709/18. A garantia dessa proteção de seus dados será inclusive sujeita à validação pelo Poder Público brasileiro.
        </p>
        
        <p style="margin-bottom: 1rem; text-align: justify;">
            A Mix Capital e a Parceira possuem sede no Brasil e os dados que coletamos são regidos pela lei brasileira. Ao acessar ou usar os Serviços ou fornecer dados pessoais para a Mix Capital e a Parceira, Você concorda com o tratamento e a transferência de tais dados para o Brasil e para o EUA ou qualquer outro país, se for o caso, observadas as condições expostas no parágrafo acima.
        </p>
        
        <p style="margin-bottom: 1rem; text-align: justify;">
            A Mix Capital e a Parceira declaram a Você que seus dados pessoais serão compartilhados entre elas, devendo ser mantidos, para fins de cumprimento de regras da legislação e regulamentações bancárias, nos termos da regulamentação em vigor.
        </p>
        
        <h3 style="color: white; margin: 1.5rem 0 1rem 0; font-weight: bold;">4. QUAIS SÃO OS DIREITOS DOS TITULARES DE DADOS?</h3>
        <p style="margin-bottom: 1rem; text-align: justify;">
            Você sempre poderá optar em não divulgar seus dados para a Mix Capital e a Parceira, mas tenha em mente que alguns desses dados podem ser essenciais para permitir o seu cadastro, acesso e uso dos Serviços ou de alguns dos recursos e produtos oferecidos a Você em conexão com essa Política de Privacidade. Independente disso, Você sempre possuirá direitos relativos à privacidade e à proteção dos seus dados pessoais. Além de a Mix Capital e a Parceira se preocuparem com a segurança dos seus dados pessoais, também se preocupam que Você tenha acesso e conhecimento de todos os seus direitos relativos a dados pessoais.
        </p>
        
        <p style="margin-bottom: 1rem;">
            Dessa forma, abaixo estão resumidos todos os direitos que Você possui sob as leis brasileiras relativas à proteção de dados, os quais são:
        </p>
        
        <ul style="margin-bottom: 1rem; padding-left: 1.5rem;">
            <li>Direito de confirmação da existência de atividade de tratamento;</li>
            <li>Direito de acesso;</li>
            <li>Direito de retificação;</li>
            <li>Direito de exclusão ou cancelamento;</li>
            <li>Direito de objeção ou oposição a um tratamento;</li>
            <li>Direito de restringir o tratamento;</li>
            <li>Direito à revisão das decisões automatizadas tomadas com base em seus dados;</li>
            <li>Direito à portabilidade de dados;</li>
            <li>Direito de retirar o seu consentimento;</li>
            <li>Direito de anonimização ou bloqueio de seus dados;</li>
            <li>Direito de não fornecer consentimento e de ser informado sobre as consequências relacionadas;</li>
            <li>Direito de Peticionar perante o Poder Público e exercer seus Direitos e Interesses em Juízo</li>
        </ul>
        
        <h3 style="color: white; margin: 1.5rem 0 1rem 0; font-weight: bold;">5. POR QUANTO TEMPO OS DADOS SÃO ARMAZENADOS?</h3>
        <p style="margin-bottom: 1rem; text-align: justify;">
            A Mix Capital e a Parceira mantêm seus dados pessoais somente pelo tempo que for necessário para atingir as finalidades para as quais os coletamos, inclusive para fins de cumprimento de quaisquer obrigações legais, contratuais, de prestação de contas ou requisição de autoridades competentes, observado prazo mínimo de 5 (cinco) anos contados da data da coleta dos dados, em observância ao disposto no art. 23, VIII da Resolução 4.658/18 do Banco Central do Brasil.
        </p>
        
        <h3 style="color: white; margin: 1.5rem 0 1rem 0; font-weight: bold;">6. COMO FUNCIONA A SEGURANÇA DA INFORMAÇÃO?</h3>
        <p style="margin-bottom: 1rem; text-align: justify;">
            Em nossos produtos e serviços aplicamos rígidos controles tecnológicos e procedimentais para garantir a segurança e proteção de todos os dados coletados e armazenados em nosso ambiente.
        </p>
        
        <p style="margin-bottom: 1rem; text-align: justify;">
            Com a finalidade de garantir a proteção de seus dados pessoais e fornecer um ambiente seguro, adotamos práticas relativas à segurança da informação, como autenticação dos usuários, rígido controle de acesso, criptografia dos dados e do conteúdo das transações, prevenção e detecção de intrusão e acessos não autorizados, prevenção de vazamento de informações, realização periódica de testes e varreduras para detecção de vulnerabilidades, proteção contra softwares maliciosos, mecanismos de rastreabilidade, controles de acesso e de segmentação da rede de computadores, manutenção de cópias de segurança dos dados e das informações, entre outras.
        </p>
        
        <h3 style="color: white; margin: 1.5rem 0 1rem 0; font-weight: bold;">7. COMO FALAR COM A MIX CAPITAL?</h3>
        <p style="margin-bottom: 1rem; text-align: justify;">
            Se Você acredita que suas informações pessoais foram usadas de maneira incompatível com esta Política ou com as suas escolhas enquanto titular destes dados, ou, ainda, se Você tiver outras dúvidas, comentários, sugestões ou solicitações relacionadas a esta Política, Você pode entrar em contato nos seguintes endereços de contato:
        </p>
        
        <p style="margin-bottom: 0.5rem;">E-mail: <a href="mailto:suporte@mixcapital.com.br" style="color: #60a5fa;">suporte@mixcapital.com.br</a></p>
        <p style="margin-bottom: 1rem;">Telefone: (21) 4149-0055</p>
        
        <h3 style="color: white; margin: 1.5rem 0 1rem 0; font-weight: bold;">8. MUDANÇAS NA POLÍTICA</h3>
        <p style="margin-bottom: 1rem; text-align: justify;">
            A Mix Capital e a Parceira podem alterar esta Política periodicamente e, quando isso ocorrer, Você será avisado com antecedência sobre tais alterações por meio dos canais de contato registrados em seu cadastro ou quando acessar novamente as Aplicações.
        </p>
        
        <p style="margin-bottom: 1rem; text-align: justify;">
            Caso Você tenha alguma dúvida sobre esta Política, entre em contato conosco pelos canais indicados na seção "Como falar com a Mix Capital".
        </p>
        
        <p style="margin-bottom: 0; text-align: center; font-weight: bold;">
            Política de Privacidade atualizada em: Dezembro de 2024
        </p>
    `;
}

function getTermsContent() {
    return `
        <h3 style="color: var(--grafite); margin-bottom: 1rem;">1. Aceitação dos Termos</h3>
        <p style="margin-bottom: 1rem;">
            Ao utilizar os serviços da MIX CAPITAL, você concorda com estes Termos de Uso e nossa Política de Privacidade.
        </p>
        
        <h3 style="color: var(--grafite); margin-bottom: 1rem;">2. Serviços Oferecidos</h3>
        <p style="margin-bottom: 1rem;">
            A MIX CAPITAL oferece serviços de gateway de pagamentos, incluindo processamento de PIX, cartões de crédito, 
            boletos bancários e outras formas de pagamento.
        </p>
        
        <h3 style="color: var(--grafite); margin-bottom: 1rem;">3. Responsabilidades do Cliente</h3>
        <p style="margin-bottom: 1rem;">
            O cliente é responsável por fornecer informações precisas, manter a segurança de suas credenciais e 
            cumprir todas as leis aplicáveis ao utilizar nossos serviços.
        </p>
        
        <h3 style="color: var(--grafite); margin-bottom: 1rem;">4. Taxas e Pagamentos</h3>
        <p style="margin-bottom: 1rem;">
            As taxas aplicáveis aos serviços serão informadas previamente e podem variar conforme o tipo de transação 
            e volume processado.
        </p>
        
        <h3 style="color: var(--grafite); margin-bottom: 1rem;">5. Limitação de Responsabilidade</h3>
        <p style="margin-bottom: 1rem;">
            A MIX CAPITAL não será responsável por danos indiretos, incidentais ou consequenciais decorrentes do uso 
            de nossos serviços.
        </p>
        
        <h3 style="color: var(--grafite); margin-bottom: 1rem;">6. Modificações</h3>
        <p style="margin-bottom: 1rem;">
            Reservamos o direito de modificar estes termos a qualquer momento. As alterações serão comunicadas 
            previamente aos usuários.
        </p>
        
        <h3 style="color: var(--grafite); margin-bottom: 1rem;">7. Lei Aplicável</h3>
        <p>
            Estes termos são regidos pelas leis brasileiras e quaisquer disputas serão resolvidas nos tribunais 
            competentes do Rio de Janeiro, RJ.
        </p>
    `;
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.solution-card, .differential-card, .stat-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});