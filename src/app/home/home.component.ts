import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from "../main/main.component";
import { ContentSectionComponent } from "../components/content-section/content-section.component";

declare var $: any;

type brand = {
  name: string,
  description: string,
  img: string,
  url: string
};

type category = {
  name: string,
  brands: brand[]
};

@Component({
  selector: 'app-home',
  imports: [CommonModule, MainComponent, ContentSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public categories:category[] = [
    {
      name: "クラッシックロリィタ",
      brands: [
        {
          name: "イノセントワールド",
          description: "デザイナーの「藤原 ゆみ」がヨーロッパのクラシカルスタイルから インスピレーションを受け上品で可愛らしい物作りを基本とし 新しい時代のお嬢様スタイルを提案するブランドです。",
          img: "/imgs/logo/maison/innocent-world.png",
          url: "https://innocent-w.jp/",
        },
        {
          name: "ヴィクトリアンメイデン",
          description: "纏う洋服の上品さに留まらないヴィクトリア時代の女性が持つ奥ゆかしさと上品さ、そして美しさをエッセンスとしてデザインに落とし込んだエレガントでコケティッシュな「大人のロリータスタイル」を提案します",
          img: "/imgs/logo/maison/victorian-maiden.png",
          url: "https://www.victorianmaiden.com/",
        },
      ],
    },
    {
      name: "ゴシックロリィタ",
      brands: [
        {
          name: "アトリエピエロ",
          description: "自社ブランドの他、各種ゴシック・ロリータ服、小物等を幅広くお取り扱いさせて頂くゴシックロリータのセレクトショップです。",
          img: "/imgs/logo/maison/atelier-pierrot.png",
          url: "https://atelier-pierrot.jp/",
        },
      ],
    },
    {
      name: "スイートロリィタ",
      brands: [
        {
          name: "ベイビーザスターズシャインブライト",
          description: "幼い頃にレースやフリルのついたお洋服を着て、お姫様になったような気分で「かわいい」「きれい」と素直に喜べた気持ちそのままの、永遠かつ究極のロリータスタイルを追求する",
          img: "/imgs/logo/maison/baby-the-stars-shine-bright.png",
          url: "https://www.babyssb.co.jp/",
        },
        {
          name: "アンジェリックプリティ",
          description: "小さな頃に憧れた、絵本の中の お姫様が着ていた様な、レースやフリル、リボンがたくさんあしらわれた、とっても可愛いお洋服です。女の子にはいつまでも、 夢見る心を 持っていて欲しい・・・夢見る心を忘れずに、 いつまでも可愛くありたい 女の子達の為のブランドです",
          img: "/imgs/logo/maison/angelic-pretty.png",
          url: "https://angelicpretty.com/",
        },
      ],
    },
  ]

  ngOnInit(): void {
    $(document).ready(function(){
      $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: "",
        nextArrow: "",

        responsive: [{
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        }]
      });
    });
  }
}
