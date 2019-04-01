export const navigation = [
  {
    name: 'Inicio',
    url: '/inicio',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: ''
    }
  },
  {
    title: true,
    name: 'Casos'
  },
  {
    name: 'Registrar caso',
    url: '/registrar-caso',
    icon: 'icon-note',
    permisos : [
      {
        accion : 'api/casos',
        add : true
      } 
    ]
  },
  {
    name: 'Proceso de atención',
    url: '/atencion',
    icon: 'icon-list',
    
  },
  {
    name: 'Informe avances',
    url: '/informe-avances',
    icon: 'icon-bell',
    permisos : [
      {
        accion : 'proceso_atencion_16',
        view : true
      } 
    ]
  },
  {
    name: 'Semaforización',
    url: '/semaforizacion',
    icon: 'icon-book-open',
    permisos : [
      {
        accion : 'api/semaforizacion',        
        view: true
      } 
    ]
  },
  {
    name: 'Primera priorización',
    icon: 'icon-menu',
    url: '/primerapriorizacion',    
    
    children: [
      {
        name: 'Priorización',
        url: '/primerapriorizacion',
        icon: 'icon-cursor',
        permisos : [
          {
            accion : 'priorizacion_primera',
            add : true
          }       
        ],
      },
      {
        name: 'Análisis de actores',
        icon: 'icon-target',
        url: '/mapeo',
        permisos : [
          {
            accion : 'api/mapeos',
            view : true
          },
          {
            accion : 'priorizacion_nacional',
            add : true
          }
        ],
        children : [
          {
            name: 'Individual',
            url: '/mapeo/individual',
            icon: 'icon-map',
          },
          {
            name: 'Colectivo',
            url: '/mapeo/colectivo',
            icon: 'icon-layers',
          }
        ]
      },
      {
        name: 'Acciones de atención',
        url: '/acciones',
        icon: 'icon-pencil',
        permisos : [
          {
            accion : 'api/accionatencion',
            view : true
          } 
        ]
      }
    ]
  },
  {
    name: 'Análisis nacional',
    url: '/analisisnacional',
    icon: 'icon-eye',    
    children: [
      {
        name: 'Segunda priorización',
        url: '/segundapriorizacion',
        icon: 'icon-menu',
        permisos : [
          {
            accion : 'priorizacion_nacional',
            view : true
          },
          {
            accion : 'api/planatencion',
            view : true
          }
        ],
        children: [
          {
            name: 'Priorización',
            url: '/priorizar',
            icon: 'icon-cursor',
            permisos : [
              {
                accion : 'priorizacion_nacional',
                add : true
              } 
            ],
          },
          {
            name: 'Plan de atención',
            url: '/planatencion',
            icon: 'icon-pencil',
            permisos : [
              {
                accion : 'api/planatencion',
                view : true
              } 
            ],
          }
        ]
      },
      {
        name: 'Análisis estratégico',
        url: '/analisisestrategico',
        icon: 'icon-speech',
        permisos : [
          {
            accion : 'api/analisis',
            add : true
          },
          {
            accion : 'api/medios',
            add : true
          },
          {
            accion : 'api/alertivos',
            add : true
          } 
        ]
      },
      {
        name: 'Atención conflictividad',
        url: '/conflictividad',
        icon: 'icon-puzzle',
        permisos : [
          {
            accion : 'api/conflictividad',
            view : true
          } 
        ]
      }
    ]
  },
  {
    name: 'Finalización de casos',
    url: '/fincasos',
    icon: 'icon-check',
    permisos : [
      {
        accion : 'proceso_atencion_19',
        add : true
      }, 
      {
        accion : 'proceso_atencion_20',
        add : true
      }, 
      {
        accion : 'proceso_atencion_21',
        add : true
      }, 
      {
        accion : 'proceso_atencion_22',
        add : true
      }, 
      {
        accion : 'proceso_atencion_23',
        add : true
      }, 
    ],
    
  },
  {
    name: 'Reportes',
    url: '/reportes',
    icon: 'icon-pie-chart',
    permisos : [
      {
        accion : 'api/reportes',
        view : true
      },
      {
        accion : 'api/reportes/atencion',
        view : true
      }
    ]
  },
  {
    name: 'Configuración',
    url: '/configuracion',
    icon: 'icon-wrench',
    permisos : [
      {
        accion : 'api/configuracion',
        add : true
      } 
    ],
  }
];
