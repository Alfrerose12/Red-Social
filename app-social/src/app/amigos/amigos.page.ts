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
  

  posts = [
    { 
      id: 1, 
      user: 'Daniel García Cobos', 
      userAvatar: 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/431867500_1436737523623964_7976501891398235389_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEpxIk1J46SiwvOtOHYkyHLSDp5C_fc9LNIOnkL99z0swmxxXH1BvwllNv1gUQNvqDjAYjnMz2NuMUK-5b9mVd1&_nc_ohc=5B5DIFgEk88Q7kNvgHmq3Ag&_nc_oc=Adhq2DVp8j5tXjBJccwhVr3waPKV2MkDJcyYBGOndWWfmuDFL-nX3nq69w1RRCUtVs8yJUdhh9S_zy5b5aaGLBxA&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=L11vFi_N8pfnhrbDDk0Q2g&oh=00_AYF437NrQ2xNybVEOn4bP94y5x5k_W597v9NWdoK7x3d3w&oe=67DEF947', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/356408095_101628749655448_7418084051985274865_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHjvb63jPyP-WLRUW9jsSb0ojnMwKo7Um6iOczAqjtSbspTM8PaNQd_3CfqItf_kboQI2Ed0NzShv3eT7A7sGmu&_nc_ohc=roa8p1bO0tQQ7kNvgGLeWGx&_nc_oc=AdhGwUG3aUDKKvAveSIzMtfs1qfiawyUExBDSGbbGS4JMEPXNf_cXL1TApnqWrXAQ5qBcpMs2XvD349XmJBaj31R&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=yFTrdd7xXYJKqL5ftMDa0w&oh=00_AYHtE6Hkt_8E1Q4ITYNgQSPRk-3nNHSl9Aeio2wVJWHACQ&oe=67DEDD25',
      type: 'image' 
    },
    { 
      id: 2, 
      user: 'Karen García', 
      userAvatar:'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/438205687_3749325638689853_6668461089632969725_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF-k0WnzaIr4HBV8odXzRgKvPzA_2d0qOm8_MD_Z3So6SXiev4u4eSvniBvb4_4ovV6eEQdeSTzkqUXzS_M-IZ2&_nc_ohc=jexcdFRBzrwQ7kNvgGthOuX&_nc_oc=Adgg7Se42rgdOkrTcry1GI-RLmULfeJvOHDoAC-MLY9tl45OuoeW4DrPCBpudPAwDReFMCDG5HQhKyefXjfxC12n&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=nRTH58TLQfGZgGpjBB9fgg&oh=00_AYGey0h7oWKsyJETNvfKuiTsvZEiqqUXTgaz0TDlPQAK9g&oe=67DEDA7E', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/438205687_3749325638689853_6668461089632969725_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF-k0WnzaIr4HBV8odXzRgKvPzA_2d0qOm8_MD_Z3So6SXiev4u4eSvniBvb4_4ovV6eEQdeSTzkqUXzS_M-IZ2&_nc_ohc=jexcdFRBzrwQ7kNvgGthOuX&_nc_oc=Adgg7Se42rgdOkrTcry1GI-RLmULfeJvOHDoAC-MLY9tl45OuoeW4DrPCBpudPAwDReFMCDG5HQhKyefXjfxC12n&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=nRTH58TLQfGZgGpjBB9fgg&oh=00_AYGey0h7oWKsyJETNvfKuiTsvZEiqqUXTgaz0TDlPQAK9g&oe=67DEDA7E',
      type: 'image'
    },
    { 
      id: 3, 
      user: 'Alfredo Rosas Espinosa', 
      userAvatar: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464615243_1886191385209243_7014231757131260969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqrawxkOZ3AhIunq9Hg81-2iKzyz6-KuTaIrPLPr4q5BlWytGwDmSPHhvOZ7Vrwa3PEhVXVl_SSAzCTuazhmfr&_nc_ohc=sxgvqbJ2n1gQ7kNvgEV3KUu&_nc_oc=AdiQeOlPJJzzhW75nsGDEfvUpn6gUm9YG8mRzR09OSNkPNtwQeXyF8exJzsq3M16dLAdM5SllMU8Yqv8Upo2bPYG&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=vYnTM16GfDECzwm8YXJWxw&oh=00_AYGGgrB9XYkW4PMZjr4H3LV9kCcZJZ659JQ_uhuB8CiTtg&oe=67DEDEAE', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464615243_1886191385209243_7014231757131260969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqrawxkOZ3AhIunq9Hg81-2iKzyz6-KuTaIrPLPr4q5BlWytGwDmSPHhvOZ7Vrwa3PEhVXVl_SSAzCTuazhmfr&_nc_ohc=sxgvqbJ2n1gQ7kNvgEV3KUu&_nc_oc=AdiQeOlPJJzzhW75nsGDEfvUpn6gUm9YG8mRzR09OSNkPNtwQeXyF8exJzsq3M16dLAdM5SllMU8Yqv8Upo2bPYG&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=vYnTM16GfDECzwm8YXJWxw&oh=00_AYGGgrB9XYkW4PMZjr4H3LV9kCcZJZ659JQ_uhuB8CiTtg&oe=67DEDEAE', 
      type: 'image' 
    },
    { 
      id: 4, 
      user: 'Diego Sánchez', 
      userAvatar: 'https://scontent-qro1-1.xx.fbcdn.net/v/t1.6435-9/116348131_1504688923073071_730660850520240891_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGaneIbaLYQ78j2wqQsQ6nBfwIfOnA9sgV_Ah86cD2yBbzYe9ZyDQFu4zHgscLwwH8seSzGz5wy4wlRnLJyjjWf&_nc_ohc=EakWhDyHKlkQ7kNvgHqc3ti&_nc_oc=AdixyJpWbzkPLIzDuZYeaxWkXaKS-t9D-LG-4mftaXb3J4DZ9VQBFjSzxNeoDZDnX8E&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=YR256IX3QStS7Kio-W_5gw&oh=00_AYGetA4D8ua2rRCIVL0wu2TQG5sTWjtMRMoEZVaRQtEfOQ&oe=6800EB7F', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464615243_1886191385209243_7014231757131260969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqrawxkOZ3AhIunq9Hg81-2iKzyz6-KuTaIrPLPr4q5BlWytGwDmSPHhvOZ7Vrwa3PEhVXVl_SSAzCTuazhmfr&_nc_ohc=sxgvqbJ2n1gQ7kNvgEV3KUu&_nc_oc=AdiQeOlPJJzzhW75nsGDEfvUpn6gUm9YG8mRzR09OSNkPNtwQeXyF8exJzsq3M16dLAdM5SllMU8Yqv8Upo2bPYG&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=vYnTM16GfDECzwm8YXJWxw&oh=00_AYGGgrB9XYkW4PMZjr4H3LV9kCcZJZ659JQ_uhuB8CiTtg&oe=67DEDEAE', 
      type: 'image' 
    },
    { 
      id: 5, 
      user: 'Gabriel Crv', 
      userAvatar: 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/463286509_122176522706144610_110258397154612175_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqnC34bfpllRbw7o8Cpr7TglLFTbOU94qCUsVNs5T3infjx3kD0BUHkGELnUOq5EJBYjv8g3xrDPR3UQrgCNpL&_nc_ohc=4GhOSW82PU4Q7kNvgHvsUGI&_nc_oc=AdhAngX9OxhVaR6a1Wtu5MlgnGkTmOy96k0YKcfwWT0l0TDbiwm_baXF7ted2UKvKJk&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=t-D0J5h0t_bO3POG1jx_Uw&oh=00_AYG0zCe1IQHINczC7MoznhQ16vSJiBFqfSk4u-hY68K84Q&oe=67DF4654', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464615243_1886191385209243_7014231757131260969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqrawxkOZ3AhIunq9Hg81-2iKzyz6-KuTaIrPLPr4q5BlWytGwDmSPHhvOZ7Vrwa3PEhVXVl_SSAzCTuazhmfr&_nc_ohc=sxgvqbJ2n1gQ7kNvgEV3KUu&_nc_oc=AdiQeOlPJJzzhW75nsGDEfvUpn6gUm9YG8mRzR09OSNkPNtwQeXyF8exJzsq3M16dLAdM5SllMU8Yqv8Upo2bPYG&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=vYnTM16GfDECzwm8YXJWxw&oh=00_AYGGgrB9XYkW4PMZjr4H3LV9kCcZJZ659JQ_uhuB8CiTtg&oe=67DEDEAE', 
      type: 'image' 
    },
    { 
      id: 6, 
      user: 'Alberto Romero', 
      userAvatar: 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/330142495_711463357022994_7497139800562695241_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHUNE3ZsyF_OPfawpIIaM4X54DIFdxOJbHngMgV3E4lsdC5OKI3e6kBnVj6LZJ7-MpyYdnWwoKNyjHDdduPwVoP&_nc_ohc=xvZrwm5hHhoQ7kNvgGcanJG&_nc_oc=Adgqs_Ch_0jrl09VPEtVLkhrzWrwjGendnoinycus44qWxzwoHq2AAqcEV4bEfjOiUw&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=g4lVR7GmWvZkyt_fNdXLCA&oh=00_AYHGk6lADwJyt9AMcwKyi-Gj6S9ykK8O7Lvig1jG5PX7ug&oe=67DF4C9E', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464615243_1886191385209243_7014231757131260969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqrawxkOZ3AhIunq9Hg81-2iKzyz6-KuTaIrPLPr4q5BlWytGwDmSPHhvOZ7Vrwa3PEhVXVl_SSAzCTuazhmfr&_nc_ohc=sxgvqbJ2n1gQ7kNvgEV3KUu&_nc_oc=AdiQeOlPJJzzhW75nsGDEfvUpn6gUm9YG8mRzR09OSNkPNtwQeXyF8exJzsq3M16dLAdM5SllMU8Yqv8Upo2bPYG&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=vYnTM16GfDECzwm8YXJWxw&oh=00_AYGGgrB9XYkW4PMZjr4H3LV9kCcZJZ659JQ_uhuB8CiTtg&oe=67DEDEAE', 
      type: 'image' 
    },
    { 
      id: 7, 
      user: 'Yonatan Beltrán', 
      userAvatar: 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/338436586_776509410796139_1581911395111579720_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGUe5YRM3aFdryk0g6IEb52397sJ3Oun4vf3uwnc66fi35CPK_S0E4A9xMGkWQAOGFXouyXBSX88ipWcM-aLebj&_nc_ohc=qJ2ZgBjnBgYQ7kNvgHqfqb0&_nc_oc=AdiVxYGuf6UDfAXKKQVffZeKZB-TAWL_C0Mbt7qp_jna9swbbZ1SN13dE1JMZBCKXrk&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=xZ6dC9qr3_EotoXjQFSVKw&oh=00_AYHd8Rt94myImwKfZ9rNbu1DZRh6TlUj3XZy2GDjyZ5TLg&oe=67DF74BF', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464615243_1886191385209243_7014231757131260969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqrawxkOZ3AhIunq9Hg81-2iKzyz6-KuTaIrPLPr4q5BlWytGwDmSPHhvOZ7Vrwa3PEhVXVl_SSAzCTuazhmfr&_nc_ohc=sxgvqbJ2n1gQ7kNvgEV3KUu&_nc_oc=AdiQeOlPJJzzhW75nsGDEfvUpn6gUm9YG8mRzR09OSNkPNtwQeXyF8exJzsq3M16dLAdM5SllMU8Yqv8Upo2bPYG&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=vYnTM16GfDECzwm8YXJWxw&oh=00_AYGGgrB9XYkW4PMZjr4H3LV9kCcZJZ659JQ_uhuB8CiTtg&oe=67DEDEAE', 
      type: 'image' 
    },
    { 
      id: 8, 
      user: 'Aldahir Hrdz ', 
      userAvatar: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/462039090_1557648685141635_6148381975712176301_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHJ0isQr2-7XB7bKrHbSiGvzsf0K85m1nLOx_QrzmbWcppLzCu3IDixt4SdRvWIrkW8HxXbvhPR9I37zfatHC0u&_nc_ohc=1dVddtr61LIQ7kNvgEqQLkd&_nc_oc=Adgn-jZG7vr_y4bZ84n3p5icfQVc3fy21ht1y3Bh768_6SRcPWF0k_Q_4U03V92Pm90&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=XNIV9YL23UvT0FrJYOKuLQ&oh=00_AYGwSFPzwShUbWGD4UCEpuca3ToJ-Bt4GeXNnyDgSgONLw&oe=67DF59FB', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464615243_1886191385209243_7014231757131260969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqrawxkOZ3AhIunq9Hg81-2iKzyz6-KuTaIrPLPr4q5BlWytGwDmSPHhvOZ7Vrwa3PEhVXVl_SSAzCTuazhmfr&_nc_ohc=sxgvqbJ2n1gQ7kNvgEV3KUu&_nc_oc=AdiQeOlPJJzzhW75nsGDEfvUpn6gUm9YG8mRzR09OSNkPNtwQeXyF8exJzsq3M16dLAdM5SllMU8Yqv8Upo2bPYG&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=vYnTM16GfDECzwm8YXJWxw&oh=00_AYGGgrB9XYkW4PMZjr4H3LV9kCcZJZ659JQ_uhuB8CiTtg&oe=67DEDEAE', 
      type: 'image' 
    },
    { 
      id: 9, 
      user: 'Diego Herrera', 
      userAvatar: 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/456056462_1236722700666863_6455204597306049662_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFDPR3y5-8wH2WCfywDHeSK8FfR0yLA6hXwV9HTIsDqFWdNcFujlNqPKUHxLVVNeRnZ-jHGhh6GXfz1-xWvfJbv&_nc_ohc=x_QpQnemIeoQ7kNvgFSOoFA&_nc_oc=AdidmdNAI4a_sM5jEVqoE_6fu08q81a5iUVcxJrPhZXlYGR54NAp8kYUjdWde3AQlQ8&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=H6aPO55eoO0jI0-DQsBaVw&oh=00_AYEgozUJjNpkmnTjJNBPsLwQOROk3bmvLztqzEHS-URsQQ&oe=67DF75D0', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464615243_1886191385209243_7014231757131260969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqrawxkOZ3AhIunq9Hg81-2iKzyz6-KuTaIrPLPr4q5BlWytGwDmSPHhvOZ7Vrwa3PEhVXVl_SSAzCTuazhmfr&_nc_ohc=sxgvqbJ2n1gQ7kNvgEV3KUu&_nc_oc=AdiQeOlPJJzzhW75nsGDEfvUpn6gUm9YG8mRzR09OSNkPNtwQeXyF8exJzsq3M16dLAdM5SllMU8Yqv8Upo2bPYG&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=vYnTM16GfDECzwm8YXJWxw&oh=00_AYGGgrB9XYkW4PMZjr4H3LV9kCcZJZ659JQ_uhuB8CiTtg&oe=67DEDEAE', 
      type: 'image' 
    },
    { 
      id: 10, 
      user: 'Abiel Ontiveros', 
      userAvatar: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/328239490_1010448317025329_6928287099750701897_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHqp2HCinfegweJQFwHTO1owC-nY1kt0YrAL6djWS3RinfnCxcWMVwkXikchoBoCUqjEZCeeLONVwzgjeIfZA4o&_nc_ohc=_bHdGNX8DNYQ7kNvgGKQxvq&_nc_oc=Adj15O-uiiJTUe8CD-XeYy2zfJaYFoSNJmCypNWXoRvLew9rxo26cmP0HoSK0gSlQHY&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=GwNdWvLvaCIvkAYjBzjzlQ&oh=00_AYHKxLpB1HkYuMGHOmKmPcCkRtqI699-UxGmVDf_rGGcrg&oe=67DF5F0F', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464615243_1886191385209243_7014231757131260969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqrawxkOZ3AhIunq9Hg81-2iKzyz6-KuTaIrPLPr4q5BlWytGwDmSPHhvOZ7Vrwa3PEhVXVl_SSAzCTuazhmfr&_nc_ohc=sxgvqbJ2n1gQ7kNvgEV3KUu&_nc_oc=AdiQeOlPJJzzhW75nsGDEfvUpn6gUm9YG8mRzR09OSNkPNtwQeXyF8exJzsq3M16dLAdM5SllMU8Yqv8Upo2bPYG&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=vYnTM16GfDECzwm8YXJWxw&oh=00_AYGGgrB9XYkW4PMZjr4H3LV9kCcZJZ659JQ_uhuB8CiTtg&oe=67DEDEAE', 
      type: 'image' 
    },
    { 
      id: 11, 
      user: 'Daniel Gutierrez', 
      userAvatar: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/428378645_3761493474131613_7874571278881226910_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHYJdVVeCapesy5u02BUfDC3zJgxU0vOTbfMmDFTS85NtWZeLkXDaaxlE79Xc2CIQJsmHMStCzyOWHQNWHo55h_&_nc_ohc=Y0QEoGDfFJYQ7kNvgFXaMqu&_nc_oc=AdivWbpG11h2opMr3r_8gkYxlFOw6r9C0uV-vISTIWsYDuUG1Q_cPUMCTe4JbZLcpgM&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=_VwkS2AlZYBV1y3Owi0lnA&oh=00_AYH2kZsN8uNHLs08mfIYuNO-8Z7LF1zXutItoH8vJad3EA&oe=67DF73C0', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464615243_1886191385209243_7014231757131260969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqrawxkOZ3AhIunq9Hg81-2iKzyz6-KuTaIrPLPr4q5BlWytGwDmSPHhvOZ7Vrwa3PEhVXVl_SSAzCTuazhmfr&_nc_ohc=sxgvqbJ2n1gQ7kNvgEV3KUu&_nc_oc=AdiQeOlPJJzzhW75nsGDEfvUpn6gUm9YG8mRzR09OSNkPNtwQeXyF8exJzsq3M16dLAdM5SllMU8Yqv8Upo2bPYG&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=vYnTM16GfDECzwm8YXJWxw&oh=00_AYGGgrB9XYkW4PMZjr4H3LV9kCcZJZ659JQ_uhuB8CiTtg&oe=67DEDEAE', 
      type: 'image' 
    },
    { 
      id: 12, 
      user: 'Montalvo Eduardo', 
      userAvatar: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-1/472802387_2090057974783120_7583720252016936805_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG1-FA-5GEtLvk5VQ6eizh1nFz522sKGKKcXPnbawoYopKFJDo6dKxddqgkHY2aRKkoS4yN1dQG8RrtKYirMJzc&_nc_ohc=Cg12yvTxIlMQ7kNvgHdRrbi&_nc_oc=AdgulcB2AKMztVKE-Wdh8JeF9D3AVyiok2t6uVQSOMVtXsCT4eyFXlDK9kdQbggKxVA&_nc_zt=24&_nc_ht=scontent-qro1-2.xx&_nc_gid=2uw91fh-bwMW1Qcqw6Yo1Q&oh=00_AYFKHDJVwOT8F_JAmYqNjHTlVZW8AwIyFwcSfY50Rm1R6Q&oe=67DF489E', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464615243_1886191385209243_7014231757131260969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqrawxkOZ3AhIunq9Hg81-2iKzyz6-KuTaIrPLPr4q5BlWytGwDmSPHhvOZ7Vrwa3PEhVXVl_SSAzCTuazhmfr&_nc_ohc=sxgvqbJ2n1gQ7kNvgEV3KUu&_nc_oc=AdiQeOlPJJzzhW75nsGDEfvUpn6gUm9YG8mRzR09OSNkPNtwQeXyF8exJzsq3M16dLAdM5SllMU8Yqv8Upo2bPYG&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=vYnTM16GfDECzwm8YXJWxw&oh=00_AYGGgrB9XYkW4PMZjr4H3LV9kCcZJZ659JQ_uhuB8CiTtg&oe=67DEDEAE', 
      type: 'image' 
    },
    { 
      id: 13, 
      user: 'Theo Naredo', 
      userAvatar: 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/480532973_1294997335137769_7023717493408972256_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGf0zd06FWKJa4EDSIL8MYQCsP9gIVE9LkKw_2AhUT0udSY2njPpNlXhY4PKM1HHSKEmG1jwNfYufpnXmflNDUp&_nc_ohc=ML8CoEVK5BQQ7kNvgG5thGm&_nc_oc=Adggrh-9RkFHkpXp5HGCsfUQ1aO5a8OEbrf9IPdC5THu8eSFhtbqeRFz5Sum9FAiAV8&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=dWOnJ1lRUHhqCsdS2Os-tQ&oh=00_AYHrWP2p-PmU-On27YmJDgnlAupammqHmQBN6dRprAqZ6A&oe=67DF6C9D', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464615243_1886191385209243_7014231757131260969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqrawxkOZ3AhIunq9Hg81-2iKzyz6-KuTaIrPLPr4q5BlWytGwDmSPHhvOZ7Vrwa3PEhVXVl_SSAzCTuazhmfr&_nc_ohc=sxgvqbJ2n1gQ7kNvgEV3KUu&_nc_oc=AdiQeOlPJJzzhW75nsGDEfvUpn6gUm9YG8mRzR09OSNkPNtwQeXyF8exJzsq3M16dLAdM5SllMU8Yqv8Upo2bPYG&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=vYnTM16GfDECzwm8YXJWxw&oh=00_AYGGgrB9XYkW4PMZjr4H3LV9kCcZJZ659JQ_uhuB8CiTtg&oe=67DEDEAE', 
      type: 'image' 
    },
    { 
      id: 14, 
      user: 'Tinn Laroli (Martin Lara)', 
      userAvatar: 'https://scontent-qro1-2.xx.fbcdn.net/v/t1.6435-9/124387995_683554102597032_1885751901942921241_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFGVOvbURUHGl2Sw5YXLf5fn35jsgSdakGffmOyBJ1qQZKglo5ytW_3lN8kuZGbIilvSERgu5vZdVInRf8cDAPu&_nc_ohc=lwLr7XC88eIQ7kNvgGBcig8&_nc_oc=Adhza-nkktoGKeKBYLqLc7-HEtLELVI-m7pCEmKppvAm0oqu_JeRnjSKZQ-I43s2s4w&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=qtdKOR3FRXTUZF4DdjI8cg&oh=00_AYHZR1KX6ePUfLb9PPOOiTQilaSa9EcegJlHzHpz0jz3Dw&oe=68010346', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464615243_1886191385209243_7014231757131260969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqrawxkOZ3AhIunq9Hg81-2iKzyz6-KuTaIrPLPr4q5BlWytGwDmSPHhvOZ7Vrwa3PEhVXVl_SSAzCTuazhmfr&_nc_ohc=sxgvqbJ2n1gQ7kNvgEV3KUu&_nc_oc=AdiQeOlPJJzzhW75nsGDEfvUpn6gUm9YG8mRzR09OSNkPNtwQeXyF8exJzsq3M16dLAdM5SllMU8Yqv8Upo2bPYG&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=vYnTM16GfDECzwm8YXJWxw&oh=00_AYGGgrB9XYkW4PMZjr4H3LV9kCcZJZ659JQ_uhuB8CiTtg&oe=67DEDEAE', 
      type: 'image' 
    },

    
  ];
}