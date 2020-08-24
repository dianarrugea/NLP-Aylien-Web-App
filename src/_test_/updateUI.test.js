import { 
    updateUI
} from "../client/js/updateUI.js"
  
  console.log(updateUI)
  describe("Check if checkForName is a function.", () => {
      test('Test if checkForName is a function or not.', () => {
          expect(typeof(updateUI)).toBe('function');
      });
  })
