import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
  standalone: false
})
export class AmigosPage {
  slideOpts = {
    slidesPerView: 4.5,
    spaceBetween: 10
  };
  stories = [
    { id: 1, user: 'Daniel', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlF-8hJZWN0UkacWF_D4XKV_hmQl0DZJmXaQ&s' },
    { id: 2, user: 'Karen Garcia', image: 'https://b2472105.smushcdn.com/2472105/wp-content/uploads/2023/09/Poses-Perfil-Profesional-Mujeres-ago.-10-2023-1-819x1024.jpg?lossy=1&strip=1&webp=1' },
    { id: 3, user: 'Alfrerose', image: 'https://labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg' },
    { id: 4, user: 'aldahirhernandezz', image: 'https://media.istockphoto.com/id/1364917563/es/foto/hombre-de-negocios-sonriendo-con-los-brazos-cruzados-sobre-fondo-blanco.jpg?b=1&s=612x612&w=0&k=20&c=cgi7LB_rnvAdLeT3cW6uOK27LWXHg65cBkp7rewfde0=' },
    { id: 5, user: 'lalomontalvo', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, user: 'giogarrey', image: 'https://media.istockphoto.com/id/1365223878/es/foto/hombre-atractivo-sinti%C3%A9ndose-alegre.jpg?s=1024x1024&w=is&k=20&c=xchV_zmj61fLD2qIRB2E3EF4nnT9saIB1xSLZV4VrW0=' },
    { id: 7, user: 'diegoarmenta', image: 'https://media.istockphoto.com/id/1399565382/es/foto/joven-empresario-mestizo-feliz-de-pie-con-los-brazos-cruzados-trabajando-solo-en-una-oficina.jpg?b=1&s=612x612&w=0&k=20&c=ZVHkE4INrq7zupzkVLOG-RHa_FSSMVc-5cbRdxIXhLc=' },
    { id: 8, user: 'rafabarriero', image: 'https://media.istockphoto.com/id/1830126474/es/foto/retrato-de-un-hombre-de-negocios-sentado-en-una-oficina.jpg?s=1024x1024&w=is&k=20&c=fo7ySySL6Cwokw-H1uqNKWy4cIJvzbrxSMNv-_ZtL70=' },
    { id: 9, user: 'muppet', image: 'https://media.istockphoto.com/id/1433419992/es/foto/joven-con-camisa-azul-casual-y-gafas-sosteniendo-el-tel%C3%A9fono-mirando-a-la-c%C3%A1mara-con-una.jpg?s=1024x1024&w=is&k=20&c=Wcoan0C-gScZrsDOoY753HTVeDh-Y1zoYA2PCQloQ9Q=' },
    { id: 10, user: 'macacoefc', image: 'https://media.istockphoto.com/id/1372138855/es/foto/alegre-gerente-negro-con-tableta-digital-caminando-por-la-oficina.jpg?s=1024x1024&w=is&k=20&c=raO3QUPWS9zJcUGfuJr8aTeNDkfLQIjU_Hinl2RimYM=' }
  ];

  posts = [
    { 
      id: 1, 
      user: 'Daniel', 
      userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlF-8hJZWN0UkacWF_D4XKV_hmQl0DZJmXaQ&s', 
      content: 'https://cdn.domestika.org/c_fit,dpr_auto,f_auto,q_80,t_base_params,w_820/v1596140821/content-items/005/365/121/IMG-20200726-WA0008-01-original.jpeg?1596140821',
      type: 'image' 
    },
    { 
      id: 2, 
      user: 'Karen Garcia', 
      userAvatar: 'https://b2472105.smushcdn.com/2472105/wp-content/uploads/2023/09/Poses-Perfil-Profesional-Mujeres-ago.-10-2023-1-819x1024.jpg?lossy=1&strip=1&webp=1', 
      content: 'https://st.depositphotos.com/1370441/4484/i/950/depositphotos_44844973-stock-photo-beautiful-girl-on-the-beach.jpg',
      type: 'image'
    },
    { 
      id: 3, 
      user: 'Alfrerose', 
      userAvatar: 'https://labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg', 
      content: 'https://st.depositphotos.com/2306293/2585/i/380/depositphotos_25857677-stock-photo-flip-flops-with-seashells-on.jpg', 
      type: 'image' 
    }
  ];
}