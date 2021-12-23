import {useEffect} from 'react';

function GoogleAd({adSlot}) {
  useEffect(() => {
    try {
        // if(typeof window !== 'undefined'){
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        // }
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
      <div style={{overflow: 'hidden', minWidth: '300px', minHeight: '150px'}}>
        <ins
        className="adsbygoogle"
        style={{display: 'block'}}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
        />
    </div>
  );
}

export default GoogleAd