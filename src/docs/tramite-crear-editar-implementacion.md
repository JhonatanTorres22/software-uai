# Implementación de Crear y Editar Trámites

## 📋 Resumen
Se implementó un sistema completo de creación y edición de trámites con persistencia de datos entre steps y precarga automática en modo edición.

---

## 🎯 Características Implementadas

### 1. **Servicio de Estado (TramiteStateService)**
**Ubicación:** `tramites/domain/services/tramite-state.service.ts`

#### Señales agregadas:
- `idTramite`: ID del trámite (0 para crear, >0 para editar)
- `idFormatoSolicitud`: ID del formato de solicitud existente
- `solicitudData`: Datos precargados para el formato
- `datosTramiteSnapshot`: Snapshot del formulario del paso 1
- `formatoSolicitudSnapshot`: Snapshot del formulario del paso 2 (NUEVO)
- `isEditMode`: Computed que retorna `true` si `idTramite > 0`

#### Interfaces:
```typescript
export interface DatosTramiteSnapshot {
  tipoDoc: string;
  numeroDoc: string;
  nombreSolicitante: string;
  // ... otros campos
}

export interface FormatoSolicitudSnapshot {
  destinatario: string;
  datosUsuario: string;
  numeroContacto: string;
  // ... otros campos
}
```

---

### 2. **Componente Generar Trámite (Stepper)**
**Ubicación:** `tramites/ui/generar-tramite/generar-tramite.ts`

#### Funcionalidades:
- Recibe `idTramite` como input desde el drawer
- Inicializa el modo (crear/editar) automáticamente
- Pre-pobla datos del trámite en modo edición
- Gestiona navegación entre steps con validación
- Limpia estado al destruirse

#### Cambios clave:
```typescript
ngOnInit(): void {
  const id = this.idTramite();
  this.tramiteState.idTramite.set(id);

  if (id > 0) {
    // Modo edición: pre-poblar datos
    const tramite = this.tramiteSignal.selectTramite();
    this.tramiteState.solicitudData.set(prePopulated);
  }
}

get actionLabel(): string {
  return this.isEditMode() ? 'Actualizar y continuar' : 'Registrar y continuar';
}
```

#### Estilos (generar-tramite.scss):
✅ Ya configurado con colores del brand:
- Step activo: `var(--brand-500)` (fondo azul)
- Step completado: `var(--brand-500)` (fondo azul)
- Texto: `var(--brand-600)` (azul oscuro)
- Separador: `var(--brand-200)` (azul claro)
- Checkbox: `var(--brand-500)` (azul)

---

### 3. **Paso 1: Datos del Trámite**
**Ubicación:** `tramites/ui/generar-tramite/datos-tramite/datos-tramite.ts`

#### Flujo de Persistencia:
```
┌─────────────────────────────────────────┐
│ ngOnInit()                              │
│ ├─ ¿Hay snapshot? → Restaurar           │
│ ├─ ¿Modo edición? → Cargar desde API    │
│ └─ Cargar categorías                    │
└─────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│ Usuario edita formulario                │
└─────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│ registrarTramite()                      │
│ ├─ Modo crear → API crearTramite        │
│ ├─ Modo editar → API actualizarTramite  │
│ └─ Emitir datos para paso 2             │
└─────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│ ngOnDestroy()                           │
│ └─ Guardar snapshot para persistencia   │
└─────────────────────────────────────────┘
```

#### Métodos clave:
- `ngOnInit()`: Restaura snapshot si existe (volver del paso 2)
- `ngOnDestroy()`: Guarda snapshot antes de destruir
- `cargarCategorias()`: Maneja prioridad snapshot vs modo edición
- `patchTramiteParaEdicion()`: Carga datos del trámite seleccionado
- `buildSnapshot()`: Construye snapshot del formulario
- `restoreSnapshot()`: Restaura snapshot al formulario

#### Botón del Paso 1:
- **Crear**: "Registrar y continuar" → Crea trámite y avanza
- **Editar**: "Actualizar y continuar" → Actualiza trámite y avanza

---

### 4. **Paso 2: Formato Solicitud**
**Ubicación:** `tramites/ui/generar-tramite/formato-solicitud/formato-solicitud.ts`

