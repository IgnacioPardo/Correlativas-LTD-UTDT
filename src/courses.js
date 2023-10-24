import React from 'react';
import { MarkerType } from 'react-flow-renderer';

export const year_labels = [{
    id: 'a1',
    type: 'year',
    data: {
        label: (
            <>1er Año</>
        ),
    },
    position: { x: 100, y: 0 },
},
{
    id: 'a2',
    type: 'year',
    data: {
        label: (
            <>2do Año</>
        ),
    },
    position: { x: 500, y: 0 },
},
{
    id: 'a3',
    type: 'year',
    data: {
        label: (
            <>3er Año</>
        ),
    },
    position: { x: 900, y: 0 },
},
{
    id: 'a4',
    type: 'year',
    data: {
        label: (
            <>4to Año</>
        ),
    },
    position: { x: 1300, y: 0 },
},
]

export const nodes = [{
    id: '1',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#000',
        background: '#D9B600',
        done: true,
        label: (
            <>TD I: Introducción a la Programación</>
        ),
    },
    position: { x: 0, y: 400 },
},
{
    id: '2',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#0D037B',
        done: true,
        label: (
            <>Matemática I</>
        ),
    },
    position: { x: 0, y: 300 },
},
{
    id: '3',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#B64A0D',
        done: true,
        label: (
            <>Economía I</>
        ),
    },
    position: { x: 0, y: 200 },
},
{
    id: '4',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#232323',
        done: true,
        label: (
            <>Historia de Occidente a partir de la Modernidad</>
        ),
    },
    position: { x: 0, y: 100 },
},
{
    id: '5',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#000',
        background: '#D9B600',
        done: true,
        label: (
            <>TD II: Sistemas de Computación</>
        ),
    },
    position: { x: 200, y: 500 },
},
{
    id: '6',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#0D037B',
        done: true,
        label: (
            <>Matemática II</>
        ),
    },
    position: { x: 200, y: 400 },
},
{
    id: '7',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#0D037B',
        done: true,
        label: (
            <>Algebra para Computación</>
        ),
    },
    position: { x: 200, y: 200 },
},
{
    id: '8',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: true,
        label: (
            <>Neurociencias y Psicología Experimental</>
        ),
    },
    position: { x: 200, y: 300 },
},
{
    id: '9',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#232323',
        done: true,
        label: (
            <>Comprensión de Textos y Escritura</>
        ),
    },
    position: { x: 200, y: 100 },
},
{
    id: '10',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#000',
        background: '#D9B600',
        done: true,
        label: (
            <>TD III: Algoritmos y Estructuras de Datos</>
        ),
    },
    position: { x: 400, y: 400 },
},
{
    id: '11',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#7B035A',
        done: true,
        label: (
            <>Introducción al Diseño</>
        ),
    },
    position: { x: 400, y: 300 },
},
{
    id: '12',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#0D037B',
        done: true,
        label: (
            <>Introducción a la Estadística</>
        ),
    },
    position: { x: 400, y: 200 },
},
{
    id: '13',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#B64A0D',
        done: false,
        label: (
            <>Microeconomía</>
        ),
    },
    position: { x: 400, y: 100 },
},
{
    id: '14',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#000',
        background: '#D9B600',
        done: false,
        label: (
            <>TD IV: Redes de Computadoras</>
        ),
    },
    position: { x: 600, y: 400 },
},
{
    id: '15',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#0D037B',
        done: false,
        label: (
            <>Inferencia Estadística</>
        ),
    },
    position: { x: 600, y: 300 },
},
{
    id: '16',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: false,
        label: (
            <>Aspectos Éticos y Legales en Tecnología y Sociedad</>
        ),
    },
    position: { x: 600, y: 200 },
},
{
    id: '17',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#B64A0D',
        done: false,
        label: (
            <>Introducción a la Contabilidad y las Finanzas</>
        ),
    },
    position: { x: 600, y: 100 },
},
{
    id: '18',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#000',
        background: '#D9B600',
        done: false,
        label: (
            <>TD V: Diseño de Algoritmos</>
        ),
    },
    position: { x: 800, y: 400 },
},
{
    id: '19',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#0D037B',
        done: false,
        label: (
            <>Métodos Computacionales</>
        ),
    },
    position: { x: 800, y: 300 },
},
{
    id: '20',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#B64A0D',
        done: false,
        label: (
            <>Gestión de Proyectos Digitales</>
        ),
    },
    position: { x: 800, y: 200 },
},
{
    id: '21',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#7B035A',
        done: false,
        label: (
            <>Visualización de Datos</>
        ),
    },
    position: { x: 800, y: 100 },
},
{
    id: '22',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#000',
        background: '#D9B600',
        done: false,
        label: (
            <>TD VI: Inteligencia Artificial</>
        ),
    },
    position: { x: 1000, y: 500 },
},
{
    id: '23',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: false,
        label: (
            <>Teoría de las Decisiones</>
        ),
    },
    position: { x: 1000, y: 400 },
},
{
    id: '24',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#B64A0D',
        done: false,
        label: (
            <>Aplicaciones Computacionales en Negocios</>
        ),
    },
    position: { x: 1000, y: 300 },
},
{
    id: '25',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#7B035A',
        done: false,
        label: (
            <>Diseño Interactivo</>
        ),
    },
    position: { x: 1000, y: 200 },
},
{
    id: '26',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#232323',
        done: false,
        label: (
            <>Expresión Oral y Escrita</>
        ),
    },
    position: { x: 1000, y: 100 },
},
{
    id: '27',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#000',
        background: '#D9B600',
        done: false,
        label: (
            <>TD VII: Ingeniería de Datos</>
        ),
    },
    position: { x: 1200, y: 400 },
},
{
    id: '28',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#B64A0D',
        done: false,
        label: (
            <>Taller de Emprendedorismo</>
        ),
    },
    position: { x: 1200, y: 300 },
},
{
    id: '29',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: false,
        label: (
            <>Curso de Campo Menor</>
        ),
    },
    position: { x: 1200, y: 200 },
},
{
    id: '30',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: false,
        label: (
            <>Curso de Campo Menor</>
        ),
    },
    position: { x: 1200, y: 100 },
},
{
    id: '31',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#000',
        background: '#D9B600',
        done: false,
        label: (
            <>TD VIII: Proyecto Final</>
        ),
    },
    position: { x: 1400, y: 400 },
},
{
    id: '32',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: false,
        label: (
            <>Inteligencia Artificial y Neurociencias</>
        ),
    },
    position: { x: 1400, y: 300 },
},
{
    id: '33',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: false,
        label: (
            <>Curso de Campo Menor</>
        ),
    },
    position: { x: 1400, y: 200 },
},
{
    id: '34',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: false,
        label: (
            <>Curso de Campo Menor</>
        ),
    },
    position: { x: 1400, y: 100 },
}]

