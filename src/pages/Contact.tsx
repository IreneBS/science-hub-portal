
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío de formulario
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Responderemos a la brevedad posible.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="section-header">Contacto</h1>
        <p className="section-subheader mx-auto">
          ¿Tienes preguntas o quieres colaborar con nosotros? Contáctanos
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glass-panel h-full">
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
              <CardDescription>Completa el formulario y te responderemos a la brevedad</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange} 
                    placeholder="Tu nombre" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tucorreo@ejemplo.com" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="¿En qué podemos ayudarte?" 
                    rows={5} 
                    required 
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Enviando..." : (
                    <>
                      Enviar mensaje <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="glass-panel h-full">
            <CardHeader>
              <CardTitle>Información de contacto</CardTitle>
              <CardDescription>Otras formas de comunicarte con nosotros</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-scienceBlue mt-0.5" />
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-muted-foreground">
                      Avenida de la Ciencia, 123<br />
                      Edificio de Investigación, Piso 4<br />
                      28001 Madrid, España
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-scienceBlue mt-0.5" />
                  <div>
                    <h3 className="font-medium">Correo electrónico</h3>
                    <p className="text-muted-foreground">info@portalcientifico.org</p>
                    <p className="text-muted-foreground">colaboraciones@portalcientifico.org</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-scienceBlue mt-0.5" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-muted-foreground">+34 91 123 45 67</p>
                    <p className="text-muted-foreground">Lunes a Viernes, 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="font-medium mb-3">Síguenos en redes sociales</h3>
                <div className="flex gap-4">
                  {["Twitter", "LinkedIn", "ResearchGate", "YouTube"].map((network) => (
                    <Button key={network} variant="outline" size="sm">
                      {network}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
