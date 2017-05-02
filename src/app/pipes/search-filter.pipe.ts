import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, filterString:string): any {


    if(filterString.length === 0){
      return value;
    }else {
      const resultArray = [];
      let lowerfilterString = filterString.toLocaleLowerCase()
      for(const item of value){
        if(item['username'].toLowerCase().includes(lowerfilterString) ||
          item['title'].toLowerCase().includes(lowerfilterString)||
          item['body'].toLowerCase().includes(lowerfilterString)||
          item['email'].toLowerCase().includes(lowerfilterString)
        ){
          resultArray.push(item);
        }
      }
      return resultArray}
  }

}
