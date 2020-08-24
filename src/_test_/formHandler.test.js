import { 
    handleSubmit 
} from "../client/js/formHandler.js"
  
  console.log(handleSubmit)
  describe("Check if handleSubmit  is a function.", () => {
      test('Test if handleSubmit  is a function or not.', () => {
          expect(typeof(handleSubmit)).toBe('function');
      });
  })
