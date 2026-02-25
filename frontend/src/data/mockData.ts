import type { Product, BlogPost, HeroSlide, Differential } from '../types'

const SITE_URL = 'https://mig-controlteste.vercel.app'

export const heroSlides: HeroSlide[] = [
  {
    image: `${SITE_URL}/assets/images/home/banner2.png`,
    subtitle: '+ Agilidade',
    title: 'Registro ágil e sem filas para o ponto dos Colaboradores',
    description:
      'Chega de burocracia e filas! Com as soluções de controle de ponto da Mig Control, seus colaboradores registram a entrada e saída de forma rápida e intuitiva.',
    cta: { label: 'Conheça nossos produtos', href: '/controle-de-ponto' },
  },
  {
    image: `${SITE_URL}/assets/images/home/banner3.png`,
    subtitle: '+ Segurança',
    title: 'Controle e Segurança no Acesso à sua Empresa',
    description:
      'Proteja o que é mais importante para sua empresa com as soluções de controle de acesso da Mig Control. Garanta a segurança de seus colaboradores, ativos e informações.',
    cta: { label: 'Conheça nossos produtos', href: '/controle-de-acesso' },
  },
]

export const products: Product[] = [
  {
    id: '1',
    slug: 'id-class-facial',
    name: 'Relógio de Ponto Eletrônico iDClass Facial',
    shortName: 'iDClass Facial',
    description: 'Registro de ponto com reconhecimento facial e impressão de comprovante.',
    longDescription:
      'O iDClass Facial oferece controle de ponto por reconhecimento facial com tela touchscreen colorida, impressora térmica integrada e múltiplas formas de identificação.',
    image: `${SITE_URL}/assets/images/produtos/REP-iDClass-Facial-Frontal.png`,
    category: ['ponto'],
    icon: `${SITE_URL}/assets/icons/icon-facial.png`,
    tags: ['Inovação', 'Eficiência', 'Segurança'],
    features: [
      'Reconhecimento facial com alta precisão',
      'Tela touchscreen colorida',
      'Impressora térmica integrada',
      'Múltiplas formas de identificação',
      'Memória para milhões de registros',
      'Comunicação USB e TCP/IP',
    ],
    highlights: [
      {
        icon: `${SITE_URL}/assets/icons/icon-facial.png`,
        title: 'Reconhecimento Facial',
        description: 'Identificação rápida e precisa por biometria facial.',
      },
      {
        icon: `${SITE_URL}/assets/icons/touchscreen.png`,
        title: 'Tela Touchscreen',
        description: 'Interface intuitiva e moderna para operação fácil.',
      },
      {
        icon: `${SITE_URL}/assets/icons/conformidade.png`,
        title: 'Comprovante Integrado',
        description: 'Impressora térmica para emissão de comprovante a cada marcação.',
      },
      {
        icon: `${SITE_URL}/assets/icons/regulation.png`,
        title: 'Conformidade',
        description: 'Atende às exigências de segurança e rastreabilidade.',
      },
    ],
    specs: [
      { label: 'Tela', value: 'Touchscreen colorido' },
      { label: 'Identificação', value: 'Facial, biometria, cartão, senha' },
      { label: 'Comunicação', value: 'USB, Ethernet, Wi-Fi opcional' },
      { label: 'Impressora', value: 'Térmica integrada' },
      { label: 'Conformidade', value: 'Portaria 671/2021' },
    ],
    link: '/produto/id-class-facial',
  },
  {
    id: '2',
    slug: 'id-face',
    name: 'Terminal de Reconhecimento Facial iDFace',
    shortName: 'iDFace',
    description: 'Controle de ponto por reconhecimento facial com alta precisão e velocidade.',
    longDescription:
      'O iDFace é um terminal versátil de reconhecimento facial ideal para controle de acesso e ponto, com processamento rápido e múltiplas opções de identificação.',
    image: `${SITE_URL}/assets/images/produtos/iDFace-Frontal.png`,
    category: ['ponto', 'acesso'],
    icon: `${SITE_URL}/assets/icons/icon-registrador.png`,
    tags: ['Inovação', 'Eficiência', 'Segurança'],
    features: [
      'Reconhecimento facial com detecção de vivacidade',
      'Identificação em menos de 1 segundo',
      'Múltiplas formas de autenticação',
      'Comunicação TCP/IP e Wi-Fi',
      'Display integrado',
      'Compatível com iDSecure Cloud',
    ],
    highlights: [
      {
        icon: `${SITE_URL}/assets/icons/icon-facial.png`,
        title: 'Reconhecimento em 1 Segundo',
        description: 'Processamento ultrarrápido sem filas ou atrasos.',
      },
      {
        icon: `${SITE_URL}/assets/icons/innovation.png`,
        title: 'Detecção de Vivacidade',
        description: 'Protege contra fraudes com fotos ou vídeos.',
      },
      {
        icon: `${SITE_URL}/assets/icons/design.png`,
        title: 'Design Compacto',
        description: 'Instalação fácil em qualquer parede.',
      },
    ],
    specs: [
      { label: 'Identificação', value: 'Facial, biometria, cartão, senha' },
      { label: 'Velocidade', value: 'Menos de 1 segundo' },
      { label: 'Comunicação', value: 'TCP/IP, Wi-Fi' },
      { label: 'Compatibilidade', value: 'iDSecure Cloud' },
      { label: 'Uso', value: 'Controle de acesso e ponto' },
    ],
    link: '/produto/id-face',
  },
  {
    id: '3',
    slug: 'id-class-671',
    name: 'Relógio de Ponto Eletrônico 671',
    shortName: 'iDClass 671',
    description:
      'Totalmente adequado à Portaria 671, o REP iDClass 671 combina biometria, cartão e senha para um controle de ponto seguro e preciso.',
    longDescription:
      'O iDClass 671 é um Registrador Eletrônico de Ponto (REP) totalmente adequado à Portaria 671 do Ministério do Trabalho. Combina múltiplas formas de identificação — biometria digital, cartão de proximidade e senha — para garantir a máxima segurança e precisão no registro de ponto dos colaboradores.',
    image: `${SITE_URL}/assets/images/produtos/iDClass-671.png`,
    category: ['ponto'],
    icon: `${SITE_URL}/assets/icons/icon-registrador.png`,
    tags: ['Conformidade', 'Produtividade', 'Confiabilidade'],
    features: [
      'Adequado à Portaria 671',
      'Biometria digital, cartão e senha',
      'Display LCD touchscreen colorido',
      'Memória para milhões de registros',
      'Comunicação USB e TCP/IP',
      'Impressora térmica integrada',
    ],
    highlights: [
      {
        icon: `${SITE_URL}/assets/icons/touchscreen.png`,
        title: 'Touchscreen Colorido',
        description:
          'Interface intuitiva e moderna com tela sensível ao toque para operação fácil.',
      },
      {
        icon: `${SITE_URL}/assets/icons/biometria.png`,
        title: 'Biometria + Cartão + Senha',
        description: 'Múltiplas formas de identificação para atender qualquer necessidade.',
      },
      {
        icon: `${SITE_URL}/assets/icons/conformidade.png`,
        title: 'Conformidade Total',
        description: 'Atende integralmente à Portaria 671/2021 do Ministério do Trabalho.',
      },
      {
        icon: `${SITE_URL}/assets/icons/design.png`,
        title: 'Design Compacto e Robusto',
        description: 'Ideal para qualquer ambiente corporativo com construção durável.',
      },
    ],
    specs: [
      { label: 'Tela', value: 'Touchscreen colorido' },
      { label: 'Identificação', value: 'Biometria, cartão RFID, senha, código de barras' },
      { label: 'Comunicação', value: 'USB, Ethernet, Wi-Fi (opcional)' },
      { label: 'Portarias', value: '671/2021 e 4/2022' },
      { label: 'Certificação', value: 'INMETRO' },
      { label: 'Instalação', value: 'Fixação em parede, bivolt automático' },
      { label: 'Impressora', value: 'Térmica integrada com emissão de comprovante' },
      { label: 'Compatibilidade', value: 'Softwares de controle de ponto líderes do mercado' },
    ],
    link: '/produto/id-class-671',
  },
  {
    id: '4',
    slug: 'id-secure-cloud',
    name: 'Software de Controle de Acesso Cloud',
    shortName: 'iDSecure Cloud',
    description:
      'Controle de acesso inteligente e centralizado, com gestão de pessoas e veículos em tempo real.',
    longDescription:
      'O iDSecure Cloud é uma plataforma de controle de acesso 100% em nuvem que permite a gestão centralizada de pessoas, veículos e visitantes em tempo real. Com interface intuitiva e responsiva, oferece relatórios detalhados, integração com câmeras de segurança, controle de elevadores e áreas restritas.',
    image: `${SITE_URL}/assets/images/produtos/iDSecure-Cloud.png`,
    category: ['acesso'],
    icon: `${SITE_URL}/assets/icons/icon-software-acessos.png`,
    tags: ['Segurança', 'Gerenciamento', 'Escalabilidade'],
    features: [
      'Plataforma 100% em nuvem',
      'Gestão de pessoas, veículos e visitantes',
      'Relatórios detalhados em tempo real',
      'Integração com câmeras de segurança',
      'Controle de elevadores e áreas restritas',
      'Gestão remota de múltiplas unidades',
    ],
    highlights: [
      {
        icon: `${SITE_URL}/assets/icons/icon-software-acessos.png`,
        title: 'Gestão 100% em Nuvem',
        description:
          'Acesse e gerencie o controle de acesso de qualquer lugar, a qualquer momento, sem necessidade de servidor local.',
      },
      {
        icon: `${SITE_URL}/assets/icons/call-center-service.png`,
        title: 'Gestão de Visitantes',
        description:
          'Pré-cadastro, autorizações temporárias e registro fotográfico de cada acesso de visitantes.',
      },
      {
        icon: `${SITE_URL}/assets/icons/regulation.png`,
        title: 'Relatórios em Tempo Real',
        description:
          'Dashboards intuitivos com informações detalhadas sobre acessos, horários e áreas frequentadas.',
      },
      {
        icon: `${SITE_URL}/assets/icons/innovation.png`,
        title: 'Integração com CFTV',
        description:
          'Conecte câmeras de segurança para monitoramento visual integrado ao controle de acesso.',
      },
    ],
    specs: [
      { label: 'Plataforma', value: '100% em nuvem (SaaS)' },
      { label: 'Compatibilidade', value: 'Controladores iDAccess, iDFace, iDBlock e iD Box' },
      { label: 'Gestão', value: 'Pessoas, veículos, visitantes, elevadores e áreas restritas' },
      { label: 'Relatórios', value: 'Dashboards, logs de acesso, relatórios customizáveis' },
      { label: 'Integração', value: 'Câmeras CFTV, alarmes, controle de elevadores' },
      { label: 'Acesso', value: 'Web responsivo (desktop, tablet e smartphone)' },
      { label: 'Segurança', value: 'Criptografia TLS, autenticação multifator' },
    ],
    link: '/produto/id-secure-cloud',
  },
  {
    id: '5',
    slug: 'id-face-max',
    name: 'Terminal de Reconhecimento Facial Max',
    shortName: 'iDFace Max',
    description:
      'Tecnologia de reconhecimento facial com detecção de vivacidade e capacidade para até 100 mil faces.',
    longDescription:
      'O iDFace Max é um terminal de reconhecimento facial de alta performance, ideal para controle de acesso em empresas de grande porte. Com tecnologia de ponta em detecção de vivacidade (anti-spoofing), câmera dupla com infravermelho e capacidade para armazenar até 100.000 faces.',
    image: `${SITE_URL}/assets/images/produtos/iDFace-Max-Frontal.png`,
    category: ['acesso'],
    icon: `${SITE_URL}/assets/icons/icon-facial.png`,
    tags: ['Segurança', 'Inovação', 'Eficiência'],
    features: [
      'Reconhecimento facial com detecção de vivacidade',
      'Capacidade para até 100.000 faces',
      'Tela touchscreen de 7 polegadas',
      'Comunicação TCP/IP e Wi-Fi',
      'Compatível com iDSecure Cloud',
      'Câmera dupla com infravermelho',
    ],
    highlights: [
      {
        icon: `${SITE_URL}/assets/icons/icon-facial.png`,
        title: 'Identificação Facial de Alta Capacidade',
        description:
          'Reconhecimento de até 100.000 faces com detecção de rosto vivo, garantindo segurança e eficiência.',
      },
      {
        icon: `${SITE_URL}/assets/icons/touchscreen.png`,
        title: 'Display Touchscreen de 7"',
        description:
          'Navegação fácil e intuitiva para configuração de regras de acesso e visualização de relatórios.',
      },
      {
        icon: `${SITE_URL}/assets/icons/conformidade.png`,
        title: 'Grau de Proteção IP65',
        description:
          'Ideal para ambientes internos e externos cobertos, garantindo durabilidade e resistência.',
      },
      {
        icon: `${SITE_URL}/assets/icons/design.png`,
        title: 'Regras de Acesso Personalizadas',
        description:
          'Defina regras por grupos e horários, adaptando o controle de acesso às necessidades da sua empresa.',
      },
      {
        icon: `${SITE_URL}/assets/icons/innovation.png`,
        title: 'Interfone SIP Integrado',
        description: 'Comunicação facilitada e integrada ao sistema de controle de acesso.',
      },
      {
        icon: `${SITE_URL}/assets/icons/regulation.png`,
        title: 'Múltiplas Formas de Comunicação',
        description:
          'Conectividade via TCP/IP, USB, Wi-Fi e Bluetooth para flexibilidade na instalação e uso.',
      },
    ],
    specs: [
      { label: 'Usuários', value: 'Capacidade para mais de 200.000 usuários cadastrados' },
      { label: 'Faces', value: 'Até 10.000 / 50.000 / 100.000 faces com detecção de rosto vivo' },
      { label: 'Tela', value: 'LCD Touchscreen 7" (800x1280) capacitiva' },
      {
        label: 'Identificação',
        value: 'Reconhecimento Facial, Cartões de Proximidade (MIFARE, 125 kHz), Senha, QR Code',
      },
      {
        label: 'Comunicação',
        value: 'Ethernet (10/100Mbps), USB 2.0, Wi-Fi (opcional), GPRS (opcional)',
      },
      { label: 'Alimentação', value: 'Fonte externa de 12V 2A ou PoE (IEEE802.3af)' },
      { label: 'Grau de Proteção', value: 'IP65' },
      { label: 'Dimensões', value: '119,4 mm x 34,6 mm x 247 mm (L x P x A)' },
      { label: 'Peso', value: '950g' },
      {
        label: 'Controle de Ponto',
        value: 'Compatível com software RHiD (REP-P) conforme Portaria MTP 671/2021',
      },
    ],
    link: '/produto/id-face-max',
  },
  {
    id: '6',
    slug: 'id-flex-pro',
    name: 'Controlador de Acesso Multifuncional iDFlex Pro',
    shortName: 'iDFlex Pro',
    description: 'Controlador multifuncional com suporte a múltiplos tipos de acesso.',
    longDescription:
      'O iDFlex Pro é um controlador de acesso avançado que integra múltiplas funcionalidades em um único equipamento, oferecendo flexibilidade máxima para diferentes tipos de autenticação e controle.',
    image: `${SITE_URL}/assets/images/produtos/iDFlex-Pro.png`,
    category: ['acesso'],
    icon: `${SITE_URL}/assets/icons/icon-controlador.png`,
    tags: ['Multifuncional', 'Integração', 'Eficiência'],
    features: [
      'Suporte a múltiplas formas de acesso',
      'Controle de até 4 portas simultâneas',
      'Integração com sensores e leitores diversos',
      'Comunicação TCP/IP',
      'Backup local de transações',
      'Compatível com iDSecure Cloud',
    ],
    highlights: [
      {
        icon: `${SITE_URL}/assets/icons/icon-controlador.png`,
        title: 'Controle Multifuncional',
        description: 'Gerencia múltiplas portas e dispositivos em um único equipamento.',
      },
      {
        icon: `${SITE_URL}/assets/icons/innovation.png`,
        title: 'Integração Máxima',
        description: 'Compatível com leitores, sensores e equipamentos diversos.',
      },
      {
        icon: `${SITE_URL}/assets/icons/design.png`,
        title: 'Backup Local',
        description: 'Funciona mesmo sem conexão de internet com armazenamento local.',
      },
    ],
    specs: [
      { label: 'Portas', value: 'Controle de até 4 portas' },
      { label: 'Alimentação', value: '12V DC' },
      { label: 'Comunicação', value: 'Ethernet, USB' },
      { label: 'Compatibilidade', value: 'iDSecure Cloud' },
      { label: 'Armazenamento', value: 'Backup local de transações' },
    ],
    link: '/produto/id-flex-pro',
  },
  {
    id: '7',
    slug: 'id-block-next',
    name: 'Catraca Inteligente',
    shortName: 'iD Block Next',
    description:
      'Catraca de acesso com design moderno, leitura biométrica e integração com sistemas de controle de acesso.',
    longDescription:
      'A Catraca iD Block Next combina design moderno com tecnologia de ponta para controle de acesso físico. Com leitura biométrica, cartão de proximidade e reconhecimento facial, oferece múltiplas formas de identificação.',
    image: `${SITE_URL}/assets/images/produtos/iDBlock-Next.png`,
    category: ['acesso'],
    icon: `${SITE_URL}/assets/icons/icon-catraca.png`,
    tags: ['Segurança', 'Design', 'Agilidade'],
    features: [
      'Design moderno e compacto',
      'Leitura biométrica e cartão de proximidade',
      'Compatível com reconhecimento facial',
      'Alto fluxo de passagem',
      'Integração com iDSecure Cloud',
      'Construção robusta em aço inox',
    ],
    highlights: [
      {
        icon: `${SITE_URL}/assets/icons/design.png`,
        title: 'Design Moderno em Aço Inox',
        description:
          'Visual sofisticado que se integra perfeitamente a lobbies corporativos e condomínios.',
      },
      {
        icon: `${SITE_URL}/assets/icons/biometria.png`,
        title: 'Múltiplas Identificações',
        description:
          'Biometria, cartão de proximidade, reconhecimento facial e QR Code em um único equipamento.',
      },
      {
        icon: `${SITE_URL}/assets/icons/innovation.png`,
        title: 'Alto Fluxo de Passagem',
        description: 'Projetada para ambientes com grande volume de pessoas sem gerar filas.',
      },
      {
        icon: `${SITE_URL}/assets/icons/icon-software-acessos.png`,
        title: 'Integração Total',
        description: 'Compatível com iDSecure Cloud para gestão centralizada de acesso.',
      },
    ],
    specs: [
      {
        label: 'Identificação',
        value: 'Biometria, cartão de proximidade, reconhecimento facial, QR Code',
      },
      { label: 'Material', value: 'Aço inox e aço carbono com pintura eletrostática' },
      { label: 'Comunicação', value: 'TCP/IP, USB' },
      { label: 'Integração', value: 'iDSecure Cloud, sistemas de controle de acesso' },
      { label: 'Passagem', value: 'Alto fluxo, sensor anticlone' },
    ],
    link: '/produto/id-block-next',
  },
  {
    id: '8',
    slug: 'software-rhid',
    name: 'Software de Apuração de Ponto',
    shortName: 'RHID',
    description:
      'Controle de ponto 100% web com gestão de jornadas, férias e horas extras em uma só plataforma.',
    longDescription:
      'O RHID é um software de apuração de ponto 100% web que centraliza toda a gestão de jornadas de trabalho em uma única plataforma. Permite o controle de férias, horas extras, banco de horas, escalas e abonos com total rastreabilidade.',
    image: `${SITE_URL}/assets/images/produtos/RHID.png`,
    category: ['ponto'],
    icon: `${SITE_URL}/assets/icons/icon-software-apura.png`,
    tags: ['Gestão de RH', 'Otimização', 'Acessibilidade'],
    features: [
      'Plataforma 100% web',
      'Gestão de jornadas, férias e horas extras',
      'Banco de horas e escalas',
      'Dashboards e relatórios automatizados',
      'Conformidade com legislação trabalhista',
      'Acesso remoto de qualquer dispositivo',
    ],
    highlights: [
      {
        icon: `${SITE_URL}/assets/icons/icon-software-apura.png`,
        title: 'Plataforma 100% Web',
        description: 'Acesse de qualquer dispositivo com internet — desktop, tablet ou smartphone.',
      },
      {
        icon: `${SITE_URL}/assets/icons/call-center-service.png`,
        title: 'Gestão Completa de Jornadas',
        description:
          'Controle férias, horas extras, banco de horas, escalas e abonos em um só lugar.',
      },
      {
        icon: `${SITE_URL}/assets/icons/regulation.png`,
        title: 'Conformidade Trabalhista',
        description: 'Garanta conformidade total com a CLT e portarias do Ministério do Trabalho.',
      },
      {
        icon: `${SITE_URL}/assets/icons/innovation.png`,
        title: 'Relatórios Automatizados',
        description: 'Dashboards intuitivos com geração automática de relatórios para o RH.',
      },
    ],
    specs: [
      { label: 'Plataforma', value: '100% web (SaaS)' },
      {
        label: 'Funcionalidades',
        value: 'Jornadas, férias, horas extras, banco de horas, escalas, abonos',
      },
      { label: 'Relatórios', value: 'Automatizados, customizáveis, exportação em PDF e Excel' },
      { label: 'Acesso', value: 'Web responsivo, disponível de qualquer dispositivo' },
      { label: 'Conformidade', value: 'Portaria 671/2021, CLT' },
      {
        label: 'Integração',
        value: 'Registradores iDClass, coletor mobile, importação de marcações',
      },
    ],
    link: '/produto/software-rhid',
  },
]

