export class Alumno {
    constructor(
        public nombre: string, 
        public apellido: string, 
        public edad: number, 
        public materia: string,
        public fechaInscripcion: Date,
        public condicion: string
    )
    {
        
    }
}