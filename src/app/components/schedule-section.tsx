/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Calendar, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

const weekdays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

const scheduleData = {
  Lunes: [
    {
      time: "06:00 - 08:00",
      show: "Despertar con Cristo",
      host: "Pastor Miguel Ángel",
      description: "Música y reflexiones para comenzar el día con energía y fe.",
    },
    {
      time: "08:00 - 10:00",
      show: "Café y Palabra",
      host: "María Rodríguez",
      description: "Conversaciones sobre la Biblia y su aplicación en la vida diaria.",
    },
    {
      time: "10:00 - 12:00",
      show: "Música y Alabanzas",
      host: "DJ Gabriel",
      description: "Las mejores alabanzas en español para elevar tu espíritu.",
    },
    {
      time: "12:00 - 14:00",
      show: "Familia en Cristo",
      host: "Carlos y Ana Martínez",
      description: "Consejos para fortalecer la familia desde una perspectiva cristiana.",
    },
    {
      time: "14:00 - 16:00",
      show: "Jóvenes de Fe",
      host: "Daniela Morales",
      description: "Programa dirigido a jóvenes hispanos con música contemporánea y temas relevantes.",
    },
    {
      time: "16:00 - 18:00",
      show: "Palabra Viva",
      host: "Pastor José Ramírez",
      description: "Estudio bíblico profundo con llamadas de los oyentes.",
    },
    {
      time: "18:00 - 20:00",
      show: "Atardecer de Alabanzas",
      host: "Grupo de Alabanza",
      description: "Música de adoración para terminar el día.",
    },
  ],
  Martes: [
    {
      time: "06:00 - 08:00",
      show: "Despertar con Cristo",
      host: "Pastor Miguel Ángel",
      description: "Música y reflexiones para comenzar el día con energía y fe.",
    },
    {
      time: "08:00 - 10:00",
      show: "Café y Palabra",
      host: "María Rodríguez",
      description: "Conversaciones sobre la Biblia y su aplicación en la vida diaria.",
    },
    {
      time: "10:00 - 12:00",
      show: "Música y Alabanzas",
      host: "DJ Gabriel",
      description: "Las mejores alabanzas en español para elevar tu espíritu.",
    },
    {
      time: "12:00 - 14:00",
      show: "Familia en Cristo",
      host: "Carlos y Ana Martínez",
      description: "Consejos para fortalecer la familia desde una perspectiva cristiana.",
    },
    {
      time: "14:00 - 16:00",
      show: "Jóvenes de Fe",
      host: "Daniela Morales",
      description: "Programa dirigido a jóvenes hispanos con música contemporánea y temas relevantes.",
    },
    {
      time: "16:00 - 18:00",
      show: "Palabra Viva",
      host: "Pastor José Ramírez",
      description: "Estudio bíblico profundo con llamadas de los oyentes.",
    },
    {
      time: "18:00 - 20:00",
      show: "Atardecer de Alabanzas",
      host: "Grupo de Alabanza",
      description: "Música de adoración para terminar el día.",
    },
  ],
  Miércoles: [
    {
      time: "06:00 - 08:00",
      show: "Despertar con Cristo",
      host: "Pastor Miguel Ángel",
      description: "Música y reflexiones para comenzar el día con energía y fe.",
    },
    {
      time: "08:00 - 10:00",
      show: "Café y Palabra",
      host: "María Rodríguez",
      description: "Conversaciones sobre la Biblia y su aplicación en la vida diaria.",
    },
    {
      time: "10:00 - 12:00",
      show: "Música y Alabanzas",
      host: "DJ Gabriel",
      description: "Las mejores alabanzas en español para elevar tu espíritu.",
    },
    {
      time: "12:00 - 14:00",
      show: "Familia en Cristo",
      host: "Carlos y Ana Martínez",
      description: "Consejos para fortalecer la familia desde una perspectiva cristiana.",
    },
    {
      time: "14:00 - 16:00",
      show: "Jóvenes de Fe",
      host: "Daniela Morales",
      description: "Programa dirigido a jóvenes hispanos con música contemporánea y temas relevantes.",
    },
    {
      time: "16:00 - 18:00",
      show: "Palabra Viva",
      host: "Pastor José Ramírez",
      description: "Estudio bíblico profundo con llamadas de los oyentes.",
    },
    {
      time: "18:00 - 20:00",
      show: "Atardecer de Alabanzas",
      host: "Grupo de Alabanza",
      description: "Música de adoración para terminar el día.",
    },
  ],
  Jueves: [
    {
      time: "06:00 - 08:00",
      show: "Despertar con Cristo",
      host: "Pastor Miguel Ángel",
      description: "Música y reflexiones para comenzar el día con energía y fe.",
    },
    {
      time: "08:00 - 10:00",
      show: "Café y Palabra",
      host: "María Rodríguez",
      description: "Conversaciones sobre la Biblia y su aplicación en la vida diaria.",
    },
    {
      time: "10:00 - 12:00",
      show: "Música y Alabanzas",
      host: "DJ Gabriel",
      description: "Las mejores alabanzas en español para elevar tu espíritu.",
    },
    {
      time: "12:00 - 14:00",
      show: "Familia en Cristo",
      host: "Carlos y Ana Martínez",
      description: "Consejos para fortalecer la familia desde una perspectiva cristiana.",
    },
    {
      time: "14:00 - 16:00",
      show: "Jóvenes de Fe",
      host: "Daniela Morales",
      description: "Programa dirigido a jóvenes hispanos con música contemporánea y temas relevantes.",
    },
    {
      time: "16:00 - 18:00",
      show: "Palabra Viva",
      host: "Pastor José Ramírez",
      description: "Estudio bíblico profundo con llamadas de los oyentes.",
    },
    {
      time: "18:00 - 20:00",
      show: "Atardecer de Alabanzas",
      host: "Grupo de Alabanza",
      description: "Música de adoración para terminar el día.",
    },
  ],
  Viernes: [
    {
      time: "06:00 - 08:00",
      show: "Despertar con Cristo",
      host: "Pastor Miguel Ángel",
      description: "Música y reflexiones para comenzar el día con energía y fe.",
    },
    {
      time: "08:00 - 10:00",
      show: "Café y Palabra",
      host: "María Rodríguez",
      description: "Conversaciones sobre la Biblia y su aplicación en la vida diaria.",
    },
    {
      time: "10:00 - 12:00",
      show: "Música y Alabanzas",
      host: "DJ Gabriel",
      description: "Las mejores alabanzas en español para elevar tu espíritu.",
    },
    {
      time: "12:00 - 14:00",
      show: "Familia en Cristo",
      host: "Carlos y Ana Martínez",
      description: "Consejos para fortalecer la familia desde una perspectiva cristiana.",
    },
    {
      time: "14:00 - 16:00",
      show: "Jóvenes de Fe",
      host: "Daniela Morales",
      description: "Programa dirigido a jóvenes hispanos con música contemporánea y temas relevantes.",
    },
    {
      time: "16:00 - 18:00",
      show: "Palabra Viva",
      host: "Pastor José Ramírez",
      description: "Estudio bíblico profundo con llamadas de los oyentes.",
    },
    {
      time: "18:00 - 20:00",
      show: "Noche de Testimonios",
      host: "Varios",
      description: "Testimonios inspiradores de la comunidad.",
    },
  ],
  Sábado: [
    {
      time: "08:00 - 10:00",
      show: "Amanecer con Alabanzas",
      host: "Grupo de Alabanza",
      description: "Música de adoración para comenzar el fin de semana.",
    },
    {
      time: "10:00 - 12:00",
      show: "Niños de Dios",
      host: "Tía Lucía",
      description: "Programa infantil con historias bíblicas, canciones y juegos.",
    },
    {
      time: "12:00 - 14:00",
      show: "Almuerzo con Jesús",
      host: "Pastor Roberto",
      description: "Reflexiones durante la hora del almuerzo.",
    },
    {
      time: "14:00 - 16:00",
      show: "Música y Cultura Hispana",
      host: "DJ Manuel",
      description: "Música cristiana con influencias culturales hispanas.",
    },
    {
      time: "16:00 - 18:00",
      show: "Preparando el Corazón",
      host: "Hermana Isabel",
      description: "Preparación espiritual para el domingo.",
    },
    {
      time: "18:00 - 20:00",
      show: "Concierto Especial",
      host: "Artistas Invitados",
      description: "Música en vivo y entrevistas con artistas cristianos.",
    },
  ],
  Domingo: [
    {
      time: "07:00 - 09:00",
      show: "Despertar Dominical",
      host: "Pastor Miguel Ángel",
      description: "Preparación espiritual para el día del Señor.",
    },
    {
      time: "09:00 - 11:00",
      show: "Servicio Dominical",
      host: "Pastor Principal",
      description: "Transmisión del servicio dominical en vivo.",
    },
    {
      time: "11:00 - 13:00",
      show: "Reflexiones Dominicales",
      host: "Panel de Pastores",
      description: "Discusión sobre el mensaje del servicio.",
    },
    {
      time: "13:00 - 15:00",
      show: "Música de Adoración",
      host: "DJ Gabriel",
      description: "Las mejores alabanzas para continuar el día del Señor.",
    },
    {
      time: "15:00 - 17:00",
      show: "Historias de Fe",
      host: "María Rodríguez",
      description: "Testimonios inspiradores de la comunidad.",
    },
    {
      time: "17:00 - 19:00",
      show: "Preparando la Semana",
      host: "Pastor José",
      description: "Reflexiones para comenzar la semana con el pie derecho.",
    },
    {
      time: "19:00 - 21:00",
      show: "Música para el Alma",
      host: "Grupo de Alabanza",
      description: "Música tranquila para terminar el domingo.",
    },
  ],
}

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState("Domingo")

  const getCurrentDaySchedule = () => {
    const today = new Date().getDay()
    // Convert from 0-6 (Sunday-Saturday) to our format
    const dayIndex = today === 0 ? 6 : today - 1
    return weekdays[dayIndex]
  }

  return (
    <Tabs defaultValue={getCurrentDaySchedule()} className="w-full" onValueChange={setActiveDay}>
      <div className="mb-6 flex justify-center">
        <TabsList className="grid w-full max-w-3xl grid-cols-3 md:grid-cols-7">
          {weekdays.map((day) => (
            <TabsTrigger key={day} value={day} className="text-xs md:text-sm">
              {day}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {weekdays.map((day) => (
        <TabsContent key={day} value={day} className="mt-0">
          <Card>
            <CardHeader className="bg-amber-50 pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center text-amber-800">
                  <Calendar className="mr-2 h-5 w-5" /> Programación: {day}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-4 md:grid-cols-2">
                {scheduleData[day as keyof typeof scheduleData].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-amber-100 bg-white p-4 shadow-sm transition-all hover:border-amber-200 hover:shadow"
                  >
                    <div className="mb-2 flex items-center text-amber-800">
                      <Clock className="mr-2 h-4 w-4" />
                      <span className="font-medium">{item.time}</span>
                    </div>
                    <h3 className="mb-1 font-serif text-lg font-bold text-amber-900">{item.show}</h3>
                    <p className="mb-2 text-sm font-medium text-amber-700">Con: {item.host}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}
