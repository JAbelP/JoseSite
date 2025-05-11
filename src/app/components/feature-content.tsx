import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Button } from "@/app/components/ui/button"
import { Play, Headphones, FileText, Share2 } from "lucide-react"
import Image from "next/image"

export default function FeaturedContent() {
  return (
    <Tabs defaultValue="podcasts" className="w-full">
      <div className="mb-6 flex justify-center">
        <TabsList>
          <TabsTrigger value="podcasts" className="flex items-center">
            <Headphones className="mr-2 h-4 w-4" /> Podcasts
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center">
            <Play className="mr-2 h-4 w-4" /> Videos
          </TabsTrigger>
          <TabsTrigger value="articles" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" /> Artículos
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="podcasts" className="mt-0">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "El Poder de la Oración",
              host: "Pastor Miguel Ángel",
              description: "Descubre cómo la oración puede transformar tu vida y acercarte más a Dios.",
              image: "/placeholder.svg?height=200&width=400",
              duration: "45 min",
            },
            {
              title: "Criando Hijos en la Fe",
              host: "Carlos y Ana Martínez",
              description: "Consejos prácticos para padres que desean criar a sus hijos en un hogar cristiano.",
              image: "/placeholder.svg?height=200&width=400",
              duration: "38 min",
            },
            {
              title: "Música que Eleva el Espíritu",
              host: "DJ Gabriel",
              description: "Una selección de las mejores alabanzas contemporáneas en español.",
              image: "/placeholder.svg?height=200&width=400",
              duration: "52 min",
            },
          ].map((podcast, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={podcast.image || "/placeholder.svg"}
                alt={podcast.title}
                width={400}
                height={200}
                className="h-48 w-full object-cover"
              />
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-800">{podcast.title}</CardTitle>
                <CardDescription>
                  Con {podcast.host} • {podcast.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{podcast.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Headphones className="mr-2 h-4 w-4" /> Escuchar
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="videos" className="mt-0">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Alabanzas en Vivo",
              description: "Disfruta de este concierto especial de alabanzas grabado en nuestro estudio.",
              image: "/placeholder.svg?height=200&width=400",
              duration: "1h 15min",
            },
            {
              title: "Testimonio: De las Drogas a Cristo",
              description: "Juan comparte su poderoso testimonio de transformación y redención.",
              image: "/placeholder.svg?height=200&width=400",
              duration: "28 min",
            },
            {
              title: "Estudio Bíblico: El Libro de Juan",
              description: "El Pastor José nos guía a través de las enseñanzas del Evangelio de Juan.",
              image: "/placeholder.svg?height=200&width=400",
              duration: "42 min",
            },
          ].map((video, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={video.image || "/placeholder.svg"}
                  alt={video.title}
                  width={400}
                  height={200}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button className="h-12 w-12 rounded-full bg-blue-600/90 hover:bg-blue-700">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-800">{video.title}</CardTitle>
                <CardDescription>{video.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{video.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Play className="mr-2 h-4 w-4" /> Ver Video
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="articles" className="mt-0">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "La Importancia de la Comunidad Cristiana",
              author: "Pastor José Ramírez",
              description: "Reflexiones sobre por qué necesitamos estar en comunidad con otros creyentes.",
              image: "/placeholder.svg?height=200&width=400",
              date: "12 de Mayo, 2023",
            },
            {
              title: "Criando Hijos en un Mundo Digital",
              author: "María Rodríguez",
              description: "Consejos para padres cristianos en la era de la tecnología y las redes sociales.",
              image: "/placeholder.svg?height=200&width=400",
              date: "28 de Abril, 2023",
            },
            {
              title: "Nuestra Herencia Hispana y la Fe Cristiana",
              author: "Dr. Roberto Méndez",
              description: "Un análisis de cómo nuestra cultura hispana enriquece nuestra experiencia de fe.",
              image: "/placeholder.svg?height=200&width=400",
              date: "5 de Abril, 2023",
            },
          ].map((article, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={400}
                height={200}
                className="h-48 w-full object-cover"
              />
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-800">{article.title}</CardTitle>
                <CardDescription>
                  Por {article.author} • {article.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{article.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <FileText className="mr-2 h-4 w-4" /> Leer Artículo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
