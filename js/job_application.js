$(function () {
  $("#templates").load("./templates/templates.html", function () {
    $.tmpl("questionYesNo", {
      id: "job_interview",
      values: {
          firstVal: 'نعم',
          secondVal: 'لا'
      },
      question:
        "بحيث تضمن العمل دون وساطات والحصول على مستحقات صمن عمل آمن,يرجى من حضرتك تعبئة البيانات التاليه بعد الموافقه بنعم",
    }).appendTo("#job_interview");
  });
});

$(".steps li").removeClass("disabled");
$(".next").click(() => {
  $("#wizard").steps("next");
});
$("#previous").click(() => {
  $("#wizard").steps("previous");
});

let q = "#question-";
let radio = "input[type=radio]";

$(document).on("change", q + "job_interview " + radio, function (e) {
  let answer = e.target.value;
  setTimeout(() => {
    answer === "نعم"
      ? $("#wizard-t-1").get(0).click()
      : (window.location = "/home.html");
  }, 250);
});

function goTo(toQuestion, validate) {
    if(!toQuestion) return;
    if(toQuestion === 'ما هو نوع بطاقة الهوية') {
        $('.page-icon').show();
    }
    $(".steps li").each(function( index ) {
        let title = $( this ).text();
        let id = $( this ).find('a').attr('id');
        title = title.replace('current step: ', '');
        console.log(title, toQuestion);
        console.log(title === toQuestion);
        if(title === toQuestion) {
            console.log(index, title, toQuestion);
            if(validate) {
                let inputType = undefined;

                $("#"+validate+" input").each((e) => {
                    if(e !== 0) return;
                    inputType = $("#"+validate+" input").eq(e)[0].type;
                });
                switch(inputType) {
                    case 'radio':
                        if ($('#'+validate+':not(:has(:radio:checked))').length) {
                            showMessage();
                            return;
                        }
                    break;
                }
            }
            console.log(id);
            $("#"+id).get(0).click();
        }
    });
}

function goToPart(part, validate) {
    let palestinian = 'هل لديك بطاقة ممغنطة'; 
    let israeli = 'هل لديك رخصة مركبة';
    let toSection = undefined;

    switch(part) {
        case 'nationality':
            let selectedValue = $("#"+validate+ " input:checked").val();
            if(!selectedValue) {showMessage(); return};
            selectedValue === 'فلسطينية' ? toSection = palestinian : toSection = israeli;
            goTo(toSection, validate);
        break;
    }
}


function setSelection(name, value) {
    if(!value) {
        $(name).find('input').attr('checked', 'checked');
    } else {
        $("input[name="+name+"][value='" + value + "']").attr('checked', 'checked');
    }
}

function showMessage() {
    $('.form-messages').fadeIn();
    setTimeout(() => {
        $('.form-messages').fadeOut();
    }, 2000);
}
let workFields = [
    {
        name: 'work-fields',
        val: 'constructions',
        title: 'البناء',
        icon: 'icon-constructions',
        page: 'تخصصات عمل البناء',
        props: "setSelection(this)"
    },
    {
        name: 'work-fields',
        val: 'cultivation',
        title: 'الزراعة',
        icon: 'icon-cultivation',
        page: '',
        props: "setSelection(this)"
    },
    {
        name: 'work-fields',
        val: 'maintenance',
        title: 'أعمال صيانة',
        icon: 'icon-maintenance',
        page: 'مجالات العمل',
        props: "setSelection(this)"
    },
    {
        name: 'work-fields',
        val: 'restaurants',
        title: 'المطاعم',
        icon: 'icon-restaurants',
        page: 'مجالات العمل',
        props: "setSelection(this)"
    },
    {
        name: 'work-fields',
        val: 'road-working',
        title: 'أعمال تعبيد الطرق',
        icon: 'icon-road-working',
        page: 'مجالات العمل',
        props: "setSelection(this)"
    },
    {
        name: 'work-fields',
        val: 'occupations',
        title: 'المهن والحرف',
        icon: 'icon-occupations',
        page: 'مجالات العمل',
        props: "setSelection(this)"
    },
    {
        name: 'work-fields',
        val: 'factory',
        title: 'مصانع',
        icon: 'icon-factory',
        page: 'مجالات العمل',
        props: "setSelection(this)"
    },
    {
        name: 'work-fields',
        val: 'hotels',
        title: 'فنادق',
        icon: 'icon-hotels',
        page: 'مجالات العمل',
        props: "setSelection(this)"
    },
    {
        name: 'work-fields',
        val: 'shopping',
        title: 'مراكز تسوق',
        icon: 'icon-shopping',
        page: 'مجالات العمل',
        props: "setSelection(this)"
    },
    {
        name: 'work-fields',
        val: 'medical',
        title: 'مشافي',
        icon: 'icon-medical',
        page: 'مجالات العمل',
        props: "setSelection(this)"
    },
    {
        name: 'work-fields',
        val: 'health',
        title: 'المهن الصحية',
        icon: 'icon-health',
        page: 'مجالات العمل',
        props: "setSelection(this)"
    },
    {
        name: 'work-fields',
        val: 'cleaning',
        title: 'تنظيف',
        icon: 'icon-cleaning',
        page: 'مجالات العمل',
        props: "setSelection(this)"
    },
    {
        name: 'work-fields',
        val: 'drivers',
        title: 'سائقين',
        icon: 'icon-drivers',
        page: 'مجالات العمل',
        props: "setSelection(this)"
    }
];

