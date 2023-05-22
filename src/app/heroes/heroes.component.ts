import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from '../hero.service';
// import { HEROES } from '../mock-heroes';

//클래스에 메타데이터를 지정해서 Angular 컴포넌트로 선언하는 데코레이터 함수
//1. selector:컴포넌트의 CSS 엘리먼트 셀렉터
//2. templateUrl: 컴포넌트 템플릿 파일의 위치
//3. styleUrl: 컴포넌트 CSS 스타일 위치

//4. OnInit: 라이프 스타일 후킹 함수, 컴포넌트 생성한 직후, 초기화하는 로직

//5. 반드시 export 해야 AppModule와 같은 다른 모듈에서 import 하는 것이 가능함
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService:HeroService){

  }
  heroes:Hero[]=[];
  selectedHero?:Hero;

  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }

  getHeroes():void{
    this.heroes =this.heroService.getHeroes()
  }

  ngOnInit():void{
    this.getHeroes()
  }

   
  
}


