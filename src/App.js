import React, { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    servico: '',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides do carrossel - ALMAC
  const heroSlides = [
    {
      id: 1,
      title: 'Locação de Equipamentos',
      subtitle: 'Equipamentos de qualidade para sua obra não parar',
      image: '/images/equipamentos-construcao.png',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 2,
      title: 'Andaimes Profissionais',
      subtitle: 'Segurança e estrutura para trabalhos em altura',
      image: '/images/andaimes.jpg',
      cta: 'Falar no WhatsApp'
    },
    {
      id: 3,
      title: 'Ferramentas para Construção',
      subtitle: 'Tudo que você precisa em um só lugar',
      image: '/images/ferramentas.webp',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 4,
      title: 'Atendimento Rápido',
      subtitle: 'Entrega ágil e suporte especializado',
      image: '/images/atendimento.jpeg',
      cta: 'Falar no WhatsApp'
    }
  ];

  // Verificar se está em dispositivo móvel
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Carrossel automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Navegação do carrossel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Fechar menu ao clicar em um link
  const handleNavClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para enviar formulário de orçamento
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp - ORÇAMENTO
    const whatsappMessage = `Olá ALMAC! Gostaria de solicitar um orçamento para locação de equipamentos.%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*E-mail:* ${formData.email}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Cidade:* ${formData.cidade || 'Não informada'}%0A` +
      `*Equipamento:* ${formData.servico}%0A` +
      `*Detalhes:* ${formData.mensagem || 'Sem detalhes adicionais'}`;
    
    // Número da empresa ALMAC
    const whatsappNumber = '5548988633692';
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Resetar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      servico: '',
      mensagem: ''
    });
    
    // Mostrar mensagem de sucesso
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  // Função para solicitar orçamento de serviço específico
  const solicitarOrcamentoServico = (nomeServico) => {
    const whatsappMessage = `Olá ALMAC! Gostaria de solicitar um orçamento para locação de *${nomeServico}*.%0A%0APoderia me passar mais informações sobre valores, disponibilidade e condições de locação?`;
    
    const whatsappNumber = '5548988633692';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp com mensagem do HERO
  const openWhatsAppHero = () => {
    const whatsappMessage = `Olá ALMAC! Gostaria de solicitar um orçamento para locação de equipamentos.`;
    
    const whatsappNumber = '5548988633692';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp - Botão Flutuante
  const openWhatsAppFlutuante = () => {
    const whatsappMessage = `Olá ALMAC! Gostaria de solicitar um orçamento para locação de equipamentos.`;
    
    const whatsappNumber = '5548988633692';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    handleNavClick();
  };

  // Função para abrir o Instagram
  const openInstagram = () => {
    window.open('https://www.instagram.com/almaclocacao', '_blank');
  };

  // Serviços da ALMAC
  const services = [
    {
      id: 1,
      name: 'Andaimes',
      description: 'Andaimes profissionais para trabalhos em altura com máxima segurança e estabilidade',
      image: '/images/andaimes.jpg'
    },
    {
      id: 2,
      name: 'Betoneiras',
      description: 'Betoneiras potentes para concreto e argamassa, ideais para obras de todos os portes',
      image: '/images/betoneiras.png'
    },
    {
      id: 3,
      name: 'Compactadores de Solo',
      description: 'Equipamentos robustos para compactação de terra e pavimentação',
      image: '/images/compactadores.jpg'
    },
    {
      id: 4,
      name: 'Marteletes',
      description: 'Marteletes elétricos e pneumáticos para demolição e perfuração',
      image: '/images/marteletes.webp'
    },
    {
      id: 5,
      name: 'Furadeiras e Parafusadeiras',
      description: 'Ferramentas de precisão para perfuração e fixação em diversos materiais',
      image: '/images/furadeiras.jpg'
    },
    {
      id: 6,
      name: 'Lavadoras de Alta Pressão',
      description: 'Limpeza eficiente para equipamentos, pisos e fachadas',
      image: '/images/lavadoras.webp'
    },
    {
      id: 7,
      name: 'Geradores',
      description: 'Geradores de energia para garantir o funcionamento da obra em qualquer lugar',
      image: '/images/geradores.webp'
    },
    {
      id: 8,
      name: 'Compressores de Ar',
      description: 'Compressores potentes para ferramentas pneumáticas e pintura',
      image: '/images/compressores.webp'
    },
    {
      id: 9,
      name: 'Escadas',
      description: 'Escadas profissionais em alumínio e fibra para acesso seguro',
      image: '/images/escadas.jpg'
    },
    {
      id: 10,
      name: 'Roçadeiras',
      description: 'Roçadeiras para limpeza de terrenos e manutenção de áreas verdes',
      image: '/images/rocadeiras.webp'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'João Silva',
      text: 'Contratei os andaimes da ALMAC para uma reforma de fachada. Equipamento de primeira qualidade e entrega super rápida. Minha obra não parou!',
      rating: 5,
      city: 'Camboriú'
    },
    {
      id: 2,
      name: 'Marcos Oliveira',
      text: 'Excelente atendimento e equipamentos bem revisados. Aluguei betoneira e compactador, tudo funcionando perfeitamente. Recomendo a ALMAC!',
      rating: 5,
      city: 'Itajaí'
    },
    {
      id: 3,
      name: 'Fernanda Costa',
      text: 'Precisei de gerador e compressor de ar para uma obra emergencial. A ALMAC resolveu meu problema no mesmo dia. Atendimento nota 10!',
      rating: 5,
      city: 'Itapema'
    },
    {
      id: 4,
      name: 'Roberto Santos',
      text: 'Equipamentos de qualidade e preço justo. O suporte é muito bom e sempre dispostos a ajudar. Minha obra não para com a ALMAC!',
      rating: 5,
      city: 'Balneário Camboriú'
    }
  ];

  const whyChooseUs = [
    {
      id: 1,
      title: 'Equipamentos Revisados',
      description: 'Todos os equipamentos passam por rigorosa manutenção e testes'
    },
    {
      id: 2,
      title: 'Atendimento Rápido',
      description: 'Entregamos seu equipamento com agilidade e suporte técnico especializado'
    },
    {
      id: 3,
      title: 'Preços Competitivos',
      description: 'Melhor custo-benefício da região com condições especiais'
    },
    {
      id: 4,
      title: 'Equipe Especializada',
      description: 'Profissionais capacitados para orientar na escolha do equipamento ideal'
    },
    {
      id: 5,
      title: 'Estoque Completo',
      description: 'Ampla variedade de equipamentos para atender sua obra'
    }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <div className="logo">
              <img 
                src='/images/logo-almac.png' 
                alt='Logo ALMAC - Locação de Andaimes e Equipamentos'
                className="logo-image"
              />
            </div>
          </div>
          
          {/* Botão do menu hamburger */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); handleNavClick(); }}>Início</a>
            <a href="#servicos" onClick={handleNavClick}>Equipamentos</a>
            <a href="#sobre" onClick={handleNavClick}>Sobre Nós</a>
            <a href="#avaliacoes" onClick={handleNavClick}>Avaliações</a>
            <a href="#contato" onClick={handleNavClick} className="nav-cta">Solicitar Orçamento</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Carrossel */}
      <section className="hero-carousel">
        <div className="carousel-container">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="carousel-overlay"></div>
              <div className="container">
                <div className="carousel-content">
                  <h1 className="carousel-title">{slide.title}</h1>
                  <p className="carousel-subtitle">{slide.subtitle}</p>
                  <div className="carousel-buttons">
                    <button 
                      className="btn btn-primary"
                      onClick={slide.cta === "Solicitar Orçamento" ? () => {
                        document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                        handleNavClick();
                      } : openWhatsAppHero}
                    >
                      {slide.cta}
                    </button>
                    <button className="btn btn-secondary" onClick={openWhatsAppHero}>
                      💬 Falar no WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Controles do carrossel */}
          <button className="carousel-control prev" onClick={prevSlide} aria-label="Anterior">
            ❮
          </button>
          <button className="carousel-control next" onClick={nextSlide} aria-label="Próximo">
            ❯
          </button>
          
          {/* Indicadores */}
          <div className="carousel-indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="section servicos">
        <div className="container">
          <h2 className="section-title">Equipamentos para Locação</h2>
          <p className="section-subtitle">Equipamentos de qualidade para sua obra não parar</p>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                  <div className="service-overlay">
                    <button 
                      className="btn-service-quick"
                      onClick={() => solicitarOrcamentoServico(service.name)}
                    >
                      Solicitar Orçamento
                    </button>
                  </div>
                </div>
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Serviço Personalizado */}
          <div className="cta-container">
            <div className="cta-content">
              <h3>Precisa de um equipamento específico?</h3>
              <p>Consulte nossa equipe sobre disponibilidade e condições especiais de locação.</p>
              <button className="btn btn-primary" onClick={openWhatsAppFlutuante}>
                💬 Fale Conosco no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="section sobre">
        <div className="container">
          <h2 className="section-title">Sobre a ALMAC</h2>
          <div className="sobre-content">
            <div className="sobre-text">
              <p>
                A <strong>ALMAC</strong> é especializada na <strong>locação de andaimes e equipamentos para construção civil</strong>, 
                oferecendo soluções práticas, seguras e com excelente custo-benefício.
              </p>
              <p>
                Com equipamentos revisados e atendimento rápido, garantimos que <strong>sua obra não pare</strong>. 
                Nosso compromisso é fornecer ferramentas e máquinas de qualidade para profissionais da construção civil 
                em Canelinha e toda região.
              </p>
              <ul className="features">
                <li>Equipamentos revisados e testados</li>
                <li>Atendimento rápido e suporte especializado</li>
                <li>Melhor custo-benefício da região</li>
                <li>Orçamento gratuito e sem compromisso</li>
                <li>Entrega ágil em sua obra</li>
                <li>Condições flexíveis de locação</li>
                <li>Estoque completo para atender sua demanda</li>
                <li>Atendimento em Canelinha e região</li>
              </ul>
              <div className="sobre-stats">
                <div className="stat-item">
                  <span className="stat-number">1.6+</span>
                  <span className="stat-label">Anos de Experiência</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">400+</span>
                  <span className="stat-label">Clientes Atendidos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Satisfação</span>
                </div>
              </div>
            </div>
            <div className="sobre-image">
              <img src="/images/sobre-almac.png" alt="ALMAC - Locação de Equipamentos" />
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section id="avaliacoes" className="section testimonials">
        <div className="container">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle">A confiança dos nossos clientes é nosso maior patrimônio</p>
          
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section contato">
        <div className="container">
          <h2 className="section-title">Solicite seu orçamento gratuito</h2>
          <p className="section-subtitle">Preencha o formulário e nossa equipe entrará em contato - Sem compromisso!</p>
          
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Orçamento Solicitado!</h3>
              <p>Você será redirecionado para o WhatsApp em instantes.</p>
              <p>Caso não tenha sido redirecionado, <a href="https://wa.me/5548988633692?text=Ol%C3%A1%20ALMAC!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20loca%C3%A7%C3%A3o%20de%20equipamentos." target="_blank" rel="noopener noreferrer">clique aqui</a> para falar conosco.</p>
            </div>
          ) : (
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nome">Nome Completo *</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone *</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      placeholder="(48) 98863-3692"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cidade">Cidade *</label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      required
                      placeholder="Sua cidade"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="servico">Equipamento de Interesse *</label>
                    <select 
                      id="servico" 
                      name="servico" 
                      value={formData.servico}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione um equipamento</option>
                      <option value="Andaimes">Andaimes</option>
                      <option value="Betoneiras">Betoneiras</option>
                      <option value="Compactadores de Solo">Compactadores de Solo</option>
                      <option value="Marteletes">Marteletes</option>
                      <option value="Furadeiras e Parafusadeiras">Furadeiras e Parafusadeiras</option>
                      <option value="Lavadoras de Alta Pressão">Lavadoras de Alta Pressão</option>
                      <option value="Geradores">Geradores</option>
                      <option value="Compressores de Ar">Compressores de Ar</option>
                      <option value="Escadas">Escadas</option>
                      <option value="Roçadeiras">Roçadeiras</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensagem">Detalhes da Locação</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva sua necessidade, período de locação ou qualquer especificação importante..."
                    rows="5"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-submit">
                  <span>💬</span> Solicitar orçamento via WhatsApp
                </button>
                
                <p className="form-note">
                  Ao enviar, você será direcionado automaticamente para o WhatsApp da ALMAC.
                  <br />
                  <strong>Orçamento 100% gratuito e sem compromisso!</strong>
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>ALMAC</h3>
              <p>Locação de Andaimes e Equipamentos para Construção Civil. Equipamentos de qualidade para sua obra não parar.</p>
              <div className="contact-info">
                <p><strong>📱 WhatsApp:</strong> (48) 98863-3692</p>
                <p><strong>📍 Endereço:</strong> Rua Juvêncio Mafra, nº100, fundos, Centro, Canelinha/SC</p>
              </div>
            </div>
            <div className="footer-links">
              <h4>Links Rápidos</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Início</a>
              <a href="#servicos" onClick={handleNavClick}>Equipamentos</a>
              <a href="#sobre" onClick={handleNavClick}>Sobre Nós</a>
              <a href="#avaliacoes" onClick={handleNavClick}>Avaliações</a>
              <a href="#contato" onClick={handleNavClick}>Orçamento</a>
            </div>
            <div className="footer-social">
              <h4>Redes Sociais</h4>
              <p>Siga-nos e acompanhe nossas novidades</p>
              <div className="social-icons">
                <button className="social-btn instagram-btn" onClick={openInstagram}>
                  📸 Instagram
                </button>
                <button className="social-btn whatsapp-btn" onClick={openWhatsAppFlutuante}>
                  💬 WhatsApp
                </button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} ALMAC - Locação de Andaimes e Equipamentos. Todos os direitos reservados.</p>
            <p>📍 Canelinha - Santa Catarina | "Com ALMAC sua obra não para!"</p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <div className="floating-whatsapp">
        <button onClick={openWhatsAppFlutuante} aria-label="Falar no WhatsApp">
          💬
        </button>
      </div>
    </div>
  );
}

export default App;