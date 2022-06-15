import { Section } from "../model/section/section";

export class Constants{
    public static baseUrl:string = "http://localhost:8090";
    public static sectionBase = new Section(1,1,"",1,1,new Map);
}