#### Flujo de Persistencia:
```
┌─────────────────────────────────────────┐
│ constructor()                           │
│ └─ Effect: Precargar datos del paso 1  │
│    (solo si no hay snapshot)            │
└─────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│ ngOnInit()                              │
│ ├─ ¿Hay snapshot? → Restaurar           │
│ └─ ¿Modo edición? → Cargar desde API    │
└─────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│ Usuario edita formulario                │
└─────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│ generarTramite()                        │
│ ├─ Modo crear → API crearFormato        │
│ └─ Modo editar → API actualizarFormato  │
└─────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│ ngOnDestroy()                           │
│ └─ Guardar snapshot para persistencia   │
└─────────────────────────────────────────┘
```

#### Métodos clave:
- `ngOnInit()`: Restaura snapshot o carga formato existente
- `ngOnDestroy()`: Guarda snapshot antes de destruir (NUEVO)
- `cargarFormatoExistente()`: Obtiene formato por API en modo edición
- `buildSnapshot()`: Construye snapshot del formulario (NUEVO)
- `restoreSnapshot()`: Restaura snapshot al formulario (NUEVO)

#### Botón del Paso 2:
- **Crear**: "Generar Formato" → Crea formato
- **Editar**: "Actualizar Formato" → Actualiza formato

---

### 5. **Lista de Trámites**
**Ubicación:** `tramites/ui/list-tramites/list-tramites.ts`

#### Funcionalidad de Editar:
```html
<ui-icon-button 
  icon="pi pi-pencil" 
  tooltip="Editar trámite" 
  color="info"
  (onClick)="openGenerarTramiteDrawer(tramite)">
</ui-icon-button>
```

```typescript
openGenerarTramiteDrawer(tramite: ListarTramite): void {
  this.selectTramite.set(tramite);  // Establece trámite seleccionado
  this.visibleGenerarTramiteDrawer.set(true);  // Abre drawer
}
```

#### Drawer:
```html
<p-drawer 
  [visible]="visibleGenerarTramiteDrawer()" 
  position="full">
  <app-generar-tramite 
    [idTramite]="selectTramite().idTramite"
    (closeRequested)="closeGenerarTramiteDrawer()">
  </app-generar-tramite>
</p-drawer>
```

**Nota:** Solo se puede editar trámites con estado `INGRESADO`

---

## 🔄 Flujo Completo de Edición

```
Usuario hace clic en "Editar" (ícono lápiz)
        │
        ▼
Se abre drawer con stepper
        │
        ▼
GenerarTramite recibe idTramite > 0
        │
        ▼
TramiteStateService.idTramite.set(id)
TramiteStateService.isEditMode = true
        │
        ▼
┌──────────────────────┐
│   PASO 1 (ngOnInit)  │
├──────────────────────┤
│ Cargar categorías    │
│ Obtener trámite      │
│ Patch formulario     │
└──────────────────────┘
        │
        ▼
Usuario hace cambios y click "Actualizar y continuar"
        │
        ▼
┌──────────────────────┐
│ registrarTramite()   │
├──────────────────────┤
│ API: editarTramite   │
│ Guardar snapshot     │
│ Avanzar al paso 2    │
└──────────────────────┘
        │
        ▼
┌──────────────────────┐
│   PASO 2 (ngOnInit)  │
├──────────────────────┤
│ Cargar formato API   │
│ Patch formulario     │
└──────────────────────┘
        │
        ▼
Usuario hace cambios y click "Actualizar Formato"
        │
        ▼
┌──────────────────────┐
│ generarTramite()     │
├──────────────────────┤
│ API: editarFormato   │
│ Mostrar success      │
└──────────────────────┘
```

---

## 🔄 Flujo de Persistencia entre Steps

### Escenario: Usuario va del Paso 1 → Paso 2 → vuelve al Paso 1

```
PASO 1
  │ Usuario llena formulario
  │ Click "Registrar y continuar"
  │
  ▼
ngOnDestroy() → Guarda snapshot en TramiteStateService
  │
  ▼
PASO 2
  │ Usuario hace cambios
  │ Click "Volver"
  │
  ▼
ngOnDestroy() → Guarda snapshot en TramiteStateService
  │
  ▼
PASO 1 (de nuevo)
  │
  ▼
ngOnInit() → ¿Hay snapshot? SÍ → Restaurar formulario ✅
```

