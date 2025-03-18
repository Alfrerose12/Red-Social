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
      user: 'Daniel', 
      userAvatar: 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/431867500_1436737523623964_7976501891398235389_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEpxIk1J46SiwvOtOHYkyHLSDp5C_fc9LNIOnkL99z0swmxxXH1BvwllNv1gUQNvqDjAYjnMz2NuMUK-5b9mVd1&_nc_ohc=5B5DIFgEk88Q7kNvgHmq3Ag&_nc_oc=Adhq2DVp8j5tXjBJccwhVr3waPKV2MkDJcyYBGOndWWfmuDFL-nX3nq69w1RRCUtVs8yJUdhh9S_zy5b5aaGLBxA&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=L11vFi_N8pfnhrbDDk0Q2g&oh=00_AYF437NrQ2xNybVEOn4bP94y5x5k_W597v9NWdoK7x3d3w&oe=67DEF947', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/356408095_101628749655448_7418084051985274865_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHjvb63jPyP-WLRUW9jsSb0ojnMwKo7Um6iOczAqjtSbspTM8PaNQd_3CfqItf_kboQI2Ed0NzShv3eT7A7sGmu&_nc_ohc=roa8p1bO0tQQ7kNvgGLeWGx&_nc_oc=AdhGwUG3aUDKKvAveSIzMtfs1qfiawyUExBDSGbbGS4JMEPXNf_cXL1TApnqWrXAQ5qBcpMs2XvD349XmJBaj31R&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=yFTrdd7xXYJKqL5ftMDa0w&oh=00_AYHtE6Hkt_8E1Q4ITYNgQSPRk-3nNHSl9Aeio2wVJWHACQ&oe=67DEDD25',
      type: 'image' 
    },
    { 
      id: 2, 
      user: 'Karen Garcia', 
      userAvatar:'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/438205687_3749325638689853_6668461089632969725_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF-k0WnzaIr4HBV8odXzRgKvPzA_2d0qOm8_MD_Z3So6SXiev4u4eSvniBvb4_4ovV6eEQdeSTzkqUXzS_M-IZ2&_nc_ohc=jexcdFRBzrwQ7kNvgGthOuX&_nc_oc=Adgg7Se42rgdOkrTcry1GI-RLmULfeJvOHDoAC-MLY9tl45OuoeW4DrPCBpudPAwDReFMCDG5HQhKyefXjfxC12n&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=nRTH58TLQfGZgGpjBB9fgg&oh=00_AYGey0h7oWKsyJETNvfKuiTsvZEiqqUXTgaz0TDlPQAK9g&oe=67DEDA7E', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/438205687_3749325638689853_6668461089632969725_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF-k0WnzaIr4HBV8odXzRgKvPzA_2d0qOm8_MD_Z3So6SXiev4u4eSvniBvb4_4ovV6eEQdeSTzkqUXzS_M-IZ2&_nc_ohc=jexcdFRBzrwQ7kNvgGthOuX&_nc_oc=Adgg7Se42rgdOkrTcry1GI-RLmULfeJvOHDoAC-MLY9tl45OuoeW4DrPCBpudPAwDReFMCDG5HQhKyefXjfxC12n&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=nRTH58TLQfGZgGpjBB9fgg&oh=00_AYGey0h7oWKsyJETNvfKuiTsvZEiqqUXTgaz0TDlPQAK9g&oe=67DEDA7E',
      type: 'image'
    },
    { 
      id: 3, 
      user: 'Alfrerose', 
      userAvatar: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464615243_1886191385209243_7014231757131260969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqrawxkOZ3AhIunq9Hg81-2iKzyz6-KuTaIrPLPr4q5BlWytGwDmSPHhvOZ7Vrwa3PEhVXVl_SSAzCTuazhmfr&_nc_ohc=sxgvqbJ2n1gQ7kNvgEV3KUu&_nc_oc=AdiQeOlPJJzzhW75nsGDEfvUpn6gUm9YG8mRzR09OSNkPNtwQeXyF8exJzsq3M16dLAdM5SllMU8Yqv8Upo2bPYG&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=vYnTM16GfDECzwm8YXJWxw&oh=00_AYGGgrB9XYkW4PMZjr4H3LV9kCcZJZ659JQ_uhuB8CiTtg&oe=67DEDEAE', 
      content: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464615243_1886191385209243_7014231757131260969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqrawxkOZ3AhIunq9Hg81-2iKzyz6-KuTaIrPLPr4q5BlWytGwDmSPHhvOZ7Vrwa3PEhVXVl_SSAzCTuazhmfr&_nc_ohc=sxgvqbJ2n1gQ7kNvgEV3KUu&_nc_oc=AdiQeOlPJJzzhW75nsGDEfvUpn6gUm9YG8mRzR09OSNkPNtwQeXyF8exJzsq3M16dLAdM5SllMU8Yqv8Upo2bPYG&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=vYnTM16GfDECzwm8YXJWxw&oh=00_AYGGgrB9XYkW4PMZjr4H3LV9kCcZJZ659JQ_uhuB8CiTtg&oe=67DEDEAE', 
      type: 'image' 
    }
  ];
}