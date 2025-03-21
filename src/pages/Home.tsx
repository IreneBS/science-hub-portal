
import { motion } from 'framer-motion';
import { ArrowRight, Beaker, Brain, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1523712999610-f77fbcfc3843)', 
            filter: 'brightness(0.7)'
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-scienceBlue/30 to-black/70" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Portal Científico
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Explorando los límites del conocimiento a través de la investigación innovadora
            </p>
            <Button className="science-button text-lg" asChild>
              <a href="#about">
                Descubre más <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-scienceYellow/20">
        <div className="container mx-auto px-6">
          <h2 className="section-header text-center">Nuestro Proyecto</h2>
          <p className="section-subheader text-center mx-auto">
            Investigación de vanguardia para resolver los desafíos más importantes de nuestro tiempo
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Beaker,
                title: "Investigación Innovadora",
                description: "Desarrollamos metodologías pioneras para abordar problemas complejos"
              },
              {
                icon: Brain,
                title: "Enfoque Interdisciplinario",
                description: "Combinamos diferentes campos del conocimiento para obtener nuevas perspectivas"
              },
              {
                icon: Target,
                title: "Impacto Real",
                description: "Nuestros resultados se traducen en soluciones prácticas para la sociedad"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-panel card-hover h-full">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-scienceBlue/10 flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-scienceBlue" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
