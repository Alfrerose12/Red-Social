import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {
  posts: any[] = [
    {
      _id: '64b7f9f1c2a4d2e4b8f9a123', 
      title: 'Alberto Romero',
      subtitle: 'Hace 5 minutos',
      profilePicture:'https://th.bing.com/th/id/OIP.PFndj5fIuUEN-TSzngA4aQHaHa?rs=1&pid=ImgDetMain',
     avatar: 'https://th.bing.com/th/id/R.b51d67c07e100f6c9caf59dca4f7ee51?rik=t8o9fnO2Q0rxJw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-lkT0yAUnr84%2fVOznUApyKCI%2fAAAAAAAAO6s%2fQGI24L0kSzc%2fs1600%2f5.jpg&ehk=ql4t1F5SIf4UVY6uyIhyqdq9eoR7%2f7F8TFAK7FALqS4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
      image: 'https://th.bing.com/th/id/OIP.PFndj5fIuUEN-TSzngA4aQHaHa?rs=1&pid=ImgDetMain',
      comments: [],
      isDynamic: false,
      likes:5,
    },
    {
      _id: '64b7f9f1c2a4d2e4b8f9a123', 
      title: 'Alfredo Rosas',
      subtitle: 'Hace 40 minutos',
      avatar: 'https://th.bing.com/th/id/OIP.9b3pS30llDmG8ABubFlH6AHaHb?rs=1&pid=ImgDetMain',
      image: 'https://www.blogdelfotografo.com/wp-content/uploads/2016/05/Dirk-Dallas.jpg',
      content: 'Viajando por el mundo',
      comments: [],
      isDynamic: false,
      likes: 3,
    },
    { id: '23b7f9f1c2a4d2e4b8f9a123',
      title: 'Liz Hernandez',
      subtitle: 'Hace 1 hora',
      avatar: 'https://www.dzoom.org.es/wp-content/uploads/2011/08/3357059077_52e1f4ff89_z.jpg',
      image: 'https://www.dzoom.org.es/wp-content/uploads/2011/08/insp-cuadradas-2.jpg',
      content: 'La belleza de la naturaleza',
      comments: [], 
      isDynamic: false,
      likes: 2,
    },
    { _id: '9nb7f9f1c2a4d2e4b8f9a123',
      title: 'Diego Sanchez',
      subtitle: 'Hace 1 hora',
      avatar: 'https://images3.alphacoders.com/100/thumb-1920-100455.jpg',
      image: 'https://th.bing.com/th/id/R.ed5c8dbf8db0ab66b772d594b84051e5?rik=9wLgcJtTcbGiWg&riu=http%3a%2f%2fwww.dzoom.org.es%2fdzdn%2fimg%2f0811%2fformato-cuadrado-10.jpg&ehk=bGk4ZgDelhL6Z5ZQqVHfi35ljX%2bymT4C7si8GRtisQg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
      content: 'Probando mi nueva cámara',
      comments: [], 
      isDynamic: false,
      likes: 7,
    },
    { _id: '204b7f9f1c2a4d2e4b8f9a1ss',
      title: 'Daniel Cobos',
      subtitle: 'Hace 2 horas',
      avatar: 'https://preview.redd.it/nintendo-has-set-up-a-life-sized-statue-of-totk-link-in-v0-dd09wd4c9is91.jpg?width=1800&format=pjpg&auto=webp&s=f5ba66b3d19408404354dc065b03785202fa4910',
      image: 'https://img.lalr.co/cms/2020/03/13194904/videojuegos.jpg',
      content: 'Estamos en la recta final',
      comments: [], // Lista de comentarios para esta publicación
      isDynamic: false,
      likes: 4,
    },
  ];

  currentUser = {
    _id: '67eb701fb7d4213f1ccf5f58', 
    name: 'Diego Sanchez Sanchez',
    profilePicture: 'https://i.pinimg.com/736x/c5/96/fd/c596fdc7c9e962ec84bfd3af4c28c471.jpg',
  };
  isAdmin: boolean = false;
  nuevaPublicacion = { content: '', image: '' };
  currentUserId: string | null = null;
  nuevoComentario: { [key: string]: string } = {};

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.currentUserId = localStorage.getItem('userId');
    this.isAdmin = localStorage.getItem('isAdmin') === 'true';
    this.cargarPublicaciones();
  }

  cargarPublicaciones() {
    this.apiService.getPosts().subscribe(
      (response) => {
        console.log('Publicaciones recibidas del backend:', response);
        const publicacionesConComentarios = response.map((post: any) => ({
          ...post,
          comments: post.comments || [],
          likes: typeof post.likes === 'number' ? post.likes : 0,
          likedBy: post.likedBy || [] 
        }));
        this.posts = [...this.posts, ...publicacionesConComentarios];
      },
      (error) => {
        console.error('Error al cargar publicaciones:', error);
      }
    );
  }

  incrementarLikes(postId: string) {
    const post = this.posts.find((p) => p._id === postId);
    if (post) {
      if (post.likedBy && post.likedBy.includes(this.currentUserId)) {
        post.likes = Math.max((post.likes || 0) - 1, 0);
        post.likedBy = post.likedBy.filter((userId: string) => userId !== this.currentUserId);
        console.log(`Dislike para la publicación ${postId}: ${post.likes}`);
      } else {
        post.likes = (post.likes || 0) + 1;
        post.likedBy = post.likedBy || [];
        post.likedBy.push(this.currentUserId);
        console.log(`Like para la publicación ${postId}: ${post.likes}`);
      }
    }
  }
  agregarComentario(postId: string) {
    const comentario = this.nuevoComentario[postId]?.trim();
    if (!comentario) {
      console.error('El comentario está vacío.');
      return;
    }
  
    const post = this.posts.find((p) => p._id === postId);
  
    if (!post) {
      console.error('Publicación no encontrada.');
      return;
    }
  
    const nuevoComentario = {
      text: comentario,
      user: {
        _id: this.currentUser._id,
        name: this.currentUser.name,
        profilePicture: this.currentUser.profilePicture,
      },
    };
  
    post.comments.push(nuevoComentario);
    this.nuevoComentario[postId] = '';
  
    console.log('Comentario agregado:', nuevoComentario);
  
    this.apiService.addComment({ text: comentario, postId }).subscribe(
      (response) => {
        console.log('Comentario guardado en el backend:', response);
      },
      (error) => {
        console.error('Error al guardar el comentario en el backend:', error);
      }
    );
  }
  eliminarPublicacion(index: number) {
    const postId = this.posts[index]._id;
    this.apiService.deletePost(postId).subscribe(
      () => {
        console.log('Publicación eliminada:', postId);
        this.posts.splice(index, 1);
      },
      (error) => {
        console.error('Error al eliminar la publicación:', error);
      }
    );
  }

  crearPublicacion() {
    if (!this.nuevaPublicacion.content.trim()) {
      console.error('El contenido de la publicación está vacío.');
      return;
    }
  
    this.apiService.createPost(this.nuevaPublicacion).subscribe(
      (response) => {
        console.log('Publicación creada:', response);
  
        // Asegúrate de inicializar el array de comentarios y otras propiedades necesarias
        const nuevaPublicacion = {
          ...response,
          comments: response.comments || [], // Inicializa el array de comentarios si no está definido
        };
  
        this.posts.unshift(nuevaPublicacion); // Agrega la nueva publicación al inicio de la lista
        this.nuevaPublicacion = { content: '', image: '' }; // Limpia los campos
      },
      (error) => {
        console.error('Error al crear la publicación:', error);
      }
    );
  }
}