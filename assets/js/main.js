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
            <div class="modal-content" style="max-width: 48rem;">
                <div class="modal-header">
                    <h2 class="modal-title">${title}</h2>
                    <button class="modal-close" onclick="closeSimpleModal()">
                        <i data-lucide="x"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div style="max-height: 60vh; overflow-y: auto; font-size: 0.875rem; line-height: 1.6; color: var(--metalico);">
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
            // Show success toast
            showToast('Sucesso!', result.message || 'Sua mensagem foi enviada com sucesso. Retornaremos em breve.', 'success');
            
            // Reset form and close modal
            form.reset();
            closeContactModal();
        } else {
            // Show error toast
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

// Toast Functions
function showToast(title, message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) {
        console.error('Toast element not found');
        return;
    }
    
    const toastTitle = toast.querySelector('.toast-title');
    const toastDescription = toast.querySelector('.toast-description');
    const toastIcon = toast.querySelector('.toast-icon i');
    
    if (!toastTitle || !toastDescription || !toastIcon) {
        console.error('Toast elements not found:', { toastTitle, toastDescription, toastIcon });
        return;
    }
    
    // Update content
    toastTitle.textContent = title;
    toastDescription.textContent = message;
    
    // Update icon based on type
    if (type === 'success') {
        toastIcon.setAttribute('data-lucide', 'check-circle');
        toastIcon.style.color = 'var(--verde-metalico)';
    } else {
        toastIcon.setAttribute('data-lucide', 'x-circle');
        toastIcon.style.color = 'var(--destructive)';
    }
    
    // Recreate icon
    lucide.createIcons();
    
    // Show toast
    toast.classList.add('active');
    
    // Hide after 5 seconds
    setTimeout(() => {
        toast.classList.remove('active');
    }, 5000);
}

// Content Functions
function getPrivacyContent() {
    return `
        <h3 style="color: var(--grafite); margin-bottom: 1rem;">1. Informações Coletadas</h3>
        <p style="margin-bottom: 1rem;">
            A MIX CAPITAL coleta informações pessoais necessárias para prestação de nossos serviços de gateway de pagamentos, 
            incluindo dados de identificação, contato e transacionais.
        </p>
        
        <h3 style="color: var(--grafite); margin-bottom: 1rem;">2. Uso das Informações</h3>
        <p style="margin-bottom: 1rem;">
            Utilizamos suas informações para processar transações, fornecer suporte ao cliente, cumprir obrigações legais 
            e melhorar nossos serviços.
        </p>
        
        <h3 style="color: var(--grafite); margin-bottom: 1rem;">3. Compartilhamento de Dados</h3>
        <p style="margin-bottom: 1rem;">
            Não vendemos ou alugamos dados pessoais. Compartilhamos informações apenas quando necessário para processamento 
            de pagamentos, cumprimento legal ou com seu consentimento explícito.
        </p>
        
        <h3 style="color: var(--grafite); margin-bottom: 1rem;">4. Segurança</h3>
        <p style="margin-bottom: 1rem;">
            Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger seus dados pessoais 
            contra acesso não autorizado, alteração, divulgação ou destruição.
        </p>
        
        <h3 style="color: var(--grafite); margin-bottom: 1rem;">5. Seus Direitos</h3>
        <p style="margin-bottom: 1rem;">
            Você tem o direito de acessar, corrigir, excluir ou limitar o processamento de seus dados pessoais. 
            Entre em contato conosco para exercer esses direitos.
        </p>
        
        <h3 style="color: var(--grafite); margin-bottom: 1rem;">6. Contato</h3>
        <p>
            Para questões sobre privacidade, entre em contato através do e-mail: 
            <a href="mailto:privacidade@mixcapital.com.br" style="color: var(--azul-metalico);">privacidade@mixcapital.com.br</a>
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