### Sin Persistencia (Problema anterior):
```
PASO 1 → PASO 2 → PASO 1
   ✓       ✓        ❌ (Datos perdidos)
```

### Con Persistencia (Solución actual):
```
PASO 1 → PASO 2 → PASO 1
   ✓       ✓        ✓ (Datos preservados)
```

---

## 📝 APIs Utilizadas

### Trámites:
- `POST /tramites` → Crear trámite
- `PUT /tramites/:id` → Actualizar trámite
- `GET /tramites/:id` → Obtener trámite (no usado, se usa signal)
- `DELETE /tramites/:id` → Anular trámite

### Formato Solicitud:
- `GET /formato-solicitud/:idTramite` → Obtener formato por trámite
- `POST /formato-solicitud` → Crear formato
- `PUT /formato-solicitud/:id` → Actualizar formato

---

## ✅ Checklist de Funcionalidades

- [x] Crear trámite desde lista
- [x] Editar trámite desde ícono lápiz
- [x] Abrir drawer full-screen
- [x] Modo editar vs modo crear automático
- [x] Precargar formulario paso 1 en edición
- [x] Precargar formulario paso 2 en edición
- [x] Persistencia entre steps (ida y vuelta)
- [x] Botón "Registrar" en crear
- [x] Botón "Actualizar y continuar" en editar
- [x] Stepper con colores del brand (azul)
- [x] Checkbox con colores del brand
- [x] Validación antes de avanzar al paso 2
- [x] Limpiar estado al cerrar drawer
- [x] Guardar snapshots en ngOnDestroy
- [x] Restaurar snapshots en ngOnInit

---

## 🎨 Estilos del Brand

Los colores del brand ya están aplicados en `generar-tramite.scss`:

```scss
// Step activo
--brand-500: Fondo azul
--brand-600: Texto azul oscuro

// Step completado
--brand-500: Fondo azul

// Separador
--brand-200: Línea azul claro

// Checkbox
--brand-500: Fondo y borde azul
--brand-400: Borde al hover
```

---

## 🔧 Mantenimiento Futuro

### Para agregar más campos:
1. Actualizar interfaces `DatosTramiteSnapshot` o `FormatoSolicitudSnapshot`
2. Agregar campos en `buildSnapshot()`
3. Agregar campos en `restoreSnapshot()`
4. Actualizar formulario HTML

### Para agregar más steps:
1. Crear nueva interface snapshot
2. Agregar signal en TramiteStateService
3. Implementar ngOnInit/ngOnDestroy en nuevo step
4. Agregar step en generar-tramite.html

---

## 🐛 Debugging

Si los datos no persisten:
1. Verificar que `ngOnDestroy()` se ejecuta correctamente
2. Verificar que `ngOnInit()` restaura el snapshot
3. Revisar DevTools → Components → TramiteStateService signals
4. Verificar que no hay errores de consola

Si no carga en modo edición:
1. Verificar que `idTramite > 0`
2. Verificar que `selectTramite()` tiene datos
3. Revisar llamada a API en cargarFormatoExistente()
4. Verificar que patchTramiteParaEdicion() se ejecuta

---

## 📚 Archivos Modificados

1. ✅ `tramites/domain/services/tramite-state.service.ts`
2. ✅ `tramites/ui/generar-tramite/generar-tramite.ts`
3. ✅ `tramites/ui/generar-tramite/datos-tramite/datos-tramite.ts`
4. ✅ `tramites/ui/generar-tramite/formato-solicitud/formato-solicitud.ts`
5. ✅ `tramites/ui/generar-tramite/generar-tramite.scss` (sin cambios, ya estaba bien)

---

## 🎉 Resultado Final

✅ Sistema completo de crear/editar con:
- Persistencia entre steps
- Precarga automática en edición
- Botones contextuales
- Estilos del brand
- Navegación fluida
- Estado limpio al cerrar

**Todo funciona según los requerimientos especificados.**
