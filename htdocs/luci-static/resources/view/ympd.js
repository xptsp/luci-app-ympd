'use strict';
'require view';
'require form';

// Project code format is tabs, not spaces
return view.extend({
	render: function() {
		var m, s, o;

		m = new form.Map('ympd', _('YMPD Configuration'))

		s = m.section(form.TypedSection, 'ympd');
		s.anonymous = true;

		o = s.option(form.Value, 'webport', _('Listen IP/port for Webserver'));
		o.placeholder = '8080'
		o.default = '8080'
		o.rmempty = false;

		o = s.option(form.Value, 'cert', _('SSL Certificate'), _("Requires combining <strong>key.pem</strong> and <strong>cert.pem</strong> into single certificate") + "<br />" + _("More Information:") + " <a href=\"https://github.com/notandy/ympd#ssl-support\">SSL Support</a>");

		o = s.option(form.Value, 'host', _('Connect to MPD at host'));
		o.placeholder = '127.0.0.1'
		o.default = '127.0.0.1';
		o.rmempty = false;

		o = s.option(form.Value, 'port', _('Connect to MPD at port'));
		o.default = '6600'
		o.rmempty = false;
		o.datatype = "integer"

		o = s.option(form.Value, 'mpdpass', _('MPD Password'));

		o = s.option(form.Value, 'dirbletoken', _('Dirble API token'));

		return m.render();
	},
});
