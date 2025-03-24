import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage{

  posts = [
    {
      title: 'Alberto Romero',
      subtitle: 'Hace 5 minutos',
      avatar: 'https://th.bing.com/th/id/R.b51d67c07e100f6c9caf59dca4f7ee51?rik=t8o9fnO2Q0rxJw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-lkT0yAUnr84%2fVOznUApyKCI%2fAAAAAAAAO6s%2fQGI24L0kSzc%2fs1600%2f5.jpg&ehk=ql4t1F5SIf4UVY6uyIhyqdq9eoR7%2f7F8TFAK7FALqS4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
      image: 'https://th.bing.com/th/id/OIP.PFndj5fIuUEN-TSzngA4aQHaHa?rs=1&pid=ImgDetMain',
      content: 'De las mejores fotos que he tomado'
    },
    {
      title: 'Alfredo Rosas',
      subtitle: 'Hace 40 minutos',
      avatar: 'https://th.bing.com/th/id/OIP.9b3pS30llDmG8ABubFlH6AHaHb?rs=1&pid=ImgDetMain',
      image: 'https://www.blogdelfotografo.com/wp-content/uploads/2016/05/Dirk-Dallas.jpg',
      content: 'Viajando por el mundo'
    },
    {
      title: 'Liz Hernandez',
      subtitle: 'Hace 1 hora',
      avatar: 'https://www.dzoom.org.es/wp-content/uploads/2011/08/3357059077_52e1f4ff89_z.jpg',
      image: 'https://www.dzoom.org.es/wp-content/uploads/2011/08/insp-cuadradas-2.jpg',
      content: 'La belleza de la naturaleza'
    },
    {
      title: 'Diego Sanchez',
      subtitle: 'Hace 1 hora',
      avatar: 'https://images3.alphacoders.com/100/thumb-1920-100455.jpg',
      image: 'https://th.bing.com/th/id/R.ed5c8dbf8db0ab66b772d594b84051e5?rik=9wLgcJtTcbGiWg&riu=http%3a%2f%2fwww.dzoom.org.es%2fdzdn%2fimg%2f0811%2fformato-cuadrado-10.jpg&ehk=bGk4ZgDelhL6Z5ZQqVHfi35ljX%2bymT4C7si8GRtisQg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
      content: 'Probando mi nueva cámara'
    },
    {
      title: 'Daniel Cobos',
      subtitle: 'Hace 2 horas',
      avatar: 'https://preview.redd.it/nintendo-has-set-up-a-life-sized-statue-of-totk-link-in-v0-dd09wd4c9is91.jpg?width=1800&format=pjpg&auto=webp&s=f5ba66b3d19408404354dc065b03785202fa4910',
      image: 'https://img.lalr.co/cms/2020/03/13194904/videojuegos.jpg',
      content: 'Estamos en la recta final'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}