export const differentials: Differential[] = [
  {
    icon: `${SITE_URL}/assets/icons/call-center-service.png`,
    title: 'Atendimento Consultivo e Personalizado',
    description:
      'Nosso diferencial começa na escuta ativa. "Pegamos na mão" de cada cliente, desde a análise inicial até a implementação e o suporte contínuo.',
  },
  {
    icon: `${SITE_URL}/assets/icons/regulation.png`,
    title: 'Segurança Jurídica e Conformidade Garantida',
    description:
      'As soluções que oferecemos são projetadas para garantir a conformidade total com as mais recentes portarias do Ministério do Trabalho.',
  },
  {
    icon: `${SITE_URL}/assets/icons/innovation.png`,
    title: 'Inovação e Tecnologia de Ponta ao seu Alcance',
    description:
      'Como representantes autorizados da Control iD, trazemos para sua empresa o que há de mais moderno e inovador em relógios de ponto eletrônico e controle de acesso.',
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'portaria-671-o-que-muda',
    title: 'Portaria 671: O que muda no controle de ponto da sua empresa?',
    excerpt:
      'Entenda as principais mudanças da Portaria 671 e como se adequar às novas exigências do Ministério do Trabalho para registro de ponto.',
    contentHtml: `
<p class="lead">A Portaria 671, publicada pelo Ministério do Trabalho e Previdência, trouxe mudanças significativas para o registro de ponto eletrônico nas empresas brasileiras. Se sua empresa ainda não se adequou, este guia vai te ajudar a entender o que precisa ser feito.</p>

<h2>O que é a Portaria 671?</h2>
<p>A Portaria 671/2021 consolidou e atualizou as regras sobre o registro eletrônico de jornada de trabalho, substituindo as antigas Portarias 1.510/2009 e 373/2011. Ela define três categorias de Registrador Eletrônico de Ponto (REP) e estabelece requisitos mais rigorosos de segurança.</p>

<h2>Principais Mudanças</h2>

<h3>1. Novos tipos de REP</h3>
<p>A portaria define três categorias de Registrador Eletrônico de Ponto:</p>
<ul>
<li><strong>REP-C (Convencional)</strong>: Equipamento tradicional com impressora integrada, similar aos modelos já existentes. Deve atender a requisitos técnicos específicos do INMETRO.</li>
<li><strong>REP-A (Alternativo)</strong>: Sistemas alternativos previamente autorizados por convenção ou acordo coletivo. Oferece mais flexibilidade, mas requer acordo sindical.</li>
<li><strong>REP-P (via Programa)</strong>: Registro por aplicativo ou software, permitindo marcação por dispositivos móveis. É a opção mais moderna e flexível.</li>
</ul>

<h3>2. Exigências de segurança reforçadas</h3>
<p>Todos os sistemas devem garantir:</p>
<ul>
<li>Inviolabilidade dos registros de ponto</li>
<li>Identificação única e inequívoca do trabalhador</li>
<li>Emissão de comprovante a cada marcação (físico ou digital)</li>
<li>Armazenamento seguro dos dados por pelo menos 5 anos</li>
</ul>

<h3>3. Registro de ponto por exceção</h3>
<p>A portaria regulamenta o registro de ponto por exceção, onde apenas as variações de horário são registradas. Essa modalidade deve ser previamente acordada em convenção ou acordo coletivo.</p>

<h2>Prazos e Adequação</h2>
<p>As empresas tiveram prazo para se adequar às novas exigências. Quem ainda não se adequou está sujeito a multas e penalidades em caso de fiscalização. <strong>A adequação não é opcional</strong> — é uma obrigação legal.</p>

<blockquote>
<p>"A conformidade com a Portaria 671 não é apenas uma questão legal, mas uma oportunidade de modernizar a gestão de pessoas da sua empresa."</p>
</blockquote>

<h2>Como a Mig Control pode ajudar</h2>
<p>Nossos equipamentos, como o <strong>iDClass 671</strong>, já estão totalmente adequados à Portaria 671, garantindo conformidade e tranquilidade para sua empresa. Além disso, o software <strong>RHID</strong> oferece apuração de ponto 100% online, compatível com todos os modelos de REP homologados.</p>

<p>Entre em contato com nossa equipe para uma consultoria personalizada sobre como adequar sua empresa às novas exigências.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60',
    author: 'Equipe Mig Control',
    authorAvatar: new URL('../logos/logo-mig-control.png', import.meta.url).href,
    date: '2025-01-15',
    category: 'Legislação',
    readTime: '5 min',
    tags: ['Portaria 671', 'Controle de Ponto', 'Legislação', 'RH'],
  },
  {
    id: '2',
    slug: 'reconhecimento-facial-empresas',
    title: 'Reconhecimento facial: o futuro do controle de acesso nas empresas',
    excerpt:
      'Descubra como a tecnologia de reconhecimento facial está revolucionando a segurança corporativa e por que sua empresa deveria considerar essa solução.',
    contentHtml: `
<p class="lead">O reconhecimento facial é uma das tecnologias que mais cresce no mercado de segurança corporativa. Com avanços significativos em inteligência artificial e processamento de imagem, os terminais modernos oferecem precisão e velocidade sem precedentes.</p>

<h2>Por que o reconhecimento facial?</h2>
<p>Em um mundo pós-pandemia, a busca por soluções de identificação sem contato físico acelerou drasticamente. O reconhecimento facial emergiu como a resposta ideal, combinando segurança, higiene e praticidade em um único sistema.</p>

<h2>Vantagens do reconhecimento facial</h2>

<h3>Segurança aprimorada</h3>
<ul>
<li>Detecção de vivacidade (anti-spoofing) impede fraudes com fotos e vídeos</li>
<li>Identificação precisa mesmo com mudanças de aparência (óculos, barba, maquiagem)</li>
<li>Registro fotográfico de cada acesso para auditoria</li>
<li>Impossibilidade de empréstimo de credenciais</li>
</ul>

<h3>Praticidade no dia a dia</h3>
<ul>
<li>Sem contato físico — totalmente higiênico</li>
<li>Identificação em menos de 1 segundo</li>
<li>Sem necessidade de cartões, senhas ou chaves</li>
<li>Funciona mesmo com máscara (modelos avançados)</li>
</ul>

<h3>Integração com ecossistema de segurança</h3>
<ul>
<li>Compatível com sistemas de controle de acesso em nuvem</li>
<li>Integração com CFTV e alarmes</li>
<li>Relatórios detalhados de acesso em tempo real</li>
<li>Gestão centralizada de múltiplas unidades</li>
</ul>

<h2>O iDFace Max da Control iD</h2>
<p>Com capacidade para até <strong>100 mil faces</strong> e detecção de vivacidade, o iDFace Max representa o estado da arte em reconhecimento facial para controle de acesso. Sua tela touchscreen de 7" e múltiplas opções de conectividade tornam a instalação e operação extremamente simples.</p>

<blockquote>
<p>"O reconhecimento facial não é mais tecnologia do futuro — é uma realidade acessível que já está transformando a segurança de milhares de empresas."</p>
</blockquote>

<h2>Conclusão</h2>
<p>Investir em reconhecimento facial é investir em segurança, eficiência e modernidade. Se sua empresa busca o próximo nível em controle de acesso, o iDFace Max é a escolha certa.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&auto=format&fit=crop&q=60',
    author: 'Equipe Mig Control',
    authorAvatar: new URL('../logos/logo-mig-control.png', import.meta.url).href,
    date: '2025-02-03',
    category: 'Tecnologia',
    readTime: '4 min',
    tags: ['Reconhecimento Facial', 'Controle de Acesso', 'iDFace Max', 'Segurança'],
  },
  {
    id: '3',
    slug: 'controle-acesso-condominio',
    title: '5 benefícios do controle de acesso inteligente em condomínios',
    excerpt:
      'Saiba como um sistema de controle de acesso moderno pode transformar a segurança do seu condomínio e valorizar o imóvel.',
    contentHtml: `
<p class="lead">A segurança em condomínios é uma preocupação crescente. Sistemas de controle de acesso inteligentes oferecem soluções eficazes e modernas para esse desafio, indo muito além da tradicional portaria presencial.</p>

<h2>Os 5 principais benefícios</h2>

<h3>1. Segurança 24/7</h3>
<p>Controle total sobre quem entra e sai, com registro de todos os acessos e alertas em tempo real. Câmeras integradas capturam imagens de cada evento de acesso, criando um histórico completo e auditável.</p>

<h3>2. Praticidade para moradores</h3>
<p>Acesso por biometria, reconhecimento facial ou aplicativo, eliminando a necessidade de chaves e controles remotos. Moradores podem autorizar visitantes remotamente pelo celular, sem depender da portaria.</p>

<h3>3. Gestão inteligente de visitantes</h3>
<p>Pré-cadastro de visitantes, autorizações temporárias e registro fotográfico de cada acesso. O sistema permite criar perfis de visitantes recorrentes (como prestadores de serviço) com horários e dias autorizados.</p>

<h3>4. Integração com portaria remota</h3>
<p>Possibilidade de gerenciar o acesso remotamente, reduzindo custos com porteiros e aumentando a eficiência. A portaria remota, combinada com controle de acesso inteligente, oferece segurança superior a um custo significativamente menor.</p>

<h3>5. Valorização do imóvel</h3>
<p>Condomínios com sistemas de segurança modernos são mais valorizados no mercado imobiliário. Pesquisas mostram que sistemas de controle de acesso podem valorizar o imóvel em até 15%.</p>

<blockquote>
<p>"Segurança inteligente não é custo — é investimento que se paga com economia operacional e valorização patrimonial."</p>
</blockquote>

<h2>Soluções da Mig Control para condomínios</h2>
<p>Oferecemos catracas inteligentes, terminais de reconhecimento facial e software de gestão para condomínios de todos os portes. Nossa equipe realiza um projeto personalizado para cada empreendimento.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60',
    author: 'Equipe Mig Control',
    authorAvatar: new URL('../logos/logo-mig-control.png', import.meta.url).href,
    date: '2025-01-28',
    category: 'Segurança',
    readTime: '6 min',
    tags: ['Condomínios', 'Controle de Acesso', 'Segurança', 'Portaria Remota'],
  },
  {
    id: '4',
    slug: 'gestao-ponto-remoto',
    title: 'Gestão de ponto para equipes remotas: desafios e soluções',
    excerpt:
      'Com o crescimento do trabalho remoto, entenda como gerenciar o ponto dos colaboradores de forma eficiente e em conformidade com a lei.',
    contentHtml: `
<p class="lead">O trabalho remoto e híbrido se consolidou como uma realidade nas empresas brasileiras. Com isso, a gestão do ponto dos colaboradores que trabalham fora do escritório se tornou um desafio que exige soluções tecnológicas adequadas.</p>

<h2>Os desafios do ponto remoto</h2>

<h3>Conformidade legal</h3>
<p>A legislação exige o registro de ponto mesmo para trabalhadores remotos, respeitando jornadas e intervalos. Empresas com mais de 20 funcionários são obrigadas a manter controle de jornada, independentemente do local de trabalho.</p>

<h3>Controle de jornada</h3>
<p>Garantir que os colaboradores cumpram a jornada contratada sem exceder limites de horas extras. O controle inadequado pode gerar passivos trabalhistas significativos.</p>

<h3>Geolocalização e validação</h3>
<p>Verificar que o registro está sendo feito do local correto de trabalho, evitando fraudes e garantindo a veracidade das marcações.</p>

<h2>Soluções modernas para ponto remoto</h2>
<p>O software <strong>RHID</strong> permite o registro de ponto de qualquer dispositivo com acesso à internet. Com recursos avançados de geolocalização, reconhecimento facial e relatórios em tempo real, é a solução ideal para empresas com equipes remotas ou híbridas.</p>

<h3>Funcionalidades essenciais</h3>
<ul>
<li>Registro de ponto via aplicativo mobile (iOS e Android)</li>
<li>Geolocalização com cercas virtuais</li>
<li>Reconhecimento facial para validação de identidade</li>
<li>Dashboards em tempo real para gestores</li>
<li>Alertas automáticos de irregularidades</li>
<li>Relatórios exportáveis para integração com folha de pagamento</li>
</ul>

<blockquote>
<p>"A tecnologia certa transforma o desafio do ponto remoto em uma oportunidade de ter mais transparência e controle sobre a jornada de trabalho."</p>
</blockquote>

<h2>Conclusão</h2>
<p>Gerenciar o ponto de equipes remotas não precisa ser complicado. Com as ferramentas certas, sua empresa pode garantir conformidade legal, produtividade e transparência. Entre em contato para conhecer nossas soluções.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop&q=60',
    author: 'Equipe Mig Control',
    authorAvatar: new URL('../logos/logo-mig-control.png', import.meta.url).href,
    date: '2024-12-20',
    category: 'Gestão',
    readTime: '5 min',
    tags: ['Trabalho Remoto', 'Controle de Ponto', 'RHID', 'Gestão de RH'],
  },
  {
    id: '5',
    slug: 'como-escolher-controle-acesso',
    title: 'Guia completo: como escolher o sistema de controle de acesso ideal',
    excerpt:
      'Um guia prático para ajudar você a escolher entre catracas, reconhecimento facial, biometria e software de gestão.',
    contentHtml: `
<p class="lead">Escolher o sistema de controle de acesso ideal para sua empresa pode parecer complexo com tantas opções no mercado. Este guia vai simplificar sua decisão, abordando os principais critérios que você deve considerar.</p>

<h2>Critérios essenciais de escolha</h2>

<h3>1. Volume de pessoas</h3>
<p>O fluxo diário de pessoas é o primeiro fator a considerar. Ambientes com alto volume (mais de 500 pessoas/dia) exigem equipamentos robustos como catracas com reconhecimento facial, enquanto escritórios menores podem optar por fechaduras biométricas.</p>

<h3>2. Nível de segurança</h3>
<p>Áreas críticas como data centers e salas de servidores exigem autenticação multifator (biometria + cartão + senha). Para áreas comuns, um sistema mais simples pode ser suficiente.</p>

<h3>3. Ambiente de instalação</h3>
<p>Ambientes externos exigem equipamentos com proteção IP65 ou superior. Ambientes internos climatizados permitem maior flexibilidade na escolha dos dispositivos.</p>

<h3>4. Integração com sistemas existentes</h3>
<p>Verifique a compatibilidade com seu sistema de CFTV, alarmes e software de gestão. Soluções como o iDSecure Cloud oferecem integração nativa com todo o ecossistema Control iD.</p>

<h2>Comparativo de soluções</h2>
<p>Cada tipo de solução atende a necessidades específicas. As catracas são ideais para lobbies, o reconhecimento facial para áreas de segurança, fechaduras biométricas para salas restritas, e o software de gestão em nuvem para administração centralizada.</p>

<h2>Conclusão</h2>
<p>Não existe solução única para todos os cenários. O ideal é combinar diferentes tecnologias de acordo com as necessidades de cada área da sua empresa. Fale com nossos consultores para um projeto personalizado.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60',
    author: 'Equipe Mig Control',
    authorAvatar: new URL('../logos/logo-mig-control.png', import.meta.url).href,
    date: '2025-02-10',
    category: 'Guia',
    readTime: '7 min',
    tags: ['Controle de Acesso', 'Guia', 'Biometria', 'Catracas'],
  },
  {
    id: '6',
    slug: 'biometria-digital-seguranca',
    title: 'Biometria digital: como funciona e por que é tão segura',
    excerpt:
      'Entenda a tecnologia por trás dos leitores biométricos e descubra por que a biometria digital continua sendo uma das formas mais seguras de identificação.',
    contentHtml: `
<p class="lead">A biometria digital é uma das tecnologias de identificação mais consolidadas e confiáveis do mercado. Presente em relógios de ponto, fechaduras inteligentes e terminais de acesso, ela utiliza as características únicas das impressões digitais para garantir uma identificação precisa e segura.</p>

<h2>Como funciona a leitura biométrica?</h2>
<p>O sensor biométrico captura a imagem da impressão digital e a converte em um modelo matemático (template). Esse template é comparado com os registros armazenados no banco de dados para confirmar a identidade do usuário. Todo o processo leva menos de 1 segundo.</p>

<h2>Tipos de sensores biométricos</h2>
<ul>
<li><strong>Óptico</strong>: Utiliza luz para capturar a imagem — econômico e confiável</li>
<li><strong>Capacitivo</strong>: Detecta a corrente elétrica da pele — mais preciso e difícil de fraudar</li>
<li><strong>Multispectral</strong>: Captura camadas da pele — funciona com dedos molhados ou sujos</li>
</ul>

<h2>Vantagens da biometria digital</h2>
<ul>
<li>Impossível de ser emprestada ou perdida (diferente de cartões e senhas)</li>
<li>Cada impressão digital é única — até gêmeos idênticos possuem digitais diferentes</li>
<li>Velocidade de identificação inferior a 1 segundo</li>
<li>Custo-benefício excelente para implementação em larga escala</li>
</ul>

<blockquote>
<p>"A biometria digital combina segurança comprovada com facilidade de uso, sendo a escolha ideal para empresas que buscam praticidade sem abrir mão da proteção."</p>
</blockquote>

<h2>Aplicações na prática</h2>
<p>Nossos equipamentos, como o <strong>iDClass 671</strong> e a <strong>Fechadura Digital Biométrica</strong>, utilizam sensores biométricos de última geração para garantir leituras rápidas e precisas, mesmo em ambientes desafiadores.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=60',
    author: 'Equipe Mig Control',
    authorAvatar: new URL('../logos/logo-mig-control.png', import.meta.url).href,
    date: '2025-01-05',
    category: 'Tecnologia',
    readTime: '4 min',
    tags: ['Biometria', 'Segurança', 'Tecnologia', 'Controle de Acesso'],
  },
]

export const getProductsByCategory = (category: 'ponto' | 'acesso'): Product[] => {
  return products.filter((p) => p.category.includes(category))
}

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug)
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) =>
    ['id-face-max', 'id-secure-cloud', 'id-class-671', 'software-rhid'].includes(p.slug),
  )
}

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((p) => p.slug === slug)
}
