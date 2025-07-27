# Kipli Landing Page

Una landing page moderna y responsiva para Kipli, un SaaS que ayuda a negocios a gestionar cobranzas, enviar campañas de WhatsApp y fidelizar clientes con un agente de IA.

## 🚀 Características

- **Diseño Moderno**: Inspirado en [Fizz](https://joinfizz.com/) con un estilo profesional y limpio
- **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Formulario de Registro**: Integrado con Supabase para capturar leads de la beta
- **SEO Optimizado**: Meta tags completos para mejor posicionamiento
- **TypeScript**: Código tipado para mayor robustez
- **Tailwind CSS**: Estilos modernos y personalizables
- **Material-UI**: Componentes de formulario profesionales

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **Material-UI** - Componentes de UI
- **Supabase** - Backend y base de datos
- **Inter Font** - Tipografía moderna

## 📋 Prerrequisitos

- Node.js 18+ 
- npm o yarn
- Cuenta de Supabase (gratuita)

## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/kipli-landing.git
   cd kipli-landing
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configura las variables de entorno**
   ```bash
   cp env.example .env.local
   ```
   
   Edita `.env.local` y agrega tus credenciales de Supabase:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
   ```

4. **Configura Supabase**
   
   Crea una nueva tabla en tu proyecto de Supabase:
   ```sql
   CREATE TABLE beta_signups (
     id SERIAL PRIMARY KEY,
     business_name VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL UNIQUE,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

5. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

6. **Abre tu navegador**
   
   Navega a [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## 📁 Estructura del Proyecto

```
kipli-landing/
├── components/
│   └── SignupForm.tsx          # Componente del formulario de registro
├── lib/
│   └── supabase.ts             # Configuración del cliente Supabase
├── pages/
│   ├── _app.tsx                # Componente principal de la app
│   ├── _document.tsx           # Configuración del documento HTML
│   └── index.tsx               # Página principal (landing page)
├── styles/
│   └── globals.css             # Estilos globales y configuración de Tailwind
├── tailwind.config.js          # Configuración de Tailwind CSS
├── tsconfig.json               # Configuración de TypeScript
├── package.json                # Dependencias y scripts
└── README.md                   # Este archivo
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:
- **Primary**: `#1E40AF` (Azul Kipli)
- **Secondary**: `#F3F4F6` (Gris claro)
- **Success**: `#10B981` (Verde)
- **Warning**: `#F59E0B` (Amarillo)

### Tipografía
El proyecto usa la fuente **Inter** de Google Fonts, configurada en `styles/globals.css`.

### Componentes
- **SignupForm**: Formulario de registro con validación y integración a Supabase
- **Hero Section**: Sección principal con título y CTA
- **Features**: 3 tarjetas con características principales
- **Benefits**: Sección de beneficios con estadísticas
- **Footer**: Pie de página con enlaces y información de contacto

## 📱 Secciones de la Landing Page

1. **Hero**: Título principal, subtítulo y botones CTA
2. **Características**: 3 tarjetas (Cobranzas, WhatsApp, IA)
3. **Beneficios**: 2 columnas con ventajas y estadísticas
4. **CTA Final**: Formulario de registro para la beta
5. **Footer**: Información de contacto y enlaces

## 🔧 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter de ESLint

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en el dashboard de Vercel
3. ¡Listo! Se desplegará automáticamente

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Configura el directorio de salida: `.next`
4. Agrega las variables de entorno

### Otros
La aplicación se puede desplegar en cualquier plataforma que soporte Next.js.

## 📊 SEO

La landing page incluye:
- Meta tags completos para SEO
- Open Graph tags para redes sociales
- Twitter Card tags
- Estructura semántica HTML
- Títulos y descripciones optimizados

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: contacto@kipli.com
- **Website**: https://kipli.com
- **Twitter**: [@kipli](https://twitter.com/kipli)

## 🙏 Agradecimientos

- Diseño inspirado en [Fizz](https://joinfizz.com/)
- Iconos de [Heroicons](https://heroicons.com/)
- Tipografía [Inter](https://rsms.me/inter/) de Google Fonts 