if (Meteor.isClient) {

  // --- Template Registration ---

  var allTemplates = [
    'atError',
    'atForm',
    'atInput',
    'atTextInput',
    'atCheckboxInput',
    'atSelectInput',
    'atRadioInput',
    'atHiddenInput',
    'atMessage',
    'atNavButton',
    'atOauth',
    'atSocial',
    'atPwdForm',
    'atPwdFormBtn',
    'atPwdLink',
    'atReCaptcha',
    'atResendVerificationEmailLink',
    'atResult',
    'atSep',
    'atTitle',
    'atSigninLink',
    'atSignupLink',
    'atTermsLink',
    'fullPageAtForm',
  ];

  allTemplates.forEach(function(name) {
    Tinytest.add('Template - ' + name + ' is defined', function(test) {
      test.isTrue(!!Template[name], 'Template.' + name + ' should be defined');
    });
  });

  // --- Helper Registration ---

  var templatesWithHelpers = {
    'atError': 'atErrorHelpers',
    'atForm': 'atFormHelpers',
    'atInput': 'atInputHelpers',
    'atTextInput': 'atInputHelpers',
    'atCheckboxInput': 'atInputHelpers',
    'atSelectInput': 'atInputHelpers',
    'atRadioInput': 'atInputHelpers',
    'atHiddenInput': 'atInputHelpers',
    'atMessage': 'atMessageHelpers',
    'atNavButton': 'atNavButtonHelpers',
    'atOauth': 'atOauthHelpers',
    'atSocial': 'atSocialHelpers',
    'atPwdForm': 'atPwdFormHelpers',
    'atPwdFormBtn': 'atPwdFormBtnHelpers',
    'atPwdLink': 'atPwdLinkHelpers',
    'atReCaptcha': 'atReCaptchaHelpers',
    'atResendVerificationEmailLink': 'atResendVerificationEmailLinkHelpers',
    'atResult': 'atResultHelpers',
    'atSep': 'atSepHelpers',
    'atTitle': 'atTitleHelpers',
    'atSigninLink': 'atSigninLinkHelpers',
    'atSignupLink': 'atSignupLinkHelpers',
    'atTermsLink': 'atTermsLinkHelpers',
  };

  Object.keys(templatesWithHelpers).forEach(function(templateName) {
    var helpersName = templatesWithHelpers[templateName];
    Tinytest.add('Helpers - ' + templateName + ' has helpers from ' + helpersName, function(test) {
      test.isTrue(
        !!AccountsTemplates[helpersName],
        'AccountsTemplates.' + helpersName + ' should exist'
      );
      var helpers = Template[templateName].__helpers;
      test.isTrue(!!helpers, 'Template.' + templateName + ' should have helpers registered');
    });
  });

  // --- Event Registration ---

  var templatesWithEvents = [
    'atInput',
    'atNavButton',
    'atPwdForm',
    'atPwdLink',
    'atResendVerificationEmailLink',
    'atSigninLink',
    'atSignupLink',
    'atSocial',
    'atTermsLink',
  ];

  templatesWithEvents.forEach(function(templateName) {
    Tinytest.add('Events - ' + templateName + ' has events registered', function(test) {
      var eventMaps = Template[templateName].__eventMaps;
      test.isTrue(
        eventMaps && eventMaps.length > 0,
        'Template.' + templateName + ' should have event maps registered'
      );
    });
  });

}
