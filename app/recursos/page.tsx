import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Video, Calendar } from "lucide-react";

export default function RecursosPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Recursos ISO 9001</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Accede a guías, plantillas y materiales formativos para implementar y mantener tu sistema de gestión de
          calidad.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {/* Card 1 - Guías y Manuales */}
        <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow w-full max-w-md">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle>Guías y Manuales</CardTitle>
            <CardDescription>Documentos explicativos sobre los requisitos y procesos de ISO 9001.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-md p-3 hover:bg-slate-50">
              <h4 className="font-medium">Guía de implementación ISO 9001:2015</h4>
              <p className="text-sm text-slate-500 mt-1"></p>
              <Button variant="ghost" size="sm" className="mt-2" asChild>
                <a 
                  href="https://www.nqa.com/es-es/certification/standards/iso-9001/implementation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >                  
                  Ver Guía
                </a>
              </Button>
            </div>
            <div className="border rounded-md p-3 hover:bg-slate-50">
              <h4 className="font-medium">Manual de auditoría interna</h4>
              <p className="text-sm text-slate-500 mt-1"></p>
              <Button variant="ghost" size="sm" className="mt-2">
              <a 
                  href="https://www.nqa.com/es-es/certification/standards/iso-9001/implementation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >              
                Ver Manual
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card 2 - Videotutoriales */}
        <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow w-full max-w-md">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Video className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle>Videotutoriales</CardTitle>
            <CardDescription>Contenido formativo en video sobre aspectos clave de ISO 9001.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-md p-3 hover:bg-slate-50">
              <h4 className="font-medium">Introducción a ISO 9001:2015</h4>
              <p className="text-sm text-slate-500 mt-1">16 minutos</p>
              <Button variant="ghost" size="sm" className="mt-2" asChild>
                <a 
                  href="https://www.youtube.com/watch?v=yUSJ_ovqfPc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Ver video
                </a>
              </Button>
            </div>
            <div className="border rounded-md p-3 hover:bg-slate-50">
              <h4 className="font-medium">Gestión de riesgos y oportunidades</h4>
              <p className="text-sm text-slate-500 mt-1">14 minutos</p>
              <Button variant="ghost" size="sm" className="mt-2" asChild>
                <a 
                  href="https://www.youtube.com/watch?v=sUSyyPrUKEs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Ver video
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}