export const edges = [
    { id: '1-5', source: '1', target: '5', markerEnd: { type: MarkerType.ArrowClosed, }, animated: true, },
    { id: '12-17', source: '12', target: '17', markerEnd: { type: MarkerType.ArrowClosed, }, animated: true, },
    { id: '1-7', source: '2', target: '7', markerEnd: { type: MarkerType.ArrowClosed, }, animated: true, },
    { id: '2-6', source: '2', target: '6', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '1-21', source: '1', target: '21', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '1-10', source: '1', target: '10', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '2-10', source: '2', target: '10', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '7-10', source: '7', target: '10', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '6-12', source: '6', target: '12', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '3-13', source: '3', target: '13', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '5-14', source: '5', target: '14', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '12-15', source: '12', target: '15', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '1-15', source: '1', target: '15', markerEnd: { type: MarkerType.ArrowClosed, }, animated: true, },
    { id: '10-18', source: '10', target: '18', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '6-19', source: '6', target: '19', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '10-19', source: '10', target: '19', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '1-20', source: '1', target: '20', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '11-21', source: '11', target: '21', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '10-22', source: '10', target: '22', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '15-22', source: '15', target: '22', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '13-23', source: '13', target: '23', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '18-24', source: '18', target: '24', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '19-24', source: '19', target: '24', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '11-25', source: '11', target: '25', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '10-27', source: '10', target: '27', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '14-27', source: '14', target: '27', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '8-32', source: '8', target: '32', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '10-32', source: '10', target: '32', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '23-32', source: '23', target: '32', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '14-31', source: '14', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '18-31', source: '18', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }, },
    { id: '20-31', source: '20', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }, animated: true, },
    { id: '22-32', source: '22', target: '32', markerEnd: { type: MarkerType.ArrowClosed, }, animated: true, },
]
