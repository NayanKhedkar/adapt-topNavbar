# adapt-topNavbar

An extension allow to add extensions like resourse,languagepicker,glossary add as a drawer item inside drawer on mobile devices.


## Settings overview

**TopNavbar**, and are properly formatted as JSON in [example.json](https://github.com/NayanKhedkar/adapt-topNavbar/blob/master/example.json) file.

**\_topNavbar** (Array): The  object that contains values for **extension** ,**title**, **description**, **addTo**,**iconClass**,**\_trigger**,**\_drawerOrder**,,**className**, and **ariaLabel**.

>**extension** (string): artibute of extensions(e.g. ,_glossary,_resources,_languagePicker,_pageLevelProgress etc) that configured in `course.json`.

>**title** (string): This text is displayed (along with the **description**) in the [Drawer](https://github.com/adaptlearning/adapt_framework/wiki/Core-modules#drawer) as part of a button that gives access to the open extenion from drawer.

>**description** (string): This text is displayed (along with the **title**) in the [Drawer](https://github.com/adaptlearning/adapt_framework/wiki/Core-modules#drawer) as part of a button that gives access tothe open extenion from drawer.

>**addTo** (string): This value indicate that where to add extension in **drawer** or **navbar**.

>**iconClass** (string): This value is for icon class name which will show in navigation bar.

>**\_trigger** (string):This value indicate fire trigger when clicking on icon/drawer-item to open drawer.
>>*Note:For extension like(resousces,glossary) use defult trigger avialbe in tthat extension to open drawer*

>**\_drawerOrder** (string): Determines the order in which this extension appears as a drawer item. Acceptable values are numbers.

>**className** (string):Allows the name of class to add in drawer.

>**ariaLabel** (string): This value added as a aria-label for navbar icon. 


**NOTE:**
  *The few extensions which allready addable to navigation bar (i.e PLP,LanguagePiker) will need to add extra atributes in **_topNavbar** like(title,description,_drawerOrder,className)*
<div float align=right><a href="#top">Back to Top</a></div>

## Limitations

No known limitations.

----------------------------
**Version number:**  1.0.0   
**Framework versions:**  5.19.1+
**Author / maintainer:** Adapt Core Team with [contributors](https://github.com/NayanKhedkar/adapt-topNavbar/graphs/contributors)
**Accessibility support:** WAI AA
**RTL support:** Yes
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge, IE11, Safari 12+13 for macOS/iOS/iPadOS, Opera
