/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  var inputs = document.querySelectorAll('input'),\n      costInput = document.querySelector('#cost-input'),\n      contributionInput = document.querySelector('#contribution-input'),\n      anchorsBtnWrap = document.querySelector('.anchors'),\n      anchorsBtn = document.querySelectorAll('.anchors__btn'),\n      creditTermtInput = document.querySelector('.credit-input'),\n      rateInput = document.querySelector('.rate-input'),\n      monthlyPayment = document.querySelector('#monthly-payment'),\n      overpaymentOutPut = document.querySelector('#overpayment'),\n      necessaryIncomeOutPut = document.querySelector('#necessary-income'),\n      credit = document.querySelector('#credit'),\n      buttonsSave = document.querySelector('.interaction-buttons__save'),\n      buttonsClear = document.querySelector('.interaction-buttons__clear');\n  costInput.addEventListener('input', calcLoanPrincipal);\n  contributionInput.addEventListener('input', calcLoanPrincipal);\n  creditTermtInput.addEventListener('input', calcRateInputValue);\n  rateInput.addEventListener('input', calcRateInputValue);\n  buttonsClear.addEventListener('click', clearInputValue);\n\n  function getMaskedValue(val) {\n    return val.toString().replace(/[^\\d]/g, '').replace(/\\B(?=(\\d{3})+(?!\\d))/g, \" \");\n  }\n\n  function deleteSpace(val) {\n    return val.toString().split(' ').join('');\n  }\n\n  function inputValueCorrection() {\n    inputs.forEach(function (event) {\n      event.addEventListener('input', function (e) {\n        e.target.value = getMaskedValue(e.target.value);\n      });\n    });\n  }\n\n  inputValueCorrection();\n\n  function calcLoanPrincipal() {\n    fun();\n    var arrWithValueInputCost = [];\n    var arrWithValueInputContribution = [];\n    var currentCostInpValue = costInput.value;\n    var currentContributionInputValue = contributionInput.value;\n    arrWithValueInputCost.push(currentCostInpValue);\n    arrWithValueInputContribution.push(currentContributionInputValue);\n    var varWithStringValueCost = '';\n    var varWithStringValueContribution = '';\n\n    for (var i = 0; i < arrWithValueInputCost.length; i++) {\n      for (var j = 0; j < arrWithValueInputContribution.length; j++) {\n        varWithStringValueContribution = deleteSpace(arrWithValueInputContribution[j]);\n      }\n\n      varWithStringValueCost = deleteSpace(arrWithValueInputCost[i]);\n    }\n\n    var result = varWithStringValueCost - varWithStringValueContribution;\n    credit.innerText = getMaskedValue(result);\n    calcPercent(varWithStringValueCost);\n    calcOverpayment(currentCostInpValue, currentContributionInputValue);\n    calcRateInputValue();\n  }\n\n  function addClassActive() {\n    anchorsBtn.forEach(function (event) {\n      event.addEventListener('click', function () {\n        anchorsBtnWrap.querySelector('.active').classList.remove('active');\n        event.classList.add('active');\n      });\n    });\n  }\n\n  addClassActive();\n\n  function calcPercent(currentCostInpValue) {\n    anchorsBtn.forEach(function (event) {\n      event.addEventListener('click', function (e) {\n        if (!costInput.value) {\n          contributionInput.value = null;\n        } else {\n          var splitByNumber = e.target.innerText;\n          var reverseNumber = parseInt(splitByNumber) / 100;\n          var total = currentCostInpValue * reverseNumber;\n          contributionInput.value = getMaskedValue(Math.round(total));\n          var resultCalc = currentCostInpValue - total;\n          credit.innerText = getMaskedValue(Math.round(resultCalc));\n          calcRateInputValue();\n        }\n      });\n    });\n  }\n\n  function calcRateInputValue() {\n    var rateInputValue = rateInput.value;\n    var loanPrincipalValue = deleteSpace(credit.innerHTML);\n    var creditTerm = creditTermtInput.value;\n    calcMonthlyPayment(loanPrincipalValue, rateInputValue, creditTerm);\n  }\n\n  function calcMonthlyPayment(c, i, n) {\n    var calcRate = i / 1200;\n    var numberOfMonthly = n * 12;\n    var powValue = Math.pow(1 + calcRate, numberOfMonthly) - 1;\n    var divideInteresRate = calcRate / powValue;\n    var addition = calcRate + divideInteresRate;\n    var sum = (c * addition).toFixed(0);\n    monthlyPayment.innerText = getMaskedValue(sum);\n    calcNecessaryIncome(sum, numberOfMonthly);\n  }\n\n  function calcNecessaryIncome(p, n) {\n    var overpaymentValue = (5 * p / 3).toFixed(0);\n    necessaryIncomeOutPut.innerText = getMaskedValue(overpaymentValue);\n    calcOverpayment(p, n);\n  }\n\n  var calcOverpayment = function calcOverpayment(p, n) {\n    var costValue = deleteSpace(costInput.value);\n    var contributionValue = deleteSpace(contributionInput.value);\n    var sumOverpayment = p * n - Number(costValue) + Number(contributionValue);\n    overpaymentOutPut.innerText = getMaskedValue(sumOverpayment);\n  };\n\n  var fun = function fun() {\n    var costVal = deleteSpace(costInput.value);\n    var contributionVal = deleteSpace(contributionInput.value);\n    var numCost = +costVal;\n    var numContribution = +contributionVal;\n\n    if (numCost < numContribution) {\n      costInput.value = '';\n      contributionInput.value = '';\n    }\n  };\n\n  function clearInputValue() {\n    costInput.value = '';\n    contributionInput.value = '';\n    creditTermtInput.value = '';\n    rateInput.value = '';\n    overpaymentOutPut.innerText = '';\n    necessaryIncomeOutPut.innerText = '';\n    credit.innerText = '';\n    monthlyPayment.innerText = '';\n  }\n}); //TODO: сохраненить данные в localStorage//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL2pzL2luZGV4LmpzPzdiYTUiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlucHV0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvc3RJbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250cmlidXRpb25JbnB1dCIsImFuY2hvcnNCdG5XcmFwIiwiYW5jaG9yc0J0biIsImNyZWRpdFRlcm10SW5wdXQiLCJyYXRlSW5wdXQiLCJtb250aGx5UGF5bWVudCIsIm92ZXJwYXltZW50T3V0UHV0IiwibmVjZXNzYXJ5SW5jb21lT3V0UHV0IiwiY3JlZGl0IiwiYnV0dG9uc1NhdmUiLCJidXR0b25zQ2xlYXIiLCJjYWxjTG9hblByaW5jaXBhbCIsImNhbGNSYXRlSW5wdXRWYWx1ZSIsImNsZWFySW5wdXRWYWx1ZSIsImdldE1hc2tlZFZhbHVlIiwidmFsIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiZGVsZXRlU3BhY2UiLCJzcGxpdCIsImpvaW4iLCJpbnB1dFZhbHVlQ29ycmVjdGlvbiIsImZvckVhY2giLCJldmVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZ1biIsImFycldpdGhWYWx1ZUlucHV0Q29zdCIsImFycldpdGhWYWx1ZUlucHV0Q29udHJpYnV0aW9uIiwiY3VycmVudENvc3RJbnBWYWx1ZSIsImN1cnJlbnRDb250cmlidXRpb25JbnB1dFZhbHVlIiwicHVzaCIsInZhcldpdGhTdHJpbmdWYWx1ZUNvc3QiLCJ2YXJXaXRoU3RyaW5nVmFsdWVDb250cmlidXRpb24iLCJpIiwibGVuZ3RoIiwiaiIsInJlc3VsdCIsImlubmVyVGV4dCIsImNhbGNQZXJjZW50IiwiY2FsY092ZXJwYXltZW50IiwiYWRkQ2xhc3NBY3RpdmUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzcGxpdEJ5TnVtYmVyIiwicmV2ZXJzZU51bWJlciIsInBhcnNlSW50IiwidG90YWwiLCJNYXRoIiwicm91bmQiLCJyZXN1bHRDYWxjIiwicmF0ZUlucHV0VmFsdWUiLCJsb2FuUHJpbmNpcGFsVmFsdWUiLCJpbm5lckhUTUwiLCJjcmVkaXRUZXJtIiwiY2FsY01vbnRobHlQYXltZW50IiwiYyIsIm4iLCJjYWxjUmF0ZSIsIm51bWJlck9mTW9udGhseSIsInBvd1ZhbHVlIiwicG93IiwiZGl2aWRlSW50ZXJlc1JhdGUiLCJhZGRpdGlvbiIsInN1bSIsInRvRml4ZWQiLCJjYWxjTmVjZXNzYXJ5SW5jb21lIiwicCIsIm92ZXJwYXltZW50VmFsdWUiLCJjb3N0VmFsdWUiLCJjb250cmlidXRpb25WYWx1ZSIsInN1bU92ZXJwYXltZW50IiwiTnVtYmVyIiwiY29zdFZhbCIsImNvbnRyaWJ1dGlvblZhbCIsIm51bUNvc3QiLCJudW1Db250cmlidXRpb24iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUU5QyxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBZjtBQUFBLE1BQ0lDLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLGFBQXZCLENBRGhCO0FBQUEsTUFFSUMsaUJBQWlCLEdBQUdKLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixxQkFBdkIsQ0FGeEI7QUFBQSxNQUdJRSxjQUFjLEdBQUdMLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixVQUF2QixDQUhyQjtBQUFBLE1BSUlHLFVBQVUsR0FBR04sUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixlQUExQixDQUpqQjtBQUFBLE1BS0lNLGdCQUFnQixHQUFHUCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsZUFBdkIsQ0FMdkI7QUFBQSxNQU1JSyxTQUFTLEdBQUdSLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixhQUF2QixDQU5oQjtBQUFBLE1BT0lNLGNBQWMsR0FBR1QsUUFBUSxDQUFDRyxhQUFULENBQXVCLGtCQUF2QixDQVByQjtBQUFBLE1BUUlPLGlCQUFp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a0IsRUFBbEI7QUFDQTFCLHFCQUFpQixDQUFDMEIsS0FBbEIsR0FBMEIsRUFBMUI7QUFDQXZCLG9CQUFnQixDQUFDdUIsS0FBakIsR0FBeUIsRUFBekI7QUFDQXRCLGFBQVMsQ0FBQ3NCLEtBQVYsR0FBa0IsRUFBbEI7QUFDQXBCLHFCQUFpQixDQUFDaUMsU0FBbEIsR0FBOEIsRUFBOUI7QUFDQWhDLHlCQUFxQixDQUFDZ0MsU0FBdEIsR0FBa0MsRUFBbEM7QUFDQS9CLFVBQU0sQ0FBQytCLFNBQVAsR0FBbUIsRUFBbkI7QUFDQWxDLGtCQUFjLENBQUNrQyxTQUFmLEdBQTJCLEVBQTNCO0FBQ0g7QUFFSixDQXhKRCxFLENBMEpBIiwiZmlsZSI6Ii4vc3JjL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JyksXG4gICAgICAgIGNvc3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3N0LWlucHV0JyksXG4gICAgICAgIGNvbnRyaWJ1dGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRyaWJ1dGlvbi1pbnB1dCcpLFxuICAgICAgICBhbmNob3JzQnRuV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmNob3JzJyksXG4gICAgICAgIGFuY2hvcnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5jaG9yc19fYnRuJyksXG4gICAgICAgIGNyZWRpdFRlcm10SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlZGl0LWlucHV0JyksXG4gICAgICAgIHJhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYXRlLWlucHV0JyksXG4gICAgICAgIG1vbnRobHlQYXltZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vbnRobHktcGF5bWVudCcpLFxuICAgICAgICBvdmVycGF5bWVudE91dFB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVycGF5bWVudCcpLFxuICAgICAgICBuZWNlc3NhcnlJbmNvbWVPdXRQdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmVjZXNzYXJ5LWluY29tZScpLFxuICAgICAgICBjcmVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlZGl0JyksXG4gICAgICAgIGJ1dHRvbnNTYXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludGVyYWN0aW9uLWJ1dHRvbnNfX3NhdmUnKSxcbiAgICAgICAgYnV0dG9uc0NsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludGVyYWN0aW9uLWJ1dHRvbnNfX2NsZWFyJyk7XG5cbiAgICBjb3N0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjYWxjTG9hblByaW5jaXBhbCk7XG4gICAgY29udHJpYnV0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjYWxjTG9hblByaW5jaXBhbCk7XG4gICAgY3JlZGl0VGVybXRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNhbGNSYXRlSW5wdXRWYWx1ZSk7XG4gICAgcmF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2FsY1JhdGVJbnB1dFZhbHVlKTtcbiAgICBidXR0b25zQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhcklucHV0VmFsdWUpO1xuXG5cbiAgICBmdW5jdGlvbiBnZXRNYXNrZWRWYWx1ZSh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpLnJlcGxhY2UoL1teXFxkXS9nLCAnJykucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIgXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVNwYWNlKHZhbCkge1xuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCkuc3BsaXQoJyAnKS5qb2luKCcnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnB1dFZhbHVlQ29ycmVjdGlvbigpIHtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gZ2V0TWFza2VkVmFsdWUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaW5wdXRWYWx1ZUNvcnJlY3Rpb24oKTtcblxuICAgIGZ1bmN0aW9uIGNhbGNMb2FuUHJpbmNpcGFsKCkge1xuICAgICAgICBmdW4oKTtcbiAgICAgICAgbGV0IGFycldpdGhWYWx1ZUlucHV0Q29zdCA9IFtdO1xuICAgICAgICBsZXQgYXJyV2l0aFZhbHVlSW5wdXRDb250cmlidXRpb24gPSBbXTtcbiAgICAgICAgbGV0IGN1cnJlbnRDb3N0SW5wVmFsdWUgPSBjb3N0SW5wdXQudmFsdWU7XG4gICAgICAgIGxldCBjdXJyZW50Q29udHJpYnV0aW9uSW5wdXRWYWx1ZSA9IGNvbnRyaWJ1dGlvbklucHV0LnZhbHVlO1xuICAgICAgICBhcnJXaXRoVmFsdWVJbnB1dENvc3QucHVzaChjdXJyZW50Q29zdElucFZhbHVlKTtcbiAgICAgICAgYXJyV2l0aFZhbHVlSW5wdXRDb250cmlidXRpb24ucHVzaChjdXJyZW50Q29udHJpYnV0aW9uSW5wdXRWYWx1ZSk7XG4gICAgICAgIGxldCB2YXJXaXRoU3RyaW5nVmFsdWVDb3N0ID0gJyc7XG4gICAgICAgIGxldCB2YXJXaXRoU3RyaW5nVmFsdWVDb250cmlidXRpb24gPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycldpdGhWYWx1ZUlucHV0Q29zdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJXaXRoVmFsdWVJbnB1dENvbnRyaWJ1dGlvbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhcldpdGhTdHJpbmdWYWx1ZUNvbnRyaWJ1dGlvbiA9IGRlbGV0ZVNwYWNlKGFycldpdGhWYWx1ZUlucHV0Q29udHJpYnV0aW9uW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhcldpdGhTdHJpbmdWYWx1ZUNvc3QgPSBkZWxldGVTcGFjZShhcnJXaXRoVmFsdWVJbnB1dENvc3RbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHZhcldpdGhTdHJpbmdWYWx1ZUNvc3QgLSB2YXJXaXRoU3RyaW5nVmFsdWVDb250cmlidXRpb247XG5cbiAgICAgICAgY3JlZGl0LmlubmVyVGV4dCA9IGdldE1hc2tlZFZhbHVlKHJlc3VsdCk7XG5cbiAgICAgICAgY2FsY1BlcmNlbnQodmFyV2l0aFN0cmluZ1ZhbHVlQ29zdCk7XG4gICAgICAgIGNhbGNPdmVycGF5bWVudChjdXJyZW50Q29zdElucFZhbHVlLCBjdXJyZW50Q29udHJpYnV0aW9uSW5wdXRWYWx1ZSk7XG4gICAgICAgIGNhbGNSYXRlSW5wdXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZENsYXNzQWN0aXZlKCkge1xuICAgICAgICBhbmNob3JzQnRuLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYW5jaG9yc0J0bldyYXAucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGV2ZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkQ2xhc3NBY3RpdmUoKTtcblxuICAgIGZ1bmN0aW9uIGNhbGNQZXJjZW50KGN1cnJlbnRDb3N0SW5wVmFsdWUpIHtcbiAgICAgICAgYW5jaG9yc0J0bi5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICghY29zdElucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyaWJ1dGlvbklucHV0LnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdEJ5TnVtYmVyID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXZlcnNlTnVtYmVyID0gcGFyc2VJbnQoc3BsaXRCeU51bWJlcikgLyAxMDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IGN1cnJlbnRDb3N0SW5wVmFsdWUgKiByZXZlcnNlTnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICBjb250cmlidXRpb25JbnB1dC52YWx1ZSA9IGdldE1hc2tlZFZhbHVlKE1hdGgucm91bmQodG90YWwpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdENhbGMgPSBjdXJyZW50Q29zdElucFZhbHVlIC0gdG90YWw7XG4gICAgICAgICAgICAgICAgICAgIGNyZWRpdC5pbm5lclRleHQgPSBnZXRNYXNrZWRWYWx1ZShNYXRoLnJvdW5kKHJlc3VsdENhbGMpKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsY1JhdGVJbnB1dFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY1JhdGVJbnB1dFZhbHVlKCkge1xuICAgICAgICBsZXQgcmF0ZUlucHV0VmFsdWUgPSByYXRlSW5wdXQudmFsdWU7XG4gICAgICAgIGxldCBsb2FuUHJpbmNpcGFsVmFsdWUgPSBkZWxldGVTcGFjZShjcmVkaXQuaW5uZXJIVE1MKTtcbiAgICAgICAgbGV0IGNyZWRpdFRlcm0gPSBjcmVkaXRUZXJtdElucHV0LnZhbHVlO1xuICAgICAgICBjYWxjTW9udGhseVBheW1lbnQobG9hblByaW5jaXBhbFZhbHVlLCByYXRlSW5wdXRWYWx1ZSwgY3JlZGl0VGVybSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY01vbnRobHlQYXltZW50KGMsIGksIG4pIHtcbiAgICAgICAgbGV0IGNhbGNSYXRlID0gaSAvIDEyMDA7XG4gICAgICAgIGxldCBudW1iZXJPZk1vbnRobHkgPSBuICogMTI7XG4gICAgICAgIGxldCBwb3dWYWx1ZSA9IE1hdGgucG93KDEgKyBjYWxjUmF0ZSwgbnVtYmVyT2ZNb250aGx5KSAtIDE7XG4gICAgICAgIGxldCBkaXZpZGVJbnRlcmVzUmF0ZSA9IGNhbGNSYXRlIC8gcG93VmFsdWU7XG4gICAgICAgIGxldCBhZGRpdGlvbiA9IGNhbGNSYXRlICsgZGl2aWRlSW50ZXJlc1JhdGU7XG4gICAgICAgIGxldCBzdW0gPSAoYyAqIGFkZGl0aW9uKS50b0ZpeGVkKDApO1xuICAgICAgICBtb250aGx5UGF5bWVudC5pbm5lclRleHQgPSBnZXRNYXNrZWRWYWx1ZShzdW0pO1xuICAgICAgICBjYWxjTmVjZXNzYXJ5SW5jb21lKHN1bSwgbnVtYmVyT2ZNb250aGx5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjTmVjZXNzYXJ5SW5jb21lKHAsIG4pIHtcbiAgICAgICAgbGV0IG92ZXJwYXltZW50VmFsdWUgPSAoNSAqIHAgLyAzKS50b0ZpeGVkKDApO1xuICAgICAgICBuZWNlc3NhcnlJbmNvbWVPdXRQdXQuaW5uZXJUZXh0ID0gZ2V0TWFza2VkVmFsdWUob3ZlcnBheW1lbnRWYWx1ZSk7XG4gICAgICAgIGNhbGNPdmVycGF5bWVudChwLCBuKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjT3ZlcnBheW1lbnQgPSAocCwgbikgPT4ge1xuICAgICAgICBsZXQgY29zdFZhbHVlID0gZGVsZXRlU3BhY2UoY29zdElucHV0LnZhbHVlKTtcbiAgICAgICAgbGV0IGNvbnRyaWJ1dGlvblZhbHVlID0gZGVsZXRlU3BhY2UoY29udHJpYnV0aW9uSW5wdXQudmFsdWUpO1xuICAgICAgICBsZXQgc3VtT3ZlcnBheW1lbnQgPSBwICogbiAtIE51bWJlcihjb3N0VmFsdWUpICsgTnVtYmVyKGNvbnRyaWJ1dGlvblZhbHVlKTtcbiAgICAgICAgb3ZlcnBheW1lbnRPdXRQdXQuaW5uZXJUZXh0ID0gZ2V0TWFza2VkVmFsdWUoc3VtT3ZlcnBheW1lbnQpO1xuIFxuICAgIH1cbiAgICBjb25zdCBmdW4gPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb3N0VmFsID0gIGRlbGV0ZVNwYWNlKGNvc3RJbnB1dC52YWx1ZSk7XG4gICAgICAgIGxldCBjb250cmlidXRpb25WYWwgPSBkZWxldGVTcGFjZShjb250cmlidXRpb25JbnB1dC52YWx1ZSk7XG4gICAgICAgIGxldCBudW1Db3N0ID0gK2Nvc3RWYWw7XG4gICAgICAgIGxldCBudW1Db250cmlidXRpb24gPSArY29udHJpYnV0aW9uVmFsO1xuXG4gICAgICAgIGlmKG51bUNvc3QgPCBudW1Db250cmlidXRpb24pIHtcbiAgICAgICAgICAgIGNvc3RJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgY29udHJpYnV0aW9uSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbnB1dFZhbHVlKCkge1xuICAgICAgICBjb3N0SW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgY29udHJpYnV0aW9uSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgY3JlZGl0VGVybXRJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICByYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgb3ZlcnBheW1lbnRPdXRQdXQuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgIG5lY2Vzc2FyeUluY29tZU91dFB1dC5pbm5lclRleHQgPSAnJztcbiAgICAgICAgY3JlZGl0LmlubmVyVGV4dCA9ICcnO1xuICAgICAgICBtb250aGx5UGF5bWVudC5pbm5lclRleHQgPSAnJztcbiAgICB9XG5cbn0pO1xuXG4vL1RPRE86INGB0L7RhdGA0LDQvdC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1INCyIGxvY2FsU3RvcmFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz85OGFmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSIsImZpbGUiOiIuL3NyYy9zY3NzL3N0eWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/style.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;