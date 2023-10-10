import React from 'react';
import {squareStates} from "../../Constants";
//Chess pieces originally by User:Cburnett in a sprite image for use in computer applications.

export default {
    wP: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="45"
            height="45"
        >
            <path
                d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "
                style={{
                    opacity: '1',
                    fill: '#ffffff',
                    fillOpacity: '1',
                    fillRule: 'nonzero',
                    stroke: '#000000',
                    strokeWidth: '1.5',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: '4',
                    strokeDasharray: 'none',
                    strokeOpacity: '1'
                }}
            />
        </svg>
    ),
    wR: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="45"
            height="45"
        >
            <g
                style={{
                    opacity: '1',
                    fill: '#ffffff',
                    fillOpacity: '1',
                    fillRule: 'evenodd',
                    stroke: '#000000',
                    strokeWidth: '1.5',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: '4',
                    strokeDasharray: 'none',
                    strokeOpacity: '1'
                }}
            >
                <path
                    d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
                    style={{
                        strokeLinecap: 'butt'
                    }}
                />
                <path
                    d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
                    style={{
                        strokeLinecap: 'butt'
                    }}
                />
                <path
                    d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"
                    style={{
                        strokeLinecap: 'butt'
                    }}
                />
                <path d="M 34,14 L 31,17 L 14,17 L 11,14"/>
                <path
                    d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"
                    style={{
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter'
                    }}
                />
                <path d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5"/>
                <path
                    d="M 11,14 L 34,14"
                    style={{
                        fill: 'none',
                        stroke: '#000000',
                        strokeLinejoin: 'miter'
                    }}
                />
            </g>
        </svg>
    ),
    wN: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="45"
            height="45"
        >
            <g
                style={{
                    opacity: '1',
                    fill: 'none',
                    fillOpacity: '1',
                    fillRule: 'evenodd',
                    stroke: '#000000',
                    strokeWidth: '1.5',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: '4',
                    strokeDasharray: 'none',
                    strokeOpacity: '1'
                }}
            >
                <path
                    d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
                    style={{
                        fill: '#ffffff',
                        stroke: '#000000'
                    }}
                />
                <path
                    d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
                    style={{
                        fill: '#ffffff',
                        stroke: '#000000'
                    }}
                />
                <path
                    d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
                    style={{
                        fill: '#000000',
                        stroke: '#000000'
                    }}
                />
                <path
                    d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
                    transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
                    style={{
                        fill: '#000000',
                        stroke: '#000000'
                    }}
                />
            </g>
        </svg>
    ),
    wB: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="45"
            height="45"
        >
            <g
                style={{
                    opacity: '1',
                    fill: 'none',
                    fillRule: 'evenodd',
                    fillOpacity: '1',
                    stroke: '#000000',
                    strokeWidth: '1.5',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: '4',
                    strokeDasharray: 'none',
                    strokeOpacity: '1'
                }}
            >
                <g
                    style={{
                        fill: '#ffffff',
                        stroke: '#000000',
                        strokeLinecap: 'butt'
                    }}
                >
                    <path
                        d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z"/>
                    <path
                        d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"/>
                    <path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"/>
                </g>
                <path
                    d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
                    style={{
                        fill: 'none',
                        stroke: '#000000',
                        strokeLinejoin: 'miter'
                    }}
                />
            </g>
        </svg>
    ),
    wQ: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="45"
            height="45"
        >
            <g
                style={{
                    opacity: '1',
                    fill: '#ffffff',
                    fillOpacity: '1',
                    fillRule: 'evenodd',
                    stroke: '#000000',
                    strokeWidth: '1.5',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: '4',
                    strokeDasharray: 'none',
                    strokeOpacity: '1'
                }}
            >
                <path
                    d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
                    transform="translate(-1,-1)"
                />
                <path
                    d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
                    transform="translate(15.5,-5.5)"
                />
                <path
                    d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
                    transform="translate(32,-1)"
                />
                <path
                    d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
                    transform="translate(7,-4.5)"
                />
                <path
                    d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
                    transform="translate(24,-4)"
                />
                <path
                    d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,9.5 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z "
                    style={{
                        strokeLinecap: 'butt'
                    }}
                />
                <path
                    d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z "
                    style={{
                        strokeLinecap: 'butt'
                    }}
                />
                <path d="M 11.5,30 C 15,29 30,29 33.5,30" style={{fill: 'none'}}/>
                <path
                    d="M 12,33.5 C 18,32.5 27,32.5 33,33.5"
                    style={{fill: 'none'}}
                />
            </g>
        </svg>
    ),
    wK: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="45"
            height="45"
        >
            <g
                style={{
                    fill: 'none',
                    fillOpacity: '1',
                    fillRule: 'evenodd',
                    stroke: '#000000',
                    strokeWidth: '1.5',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: '4',
                    strokeDasharray: 'none',
                    strokeOpacity: '1'
                }}
            >
                <path
                    d="M 22.5,11.63 L 22.5,6"
                    style={{
                        fill: 'none',
                        stroke: '#000000',
                        strokeLinejoin: 'miter'
                    }}
                />
                <path
                    d="M 20,8 L 25,8"
                    style={{
                        fill: 'none',
                        stroke: '#000000',
                        strokeLinejoin: 'miter'
                    }}
                />
                <path
                    d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
                    style={{
                        fill: '#ffffff',
                        stroke: '#000000',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter'
                    }}
                />
                <path
                    d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "
                    style={{
                        fill: '#ffffff',
                        stroke: '#000000'
                    }}
                />
                <path
                    d="M 11.5,30 C 17,27 27,27 32.5,30"
                    style={{
                        fill: 'none',
                        stroke: '#000000'
                    }}
                />
                <path
                    d="M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5"
                    style={{
                        fill: 'none',
                        stroke: '#000000'
                    }}
                />
                <path
                    d="M 11.5,37 C 17,34 27,34 32.5,37"
                    style={{
                        fill: 'none',
                        stroke: '#000000'
                    }}
                />
            </g>
        </svg>
    ),
    bP: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="45"
            height="45"
        >
            <path
                d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "
                style={{
                    opacity: '1',
                    fill: '#000000',
                    fillOpacity: '1',
                    fillRule: 'nonzero',
                    stroke: '#000000',
                    strokeWidth: '1.5',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: '4',
                    strokeDasharray: 'none',
                    strokeOpacity: '1'
                }}
            />
        </svg>
    ),
    bR: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="45"
            height="45"
        >
            <g
                style={{
                    opacity: '1',
                    fill: '#000000',
                    fillOpacity: '1',
                    fillRule: 'evenodd',
                    stroke: '#000000',
                    strokeWidth: '1.5',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: '4',
                    strokeDasharray: 'none',
                    strokeOpacity: '1'
                }}
            >
                <path
                    d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
                    style={{
                        strokeLinecap: 'butt'
                    }}
                />
                <path
                    d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z "
                    style={{
                        strokeLinecap: 'butt'
                    }}
                />
                <path
                    d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
                    style={{
                        strokeLinecap: 'butt'
                    }}
                />
                <path
                    d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z "
                    style={{
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter'
                    }}
                />
                <path
                    d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z "
                    style={{
                        strokeLinecap: 'butt'
                    }}
                />
                <path
                    d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z "
                    style={{
                        strokeLinecap: 'butt'
                    }}
                />
                <path
                    d="M 12,35.5 L 33,35.5 L 33,35.5"
                    style={{
                        fill: 'none',
                        stroke: '#ffffff',
                        strokeWidth: '1',
                        strokeLinejoin: 'miter'
                    }}
                />
                <path
                    d="M 13,31.5 L 32,31.5"
                    style={{
                        fill: 'none',
                        stroke: '#ffffff',
                        strokeWidth: '1',
                        strokeLinejoin: 'miter'
                    }}
                />
                <path
                    d="M 14,29.5 L 31,29.5"
                    style={{
                        fill: 'none',
                        stroke: '#ffffff',
                        strokeWidth: '1',
                        strokeLinejoin: 'miter'
                    }}
                />
                <path
                    d="M 14,16.5 L 31,16.5"
                    style={{
                        fill: 'none',
                        stroke: '#ffffff',
                        strokeWidth: '1',
                        strokeLinejoin: 'miter'
                    }}
                />
                <path
                    d="M 11,14 L 34,14"
                    style={{
                        fill: 'none',
                        stroke: '#ffffff',
                        strokeWidth: '1',
                        strokeLinejoin: 'miter'
                    }}
                />
            </g>
        </svg>
    ),
    bN: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="45"
            height="45"
        >
            <g
                style={{
                    opacity: '1',
                    fill: 'none',
                    fillOpacity: '1',
                    fillRule: 'evenodd',
                    stroke: '#000000',
                    strokeWidth: '1.5',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: '4',
                    strokeDasharray: 'none',
                    strokeOpacity: '1'
                }}
            >
                <path
                    d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
                    style={{
                        fill: '#000000',
                        stroke: '#000000'
                    }}
                />
                <path
                    d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
                    style={{
                        fill: '#000000',
                        stroke: '#000000'
                    }}
                />
                <path
                    d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
                    style={{
                        fill: '#ffffff',
                        stroke: '#ffffff'
                    }}
                />
                <path
                    d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
                    transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
                    style={{
                        fill: '#ffffff',
                        stroke: '#ffffff'
                    }}
                />
                <path
                    d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z "
                    style={{
                        fill: '#ffffff',
                        stroke: 'none'
                    }}
                />
            </g>
        </svg>
    ),
    bB: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="45"
            height="45"
        >
            <g
                style={{
                    opacity: '1',
                    fill: 'none',
                    fillRule: 'evenodd',
                    fillOpacity: '1',
                    stroke: '#000000',
                    strokeWidth: '1.5',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: '4',
                    strokeDasharray: 'none',
                    strokeOpacity: '1'
                }}
            >
                <g
                    style={{
                        fill: '#000000',
                        stroke: '#000000',
                        strokeLinecap: 'butt'
                    }}
                >
                    <path
                        d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z"/>
                    <path
                        d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"/>
                    <path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"/>
                </g>
                <path
                    d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
                    style={{
                        fill: 'none',
                        stroke: '#ffffff',
                        strokeLinejoin: 'miter'
                    }}
                />
            </g>
        </svg>
    ),
    bQ: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="45"
            height="45"
        >
            <g
                style={{
                    opacity: '1',
                    fill: '#000000',
                    fillOpacity: '1',
                    fillRule: 'evenodd',
                    stroke: '#000000',
                    strokeWidth: '1.5',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: '4',
                    strokeDasharray: 'none',
                    strokeOpacity: '1'
                }}
            >
                <g
                    style={{
                        fill: '#000000',
                        stroke: 'none'
                    }}
                >
                    <circle cx="6" cy="12" r="2.75"/>
                    <circle cx="14" cy="9" r="2.75"/>
                    <circle cx="22.5" cy="8" r="2.75"/>
                    <circle cx="31" cy="9" r="2.75"/>
                    <circle cx="39" cy="12" r="2.75"/>
                </g>
                <path
                    d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
                    style={{
                        strokeLinecap: 'butt',
                        stroke: '#000000'
                    }}
                />
                <path
                    d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"
                    style={{
                        strokeLinecap: 'butt'
                    }}
                />
                <path
                    d="M 11,38.5 A 35,35 1 0 0 34,38.5"
                    style={{
                        fill: 'none',
                        stroke: '#000000',
                        strokeLinecap: 'butt'
                    }}
                />
                <path
                    d="M 11,29 A 35,35 1 0 1 34,29"
                    style={{
                        fill: 'none',
                        stroke: '#ffffff'
                    }}
                />
                <path
                    d="M 12.5,31.5 L 32.5,31.5"
                    style={{
                        fill: 'none',
                        stroke: '#ffffff'
                    }}
                />
                <path
                    d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5"
                    style={{
                        fill: 'none',
                        stroke: '#ffffff'
                    }}
                />
                <path
                    d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5"
                    style={{
                        fill: 'none',
                        stroke: '#ffffff'
                    }}
                />
            </g>
        </svg>
    ),
    bK: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="45"
            height="45"
        >
            <g
                style={{
                    fill: 'none',
                    fillOpacity: '1',
                    fillRule: 'evenodd',
                    stroke: '#000000',
                    strokeWidth: '1.5',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: '4',
                    strokeDasharray: 'none',
                    strokeOpacity: '1'
                }}
            >
                <path
                    d="M 22.5,11.63 L 22.5,6"
                    style={{
                        fill: 'none',
                        stroke: '#000000',
                        strokeLinejoin: 'miter'
                    }}
                    id="path6570"
                />
                <path
                    d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
                    style={{
                        fill: '#000000',
                        fillOpacity: '1',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter'
                    }}
                />
                <path
                    d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "
                    style={{
                        fill: '#000000',
                        stroke: '#000000'
                    }}
                />
                <path
                    d="M 20,8 L 25,8"
                    style={{
                        fill: 'none',
                        stroke: '#000000',
                        strokeLinejoin: 'miter'
                    }}
                />
                <path
                    d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.51,26.6 L 22.5,24.5 C 20,18 9.906,14 6.997,19.85 C 4.5,25.5 11.85,28.85 11.85,28.85"
                    style={{
                        fill: 'none',
                        stroke: '#ffffff'
                    }}
                />
                <path
                    d="M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37"
                    style={{
                        fill: 'none',
                        stroke: '#ffffff'
                    }}
                />
            </g>
        </svg>
    ),
    [squareStates.UNKNOWN]: (
      <svg
        fill="#4a4949"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="45"
        height="45"
        viewBox="-200 -230 1400 1400"
        xmlSpace="preserve"
      >
        <g>
          <path d="M502.29,788.199h-47c-33.1,0-60,26.9-60,60v64.9c0,33.1,26.9,60,60,60h47c33.101,0,60-26.9,60-60v-64.9
            C562.29,815,535.391,788.199,502.29,788.199z"/>
          <path d="M170.89,285.8l86.7,10.8c27.5,3.4,53.6-12.4,63.5-38.3c12.5-32.7,29.9-58.5,52.2-77.3c31.601-26.6,70.9-40,117.9-40
            c48.7,0,87.5,12.8,116.3,38.3c28.8,25.6,43.1,56.2,43.1,92.1c0,25.8-8.1,49.4-24.3,70.8c-10.5,13.6-42.8,42.2-96.7,85.9
            c-54,43.7-89.899,83.099-107.899,118.099c-18.4,35.801-24.8,75.5-26.4,115.301c-1.399,34.1,25.8,62.5,60,62.5h49
            c31.2,0,57-23.9,59.8-54.9c2-22.299,5.7-39.199,11.301-50.699c9.399-19.701,33.699-45.701,72.699-78.1
            C723.59,477.8,772.79,428.4,795.891,392c23-36.3,34.6-74.8,34.6-115.5c0-73.5-31.3-138-94-193.4c-62.6-55.4-147-83.1-253-83.1
            c-100.8,0-182.1,27.3-244.1,82c-52.8,46.6-84.9,101.8-96.2,165.5C139.69,266.1,152.39,283.5,170.89,285.8z"/>
        </g>
        </svg>
    ),
  [squareStates.OCCUPIED]: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="50"
      height="50"
    >
      <path
            fill="#4a4949"
            stroke="#4a4949"
            d="M29.41,10.06,28,8.44l-2.37.94L26.74,6.9,25.46,5.26,23.8,7.13l-.08-2.61H21.2L20.48,6.9l-1.2-2.39H15a.24.24,0,0,0-.24.3l.67,2.8-2.33,2.5a.23.23,0,0,0,0,.26l.65,1.52-2.63,4.35a.25.25,0,0,0,.05.32l3.77,3a.26.26,0,0,0,.29,0l4.69-3.85a.89.89,0,0,1,.6-.2.94.94,0,0,1,.87.4,1.68,1.68,0,0,1-.13,1.2S16,29.82,15.77,30.43c-.8.39-1.23.85-1.23,1.32a1.17,1.17,0,0,0,.43.79l-.36.94,0,5.26a.24.24,0,0,0,.25.25l7-.38m7.55-28.55a6.6,6.6,0,0,0-4.33,11.58c-.44.24-.67.52-.67.8s.24.57.69.81A28.76,28.76,0,0,1,23.16,32c-.79.39-1.22.85-1.22,1.32a1.09,1.09,0,0,0,.43.79l-.51,1.31v3.88h0c.11,3,3.45,4.23,7.54,4.23s7.42-1.18,7.53-4.23h0V35.39c-.25-.39-.46-.78-.67-1.16a1.3,1.3,0,0,0,.6-.94c0-.57-.63-1.12-1.77-1.55a23.43,23.43,0,0,1-1.4-8.48c.45-.25.69-.53.7-.82s-.24-.56-.68-.8a6.6,6.6,0,0,0-4.32-11.58Zm0,0"/>
      <path fill="#000000" d="M16.61,10.1a.72.72,0,1,1,0,1.44.72.72,0,0,1,0-1.44Z"/>
    </svg>
  ),
};
