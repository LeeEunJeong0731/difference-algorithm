
/**
 * 
 * @param {JSON, Path} inputJSONdata 
 * @param {JSON, Path} outputJSONdata 
 * @returns Object
 */

export default function(inputJSONPath, outputJSONPath) {
  if (!inputJSONPath.endsWith('.json') || !outputJSONPath.endsWith('.json')) {
    throw new Error(`매개변수 ${inputJSONPath}, ${outputJSONPath}는 json 파일이 아닙니다.`);
  }
  let result = {};
  /**
   * ? Q. JSON 파일을 아래의 5, 6번에 해당하는 로직 작성 후 JSON으로 저장
   * ? Q. 저장이 완료되면 초기화된 result에 객체를 리턴
   * 
   * * 1. inputJSONdata, outputJSONdata를 읽어서 JSON 객체로 변환
   * * 2. inputJSONdata, outputJSONdata의 value를 비교
   * * 3. outputJSONpath 매개변수의 key에 해당하는 정보를 저장
   * * 4. dirrences.json 파일에 필요한 상태값
   * * 5. 같은 단어가 무엇인지 저장
   * * 6. 다른 단어가 무엇인지 저장
   * * 7. 리턴을 통해 결과값을 전달
   */

  return result;
}