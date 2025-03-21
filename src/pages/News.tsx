
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Avance significativo en tecnología de sensores",
    date: "15 de mayo, 2024",
    summary: "Nuestro equipo ha conseguido desarrollar un nuevo tipo de sensor que mejora la precisión en un 35%.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 2,
    title: "Colaboración internacional con la Universidad de Cambridge",
    date: "2 de abril, 2024",
    summary: "Hemos iniciado una nueva colaboración con investigadores del departamento de Física Aplicada.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 3,
    title: "Publicación en Nature Scientific Reports",
    date: "28 de marzo, 2024",
    summary: "Nuestro último estudio ha sido aceptado por una de las revistas científicas más prestigiosas.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

const News = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="section-header">Novedades y Actualizaciones</h1>
        <p className="section-subheader mx-auto">
          Las últimas noticias y avances de nuestro proyecto de investigación
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass-panel card-hover h-full">
              <CardHeader>
                <div className="flex items-center gap-2 text-scienceBlue mb-2">
                  <Newspaper size={20} />
                  <span className="text-sm">{item.date}</span>
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default News;
