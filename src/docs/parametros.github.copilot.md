# PROMPT ESTRICTO – GENERACIÓN DE CRUD (ANGULAR 20)

Quiero que generes un CRUD siguiendo estrictamente las reglas de este proyecto.
No debes asumir nada.
Siempre debes preguntar antes de generar código si algo no está claro.

---

# STACK OBLIGATORIO

* Angular: 20
* PrimeNG: 20
* PrimeFlex: usar para estilos
* Formularios: FormControl
* Reactividad: Signals (100%)
* HTTP: Observables (NO usar try/catch)

---

# ARQUITECTURA (OBLIGATORIA)

## DOMAIN

Contiene:

* entities
* signals
* validation

Reglas:

* Prohibido usar `any`
* Tipado fuerte en todo
* Signals centralizados
* Validaciones en `domain/validation`
* No usar DTO aquí

---

## INFRASTRUCTURE

Contiene:

* dto
* mappers
* services
* repositories (implements)

Reglas:

* DTO representa backend
* Mapper transforma DTO → Entity
* Services usan HttpClient + Observables
* No usar try/catch
* Usar next y error
* Repository implementa los ports

---

## APPLICATION

Contiene:

* ports
* useCases

Reglas:

* ports = contratos
* useCases = lógica de negocio
* No usar Http directamente

---

## UI

Contiene:

* componentes visuales

Reglas:

* Usar Signals
* Usar FormControl
* No lógica de negocio compleja
* Consumir useCases

---

# REACTIVIDAD

* Todo debe usar Signals
* Estado centralizado en `domain/signals`

---

# OBSERVABLES

* Usar Observables en services
* Manejar con next y error
* No usar try/catch
* No usar async/await

---

# UI / ESTILOS

* Usar PrimeFlex
* No abusar de SCSS
* SCSS solo si es necesario
* No usar iconos
* UI limpia y consistente

---

# REUTILIZACIÓN (ALTA PRIORIDAD)

Antes de crear cualquier componente, lógica o estructura:

1. Revisar siempre la carpeta `/shared`
2. Reutilizar componentes existentes
3. No duplicar componentes

---

## SI ENCUENTRAS ALGO SIMILAR

* Adaptarlo usando:

  * Inputs
  * Outputs
  * Signals
* No crear uno nuevo

---

## SI ALGO ES REUTILIZABLE

* Crear el componente en `/shared`
* Hacerlo genérico
* Parametrizar con:

  * Inputs (Signals)
  * Outputs

---

## PROHIBIDO

* Duplicar componentes
* Ignorar `/shared`
* Crear componentes específicos si pueden ser genéricos

---

# FORMULARIOS

* Usar FormControl
* Validaciones desde `domain/validation`
* Usar RegExp
* No validar en HTML

---

# PERMISOS

* Leer desde localStorage
* Usar guards
* Proteger rutas

---

# CRUD – ESTRUCTURA OBLIGATORIA

## DOMAIN

* entity
* signal (list, loading, error)
* validation

## INFRASTRUCTURE

* dto
* mapper
* service
* repository

## APPLICATION

* port
* useCases:

  * create
  * update
  * delete
  * getAll
  * getById

## UI

* listado
* formulario

---

# REGLAS CRÍTICAS

* No usar `any`
* No instalar nada
* No desinstalar nada
* No cambiar arquitectura
* No usar iconos
* Todo debe ser tipado
* Usar Signals en todo

---

# OBLIGATORIO ANTES DE GENERAR

Debes preguntar siempre:

1. Nombre del módulo
2. Endpoints
3. Request / Response
4. Campos del formulario
5. Validaciones
6. Permisos (si aplica)

Si falta algo, no generar código.

---

# OBJETIVO

Generar código:

* limpio
* escalable
* reactivo
* reutilizable
* alineado a arquitectura limpia

---

# REGLA FINAL

Si no estás seguro de algo, pregunta.
Si existe algo en `/shared`, reutiliza.
Si algo se repite, muévelo a `/shared`.
