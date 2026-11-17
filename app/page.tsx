import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Award, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Gestión de Calidad ISO 9001</h1>
              <p className="text-lg md:text-xl text-slate-300">
              Un SGC certificado con ISO 9001:2015 impulsa el rendimiento de su organización, eleva la 
              satisfacción del cliente y fortalece su competitividad. Garantiza la mejora continua de sus 
              productos y servicios de manera sistemática.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                
              </div>
            </div>
            <div className="flex-1">
              <img
                src="/iso9001.png?height=400&width=500"
                alt="ISO 9001 Management"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué es la ISO 9001?</h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8"> {/* Añadido mb-8 (2rem/32px) */}
            ISO 9001 es una norma reconocida internacionalmente para la gestión de la calidad. 
            La abreviatura "ISO" significa Organización Internacional de Normalización, mientras que "9001" 
            es el número de la norma. ISO 9001 se publicó inicialmente en 1987 y la organización la actualiza 
            continuamente, la más reciente en 2015. Con estas actualizaciones, ISO responde a los cambios técnicos 
            y legales, como la digitalización de la vida empresarial.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-100 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Beneficios de la ISO 9001</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mejora Continua</h3>
              <p className="text-slate-600">
                Establece procesos para identificar áreas de mejora y optimizar constantemente tu sistema de gestión.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Award className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Reconocimiento Internacional</h3>
              <p className="text-slate-600">
                Obtener una certificación reconocida globalmente que demuestra tu compromiso con la calidad.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <BarChart3 className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Eficiencia Operativa</h3>
              <p className="text-slate-600">
                Optimizar tus procesos internos, reduce errores y minimiza costos operativos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Proceso de certificación</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
            La obtención de la certificación ISO 9001 generalmente se realiza con la ayuda de una empresa de 
            certificación acreditada e implica varios pasos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Paso 1: Preparación/Inventario</h3>
                <p className="text-slate-600">
                La preparación para la certificación es un primer paso importante. Las empresas deben asegurarse de cumplir con todos los requisitos fundamentales de la norma y de que sus sistemas de gestión de la calidad estén adecuadamente documentados. Un análisis GAP puede ayudar a reconocer y cerrar las brechas en el sistema de gestión de calidad de una empresa.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Paso 2: Auditoría inicial</h3>
                <p className="text-slate-600">
                El siguiente paso es realizar auditorías iniciales por parte de la empresa certificadora. Los auditores visitan la empresa y verifican que el sistema de gestión de la calidad cumpla con los requisitos de la norma ISO 9001. Los auditores realizan entrevistas con el personal y revisan la documentación para asegurarse de que la empresa cumpla con todos los requisitos.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Paso 3: Informes y medidas correctivas</h3>
                <p className="text-slate-600">
                Una vez finalizada la auditoría, la empresa certificadora elabora un informe que incorpora las no conformidades o deficiencias destacadas en el sistema de gestión de la calidad de la empresa. Luego, la empresa toma medidas correctivas para abordar las desviaciones identificadas y actualizar el sistema.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Paso 4: Segunda auditoría</h3>
                <p className="text-slate-600">
                Una vez que la empresa ha implementado las medidas correctivas necesarias, se realiza una segunda auditoría. Los auditores revisan el sistema de gestión de la calidad una vez más para asegurarse de que todas las medidas correctivas han sido efectivas y que el sistema cumple con las necesidades de la norma ISO 9001.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Paso 5: Certificación</h3>
                <p className="text-slate-600">
                Si la empresa supera con éxito la segunda auditoría, la empresa certificadora emitirá la certificación ISO 9001. La certificación normalmente es válida por tres años, después de los cuales debe renovarse.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Paso 6: Auditorías de vigilancia</h3>
                <p className="text-slate-600">
                Las auditorías de seguimiento se realizan durante el período de validez de la certificación para garantizar que la empresa siga cumpliendo los requisitos de la norma ISO 9001. Estas auditorías de seguimiento suelen realizarse una vez al año.
                </p>
              </div>
            </div>
          </div>
       
      </section>
    </div>
  )
}
