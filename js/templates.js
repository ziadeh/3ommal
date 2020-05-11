  /*! 
 * 3ommal Web Application
 * Questions Wizard
 * author Ziad Ziadeh <ziadeh50@gmail.com>
 */
  //##############################################################################################################################
  //##############################################---Define Wizard Templates---###################################################
  //##############################################################################################################################
$.template("questionYesNo", '<div class="box-container box-inline" id="question-${id}"> <div class="box-content text-center"> <p class="text-gray-dark m-t-b-20" data-content="title"></p><p class="text-silver text-lighter">${question}</p></div><div class="box-confirm"> <div class="ck-button"> <label> <input type="radio" name="${id}" value="${values.firstVal}" /><span>${values.firstVal}</span> </label> </div><div class="ck-button"> <label> <input type="radio" name="${id}" value="${values.secondVal}"/><span>${values.secondVal}</span> </label>  </div></div></div>');
$.template("question-input", '<div class="box-container box-inline" id="question-${id}"> <div class="box-content text-center"> <p class="text-gray-dark m-t-b-20" data-content="title"></p><p class="text-silver text-lighter">${question}</p></div><div class="box-confirm"> <input type="number" class="from-control" placeholder="${values.placeholder}" name="${values.name}"></div></div>');
$.template('link-icon', '<a class="btn btn-primary btn-with-icon" onclick="goTo(\'${page}\'); ${props}"> <div class="icon-container"><span class="icon ${icon} white"></span></div><span class="category-title">${title}</span> <input type="radio" name="${name}" value="${val}" /></a>');
$.template('question-nav', '<div class="question-nav"> {{if last}}<a href="#" class="btn btn-secondary" onclick="${action}(\'${action_prop}\', \'${validate}\')"> <span class="icon icon-arrow-next white"> </span> تقديم الطلب </a>{{/if}}{{if !last}}<a href="#" class="btn btn-primary" onclick="${action}(\'${action_prop}\', \'${validate}\')"> <span class="icon icon-arrow-next white"> </span> السؤال التالي </a>{{/if}} {{if !first}}<a href="#" class="btn btn-primary" onclick="goToPrev()"> السؤال السابق <span class="icon icon-arrow-prev white"> </span> </a> {{/if}} </div>');
$.template('question-year-month',' <div class="box-container box-inline" id="question-${id}"> <div class="box-content text-center"> <p class="text-gray-dark m-t-b-20" data-content="title"></p><p class="text-silver text-lighter">${question}</p></div><div class="box-confirm"> <select class="list-year" name="${yearName}"> <option value="">السنة</option> {{each(prop, val) listYear}} <option value="${val}">${val}</option>{{/each}}</select> <select class="list-month" name="${monthName}"> <option value="">الشهر</option> {{each(prop, val) listMonth}} <option value="${val}">${val}</option>{{/each}}</select> </div>');
$.template('question-select',' <div class="box-container box-inline" id="question-${id}"> <div class="box-content text-center"> <p class="text-gray-dark m-t-b-20" data-content="title"></p><p class="text-silver text-lighter">${question}</p></div><div class="box-confirm"> <select class="list-year" name="${values.name}"> <option value="">${values.placeholder}</option> {{each(prop, val) values.list}} <option value="${val}">${val}</option>{{/each}}</select> </div>');
$.template('modal-button', '<div class="modal fade" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="box-container"> <div class="box-content text-center"> <p class="text-gray-dark m-t-b-20">${title}</p><p class="text-silver text-lighter"> ${message}</p></div><div class="modal-confirm"> <a class="btn btn-link modal-view" href="#" ${action}>${button}</a> </div></div></div></div><div class="modal-backdrop"></div></div>');
$.template('category-section', '<div class="category-section-icon"> <span class="{{if icon === "logo"}} ${icon} {{else}} icon ${icon} {{/if}}"></span> </div><p class="text-blue text-center m-t-30"> ${title}</p><div class="selection selection-sm m-t-100" id="cat-${id}"> </div>');