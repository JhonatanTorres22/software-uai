# ExcelERP — Template Angular 17 + PrimeNG + PrimeFlex

Template corporativo ERP/CRM con tema azul corporativo.

## Stack
- **Angular 17** (Standalone Components + Signals)
- **PrimeNG 17** — Componentes UI
- **PrimeFlex 3** — Utilidades CSS
- **PrimeIcons 6** — Iconografía

---

## Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar servidor de desarrollo
npm start
# → http://localhost:4200
```

---

## Estructura del proyecto

```
src/
└── app/
    ├── app.component.ts          # Root component
    ├── app.config.ts             # Bootstrap config
    ├── app.routes.ts             # Rutas principales
    │
    ├── layout/                   # Estructura base
    │   ├── layout.component.*    # Shell (sidebar + navbar + router-outlet)
    │   ├── sidebar/              # Sidebar colapsable con navegación
    │   ├── navbar/               # Barra superior con búsqueda y acciones
    │   └── footer/               # Pie de página
    │
    ├── pages/
    │   └── dashboard/            # Página Dashboard principal
    │       ├── dashboard.component.ts
    │       ├── dashboard.component.html
    │       └── dashboard.component.scss
    │
    └── shared/
        └── models/
            ├── nav-item.model.ts   # Interfaces de navegación
            └── layout.service.ts   # Servicio estado del sidebar (Signal)
```

---

## Agregar nuevas páginas

1. Crear componente en `src/app/pages/mi-pagina/`
2. Registrar ruta en `app.routes.ts`:

```ts
{
  path: 'mi-pagina',
  loadComponent: () =>
    import('./pages/mi-pagina/mi-pagina.component').then(m => m.MiPaginaComponent)
}
```

3. Agregar ítem en el array `navSections` de `sidebar.component.ts`:

```ts
{ label: 'Mi Página', icon: 'pi pi-star', route: '/mi-pagina' }
```

---

## Personalización

### Colores
Editar variables en `src/styles.scss`:
```scss
--brand-600: #185FA5;   // Color principal
--brand-900: #042C53;   // Sidebar fondo
--brand-400: #378ADD;   // Acentos
```

### Tema PrimeNG
Cambiar en `angular.json`:
```json
"node_modules/primeng/resources/themes/lara-light-blue/theme.css"
// Opciones: lara-dark-blue, saga-blue, vela-blue, arya-blue
```

---

## Componentes PrimeNG utilizados
- `p-button` — Botones
- `p-inputtext` — Inputs de texto
- `p-table` — Tablas de datos
- `p-card` — Tarjetas
- `p-avatar` — Avatares de usuario
- `p-tag` — Etiquetas de estado
- `p-badge` — Badges de notificación
- `p-tooltip` — Tooltips
- `p-menu` — Menú contextual

---

## Scripts disponibles
| Comando | Descripción |
|---------|-------------|
| `npm start` | Servidor dev en http://localhost:4200 |
| `npm run build` | Build de producción en `/dist` |
| `npm run watch` | Build en modo watch |
