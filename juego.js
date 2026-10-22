/* Escape del Colegio — JavaScript vanilla, compatible con GitHub Pages.
   No usa librerías, servidores ni rutas externas. */
"use strict";

const BANCO = {"3":{"Matemáticas":[{"q":"¿Cuánto es 7 × 6?","a":["42","56","48","36"],"c":0},{"q":"¿Cuál número es mayor?","a":["289","398","389","308"],"c":1},{"q":"¿Cuánto es 125 + 75?","a":["190","175","210","200"],"c":3},{"q":"¿Cuánto es 90 − 37?","a":["57","43","53","63"],"c":2},{"q":"¿Qué figura tiene tres lados?","a":["Cuadrado","Rectángulo","Círculo","Triángulo"],"c":3},{"q":"¿Cuántas unidades hay en 4 decenas?","a":["40","14","4","400"],"c":0},{"q":"¿Cuál es la mitad de 18?","a":["9","8","12","6"],"c":0},{"q":"¿Cuánto es 5 × 8?","a":["45","35","40","30"],"c":2},{"q":"¿Qué número sigue: 15, 20, 25, __?","a":["35","30","28","26"],"c":1},{"q":"¿Cuántos minutos tiene una hora?","a":["24","60","100","30"],"c":1},{"q":"¿Cuánto es 36 ÷ 4?","a":["6","8","9","12"],"c":2},{"q":"¿Cuál es el valor del 5 en 352?","a":["500","30","50","5"],"c":2},{"q":"¿Cuántos lados tiene un hexágono?","a":["7","8","6","5"],"c":2},{"q":"Si tienes 12 lápices y regalas 4, ¿cuántos quedan?","a":["9","8","6","7"],"c":1},{"q":"¿Cuál fracción representa una de dos partes iguales?","a":["1/3","1/4","1/2","2/3"],"c":2},{"q":"¿Cuánto es 100 + 245?","a":["345","355","445","335"],"c":0},{"q":"¿Qué unidad sirve para medir el largo de un lápiz?","a":["Horas","Kilogramos","Litros","Centímetros"],"c":3},{"q":"¿Cuál es el número par?","a":["31","17","45","24"],"c":3},{"q":"Un paquete tiene 6 galletas. ¿Cuántas hay en 3 paquetes?","a":["12","24","9","18"],"c":3},{"q":"¿Cuánto es 700 − 200?","a":["600","300","400","500"],"c":3}],"Lenguaje":[{"q":"¿Cuál palabra es un sustantivo?","a":["Rápido","Escuela","Azul","Correr"],"c":1},{"q":"¿Cuál palabra es un verbo?","a":["Bonito","Saltar","Lápiz","Mesa"],"c":1},{"q":"¿Qué signo se usa al final de una pregunta?","a":["?",":","!",";"],"c":0},{"q":"¿Cuál es el plural de “flor”?","a":["Flor'es","Flors","Flore","Flores"],"c":3},{"q":"¿Cuál palabra está escrita correctamente?","a":["Hebo","Guevo","Huevo","Uevo"],"c":2},{"q":"¿Cuál es un adjetivo?","a":["Comer","Silla","Caminar","Amable"],"c":3},{"q":"¿Qué palabra significa lo contrario de “frío”?","a":["Tibio","Fresco","Helado","Caliente"],"c":3},{"q":"¿Cuál palabra rima con “casa”?","a":["Flor","Perro","Sol","Taza"],"c":3},{"q":"¿Cuál es una oración completa?","a":["Corre perro la.","Perro el.","El perro corre.","El en."],"c":2},{"q":"¿Qué letra inicia la palabra “mariposa”?","a":["M","R","P","S"],"c":0},{"q":"¿Cuál palabra lleva tilde?","a":["Pato","Casa","Árbol","Mesa"],"c":2},{"q":"¿Qué usamos para separar elementos de una lista?","a":["Coma","Guion largo siempre","Paréntesis","Punto final solamente"],"c":0},{"q":"¿Cuál es el diminutivo de “casa”?","a":["Casero","Casota","Casón","Casita"],"c":3},{"q":"¿Cuál es un saludo?","a":["Hasta nunca","Por favor no","Ayer","Buenos días"],"c":3},{"q":"¿Qué palabra nombra a una persona?","a":["Correr","Suave","Verde","Maestra"],"c":3},{"q":"¿Cuál es el femenino de “niño”?","a":["Niña","Niñito","Niñez","Niños"],"c":0},{"q":"¿Cuál palabra está en pasado?","a":["Jugará","Jugó","Jugar","Juega"],"c":1},{"q":"¿Qué tipo de texto cuenta hechos imaginarios?","a":["Lista de compras","Horario","Cuento","Receta"],"c":2},{"q":"¿Cuál palabra es sinónimo de “feliz”?","a":["Enojado","Contento","Triste","Cansado"],"c":1},{"q":"¿Qué signo se coloca al final de una exclamación?","a":["?","/","!","="],"c":2}],"Ciencias":[{"q":"¿Qué órgano usamos para respirar?","a":["Pulmones","Hígado","Riñones","Estómago"],"c":0},{"q":"¿Qué necesitan las plantas para crecer?","a":["Solo piedras","Humo","Agua y luz","Plástico"],"c":2},{"q":"¿Cuál es una fuente natural de luz?","a":["Luna","Sol","Espejo","Papel"],"c":1},{"q":"¿En qué estado está el hielo?","a":["Líquido","Gaseoso","Sólido","Plasma"],"c":2},{"q":"¿Qué animal es mamífero?","a":["Gallina","Pez","Rana","Perro"],"c":3},{"q":"¿Qué sentido usamos para escuchar?","a":["Olfato","Gusto","Oído","Vista"],"c":2},{"q":"¿Cuál parte de la planta absorbe agua?","a":["Raíz","Hoja solamente","Flor","Fruto"],"c":0},{"q":"¿Qué debemos hacer antes de comer?","a":["Lavarnos las manos","Jugar con tierra","Tocar basura","No lavarnos"],"c":0},{"q":"¿Qué astro ilumina la Tierra durante el día?","a":["Sol","Saturno","Estrella Polar","Marte"],"c":0},{"q":"¿Cuál es un material reciclable?","a":["Agua sucia","Papel limpio","Comida podrida","Humo"],"c":1},{"q":"¿Qué estado tiene el agua que bebemos?","a":["Sólido","Líquido","Gaseoso","Metálico"],"c":1},{"q":"¿Qué animal nace de un huevo?","a":["Vaca","Perro","Gato","Tortuga"],"c":3},{"q":"¿Cuál hábito ayuda a cuidar los dientes?","a":["Cepillarlos","No lavarlos","Comer dulces sin parar","Compartir cepillo"],"c":0},{"q":"¿Qué parte del cuerpo bombea sangre?","a":["Estómago","Cerebro","Pulmón","Corazón"],"c":3},{"q":"¿Cuál es un recurso natural?","a":["Juguete","Botella plástica","Agua","Cuaderno"],"c":2},{"q":"¿Qué fenómeno produce un arcoíris?","a":["Viento y polvo solamente","Nieve seca","Luz y gotas de agua","Truenos sin luz"],"c":2},{"q":"¿Cuál animal es herbívoro?","a":["Tigre","Vaca","Águila","León"],"c":1},{"q":"¿Qué debemos hacer con la basura?","a":["Tirarla al río","Dejarla en la calle","Quemarla siempre","Depositarla en su lugar"],"c":3},{"q":"¿Qué órgano usamos para pensar?","a":["Corazón","Pulmón","Estómago","Cerebro"],"c":3},{"q":"¿Qué necesitamos para mantenernos hidratados?","a":["Agua potable","Aceite","Refresco solamente","Arena"],"c":0}],"Estudios Sociales":[{"q":"¿En qué país está San Salvador?","a":["Guatemala","Honduras","Nicaragua","El Salvador"],"c":3},{"q":"¿Cuál es la capital de El Salvador?","a":["San Miguel","San Salvador","Santa Ana","Sonsonate"],"c":1},{"q":"¿Qué símbolo representa a un país?","a":["Bandera","Regla","Semáforo","Cuaderno"],"c":0},{"q":"¿Qué autoridad dirige una alcaldía?","a":["Médico","Alcalde o alcaldesa","Director de escuela","Bombero"],"c":1},{"q":"¿Qué océano está al sur de El Salvador?","a":["Océano Ártico","Océano Pacífico","Océano Atlántico","Océano Índico"],"c":1},{"q":"¿Qué debemos hacer al cruzar una calle?","a":["Mirar a ambos lados","Correr sin mirar","Jugar en la calle","Cerrar los ojos"],"c":0},{"q":"¿Qué documento contiene normas de convivencia escolar?","a":["Mapa del tesoro","Receta médica","Menú","Reglamento escolar"],"c":3},{"q":"¿Cuál es un servicio público?","a":["Ropa personal","Juguete","Videojuego privado","Recolección de basura"],"c":3},{"q":"¿Qué celebramos el 15 de septiembre en Centroamérica?","a":["Día del Trabajo","Independencia","Año Nuevo","Día del Niño"],"c":1},{"q":"¿Qué muestra un mapa?","a":["El clima de ayer siempre","Solo sonidos","Lugares y territorios","Cuentos"],"c":2},{"q":"¿Cuál es una responsabilidad de los estudiantes?","a":["Botar basura","Dañar pupitres","Respetar y estudiar","Interrumpir la clase"],"c":2},{"q":"¿Qué medio de transporte circula por rieles?","a":["Avión","Bicicleta","Tren","Lancha"],"c":2},{"q":"¿Cuál es una tradición cultural?","a":["Computadora apagada","Semáforo nuevo","Danza folclórica","Lluvia"],"c":2},{"q":"¿Qué debemos hacer ante un semáforo rojo?","a":["Detenernos","Ignorarlo","Cruzar corriendo","Acelerar"],"c":0},{"q":"¿Qué representa un globo terráqueo?","a":["El Sol solamente","La Luna solamente","Una montaña","La Tierra"],"c":3},{"q":"¿Cuál es un derecho de la niñez?","a":["Educación","Ser maltratado","Trabajar en peligro","No recibir cuidados"],"c":0},{"q":"¿Qué institución ayuda a apagar incendios?","a":["Museo","Bomberos","Alcaldía solamente","Biblioteca"],"c":1},{"q":"¿Qué significa convivir en paz?","a":["Pelear por todo","Respetar a los demás","No escuchar","Excluir a otros"],"c":1},{"q":"¿Qué actividad pertenece al campo?","a":["Operar un submarino","Cultivar maíz","Construir rascacielos solamente","Pilotar un cohete"],"c":1},{"q":"¿Qué debemos cuidar de nuestra comunidad?","a":["Basura en las aceras","Paredes ajenas","Ríos contaminados","Parques y espacios públicos"],"c":3}]},"4":{"Matemáticas":[{"q":"¿Cuánto es 248 + 176?","a":["434","414","424","524"],"c":2},{"q":"¿Cuánto es 600 − 278?","a":["322","422","332","312"],"c":0},{"q":"¿Cuánto es 24 × 6?","a":["134","144","124","164"],"c":1},{"q":"¿Cuánto es 96 ÷ 8?","a":["14","16","10","12"],"c":3},{"q":"¿Qué fracción equivale a la mitad?","a":["2/3","3/4","1/3","2/4"],"c":3},{"q":"¿Cuántos metros hay en 3 kilómetros?","a":["30000","300","3000","30"],"c":2},{"q":"¿Cuál es el perímetro de un cuadrado de lado 5 cm?","a":["10 cm","25 cm","20 cm","15 cm"],"c":2},{"q":"¿Cuál número es múltiplo de 7?","a":["50","45","42","43"],"c":2},{"q":"¿Cuál es el valor de 6 en 3,681?","a":["60","6","600","6000"],"c":2},{"q":"¿Cuánto es 3/8 + 2/8?","a":["1/8","5/8","5/16","6/8"],"c":1},{"q":"¿Cuántos grados tiene un ángulo recto?","a":["360°","180°","45°","90°"],"c":3},{"q":"¿Qué número decimal representa 7 décimos?","a":["0.7","70","0.07","7.0"],"c":0},{"q":"Una caja tiene 8 filas de 9 lápices. ¿Cuántos hay?","a":["64","17","72","81"],"c":2},{"q":"¿Cuánto es 450 ÷ 5?","a":["100","80","90","95"],"c":2},{"q":"¿Cuál es el área de un rectángulo de 6 cm por 4 cm?","a":["24 cm","24 cm²","20 cm²","10 cm²"],"c":1},{"q":"¿Qué número sigue: 4, 8, 12, 16, __?","a":["24","22","18","20"],"c":3},{"q":"¿Cuántos minutos hay en 2 horas y media?","a":["130","250","120","150"],"c":3},{"q":"¿Cuál es el mayor número par menor que 50?","a":["48","50","49","46"],"c":0},{"q":"Si una camisa cuesta $12 y pagas $20, ¿cuánto recibes?","a":["$7","$10","$8","$9"],"c":2},{"q":"¿Cuánto es 1,250 + 750?","a":["2,000","2,100","1,900","1,500"],"c":0}],"Lenguaje":[{"q":"¿Cuál es el sujeto en “María lee un cuento”?","a":["lee","cuento","María","un cuento"],"c":2},{"q":"¿Cuál palabra es un adverbio?","a":["Casa","Azul","Ayer","Saltar"],"c":2},{"q":"¿Cuál oración usa correctamente la mayúscula?","a":["El Salvador está en Centroamérica.","el salvador está en centroamérica.","el Salvador está en Centroamérica.","El salvador está en Centroamérica."],"c":0},{"q":"¿Cuál es el sinónimo de “rápido”?","a":["Débil","Lejano","Veloz","Lento"],"c":2},{"q":"¿Cuál palabra es aguda?","a":["Mesa","Canción","Árbol","Lápiz"],"c":1},{"q":"¿Cuál es el plural de “luz”?","a":["Luzes","Luces","Lucez","Luzs"],"c":1},{"q":"¿Qué signo indica una pausa breve?","a":["Interrogación","Punto final","Paréntesis","Coma"],"c":3},{"q":"¿Cuál es un pronombre personal?","a":["Correr","Nosotros","Bonito","Ventana"],"c":1},{"q":"¿Qué parte de un cuento presenta a los personajes?","a":["Inicio","Moraleja siempre","Índice","Desenlace"],"c":0},{"q":"¿Cuál palabra está en futuro?","a":["Estudiará","Estudió","Estudia","Estudiaba"],"c":0},{"q":"¿Cuál es el antónimo de “generoso”?","a":["Solidario","Egoísta","Atento","Amable"],"c":1},{"q":"¿Qué es una fábula?","a":["Relato que suele dejar una enseñanza","Una lista de precios","Una noticia del clima","Un mapa"],"c":0},{"q":"¿Cuál palabra es esdrújula?","a":["Amor","Papel","Reloj","Pájaro"],"c":3},{"q":"¿Cuál oración está en pasado?","a":["Visitar el museo.","Ahora visitamos el museo.","Ayer visitamos el museo.","Mañana iremos al museo."],"c":2},{"q":"¿Qué elemento suele aparecer al final de una carta formal?","a":["Lista de ingredientes","Título de un mapa","Personajes fantásticos","Despedida y firma"],"c":3},{"q":"¿Cuál palabra contiene un diptongo?","a":["Poeta","Teatro","Caer","Cuidado"],"c":3},{"q":"¿Qué recurso compara usando “como”?","a":["Símil","Rima","Diálogo","Resumen"],"c":0},{"q":"¿Cuál es el predicado en “Los niños juegan en el patio”?","a":["Los niños","juegan en el patio","Los niños juegan","patio"],"c":1},{"q":"¿Cuál palabra está escrita correctamente?","a":["Ecepción","Excepción","Ecscepción","Exepción"],"c":1},{"q":"¿Para qué sirve un resumen?","a":["Inventar datos","Presentar las ideas principales","Cambiar el tema","Copiar cada palabra"],"c":1}],"Ciencias":[{"q":"¿Qué sistema del cuerpo permite movernos?","a":["Sistema solar","Sistema muscular y óseo","Sistema de riego","Sistema eléctrico"],"c":1},{"q":"¿Qué gas absorben las plantas en la fotosíntesis?","a":["Helio","Hidrógeno puro","Oxígeno únicamente","Dióxido de carbono"],"c":3},{"q":"¿Cuál es un cambio físico del agua?","a":["Cocinar un huevo","Oxidar hierro","Derretirse el hielo","Quemar madera"],"c":2},{"q":"¿Qué planeta habitamos?","a":["Tierra","Júpiter","Venus","Marte"],"c":0},{"q":"¿Qué órgano filtra la sangre y produce orina?","a":["Pulmones","Riñones","Estómago","Oídos"],"c":1},{"q":"¿Qué fuerza atrae los objetos hacia la Tierra?","a":["Magnetismo siempre","Electricidad","Gravedad","Fricción"],"c":2},{"q":"¿Cuál es un vertebrado?","a":["Medusa","Pez","Mariposa","Lombriz"],"c":1},{"q":"¿Qué fuente de energía es renovable?","a":["Solar","Gas natural","Carbón","Petróleo"],"c":0},{"q":"¿Qué función tienen las raíces?","a":["Absorber agua y sujetar la planta","Producir sonido","Fabricar semillas siempre","Atraer insectos solamente"],"c":0},{"q":"¿Qué mezcla se puede separar con un filtro?","a":["Agua y azúcar disuelta","Aire limpio","Agua y sal disuelta","Agua y arena"],"c":3},{"q":"¿Cuál es el orden básico del ciclo del agua?","a":["Fotosíntesis, digestión y lluvia","Combustión, erosión y fusión","Congelación, sonido y viento","Evaporación, condensación y precipitación"],"c":3},{"q":"¿Qué animal es ovíparo?","a":["Gallina","Caballo","Gato","Perro"],"c":0},{"q":"¿Cuál es una medida para prevenir enfermedades?","a":["Beber agua contaminada","No lavarse las manos","Vacunarse según indicación sanitaria","Compartir vasos siempre"],"c":2},{"q":"¿Qué órgano controla muchas funciones del cuerpo?","a":["Hígado únicamente","Piel","Diente","Cerebro"],"c":3},{"q":"¿Qué sucede cuando un objeto bloquea la luz?","a":["Se forma una sombra","Desaparece la gravedad","Se crea agua","Se produce oxígeno"],"c":0},{"q":"¿Qué tipo de roca se forma al enfriarse el magma?","a":["Sedimentaria","Metamórfica","Ígnea","Artificial"],"c":2},{"q":"¿Cuál es un ecosistema?","a":["Un bosque con seres vivos y su ambiente","Una mesa","Un cuaderno","Una piedra aislada"],"c":0},{"q":"¿Qué instrumento mide la temperatura?","a":["Balanza","Brújula","Regla","Termómetro"],"c":3},{"q":"¿Qué hábito ayuda al ambiente?","a":["Ahorrar agua y energía","Quemar basura","Tirar pilas al río","Dejar luces encendidas"],"c":0},{"q":"¿Qué parte de la sangre transporta oxígeno principalmente?","a":["Plaquetas solamente","Glóbulos rojos","Saliva","Plasma sin células únicamente"],"c":1}],"Estudios Sociales":[{"q":"¿Qué es un municipio?","a":["Una escuela únicamente","Territorio administrado por una alcaldía","Un océano","Un planeta"],"c":1},{"q":"¿Qué océano baña la costa salvadoreña?","a":["Ártico","Atlántico","Pacífico","Índico"],"c":2},{"q":"¿Qué país limita al oeste con El Salvador?","a":["Panamá","Belice","Costa Rica","Guatemala"],"c":3},{"q":"¿Qué país limita al este con El Salvador?","a":["Panamá","Honduras","Belice","México"],"c":1},{"q":"¿Para qué sirve una brújula?","a":["Contar dinero","Pesar objetos","Orientarse","Medir temperatura"],"c":2},{"q":"¿Qué es una comunidad?","a":["Una sola vivienda aislada","Un planeta","Personas que comparten un lugar y actividades","Un océano"],"c":2},{"q":"¿Cuál es una actividad económica primaria?","a":["Venta por internet solamente","Agricultura","Publicidad","Banca"],"c":1},{"q":"¿Qué significa democracia?","a":["Gobierno sin reglas","Participación ciudadana en decisiones públicas","Prohibir opiniones","Eliminar elecciones"],"c":1},{"q":"¿Qué institución aprueba leyes en El Salvador?","a":["Equipo de fútbol","Hospital","Asamblea Legislativa","Escuela"],"c":2},{"q":"¿Qué muestran los puntos cardinales?","a":["La temperatura","Direcciones geográficas","La edad de una persona","La hora exacta"],"c":1},{"q":"¿Cuál es un patrimonio cultural?","a":["Un semáforo","Tradiciones y sitios históricos","Basura en una calle","Un producto desechable"],"c":1},{"q":"¿Qué debe hacerse durante un sismo?","a":["Seguir las indicaciones de seguridad","Usar ascensores sin pensar","Acercarse a ventanas","Empujar a los demás"],"c":0},{"q":"¿Qué es un derecho?","a":["Un castigo obligatorio","Una protección que corresponde a las personas","Una prohibición de aprender","Una deuda siempre"],"c":1},{"q":"¿Qué es una obligación ciudadana?","a":["Respetar las leyes","Contaminar ríos","Dañar bienes públicos","Ignorar las señales"],"c":0},{"q":"¿Qué actividad pertenece al sector secundario?","a":["Transformar materias primas en productos","Cultivar verduras","Recolectar frutas silvestres","Pescar"],"c":0},{"q":"¿Qué representa la escala de un mapa?","a":["Relación entre distancia del mapa y distancia real","La altura de una persona","El clima","La población exacta siempre"],"c":0},{"q":"¿Por qué es importante votar de forma informada?","a":["Elimina todos los problemas automáticamente","Hace innecesarias las leyes","Ayuda a elegir responsables con conocimiento","Evita conocer propuestas"],"c":2},{"q":"¿Qué recurso ayuda a conocer el pasado?","a":["Documento histórico","Semáforo","Control remoto","Calculadora únicamente"],"c":0},{"q":"¿Cuál es una forma pacífica de resolver conflictos?","a":["Amenazar","Dialogar y buscar acuerdos","Golpear","Difundir rumores"],"c":1},{"q":"¿Qué significa proteger el patrimonio natural?","a":["Conservar ecosistemas y especies","Cazar especies protegidas","Contaminar lagos","Talar todo el bosque"],"c":0}]},"5":{"Matemáticas":[{"q":"¿Cuánto es 3.5 + 2.75?","a":["5.75","6.25","5.25","6.15"],"c":1},{"q":"¿Cuánto es 2/3 + 1/3?","a":["1","3/6","1/3","2/6"],"c":0},{"q":"¿Cuál es el 25 % de 80?","a":["20","15","25","40"],"c":0},{"q":"¿Cuánto es 144 ÷ 12?","a":["12","11","14","16"],"c":0},{"q":"¿Cuál es el área de un triángulo de base 10 cm y altura 6 cm?","a":["16 cm²","32 cm²","60 cm²","30 cm²"],"c":3},{"q":"¿Cuál es el volumen de un cubo de lado 3 cm?","a":["9 cm³","12 cm³","27 cm³","18 cm³"],"c":2},{"q":"¿Qué número primo aparece aquí?","a":["27","17","33","21"],"c":1},{"q":"¿Cuánto es 4²?","a":["16","24","8","12"],"c":0},{"q":"¿Cuál es el mínimo común múltiplo de 4 y 6?","a":["12","10","6","24"],"c":0},{"q":"¿Cuánto es 1.2 × 10?","a":["1.2","2.2","12","120"],"c":2},{"q":"Una mochila cuesta $40 y tiene 10 % de descuento. ¿Cuánto descuentan?","a":["$36","$10","$30","$4"],"c":3},{"q":"¿Cuál es la media de 4, 6 y 8?","a":["5","7","18","6"],"c":3},{"q":"¿Cuántos grados suman los ángulos de un triángulo?","a":["180°","90°","360°","270°"],"c":0},{"q":"¿Qué fracción es equivalente a 3/5?","a":["6/10","3/10","5/3","9/10"],"c":0},{"q":"¿Cuánto es −3 + 8?","a":["−11","5","−5","11"],"c":1},{"q":"¿Cuál es el perímetro de un rectángulo de 8 cm por 3 cm?","a":["24 cm","16 cm","11 cm","22 cm"],"c":3},{"q":"¿Cuál es la razón simplificada de 12 a 8?","a":["6:4","4:6","3:2","2:3"],"c":2},{"q":"Si 5 cuadernos cuestan $15, ¿cuánto cuesta uno?","a":["$2","$5","$10","$3"],"c":3},{"q":"¿Qué decimal equivale a 3/4?","a":["0.34","0.8","0.75","0.25"],"c":2},{"q":"¿Cuánto es 2.4 + 0.86?","a":["2.94","2.86","3.16","3.26"],"c":3}],"Lenguaje":[{"q":"¿Cuál es la idea principal de un texto?","a":["El nombre del autor siempre","La última palabra","La información central que comunica","Un detalle sin importancia"],"c":2},{"q":"¿Qué es una metáfora?","a":["Una lista de instrucciones","Una firma","Una pregunta directa","Comparación implícita entre ideas"],"c":3},{"q":"¿Cuál palabra es grave o llana?","a":["Café","Reloj","Mesa","Canción"],"c":2},{"q":"¿Qué oración está escrita correctamente?","a":["¿Cuándo comienza la clase.","¿Cuándo comienza la clase?","Cuando comienza la clase?","Cuándo comienza la clase!"],"c":1},{"q":"¿Cuál es un conector de causa?","a":["Aunque","Sin embargo","Porque","Después"],"c":2},{"q":"¿Cuál palabra es un pronombre?","a":["Bonito","Casa","Ellos","Correr"],"c":2},{"q":"¿Qué caracteriza a una noticia?","a":["Da solo instrucciones de cocina","Está escrita solo en versos","Siempre tiene personajes mágicos","Informa sobre hechos de interés"],"c":3},{"q":"¿Qué es una biografía?","a":["Un poema sin tema","Un anuncio","Una receta","Relato de la vida de una persona"],"c":3},{"q":"¿Cuál palabra lleva hiato?","a":["Puerta","País","Tierra","Cuidado"],"c":1},{"q":"¿Cuál es el antónimo de “escaso”?","a":["Pequeño","Lejano","Abundante","Débil"],"c":2},{"q":"¿Qué es un argumento en un texto?","a":["La fecha de impresión","Razón que apoya una idea","Una palabra decorativa","El título únicamente"],"c":1},{"q":"¿Qué persona gramatical usa “nosotros”?","a":["Tercera persona plural","Primera persona plural","Segunda persona singular","Primera persona singular"],"c":1},{"q":"¿Cuál es una oración compuesta?","a":["¡Qué día!","Ana lee y Luis escribe.","Ana lee.","Silencio."],"c":1},{"q":"¿Qué función cumple el punto y seguido?","a":["Marcar una cita únicamente","Indicar una pregunta","Terminar siempre todo el texto","Separar oraciones dentro de un párrafo"],"c":3},{"q":"¿Qué significa inferir?","a":["Contar sílabas","Copiar literalmente","Cambiar el idioma","Deducir información a partir de pistas"],"c":3},{"q":"¿Cuál palabra es un verbo en infinitivo?","a":["Resolvió","Resolver","Resuelto","Resolviendo"],"c":1},{"q":"¿Qué recurso se usa en “el viento susurraba”?","a":["Instrucción","Definición","Enumeración","Personificación"],"c":3},{"q":"¿Qué debe incluir una exposición oral clara?","a":["Hablar de otro tema","Leer muy rápido sin pausas","Ideas ordenadas y voz audible","Evitar toda preparación"],"c":2},{"q":"¿Qué es una fuente confiable?","a":["Un mensaje reenviado sin contexto","Un rumor anónimo","Una fuente verificable y con autoría clara","Una publicación sin datos comprobables"],"c":2},{"q":"¿Para qué sirve revisar un borrador?","a":["Eliminar todas las ideas","Cambiarlo al azar","Hacerlo más confuso","Corregir y mejorar el texto"],"c":3}],"Ciencias":[{"q":"¿Qué proceso permite a las plantas fabricar alimento?","a":["Evaporación","Fotosíntesis","Fermentación","Digestión"],"c":1},{"q":"¿Qué órgano impulsa la sangre por el cuerpo?","a":["Pulmón","Corazón","Páncreas","Estómago"],"c":1},{"q":"¿Cuál es la función principal del sistema respiratorio?","a":["Intercambiar oxígeno y dióxido de carbono","Mover huesos","Filtrar la sangre","Digerir alimentos"],"c":0},{"q":"¿Qué partícula tiene carga eléctrica negativa?","a":["Protón","Núcleo completo","Neutrón","Electrón"],"c":3},{"q":"¿Qué tipo de energía produce un panel solar?","a":["Energía de gasolina","Energía nuclear directamente","Energía de carbón","Energía eléctrica a partir de luz"],"c":3},{"q":"¿Qué causa principalmente las estaciones del año?","a":["Inclinación del eje terrestre y traslación","La distancia diaria a la Luna","La rotación solamente","Las nubes"],"c":0},{"q":"¿Qué es una cadena alimentaria?","a":["Relación de alimentación entre organismos","Lista de compras","Una cadena de metal","Grupo de minerales"],"c":0},{"q":"¿Cuál es un ejemplo de adaptación?","a":["Espinas del cactus que reducen pérdida de agua","Un río que cambia de planeta","Una roca que habla","Una nube hecha de arena"],"c":0},{"q":"¿Qué órgano absorbe la mayoría de nutrientes?","a":["Intestino delgado","Vejiga","Esófago","Tráquea"],"c":0},{"q":"¿Qué mezcla es homogénea?","a":["Piedras con hojas","Ensalada","Agua con sal disuelta","Agua con arena visible"],"c":2},{"q":"¿Cuál es un efecto de la deforestación?","a":["Aumento automático de bosques","Pérdida de hábitats y erosión","Más agua potable siempre","Desaparición de la gravedad"],"c":1},{"q":"¿Qué unidad se usa para medir la masa?","a":["Kilogramo","Segundo","Litro","Metro"],"c":0},{"q":"¿Qué planeta es conocido por sus anillos prominentes?","a":["Saturno","Mercurio","Tierra","Marte"],"c":0},{"q":"¿Qué cambio de estado ocurre cuando el vapor se vuelve líquido?","a":["Fusión","Condensación","Evaporación","Sublimación"],"c":1},{"q":"¿Qué estructura protege el cerebro?","a":["Pelvis","Columna únicamente","Cráneo","Costillas"],"c":2},{"q":"¿Cuál es un microorganismo?","a":["Piedra","Bacteria","Mariposa","Roble"],"c":1},{"q":"¿Qué es una hipótesis científica?","a":["Una ley escrita por cualquier persona","Resultado que nunca se revisa","Explicación provisional que se puede poner a prueba","Opinión sin posibilidad de prueba"],"c":2},{"q":"¿Qué recurso natural es no renovable a escala humana?","a":["Petróleo","Marea","Viento","Luz solar"],"c":0},{"q":"¿Cómo se llama el movimiento de la Tierra sobre su eje?","a":["Precesión lunar","Traslación","Rotación","Condensación"],"c":2},{"q":"¿Qué acción reduce residuos?","a":["Mezclar pilas con comida","Tirar basura en quebradas","Reutilizar y reciclar materiales","Usar desechables siempre"],"c":2}],"Estudios Sociales":[{"q":"¿Qué rama estudia la población y su distribución?","a":["Química","Geografía humana","Astronomía","Botánica"],"c":1},{"q":"¿Qué es una línea de tiempo?","a":["Un calendario del clima únicamente","Representación ordenada de acontecimientos","Una tabla de multiplicar","Un mapa de carreteras"],"c":1},{"q":"¿Qué poder del Estado aplica las leyes y administra el gobierno?","a":["Municipio solamente","Órgano Judicial","Órgano Ejecutivo","Órgano Legislativo"],"c":2},{"q":"¿Cuál es una función del Órgano Judicial?","a":["Recolectar basura únicamente","Impartir justicia","Organizar clases","Aprobar todas las leyes"],"c":1},{"q":"¿Qué es la migración?","a":["Intercambio de productos solamente","Cambio de estación","Movimiento de las olas","Desplazamiento de personas de un lugar a otro"],"c":3},{"q":"¿Qué factor puede impulsar la migración?","a":["El color de una bandera únicamente","Búsqueda de empleo o seguridad","La hora del día siempre","La forma de una nube"],"c":1},{"q":"¿Qué significa desarrollo sostenible?","a":["Satisfacer necesidades cuidando recursos para el futuro","Eliminar todos los parques","Producir basura para crecer","Consumir recursos sin límites"],"c":0},{"q":"¿Qué actividad corresponde al sector terciario?","a":["Pesca artesanal","Educación y servicios","Extracción minera","Cultivo de maíz"],"c":1},{"q":"¿Qué es una fuente primaria histórica?","a":["Un resumen moderno sin referencias","Una novela inventada sobre el pasado","Una opinión actual sin pruebas","Una carta escrita en la época estudiada"],"c":3},{"q":"¿Qué utilidad tiene un censo?","a":["Medir terremotos","Predecir cada lluvia","Contar solo edificios antiguos","Conocer datos de la población"],"c":3},{"q":"¿Cuál es un deber ciudadano?","a":["Evitar toda colaboración","Impedir que otros opinen","Destruir bienes comunes","Participar responsablemente y respetar las leyes"],"c":3},{"q":"¿Qué se entiende por identidad cultural?","a":["La moneda únicamente","El tamaño de una ciudad","Costumbres, valores y expresiones compartidas","Una sola comida universal"],"c":2},{"q":"¿Qué fenómeno natural puede causar inundaciones?","a":["Eclipse lunar","Brisa leve siempre","Rotación terrestre diaria por sí sola","Lluvias intensas"],"c":3},{"q":"¿Qué medida ayuda a prepararse ante desastres?","a":["Ignorar alertas","Plan de evacuación y mochila de emergencia","Acercarse a cables caídos","Bloquear salidas"],"c":1},{"q":"¿Qué representa la escala gráfica de un mapa?","a":["La edad del mapa solamente","El número de habitantes exacto","La temperatura promedio","Distancias reales en proporción al mapa"],"c":3},{"q":"¿Por qué es importante la participación comunitaria?","a":["Ayuda a identificar problemas y buscar soluciones","Elimina la necesidad de dialogar","Impide la cooperación","Reemplaza toda responsabilidad personal"],"c":0},{"q":"¿Cuál es una actividad del sector primario?","a":["Atención médica","Fabricación de zapatos","Pesca","Transporte urbano"],"c":2},{"q":"¿Qué es la Constitución?","a":["Un reglamento de un solo salón","Un mapa físico","Un libro de cuentos","Norma fundamental que organiza el Estado y reconoce derechos"],"c":3},{"q":"¿Qué actitud favorece la cultura de paz?","a":["Difundir rumores","Excluir a quien piensa distinto","Responder con violencia","Escuchar y resolver desacuerdos con diálogo"],"c":3},{"q":"¿Qué acción protege el patrimonio histórico?","a":["Rayar paredes antiguas","Extraer piezas sin permiso","Dañar edificios históricos","Conservar monumentos y respetar sitios arqueológicos"],"c":3}]}};

