import typescript from '@rollup/plugin-typescript';
import { join } from 'path';

export default [
    {
        input: join(__dirname, 'index.ts'),
        output: {
            file: join(__dirname, 'dist/index.js'),
            format: 'es'
        },
        plugins: [
            typescript({
                tsconfig: join(__dirname, '../../tsconfig.json')
            })
        ]
    }
]