$.tmpl("link-icon", workFields).appendTo("#step-work-fields");


let constructions = [
    {
        name: 'constructions',
        val: 'بناء الحجر',
        title: 'سائقين',
        icon: 'icon-plus',
        page: 'ما هو نوع بطاقة الهوية',
        props: "setSelection(this)"
    },
    {
        name: 'constructions',
        val: 'بناء جدران استنادية',
        title: 'بناء جدران استنادية',
        icon: 'icon-plus',
        page: 'ما هو نوع بطاقة الهوية',
        props: "setSelection(this)"
    },
    {
        name: 'constructions',
        val: 'طوبار',
        title: 'طوبار',
        icon: 'icon-plus',
        page: 'ما هو نوع بطاقة الهوية',
        props: "setSelection(this)"
    },
    {
        name: 'constructions',
        val: 'بناء سلاسل',
        title: 'بناء سلاسل',
        icon: 'icon-plus',
        page: 'ما هو نوع بطاقة الهوية',
        props: "setSelection(this)"
    },
    {
        name: 'constructions',
        val: 'حدادة بناء',
        title: 'حدادة بناء',
        icon: 'icon-plus',
        page: 'ما هو نوع بطاقة الهوية',
        props: "setSelection(this)"
    },
    {
        name: 'constructions',
        val: 'بناء طوب',
        title: 'بناء طوب',
        icon: 'icon-plus',
        page: 'ما هو نوع بطاقة الهوية',
        props: "setSelection(this)"
    },
    {
        name: 'constructions',
        val: 'قصارة',
        title: 'قصارة',
        icon: 'icon-plus',
        page: 'ما هو نوع بطاقة الهوية',
        props: "setSelection(this)"
    },
    {
        name: 'constructions',
        val: 'تلبيس جدران',
        title: 'تلبيس جدران',
        icon: 'icon-plus',
        page: 'ما هو نوع بطاقة الهوية',
        props: "setSelection(this)"
    },
    {
        name: 'constructions',
        val: 'كحلة',
        title: 'كحلة',
        icon: 'icon-plus',
        page: 'ما هو نوع بطاقة الهوية',
        props: "setSelection(this)"
    },
    {
        name: 'constructions',
        val: 'تركيب الشايش',
        title: 'تركيب الشايش',
        icon: 'icon-plus',
        page: 'ما هو نوع بطاقة الهوية',
        props: "setSelection(this)"
    }
];
$.tmpl("link-icon", constructions).appendTo("#step-constructions");

let idType = [
    {
        id: 'id-type',
        question: 'ما هو نوع بطاقة الهوية',
        values: {
            firstVal: 'فلسطينية',
            secondVal: 'اسرائيلية'
        }
    }
];
$.tmpl("questionYesNo", idType).appendTo("#id_type");
let magneticCard = [
    {
        id: 'magnetic_card',
        question: 'هل لديك بطاقة ممغنطة',
        values: {
            firstVal: 'نعم',
            secondVal: 'لا'
        }
    }
];
$.tmpl("questionYesNo", magneticCard).appendTo("#magnetic_card");


let workedInsideGreenLine = [
    {
        id: 'worked-inside-green-line',
        question: 'هل عملت سابقاً داخل الخط الأخضر',
        values: {
            firstVal: 'نعم',
            secondVal: 'لا'
        }
    }
];
$.tmpl("questionYesNo", workedInsideGreenLine).appendTo("#worked_inside_green_line");

let vehicleLicense = [
    {
        id: 'vehicle-license',
        question: 'هل لديك رخصة مركبة',
        values: {
            firstVal: 'نعم',
            secondVal: 'لا'
        }
    }
];
$.tmpl("questionYesNo", vehicleLicense).appendTo("#vehicle_license");