document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  const canvas = $("juego");
  const ctx = canvas.getContext("2d");
  const el = {
    inicio:$("pantallaInicio"), juego:$("pantallaJuego"), grado:$("grado"),
    comenzar:$("btnComenzar"), pausar:$("btnPausar"), reiniciar:$("btnReiniciar"),
    volver:$("btnInicio"), puntos:$("puntos"), llaves:$("llaves"),
    gradoActual:$("gradoActual"), estado:$("estado"), interactuar:$("btnInteractuar"),
    modal:$("modalPregunta"), materia:$("materia"), materiaIcon:$("materiaIcon"),
    progreso:$("progreso"), pregunta:$("pregunta"), respuestas:$("respuestas"),
    resultado:$("resultado"), siguiente:$("btnSiguiente"), barra:$("barraProgreso"),
    cerrarQuiz:$("btnCerrarQuiz"), modalMensaje:$("modalMensaje"),
    mensajeTitulo:$("mensajeTitulo"), mensajeTexto:$("mensajeTexto"),
    mensajeEmoji:$("mensajeEmoji"), cerrarMensaje:$("btnCerrarMensaje"),
    sonido:$("btnSonido")
  };

  const salones = [
    {id:"Matemáticas",label:"MATEMÁTICAS",icon:"➗",x:160,y:155,w:240,h:155,color:"#49c6ff"},
    {id:"Lenguaje",label:"LENGUAJE",icon:"📖",x:560,y:155,w:240,h:155,color:"#b29aff"},
    {id:"Ciencias",label:"CIENCIAS",icon:"🧪",x:160,y:390,w:240,h:155,color:"#47e0ad"},
    {id:"Estudios Sociales",label:"ESTUDIOS SOCIALES",icon:"🌎",x:560,y:390,w:240,h:155,color:"#ffd166"}
  ];
  const icons={"Matemáticas":"➗","Lenguaje":"📖","Ciencias":"🧪","Estudios Sociales":"🌎"};
  const keys = new Set();
  const state = {
    grade:"3", score:0, collected:new Set(), done:new Set(), paused:false,
    x:480,y:340,speed:3.1, quiz:null, quizIndex:0, quizCorrect:0, currentRoom:null,
    muted:true, audio:null, animation:0, lastTime:0
  };
  const playerRadius=14;
  const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));

  function playTone(freq=550,duration=.08){
    if(state.muted) return;
    try{
      state.audio=state.audio||new (window.AudioContext||window.webkitAudioContext)();
      const osc=state.audio.createOscillator(), gain=state.audio.createGain();
      osc.frequency.value=freq; osc.type="sine"; gain.gain.value=.05;
      osc.connect(gain); gain.connect(state.audio.destination); osc.start();
      gain.gain.exponentialRampToValueAtTime(.001,state.audio.currentTime+duration);
      osc.stop(state.audio.currentTime+duration);
    }catch(_){}
  }
  function say(text){el.estado.textContent=text;}
  function updateHUD(){
    el.puntos.textContent=state.score;
    el.llaves.textContent=`${state.collected.size} / 4`;
    el.gradoActual.textContent=`${state.grade}.º`;
    salones.forEach(r=>{
      const item=$(`key-${r.id}`);
      if(item){item.classList.toggle("obtained",state.collected.has(r.id));item.querySelector("b").textContent=state.collected.has(r.id)?"🔓":"🔒";}
    });
  }
  function startGame(){
    state.grade=el.grado.value;
    state.score=0;state.collected.clear();state.done.clear();
    state.x=480;state.y=340;state.paused=false;state.quiz=null;
    el.pausar.textContent="⏸ Pausar";
    el.inicio.classList.add("hidden");el.juego.classList.remove("hidden");
    el.modal.classList.add("hidden");el.modalMensaje.classList.add("hidden");
    updateHUD();say("Explora el colegio. Acércate a un salón y pulsa Interactuar.");
    draw();
  }
  function resetGame(){startGame();}
  function roomAtPlayer(){
    return salones.find(r=>state.x>=r.x-15&&state.x<=r.x+r.w+15&&state.y>=r.y-15&&state.y<=r.y+r.h+15);
  }
  function nearestRoom(){
    let best=null,dist=Infinity;
    for(const r of salones){
      const cx=r.x+r.w/2,cy=r.y+r.h/2,d=Math.hypot(state.x-cx,state.y-cy);
      if(d<dist){best=r;dist=d;}
    }
    return dist<100?best:null;
  }
  function collides(nx,ny){
    if(nx<42||nx>918||ny<42||ny>598)return true;
    for(const r of salones){
      const inside=nx>r.x-playerRadius&&nx<r.x+r.w+playerRadius&&ny>r.y-playerRadius&&ny<r.y+r.h+playerRadius;
      if(inside)return true;
    }
    // outer walls and a few interior planters; corridors stay open
    return false;
  }
  function move(dx,dy){
    if(state.paused||!el.modal.classList.contains("hidden")||el.inicio.classList.contains("hidden")===false)return;
    const nx=state.x+dx,ny=state.y+dy;
    if(!collides(nx,state.y))state.x=nx;
    if(!collides(state.x,ny))state.y=ny;
    if(dx||dy)draw();
  }
  function updateMovement(){
    if(state.paused||!el.modal.classList.contains("hidden")||!el.modalMensaje.classList.contains("hidden"))return;
    let dx=0,dy=0;
    if(keys.has("ArrowUp")||keys.has("w"))dy-=1;
    if(keys.has("ArrowDown")||keys.has("s"))dy+=1;
    if(keys.has("ArrowLeft")||keys.has("a"))dx-=1;
    if(keys.has("ArrowRight")||keys.has("d"))dx+=1;
    if(dx||dy){const m=Math.hypot(dx,dy);move(dx/m*state.speed,dy/m*state.speed);}
  }
  function roundedRect(c,x,y,w,h,r,fill,stroke){
    c.beginPath();c.roundRect(x,y,w,h,r);if(fill){c.fillStyle=fill;c.fill()}if(stroke){c.strokeStyle=stroke;c.stroke()}
  }
  function drawTree(x,y,scale=1){
    ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);
    ctx.fillStyle="#76502f";ctx.fillRect(-5,4,10,22);
    ctx.fillStyle="#2c8748";ctx.beginPath();ctx.arc(0,-3,19,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#3da95a";ctx.beginPath();ctx.arc(-8,-10,12,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#65c96c";ctx.beginPath();ctx.arc(7,-12,8,0,Math.PI*2);ctx.fill();
    ctx.restore();
  }
  function drawBench(x,y){
    ctx.save();ctx.fillStyle="#80512e";ctx.fillRect(x-20,y-7,40,14);ctx.fillStyle="#c78a4d";ctx.fillRect(x-20,y-9,40,5);
    ctx.fillStyle="#51402e";ctx.fillRect(x-15,y+7,4,8);ctx.fillRect(x+11,y+7,4,8);ctx.restore();
  }
  function drawStudent(){
    const x=state.x,y=state.y;
    const moving=keys.size>0,step=moving?Math.sin(state.animation*.45)*4:0;
    // sombra
    ctx.save();ctx.translate(x,y);
    ctx.fillStyle="rgba(18,40,25,.25)";ctx.beginPath();ctx.ellipse(0,13,16,7,0,0,Math.PI*2);ctx.fill();
    // piernas y zapatos, cuerpo entero
    ctx.strokeStyle="#27324a";ctx.lineWidth=5;ctx.lineCap="round";
    ctx.beginPath();ctx.moveTo(-5,5);ctx.lineTo(-6+step,14);ctx.moveTo(5,5);ctx.lineTo(6-step,14);ctx.stroke();
    ctx.fillStyle="#26334c";roundedRect(ctx,-12+step,11,10,5,2,"#26334c");roundedRect(ctx,2-step,11,10,5,2,"#26334c");
    // brazos
    ctx.strokeStyle="#e6a06d";ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-8,-5);ctx.lineTo(-12-step*.4,3);ctx.moveTo(8,-5);ctx.lineTo(12+step*.4,3);ctx.stroke();
    // uniforme azul
    roundedRect(ctx,-9,-9,18,18,5,"#2677c8","#15529a");
    ctx.fillStyle="#f4f7ff";ctx.fillRect(-2,-7,4,11);
    // cuello y cabeza
    roundedRect(ctx,-3,-13,6,6,2,"#d99564");
    ctx.fillStyle="#d99564";ctx.beginPath();ctx.ellipse(0,-17,9,10,0,0,Math.PI*2);ctx.fill();
    // cabello
    ctx.fillStyle="#513323";ctx.beginPath();ctx.arc(0,-20,9,Math.PI,Math.PI*2);ctx.lineTo(9,-17);ctx.quadraticCurveTo(4,-14,1,-17);ctx.lineTo(-8,-15);ctx.closePath();ctx.fill();
    // cara mirando hacia abajo
    ctx.fillStyle="#2c2630";ctx.beginPath();ctx.arc(-3,-16,1,0,Math.PI*2);ctx.arc(3,-16,1,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle="#9b4f40";ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(-2,-12);ctx.quadraticCurveTo(0,-10,2,-12);ctx.stroke();
    // mochila
    roundedRect(ctx,-12,-7,5,12,2,"#ef8d32","#b95b22");
    ctx.restore();
  }
  function draw(){
    const W=canvas.width,H=canvas.height;
    ctx.clearRect(0,0,W,H);
    // jardín escolar luminoso
    const grass=ctx.createLinearGradient(0,0,W,H);grass.addColorStop(0,"#a9e69b");grass.addColorStop(.55,"#82d77f");grass.addColorStop(1,"#65c66d");
    ctx.fillStyle=grass;ctx.fillRect(0,0,W,H);
    // textura suave de césped
    for(let i=0;i<220;i++){const x=(i*97)%W,y=(i*53)%H;ctx.strokeStyle=i%2?"#5ab86755":"#e0f7b455";ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+3,y-5);ctx.stroke();}
    // límite exterior del recinto
    roundedRect(ctx,14,14,W-28,H-28,18,"#91d983","#e7f8c5");
    // senderos principales de adoquín
    roundedRect(ctx,425,28,110,584,8,"#e7c995","#cba56f");
    roundedRect(ctx,35,320,890,54,8,"#e7c995","#cba56f");
    // líneas del camino
    ctx.strokeStyle="#c9a46f88";ctx.lineWidth=1;
    for(let y=40;y<610;y+=24){ctx.beginPath();ctx.moveTo(430,y);ctx.lineTo(530,y);ctx.stroke();}
    for(let x=45;x<920;x+=32){ctx.beginPath();ctx.moveTo(x,326);ctx.lineTo(x,368);ctx.stroke();}
    // macizos de flores
    [[90,285],[865,285],[90,405],[865,405],[350,95],[610,95],[350,570],[610,570]].forEach(([x,y],i)=>{
      ctx.fillStyle="#4da95c";ctx.beginPath();ctx.ellipse(x,y,26,15,0,0,Math.PI*2);ctx.fill();
      for(let j=0;j<5;j++){ctx.fillStyle=["#f6a4cf","#fff0a3","#bda9ff"][j%3];ctx.beginPath();ctx.arc(x-15+j*7,y-2+(j%2)*6,3,0,Math.PI*2);ctx.fill();}
    });
    // árboles y bancas
    [[55,65,.9],[135,65,.8],[805,65,.8],[900,65,.9],[55,565,.9],[135,570,.8],[805,570,.8],[900,565,.9],[375,270,.65],[585,270,.65],[375,430,.65],[585,430,.65]].forEach(a=>drawTree(...a));
    drawBench(245,105);drawBench(715,105);drawBench(245,565);drawBench(715,565);
    // colegio: cuatro edificios con techo, ventanas y puerta
    salones.forEach((r,i)=>{
      const got=state.collected.has(r.id),near=nearestRoom()?.id===r.id;
      ctx.save();
      // sombra del edificio
      roundedRect(ctx,r.x-3,r.y+5,r.w+6,r.h+2,10,"#3f874a55");
      // paredes
      roundedRect(ctx,r.x,r.y,r.w,r.h,8,got?"#d8f2c7":"#fff0d0",got?"#2c9a65":"#b87d4c");
      // techo rojo y borde
      roundedRect(ctx,r.x-5,r.y-8,r.w+10,35,8,got?"#2e9c6b":"#d65b45","#a74436");
      ctx.fillStyle="#f28b62";ctx.fillRect(r.x+8,r.y+16,r.w-16,4);
      // ventanas
      for(let wx=r.x+18;wx<r.x+r.w-15;wx+=43){
        roundedRect(ctx,wx,r.y+42,25,27,3,"#8ed9f5","#4b8db4");ctx.fillStyle="#e8fbff";ctx.fillRect(wx+11,r.y+43,2,25);ctx.fillRect(wx+1,r.y+54,23,2);
      }
      // puerta
      roundedRect(ctx,r.x+r.w/2-15,r.y+r.h-38,30,38,4,"#8b5a3b","#69402d");ctx.fillStyle="#f4c46f";ctx.beginPath();ctx.arc(r.x+r.w/2+8,r.y+r.h-19,2,0,Math.PI*2);ctx.fill();
      // letrero del salón
      roundedRect(ctx,r.x+25,r.y+76,r.w-50,29,7,got?"#d0ffe4":"#fffdf3",got?"#2e9c6b":"#e1b783");
      ctx.font="900 13px system-ui";ctx.textAlign="center";ctx.fillStyle=got?"#14784c":"#8c4c35";ctx.fillText(r.label,r.x+r.w/2,r.y+95);
      ctx.font="bold 10px system-ui";ctx.fillStyle="#5d6c50";ctx.fillText(got?"✓ LLAVE CONSEGUIDA":state.done.has(r.id)?"RETO COMPLETADO":"RETO EDUCATIVO",r.x+r.w/2,r.y+122);
      if(near){roundedRect(ctx,r.x+r.w/2-55,r.y+r.h+8,110,23,8,"#075b43","#d2ffe5");ctx.font="bold 10px system-ui";ctx.fillStyle="#fff";ctx.fillText("PULSA INTERACTUAR",r.x+r.w/2,r.y+r.h+23);}
      ctx.restore();
    });
    // entrada y portón de salida
    roundedRect(ctx,418,580,124,34,7,state.collected.size===4?"#13885f":"#596a58",state.collected.size===4?"#d8ffe8":"#e9f4d8");
    ctx.fillStyle="#fff";ctx.font="900 13px system-ui";ctx.textAlign="center";ctx.fillText(state.collected.size===4?"¡SALIDA ABIERTA!":"SALIDA 🔒",480,602);
    // estudiante de cuerpo completo
    drawStudent();
    // etiqueta de ayuda
    const near=nearestRoom();
    if(near&&!state.paused&&el.modal.classList.contains("hidden")){
      roundedRect(ctx,295,24,370,30,10,"#164d37e8","#e1ffe3");ctx.font="bold 12px system-ui";ctx.fillStyle="#fff";ctx.textAlign="center";ctx.fillText(`Acércate a ${near.label} y pulsa INTERACTUAR`,480,43);
    }
    if(state.paused){ctx.fillStyle="#14251dcc";ctx.fillRect(14,14,W-28,H-28);ctx.font="900 36px system-ui";ctx.fillStyle="#fff";ctx.textAlign="center";ctx.fillText("JUEGO EN PAUSA",480,315);}
  }
  function openRoom(){
    if(state.paused||!el.modal.classList.contains("hidden"))return;
    if(state.x>415&&state.x<545&&state.y>545){
      if(state.collected.size===4){showMessage("🏆","¡ESCAPASTE DEL COLEGIO!","¡Lo lograste! Conseguistes las cuatro llaves y completaste la aventura con "+state.score+" puntos.");return;}
      say(`Te faltan ${4-state.collected.size} llave(s). Visita los salones para conseguirlas.`);playTone(180,.12);return;
    }
    const r=nearestRoom();
    if(!r){say("Acércate a uno de los cuatro salones para comenzar su reto.");return;}
    if(state.collected.has(r.id)){say(`Ya conseguiste la llave de ${r.id}. ¡Visita otro salón!`);return;}
    state.currentRoom=r;
    const all=(BANCO[state.grade]&&BANCO[state.grade][r.id])||[];
    if(all.length<5){showMessage("⚠️","No se encontraron preguntas","Revisa el contenido de juego.js. El banco de preguntas no está completo.");return;}
    const chosen=[...all].sort(()=>Math.random()-.5).slice(0,5);
    state.quiz={room:r,questions:chosen};
    state.quizIndex=0;state.quizCorrect=0;
    renderQuestion();
    el.modal.classList.remove("hidden");
  }
  function renderQuestion(){
    const q=state.quiz.questions[state.quizIndex];
    el.materia.textContent=state.currentRoom.id;
    el.materiaIcon.textContent=icons[state.currentRoom.id];
    el.progreso.textContent=`Pregunta ${state.quizIndex+1} de ${state.quiz.questions.length}`;
    el.barra.style.width=`${state.quizIndex/state.quiz.questions.length*100}%`;
    el.pregunta.textContent=q.q;
    el.respuestas.replaceChildren();
    el.resultado.textContent="";
    el.resultado.className="feedback";
    el.siguiente.disabled=true;
    el.siguiente.textContent=state.quizIndex===state.quiz.questions.length-1?"Terminar reto ✓":"Siguiente pregunta →";
    q.a.forEach((answer,index)=>{
      const b=document.createElement("button");b.type="button";b.className="answer-btn";
      const letter=document.createElement("span");letter.className="letter";letter.textContent=String.fromCharCode(65+index);
      const label=document.createElement("span");label.textContent=answer;b.append(letter,label);
      b.addEventListener("click",()=>chooseAnswer(index,b));el.respuestas.append(b);
    });
  }
  function chooseAnswer(index,button){
    if(!state.quiz||!el.siguiente.disabled)return;
    const q=state.quiz.questions[state.quizIndex];
    [...el.respuestas.querySelectorAll("button")].forEach((b,i)=>{
      b.disabled=true;if(i===q.c)b.classList.add("correct");
    });
    if(index===q.c){
      state.quizCorrect++;state.score+=10;el.resultado.textContent="¡Correcto! +10 puntos. 🎉";el.resultado.classList.add("good");playTone(760,.1);
    }else{
      button.classList.add("wrong");el.resultado.textContent=`No exactamente. La respuesta correcta es: ${q.a[q.c]}.`;el.resultado.classList.add("bad");playTone(190,.14);
    }
    updateHUD();el.siguiente.disabled=false;el.barra.style.width=`${(state.quizIndex+1)/state.quiz.questions.length*100}%`;
  }
  function nextQuestion(){
    if(!state.quiz||el.siguiente.disabled)return;
    if(state.quizIndex<state.quiz.questions.length-1){state.quizIndex++;renderQuestion();return;}
    const room=state.currentRoom,correct=state.quizCorrect;
    el.modal.classList.add("hidden");state.quiz=null;
    if(correct>=3){
      state.collected.add(room.id);state.done.add(room.id);state.score+=25;
      say(`¡Reto superado! Conseguistes la llave de ${room.id}. +25 puntos extra.`);
      showMessage("🗝️","¡Llave conseguida!",`Respondiste correctamente ${correct} de 5 preguntas de ${room.id}. Ganaste una llave y 25 puntos extra.`);
    }else{
      say(`Necesitas 3 respuestas correctas para conseguir la llave de ${room.id}. ¡Puedes intentarlo otra vez!`);
      showMessage("📚","¡Sigue practicando!",`Tuviste ${correct} de 5 respuestas correctas. Necesitas al menos 3 para ganar esta llave. ¡Intenta otra vez!`);
    }
    updateHUD();draw();
  }
  function showMessage(emoji,title,message){
    el.mensajeEmoji.textContent=emoji;el.mensajeTitulo.textContent=title;el.mensajeTexto.textContent=message;
    el.modalMensaje.classList.remove("hidden");
  }
  function closeMessage(){el.modalMensaje.classList.add("hidden");draw();}
  function togglePause(){
    if(!el.juego.classList.contains("hidden")&&el.modal.classList.contains("hidden")&&el.modalMensaje.classList.contains("hidden")){
      state.paused=!state.paused;el.pausar.textContent=state.paused?"▶ Continuar":"⏸ Pausar";say(state.paused?"Juego pausado.":"¡Sigue explorando!");draw();
    }
  }
  // Keyboard movement
  document.addEventListener("keydown",e=>{
    const k=e.key.length===1?e.key.toLowerCase():e.key;
    if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(k))e.preventDefault();
    if(k==="Escape"){
      if(!el.modal.classList.contains("hidden")){el.modal.classList.add("hidden");state.quiz=null;say("Reto cerrado. Puedes volver a intentarlo.");}
      else if(!el.modalMensaje.classList.contains("hidden"))closeMessage();
      else togglePause();
    }
    keys.add(k);
    if(k==="Enter"&&el.modal.classList.contains("hidden"))openRoom();
  });
  document.addEventListener("keyup",e=>keys.delete(e.key.length===1?e.key.toLowerCase():e.key));
  window.addEventListener("blur",()=>keys.clear());
  // Mobile buttons: hold to move
  document.querySelectorAll("[data-dir]").forEach(btn=>{
    const direction=btn.dataset.dir;
    const delta={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[direction];
    let interval=null;
    const begin=e=>{e.preventDefault();keys.add(({up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight"})[direction]);move(delta[0]*state.speed*1.5,delta[1]*state.speed*1.5);};
    const end=()=>keys.delete(({up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight"})[direction]);
    btn.addEventListener("pointerdown",begin);btn.addEventListener("pointerup",end);btn.addEventListener("pointercancel",end);btn.addEventListener("pointerleave",end);
  });
  el.comenzar.addEventListener("click",startGame);
  el.reiniciar.addEventListener("click",resetGame);
  el.volver.addEventListener("click",()=>{el.juego.classList.add("hidden");el.inicio.classList.remove("hidden");state.paused=false;});
  el.interactuar.addEventListener("click",openRoom);
  el.pausar.addEventListener("click",togglePause);
  el.siguiente.addEventListener("click",nextQuestion);
  el.cerrarQuiz.addEventListener("click",()=>{el.modal.classList.add("hidden");state.quiz=null;say("Reto cerrado. Puedes intentarlo de nuevo.");});
  el.cerrarMensaje.addEventListener("click",closeMessage);
  el.sonido.addEventListener("click",()=>{state.muted=!state.muted;el.sonido.textContent=state.muted?"🔇 Sonido":"🔊 Sonido";el.sonido.setAttribute("aria-pressed",String(!state.muted));if(!state.muted)playTone(600,.07);});
  // Scale movement consistently with animation frame.
  function loop(now){
    const dt=Math.min(32,now-(state.lastTime||now));state.lastTime=now;
    if(!el.juego.classList.contains("hidden") && !state.paused && !state.quiz && el.modalMensaje.classList.contains("hidden")) updateMovement();
    state.animation++;requestAnimationFrame(loop);
  }
  // Canvas map pointer can be used to move toward a tapped point.
  canvas.addEventListener("pointerdown",e=>{
    if(state.paused||!el.modal.classList.contains("hidden"))return;
    const rect=canvas.getBoundingClientRect();
    const tx=(e.clientX-rect.left)*canvas.width/rect.width,ty=(e.clientY-rect.top)*canvas.height/rect.height;
    // Tap room center as a simple assist, movement still obeys walls.
    const r=salones.find(room=>tx>=room.x&&tx<=room.x+room.w&&ty>=room.y&&ty<=room.y+room.h);
    if(r){state.x=clamp(r.x+r.w/2,42,918);state.y=clamp(r.y<320?r.y+r.h+10:r.y-10,42,598);say(`Estás cerca de ${r.id}. Pulsa Interactuar.`);draw();}
  });
  updateHUD();draw();requestAnimationFrame(loop);
});
