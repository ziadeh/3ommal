  /*! 
 * 3ommal Web Application
 * Questions Wizard
 * author Ziad Ziadeh <ziadeh50@gmail.com>
 */
  //##############################################################################################################################
  //##################################################---Categories Data---#######################################################
  //##############################################################################################################################

        
whatIsIdType = 'ما هو نوع بطاقة الهوية';    
          
let categories = 
    {
        workFields: {
            id: 'work_type',
            title: 'مجالات العمل',
            icon: 'logo',
            data: [
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
                    page: 'تخصصات اعمال الزراعة',
                    props: "setSelection(this)"
                },
                {
                    name: 'work-fields',
                    val: 'maintenance',
                    title: 'أعمال صيانة',
                    icon: 'icon-maintenance',
                    page: 'تخصصات اعمال الصيانه',
                    props: "setSelection(this)"
                },
                {
                    name: 'work-fields',
                    val: 'restaurants',
                    title: 'المطاعم',
                    icon: 'icon-restaurants',
                    page: 'تخصصات اعمال المطاعم',
                    props: "setSelection(this)"
                },
                {
                    name: 'work-fields',
                    val: 'road-working',
                    title: 'أعمال تعبيد الطرق',
                    icon: 'icon-road-working',
                    page: 'تخصصات اعمال تعبيد الطرق',
                    props: "setSelection(this)"
                },
                {
                    name: 'work-fields',
                    val: 'occupations',
                    title: 'المهن والحرف',
                    icon: 'icon-occupations',
                    page: 'تخصصات اعمال المهن والحرف',
                    props: "setSelection(this)"
                },
                {
                    name: 'work-fields',
                    val: 'factory',
                    title: 'مصانع',
                    icon: 'icon-factory',
                    page: 'تخصصات اعمال المصانع',
                    props: "setSelection(this)"
                },
                {
                    name: 'work-fields',
                    val: 'hotels',
                    title: 'فنادق',
                    icon: 'icon-hotels',
                    page: 'تخصصات اعمال الفنادق',
                    props: "setSelection(this)"
                },
                {
                    name: 'work-fields',
                    val: 'shopping',
                    title: 'مراكز تسوق',
                    icon: 'icon-shopping',
                    page: 'تخصصات اعمال مراكز التسوق',
                    props: "setSelection(this)"
                },
                {
                    name: 'work-fields',
                    val: 'medical',
                    title: 'مشافي',
                    icon: 'icon-medical',
                    page: 'تخصصات اعمال المشافي',
                    props: "setSelection(this)"
                },
                {
                    name: 'work-fields',
                    val: 'health',
                    title: 'المهن الصحية',
                    icon: 'icon-health',
                    page: 'تخصصات المهن الصحية',
                    props: "setSelection(this)"
                },
                {
                    name: 'work-fields',
                    val: 'cleaning',
                    title: 'تنظيف',
                    icon: 'icon-cleaning',
                    page: 'تخصصات اعمال التنظيف',
                    props: "setSelection(this)"
                },
                {
                    name: 'work-fields',
                    val: 'drivers',
                    title: 'سائقين',
                    icon: 'icon-drivers',
                    page: 'تخصصات اعمال السائقين',
                    props: "setSelection(this)"
                }
            ]
        }, 
        constructions: {
            id: 'category_constructions',
            title: 'تخصصات عمل البناء',
            icon: 'icon-constructions icon-lg',
            data: [
                {
                    name: 'constructions',
                    val: 'بناء الحجر',
                    title: 'سائقين',
                    icon: 'icon-plus',
                    page: whatIsIdType,
                    props: "setSelection(this)"
                },
                {
                    name: 'constructions',
                    val: 'بناء جدران استنادية',
                    title: 'بناء جدران استنادية',
                    icon: 'icon-plus',
                    page: whatIsIdType,
                    props: "setSelection(this)"
                },
                {
                    name: 'constructions',
                    val: 'طوبار',
                    title: 'طوبار',
                    icon: 'icon-plus',
                    page: whatIsIdType,
                    props: "setSelection(this)"
                },
                {
                    name: 'constructions',
                    val: 'بناء سلاسل',
                    title: 'بناء سلاسل',
                    icon: 'icon-plus',
                    page: whatIsIdType,
                    props: "setSelection(this)"
                },
                {
                    name: 'constructions',
                    val: 'حدادة بناء',
                    title: 'حدادة بناء',
                    icon: 'icon-plus',
                    page: whatIsIdType,
                    props: "setSelection(this)"
                },
                {
                    name: 'constructions',
                    val: 'بناء طوب',
                    title: 'بناء طوب',
                    icon: 'icon-plus',
                    page: whatIsIdType,
                    props: "setSelection(this)"
                },
                {
                    name: 'constructions',
                    val: 'قصارة',
                    title: 'قصارة',
                    icon: 'icon-plus',
                    page: whatIsIdType,
                    props: "setSelection(this)"
                },
                {
                    name: 'constructions',
                    val: 'تلبيس جدران',
                    title: 'تلبيس جدران',
                    icon: 'icon-plus',
                    page: whatIsIdType,
                    props: "setSelection(this)"
                },
                {
                    name: 'constructions',
                    val: 'كحلة',
                    title: 'كحلة',
                    icon: 'icon-plus',
                    page: whatIsIdType,
                    props: "setSelection(this)"
                },
                {
                    name: 'constructions',
                    val: 'تركيب الشايش',
                    title: 'تركيب الشايش',
                    icon: 'icon-plus',
                    page: whatIsIdType,
                    props: "setSelection(this)"
                }
            ]
        }
    }
