const ae=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}};ae();function W(){}function _(e){return e()}function P(){return Object.create(null)}function L(e){e.forEach(_)}function ie(e){return typeof e=="function"}function $(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}let C;function J(e,n){return C||(C=document.createElement("a")),C.href=n,e===C.href}function se(e){return Object.keys(e).length===0}function y(e,n){e.appendChild(n)}function A(e,n,o){e.insertBefore(n,o||null)}function k(e){e.parentNode.removeChild(e)}function he(e,n){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(n)}function w(e){return document.createElement(e)}function B(e){return document.createTextNode(e)}function x(){return B(" ")}function re(){return B("")}function le(e,n,o,t){return e.addEventListener(n,o,t),()=>e.removeEventListener(n,o,t)}function g(e,n,o){o==null?e.removeAttribute(n):e.getAttribute(n)!==o&&e.setAttribute(n,o)}function ue(e){return Array.from(e.childNodes)}function Q(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}function de(e,n,o,t){o===null?e.style.removeProperty(n):e.style.setProperty(n,o,t?"important":"")}let G;function Y(e){G=e}const S=[],z=[],O=[],q=[],ye=Promise.resolve();let N=!1;function me(){N||(N=!0,ye.then(X))}function F(e){O.push(e)}const D=new Set;let j=0;function X(){const e=G;do{for(;j<S.length;){const n=S[j];j++,Y(n),we(n.$$)}for(Y(null),S.length=0,j=0;z.length;)z.pop()();for(let n=0;n<O.length;n+=1){const o=O[n];D.has(o)||(D.add(o),o())}O.length=0}while(S.length);for(;q.length;)q.pop()();N=!1,D.clear(),Y(e)}function we(e){if(e.fragment!==null){e.update(),L(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(F)}}const H=new Set;let ge;function Z(e,n){e&&e.i&&(H.delete(e),e.i(n))}function ce(e,n,o,t){if(e&&e.o){if(H.has(e))return;H.add(e),ge.c.push(()=>{H.delete(e),t&&(o&&e.d(1),t())}),e.o(n)}}function be(e){e&&e.c()}function ee(e,n,o,t){const{fragment:a,on_mount:i,on_destroy:s,after_update:u}=e.$$;a&&a.m(n,o),t||F(()=>{const r=i.map(_).filter(ie);s?s.push(...r):L(r),e.$$.on_mount=[]}),u.forEach(F)}function ne(e,n){const o=e.$$;o.fragment!==null&&(L(o.on_destroy),o.fragment&&o.fragment.d(n),o.on_destroy=o.fragment=null,o.ctx=[])}function Ie(e,n){e.$$.dirty[0]===-1&&(S.push(e),me(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function oe(e,n,o,t,a,i,s,u=[-1]){const r=G;Y(e);const h=e.$$={fragment:null,ctx:null,props:i,update:W,not_equal:a,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:P(),dirty:u,skip_bound:!1,root:n.target||r.$$.root};s&&s(h.root);let f=!1;if(h.ctx=o?o(e,n.props||{},(c,T,...p)=>{const b=p.length?p[0]:T;return h.ctx&&a(h.ctx[c],h.ctx[c]=b)&&(!h.skip_bound&&h.bound[c]&&h.bound[c](b),f&&Ie(e,c)),T}):[],h.update(),f=!0,L(h.before_update),h.fragment=t?t(h.ctx):!1,n.target){if(n.hydrate){const c=ue(n.target);h.fragment&&h.fragment.l(c),c.forEach(k)}else h.fragment&&h.fragment.c();n.intro&&Z(e.$$.fragment),ee(e,n.target,n.anchor,n.customElement),X()}Y(r)}class te{$destroy(){ne(this,1),this.$destroy=W}$on(n,o){const t=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return t.push(o),()=>{const a=t.indexOf(o);a!==-1&&t.splice(a,1)}}$set(n){this.$$set&&!se(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const fe=[{songTitle:"22 by Taylor Swift",lyrics:`It feels like a perfect night
To dress up like hipsters
And make fun of our exes, uh-uh, uh-uh
It feels like a perfect night
For breakfast at midnight
To fall in love with strangers, uh-uh, uh-uh


Yeah
We're happy, free, confused, and lonely at the same time
It's miserable and magical, oh, yeah
Tonight's the night when we forget about the deadlines
It's time, oh-oh

I don't know about you, but I'm feeling 22
Everything will be alright if you keep me next to you
You don't know about me, but I'll bet you want to
Everything will be alright if we just keep dancing like we're
22, 22


It seems like one of those nights
This place is too crowded
Too many cool kids, uh-uh, uh-uh
(Who's Taylor Swift, anyway? Ew)
It seems like one of those nights
We ditch the whole scene
And end up dreaming
Instead of sleeping


Yeah
We're happy, free, confused, and lonely in the best way
It's miserable and magical, oh, yeah
Tonight's the night when we forget about the heartbreaks
It's time, oh-oh


(Hey!)
I don't know about you, but I'm feeling 22
Everything will be alright (Ooh) if you keep me next to you
You don't know about me, but I'll bet you want to
Everything will be alright if (Alright)
We just keep dancing like we're 22 (Oh, oh, oh, oh, oh)
22 (I don't know about you)
22, 22
Related Songs
It feels like one of those nights
We ditch the whole scene
It feels like one of those nights
We won't be sleeping
It feels like one of those nights
You look like bad news
I gotta have you
I gotta have you
Ooh, ooh, yeah


(Hey!)
I don't know about you (I don't know about you), but I'm feeling 22
Everything will be alright if (Ooh) you keep me next to you
You don't know about me (You don't know about me), but I'll bet you want to
Everything will be alright if we just keep dancing like we're
22 (Whoa, oh)
22 (Dancing like)
22 (Yeah, yeah), 22, (Yeah, yeah, yeah)


It feels like one of those nights
We ditch the whole scene
It feels like one of those nights
We won't be sleeping
It feels like one of those nights
You look like bad news
I gotta have you
I gotta have you`,coverArt:"https://images.genius.com/2463ee507f2bce8d0ea12d764c64899a.1000x1000x1.jpg"},{songTitle:"22 (Taylor's Version) by Taylor Swift",lyrics:`It feels like a perfect night
To dress up like hipsters
And make fun of our exes
Uh-uh, uh-uh
It feels like a perfect night
For breakfast at midnight
To fall in love with strangers
Uh-uh, uh-uh


Yeah
We're happy, free, confused, and lonely at the same time
It's miserable and magical, oh yeah
Tonight's the night when we forget about the deadlines
It's time, oh-oh

I don't know about you
But I'm feelin' twenty-two
Everything will be alright if
You keep me next to you
You don't know about me
But I'll bet you want to
Everything will b\u0435 alright if
We just keep dancin' like we'r\u0435
Twenty-two
Twenty-two


It seems like one of those nights
This place is too crowded
Too many cool kids
Uh-uh, uh-uh (Who's Taylor Swift anyway? Ew)
It seems like one of those nights
We ditch the whole scene
And end up dreamin'
Instead of sleepin'


Yeah
We're happy, free, confused, and lonely in the best way
It's miserable and magical, oh, yeah
Tonight's the night when we forget about the heartbreaks
It's time, oh-oh

(Hey)
I don't know about you
But I'm feelin' twenty-two
Everything will be alright if (Ooh)
You keep me next to you
You don't know about me
But I'll bet you want to
Everything will be alright if (Alright)
We just keep dancin' like we're
Twenty-two (Oh, oh, oh, oh, oh)
Twenty-two (I don't know about you)
Twenty-two
Twenty-two (Ooh)


It feels like one of those nights
We ditch the whole scene
It feels like one of those nights
We won't be sleepin'
It feels like one of those nights
You look like bad news
I gotta have you
I gotta have you


Ooh, oh
Yeah, hey, yeah

(Hey)
I don't know about you (I don't know about you)
But I'm feelin' twenty-two
Everything will be alright if (Ooh, oh-oh)
You keep me next to you
You don't know about me (You don't know about me)
But I'll bet you want to
Everything will be alright if
We just keep dancin' like we're (Dance like we're twenty-two)
Twenty-two (Ooh, woah-oh-oh-oh)
Twenty-two (Dancin' like)
Twenty-two (Yeah, yeah)
Twenty-two (Yeah, yeah, yeah)


It feels like one of those nights (Twenty-two)
We ditch the whole scene
It feels like one of those nights (Twenty-two)
We won't be sleepin'
It feels like one of those nights (Twenty-two)
You look like bad news
I gotta have you
I gotta have you`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"Afterglow by Taylor Swift",lyrics:`I blew things out of proportion, now you're blue
Put you in jail for something you\u2005didn\u2019t\u2005do
I pinned your\u2005hands behind your back, oh
Thought I\u2005had reason to attack, but no


Fighting with a true love is boxing with no gloves
Chemistry 'til it blows up, 'til there\u2019s no us
Why'd I have to break what I love so much?
It's on your face, and I'm to blame, I need to say

Hey, it's all me, in my head
I'm the one who burned us down
But it's not what I meant
Sorry that I hurt you
I don't wanna do, I don\u2019t wanna do this to you (Ooh)
I don\u2019t wanna lose, I don't wanna lose this with you (Ooh)
I need to say, hey, it\u2019s all me, just don't go
Meet me in the afterglow


It's so excruciating to see you low
Just wanna lift you up and not let you go
This ultraviolet morning light below
Tells me this love is worth the fight, oh


I lived like an island, punished you with silence
Went off like sirens, just crying
Why'd I have to break what I love so much?
It\u2019s on your face, don't walk away, I need to say


Hey, it's all me, in my head
I'm the one who burned us down
But it's not what I meant
I'm sorry that I hurt you
I don't wanna do, I don't wanna do this to you (Ooh)
I don't wanna lose, I don't wanna lose this with you (Ooh)
I need to say, hey, it's all me, just don't go
Meet me in the afterglow

Tell me that you're still mine
Tell me that we'll be just fine
Even when I lose my mind
I need to say
Tell me that it's not my fault
Tell me that I'm all you want
Even when I break your heart
I need to say


Hey, it's all me, in my head
I'm the one who burned us down
But it's not what I meant
Sorry that I hurt you
I don't wanna do, I don't wanna do this to you (Ooh)
I don't wanna lose, I don't wanna lose this with you (Ooh)
I need to say, hey, it's all me, just don't go
Meet me in the afterglow`,coverArt:"https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"},{songTitle:"All Too Well by Taylor Swift",lyrics:`I walked through the door with you, the air was cold
But something 'bout it felt like home somehow
And I left my scarf there at your sister's house
And you've still got it in your drawer, even now


Oh, your sweet disposition and my wide-eyed gaze
We're singing in the car, getting lost upstate
Autumn leaves falling down like pieces into place
And I can picture it after all these days

And I know it's long gone and
That magic's not here no more
And I might be okay, but I'm not fine at all
Oh, oh, oh


'Cause there we are again on that little town street
You almost ran the red 'cause you were lookin' over at me
Wind in my hair, I was there
I remember it all too well


Photo album on the counter, your cheeks were turning red
You used to be a little kid with glasses in a twin-sized bed
And your mother's telling stories 'bout you on the tee-ball team
You taught me 'bout your past, thinking your future was me


And I know it's long gone and
There was nothing else I could do
And I forget about you long enough
To forget why I needed to


'Cause there we are again in the middle of the night
We're dancing \u2018round the kitchen in the refrigerator light
Down the stairs, I was there
I remember it all too well, yeah

Well maybe we got lost in translation
Maybe I asked for too much
But maybe this thing was a masterpiece
'Til you tore it all up
Running scared, I was there
I remember it all too well
And you call me up again
Just to break me like a promise
So casually cruel in the name of being honest
I'm a crumpled up piece of paper lying here
'Cause I remember it all, all, all
Too well


Time won't fly, it's like I'm paralyzed by it
I'd like to be my old self again, but I'm still trying to find it
After plaid shirt days and nights when you made me your own
Now you mail back my things and I walk home alone
But you keep my old scarf from that very first week
'Cause it reminds you of innocence and it smells like me
You can't get rid of it
'Cause you remember it all too well, yeah


'Cause there we are again when I loved you so
Back before you lost the one real thing you've ever known
It was rare, I was there
I remember it all too well

Wind in my hair, you were there
You remember it all
Down the stairs, you were there
You remember it all
It was rare, I was there
I remember it all too well`,coverArt:"https://images.genius.com/341214eeb78c133a8170a932919a66aa.1000x1000x1.png"},{songTitle:"All Too Well (10 Minute Version) (Taylor's Version) [From the Vault] by Taylor Swift",lyrics:`I walked through the door with you, the air was cold
But somethin' 'bout it felt like home somehow
And I left my scarf there at your sister's house
And you've still got it in your drawer, even now


Oh, your sweet disposition and my wide-eyed gaze
We're singin' in the car, getting lost upstate
Autumn leaves fallin' down like pieces into place
And I can picture it after all these days

And I know it's long gone and
That magic's not here no more
And I might be okay, but I'm not fine at all
Oh, oh, oh


'Caus\u0435 there we ar\u0435 again on that little town street
You almost ran the red 'cause you were lookin' over at me
Wind in my hair, I was there
I remember it all too well


Photo album on the counter, your cheeks were turnin' red
You used to be a little kid with glasses in a twin-sized bed
And your mother's tellin' stories 'bout you on the tee-ball team
You taught me 'bout your past, thinkin' your future was me
And you were tossing me the car keys, "Fuck the patriarchy"
Keychain on the ground, we were always skippin' town
And I was thinkin' on the drive down, "Any time now
He's gonna say it's love," you never called it what it was
'Til we were dead and gone and buried
Check the pulse and come back swearin' it's the same
After three months in the grave
And then you wondered where it went to as I reached for you
But all I felt was shame and you held my lifeless frame

And I know it's long gone and
There was nothing else I could do
And I forget about you long enough
To forget why I needed to


'Cause there we are again in the middle of the night
We're dancin' 'round the kitchen in the refrigerator light
Down the stairs, I was there
I remember it all too well
And there we are again when nobody had to know
You kept me like a secret, but I kept you like an oath
Sacred prayer and we'd swear
To remember it all too well, yeah


Well, maybe we got lost in translation, maybe I asked for too much
But maybe this thing was a masterpiece 'til you tore it all up
Runnin' scared, I was there
I remember it all too well
And you call me up again just to break me like a promise
So casually cruel in the name of bein' honest
I'm a crumpled-up piece of paper lyin' here
'Cause I remember it all, all, all

They say all's well that ends well, but I'm in a new hell
Every time you double-cross my mind
You said if we had been closer in age, maybe it would've been fine
And that made me want to die
The idea you had of me, who was she?
A never-needy, ever-lovely jewel whose shine reflects on you
Not weepin' in a party bathroom
Some actress askin' me what happened, you
That's what happened, you
You who charmed my dad with self-effacing jokes
Sippin' coffee like you're on a late-night show
But then he watched me watch the front door all night, willin' you to come
And he said, "It's supposed to be fun turning twenty-one"


Time won't fly, it's like I'm paralyzed by it
I'd like to be my old self again, but I'm still tryin' to find it
After plaid shirt days and nights when you made me your own
Now you mail back my things and I walk home alone
But you keep my old scarf from that very first week
'Cause it reminds you of innocence and it smells like me
You can't get rid of it
'Cause you remember it all too well, yeah


'Cause there we are again when I loved you so
Back before you lost the one real thing you've ever known
It was rare, I was there
I remember it all too well
Wind in my hair, you were there
You remember it all
Down the stairs, you were there
You remember it all
It was rare, I was there
I remember it all too well


And I was never good at tellin' jokes, but the punch line goes
"I'll get older, but your lovers stay my age"
From when your Brooklyn broke my skin and bones
I'm a soldier who's returning half her weight
And did the twin flame bruise paint you blue?
Just between us, did the love affair maim you too?
'Cause in this city's barren cold
I still remember the first fall of snow
And how it glistened as it fell
I remember it all too well


Just between us, did the love affair maim you all too well?
Just between us, do you remember it all too well?
Just between us, I remember it (Just between us) all too well
Wind in my hair, I was there, I was there (I was there)
Down the stairs, I was there, I was there
Sacred prayer, I was there, I was there
It was rare, you remember it all too well
Wind in my hair, I was there, I was there (Oh)
Down the stairs, I was there, I was there (I was there)
Sacred prayer, I was there, I was there
It was rare, you remember it (All too well)
Wind in my hair, I was there, I was there
Down the stairs, I was there, I was there
Sacred prayer, I was there, I was there
It was rare, you remember it
Wind in my hair, I was there, I was there
Down the stairs, I was there, I was there
Sacred prayer, I was there, I was there
It was rare, you remember it`,coverArt:"https://images.genius.com/9dd4ba749dd51d39d7b56b67b9cc3777.1000x1000x1.jpg"},{songTitle:"All Too Well (10 Minute Version) [The Short Film] by Taylor Swift",lyrics:`I walked through the door with you, the air was cold
But somethin' 'bout it felt like home somehow
And I left my scarf there at your sister's house
And you've still got it in your drawer, even now


Oh, your sweet disposition and my wide-eyed gaze
We're singin' in the car, getting lost upstate
Autumn leaves fallin' down like pieces into place
And I can picture it after all these days

And I know it's long gone and
That magic's not here no more
And I might be okay, but I'm not fine at all
Oh, oh, oh


'Caus\u0435 there we ar\u0435 again on that little town street
You almost ran the red 'cause you were lookin' over at me
Wind in my hair, I was there
I remember it all too well


Photo album on the counter, your cheeks were turnin' red
You used to be a little kid with glasses in a twin-sized bed
And your mother's tellin' stories 'bout you on the tee-ball team
You taught me 'bout your past, thinkin' your future was me
And you were tossing me the car keys, "Fuck the patriarchy"
Keychain on the ground, we were always skippin' town
And I was thinkin' on the drive down, "Any time now
He's gonna say it's love," you never called it what it was
'Til we were dead and gone and buried
Check the pulse and come back swearin' it's the same
After three months in the grave
And then you wondered where it went to as I reached for you
But all I felt was shame and you held my lifeless frame

And I know it's long gone and
There was nothing else I could do
And I forget about you long enough
To forget why I needed to


'Cause there we are again in the middle of the night
We're dancin' 'round the kitchen in the refrigerator light
Down the stairs, I was there
I remember it all too well
And there we are again when nobody had to know
You kept me like a secret, but I kept you like an oath
Sacred prayer and we'd swear
To remember it all too well, yeah


Well, maybe we got lost in translation, maybe I asked for too much
But maybe this thing was a masterpiece 'til you tore it all up
Runnin' scared, I was there
I remember it all too well
And you call me up again just to break me like a promise
So casually cruel in the name of bein' honest
I'm a crumpled-up piece of paper lyin' here
'Cause I remember it all, all, all

They say all's well that ends well, but I'm in a new hell
Every time you double-cross my mind
You said if we had been closer in age, maybe it would've been fine
And that made me want to die
The idea you had of me, who was she?
A never-needy, ever-lovely jewel whose shine reflects on you
Not weepin' in a party bathroom
Some actress askin' me what happened, you
That's what happened, you
You who charmed my dad with self-effacing jokes
Sippin' coffee like you're on a late-night show
But then he watched me watch the front door all night, willin' you to come
And he said, "It's supposed to be fun turning twenty-one"


Time won't fly, it's like I'm paralyzed by it
I'd like to be my old self again, but I'm still tryin' to find it
After plaid shirt days and nights when you made me your own
Now you mail back my things and I walk home alone
But you keep my old scarf from that very first week
'Cause it reminds you of innocence and it smells like me
You can't get rid of it
'Cause you remember it all too well, yeah


'Cause there we are again when I loved you so
Back before you lost the one real thing you've ever known
It was rare, I was there
I remember it all too well
Wind in my hair, you were there
You remember it all
Down the stairs, you were there
You remember it all
It was rare, I was there
I remember it all too well


And I was never good at tellin' jokes, but the punch line goes
"I'll get older, but your lovers stay my age"
From when your Brooklyn broke my skin and bones
I'm a soldier who's returning half her weight
And did the twin flame bruise paint you blue?
Just between us, did the love affair maim you too?
'Cause in this city's barren cold
I still remember the first fall of snow
And how it glistened as it fell
I remember it all too well


Just between us, did the love affair maim you all too well?
Just between us, do you remember it all too well?
Just between us, I remember it all too well (Just between us)
They say all's well that ends well, but I'm in a new hell
Every time you double-cross my mind
You said if we had been closer in age, maybe it would've been fine
And that made me want to die
The idea you had of me, who was she?
A never-needy, ever-lovely jewel whose shine reflects on you
Not weepin' in a party bathroom
Some actress askin' me what happened, you
That's what happened, you
You who charmed my dad with self-effacing jokes
Sippin' coffee like you're on a late-night show
But then he watched me watch the front door all night, willin' you to come
And he said, "It's supposed to be fun turning twenty-one"
Wind in my hair, I was there, I was there
Down the stairs, I was there, I was there
Sacred prayer, I was there, I was there`,coverArt:"https://images.genius.com/29c90d56b6e31199d844a99e286d9558.1000x1000x1.jpg"},{songTitle:"All Too Well (Sad Girl Autumn Version) - Recorded At Long Pond Studios by Taylor Swift",lyrics:`I walked through the door with you, the air was cold
But somethin' 'bout it felt like home somehow
And I left my scarf there at your sister's house
And you've still got it in your drawer, even now


Oh, your sweet disposition and my wide-eyed gaze
We're singin' in the car, getting lost upstate
Autumn leaves fallin' down like pieces into place
And I can picture it after all these days

And I know it's long gone and
That magic's not here no more
And I might be okay, but I'm not fine at all
Oh, oh, oh


'Cause there we are again on that little town street
You almost ran the red 'cause you were lookin' over at me
Wind in my hair, I was there
I remember it all too well


Photo album on the counter, your cheeks were turnin' red
You used to be a little kid with glasses in a twin-sized bed
And your mother's tellin' stories 'bout you on the tee-ball team
You taught me 'bout your past, thinkin' your future was me
And you were tossing me the car keys, "Fuck the patriarchy"
Keychain on the ground, we were always skippin' town
And I was thinkin' on the drive down, "Any time now
He's gonna say it's love," you never called it what it was
'Til we were dead and gone and buried
Check the pulse and come back swearin' it's the same
After three months in the grave
And then you wondered where it went to as I reached for you
But all I felt was shame and you held my lifeless frame

And I know it's long gone and
There was nothing else I could do
And I forget about you long enough
To forget why I needed to


'Cause there we are again in the middle of the night
We're dancin' 'round the kitchen in the refrigerator light
Down the stairs, I was there
I remember it all too well
And there we are again when nobody had to know
You kept me like a secret, but I kept you like an oath
Sacred prayer and we'd swear
To remember it all too well, oh-oh-oh-oh


And maybe we got lost in translation, maybe I asked for too much
Maybe this thing was a masterpiece 'til you tore it all up
Runnin' scared, I was there
I remember it all too well
And you call me up again just to break me like a promise
So casually cruel in the name of bein' honest
I'm a crumpled-up piece of paper lyin' here
'Cause I remember it all, all, all

They say all's well that ends well, but I'm in a new hell
Every time you double-cross my mind
You said if we had been closer in age, maybe it would've been fine
And that made me want to die
The idea you had of me, who was she?
A never-needy, ever-lovely jewel whose shine reflects on you
Not weepin' in a party bathroom
Some actress askin' me what happened, you
That's what happened, you
You who charmed my dad with self-effacing jokes
Sippin' coffee like you're on a late-night show
But then he watched me watch the front door all night, willin' you to come
And he said, "It's supposed to be fun turning twenty-one"


Time won't fly, it's like I'm paralyzed by it
I'd like to be my old self again, but I'm still tryin' to find it
After plaid shirt days and nights when you made me your own
Now you mail back my things and I walk home alone
But you keep my old scarf from that very first week
'Cause it reminds you of innocence and it smells like me
You can't get rid of it
'Cause you remember it all too well, yeah


'Cause there we are again when I loved you so
Back before you lost the one real thing you've ever known
It was rare, I was there
I remember it all too well
Wind in my hair, you were there
You remember it all
Down the stairs, you were there
You remember it all
It was rare, I was there
I remember it all too well


And I was never good at tellin' jokes, but the punch line goes
"I'll get older, but your lovers stay my age"
From when your Brooklyn broke my skin and bones
I'm a soldier who's returning half her weight
And did the twin flame bruise paint you blue?
Just between us, did the love affair maim you too?
'Cause in this city's barren cold
I still remember the first fall of snow
And how it glistened as it fell
I remember it all too well


Just between us, did the love affair maim you all too well?
Just between us, do you remember it all too well?
Just between us, I remember it (Just between us) all too well
Just between us, I remember it
Wind in my hair, I was there, I was there (I was there)
Down the stairs, I was there, I was there (I was there)
Sacred prayer, I was there, I was there
It was rare, you remember it all too well
Wind in my hair, I was there, I was there
Down the stairs, I was there, I was there (I was there)
Sacred prayer, I was there, I was there
It was rare, you remember it (All too well)
Wind in my hair, I was there, I was there (Oh)
Down the stairs, I was there, I was there
Sacred prayer, I was there, I was there
It was rare, you remember it`,coverArt:"https://images.genius.com/2aaaaab1e7f0c6f4f5495a9fe109441f.1000x1000x1.jpg"},{songTitle:"All Too Well (Taylor's Version) by Taylor Swift",lyrics:`I walked through the door with you, the air was cold
But something 'bout it felt like home somehow
And I left my scarf there at your sister's house
And you've still got it in your drawer, even now


Oh, your sweet disposition and my wide-eyed gaze
We're singing in the car, getting lost upstate
Autumn leaves falling down like pieces into place
And I can picture it after all these days

And I know it's long gone and
That magic's not here no more
And I might be okay, but I'm not fine at all
Oh, oh, oh


'Caus\u0435 there we ar\u0435 again on that little town street
You almost ran the red 'cause you were lookin' over at me
Wind in my hair, I was there
I remember it all too well


Photo album on the counter, your cheeks were turning red
You used to be a little kid with glasses in a twin-sized bed
And your mother's telling stories 'bout you on the tee-ball team
You taught me 'bout your past, thinking your future was me


And I know it's long gone and
There was nothing else I could do
And I forget about you long enough
To forget why I needed to


'Cause there we are again in the middle of the night
We're dancing 'round the kitchen in the refrigerator light
Down the stairs, I was there
I remember it all too well, yeah

And maybe we got lost in translation
Maybe I asked for too much
But maybe this thing was a masterpiece
'Til you tore it all up
Running scared, I was there
I remember it all too well
And you call me up again
Just to break me like a promise
So casually cruel in the name of being honest
I'm a crumpled up piece of paper lying here
'Cause I remember it all, all, all
Too well


Time won't fly, it's like I'm paralyzed by it
I'd like to be my old self again, but I'm still trying to find it
After plaid shirt days and nights when you made me your own
Now you mail back my things and I walk home alone
But you keep my old scarf from that very first week
'Cause it reminds you of innocence and it smells like me
You can't get rid of it
'Cause you remember it all too well, yeah


'Cause there we are again when I loved you so
Back before you lost the one real thing you've ever known
It was rare, I was there
I remember it all too well

Wind in my hair, you were there
You remember it all
Down the stairs, you were there
You remember it all
It was rare, I was there
I remember it all too well`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"All You Had to Do Was Stay by Taylor Swift",lyrics:`(Hey, hey, hey)
(Hey, hey, hey)
(Hey, hey, hey)
(Hey, hey, hey)


People like you always want back
The love they gave away
And people like me wanna believe you
When you say you've changed
The more I think about it now
The less I know
All I know is that you drove us
Off the road

(Stay) Hey, all you had to do was stay
Had me in the palm of your hand, then
Why'd you have to go and lock me out when I let you in?
(Stay) Hey, now you say you want it back
Now that it's just too late
Well, could've been easy
All you had to do was (Stay)


All you had to do was (Stay)
All you had to do was (Stay)
All you had to do was (Stay)
All you had to do was stay


Here you are now, calling me up
But I don't know what to say
I've been picking up the pieces
Of the mess you made
People like you always want back
The love they pushed aside
But people like me are gone forever
When you say goodbye


(Stay) Hey, all you had to do was stay
Had me in the palm of your hand, then
Why'd you have to go and lock me out when I let you in?
(Stay) Hey, now you say you want it back
Now that it's just too late
Well, could've been easy
All you had to do was (Stay)

All you had to do was (Stay)
All you had to do was (Stay)
All you had to do was (Stay, stay, stay, stay, stay)


Let me remind you
This was what you wanted (Oh, oh, oh-oh-oh)
You ended it
You were all I wanted (Oh, oh, oh-oh-oh)
But not like this
Not like this
Not like this
Oh, all you had to do was...


(Stay) Hey, all you had to do was stay
Had me in the palm of your hand, then
Why'd you want to go and lock me out when I let you in?
(Stay) Hey, now you say you want it back
Now that it's just too late
Well, could've been easy
All you had to do was...
(Stay) Hey, all you had to do was stay
Had me in the palm of your hand, then
Why'd you have to go and lock me out when I let you in?
(Stay) Hey, now you say you want it back
Now that it's just too late
Well, could've been easy (All you had to do was stay)
All you had to do was (Stay)

All you had to do was (Stay) (Oh)
All you had to do was (Stay)
All you had to do was (Stay) (Ooh)
All you had to do was (Stay)`,coverArt:"https://images.genius.com/da08ff60b6becc4fc1eaa3412338d18f.1000x1000x1.png"},{songTitle:"A Perfectly Good Heart by Taylor Swift",lyrics:`Why would you wanna break
A perfectly good heart?
Why would you wanna take
Our love and tear it all apart now?
Why would you wanna make
The very first scar?
Why would you wanna break
A perfectly good heart?


Maybe I should've seen the signs
Should've read the writing on the wall
And realized by the distance in your eyes
That I would be the one to fall

No matter what you say
I still can't believe that you would walk away
It don't make sense to me, but


Why would you wanna break
A perfectly good heart?
Why would you wanna take
Our love and tear it all apart now?
Why would you wanna make
The very first scar?
Why would you wanna break
A perfectly good heart?


It's not unbroken anymore (It's not unbroken anymore)
How do I get it back the way it was before?


Why would you wanna break
A perfectly good heart?
Why would you wanna take
Our love and tear it all apart now?
Why would you wanna make
The very first scar?
Why would you wanna break\u2014
(Why) Would you wanna break it?

Why would you wanna break
A perfectly good heart?
Why would you wanna take
Our love and tear it all apart now?
Why would you wanna make
The very first scar?
Why would you wanna break
A perfectly good heart?


Mmm-hmm`,coverArt:"https://images.genius.com/be8b30abcf286f1bf996e82e7e96dc14.1000x1000x1.jpg"},{songTitle:"A Place In This World by Taylor Swift",lyrics:`I don't know what I want, so don't ask me
'Cause I'm still trying to figure it out
Don't know what's down this road, I'm just walking
Trying to see through the rain coming down
Even though I'm not the only one
Who feels the way I do


I'm alone, on my own, and that's all I know
I'll be strong, I'll be wrong, oh but life goes on
Oh, I'm just a girl, trying to find a place in this world

Got the radio on, my old blue jeans
And I'm wearing my heart on my sleeve
Feeling lucky today, got the sunshine
Could you tell me what more do I need
And tomorrow's just a mystery, oh yeah
But that's okay


I'm alone, on my own, and that's all I know
I'll be strong, I'll be wrong, oh but life goes on
Oh, I'm just a girl, trying to find a place in this world


Maybe I'm just a girl on a mission
But I'm ready to fly


I'm alone, on my own, and that's all I know
I'll be strong, I'll be wrong, oh but life goes on
Oh I'm alone, on my own, and that's all I know
Oh I'm just a girl, trying to find a place in this world


Oh I'm just a girl
Oh I'm just a girl, oh, oh
Oh I'm just a girl`,coverArt:"https://images.genius.com/be8b30abcf286f1bf996e82e7e96dc14.1000x1000x1.jpg"},{songTitle:"A Place In This World (Live from SoHo) by Taylor Swift",lyrics:`So, we're gonna have the band take a little tiny break and I'm gonna play you a song that, uh, I wrote this when I was like thirteen years old and just moved to Nashville, and I knew that I wanted to end up making music and on a record label, but I didn't know how I was going to get there. And I wrote this song about it


I don't know what I want, so don't ask me
Cause I'm still trying to figure it out
Don't know what's down this road, I'm just walking
Trying to see through the rain coming down
Even though I'm not the only one
Who feels the way I do

I'm alone, on my own, and that's all I know
I'll be strong, I'll be wrong, oh but life goes on
Oh, I'm just a girl, trying to find a place in this world


Got the radio on, my old blue jeans
And I'm wearing my heart on my sleeve
I'm feeling lucky today, got the sunshine
Could you tell me what more do I need
And tomorrow's just a mystery, oh yeah
But that's OK


I'm alone, on my own, and that's all I know
I'll be strong, I'll be wrong, oh but life goes on
Oh, I'm just a girl, trying to find a place in this world




I'm alone, on my own, and that's all I know
I'll be strong, I'll be wrong, oh but life goes on
Oh I'm alone, on my own, and that's all I know
'Cause I'm just a girl, trying to find a place in this world`,coverArt:"https://images.genius.com/89ed020cf80ce5c178b2a385efa16113.800x800x1.jpg"},{songTitle:"\u200Baugust by Taylor Swift",lyrics:`Salt air, and the rust on your door
I never needed anything more
Whispers of "Are you\u2005sure?"
"Never\u2005have I ever\u2005before"


But I can see us lost\u2005in the memory
August slipped away into a moment in time
'Cause it was never mine
And I can see us twisted in bedsheets
August sipped away like a bottle of wine
'Cause you were never mine

Your back beneath the sun
Wishin' I could write my name on it
Will you call when you're back at school?
I remember thinkin' I had you


But I can see us lost in the memory
August slipped away into a moment in time
'Cause it was never mine
And I can see us twisted in bedsheets
August sipped away like a bottle of wine
'Cause you were never mine


Back when we were still changin' for the better
Wanting was enough
For me, it was enough
To live for the hope of it all
Cancel plans just in case you'd call
And say, "Meet me behind the mall"
So much for summer love and saying "us"
'Cause you weren't mine to lose
You weren't mine to lose, no


But I can see us lost in the memory
August slipped away into a moment in time
'Cause it was never mine
And I can see us twisted in bedsheets
August sipped away like a bottle of wine
'Cause you were never mine
Related Songs
'Cause you were never mine
Never mine
But do you remember?
Remember when I pulled up and said "Get in the car"
And then canceled my plans just in case you'd call?
Back when I was livin' for the hope of it all, for the hope of it all
"Meet me behind the mall"
(Remember when I pulled up and said "Get in the car")
(And then canceled my plans just in case you'd call?)
(Back when I was livin' for the hope of it all, for the hope of it all)
("Meet me behind the mall")
Remember when I pulled up and said "Get in the car"
And then canceled my plans just in case you'd call?
Back when I was livin' for the hope of it all (For the hope of it all)
For the hope of it all, for the hope of it all
(For the hope of it all, for the hope of it all)`,coverArt:"https://images.genius.com/4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png"},{songTitle:"\u200Baugust (the long pond studio sessions) by Taylor Swift",lyrics:`Salt air and the rust on your door
I never needed anything more
Whispers of "Are you sure?"
"Never have I ever before"


But I can see us lost in the memory
August slipped away into a moment in time
'Cause it was never mine
And I can see us twisted in bedsheets
August sipped away like a bottle of wine
'Cause you were never mine

Your back beneath the sun
Wishin' I could write my name on it
Will you call when you're back at school?
I remember thinkin' I had you


But I can see us lost in the memory
August slipped away into a moment in time
'Cause it was never mine
And I can see us twisted in bedsheets
August sipped away like a bottle of wine
'Cause you were never mine
Ahh-ahh


Back when we were still changin' for the better
Wanting was enough
For me, it was enough
To live for the hope of it all
Cancel plans just in case you'd call
And say, "Meet me behind the mall"
So much for summer love and saying "us"
'Cause you weren't mine to lose
You weren't mine to lose, no

'Cause I can see us lost in the memory
August slipped away into a moment in time
'Cause it was never mine
And I can see us twisted in bedsheets
August sipped away like a bottle of wine
You were never mine


You were never mine
Never mine
Do you remember?
Remember when I pulled up and said, "Get in the car"
And then canceled my plans just in case you'd call?
Back when I was livin' for the hope of it all, for the hope of it all
"Meet me behind the mall"
And then I canceled my plans just in case you'd call
Back when I was livin' for the hope of it all, hope of it all
Remember when I pulled up and said "Get in the car"
And then canceled my plans just in case you'd call?
Back when I was livin' for the hope of it all, for the hope of it all
"Meet me behind the mall"




Haha, I loved that`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"Babe (Taylor's Version) [From the Vault] by Taylor Swift",lyrics:`What about your promises, promises?
What about your promises, promises, promises? (No)


What a shame
Didn't wanna be the one that got away, yeah
Big mistake, you broke the sweetest promise
That you never should have made


I'm here on the kitchen floor
You call, but I won't hear it
You said, "No one else"
How could you do this, babe? (What about your promises, promises?)

You really blew this, babe
We ain't getting through this one, babe
This is the last time I'll ever call you, babe (This is the last time, this is the last time)
This is the last time I'll ever call you, babe
(What about your promises, promises, promises?)


What a waste
Takin' down the pictures and the plans we made, yeah
And it's strange how your face doesn't look so innocent
Your secret has its consequence and that's on you, babe


I break down every time you call
We're a wreck, you're the wrecking ball
We said, "No one else"
How could you do this, babe? (What about your promises, promises?)


You really blew this, babe
We ain't getting through this one, babe
This is the last time I'll ever call you, babe (This is the last time, this is the last time)
This is the last time I'll ever call you


Since you admitted it, I keep picturing
Her lips on your neck, I can't unsee it
I hate that because of you, I can't love you, babe

What a shame, didn't want to be the one that got away
How could you do this, babe? (Babe)


You really blew this, babe (Babe)
We ain't getting through this one, babe (Babe)
This is the last time I'll ever call you, babe (This is the last time, this is the last time)
This is the last time I'll ever call you


I'm here on the kitchen floor, you call but I won't hear it
You said, "No one else"
We ain't getting through this one, babe
I break down every time you call
We're a wreck, you're the wrecking ball
We said, "No one else"
This is the last time I'll ever call you, babe (Babe)
(What about your promises, promises, promises?)`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"Back to December by Taylor Swift",lyrics:`I'm so glad you made time to see me
How's life? Tell me, how's your family?
I haven't seen them in a while
You've been good, busier than ever
We small talk, work and the weather
Your guard is up and I know why


Because the last time you saw me
Is still burned in the back of your mind
You gave me roses and I left them there to die

So, this is me swallowing my pride
Standing in front of you saying, "I'm sorry for that night"
And I'd go back to December all the time
It turns out freedom ain't nothing but missing you
Wishing I'd realized what I had when you were mine
I'd go back to December, turn around and make it alright
I'd go back to December all the time


These days, I haven't been sleeping
Staying up, playing back myself leaving
When your birthday passed and I didn't call
And I think about summer, all the beautiful times
I watched you laughing from the passenger side
And realized I loved you in the fall


And then the cold came, the dark days
When fear crept into my mind
You gave me all your love and all I gave you was goodbye


So, this is me swallowing my pride
Standing in front of you, saying, "I'm sorry for that night"
And I'd go back to December all the time
It turns out freedom ain't nothing but missing you
Wishing I'd realized what I had when you were mine
I'd go back to December, turn around and change my own mind
I'd go back to December all the time

I miss your tan skin, your sweet smile
So good to me, so right
And how you held me in your arms that September night
The first time you ever saw me cry
Maybe this is wishful thinking
Probably mindless dreaming
But if we loved again, I swear I'd love you right
And I'd go back in time and change it, but I can't
So, if the chain is on your door, I understand


But this is me swallowing my pride
Standing in front of you, saying, "I'm sorry for that night"
And I'd go back to December
It turns out freedom ain't nothing but missing you
Wishing I'd realized what I had when you were mine
I'd go back to December, turn around and make it alright
I'd go back to December, turn around and change my own mind
I'd go back to December all the time


All the time`,coverArt:"https://images.genius.com/29972de5b9aab0dec8c75cfbfbf0e30c.1000x1000x1.jpg"},{songTitle:"Back To December (Acoustic) by Taylor Swift",lyrics:`I'm so glad you made time to see me
How's life? Tell me, how's your family?
I haven't seen them in a while
You've been good, busier than ever
We small talk, work and the weather
Your guard is up and I know why
Because the last time you saw me
Is still burned in the back of your mind
You gave me roses and I left them there to die

So this is me swallowin' my pride
Standin' in front of you sayin' I'm sorry for that night
And I go back to December all the time
It turns out freedom ain't nothin' but missin' you
Wishin' I'd realized what I had when you were mine
I'd go back to December, turn around and make it alright
I go back to December all the time


These days, I haven't been sleepin'
Stayin' up playin' back myself leavin'
When your birthday passed and I didn't call
Then I think about summer, all the beautiful times
I watched you laughin' from the passenger's side
And realized I loved you in the fall
And then the cold came, the dark days
When fear crept into my mind
You gave me all your love and all I gave you was goodbye


So this is me swallowin' my pride
Standin' in front of you sayin' I'm sorry for that night
And I go back to December all the time
It turns out freedom ain't nothin' but missin' you
Wishin' I'd realized what I had when you were mine
I'd go back to December, turn around and change my own mind
I go back to December all the time

I miss your tan skin, your sweet smile
So good to me, so right
And how you held me in your arms that September night
The first time you ever saw me cry
Maybe this is wishful thinkin'
Probably mindless dreamin'
But if we loved again, I swear I'd love you right
I'd go back in time and change it, but I can't
So if the chain is on your door, I understand


But this is me swallowin' my pride
Standin' in front of you sayin' I'm sorry for that night
And I go back to December
It turns out freedom ain't nothin' but missin' you
Wishin' I'd realized what I had when you were mine
I'd go back to December, turn around and make it alright
I'd go back to December, turn around and change my own mind
I go back to December all the time
All the time`,coverArt:"https://images.genius.com/bcdcbf44f244d404045411b09ec9e1fc.500x500x1.jpg"},{songTitle:"Back to December / Apologize / You\u2019re Not Sorry (Live/2011) by Taylor Swift",lyrics:`I'm so glad you made time to see me
How's life, tell me, how's your family
I haven't seen them in a while
You've been good, busier than ever
We small talk, work and the weather
Your guard is up and I know why


'Cause the last time you saw me
Is still burned in the back of your mind
You gave me roses and I left them there to die

So this is me swallowing my pride
Standing in front of you, saying I'm sorry for that night
And I'd go back to December all the time
It turns out freedom ain\u2019t nothing but missing you
Wishing I'd realized what I had when you were mine
I'd go back to December, turn around and make it alright
I go back to December all the time


These days I haven't been sleeping
Staying up playing back myself leaving
When your birthday passed and I didn't call
And I think about summer, all the beautiful times
I watched you laughing from the passenger side and
Realized I loved you in the fall


And then the cold came, the dark days when fear crept into my mind
You gave me all your love and all I gave you was goodbye


So this is me swallowing my pride
Standing in front of you, saying I'm sorry for that night
And I'd go back to December all the time
It turns out freedom ain\u2019t nothing but missing you
Wishing I'd realized what I had when you were mine
I'd go back to December, turn around and change my own mind
I go back to December all the time

I miss your tan skin, your sweet smile, so good to me, so right
And how you held me in your arms that September night
The first time you ever saw me cry
Maybe this is wishful thinking
Probably mindless dreaming
But if we loved again I swear I'd love you right
I'd go back in time and change it, but I can't
So if the chain is on your door, I understand...
And then he said, "It's too late to apologize"
It's too late...
He said, "It's too late to apologize"
It's too late...
So this is me swallowing my pride (It's too late to apologize)
Standing in front of you, saying I'm sorry for that night (It's too late...)
And I go back to December (It's too late to apologize, it's too late)
It turns out freedom ain't nothing but missing you (It's too late to apologize)
Wishing I'd realized what I had when you were mine (It's too late...)
Oh...
He said you're not sorry (no no no)
You're not sorry (no no no)
You're not sorry (no no no)
You're not sorry (no, no, no...)`,coverArt:"https://images.genius.com/6510355b9fa1e35fa7e939852c7405d0.900x900x1.jpg"},{songTitle:"Back To December (European Version) by Taylor Swift",lyrics:`I'm so glad you made time to see me
How's life? Tell me, how's your family?
I haven't seen them in a while
You've been good, busier than ever
We small talk, work and the weather
Your guard is up and I know why
Because the last time you saw me
Is still burned in the back of your mind
You gave me roses and I left them there to die

So this is me swallowin' my pride
Standin' in front of you sayin' I'm sorry for that night
And I go back to December all the time
It turns out freedom ain't nothin' but missin' you
Wishin' I'd realized what I had when you were mine
I'd go back to December, turn around and make it alright
I go back to December all the time


These days, I haven't been sleepin'
Stayin' up playin' back myself leavin'
When your birthday passed and I didn't call
Then I think about summer, all the beautiful times
I watched you laughin' from the passenger's side
And realized I loved you in the fall
And then the cold came, the dark days
When fear crept into my mind
You gave me all your love and all I gave you was goodbye


So this is me swallowin' my pride
Standin' in front of you sayin' I'm sorry for that night
And I go back to December all the time
It turns out freedom ain't nothin' but missin' you
Wishin' I'd realized what I had when you were mine
I'd go back to December, turn around and change my own mind
I go back to December all the time

I miss your tan skin, your sweet smile
So good to me, so right
And how you held me in your arms that September night
The first time you ever saw me cry
Maybe this is wishful thinkin'
Probably mindless dreamin'
But if we loved again, I swear I'd love you right
I'd go back in time and change it, but I can't
So if the chain is on your door, I understand


But this is me swallowin' my pride
Standin' in front of you sayin' I'm sorry for that night
And I go back to December
It turns out freedom ain't nothin' but missin' you
Wishin' I'd realized what I had when you were mine
I'd go back to December, turn around and make it alright
I'd go back to December, turn around and change my own mind
I go back to December all the time
All the time`,coverArt:"https://images.genius.com/721a6c465a666419bf286b473287c33f.446x446x1.jpg"},{songTitle:"Beautiful Eyes (Live From Clear Channel Stripped 2008) by Taylor Swift",lyrics:`Your beautiful eyes
Stare right into mine
And sometimes I think of you late at night
I don't\u2005know\u2005why, I


I wanna\u2005be somewhere where you are
I wanna\u2005be where


You're here, your eyes are looking into mine
So baby, make me fly
My heart has never felt this way before
I'm looking through your
I'm looking through your eyes

I wake up, I'm alive
In only a little while I'll cry
'Cause you're my lullaby
So baby, come hold me tight 'cause I-I


I wanna be everything you need
I wanna be where


You're here, your eyes are looking into mine
So baby, make me fly
My heart has never felt this way before
I'm looking through your
I'm looking through your eyes


Just as long as you're mine
I'll be your everything tonight
Let me love you, kiss you
Oh, baby, let me miss you
Let me see your
Dream about, dream about
Dream about your eyes
Eyes, eyes
Beautiful eyes`,coverArt:"https://images.genius.com/a27d0e4b7173862e0abc61e372597975.1000x1000x1.jpg"},{songTitle:"Beautiful Ghosts by Taylor Swift",lyrics:`Follow me home if you dare to
I wouldn't know where to lead you
Should I take\u2005chances\u2005when no one\u2005took chances on me?
So I watch\u2005from the dark, wait for my life to start
With no beauty in my memory


All that I wanted was to be wanted
Too young to wander London streets, alone and haunted
Born into nothing
At least you have something, something to cling to
Visions of dazzling rooms I'll never get let into
And the memories were lost long ago
But at least you have beautiful ghosts

Perilous night, their voices calling
A flicker of light before the dawning
Out here, the wild ones are taming the fear within me
Scared to call them my friends and be broken again
Is this hope just a mystical dream?


All that I wanted was to be wanted
Too young to wander London streets, alone and haunted
Born into nothing
At least you have something, something to cling to
Visions of dazzling rooms I'll never get let into
And the memories were lost long ago
But at least you have beautiful ghosts


And so maybe my home isn't what I had known
What I thought it would be
But I feel so alive with these phantoms of night
And I know that this life isn't safe, but it's wild and it's free


All that I wanted was to be wanted
I'll never wander London streets, alone and haunted
Born into nothing
With them, I have something, something to cling to
I never knew I'd love this world they've let me into
And the memories were lost long ago
So I'll dance with these beautiful ghosts
And the memories were lost long ago
So I'll dance with these beautiful ghosts`,coverArt:"https://images.genius.com/7bda28ccf6bccf93ef5504cd1887f21e.1000x1000x1.jpg"},{songTitle:"Begin Again by Taylor Swift",lyrics:`Took a deep breath in the mirror
He didn't like it when I wore high heels
But I do
Turn the lock and put my headphones on
He always said he didn't get this song
But I do, I do


I walked in, expecting you'd be late
But you got here early and you stand and wave
I walk to you
You pull my chair out and help me in
And you don't know how nice that is
But I do

And you throw your head back laughing like a little kid
I think it's strange that you think I'm funny 'cause he never did
I've been spending the last eight months
Thinking all love ever does is break, and burn, and end
But on a Wednesday, in a caf\xE9, I watched it begin again


You said you never met one girl who
Had as many James Taylor records as you
But I do
We tell stories and you don't know why
I'm coming off a little shy
But I do


But you throw your head back laughing like a little kid
I think it's strange that you think I'm funny 'cause he never did
I've been spending the last eight months
Thinking all love ever does is break, and burn, and end
But on a Wednesday, in a caf\xE9, I watched it begin again




And we walked down the block to my car
And I almost brought him up
But you start to talk about the movies
That your family watches every single Christmas
And I wanna talk about that
And for the first time, what's past is past

'Cause you throw your head back laughing like a little kid
I think it's strange that you think I'm funny 'cause he never did
I've been spending the last eight months
Thinking all love ever does is break, and burn, and end
But on a Wednesday, in a caf\xE9, I watched it begin again


Hmm, hmm
But on a Wednesday in a caf\xE9, I watched it begin again`,coverArt:"https://images.genius.com/3ddf6923083127b5a630f30cc2f1144c.800x800x1.jpg"},{songTitle:"Begin Again (Taylor's Version) by Taylor Swift",lyrics:`Took a deep breath in the mirror
He didn't like it when I wore high heels
But I do
Turn the lock and put my headphones on
He always said he didn't get this song
But I do, I do


I walked in, expecting you'd be late
But you got here early and you stand and wave
I walk to you
You pull my chair out and help me in
And you don't know how nice that is
But I do

And you throw your head back laughing like a little kid
I think it's strange that you think I'm funny 'cause he never did
I've been spending the last eight months
Thinking all love ever does is break, and burn, and end
But on a W\u0435dnesday in a caf\xE9, I watched it begin again


You said you n\u0435ver met one girl who
Had as many James Taylor records as you
But I do
We tell stories and you don't know why
I'm coming off a little shy
But I do


But you throw your head back laughing like a little kid
I think it's strange that you think I'm funny 'cause he never did
I've been spending the last eight months
Thinking all love ever does is break, and burn, and end
But on a Wednesday in a caf\xE9, I watched it begin again




And we walked down the block to my car
And I almost brought him up
But you start to talk about the movies
That your family watches every single Christmas
And I want to talk about that
And for the first time, what's past is past

'Cause you throw your head back laughing like a little kid
I think it's strange that you think I'm funny 'cause he never did
I've been spending the last eight months
Thinking all love ever does is break, and burn, and end
But on a Wednesday in a caf\xE9, I watched it begin again


On a Wednesday in a caf\xE9, I watched it begin again`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"Bette Davis Eyes (Live/2011) by Taylor Swift",lyrics:`There is some unbelievable music that has come out of artists who are from LA, did you know that?
Like Los Angeles has put out so many bands and artists that I\u2019m such a fan of and
I\u2019d love to play you  some music I\u2019m a fan of that\u2019s come from LA, is that okay?
This one came out in 1981: 8 years before I was born and I love this song, it\u2019s called \u201CBette Davis Eyes\u201D


Her hair is Harlow gold
Her lips sweet surprise
Her hands are never cold
She's got Bette Davis eyes
She'll turn her music on
You won't have to think twice
She's pure as New York snow
She\u2019s  got Bette Davis eyes


And she'll tease you
She'll unease you
All the better just to please you
She's precocious and she knows just
What it takes to make a pro blush
She got Greta Garbo stand off sighs
She's got Bette Davis eyes


She'll let you take her home
It whets her appetite
She'll lay you on her throne
She\u2019s  got Bette Davis eyes



She'll expose you
And just knows you
Off your feet with the crumbs she throws you
She's ferocious and she knows just
What it takes to make a pro blush (ayy,ayy)
All the boys think she's a spy
She's got Bette Davis eyes`,coverArt:"https://images.genius.com/6510355b9fa1e35fa7e939852c7405d0.900x900x1.jpg"},{songTitle:"Better Man (Taylor's Version) [From the Vault] by Taylor Swift",lyrics:`I know I'm probably better off on my own
Than lovin\u2019 a man who didn't know what he had when he had it
And I see the permanent damage you did to me
Never again, I just wish I could forget when it was magic


I wish it wasn't 4 AM, standing in the mirror
Saying to myself, "You know you had to do it"
I know the bravest thing I ever did was run

Sometimes, in the middle of the night, I can feel you again
But I just miss you, and I just wish you were a better man
And I know why we had to say goodbye like the back of my hand
But I just miss you, and I just wish you were a better man
A better man


I know I\u2019m probably better off all alone
Than needing a man who could change his mind
At any given minute
And it was always on your terms
I waited on every careless word
Hoping they might turn sweet again
Like it was in the beginning


But your jealousy, oh, I can hear it now
Talking down to me like I'd always be around
Push my love away like it was some kind of loaded gun
Oh, you never thought I'd run


Sometimes, in the middle of the night, I can feel you again
But I just miss you, and I just wish you were a better man
And I know why we had to say goodbye, like the back of my hand
But I just miss you, and I just wish you were a better man
A better man
Related Songs
I hold onto this pride because these days it's all I have
And I gave to you my best
And we both know you can't say that
I wish you were a better man
I wonder what we would've become
If you were a better man
We might still be in love
If you were a better man
You would've been the one
If you were a better man
Yeah, yeah


Sometimes, in the middle of the night, I can feel you again
But I just miss you, and I just wish you were a better man
And I know why we had to say goodbye, like the back of my hand
But I just miss you, and I just wish you were a better man
A better man
(Sometimes, in the middle of the night, I can feel you again)
We might still be in love, if you were a better man
(But I just miss you and I just wish you were a better man)
Yeah, yeah
I know why we had to say goodbye like the back of my hand
But I just miss you and I just wish you were a better man
A better man

We might still be in love
If you were a better man
You would've been the one
If you were a better man`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"Better Than Revenge by Taylor Swift",lyrics:`Now go stand in the corner and think about what you did
Ha, time for a little revenge


The story starts when it was hot and it was summer and
I had it all, I had him right there where I wanted him
She came along, got him alone and let's hear the applause
She took him faster than you can say "Sabotage"
I never saw it coming, wouldn't have suspected it
I underestimated just who I was dealing with
She had to know the pain was beating on me like a drum
She underestimated just who she was stealing from

She's not a saint and she's not what you think
She's an actress, whoa
She's better known for the things that she does
On the mattress, whoa
Soon she's gonna find stealing other people's toys
On the playground won't make you many friends
She should keep in mind, she should keep in mind
There is nothing I do better than revenge, ha


She looks at life like it's a party and she's on the list
She looks at me like I'm a trend and she's so over it
I think her ever-present frown is a little troubling
And she thinks I'm psycho 'cause I like to rhyme her name with things
But sophistication isn't what you wear or who you know
Or pushing people down to get you where you wanna go
Oh, they didn't teach you that in prep school so it's up to me
But no amount of vintage dresses gives you dignity
(Think about what you did)


She's not a saint and she's not what you think
She's an actress, whoa
She's better known for the things that she does
On the mattress, whoa
Soon she's gonna find stealing other people's toys
On the playground won't make you many friends
She should keep in mind, she should keep in mind
There is nothing I do better than revenge, ha

I'm just another thing for you to roll your eyes at, honey
You might have him, but haven't you heard?
I'm just another thing for you to roll your eyes at, honey
You might have him, but I always get the last word
Whoa, whoa-ah-oh


She's not a saint and she's not what you think
She's an actress, whoa (She deserved it)
She's better known for the things that she does
On the mattress, whoa
Soon she's gonna find stealing other people's toys
On the playground won't make you many friends
She should keep in mind, she should keep in mind
There is nothing I do better than revenge, ha


Do you still feel like you know what you're doing?
'Cause I don't think you do, oh (No, no, no, no)
Do you still feel like you know what you're doing? (No)
I don't think you do, I don't think you do
Let's hear the applause (Come on, come on)
Come on, show me how much better you are
(So much better, yeah?)
See you deserve some applause
'Cause you're so much better
She took him faster than you could say "Sabotage"`,coverArt:"https://images.genius.com/d04f0a5d76810e4bc7c6d5f8e261bd91.1000x1000x1.jpg"},{songTitle:"Better Than Revenge (Live/2011) by Taylor Swift",lyrics:`\u201DHey it\u2019s me, leave a message: make it hot\u201D
Now go stand in the corner and\u2005think\u2005about what you\u2005did


The story starts when it was\u2005hot and it was summer and
I had it all, I had him right there, where I wanted him
She came along, got him alone, and let's hear the applause
She took him faster than you can say sabotage


I never saw it coming, wouldn't have suspected it
I underestimated just who I was dealing with
She had to know the pain was beating on me like a drum
She underestimated just who she was stealing from

She's not a saint and she's not what you think
She's an actress, whoa
She's better known for the things that she does
On the mattress, whoa
Soon she's gonna find stealing other people's toys
On the playground won't make you many friends
She should keep in mind, she should keep in mind
There is nothing I do better than revenge, ha!


She looks at life like it's a party and she's on the list
She looks at me like I'm a trend and she's so over it
I think her ever-present frown is a little troubling
And she thinks I'm psycho 'cause I like to rhyme her name with things


But sophistication isn't what you wear or who you know
Or pushing people down to get you where you wanna go
But they didn't teach you that in prep school, so it's up to me
No amount of vintage dresses gives you dignity
(Think about what you did)


She's not a saint and she's not what you think
She's an actress, whoa
She's better known for the things that she does
On the mattress, whoa
Soon she's gonna find stealing other people's toys
On the playground won't make him any friends
She should keep in mind, she should keep in mind
There is nothing I do better than revenge, HA!

I'm just another thing for you to roll your eyes at, honey
You might have him, but haven't you heard?
I'm just another thing for you to roll your eyes at, honey
You might have him, but I always get the last word
Whoa, whoa-ah-oh
Come on, come on


She's not a saint and she's not what you think
She's an actress, whoa (She deserved it)
She's better known for the things that she does
On the mattress, whoa
Soon she's gonna find stealing other people's toys
On the playground won't make him any friends
She should keep in mind, she should keep in mind
There is nothing I do better than revenge


Do you still feel like you know what you're doing?
'Cause I don't think you do, oh
Do you still feel like you know what you're doing?
I don't think you do, I don't think you do
Let's hear the applause
See you deserve some applause
'Cause you're so much better
She took him faster than you could say sabotage`,coverArt:"https://images.genius.com/6510355b9fa1e35fa7e939852c7405d0.900x900x1.jpg"},{songTitle:"\u200Bbetty by Taylor Swift",lyrics:`Betty, I won't make assumptions
About why you switched your homeroom, but
I think it's 'cause of\u2005me
Betty,\u2005one time I\u2005was riding on my skateboard
When I\u2005passed your house
It's like I couldn't breathe


You heard the rumors from Inez
You can't believe a word she says
Most times, but this time it was true
The worst thing that I ever did
Was what I did to you

But if I just showed up at your party
Would you have me? Would you want me?
Would you tell me to go fuck myself
Or lead me to the garden?
In the garden, would you trust me
If I told you it was just a summer thing?
I'm only seventeen, I don't know anything
But I know I miss you


Betty, I know where it all went wrong
Your favorite song was playing
From the far side of the gym
I was nowhere to be found
I hate the crowds, you know that
Plus, I saw you dance with him


You heard the rumors from Inez
You can't believe a word she says
Most times, but this time it was true
The worst thing that I ever did
Was what I did to you


But if I just showed up at your party
Would you have me? Would you want me?
Would you tell me to go fuck myself
Or lead me to the garden?
In the garden, would you trust me
If I told you it was just a summer thing?
I'm only seventeen, I don't know anything
But I know I miss you

I was walking home on broken cobblestones
Just thinking of you when she pulled up like
A figment of my worst intentions
She said "James, get in, let's drive"
Those days turned into nights
Slept next to her, but
I dreamt of you all summer long


Betty, I'm here on your doorstep
And I planned it out for weeks now
But it's finally sinkin' in
Betty, right now is the last time
I can dream about what happens when
You see my face again


The only thing I wanna do
Is make it up to you
So I showed up at your party
Yeah, I showed up at your party


Yeah, I showed up at your party
Will you have me? Will you love me?
Will you kiss me on the porch
In front of all your stupid friends?
If you kiss me, will it be just like I dreamed it?
Will it patch your broken wings?
I'm only seventeen, I don't know anything
But I know I miss you

Standing in your cardigan
Kissin' in my car again
Stopped at a streetlight
You know I miss you`,coverArt:"https://images.genius.com/4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png"},{songTitle:"\u200Bbetty (Live from the 2020 Academy of Country Music Awards) by Taylor Swift",lyrics:`Betty, I won't make assumptions
About why you switched your homeroom, but
I think it's 'cause of me
Betty, one time I was riding on my skateboard
When I passed your house
It's like I couldn't breathe


You heard the rumors from Inez
You can't believe a word she says
Most times, but this time it was true
The worst thing that I ever did
Was what I did to you

But if I just showed up at your party
Would you have me? Would you want me?
Would you tell me to go straight to hell
Or lead me to the garden?
In the garden, would you trust m\u0435
If I told you it was just a summer thing?
I'm only seventeen, I don't know anything
But I know I miss you


B\u0435tty, I know where it all went wrong
Your favorite song was playing
From the far side of the gym
I was nowhere to be found
I hate the crowds, you know that
Plus, I saw you dance with him


You heard the rumors from Inez
You can't believe a word she says
Most times, but this time it was true
The worst thing that I ever did
Was what I did to you


But if I just showed up at your party
Would you have me? Would you want me?
Would you tell me to go straight to hell
Or lead me to the garden?
In the garden, would you trust me
If I told you it was just a summer thing?
I'm only seventeen, I don't know anything
But I know I miss you

I was walking home on broken cobblestones
Just thinking of you when she pulled up like
A figment of my worst intentions
She said "James, get in, let's drive"
Those days turned into nights
Slept next to her, but
I dreamt of you all summer long


Betty, I'm here on your doorstep
And I planned it out for weeks now
But it's finally sinkin' in
Betty, right now is the last time
I can dream about what happens when
You see my face again


The only thing I wanna do
Is make it up to you
So I showed up at your party
Yeah, I showed up at your party


Yeah, I showed up at your party
Will you have me? Will you love me?
Will you kiss me on the porch
In front of all your stupid friends?
If you kiss me, will it be just like I dreamed it?
Will it patch your broken wings?
I'm only seventeen, I don't know anything
But I know I miss you

Standing in your cardigan
Kissin' in my car again
Stopped at a streetlight
You know I miss you`,coverArt:"https://images.genius.com/3900ab38cfa91c9930da56d8e2145311.1000x1000x1.jpg"},{songTitle:"\u200Bbetty (the long pond studio sessions) by Taylor Swift",lyrics:`Betty, I won't make assumptions
About why you switched your homeroom, but
I think it's 'cause of me
Betty, one time I was riding on my skateboard
When I passed your house
It's like I couldn't breathe


You heard the rumors from Inez
You can't believe a word she says
Most times, but this time it was true
The worst thing that I ever did
Was what I did to you

But if I just showed up at your party
Would you have me? Would you want me?
Would you tell me to go fuck myself
Or lead me to the garden?
In the garden, would you trust m\u0435
If I told you it was just a summer thing?
I'm only seventeen, I don't know anything
But I know I miss you


B\u0435tty, I know where it all went wrong
Your favorite song was playing
From the far side of the gym
I was nowhere to be found
I hate the crowds, you know that
Plus, I saw you dance with him


You heard the rumors from Inez
You can't believe a word she says
Most times, but this time it was true
The worst thing that I ever did
Was what I did to you


But if I just showed up at your party
Would you have me? Would you want me?
Would you tell me to go fuck myself
Or lead me to the garden?
In the garden, would you trust me
If I told you it was just a summer thing?
I'm only seventeen, I don't know anything
But I know I miss you

I was walking home on broken cobblestones
Just thinking of you when she pulled up like
A figment of my worst intentions
She said "James, get in, let's drive"
Those days turned into nights
Slept next to her, but
I dreamt of you all summer long


Betty, I'm here on your doorstep
And I planned it out for weeks now
But it's finally sinkin' in
Betty, right now is the last time
I can dream about what happens when
You see my face again


The only thing I wanna do
Is make it up to you
So I showed up at your party
Yeah, I showed up at your party


Yeah, I showed up at your party
Will you have me? Will you love me?
Will you kiss me on the porch
In front of all your stupid friends?
If you kiss me, will it be just like I dreamed it?
Will it patch your broken wings?
I'm only seventeen, I don't know anything
But I know I miss you

Standing in your cardigan
Kissin' in my car again
Stopped at a streetlight
You know I miss you`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"Blank Space by Taylor Swift",lyrics:`Nice to meet you, where you been?
I could show you incredible things
Magic, madness, heaven, sin
Saw you there, and I thought
"Oh my God, look at that face
You look like my next mistake
Love's a game, wanna play?"
Ayy


New money, suit and tie
I can read you like a magazine
Ain't it funny? Rumors fly
And I know you heard about me
So, hey, let's be friends
I'm dying to see how this one ends
Grab your passport and my hand
I can make the bad guys good for a weekend

So it's gonna be forever
Or it's gonna go down in flames?
You can tell me when it's over, mmm
If the high was worth the pain
Got a long list of ex-lovers
They'll tell you I'm insane
'Cause you know I love the players
And you love the game
'Cause we're young and we're reckless
We'll take this way too far
It'll leave you breathless, mmm
Or with a nasty scar
Got a long list of ex-lovers
They'll tell you I'm insane
But I've got a blank space, baby
And I'll write your name


Cherry lips, crystal skies
I could show you incredible things
Stolen kisses, pretty lies
You're the king, baby, I'm your queen
Find out what you want
Be that girl for a month
Wait, the worst is yet to come
Oh, no
Related Songs
Screaming, crying, perfect storms
I can make all the tables turn
Rose garden filled with thorns
Keep you second guessing, like
"Oh my God, who is she?"
I get drunk on jealousy
But you'll come back each time you leave
'Cause, darling, I'm a nightmare dressed like a daydream


So it's gonna be forever
Or it's gonna go down in flames?
You can tell me when it's over, mmm
If the high was worth the pain
Got a long list of ex-lovers
They'll tell you I'm insane
'Cause you know I love the players
And you love the game
'Cause we're young and we're reckless (Oh)
We'll take this way too far
It'll leave you breathless (Oh-oh), mmm
Or with a nasty scar
Got a long list of ex-lovers
They'll tell you I'm insane (Insane)
But I've got a blank space, baby
And I'll write your name

Boys only want love if it's torture
Don't say I didn't, say I didn't warn ya
Boys only want love if it's torture
Don't say I didn't, say I didn't warn ya


So it's gonna be forever
Or it's gonna go down in flames?
You can tell me when it's over (Over), mmm
If the high was worth the pain
Got a long list of ex-lovers
They'll tell you I'm insane (I'm insane)
'Cause you know I love the players
And you love the game (And you love the game)
'Cause we're young and we're reckless (Yeah)
We'll take this way too far (Ooh)
It'll leave you breathless, mmm
Or with a nasty scar (With a nasty scar)
Got a long list of ex-lovers
They'll tell you I'm insane
But I've got a blank space, baby
And I'll write your name1K`,coverArt:"https://images.genius.com/eb811cfbca7ffdc3527e156e85fd78af.1000x1000x1.png"},{songTitle:"Breathe by Taylor Swift (Ft. Colbie Caillat)",lyrics:`I see your face in my mind as I drive away
'Cause none of us thought it was gonna end that way
People are people and sometimes we change our minds
But it's killing me to see you go after all this time


Music starts playing like the end of a sad movie
It's the kind of ending you don't really wanna see
'Cause it's tragedy and it'll only bring you down
Now I don't know what to be without you around

And we know it's never simple, never easy
Never a clean break, no one here to save me
You're the only thing I know like the back of my hand


And I can't breathe without you, but I have to
Breathe without you, but I have to


Never wanted this, never wanna see you hurt
Every little bump in the road, I tried to swerve
But people are people and sometimes it doesn't work out
Nothing we say is gonna save us from the fall out


And we know it's never simple, never easy
Never a clean break, no one here to save me
You're the only thing I know like the back of my hand


And I can't breathe without you, but I have to
Breathe without you but I have to


It's 2 A.M, feeling like I just lost a friend
Hope you know it's not easy, easy for me
It's 2 A.M, feeling like I just lost a friend
Hope you know this ain't easy, easy for me

And we know it's never simple, never easy
Never a clean break, no one here to save me, oh-oh


I can't breathe without you, but I have to
Breathe without you, but I have to
Breathe without you, but I have to


I'm sorry, I'm sorry (Mmm)
I'm sorry, (Yeah, yeah) I'm sorry
I'm sorry, I'm sorry
I'm sorry`,coverArt:"https://images.genius.com/026c5c3f1618d0b001cc2a09bbcdc3cd.1000x1000x1.jpg"},{songTitle:"Breathe (Taylor's Version) by Taylor Swift (Ft. Colbie Caillat)",lyrics:`I see your face in my mind as I drive away
'Cause none of us thought it was gonna end that way
People are people and sometimes we change our minds
But it's killing me to see you go after all this time


Mm-mm, mm-mm-mm-mm
Mm-mm, mm-mm-mm-mm


The music starts playing like the end of a sad movie
It's the kind of ending you don't really wanna see
'Cause it's tragedy and it'll only bring you down
Now I don't know what to be without you around

And we know it's never simple, never easy
Never a clean break, no one here to save me
You're the only thing I know like the back of my hand


And I can't breathe without you, but I have to
Breathe without you, but I have to


Never wanted this, never wanna see you hurt
Every little bump in the road, I tried to swerve
But people are people and sometimes it doesn't work out
And nothin' we say is gonna save us from the fallout


And we know it's never simple, never easy
Never a clean break, no one here to save me
You're the only thing I know like the back of my hand


And I can't breathe without you, but I have to
Breathe without you but I have to


It's 2 A.M., feeling like I just lost a friend
Hope you know it's not easy, easy for me
It's 2 A.M., feeling like I just lost a friend
Hope you know this ain't easy, easy for me

And we know it's never simple, never easy
Never a clean break, no one here to save me, oh


I can't breathe without you, but I have to
Breathe without you, but I have to
Breathe without you, but I have to
Breathe without you, but I have to


I'm sorry, I'm sorry (Mmm)
I'm sorry, (Yeah, yeah) I'm sorry
I'm sorry, I'm sorry (Ooh, ooh)
I'm sorry`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"Breathless by Taylor Swift",lyrics:`Here you are now
Fresh from your war
Back from the edge of time
And all that you were
Stripped to the bone
I thought you'd want to know


That when you feel the world is crashing
All around your feet
Come running headlong into my arms
Breathless
I'll never judge you
I can only love you
Come now running headlong
Into my arms
Breathless
Breathless

Lay down your guns
Too weak to run
Nothing can harm you here
Your precious heart
Broken and scarred
Somehow you made it through
I only ask that you won't go again


When you feel the world is crashing
All around your feet
Come running headlong into my arms
Breathless
I'll never judge you
I can only love you
Come now running headlong
Into my arms
Breathless


I'm so glad to see you smiling
So good to hear your laugh
I think that you've found you even
Missed yourself
I'm only asking this because I think that
Truth be told
Oh, you'll never go again
Again, again

When you feel the world is crashing
All around your feet
Come running headlong into my arms
Breathless
I'll never judge you
I can only love you
Come now running headlong
Into my arms
Breathless
Breathless


When you feel the world is crashing
Come running into my arms`,coverArt:"https://images.genius.com/99cbaa5f52529f800f61a8dd5fc7c11b.1000x1000x1.jpg"},{songTitle:"Bye Bye Baby (Taylor's Version) [From the Vault] by Taylor Swift",lyrics:`It wasn't just like a movie
The rain didn't soak through my clothes, down to my skin
I'm drivin' away and I, I guess you could say
This is the last time I'll drive this way again
Lost in the gray and I try to grab at the fray
'Cause I, I still love you but I can't


Bye bye to everything I thought was on my side
Bye bye baby
I want you bad but it's come down to nothing
And all I have is your sympathy
'Cause you took me home but you just couldn't keep me
Bye bye baby
Bye bye baby

The picture frame is empty
On the dresser, vacant just like me
I see your writing on the dash
Then back to your hesitation
I was so sure of everything
Everything I thought we'd always have
Guess I never doubted it
Then the here and the now floods in
Feels like I'm becoming a part of your past


Bye bye to everything I thought was on my side
Bye bye baby
I want you bad but it's come down to nothing
And all I have is your sympathy
'Cause you took me home but you just couldn't keep me
Bye bye baby


And there's so much that I can't touch
You're all I want but it's not enough this time
And all the pages are just slipping through my hands
And I'm so scared of how this ends


Bye bye to everything I thought was on my side
Bye bye baby
I want you bad but it's come down to nothing
And all I have is your sympathy
'Cause you took me home but you just couldn't keep me

Bye bye to everything I thought was on my side
Bye bye baby
I want you bad but it's come down to nothing
And all I have is your sympathy
'Cause you took me home but you just couldn't keep me
Oh, you took me home, I thought you were gonna keep me
Bye bye baby
Bye bye baby`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"Call It What You Want by Taylor Swift",lyrics:`My castle crumbled overnight
I brought a knife to a gunfight
They took the crown, but it's alright
All the liars are calling me one
Nobody's heard from me for months
I'm doin' better than I ever was
'Cause


My baby's fit like a daydream
Walking with his head down
I'm the one he's walking to
So call it what you want, yeah
Call it what you want to
My baby's fly like a jet stream
High above the whole scene
Loves me like I'm brand new
So call it what you want, yeah
Call it what you want to

All my flowers grew back as thorns
Windows boarded up after the storm
He built a fire just to keep me warm
All the drama queens taking swings
All the jokers dressing up as kings
They fade to nothing when I look at him
And I know I make the same mistakes every time
Bridges burn, I never learn
At least I did one thing right
I did one thing right
I'm laughing with my lover, makin' forts under covers
Trust him like a brother
Yeah, you know I did one thing right
Starry eyes sparkin' up my darkest night


My baby's fit like a daydream
Walking with his head down
I'm the one he's walking to
So call it what you want, yeah
Call it what you want to
My baby's fly like a jet stream
High above the whole scene
Loves me like I'm brand new
(Call it what you want, call it what you want, call it)
So call it what you want, yeah
Call it what you want to

I want to wear his initial on a chain 'round my neck
Chain 'round my neck
Not because he owns me
But 'cause he really knows me
Which is more than they can say, I
I recall late November
Holding my breath, slowly, I said
"You don't need to save me
But would you run away with me?"
Yes (Would you run away?)


My baby's fit like a daydream
Walking with his head down
I'm the one he's walking to
(Call it what you want, call it what you want, call it)
So call it what you want, yeah
Call it what you want to
My baby's fly like a jet stream
High above the whole scene
Loves me like I'm brand new
(Call it what you want, call it what you want, call it)
So call it what you want, yeah
Call it what you want to

(Call it what you want, call it)
(Call it what you want, call it what you want, call it)
(Call it what you want, call it what you want, call it)
(Call it what you want, call it what you want, call it)
(Call it what you want, call it what you want, call it)
(Call it what you want, call it what you want, call it)
(Call it what you want, call it what you want, call it)
Call it what you want, yeah
Call it what you want... to`,coverArt:"https://images.genius.com/75f158769570b17de3f0bba057a6fbcb.580x580x1.jpg"},{songTitle:"\u200Bcardigan by Taylor Swift",lyrics:`Vintage tee, brand new phone
High heels on cobblestones
When you are young, they assume you know\u2005nothing
Sequin\u2005smile, black lipstick
Sensual\u2005politics
When you are young, they assume\u2005you know nothing


But I knew you
Dancin' in your Levi's
Drunk under a streetlight, I
I knew you
Hand under my sweatshirt
Baby, kiss it better, I

And when I felt like I was an old cardigan
Under someone's bed
You put me on and said I was your favorite


A friend to all is a friend to none
Chase two girls, lose the one
When you are young, they assume you know nothing


But I knew you
Playing hide-and-seek and
Giving me your weekends, I
I knew you
Your heartbeat on the High Line
Once in twenty lifetimes, I


And when I felt like I was an old cardigan
Under someone's bed
You put me on and said I was your favorite


To kiss in cars and downtown bars
Was all we needed
You drew stars around my scars
But now I'm bleedin'
Related Songs
'Cause I knew you
Steppin' on the last train
Marked me like a bloodstain, I
I knew you
Tried to change the ending
Peter losing Wendy, I
I knew you
Leavin' like a father
Running like water, I
And when you are young, they assume you know nothing


But I knew you'd linger like a tattoo kiss
I knew you'd haunt all of my what-ifs
The smell of smoke would hang around this long
'Cause I knew everything when I was young
I knew I'd curse you for the longest time
Chasin' shadows in the grocery line
I knew you'd miss me once the thrill expired
And you'd be standin' in my front porch light
And I knew you'd come back to me
You'd come back to me
And you'd come back to me
And you'd come back

And when I felt like I was an old cardigan
Under someone's bed
You put me on and said I was your favorite`,coverArt:"https://images.genius.com/8c6b44171caaa726820cce35ad8b066e.1000x1000x1.png"},{songTitle:"\u200Bcardigan (cabin in candlelight version) by Taylor Swift",lyrics:`Vintage tee, brand new phone
High heels on cobblestones
When you are young, they assume you know\u2005nothing
Sequin\u2005smile, black lipstick
Sensual\u2005politics
When you are young, they assume\u2005you know nothing


But I knew you
Dancin' in your Levi's
Drunk under\u205Fa\u205Fstreetlight,\u205FI
I knew you
Hand\u205Funder my sweatshirt
Baby,\u205Fkiss it better, I

And when I felt like I was an old cardigan
Under someone's bed
You put me on and said I was your favorite


A friend to all is a friend to none
Chase two girls, lose the one
When you are young, they assume you know nothing


But I knew you
Playing hide-and-seek and
Giving me your weekends, I
I knew you
Your heartbeat on the High Line
Once in twenty lifetimes, I


And when I felt like I was an old cardigan
Under someone's bed
You put me on and said I was your favorite


To kiss in cars and downtown bars
Was all we needed
You drew stars around my scars
But now I'm bleedin'

'Cause I knew you
Steppin' on the last train
Marked me like a bloodstain, I
I knew you
Tried to change the ending
Peter losing Wendy, I
I knew you
Leavin' like a father
Running like water, I
And when you are young, they assume you know nothing


But I knew you'd linger like a tattoo kiss
I knew you'd haunt all of my what-ifs
The smell of smoke would hang around this long
'Cause I knew everything when I was young
I knew I'd curse you for the longest time
Chasin' shadows in the grocery line
I knew you'd miss me once the thrill expired
And you'd be standin' in my front porch light
And I knew you'd come back to me
You'd come back to me
And you'd come back to me
And you'd come back

And when I felt like I was an old cardigan
Under someone's bed
You put me on and said I was your favorite`,coverArt:"https://images.genius.com/413e3840b546692823fff8993b277d36.600x600x1.jpg"},{songTitle:"\u200Bcardigan (the long pond studio sessions) by Taylor Swift",lyrics:`Vintage tee, brand new phone
High heels on cobblestones
When you are young, they assume you know nothing
Sequin smile, black lipstick
Sensual politics
When you are young, they assume you know nothing


But I knew you
Dancin' in your Levi's
Drunk under a streetlight, I
I knew you
Hand under my sweatshirt
Baby, kiss it better, I

And when I felt like I was an old cardigan
Under someone's bed
You put me on and said I was your favorite


A friend to all is a friend to none
Chase two girls, lose the one
When you are young, they assume you know nothing


But I knew you
Playing hide-and-seek and
Giving me your weekends, I
I knew you
Your heartbeat on the High Line
Once in twenty lifetimes, I


And when I felt like I was an old cardigan
Under someone's bed
You put me on and said I was your favorite


To kiss in cars and downtown bars
Was all we needed
You drew stars around my scars
But now I'm bleedin'

'Cause I knew you
Steppin' on the last train
Marked me like a bloodstain, I
I knew you
Tried to change the ending
Peter losing Wendy, I
I knew you
Leavin' like a father
Running like water, I
'Cause when you are young, they assume you know nothing


But I knew you'd linger like a tattoo kiss
I knew you'd haunt all of my what-ifs
The smell of smoke would hang around this long
'Cause I knew everything when I was young
I knew I'd curse you for the longest time
Chasin' shadows in the grocery line
I knew you'd miss me once the thrill expired
And you'd be standin' in my front porch light
And I knew you'd come back to me
You'd come back to me
And you'd come back to me
And you'd come back

And when I felt like I was an old cardigan
Under someone's bed
You put me on and said I was your favorite`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"Carolina by Taylor Swift",lyrics:`Oh, Carolina creeks running through my veins
Lost I was born, lonesome I came
Lonesome I'll always stay
Carolina knows why, for years, I roam
Free as these birds, light as whispers
Carolina knows


And you didn't\u205Fsee\u205Fme\u205Fhere
No, they never\u205Fdid see me\u205Fhere
And she's in my dreams

Into the mist, into the clouds
Don't leave
I make a fist, I'll make it count
And there are places I will never, ever go
And things that only Carolina will ever know


Carolina stains on the dress she left
Indelible scars, pivotal marks
Blue as the life she fled
Carolina pines, won't you cover me?
Hide me like robes down the back road
Muddy these webs we weave


And you didn't see me here
Oh, they never did see me
And she's in my dreams


Into the mist, into the clouds
Don't leave
I make a fist, I'll make it count
And there are places I will never, ever go
And things that only Carolina will ever know

And you didn't see me here
They never did see me here
No, you didn't see me here
They never saw me


Oh, Carolina knows why for years they've said
That I was guilty as sin and sleep in a liar's bed
But the sleep comes fast and I'll meet no ghosts
It's between me, the sand, and the sea
Carolina knows`,coverArt:"https://images.genius.com/45ddd119c7461c47fcea28027139f4b7.1000x1000x1.jpg"},{songTitle:"Carolina (Video Version) by Taylor Swift",lyrics:`Oh, Carolina creeks running through my veins
Lost I was born, lonesome I came
Lonesome I'll always stay
Carolina knows why for years I roam
Free as these birds, light as whispers
Carolina knows


And you didn't see me here
No, they never did see me here
And she's in my dreams

Into the mist, into the clouds
Don't leave
I make a fist, I make it count
And there are places I will never, ever go
And things that only Carolina will ever know


Carolina stains on the dress she left
Indelibl\u0435 scars, pivotal marks
Blue as the life sh\u0435 fled
Carolina pines, won't you cover me?
Hide me like robes, down the back road
Muddy these webs we weave


And you didn't see me here (Mhm)
They never saw me


Oh, Carolina knows
Why for years they've said
That I was guilty as sin
And sleep in a liar's bed
But the sleep comes fast
And I'll meet no ghosts
It's between me, the sand, and the sea
Carolina knows`,coverArt:"https://images.genius.com/c7164168daf14b3d24f1b6ba59e808bb.1000x1000x1.jpg"},{songTitle:"\u200Bchampagne problems by Taylor Swift",lyrics:`You booked the night train for a reason
So you could sit there in this hurt
Bustling crowds or silent sleepers
You're not sure which is worse


Because I dropped your hand while dancing
Left you\u205Fout\u205Fthere\u205Fstanding
Crestfallen on the\u205Flanding
Champagne problems
Your mom's\u205Fring in your pocket
My picture in your wallet
Your heart was glass, I dropped it
Champagne problems

You told your family for a reason
You couldn't keep it in
Your sister splashed out on the bottle
Now no one's celebrating


Dom P\xE9rignon, you brought it
No crowd of friends applauded
Your hometown skeptics called it
Champagne problems
You had a speech, you're speechless
Love slipped beyond your reaches
And I couldn't give a reason
Champagne problems

Your Midas touch on the Chevy door
November flush and your flannel cure
"This dorm was once a madhouse"
I made a joke, "Well, it's made for me"
How evergreen, our group of friends
Don't think we'll say that word again
And soon they'll have the nerve to deck the halls
That we once walked through
One for the money, two for the show
I never was ready so I watch you go
Sometimes you just don't know the answer
'Til someone's on their knees and asks you
"She would've made such a lovely bride
What a shame she's fucked in the head," they said
But you'll find the real thing instead
She'll patch up your tapestry that I shred
Related Songs
And hold your hand while dancing
Never leave you standing
Crestfallen on the landing
With champagne problems
Your mom's ring in your pocket
Her picture in your wallet
You won't remember all my
Champagne problems


You won't remember all my
Champagne problems`,coverArt:"https://images.genius.com/3e354c719fe236ab4a75adc6ea4c7fca.1000x1000x1.png"},{songTitle:"Change by Taylor Swift",lyrics:`And it's a sad picture, the final blow hits you
Somebody else gets what you wanted again and
You know it's all the same, another time and place
Repeating history and you're getting sick of it
But I believe in whatever you do
And I'll do anything to see it through


Because these things will change
Can you feel it now?
These walls that they put up to hold us back will fall down
This revolution, the time will come
For us to finally win
And we'll sing hallelujah, we'll sing hallelujah
Oh, oh

So we've been outnumbered, raided, and now cornered
It's hard to fight when the fight ain\u2019t fair
We're getting stronger now, find things they never found
They might be bigger but we're faster and never scared
You can walk away, say we don't need this
But there's something in your eyes says we can beat this


'Cause these things will change
Can you feel it now?
These walls that they put up to hold us back will fall down
This revolution, the time will come
For us to finally win
And we'll sing hallelujah, we'll sing hallelujah
Oh, oh


Tonight we stand, get off our knees
Fight for what we've worked for all these years
And the battle was long, it's the fight of our lives
But we'll stand up champions tonight


It was the night things changed
Can you see it now?
These walls that they put up to hold us back fell down
It's a revolution, throw your hands up
'Cause we never gave in
And we'll sing hallelujah, we sang hallelujah
Hallelujah`,coverArt:"https://images.rapgenius.com/2d9b99278d68866d65ae35e136167c63.953x953x1.jpg"},{songTitle:"Change (Live from Clear Channel Stripped 2008) by Taylor Swift",lyrics:`And it's a sad picture, the final blow hits you
Somebody else gets what you wanted\u2005again\u2005and
You know it's\u2005all the same, another time and\u2005place
Repeating history and you're getting sick of it
But I believe\u205Fin\u205Fwhatever\u205Fyou do
And I'll\u205Fdo anything to\u205Fsee it through


Because these things will change
Can you feel it now?
These walls that they put up to hold us back will fall down
This revolution, the time will come
For us to finally win
And we'll sing hallelujah, we'll sing hallelujah
Oh, oh

So we've been outnumbered, raided, and now cornered
It's hard to fight when the fight ain\u2019t fair
We're getting stronger now, finding things they never found
They might be bigger but we're faster and never scared
You can walk away, say we don't need this
But there's something in your eyes says we can beat this


'Cause these things will change
Can you feel it now?
These walls that they put up to hold us back will fall down
This revolution, the time will come
For us to finally win
And we'll sing hallelujah, we'll sing hallelujah
Oh, oh


Tonight we stand, get off our knees
Fight for what we've worked for all these years
And the battle was long, it's the fight of our lives
But we'll stand up champions tonight


It was the night things changed
Can you see it now?
These walls that they put up to hold us back fell down
It's a revolution, throw your hands up
'Cause we never gave in
And we'll sing hallelujah, we sang hallelujah
Hallelujah`,coverArt:"https://images.genius.com/a27d0e4b7173862e0abc61e372597975.1000x1000x1.jpg"},{songTitle:"Change (Taylor's Version) by Taylor Swift",lyrics:`Well, it's a sad picture, the final blow hits you
Somebody else gets what you wanted again and
You know it\u2019s all the same, another time and place
Repeating history and you're getting sick of it
But I believe in whatever you do
And I'll do anything to see it through


Because these things will change
Can you feel it now?
These walls that they put up to hold us back will fall down
This revolution, the time will come
For us to finally win
And we\u2019ll sing hallelujah, we'll sing hallelujah
Oh, oh

So we've been outnumbered, raid\u0435d, and now cornered
It's hard to fight when th\u0435 fight ain't fair
We're getting stronger now, find things they never found
They might be bigger but we're faster and never scared
You can walk away, say we don't need this
But there\u2019s something in your eyes says we can beat this


\u2019Cause these things will change
Can you feel it now?
These walls that they put up to hold us back will fall down
This revolution, the time will come
For us to finally win
And we'll sing hallelujah, we\u2019ll sing hallelujah
Oh, oh


Tonight, we'll stand, get off our knees
Fight for what we've worked for all these years
And the battle was long, it's the fight of our lives
But we\u2019ll stand up champions tonight


It was the night things changed
Can you see it now?
When the walls that they put up to hold us back fell down
It's a revolution, throw your hands up
'Cause we never gave in
And we'll sing hallelujah, we sang hallelujah
Hallelujah`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"Christmases When You Were Mine by Taylor Swift",lyrics:`Please take down the mistletoe
'Cause I don't want to think about that right now
'Cause everything I want is miles away
In a snow covered little town
My momma's in the kitchen, worrying about me
Season's greetings, hope you're well
Well I'm doing alright
If you were wondering
Lately I can never tell

I know this shouldn't be a lonely time
But there were Christmases when you were mine


I've been doing fine without you, really
Up until the nights got cold
And everybody's here, except you, baby
Seems like everyone's got someone to hold


But for me it's just a lonely time
'Cause there were Christmases when you were mine


Merry Christmas, everybody
That'll have to be something I just say this year
I'll bet you got your mom another sweater
And were your cousins late again?
When you were putting up the lights this year
Did you notice one less pair of hands?


I know this shouldn't be a lonely time
But there were Christmases when I didn't wonder how you are tonight
'Cause there were Christmases when you were mine

You were mine`,coverArt:"https://images.genius.com/46a9fca430dd35d09273fc0deaba7bf7.1000x1000x1.jpg"},{songTitle:"Christmas Must Be Something More by Taylor Swift",lyrics:`What if ribbons and bows didn't mean a thing?
Would the song still survive without five golden rings?
Would you still wanna kiss without mistletoe?
What would happen if God never let it snow?
What would happen if Christmas carols told a lie?
Tell me, what would you find?


You'd see that today holds something special
Something holy, not superficial
So here's to the birthday boy who saved our lives
It's something we all try to ignore
And put a wreath up on your door
So here's something you should know that is for sure
Christmas must be something more

What if angels did not pay attention to
All the things that we wished they would always do?
What if happiness came in a cardboard box?
Then I think there is something we all forgot
What would happen if presents all went away?
Tell me, what would you find?


You'd see that today holds something special
Something holy, not superficial
So here's to the birthday boy who saved our lives
It's something we all try to ignore
And put a wreath up on your door
So here's something you should know that is for sure
Christmas must be something more


We get so caught up in all of it
Business and relationships
Hundred-mile-an-hour lives
And it's this time of year
And everybody's here
It seems the last thing on your mind


Is that the day holds something special
Something holy, not superficial
So here's to Jesus Christ who saved our lives
It's something we all try to ignore
And put a wreath up on your door
But here's something you should know that is for sure
Christmas must be something
Christmas must be something
Christmas must be something more

There's gotta be more
There's gotta be more`,coverArt:"https://images.genius.com/46a9fca430dd35d09273fc0deaba7bf7.1000x1000x1.jpg"},{songTitle:"Christmas Tree Farm by Taylor Swift",lyrics:`My winter nights are taken up by static
Stress and holiday shopping traffic
But I close my\u2005eyes\u2005and I'm somewhere\u2005else
Just like magic


In my heart is\u2005a Christmas tree farm
Where the people would come
To dance under sparkling lights
Bundled up in their mittens and coats
And the cider would flow
And I just wanna be there tonight

Sweet dreams of holly and ribbon
Mistakes are forgiven
And everythin' is icy and blue
And you would be there too


Under the mistletoe
Watchin' the fire glow
And tellin' me, "I love you"
Just bein' in your arms
Takes me back to that little farm
Where every wish comes true


In my heart is a Christmas tree farm
There's a light in the barn
We run inside out from the cold
In the town, kids are dreamin' of sleighs
And they're warm and they're safe
They wake to see a blanket of snow


Sweet dreams of holly and ribbon
Mistakes are forgiven
And everythin' is icy and blue
And you would be there too

Under the mistletoe
Watchin' the fire glow
And tellin' me, "I love you"
Just bein' in your arms
Takes me back to that little farm
Where every wish comes true
Baby, yeah


And when I'm feelin' alone
You remind me of home
Oh, baby, baby, Merry Christmas
And when the world isn't fair
I pretend that we're there
Baby, baby, Merry Christmas (To you)


Under the mistletoe (To you)
Watching the fire glow
And tellin' me, "I love you"


Oh, baby, baby, Merry Christmas
Oh, baby, baby, Merry Christmas (Darling)
Oh, baby, baby, Merry Christmas
I love you
Oh, baby, baby, Merry Christmas
Oh, baby, baby, Merry Christmas (I just want you to know)
Oh, baby, baby, Merry Christmas
Where every wish comes true
I love you`,coverArt:"https://images.genius.com/6d3fda470d4048ae2470a2c43e331489.1000x1000x1.jpg"},{songTitle:"Christmas Tree Farm (Old Timey Version) (Amazon Original) by Taylor Swift",lyrics:`My winter nights are taken up by static
Stress and holiday shopping traffic
But I close my eyes and I'm somewhere else
Just like magic


In my heart is a Christmas tree farm
Where the people would come
To dance under sparkling lights
Bundled up in their mittens and coats
And the cider would flow
And I just wanna be there tonight

Sweet dreams of holly and ribbon
Mistakes are forgiven
And everythin' is icy and blue
And you would be there too


Under the mistl\u0435toe
Watchin' the fire glow
And t\u0435llin' me, "I love you"
Just bein' in your arms
Takes me back to that little farm
Where every wish comes true


In my heart is a Christmas tree farm
There's a light in the barn
We run inside out from the cold
In the town, kids are dreamin' of sleighs
And they're warm and they're safe
They wake to see a blanket of snow


Sweet dreams of holly and ribbon
Mistakes are forgiven
And everythin' is icy and blue
And you would be there too

Under the mistletoe
Watchin' the fire glow
And tellin' me, "I love you"
Just bein' in your arms
Takes me back to that little farm
Where every wish comes true
Baby, yeah


And when I'm feelin' alone
You remind me of home
Oh, baby, baby, Merry Christmas
And when the world isn't fair
I pretend that we're there
Baby, baby, Merry Christmas (To you)


Under the mistletoe (To you)
Watching the fire glow
And tellin' me, "I love you"


Oh, baby, baby, Merry Christmas
Oh, baby, baby, Merry Christmas (Darling)
Oh, baby, baby, Merry Christmas
I love you
Oh, baby, baby, Merry Christmas
Oh, baby, baby, Merry Christmas (I just want you to know)
Oh, baby, baby, Merry Christmas
Where every wish comes true
Merry Christmas`,coverArt:"https://images.genius.com/f733de10a4b6d6a664d744d993e313a1.255x255x1.jpg"},{songTitle:"Christmas Tree Farm (Recorded Live at the 2019 iHeartRadio Jingle Ball) by Taylor Swift",lyrics:`It's jingleball, there\u2019s Santa hats everywhere, you're never too far away from one and you know I was wondering if maybe you wanted me to sing a song that I wrote?


My\u205Fwinter\u205Fnights\u205Fare taken up\u205Fby static
Stress and\u205Fholiday shopping traffic
But I close my eyes and I'm somewhere else
Just like magic


In my heart is a Christmas tree farm
Where the people would come
To dance under sparkling lights
Bundled up in their mittens and coats
And the cider would flow
And I just wanna be there tonight

Sweet dreams of holly and ribbon
Mistakes are forgiven
And everythin\u2019 is icy and blue
And you would be there too


Under the mistletoe
Watchin' the fire glow
And tellin' me, "I love you"
Just bein' in your arms
Takes me back to that little farm
Where every wish comes true


In my heart is a Christmas tree farm
There's a light in the barn
We run inside out from the cold
In the town, kids are dreamin' of sleighs
And they're warm and they're safe
They wake to see a blanket of snow


Sweet dreams of holly and ribbon
Mistakes are forgiven
And everythin\u2019 is icy and blue
And you would be there too

Under the mistletoe
Watchin\u2019 the fire glow
And tellin' me, "I love you"
Just bein\u2019 in your arms
Takes me back to that little farm
Where every wish comes true
Baby, yeah


And when I'm feelin' alone
You remind me of home
Oh, baby, baby, Merry Christmas
And when the world isn't fair
I pretend that we\u2019re there
Baby, baby, Merry Christmas (To you)


Under the mistletoe (To you)
Watching the fire glow
And tellin' me, "I love you"


Oh, baby, baby, Merry Christmas
Oh, baby, baby, Merry Christmas (Darling)
Oh, baby, baby, Merry Christmas
I love you
Oh, baby, baby, Merry Christmas
Oh, baby, baby, Merry Christmas (I just want you to know)
Oh, baby, baby, Merry Christmas
Where every wish comes true
I love you`,coverArt:"https://images.genius.com/5ef540a990759abdb0b49f60cbad952c.640x640x1.jpg"},{songTitle:"Clean by Taylor Swift",lyrics:`The drought was the very worst (Oh-oh, oh-oh)
When the flowers that we'd grown together died of thirst
It was months and months of back and forth (Oh-oh, oh-oh)
You're still all over me
Like a wine-stained dress I can't wear anymore


Hung my head as I lost the war
And the sky turned black like a perfect storm

Rain came pouring down
When I was drowning, that's when I could finally breathe
And by morning
Gone was any trace of you, I think I am finally clean
(Oh, oh, oh, oh)


There was nothing left to do (Oh-oh, oh-oh)
When the butterflies turned to
Dust that covered my whole room
So I punched a hole in the roof (Oh-oh, oh-oh)
Let the flood carry away all my pictures of you


The water filled my lungs, I screamed so loud
But no one heard a thing


Rain came pouring down
When I was drowning, that's when I could finally breathe
And by morning
Gone was any trace of you, I think I am finally clean
(Oh, oh, oh, oh)


I think I am finally clean
(Oh, oh)
Oh, oh, oh, oh, oh-oh
Said, I think I am finally clean
(Oh, oh)
Oh, oh, oh, oh, oh-oh

Ten months sober, I must admit
Just because you're clean, don't mean you don't miss it
Ten months older, I won't give in
Now that I'm clean, I'm never gonna risk it


The drought was the very worst (Oh-oh, oh-oh)
When the flowers that we'd grown together died of thirst
(Oh)


The rain came pouring down
When I was drowning, that's when I could finally breathe
And by morning
Gone was any trace of you, I think I am finally clean
Rain came pouring down
When I was drowning, that's when I could finally breathe
And by morning
Gone was any trace of you, I think I am finally clean


(Oh, oh)
Finally clean
Think I'm finally clean
(Oh, oh)
Oh-oh, oh-oh
(Oh, oh, oh)
Think I'm finally clean`,coverArt:"https://images.genius.com/da08ff60b6becc4fc1eaa3412338d18f.1000x1000x1.png"},{songTitle:"\u200Bclosure by Taylor Swift",lyrics:`It's been a long time
And seeing the shape of your name
Still spells out pain
It wasn't right
The way it all went down
Looks like you know that now


Yes, I got your letter
Yes, I'm doing better
It cut deep to know ya, right to the bone
Yes, I got your letter
Yes, I'm doing better
I know that it's over, I don't need your
Closure, your closure

Don't treat me like
Some situation that needs to be handled
I'm fine with my spite
And my tears, and my beers and my candles
I can feel you smoothing me over


Yes, I got your letter
Yes, I'm doing bett\u0435r
It cut deep to know ya, right to the bone
Yes, I got your l\u0435tter
Yes, I'm doing better
I know that it's over, I don't need your
Closure, your closure
Your closure, your closure


I know I'm just a wrinkle in your new life
Staying friends would iron it out so nice
Guilty, guilty, reaching out across the sea
That you put between you and me
But it's fake and it's oh so unnecessary


Yes, I got your letter
Yes, I'm doing better
It cut deep to know ya, right to the bone
Yes, I got your letter
Yes, I'm doing better
I know that it's over, I don't need your
Closure, closure, your closure
Your closure`,coverArt:"https://images.genius.com/3e354c719fe236ab4a75adc6ea4c7fca.1000x1000x1.png"},{songTitle:"Cold as You by Taylor Swift",lyrics:`You have a way of coming easily to me
And when you take, you take the very best of me
So I start a fight cause I need to feel something
And you do what you want 'cause I'm not what you wanted


Oh, what a shame, what a rainy ending given to a perfect day
Just walk away, ain't no use defending words that you will never say
And now that I'm sitting here thinking it through
I've never been anywhere cold as you

You put up walls and paint them all a shade of gray
And I stood there loving you and wished them all away
And you come away with a great little story
Of a mess of a dreamer with the nerve to adore you


Oh, what a shame, what a rainy ending given to a perfect day
So just walk away, ain't no use defending words that you will never say
And now that I'm sitting here thinking it through
I've never been anywhere cold as you


You never did give a damn thing, honey, but I cried, cried for you
And I know you wouldn't have told nobody if I died, died for you
(Died for you)


Oh, what a shame, what a rainy ending given to a perfect day
Every smile you fake is so condescending
Counting all the scars you made
And now that I'm sitting here thinking it through
I've never been anywhere cold as you
Ooh`,coverArt:"https://images.genius.com/6b596144050683a8bfea75da8aa70fc3.1000x1000x1.jpg"},{songTitle:"Come Back... Be Here by Taylor Swift",lyrics:`You said it in a simple way
4 AM, the second day
How strange that I don't know you at all
Stumbled through the long goodbye
One last kiss, then catch your flight
Right when I was just about to fall


I told myself, don't get attached
But in my mind, I play it back
Spinning faster than the plane that took you

And this is when the feeling sinks in
I don't wanna miss you like this
Come back, be here, come back, be here
I guess you're in New York today
I don't wanna need you this way
Come back, be here, come back, be here


The delicate beginning rush
The feeling you can know so much
Without knowing anything at all
And now that I can put this down
If I had known what I know now
I never would've played so nonchalant


Taxi cabs and busy streets
That never bring you back to me
I can't help but wish you took me with you


And this is when the feeling sinks in
I don't wanna miss you like this
Come back, be here, come back, be here
I guess you're in London today
And I don't wanna need you this way
Come back, be here, come back, be here

This is falling in love in the cruelest way
This is falling for you when you are worlds away
In New York, be here
But you're in London, and I break down
'Cause it's not fair that you're not around


This is when the feeling sinks in
I don't wanna miss you like this
Come back, be here, come back, be here
I guess you're in New York today
And I don't wanna need you this way
Come back, be here, come back, be here


Oh-oh, oh-oh
I don't wanna miss you like this
Oh-oh, oh-oh
Come back, be here
Come back, be here`,coverArt:"https://images.genius.com/78e560d6967a58629e59feb74f2fae5c.1000x1000x1.jpg"},{songTitle:"Come Back...Be Here (Taylor's Version) by Taylor Swift",lyrics:`You said it in a simple way
4 AM, the second day
How strange that I don't know you at all
Stumbled through the long goodbye
One last kiss, then catch your flight
Right when I was just about to fall


I told myself, "Don't get attached"
But in my mind, I play it back
Spinning faster than the plane that took you

And this is when the feeling sinks in
I don't wanna miss you like this
Come back, be here, come back, be here
I guess you're in New York today
I don't wanna need you this way
Come back, be here, come back, be here


The delicate beginning rush
The feeling you can know so much
Without knowing anything at all
And now that I can put this down
If I had known what I know now
I never would've played so nonchalant


Taxi cabs and busy streets
That never bring you back to me
I can't help but wish you took me with you


And this is when the feeling sinks in
I don't wanna miss you like this
Come back, be here, come back, be here
I guess you're in London today
And I don't wanna need you this way
Come back, be here, come back, be here

Oh-oh, oh-oh
Oh-oh, oh-oh
Oh-oh, oh-oh


This is falling in love in the cruelest way
This is falling for you when you are worlds away
In New York, be here
But you're in London, and I break down
'Cause it's not fair that you're not around


This is when the feeling sinks in
I don't wanna miss you like this
Come back, be here, come back, be here
I guess you're in New York today
And I don't wanna need you this way
Come back, be here, come back, be here


Oh-oh, oh-oh
I don't wanna miss you like this
Oh-oh, oh-oh
Come back, be here
Come back, be here`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"Come In With the Rain by Taylor Swift",lyrics:`I could go back to every laugh
But I don't wanna go there anymore
And I know all the steps up to your door
But I don't wanna go there anymore


Talk to the wind, talk to the sky
Talk to the man with the reasons why
And let me know what you find

I'll leave my window open
'Cause I'm too tired at night to call your name
Just know I'm right here hoping
That you'll come in with the rain


I could stand up and sing you a song
But I don't wanna have to go that far
And I, I've got you down, I know you by heart
And you don't even know where I start


Talk to yourself, talk to the tears
Talk to the man who put you here
And don't wait for the sky to clear


I'll leave my window open
'Cause I'm too tired at night to call your name
Just know I'm right here hoping
That you'll come in with the rain


I've watched you so long, screamed your name
I don't know what else I can say

But I'll leave my window open
'Cause I'm too tired at night for all these games
Just know I'm right here hoping
That you'll come in with the rain


I could go back to every laugh
But I don't wanna go there anymore`,coverArt:"https://images.genius.com/52185c8266a672e8c5cbbfbc6b4eb08e.1000x1000x1.jpg"},{songTitle:"Come In With the Rain (Taylor's Version) by Taylor Swift",lyrics:`I could go back to every laugh
But I don't wanna go there anymore
And I know all the steps up to your door
But I don't wanna go there anymore


Talk to the wind, talk to the sky
Talk to the man with the reasons why
And let me know what you find

I'll leave my window open
'Cause I'm too tired at night to call your name
Just know I'm right here hoping
That you'll come in with the rain


I could stand up and sing you a song
But I don't wanna have to go that far
And I, I've got you down, I know you by heart
And you don't even know where I start


Talk to yourself, talk to the tears
Talk to the man who put you here
And don't wait for the sky to clear


I'll leave my window open
'Cause I'm too tired at night to call your name, oh
Just know I'm right here hoping
That you'll come in with the rain


I've watched you so long, screamed your name
I don't know what else I can say

I'll leave my window open
'Cause I'm too tired at night for all these games
Just know I'm right here hoping
That you'll come in with the rain


I could go back to every laugh
But I don't wanna go there anymore`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"\u200Bconey island by Taylor Swift (Ft. The National)",lyrics:`Break my soul in two looking for you
But you're right here
If I can't relate to you anymore
Then who am I related to?
And if this is the long haul
How'd we get here so soon?
Did I close my fist around something delicate?
Did I shatter you?


And I'm sitting on a bench in Coney Island
Wondering where did my baby go?
The fast times, the bright lights, the merry go
Sorry for not making you my centerfold

Over and over
Lost again with no surprises
Disappointments, close your eyes
And it gets colder and colder
When the sun goes down


The question pounds my head
What's a lifetime of achievement
If I pushed you to the edge?
But you were too polite to leave me
And do you miss the rogue
Who coaxed you into paradise and left you there?
Will you forgive my soul
When you're too wise to trust me and too old to care?


'Cause we were like the mall before the internet
It was the one place to be
The mischief, the gift-wrapped suburban dreams
Sorry for not winning you an arcade ring


Over and over
Lost again with no surprises
Disappointments, close your eyes
And it gets colder and colder
When the sun goes down

Were you waiting at our old spot
In the tree line
By the gold clock
Did I leave you hanging every single day?
Were you standing in the hallway
With a big cake, happy birthday
Did I paint your bluest skies the darkest grey?
A universe away
And when I got into the accident
The sight that flashed before me was your face
But when I walked up to the podium, I think that I forgot to say your name


I'm on a bench in Coney Island
Wondering where did my baby go?
The fast times, the bright lights, the merry go
Sorry for not making you my centerfold


Over and over
Lost again with no surprises
Disappointments, close your eyes
And it gets colder and colder
When the sun goes down

When the sun goes down
The sight that flashed before me was your face
When the sun goes down
But I think that I forgot to say your name
Over and over
Sorry for not making you my, making you my
Making you my centerfold`,coverArt:"https://images.genius.com/bba6a3907af29c08efac7d00d96cd422.1000x1000x1.jpg"},{songTitle:"Cornelia Street by Taylor Swift",lyrics:`We were in the backseat
Drunk on something stronger than the drinks in the bar
"I rent\u2005a\u2005place on Cornelia\u2005Street"
I say casually in the car
We\u2005were a fresh page on the desk
Filling in the blanks as we go
As if the street lights pointed in an arrow head
Leading us home


And I hope I never lose you, hope it never ends
I'd never walk Cornelia Street again
That's the kinda heartbreak time could never mend
I'd never walk Cornelia Street again
And baby, I get mystified by how this city screams your name
And baby, I'm so terrified of if you ever walk away
I'd never walk Cornelia Street again
I'd never walk Cornelia Street again

Windows flung right open, autumn air
Jacket 'round my shoulders is yours
We bless the rains on Cornelia Street
Memorize the creaks in the floor
Back when we were card sharks, playing games
I thought you were leading me on
I packed my bags, left Cornelia Street
Before you even knew I was gone


But then you called, showed your hand
I turned around before I hit the tunnel
Sat on the roof, you and I


I hope I never lose you, hope it never ends
I'd never walk Cornelia Street again
That's the kinda heartbreak time could never mend
I'd never walk Cornelia Street again
And baby, I get mystified by how this city screams your name
And baby, I'm so terrified of if you ever walk away
I'd never walk Cornelia Street again
I'd never walk Cornelia Street again

You hold my hand on the street
Walk me back to that apartment
Years ago, we were just inside
Barefoot in the kitchen
Sacred new beginnings
That became my religion, listen

I hope I never lose you
I'd never walk Cornelia Street again
Oh, never again
And baby, I get mystified by how this city screams your name
And baby, I'm so terrified of if you ever walk away
I'd never walk Cornelia Street again
I'd never walk Cornelia Street again


I don't wanna lose you (Hope it never ends)
I'd never walk Cornelia Street again
I don't wanna lose you (Yeah)


"I rent a place on Cornelia Street"
I say casually in the car`,coverArt:"https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"},{songTitle:"Cornelia Street (Live from Paris) by Taylor Swift",lyrics:`We were in the backseat
Drunk on something stronger than the drinks in the bar
"I rent\u2005a\u2005place on Cornelia\u2005Street"
I say casually in the car
We\u2005were a fresh page on the desk
Filling in the blanks\u205Fas\u205Fwe\u205Fgo
As if the\u205Fstreet lights pointed\u205Fin an arrow head
Leading us home


And I hope I never lose you, hope it never ends
I'd never walk Cornelia Street again
That's the kinda heartbreak time could never mend
I'd never walk Cornelia Street again
And baby, I get mystified by how this city screams your name
And baby, I'm so terrified of if you ever walk away
I'd never walk Cornelia Street again
I'd never walk Cornelia Street again

Windows flung right open, autumn air
Jacket 'round my shoulders is yours
We bless the rains on Cornelia Street
Memorize the creaks in the floor
Back when we were card sharks, playing games
I thought you were leading me on
I packed my bags, left Cornelia Street
Before you even knew I was gone


But then you called, showed your hand
I turned around before I hit the tunnel
Sat on the roof, you and I


I hope I never lose you, hope it never ends
I'd never walk Cornelia Street again
That's the kinda heartbreak time could never mend
I'd never walk Cornelia Street again
And baby, I get mystified by how this city screams your name
And baby, I'm so terrified of if you ever walk away
I'd never walk Cornelia Street again
I'll never walk Cornelia Street again

You hold my hand on the street
Walk me back to that apartment
Years ago, we were just inside
Barefoot in the kitchen
Sacred new beginnings
That became my religion, listen

I hope I never lose you
I'd never walk Cornelia Street again
Oh, never again
\u2018Cause baby, I get mystified by how this city screams your name
And baby, I'm so terrified of if you ever walk away
I'd never walk Cornelia Street again
I'd never walk Cornelia Street again


I don't wanna lose you
I don't wanna lose you


"I rent a place on Cornelia Street"
I say casually in the car`,coverArt:"https://images.genius.com/c76787363974fc08ea2dea206cd7ed4e.512x512x1.jpg"},{songTitle:"\u200Bcowboy like me by Taylor Swift",lyrics:`And the tennis court was covered up
With some tent-like thing
And you asked me to dance
But I said, "Dancin' is a dangerous game"


Oh, I thought
This is gonna be one of those things
Now I know
I'm never gonna love again

I've got some tricks up my sleeve
Takes one to know one
You're a cowboy like me


Never wanted love
Just a fancy car
Now I'm waiting by the phone
Like I'm sitting in an airport bar

You had some tricks up your sleeve
Takes one to know one
You're a cowboy like me


Perched in the dark
Telling all the rich folks anything they wanna hear
Like it could be love
I could be the way forward
Only if they pay for it
You're a bandit like me


Eyes full of stars
Hustling for the good life
Never thought I'd meet you here
It could be love
We could be the way forward
And I know I'll pay for it

You're a cowboy like me


Perched in the dark
Telling all the rich folks anything they wanna hear
Like it could be love
I could be the way forward
Only if they pay for it
You're a bandit like me


Eyes full of stars
Hustling for the good life
Never thought I'd meet you here
It could be love
We could be the way forward
And I know I'll pay for it


And the skeletons in both our closets
Plotted hard to fuck this up
And the old men that I've swindled
Really did believe I was the one
And the ladies lunching have their stories about
When you passed through town
But that was all before I locked it down

Now you hang from my lips
Like the Gardens of Babylon
With your boots beneath my bed
Forever is the sweetest con


I've had some tricks up my sleeve
Takes one to know one
You're a cowboy like me


And I'm never gonna love again
I'm never gonna love again
I'm never gonna love again`,coverArt:"https://images.genius.com/3e354c719fe236ab4a75adc6ea4c7fca.1000x1000x1.png"},{songTitle:"Cruel Summer by Taylor Swift",lyrics:`(Yeah, yeah, yeah, yeah)


Fever dream high in the quiet of the night
You know that I caught it (Oh yeah, you're right, I want it)
Bad, bad boy, shiny toy with a price
You know that I bought it (Oh yeah, you're right, I want it)


Killing me slow, out the window
I'm always waiting for you to be waiting below
Devils roll the dice, angels roll their eyes
What doesn't kill me makes me want you more

And it's new, the shape of your body
It's blue, the feeling I've got
And it's ooh, whoa oh
It's a cruel summer
It's cool, that's what I tell 'em
No rules in breakable heaven
But ooh, whoa oh
It's a cruel summer
With you


Hang your head low in the glow of the vending machine
I'm not dying (Oh yeah, you're right, I want it)
We say that we'll just screw it up in these trying times
We're not trying (Oh yeah, you're right, I want it)


So cut the headlights, summer's a knife
I'm always waiting for you just to cut to the bone
Devils roll the dice, angels roll their eyes
And if I bleed, you'll be the last to know


Oh, it's new, the shape of your body
It's blue, the feeling I've got
And it's ooh, whoa oh
It's a cruel summer
It's cool, that's what I tell 'em
No rules in breakable heaven
But ooh, whoa oh
It's a cruel summer
With you
Related Songs
I'm drunk in the back of the car
And I cried like a baby coming home from the bar (Oh)
Said, "I'm fine," but it wasn't true
I don't wanna keep secrets just to keep you
And I snuck in through the garden gate
Every night that summer just to seal my fate (Oh)
And I scream, "For whatever it's worth
I love you, ain't that the worst thing you ever heard?"
He looks up, grinning like a devil


It's new, the shape of your body
It's blue, the feeling I've got
And it's ooh, whoa oh
It's a cruel summer
It's cool, that's what I tell 'em
No rules in breakable heaven
But ooh, whoa oh
It's a cruel summer
With you


I'm drunk in the back of the car
And I cried like a baby coming home from the bar (Oh)
Said, "I'm fine," but it wasn't true
I don't wanna keep secrets just to keep you
And I snuck in through the garden gate
Every night that summer just to seal my fate (Oh)
And I scream, "For whatever it's worth
I love you, ain't that the worst thing you ever heard?"
(Yeah, yeah, yeah, yeah)`,coverArt:"https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"},{songTitle:"Dancing with Our Hands Tied by Taylor Swift",lyrics:`I, I loved you in secret
First sight, yeah, we love without reason
Oh, twenty-five years old
Oh, how were you to know? And
My, my love had been frozen
Deep blue, but you painted me golden
Oh, and you held me close
Oh, how was I to know? I\u2013


Could've spent forever with your hands in my pockets
Picture of your face in an invisible locket
You said there was nothing in the world that could stop it
I had a bad feeling
And darling, you had turned my bed into a sacred oasis
People started talking, putting us through our paces
I knew there was no one in the world who could take it
I had a bad feeling

But we were dancing
Dancing with our hands tied, hands tied
Yeah, we were dancing
Like it was the first time, first time
Yeah, we were dancing
Dancing with our hands tied, hands tied
Yeah, we were dancing
And I had a bad feeling
But we were dancing


I, I loved you in spite of
Deep fears that the world would divide us
So, baby, can we dance?
Oh, through an avalanche? And
Say, say that we got it
I'm a mess, but I'm the mess that you wanted
Oh, 'cause it's gravity
Oh, keeping you with me, I\u2013


Could've spent forever with your hands in my pockets
Picture of your face in an invisible locket
You said there was nothing in the world that could stop it
I had a bad feeling

But we were dancing
Dancing with our hands tied, hands tied
Yeah, we were dancing
Like it was the first time, first time
Yeah, we were dancing
Dancing with our hands tied, hands tied
Yeah, we were dancing
(Knew we had our hands tied)
And I had a bad feeling
But we were dancing


I'd kiss you as the lights went out
Swaying as the room burned down
I'd hold you as the water rushes in
If I could dance with you again
I'd kiss you as the lights went out
Swaying as the room burned down
I'd hold you as the water rushes in
If I could dance with you again (Again)


Dancing with our hands tied, hands tied
Oh, yeah, we were dancing
Like it was the first time, first time (First time, first time)
Yeah, we were dancing (Oh)
Dancing with our hands tied, hands tied
(Dancing with our hands tied)
Yeah, we were dancing (Ooh)
And I had a bad feeling (Had a bad feeling)
But we were dancing

(Ooh-ooh, ooh-ooh)
Hands tied, hands tied (Dancing)`,coverArt:"https://images.genius.com/d6eba083b40fcec8b16ab1b4489fe057.1000x1000x1.png"},{songTitle:"Daylight by Taylor Swift",lyrics:`My love was as cruel as the cities I lived in
Everyone looked worse in the light
There are so many lines that I've crossed unforgiven
I'll tell you the truth, but never goodbye


I don't wanna look at anything else now that I saw you
I don't wanna think of anything else now that I thought of you
I've been sleeping so long in a 20-year dark night
And now I see daylight, I only see daylight

Luck of the draw only draws the unlucky
And so I became the butt of the joke
I wounded the good and I trusted the wicked
Clearing the air, I breathed in the smoke
Maybe you ran with the wolves and refused to settle down
Maybe I've stormed out of every single room in this town
Threw out our cloaks and our daggers because it's morning now
It's brighter now, now


I don't wanna look at anything else now that I saw you
(I can never look away)
I don't wanna think of anything else now that I thought of you
(Things will never be the same)
I've been sleeping so long in a 20-year dark night
(Now I'm wide awake)
And now I see daylight (Daylight), I only see daylight (Daylight)
I only see daylight, daylight, daylight, daylight
I only see daylight, daylight, daylight, daylight


And I can still see it all (In my mind)
All of you, all of me (Intertwined)
I once believed love would be (Black and white)
But it's golden (Golden)
And I can still see it all (In my head)
Back and forth from New York (Sneaking in your bed)
I once believed love would be (Burning red)
But it's golden
Like daylight, like daylight
Like daylight, daylight

I don't wanna look at anything else now that I saw you
(I can never look away)
And I don't wanna think of anything else now that I thought of you
(Things will never be the same)
I've been sleeping so long in a 20-year dark night
(Now I'm wide awake)
And now I see daylight (I see daylight), I only see daylight (Ah)
I only see daylight, daylight, daylight, daylight
I only see daylight, daylight, daylight, daylight (Ah)
(And I can still see it all)
I only see daylight, daylight, daylight, daylight
(And I can still see it all, back and forth from New York)
I only see daylight, daylight, daylight, daylight
(I once believed love would be burning red)


Like daylight
It's golden like daylight
You gotta step into the daylight and let it go
Just let it go, let it go

I wanna be defined by the things that I love
Not the things I hate
Not the things I'm afraid of, I'm afraid of
Or the things that haunt me in the middle of the night
I, I just think that
You are what you love`,coverArt:"https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"},{songTitle:"Daylight (Live from Paris) by Taylor Swift",lyrics:`My love was as cruel as the cities I lived in
Everyone looked worse in the\u2005light
There\u2005are so many\u2005lines that I've crossed unforgiven
I'll tell\u2005you the truth, but never goodbye


I don't wanna look at anything else now that I saw you
I don't wanna think of anything else now that I thought of you
Been sleeping so long in a twenty-year dark night
But now I see daylight
I only see daylight

Luck of the draw only draws the unlucky
So I became the butt of the joke
I wounded the good and I trusted the wicked
Clearing the air, I breathed in the smoke
Maybe you ran with the wolves and refused to settle down
Maybe I've stormed out of every single room in this town
Threw out our cloaks and our daggers because it's morning now
It's brighter now, now


I don't wanna look at anything else now that I saw you
(I can never look away)
I don't wanna think of anything else now that I thought of you
(Things I'm never gonna say)
Been sleeping so long in a twenty-year dark night
(Now I'm wide awake)
But now I see daylight
I only see daylight
I only see daylight, daylight, daylight, daylight
I only see daylight, daylight, daylight, daylight


And I can still see it all in my mind
All of you, all of me intertwined
I once believed love would be black and white
But it's golden golden
And I can still see it all in my head
Back and forth from New York, sneaking in your bed
I once believed love would be burning red
But it's golden
Like daylight, like daylight
Like daylight, like daylight

I don't wanna look at anything else now that I saw you
(I can never look away)
I don't wanna think of anything else now that I thought of you
(Things I'm never gonna say)
Been sleeping so long in a twenty-year dark night
(Now I'm wide awake)
But now I see daylight
I only see daylight
I only see daylight, daylight, daylight, daylight
I only see daylight, daylight, daylight, daylight
I only see daylight, daylight, daylight, daylight
I only see daylight, daylight, daylight, daylight


You gotta step into the daylight and let it go
Just let it go, let it go`,coverArt:"https://images.genius.com/d0fc95b1683e2e5bdd905b4d2f21f305.512x512x1.jpg"},{songTitle:"Dear John by Taylor Swift",lyrics:`Long were the nights when
My days once revolved around you
Counting my footsteps
Praying the floor won't fall through... again
My mother accused me of losing my mind
But I swore I was fine
You paint me a blue sky
Then go back and turn it to rain
And I lived in your chess game
But you changed the rules everyday
Wonderin' which version of you I might get on the phone, tonight
Well, I stopped pickin' up and this song is to let you know why

Dear John, I see it all now that you're gone
Don't you think I was too young to be messed with?
The girl in the dress cried the whole way home
I should've known


Well, maybe it's me
And my blind optimism to blame
Or maybe it's you and your sick need
To give love and take it away
And you'll add my name to your long list of traitors
Who don't understand
And I look back in regret how I ignored when they said
"Run as fast as you can"


Dear John, I see it all now that you're gone
Don't you think I was too young to be messed with?
The girl in the dress cried the whole way home
Dear John, I see it all now, it was wrong
Don't you think nineteen's too young
To be played by your dark, twisted games
When I loved you so?
I should've known

You are an expert at sorry
And keeping lines blurry
Never impressed by me acing your tests
All the girls that you've run dry have tired lifeless eyes
'Cause you burned them out
But I took your matches
Before fire could catch me
So don't look now
I'm shining like fireworks
Over your sad empty town, yeah
Oh, oh, oh, oh, oh, oh


Dear John, I see it all now that you're gone
Don't you think I was too young to be messed with?
The girl in the dress cried the whole way home
I see it all now that you're gone
Don't you think I was too young to be messed with?
The girl in the dress wrote you a song
You should've known


You should've known
Don't you think I was too young?
You should've known`,coverArt:"https://images.genius.com/d04f0a5d76810e4bc7c6d5f8e261bd91.1000x1000x1.jpg"},{songTitle:"Dear John (Live/2011) by Taylor Swift",lyrics:`Long were the nights when
My days once revolved around you
Counting my footsteps
Praying the floor won't\u2005fall\u2005through... again
And my\u2005mother accused me of losing my\u2005mind
But I swore I was fine
You paint me a blue sky
Then go back and turn it to rain
And I lived in your chess game
But you changed your rules everyday
Wonderin' which version of you I might get on the phone, tonight
Well I stopped pickin' up and this song is to let you know why

Dear John, I see it all now that you're gone
Don't you think I was too young to be messed with?
The girl in the dress cried the whole way home
I shoulda' known


Well maybe it's me
And my blind optimism to blame
Or maybe it's you and your sick need
To give love and take it away
And you'll add my name to your long list of traitors
Who don't understand
And I look back in regret how I ignored when they said
"Run as fast as you can"


Dear John, I see it all now that you're gone
Don't you think I was too young to be messed with?
The girl in the dress cried the whole way home
Dear John, I see it all now, it was wrong
Don't you think nineteen's too young
To be played by your dark, twisted games
When I loved you so?
I shoulda' known

You are an expert at sorry
And keeping the lines blurry
Never impressed by me acing your tests
All the girls that you've run dry have tired lifeless eyes
'Cause you burned them out
But I took your matches
Before fire could catch me
So don't look now
I'm shining like fireworks
Over your sad empty town, yeah-yeah
Oh, oh, oh, oh, oh, oh


Dear John, I see it all now that you're gone
Don't you think I was too young to be messed with?
The girl in the dress cried the whole way home


I see it all now that you're gone
Don't you think I was too young to be messed with?
The girl in the dress
Wrote you a song, you shoulda' known
Don't you think I was too young?
You shoulda' known`,coverArt:"https://images.genius.com/6510355b9fa1e35fa7e939852c7405d0.900x900x1.jpg"},{songTitle:"Death by a Thousand Cuts by Taylor Swift",lyrics:`My, my, my, my
My, my, my, my
My, my, my, my
My, my, my, my
My, my, my, my
My, my, my, my
My, my, my, my
My, my, my, my


Saying goodbye is death by a thousand cuts
Flashbacks waking me up
I get drunk, but it's not enough
\u2019Cause the morning comes and you're not my baby
I look through the windows of this love
Even though we boarded them up
Chandelier's still flickering here
\u2019Cause I can't pretend it's okay when it's not
It's death by a thousand cuts

I dress to kill my time, I take the long way home
I ask the traffic lights if it'll be alright
They say, "I don't know"
And what once was ours is no one's now
I see you everywhere, the only thing we share
Is this small town
You said it was a great love, one for the ages
But if the story\u2019s over, why am I still writing pages?


\u2019Cause saying goodbye is death by a thousand cuts
Flashbacks waking me up
I get drunk, but it's not enough
\u2019Cause the morning comes and you're not my baby
I look through the windows of this love
Even though we boarded them up
Chandelier's still flickering here
'Cause I can\u2019t pretend it's okay when it's not
It's death by a thousand cuts


My heart, my hips, my body, my love
Tryna find a part of me that you didn't touch
Gave up on me like I was a bad drug
Now I'm searching for signs in a haunted club
Our songs, our films, united we stand
Our country, guess it was a lawless land
Quiet my fears with the touch of your hand
Paper cut stings from our paper-thin plans
My time, my wine, my spirit, my trust
Tryna find a part of me you didn't take up
Gave you so much, but it wasn't enough
But I'll be alright, it's just a thousand cuts

I get drunk, but it's not enough
'Cause you're not my baby
I look through the windows of this love
Even though we boarded them up
Chandelier's still flickering here
'Cause I can't pretend it's okay when it's not
No, it's not
It's death by a thousand cuts (You didn't touch)


Tryna find a part of me that you didn't touch
My body, my love, my trust (It's death by a thousand cuts)
But it wasn't enough, it wasn't enough, no, no


I take the long way home
I ask the traffic lights if it'll be alright
They say, "I don't know"`,coverArt:"https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"},{songTitle:"Death by a Thousand Cuts (Live from Paris) by Taylor Swift",lyrics:`Saying goodbye is death by a thousand cuts
Flashbacks waking me up
Get drunk, but it's not\u2005enough
'Cause\u2005the morning comes\u2005and you're not my baby
I look\u2005through the windows of this love
Even though we boarded them\u205Fup
Chandelier's\u205Fstill\u205Fflickering here
'Cause I\u205Fcan't pretend it's\u205Fokay when it's not
It's death by a thousand cuts

I dress to kill my time, I take the long way home
I ask the traffic lights if it'll be alright
They say, "I don't know"
And what once was ours is no one's now
I see you everywhere, the only thing we share
Is this small town
You said it was a great love, one for the ages
So  if the story's over, why am I still writing pages?


'Cause saying goodbye is death by a thousand cuts
Flashbacks waking me up
Get drunk, but it's not enough
'Cause the morning comes and you're not my baby
I look through the windows of this love
Even though we boarded them up
Chandelier's still flickering here
'Cause I can't pretend it's okay when it's not
It's death by a thousand cuts


My heart, my hips, my body, my love
Tryna find a part of me that you didn't touch
Gave up on me like I was a bad drug
Now I'm searching for signs in a haunted club
Our songs, our films, united we stand
Our country, guess it was a lawless land
Quiet my fears with the touch of your hand
Paper cut stings from our paper-thin plans
My time, my wine, my spirit, my trust
Tryna find a part of me you didn't take up
Gave you too much, but it wasn't enough
But I'll be alright, it's just a thousand cuts

Get drunk, but it's not enough
'Cause you're not my baby
I look through the windows of this love
Even though we boarded them up
Chandelier's still flickering here
'Cause I can't pretend it's okay when it's not
No, it's not
It's death by a thousand cuts


Part of me that you didn't touch
My body, my love, my trust
But it wasn't enough, it wasn't enough, no, no


I take the long way home
I ask the traffic lights if it'll be alright
They say, "I don't know"`,coverArt:"https://images.genius.com/f61a15225f28b69f5ee8e5b3c92e797d.512x512x1.jpg"},{songTitle:"Delicate by Taylor Swift",lyrics:`This ain't for the best
My reputation's never been worse, so
You must like me for me...
We can't make
Any promises now, can we, babe?
But you can make me a drink

Dive bar on the East Side, where you at?
Phone lights up my nightstand in the black
Come here, you can meet me in the back
Dark jeans and your Nikes, look at you
Oh damn, never seen that color blue
Just think of the fun things we could do
('Cause I like you)

This ain't for the best
My reputation's never been worse, so
You must like me for me...
(Yeah, I want you)
We can't make
Any promises now, can we, babe?
But you can make me a drink


Is it cool that I said all that?
Is it chill that you're in my head?
'Cause I know that it's delicate (Delicate)
Is it cool that I said all that?
Is it too soon to do this yet?
'Cause I know that it's delicate
Isn't it? Isn't it? Isn't it?
Isn't it?
Isn't it? Isn't it? Isn't it?
Isn't it... delicate?


Third floor on the West Side, me and you
Handsome, you're a mansion with a view
Do the girls back home touch you like I do?
Long night, with your hands up in my hair
Echoes of your footsteps on the stairs
Stay here, honey, I don't wanna share
('Cause I like you)

This ain't for the best
My reputation's never been worse, so
You must like me for me\u2026
(Yeah, I want you)
We can't make
Any promises now, can we, babe?
But you can make me a drink


Is it cool that I said all that?
Is it chill that you're in my head?
'Cause I know that it's delicate (Delicate)
Is it cool that I said all that?
Is it too soon to do this yet?
'Cause I know that it's delicate
Isn't it? Isn't it? Isn't it?
Isn't it?
Isn't it? Isn't it? Isn't it?
Isn't it delicate?


Sometimes I wonder when you sleep
Are you ever dreaming of me?
Sometimes when I look into your eyes
I pretend you're mine, all the damn time
'Cause I like you

Is it cool that I said all that?
Is it chill that you're in my head?
'Cause I know that it's delicate (Delicate)
(Yeah, I want you)
Is it cool that I said all that?
Is it too soon to do this yet?
'Cause I know that it's delicate (Delicate)
('Cause I like you)
Is it cool that I said all that?
Isn't it? Isn't it? Isn't it? Isn't it?
Is it chill that you're in my head?
Isn't it? Isn't it? Isn't it? Isn't it?
'Cause I know that it's delicate
Isn't it? Isn't it? Isn't it? Isn't it?
(Yeah, I want you)
Is it cool that I said all that?
Isn't it? Isn't it? Isn't it? Isn't it?
Is it too soon to do this yet?
Isn't it? Isn't it? Isn't it?
'Cause I know that it's delicate
Isn't it delicate?`,coverArt:"https://images.genius.com/353ff5b58f6b2b376c324c6da846d21a.850x850x1.jpg"},{songTitle:"Don't Blame Me by Taylor Swift",lyrics:`Don't blame me, love made me crazy
If it doesn't, you ain't doin' it right
Lord, save me, my drug is my baby
I'll be usin' for the rest of my life


I've been breakin' hearts a long time
And toyin' with them older guys
Just playthings for me to use
Something happened for the first time
In the darkest little paradise
Shaking, pacin', I just need you

For you, I would cross the line
I would waste my time
I would lose my mind
They say, "She's gone too far this time"


Don't blame me, love made me crazy
If it doesn't, you ain't doin' it right
Lord, save me, my drug is my baby
I'll be usin' for the rest of my life
Don't blame me, love made me crazy
If it doesn't, you ain't doin' it right
Oh, Lord, save me, my drug is my baby
I'll be usin' for the rest of my life


My name is whatever you decide
And I'm just gonna call you mine
I'm insane, but I'm your baby (Your baby)
Echoes (Echoes) of your name inside my mind
Halo hiding my obsession
I once was poison ivy, but now I'm your daisy


And baby, for you
I would (I would) fall from grace
Just to (Just to) touch your face
If you (If you) walk away, I'd beg you on my knees to stay
Related Songs
Don't blame me, love made me crazy
If it doesn't, you ain't doin' it right
Lord, save me, my drug is my baby
I'll be usin' for the rest of my life (Yeah, ooh)
Don't blame me, love made me crazy
If it doesn't, you ain't doin' it right (Doin' it right)
Oh, Lord, save me, my drug is my baby
I'll be usin' for the rest of my life


I get so high, oh
Every time you're, every time you're lovin' me
You're lovin' me
Trip of my life, oh
Every time you're, every time you're touchin' me
You're touchin' me
Every time you're, every time you're lovin' me


Oh, Lord, save me, my drug is my baby
I'll be usin' for the rest of my life
(Usin' for the rest of my life, oh-woah-oh-oh)


Don't blame me, love made me crazy
If it doesn't, you ain't doin' it right (Doin' it right, no)
Lord, save me, my drug is my baby
I'll be usin' for the rest of my life, oh-oh
Don't blame me, love made me crazy (Oh-oh-oh)
If it doesn't, you ain't doin' it right (You ain't doin' it right)
Oh, Lord, save me, my drug is my baby
I'll be usin' for the rest of my life (I'll be usin', I'll be usin')

I get so high, oh
Every time you're, every time you're lovin' me
You're lovin' me
Oh, Lord, save me, my drug is my baby
I'll be usin' for the rest of my life`,coverArt:"https://images.genius.com/d6eba083b40fcec8b16ab1b4489fe057.1000x1000x1.png"},{songTitle:"Don't You (Taylor's Version) [From the Vault] by Taylor Swift",lyrics:`Hey, I knew I'd run into you somewhere
It's been a while, I didn't mean to stare
I heard she's nothin' like me
I'm sure she'll make you happy


But don't you, don't you
Smile at me and ask me how I've been
Don't you say you've
Missed me if you don't want me again
You don't know how much I feel I love you still
So why don't you, don't you?

Ah, ah, ah, ah
Ah, ah, ah


Sometimes, I really wish that I could hate you
I've tried, but that's just somethin' I can't do
My heart knows what the truth is
I swore I wouldn't do this


But don't you, don't you
Smile at me and ask me how I've been
Don't you say you've
Missed me if you don't want me again
You don't know how much I feel I love you still
So why don't you, don't you?


So I'll walk out of here tonight
Try to go on with my life
And you can say we're still friends
(But I don't wanna pretend)
So if I see you again


Don't you (Don't you), don't you
Smile at me and ask me how I've been
Don't you (Don't you) say you've
Missed me if you don't want me again
You don't (You don't) know how much I feel I love you still
So why don't you, don't you?

Ah, ah, ah, ah
Don't you (Ah, ah, ah)`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"\u200Bdorothea by Taylor Swift",lyrics:`Hey, Dorothea, do you ever stop and think about me?
When we were younger down in the park
Honey, making a lark of the misery
You got shiny friends since you left town
A tiny screen's the only place I see you now
And I got nothing but well wishes for ya


Ooh, this place is the same as it ever was
Ooh, but you won't like it that way

It's never too late to come back to my side
The stars in your eyes shined brighter in Tupelo
And if you're ever tired of b\u0435ing known for who you know
You know that you'll always know me, Dorothea (Uh-uh)
Dorothea (Ah-ah)


Ooh, you'r\u0435 a queen sellin' dreams, sellin' makeup and magazines
Ooh, from you, I'd buy anything


Hey, Dorothea, do you ever stop and think about me?
When it was calmer, skipping the prom just to piss off your mom and her pageant schemes
And damn, Dorothea, they all wanna be ya
But are you still the same soul I met under the bleachers? Well


Ooh, I guess I'll never know
Ooh, and you'll go on with the show


But it's never too late to come back to my side
The stars in your eyes shined brighter in Tupelo
And if you're ever tired of being known for who you know
You know, you'll always know me, Dorothea (Uh-uh)
Dorothea (Ah-ah)

Ooh, ooh
Ooh-woo-ooh-ooh-ooh, ooh-ooh-ooh-ooh
Ooh, ooh
Ooh-woo-ooh-ooh-ooh, ooh-ooh-ooh
Dorothea (Ah-ah-ah)
Ah-ah
Ooh`,coverArt:"https://images.genius.com/3e354c719fe236ab4a75adc6ea4c7fca.1000x1000x1.png"},{songTitle:"Dress by Taylor Swift",lyrics:`Our secret moments in a crowded room
They got no idea about me and you
There is an indentation in the shape of you
Made your mark on me, a golden tattoo


All of this silence and patience, pining and anticipation
My hands are shaking from holding back from you
Ha, ah, ah
All of this silence and patience, pining and desperately waiting
My hands are shaking from all this
Ah, ha, ha, ha-ah

Say my name and everything just stops
I don't want you like a best friend
Only bought this dress so you could take it off
Take it off, ha, ha, ha-ah
Carve your name into my bedpost
\u2019Cause I don't want you like a best friend
Only bought this dress so you could take it off
Take it off, ha, ha, ha-ah


Inescapable, I'm not even gonna try
And if I get burned, at least we were electrified
I\u2019m spilling wine in the bathtub
You kiss my face and we're both drunk
Everyone thinks that they know us
But they know nothin' about


All of this silence and patience, pining and anticipation
My hands are shaking from holding back from you
Ha, ah, ah
All of this silence and patience, pining and desperately waiting
My hands are shaking from all this
Ah, ha, ha, ha-ah

Say my name and everything just stops
I don't want you like a best friend
Only bought this dress so you could take it off
Take it off, ha, ha, ha-ah
Carve your name into my bedpost
'Cause I don't want you like a best friend
Only bought this dress so you could take it off
Take it off, ha, ha...


Ha-ah-ah, ha-ah-ah, ha-ah-ah-ah
Only bought this dress so you could take it off
Ha-ah-ah, ha-ah-ah, ha-ah-ah-ah
Only bought this dress so you could take it off


Flashback when you met me
Your buzzcut and my hair bleached
Even in my worst times, you could see the best in me
Flashback to my mistakes
My rebounds, my earthquakes
Even in my worst lies, you saw the truth in me
And I woke up just in time
Now I wake up by your side
My one and only, my lifeline
I woke up just in time
Now I wake up by your side
My hands shake, I can't explain this
Ah, ha, ha, ha-ah

Say my name and everything just stops
I don't want you like a best friend
Only bought this dress so you could take it off
Take it off, ha, ha, ha-ah
Carve your name into my bedpost
\u2019Cause I don\u2019t want you like a best friend
Only bought this dress so you could take it off
Take it off, ha, ha, ha-ah


There is an indentation in the shape of you
Only bought this dress so you could take it off
You made your mark on me, golden tattoo
Only bought this dress so you could take it off`,coverArt:"https://images.genius.com/d6eba083b40fcec8b16ab1b4489fe057.1000x1000x1.png"},{songTitle:"Drops of Jupiter (Live/2011) by Taylor Swift",lyrics:`You know... You guys have a lot of amazing bands from this part of the world, did you know that?


Now that he's back in the atmosphere
With drops of Jupiter in his hair, hey, hey
He walks like summer and talks like rain
Reminds me that there's time to change, hey, hey
Since his return from the stay on the moon
He listens like spring and he talks like June, hey, hey

Tell me, did you sail across the sun?
Did you make it to the Milky Way
To see the lights are faded
And that heaven is overrated?
Tell me, did you fall for a shooting star?
One without a permanent scar
And did you miss me
While you were looking for yourself out there?


Now that he's back from that soul vacation
Tracing his way through the constellation, hey, hey
He checks out Mozart while he does Tae-Bo
Reminds me that there's room to grow, hey, hey
Now that he's back in the atmosphere
I'm afraid that he might think of me as
Plain ol' Jane told a story about a man
Who is too afraid to fly so he never did land


Tell me, did the wind sweep you off your feet?
Did you finally get the chance
To dance along in the light of day
And head back to the Milky Way?
And tell me, did Venus blow your mind?
Was it everything you wanted to find?
And did you miss me
While you were looking for yourself out there?

Can you imagine no love, pride, deep-fried chicken
Your best friend always sticking up for you
Even when I know you're wrong?
Can you imagine no first dance, freeze dried romance
Five-hour phone conversation
The best soy latte that you ever had, and me?


Tell me, did the wind sweep you off your feet?
Did you finally get the chance
To dance along the light of day
And head back to the Milky Way?
And tell me, did you fall for a shooting star?
One without a permanent scar?
And did you miss me while
You were looking for yourself?


Na na na na na na, na na na na na na na, oh
Na na na na na na, na na na na na na na, oh
Na na na na na na, na na na na na na na, oh
Na na na na na na, na na na na na na na, oh


Can you imagine no love, pride, deep-fried chicken
Your best friend always sticking up for you
Even when I know you're wrong?
Can you imagine no first dance, freeze dried romance
Five-hour phone conversation
The best soy latte that you ever had, and me?`,coverArt:"https://images.genius.com/6510355b9fa1e35fa7e939852c7405d0.900x900x1.jpg"},{songTitle:"Enchanted by Taylor Swift",lyrics:`There I was again tonight
Forcing laughter, faking smiles
Same old tired, lonely place
Walls of insincerity
Shifting eyes and vacancy
Vanished when I saw your face
All I can say is it was enchanting to meet you

Your eyes whispered, "Have we met?"
Across the room, your silhouette
Starts to make its way to me
The playful conversation starts
Counter all your quick remarks
Like passing notes in secrecy
And it was enchanting to meet you
All I can say is I was enchanted to meet you

This night is sparkling, don't you let it go
I'm wonderstruck, blushing all the way home
I'll spend forever wondering if you knew
I was enchanted to meet you


The lingering question kept me up
2 a.m., who do you love?
I wonder 'til I'm wide awake
Now I'm pacing back and forth
Wishing you were at my door
I'd open up and you would say
"Hey, it was enchanting to meet you"
All I know is I was enchanted to meet you


This night is sparkling, don't you let it go
I'm wonderstruck, blushing all the way home
I'll spend forever wondering if you knew
This night is flawless, don't you let it go
I'm wonderstruck, dancing around all alone
I'll spend forever wondering if you knew
I was enchanted to meet you



This is me praying that
This was the very first page
Not where the storyline ends
My thoughts will echo your name
Until I see you again
These are the words I held back
As I was leaving too soon
I was enchanted to meet you
Please don't be in love with someone else
Please don't have somebody waiting on you
Please don't be in love with someone else (Ooh)
Please don't have somebody waiting on you (Ooh, oh)


This night is sparkling, don't you let it go
I'm wonderstruck, blushing all the way home
I'll spend forever wondering if you knew
This night is flawless (Please don't be in love with someone else)
Don't you let it go
I'm wonderstruck (Please don't have somebody waiting on you)
Dancing around all alone
I'll spend forever (Please don't be in love with someone else)
Wondering if you knew
I was enchanted to meet you

Please don't be in love with someone else
Please don't have somebody waiting on you`,coverArt:"https://images.genius.com/d04f0a5d76810e4bc7c6d5f8e261bd91.1000x1000x1.jpg"},{songTitle:"Enchanted (Live/2011) by Taylor Swift",lyrics:`There I was again tonight
Forcing laughter, faking smiles
Same old tired, lonely place
Walls of insincerity, shifting\u2005eyes\u2005and vacancy
Vanished when\u2005I saw your face
All I can\u2005say is, it was enchanting to meet you


Your eyes whispered,\u205F"Have\u205Fwe\u205Fmet?"
Across the room\u205Fyour silhouette
Starts to\u205Fmake it\u2019s way to me
The playful conversation starts
Counter all your quick remarks
Like passing notes in secrecy
And it was enchanting to meet you
All I can say is, I was enchanted to meet you

This night is sparkling
Don't you let it go
I'm wonderstruck
Blushing all the way home
I'll spend forever
Wondering if you knew
I was enchanted to meet you


The lingering question kept me up
2AM, who do you love?
I wonder 'til I'm wide awake
And now I'm pacing back and forth
Wishing you were at my door
I'd open up and you would say, "Hey"
It was enchanting to meet you
All I know is I was enchanted to meet you (Ooh-ooh)


This night is sparkling
Don't you let it go
I'm wonderstruck
Blushing all the way home
I'll spend forever
Wondering if you knew
This night is flawless
Don't you let it go
I'm wonderstruck
Dancing around all alone
I'll spend forever
Wondering if you knew
I was enchanted to meet you

This is me praying that
This was the very first page
Not where the storyline ends
My thoughts will echo your name
Until I see you again
These are the words I held back
As I was leaving too soon
I was enchanted to meet you


Please don't be in love
With someone else
Please don't have somebody waiting on you
Please don't be in love with someone else
Please don't have somebody waiting on you
Please don\u2019t be in love with someone else
Please don\u2019t have somebody waiting on you
(Oh)
Please don\u2019t be in love with someone else (Oh-oh)


This night is sparkling
Don't you let it go
I'm wonderstruck
Blushing all the way home
I'll spend forever
Wondering if you knew
This night is flawless
Don't you let it go
I'm wonderstruck
Dancing around all alone
I'll spend forever
Wondering if you knew
I was enchanted to meet you

Please don't be in love with someone else
Please don't have somebody
Waiting on you`,coverArt:"https://images.genius.com/6510355b9fa1e35fa7e939852c7405d0.900x900x1.jpg"},{songTitle:"End Game by Taylor Swift (Ft. Ed Sheeran & Future)",lyrics:`I wanna be your end game
I wanna be your first string
I wanna be your A-Team (Woah, woah, woah)
I wanna be your end game, end game


Big reputation, big reputation
Ooh, you and me, we got big reputations, ah
And you heard about me, ooh
I got some big enemies (Yeah)
Big reputation, big reputation
Ooh, you and me would be a big conversation, ah (Git, git)
And I heard about you, ooh (Yeah)
You like the bad ones, too

You so dope, don't overdose, I\u2019m so stoked, I need a toast
We do the most, I'm in the Ghost like I'm whippin\u2019 a boat (Boat, boat, boat)
I got a reputation, girl that don't precede me (Yeah)
I'm one call away whenever you need me (Yeah)
I'm in a G5 (Yeah), come to the A-Side (Yeah)
I got a bad boy persona, that's what they like (That's what they like)
You love it, I love it too 'cause you my type (You my type)
You hold me down and I protect you with my life (My life, my life)


I don't wanna touch you (I don\u2019t wanna be)
Just another ex-love (You don\u2019t wanna see)
I don't wanna miss you (I don\u2019t wanna miss you)
Like the other girls do
I don't wanna hurt you (I just wanna be)
Drinking on a beach with (You all over me)
I know what they all say (I know what they all say)
But I ain't tryna play


I wanna be your end game (End game)
I wanna be your first string (First string)
I wanna be your A-Team (A-Team)
I wanna be your end game, end game

Knew her when I was young, reconnected when we were little bit older
Both sprung, I got issues and chips on both of my shoulders
Reputation precedes me, in rumors, I'm knee-deep
The truth is, it\u2019s easier to ignore it, believe me
Even when we'd argue, we'd not do it for long
And you understand the good and bad end up in the song
For all your beautiful traits, and the way you do it with ease
For all my flaws, paranoia, and insecurities
I've made mistakes and made some choices, that's hard to deny
After the storm, something was born on the 4th of July
I've passed days without fun, this end game is the one
With four words on the tip of my tongue, I'll never say it


I don't wanna touch you (I don't wanna be)
Just another ex-love (You don't wanna see)
I don't wanna miss you (I don't wanna miss you)
Like the other girls do
I don't wanna hurt you (I just wanna be)
Drinking on a beach with (You all over me)
I know what they all say (Yeah)
But I ain't tryna play


I wanna be your end game (End game)
I wanna be your first string (Wanna be your first string)
I wanna be your A-Team (A-Team)
I wanna be your end game, end game

Big reputation, big reputation
Ooh, you and me, we got big reputations, ah
And you heard about me, ooh
I got some big enemies, hey
Big reputation, big reputation, yeah
Ooh, you and me would be a big conversation, ah
And I heard about you, ooh
You like the bad ones, too


I hit you like bang
We tried to forget it, but we just couldn't
And I bury hatchets, but I keep maps of where I put 'em
Reputation precedes me
They told you I'm crazy
I swear I don't love the drama, it loves me
And I can't let you go
Your handprints on my soul
It's like your eyes are liquor
It's like your body is gold
You've been callin' my bluff on all my usual tricks (Ooh)
So here's the truth from my red lips (Ah)


I wanna be your end game (End game)
I wanna be your first string (Me and you) (First string)
I wanna be your A-Team (Be your A-Team now) (A-Team)
I wanna be your end game, end game
I wanna be your end game (Oh, I do)
I wanna be your first string (First string)
I wanna be your A-Team (A-Team)
I wanna be your end game, end game`,coverArt:"https://images.genius.com/d6eba083b40fcec8b16ab1b4489fe057.1000x1000x1.png"},{songTitle:"End Game (Solo Version) by Taylor Swift",lyrics:`I wanna be your end game
I wanna be your first string
I wanna be your A-Team
I wanna be your end game, end game


Big reputation, big reputation
Ooh, you and me, we got big reputations, ah
And you heard about me, ooh
I got some big enemies
Big reputation, big reputation
Ooh, you and me would be a big conversation, ah
And I heard about you, ooh
You like the bad ones, too
You like the bad ones, too
You like the bad ones

I don't wanna touch you, I don't wanna be
Just another ex-love you don't wanna see
I don't wanna miss you like the other girls do
I don't wanna hurt you, I just wanna be
Drinking on a beach with you all over me
I know what they all say, yeah
But I ain't tryna play


I wanna be your end game
I wanna be your first string
I wanna be your A-Team
I wanna be your end game, end game


I hit you like bang, we tried to forget it, but we just couldn't
And I bury hatchets, but I keep maps of where I put 'em
Reputation precedes me, they told you I'm crazy
I swear I don't love the drama, it loves me
And I can't let you go, your hand prints on my soul
It's like your eyes are liquor, it's like your body is gold
You've been calling my bluff on all my usual tricks
So here's the truth from my red lips


Big reputation, big reputation
Ooh, you and me, we got big reputations, ah
And you heard about me, ooh
I got some big enemies
Big reputation, big reputation
Ooh, you and me would be a big conversation, ah
And I heard about you, ooh
You like the bad ones, too

I wanna be your end game
I wanna be your first string
I wanna be your A-Team
I wanna be your end game, end game
I wanna be your end game
I wanna be your first string
I wanna be your A-Team
I wanna be your end game, end game`,coverArt:"https://images.genius.com/ea1cffbe47f081def8bc03205d30f5fe.220x220x1.jpg"},{songTitle:"\u200Bepiphany by Taylor Swift",lyrics:`Keep your helmet, keep your life, son
Just a flesh wound, here's your rifle
Crawling up the\u2005beaches\u2005now
"Sir, I think\u2005he's bleeding out"
And some things you\u2005just can't speak about


With you I serve, with you I fall down, down
Watch you breathe in, watch you breathing out, out

Something med school did not cover
Someone's daughter, someone's mother
Holds your hand through plastic now
"Doc, I think she's crashing out"
And some things you just can't speak about


Only twenty minutes to sleep
But you dream of some epiphany
Just one single glimpse of relief
To make some sense of what you've seen


With you I serve, with you I fall down, down (Down)
Watch you breathe in, watch you breathing out, out
With you I serve (With you I serve), with you I fall down (Down), down (Down)
Watch you breathe in (Watch you breathe in), watch you breathing out (Out), out (Out)


Only twenty minutes to sleep
But you dream of some epiphany
Just one single glimpse of relief
To make some sense of what you've seen`,coverArt:"https://images.genius.com/4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png"},{songTitle:"\u200Bepiphany (the long pond studio sessions) by Taylor Swift",lyrics:`Keep your helmet, keep your life, son
Just a flesh wound, here's your rifle
Crawling up the beaches now
"Sir, I think he's bleeding out"
And some things you just can't speak about


With you I serve, with you I fall down, down
Watch you breathe in, watch you breathing out, out

Something med school did not cover
Someone's daughter, someone's mother
Holds your hand through plastic now
"Doc, I think she's crashing out"
And some things you just can't speak about


Only twenty minutes to sleep
But you dream of some epiphany
Just one single glimpse of relief
To make some s\u0435nse of what you've seen


With you I serv\u0435, with you I fall down, down
Watch you breathe in, watch you breathing out, out
With you I serve, with you I fall down, down
Watch you breathe in, watch you breathing out, out


Only twenty minutes to sleep
But you dream of some epiphany
Just one single glimpse of relief
To make some sense of what you've seen
Make sense of what you've seen`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"\u200Bevermore by Taylor Swift (Ft. Bon Iver)",lyrics:`Gray November
I've been down since July
Motion capture
Put me in a bad light
I replay my footsteps on each stepping stone
Trying to find the one where I went wrong
Writing letters
Addressed to the fire


And I was catching my breath
Staring out an open window
Catching my death
And I couldn't be sure
I had a feeling so peculiar
That this pain would be for
Evermore

Hey December
Guess I'm feeling unmoored
Can't remember
What I used to fight for
I rewind th\u0435 tape, but all it does is pause
On th\u0435 very moment all was lost
Sending signals
To be double-crossed


And I was catching my breath
Barefoot in the wildest winter
Catching my death
And I couldn't be sure
I had a feeling so peculiar
That this pain would be for
Evermore
(Evermore)

Can't not think of all the cost
And the things that will be lost
Oh, can we just get a pause?
To be certain, we'll be tall again
Whether weather be the frost
Or the violence of the dog days
I'm on waves, out being tossed
Is there a line that I could just go cross?

And when I was shipwrecked (Can't think of all the cost)
I thought of you (All the things that will be lost now)
In the cracks of light (Can we just get a pause?)
I dreamed of you (To be certain we'll be tall again, if you think of all the costs)
It was real enough (Whether weather be the frost)
To get me through (Or the violence of the dog days)
(Or the violence of the dog days)
(Out on waves, being tossed)
(I'm on waves, out being tossed)
I swear (Is there a line that we can just go cross?)
You were there

And I was catching my breath
Floors of a cabin creaking under my step
And I couldn't be sure
I had a feeling so peculiar
This pain wouldn't be for
Evermore
Evermore
Evermore
This pain wouldn't be for evermore
Evermore`,coverArt:"https://images.genius.com/3e354c719fe236ab4a75adc6ea4c7fca.1000x1000x1.png"},{songTitle:"Everything Has Changed by Taylor Swift (Ft. Ed Sheeran)",lyrics:`(You good to go?)


All I knew this morning when I woke
Is I know something now
Know something now I didn't before
And all I've seen since 18 hours ago
Is green eyes and freckles and your smile
In the back of my mind, making me feel like

I just wanna know you better
Know you better, know you better now
I just wanna know you better
Know you better, know you better now
I just wanna know you better
Know you better, know you better now
I just wanna know you, know you, know you


'Cause all I know is we said, "Hello"
And your eyes look like coming home
All I know is a simple name
Everything has changed
All I know is you held the door
You'll be mine and I'll be yours
All I know since yesterday
Is everything has changed


And all my walls stood tall, painted blue
And I'll take 'em down, take 'em down
And open up the door for you
And all I feel in my stomach is butterflies
The beautiful kind, making up for lost time
Taking flight, making me feel right

I just wanna know you better
Know you better, know you better now
I just wanna know you better
Know you better, know you better now
I just wanna know you better
Know you better, know you better now
I just wanna know you, know you, know you


'Cause all I know is we said, "Hello"
And your eyes look like coming home
All I know is a simple name
Everything has changed
All I know is you held the door
You'll be mine and I'll be yours
All I know since yesterday
Is everything has changed


Come back and tell me why
I'm feeling like I've missed you all this time
And meet me there tonight
And let me know that it's not all in my mind

I just wanna know you better
Know you better, know you better now
I just wanna know you, know you, know you

'Cause all I know is we said, "Hello"
And your eyes look like coming home
All I know is a simple name
Everything has changed
All I know is you held the door
You'll be mine and I'll be yours
All I know since yesterday
Is everything has changed


All I know is we said, "Hello"
So dust off your highest hopes
All I know is pouring rain
And everything has changed
All I know is a new found grace
All my days, I'll know your face
All I know since yesterday
Is everything has changed`,coverArt:"https://images.genius.com/ca73e9144e0d43efda2d762192d3c3a4.1000x1000x1.jpg"},{songTitle:"Everything Has Changed (Remix) by Taylor Swift (Ft. Ed Sheeran)",lyrics:`(You good to go?)


All I knew this morning when I woke
Is I know somethin' now
Know\u2005somethin'\u2005now I didn't\u2005before
And all I've seen since 18\u2005hours ago
Is green eyes and freckles and your smile
In the\u205Fback\u205Fof\u205Fmy mind, makin'\u205Fme feel like

I\u205Fjust wanna know you better
Know you better, know you better now
I just wanna know you better
Know you better, know you better now
I just wanna know you better
Know you better, know you better now
I just wanna know you, know you, know you


'Cause all I know is we said, "Hello"
And your eyes look like coming home
All I know is a simple name
Everything has changed
All I know is you held the door
You'll be mine and I'll be yours
All I know since yesterday
Is everything has changed


And all my walls stood tall, painted blue
Well I'll take 'em down, take 'em down
And open up the door for you
And all I feel in my stomach is butterflies
The beautiful kind, makin' up for lost time
Takin' flight, makin' me feel right-like

I just wanna know you better
Know you better, know you better now
I just wanna know you better
Know you better, know you better now
I just wanna know you better
Know you better, know you better now
I just wanna know you, know you, know you


'Cause all I know is we said, "Hello"
And your eyes look like coming home
All I know is a simple name
And everything has changed
All I know is you held the door
You'll be mine and I'll be yours
All I know since yesterday
Is everything has changed


Come back and tell me why
I'm feeling like I've missed you all this time
And meet me there tonight
And let me know that it's not all in my mind


I just wanna know you better
Know you better, know you better now
I just wanna know you, know you, know you

'Cause all I know is we said, "Hello"
And your eyes look like coming home
All I know is a simple name
And everything has changed
All I know is you held the door
You'll be mine and I'll be yours
All I know since yesterday
Is everything has changed


All I know is we said, "Hello"
So dust off your highest hopes
All I know is pouring rain
And everything has changed
All I know is a new found grace
All my days, I'll know your face
All I know since yesterday
Is everything has changed`,coverArt:"https://images.genius.com/7b294fda7fc04db7049742dcc9d90928.640x640x1.jpg"},{songTitle:"Everything Has Changed (Taylor's Version) by Taylor Swift (Ft. Ed Sheeran)",lyrics:`(You good to go?)


All I knew this morning when I woke
Is I know something now
Know something now I didn't before
And all I've seen since 18 hours ago
Is green eyes and freckles and your smile
In the back of my mind, making me feel like

I just wanna know you better
Know you better, know you better now
I just wanna know you better
Know you better, know you better now
I just wanna know you better
Know you better, know you better now
I just wanna know you, know you, know you


'Cause all I know is we said, "Hello"
And your eyes look like coming home
All I know is a simpl\u0435 name
Everything has changed
All I know is you h\u0435ld the door
You'll be mine and I'll be yours
All I know since yesterday
Is everything has changed


And all my walls stood tall, painted blue
And I'll take 'em down, take 'em down
And open up the door for you
And all I feel in my stomach is butterflies
The beautiful kind, makin' up for lost time
Takin' flight, making me feel like

I just wanna know you better
Know you better, know you better now
I just wanna know you better
Know you better, know you better now
I just wanna know you better
Know you better, know you better now
I just wanna know you, know you, know you


'Cause all I know is we said, "Hello"
And your eyes look like coming home
All I know is a simple name
Everything has changed
All I know is you held the door
You'll be mine and I'll be yours
All I know since yesterday
Is everything has changed


Come back and tell me why
I'm feeling like I've missed you all this time
And meet me there tonight
And let me know that it's not all in my mind


I just wanna know you better
Know you better, know you better now
I just wanna know you, know you, know you

All I know is we said, "Hello"
And your eyes look like coming home
All I know is a simple name
Everything has changed
All I know is you held the door
And you'll be mine and I'll be yours
All I know since yesterday
Is everything has changed


All I know is we said, "Hello"
So dust off your highest hopes
All I know is pouring rain
And everything has changed
All I know is a new found grace
All my days, I'll know your face
All I know since yesterday
Is everything has changed`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"\u200Bexile by Taylor Swift (Ft. Bon Iver)",lyrics:`I can see you standing, honey
With his arms around your body
Laughin', but the joke's not\u2005funny\u2005at all
And it\u2005took you five whole minutes
To pack\u2005us up and leave me with it
Holdin' all this love out here in the hall


I think I've seen this film before
And I didn't like the ending
You're not my homeland anymore
So what am I defending now?
You were my town, now I'm in exile, seein' you out
I think I've seen this film before

Ooh, ooh, ooh


I can see you starin', honey
Like he's just your understudy
Like you'd get your knuckles bloody for me
Second, third, and hundredth chances
Balancin' on breaking branches
Those eyes add insult to injury


I think I've seen this film before
And I didn't like the ending
I'm not your problem anymore
So who am I offending now?
You were my crown, now I'm in exile, seein' you out
I think I've seen this film before
So I'm leaving out the side door

So step right out, there is no amount
Of crying I can do for you
All this time
We always walked a very thin line
You didn't even hear me out (You didn't even hear me out)
You never gave a warning sign (I gave so many signs)
All this time
I never learned to read your mind (Never learned to read my mind)
I couldn't turn things around (You never turned things around)
'Cause you never gave a warning sign (I gave so many signs)
So many signs, so many signs
You didn't even see the signs

I think I've seen this film before
And I didn't like the ending
You're not my homeland anymore
So what am I defending now?
You were my town, now I'm in exile, seein' you out
I think I've seen this film before
So I'm leavin' out the side door


So step right out, there is no amount
Of crying I can do for you
All this time
We always walked a very thin line
You didn't even hear me out (Didn't even hear me out)
You never gave a warning sign (I gave so many signs)
All this time
I never learned to read your mind (Never learned to read my mind)
I couldn't turn things around (You never turned things around)
'Cause you never gave a warning sign (I gave so many signs)
You never gave a warning sign (All this time)
(So many times) I never learned to read your mind
(So many signs) I couldn't turn things around (I couldn't turn things around)
'Cause you never gave a warning sign (You never gave a warning sign)
You never gave a warning sign
Ah, ah`,coverArt:"https://images.genius.com/4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png"},{songTitle:"\u200Bexile (the long pond studio sessions) by Taylor Swift (Ft. Bon Iver)",lyrics:`I can see you standing, honey
With his arms around your body
Laughin', but the joke's not funny at all
And it took you five whole minutes
To pack us up and leave me with it
Holdin' all this love out here in the hall


I think I've seen this film before
And I didn't like the ending
You're not my homeland anymore
So what am I defending now?
You were my town, now I'm in exile, seein' you out
I think I've seen this film before

Ooh-ooh, ooh-ooh, ooh-ooh


I can see you starin', honey
Like he's just your understudy
Like you'd get your knuckles bloody for me
Second, third, and hundredth chances
Balancin' on br\u0435aking branches
Those ey\u0435s add insult to injury


I think I've seen this film before
And I didn't like the ending
I'm not your problem anymore
So who am I offending now?
You were my crown, now I'm in exile, seein' you out
I think I've seen this film before
So I'm leaving out the side door


So step right out, there is no amount
Of crying I can do for you
All this time
We always walked a very thin line
You didn't even hear me out
You never gave no warning sign
All this time
I never learned to read your mind (Never learned to read my mind)
I couldn't turn things around (You never turned things around)
'Cause you never gave no warning sign (I gave so many signs)
So many signs, so many signs
You didn't even see the signs

I think I've seen this film before
And I didn't like the ending
You're not my homeland anymore
So what am I defending now?
You were my town, now I'm in exile, seein' you out
I think I've seen this film before
So I'm leavin' out the side door


So step right out, there is no amount
Of crying I can do for you
All this time
We always walked a very thin line
You didn't even hear me out (Didn't even hear me out)
You never gave no warning sign (I gave so many signs)
All this time
I never learned to read your mind (Never learned to read my mind)
I couldn't turn things around (You never turned things around)
'Cause you never gave no warning sign (I gave so many signs)
All this time
So many signs, so many signs
I, oh, I, oh
I, I`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"Eyes Open by Taylor Swift",lyrics:`Everybody's waiting
Everybody's watching
Even when you're sleeping
Keep your ey-eyes open


The tricky thing
Is yesterday we were just children
Playing soldiers
Just pretending
Dreaming dreams with happy endings
In backyards, winning battles with our wooden swords
But now we've stepped into a cruel world
Where everybody stands and keeps score
Keep your eyes open

Everybody's waiting for you to break down
Everybody's watching to see the fallout
Even when you're sleeping, sleeping
Keep your ey-eyes open
Keep your ey-eyes open
Keep your ey-eyes open


So here you are, two steps ahead and staying on guard
Every lesson forms a new scar
They never thought you'd make it this far
But turn around (turn around)
Oh, they've surrounded you
It's a showdown (showdown)
And nobody comes to save you now
But you've got something they don't
Yeah you've got something they don't
You've just got to keep your eyes open


Everybody's waiting for you to break down
Everybody's watching to see the fallout
Even when you're sleeping, sleeping
Keep your ey-eyes open
Keep your ey-eyes open
Keep your ey-eyes

Keep your feet ready
Heartbeat steady
Keep your eyes open
Keep your aim locked
The night goes dark
Keep your eyes open
(Keep your eyes open)
Keep your eyes open
Keep your eyes open
Keep your eyes open


Everybody's waiting for you to break down
Everybody's watching to see the fallout
Even when you're sleeping, sleeping


Keep your ey-eyes open
Keep your ey-eyes open
Keep your ey-eyes open
Keep your ey-eyes open
Keep your ey-eyes open`,coverArt:"https://images.genius.com/24223ce260b004144270bfa5f70ee13c.450x450x1.jpg"},{songTitle:"False God by Taylor Swift",lyrics:`We were crazy to think
Crazy to think that this could work
Remember how I said I'd\u2005die\u2005for you?
We were\u2005stupid to jump
In the ocean separating\u2005us
Remember how I\u2019d fly to you?


And I can't talk to you when you're like this
Staring out the window like I\u2019m not your favorite town
I'm New York City
I still do it for you, babe
They all warned us about times like this
They say the road gets hard and you get lost
When you're led by blind faith, blind faith

But we might just get away with it
Religion's in your lips
Even if it's a false god
We'd still worship
We might just get away with it
The altar is my hips
Even if it's a false god
We'd still worship this love
We\u2019d still worship this love
We\u2019d still worship this love


I know heaven's a thing
I go there when you touch me, honey
Hell is when I fight with you
But we can patch it up good
Make confessions and we\u2019re begging for forgiveness
Got the wine for you


And you can't talk to me when I'm like this
Daring you to leave me just so I can try and scare you
You're the West Village
You still do it for me, babe
They all warned us about times like this
They say the road gets hard and you get lost
When you\u2019re led by blind faith, blind faith

But we might just get away with it
Religion's in your lips
Even if it's a false god
We'd still worship
We might just get away with it
The altar is my hips
Even if it's a false god
We'd still worship this love
We'd still worship this love
We'd still worship this love, ah


Still worship this love
Even if it's a false god
Even if it's a false god
Still worship this love`,coverArt:"https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"},{songTitle:"Fearless by Taylor Swift",lyrics:`There's something 'bout the way
The street looks when it's just rained
There's a glow off the pavement, you walk me to the car
And you know I wanna ask you to dance right there
In the middle of the parking lot, yeah
Oh, yeah


We're driving down the road, I wonder if you know
I'm trying so hard not to get caught up now
But you're just so cool, run your hands through your hair
Absentmindedly making me want you

And I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless


So, baby, drive slow 'til we run out of road
In this one horse town, I wanna stay right here
In this passenger's seat
You put your eyes on me
In this moment now, capture it, remember it


'Cause I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless


Well, you stood there with me in the doorway
My hands shake, I'm not usually this way but
You pull me in and I'm a little more brave
It's the first kiss, it's flawless, really something
It's fearless
Oh, yeah

'Cause I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless
'Cause I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless


Oh, oh
Oh, yeah`,coverArt:"https://images.rapgenius.com/173ab4ceaa92adaaba3ad6051b4d777b.300x300x1.jpg"},{songTitle:"Fearless (Live From Clear Channel Stripped 2008) by Taylor Swift",lyrics:`There's something 'bout the way the street looks when it's just rained
There's a glow off\u2005the\u2005pavement, you walk\u2005me to the car
And you know\u2005I wanna ask you to dance right there
In the middle\u205Fof\u205Fthe\u205Fparking lot, yeah
Oh,\u205Fyeah

We're driving down\u205Fthe road, I wonder if you know
I'm trying so hard not to get caught up now
But you're just so cool, run your hands through your hair
Absentmindedly making me want you

And I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless


So, baby, drive slow 'til we run out of road in this one horse town
I wanna stay right here, in this passenger's seat
You put your eyes on me
In this moment now, capture it, remember it


'Cause I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless


Well, you stood there with me in the doorway
My hands shake, I'm not usually this way but
You pull me in and I'm a little more brave
It's the first kiss, it's flawless, really something
It's fearless
Oh, yeah

'Cause I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless


'Cause I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless


Oh, oh
Oh, yeah`,coverArt:"https://images.genius.com/a27d0e4b7173862e0abc61e372597975.1000x1000x1.jpg"},{songTitle:"Fearless (Taylor's Version) by Taylor Swift",lyrics:`There's something 'bout the way
The street looks when it's just rained
There's a glow off the pavement, you walk me to the car
And you know I wanna ask you to dance right there
In the middle of the parking lot, yeah
Oh, yeah


We're driving down the road, I wonder if you know
I'm trying so hard not to get caught up now
But you're just so cool, run your hands through your hair
Absent-mindedly making me want you

And I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, f\u0435arless


So, baby, drive slow 'til we run out of road in this on\u0435-horse town
I wanna stay right here, in this passenger's seat
You put your eyes on me
In this moment now, capture it, remember it


'Cause I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless
Oh, oh


Well, you stood there with me in the doorway
My hands shake, I'm not usually this way but
You pull me in and I'm a little more brave
It's the first kiss, it's flawless, really something
It's fearless
Oh, yeah

'Cause I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless
'Cause I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless


Oh, oh
Oh-oh, yeah`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"Fifteen by Taylor Swift",lyrics:`You take a deep breath and you walk through the doors
It's the mornin' of your very first day
You say hi to your friends you ain't seen in a while
Try and stay out of everybody's way
It's your freshman year and you're gonna be here
For the next four years in this town
Hopin' one of those senior boys will wink at you and say
"You know, I haven't seen you around before"


'Cause when you're fifteen and somebody tells you they love you
You're gonna believe them
And when you're fifteen, feelin' like there's nothin' to figure out
Well, count to ten, take it in
This is life before you know who you're gonna be
Fifteen

You sit in class next to a redhead named Abigail
And soon enough, you're best friends
Laughin' at the other girls who think they're so cool
We'll be outta here as soon as we can
And then you're on your very first date and he's got a car
And you're feelin' like flyin'
And your mama's waitin' up and you're thinkin' he's the one
And you're dancin' 'round your room when the night ends
When the night ends


'Cause when you're fifteen and somebody tells you they love you
You're gonna believe them
And when you're fifteen and your first kiss
Makes your head spin 'round
But in your life you'll do things greater than
Dating the boy on the football team
But I didn't know it at fifteen


When all you wanted was to be wanted
Wish you could go back and tell yourself what you know now
Back then, I swore I was gonna marry him someday
But I realized some bigger dreams of mine
And Abigail gave everything she had
To a boy who changed his mind
And we both cried

'Cause when you're fifteen and somebody tells you they love you
You're gonna believe them
And when you're fifteen, don't forget to look before you fall
I've found time can heal most anything
And you just might find who you're supposed to be
I didn't know who I was supposed to be
At fifteen


La-la-la, la-la-la, la-la-la-la
La-la-la, la-la-la, la-la-la-la
La-la-la, la-la-la


Your very first day
Take a deep breath, girl
Take a deep breath as you walk through the doors`,coverArt:"https://images.rapgenius.com/4e4b7ef10d1c2d59d36a0242554724a3.953x953x1.jpg"},{songTitle:"Fifteen (Taylor's Version) by Taylor Swift",lyrics:`You take a deep breath and you walk through the doors
It's the mornin' of your very first day
You say hi to your friends you ain't seen in a while
Try and stay out of everybody's way
It's your freshman year and you're gonna be here
For the next four years in this town
Hopin' one of those senior boys will wink at you and say
"You know, I haven't seen you around before"


'Cause when you're fifteen and somebody tells you they love you
You're gonna believe them
And when you're fifteen, feelin' like there's nothin' to figure out
Well, count to ten, take it in
This is life before you know who you're gonna be
At fifteen

You sit in class next to a redhead named Abigail
And soon enough, you're best friends
Laughin' at the other girls who think they're so cool
We'll be outta here as soon as we can
And then you're on your very first date and he's got a car
And you're feelin' like flyin'
And your mama's waitin' up and you're thinkin' he's the one
And you're dancin' 'round your room when the night ends
When the night ends


'Cause when you're fifteen and somebody tells you they love you
You're gonna believe them
And when you're fifteen and your first kiss
Makes your head spin around, well
In your life you'll do things greater than
Datin' the boy on the football team
I didn't know it at fifteen


When all you wanted was to be wanted
Wish you could go back and tell yourself what you know now
Back then, I swore I was gonna marry him someday
But I realized some bigger dreams of mine
And Abigail gave everything she had
To a boy who changed his mind
And we both cried

'Cause when you're fifteen and somebody tells you they love you
You're gonna believe them
And when you're fifteen, don't forget to look before you fall
But I've found time can heal most anything
And you just might find who you're supposed to be
I didn't know who I was supposed to be
At fifteen


La-la-la, la-la-la, la-la-la-la
La-la-la, la-la-la, la-la-la-la
La-la-la, la-la-la


Your very first day
Take a deep breath, girl
Take a deep breath as you walk through the doors`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"Forever & Always by Taylor Swift",lyrics:`Once upon a time
I believe it was a Tuesday when I caught your eye
And we caught onto something
I hold onto the night
You looked me in the eye and told me you loved me
Were you just kidding?
'Cause it seems to me
This thing is breaking down, we almost never speak
I don't feel welcome anymore
Baby, what happened? Please, tell me
'Cause one second it was perfect
Now you're halfway out the door

And I stare at the phone, he still hasn't called
And then you feel so low you can't feel nothing at all
And you flashback to when he said, "Forever and always"
Oh, and it rains in your bedroom
Everything is wrong
It rains when you're here and it rains when you're gone
'Cause I was there when you said, "Forever and always"


Was I out of line?
Did I say something way too honest, made you run and hide
Like a scared little boy?
I looked into your eyes
Thought I knew you for a minute, now I'm not so sure
So here's to everything coming down to nothing
Here's to silence that cuts me to the core
Where is this going?
Thought I knew for a minute, but I don't anymore


And I stare at the phone, he still hasn't called
And then you feel so low you can't feel nothing at all
And you flashback to when he said, "Forever and always"
Oh, and it rains in your bedroom
Everything is wrong
It rains when you're here and it rains when you're gone
'Cause I was there when you said, "Forever and always"
You didn't mean it baby, I don't think so

Oh, back up, baby, back up
Did you forget everything?
Back up, baby, back up
Did you forget everything?


'Cause it rains in your bedroom
Everything is wrong
It rains when you're here and it rains when you're gone
'Cause I was there when you said, "Forever and always"
Oh, I stare at the phone, he still hasn't called
And then you feel so low you can't feel nothing at all
And you flashback to when we said, "Forever and always"
And it rains in your bedroom
Everything is wrong
It rains when you're here and it rains when you're gone
'Cause I was there when you said, "Forever and always"


You didn't mean it baby
You said, "Forever and always", yeah`,coverArt:"https://images.genius.com/026c5c3f1618d0b001cc2a09bbcdc3cd.1000x1000x1.jpg"},{songTitle:"Forever & Always (Piano Version) by Taylor Swift",lyrics:`Once upon a time
I believe it was a Tuesday when I caught your eye
We caught onto something
I hold onto the night
You looked me in the eye and told me you loved me
Were you just kidding?
'Cause it seems to me
This thing is breaking down, we almost never speak
I don't feel welcome anymore
Baby, what happened? Please tell me
'Cause one second it was perfect
Now you're halfway out the door

And I stare at the phone, he still hasn't called
And then you feel so low you can't feel nothing at all
And you flashback to when he said, "Forever and always"
Oh, and it rains in your bedroom, everything is wrong
It rains when you're here and it rains when you're gone
I was there when you said, "Forever and always"


Was I out of line?
Did I say something way too honest made you run and hide?
Like a scared little boy
I looked into your eyes
Thought I knew you for a minute now I'm not so sure
So here's to everything coming down to nothing
Here's to silence that cuts me to the core
Where is this going?
Thought I knew for a minute but I don't anymore


And I stare at the phone, he still hasn't called
And then you feel so low you can't feel nothing at all
And you flashback to when he said, "Forever and always"
And it rains in your bedroom, everything is wrong
It rains when you're here and it rains when you're gone
I was there when you said, "Forever and always"

You didn't mean it, baby
I don't think so


Oh, oh-oh, oh-oh-oh
Oh-oh, oh-oh-oh, oh
Back up, baby, back up
Did you forget everything?
Back up, baby, back up
Did you forget everything?
Back up, baby, back up
Please back up, oh back up
Back up, baby, back up


'Cause it rains in your bedroom, everything is wrong
It rains when you're here and it rains when you're gone
I was there when you said, "Forever and always"
And I stare at the phone, he still hasn't called
And then you feel so low you can't feel nothing at all
And you flashback to when we said, "Forever and always"
'Cause it rains in your bedroom, everything is wrong
It rains when you're here and it rains when you're gone
I was there when you said, "Forever and always"

You didn't mean it baby
You said, "Forever and always", yeah`,coverArt:"https://images.genius.com/52185c8266a672e8c5cbbfbc6b4eb08e.1000x1000x1.jpg"},{songTitle:"Forever & Always (Piano Version) [Taylor's Version] by Taylor Swift",lyrics:`Once upon a time
I believe it was a Tuesday when I caught your eye
And we caught onto something
I hold on to the night
You looked me in the eye and told me you loved me
Were you just kidding?
'Cause it seems to me
This thing is breaking down, we almost never speak
I don't feel welcome anymore
What happened? Please, tell me
'Cause one second it was perfect
Now you're halfway out the door

And I stare at the phone, he still hasn't called
And then you feel so low you can't feel nothing at all
And you flashback to when he said, "Forever and always"
And it rains in your bedroom, everything is wrong
It rains when you're here and it rains when you're gone
I was there when you said, "Forever and always"


Was I out of line?
Did I say something way too honest, made you run and hide
Like a scared little boy?
I looked into your eyes
Thought I knew you for a minute, now I'm not so sure
So here's to everything coming down to nothing
Here's to silence that cuts me to the core
Where is this going?
Thought I knew for a minute, but I don't anymore


And I stare at the phone, he still hasn't called
And then you feel so low you can't feel nothing at all
You flashback to when he said, "Forever and always"
Oh, and it rains in your bedroom, everything is wrong
It rains when you're here and it rains when you're gone
I was there when you said, "Forever and always"
You didn't mean it baby, I don't think so

Oh, oh-oh, oh-oh-oh
Oh-oh-oh, oh-oh-oh
Back up, baby, back up
Did you forget everything?
Back up, baby, back up
Did you forget everything?
Back up, baby, back up
Please, back up, oh, back up
Back up, baby, back up


'Cause it rains in your bedroom, everything is wrong
It rains when you're here and it rains when you're gone
I was there when you said, "Forever and always"
And I stare at the phone, he still hasn't called
And then you feel so low you can't feel nothing at all
You flashback to when we said, "Forever and always"
And it rains in your bedroom, everything is wrong
It rains when you're here, it rains when you're gone
I was there when you said, "Forever and always"
You didn't mean it, baby


You said, "Forever and always," yeah`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"Forever & Always (Taylor's Version) by Taylor Swift",lyrics:`Once upon a time
I believe it was a Tuesday when I caught your eye
And we caught onto something
I hold onto the night
You looked me in the eye and told me you loved me
Were you just kidding?
'Cause it seems to me
This thing is breaking down, we almost never speak
I don't feel welcome anymore
Baby, what happened? Please tell me
'Cause one second it was perfect
Now you're halfway out the door

And I stare at the phone, he still hasn't called
And then you feel so low you can't feel nothing at all
And you flashback to when he said, "Forever and always"
Oh, and it rains in your bedroom, everything is wrong
It rains when you're here and it rains when you're gone
'Cause I was there when you said, "Forever and always"


Was I out of line?
Did I say something way too honest, made you run and hide
Like a scared little boy?
I looked into your eyes
Thought I knew you for a minute, now I'm not so sure
So here's to everything coming down to nothing
Here's to silence that cuts me to the core
Where is this going?
Thought I knew for a minute, but I don't anymore


And I stare at the phone, he still hasn't called
And then you feel so low you can't feel nothing at all
And you flashback to when he said, "Forever and always"
Oh, and it rains in your bedroom, everything is wrong
It rains when you're here and it rains when you're gone
'Cause I was there when you said, "Forever and always"
You didn't mean it baby, I don't think so

Oh, back up, baby, back up
Did you forget everything?
Back up, baby, back up
Did you forget everything?


'Cause it rains in your bedroom, everything is wrong
It rains when you're here and it rains when you're gone
'Cause I was there when you said, "Forever and always"
Oh, I stare at the phone, he still hasn't called
And then you feel so low you can't feel nothing at all
And you flashback to when we said, "Forever and always"
And it rains in your bedroom, everything is wrong
It rains when you're here and it rains when you're gone
'Cause I was there when you said, "Forever and always"


You didn't mean it baby
You said, "Forever and always," yeah`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"Forever Winter (Taylor's Version) [From the Vault] by Taylor Swift",lyrics:`He says he doesn't believe anything much he hears these days
He says, "Why fall in love, just so you can watch it go away?"
He spends most of his nights wishing it was how it used to be
He spends most of his flights getting pulled down by gravity


I call, just checking up on him
He's up, 3 AM, pacing
He says, "It's not just a phase I'm in"
My voice comes out begging

All this time I didn't know
You were breaking down
I'd fall to pieces on the floor
If you weren't around
Too young to know it gets better
I'll be summer sun for you forever
Forever winter if you go


He seems fine most of the time
Forcing smiles and never minds
His laugh is a symphony
When the lights go out, it's hard to breathe
I pull at every thread trying to solve the puzzles in his head
Live my life scared to death he'll decide to leave instead


I call, just checking up on him
He's up, 5 AM, wasted
Long gone, not even listening
My voice comes out screaming


All this time I didn't know
You were breaking down
I'd fall to pieces on the floor
If you weren't around
Too young to know it gets better
I'll be summer sun for you forever
Forever winter if you go

If I was standing there in your apartment
I'd take that bomb in your head and disarm it
I'd say I love you even at your darkest and
Please don't go


I didn't know
You were breaking down
I'd fall to pieces on the floor
If you weren\u2019t around
Too young to know it gets better
I'll be summer sun for you forever
Forever winter if you go


I'll be your summer sun forever
At 3 AM, pacing
All this time I didn't know
At 5 AM, wasted
I'd be in pieces on the floor
Forever winter if you go


He says he doesn't believe anything much he hears these days
I say, "Believe in one thing, I won't go away"`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"Getaway Car by Taylor Swift",lyrics:`No, nothing good starts in a getaway car


It was the best of times, the worst of crimes
I struck a match and blew your mind
But I didn't mean it
And you didn\u2019t see it
The ties were black, the lies were white
In shades of gray in candlelight
I wanted to leave him
I needed a reason

"X" marks the spot where we fell apart
He poisoned the well, I was lyin' to myself
I knew it from the first Old Fashioned, we were cursed
We never had a shotgun shot in the dark (Oh!)


You were drivin' the getaway car
We were flyin\u2019, but we'd never get far
Don't pretend it's such a mystery
Think about the place where you first met me
Ridin' in a getaway car
There were sirens in the beat of your heart
Should've known I'd be the first to leave
Think about the place where you first met me
In a getaway car, oh-oh-oh
No, they never get far, oh-oh-ahh
No, nothing good starts in a getaway car


It was the great escape, the prison break
The light of freedom on my face
But you weren't thinkin\u2019
And I was just drinkin\u2019
While he was runnin' after us, I was screamin\u2019, "Go, go, go!"
But with three of us, honey, it's a sideshow
And a circus ain't a love story
And now we're both sorry (We\u2019re both sorry)

"X" marks the spot where we fell apart
He poisoned the well, every man for himself
I knew it from the first Old Fashioned, we were cursed
It hit you like a shotgun shot to the heart (Oh!)


You were drivin' the getaway car
We were flyin', but we'd never get far
Don't pretend it's such a mystery
Think about the place where you first met me
Ridin' in a getaway car
There were sirens in the beat of your heart
Should've known I'd be the first to leave
Think about the place where you first met me
In a getaway car, oh-oh-oh
No, they never get far, oh-oh-ahh
No, nothing good starts in a getaway car


We were jet-set, Bonnie and Clyde (Oh-oh)
Until I switched to the other side
To the other side
It's no surprise I turned you in (Oh-oh)
'Cause us traitors never win

I'm in a getaway car
I left you in a motel bar
Put the money in a bag and I stole the keys
That was the last time you ever saw me (Oh!)


Drivin' the getaway car
We were flyin', but we'd never get far (Don't pretend)
Don't pretend it's such a mystery
Think about the place where you first met me
Ridin' in a getaway car
There were sirens in the beat of your heart (Should've known)
Should've known I'd be the first to leave
Think about the place where you first met me
In a getaway car, oh-oh-oh
No, they never get far, oh-oh-ahh
No, nothing good starts in a getaway car


I was ridin' in a getaway car
I was cryin' in a getaway car
I was dyin' in a getaway car
Said goodbye in a getaway car
Ridin' in a getaway car
I was cryin' in a getaway car
I was dyin' in a getaway car
Said goodbye in a getaway car`,coverArt:"https://images.genius.com/fcb2d898ff0f110ae32aa5b647e67bc1.873x873x1.png"},{songTitle:"Girl at Home by Taylor Swift",lyrics:`Don't look at me, you got a girl at home
And everybody knows that, everybody knows that, ah-ah
Don't look at me, you got a girl at home
And everybody knows that


I don't even know her
But I feel a responsibility
To do what's upstanding and right
It's kinda like a code, yeah
And you've been getting closer and closer
And crossing so many lines

And it would be a fine proposition
If I was a stupid girl
But, honey, I am no one's exception
This, I have previously learned


So don't look at me, you got a girl at home
And everybody knows that, everybody knows that, ah-ah
Don't look at me, you got a girl at home
And everybody knows that, everybody knows that
I see you turn off your phone
And now you've got me alone, and I say
Don't look at me, you got a girl at home
And everybody knows that, everybody knows that


I just want to make sure
You understand perfectly
You're the kind of man who makes me sad
While she waits up
You chase down the newest thing
And take for granted what you have


And it would be a fine proposition
If I was a stupid girl
And, yeah, I might go with it
If I hadn't once been just like her

So don't look at me, you got a girl at home
And everybody knows that, everybody knows that, ah-ah
Don't look at me, you got a girl at home
And everybody knows that, everybody knows that
I see you turn off your phone
And now you've got me alone, and I say
Don't look at me, you got a girl at home
And everybody knows that, everybody knows that


Oh-oh-oh, oh-oh-oh
Oh-oh-oh, oh-oh-oh


Call a cab, lose my number
You're about to lose your girl
Call a cab, lose my number
Let's consider this lesson learned


Don't look at me, you got a girl at home
And everybody knows that, everybody knows that, ah-ah
Don't look at me, you got a girl at home
And everybody knows that, everybody knows that
Want to see you pick up your phone
And tell her you're coming home
Don't look at me, you got a girl at home
And everybody knows that, everybody knows that

Don't look at me, you got a girl at home
And everybody knows that, everybody knows that
It would be a fine proposition
If I hadn't once been just like her`,coverArt:"https://images.genius.com/b7128e9adc9cf68414865c94c726e9f6.1000x1000x1.jpg"},{songTitle:"Girl At Home (Taylor's Version) by Taylor Swift",lyrics:`Don't look at me, you got a girl at home
And everybody knows that, everybody knows that, ah-ah
Don\u2019t look at me, you got a girl at home
And everybody knows that


I don't even know her
But I feel a responsibility
To do what's upstanding and right
It\u2019s kinda like a code, yeah
And you've been getting closer and closer
And crossing so many lines

And it would be a fine proposition
If I was a stupid girl
But, honey, I am no one's exception
This, I have previously learned


So don't look at me, you got a girl at home
And everybody knows that, everybody knows that, ah-ah
Don't look at me, you got a girl at home
And everybody knows that, \u0435verybody knows that
I see you turn off your phone
And now you've got m\u0435 alone, and I say
Don't look at me, you got a girl at home
And everybody knows that, everybody knows that


I just wanna make sure
You understand perfectly
You're the kind of man who makes me sad
While she waits up
You chase down the newest thing
And take for granted what you have


And it would be a fine proposition
If I was a stupid girl
And, yeah, I might go with it
If I hadn\u2019t once been just like her

So don\u2019t look at me, you got a girl at home
And everybody knows that, everybody knows that, ah-ah
Don't look at me, you got a girl at home
And everybody knows that, everybody knows that
I see you turn off your phone
And now you\u2019ve got me alone, and I say
Don't look at me, you got a girl at home
And everybody knows that, everybody knows that


Oh-oh
Oh-oh


Call a cab, lose my number
You're about to lose your girl
Call a cab, lose my number
Let's consider this lesson learned


Don\u2019t look at me, you got a girl at home
And everybody knows that, everybody knows that, ah-ah
Don't look at me, you got a girl at home
And everybody knows that, everybody knows that
Wanna see you pick up your phone
And tell her you're coming home
Don't look at me, you got a girl at home
And everybody knows that, everybody knows that

It would be a fine proposition
If I hadn't once been just like her`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"\u200Bgold rush by Taylor Swift",lyrics:`Gleaming, twinkling
Eyes like sinking ships on waters
So inviting, I almost jump in


But I don't like a gold rush, gold rush
I don't like anticipatin' my face in a red flush
I don't like that anyone would die to feel your touch
Everybody wants you
Everybody wonders what it would be like to love you
Walk past, quick brush
I don't like slow motion, double vision in rose blush
I don't like that falling feels like flying 'til the bone crush
Everybody wants you
But I don't like a gold rush

What must it be like to grow up that beautiful?
With your hair falling into place like dominoes
I see me padding across your wooden floors
With my Eagles t-shirt hanging from the door


At dinner parties, I call you out on your contrarian shit
And the coastal town we wandered 'round had n\u0435ver seen a love as pure as it
And th\u0435n it fades into the gray of my day-old tea
'Cause it could never be


'Cause I don't like a gold rush, gold rush
I don't like anticipatin' my face in a red flush
I don't like that anyone would die to feel your touch
Everybody wants you
Everybody wonders what it would be like to love you
Walk past, quick brush
I don't like slow motion, double vision in rose blush
I don't like that falling feels like flying 'til the bone crush
Everybody wants you
But I don't like a gold rush


What must it be like to grow up that beautiful?
With your hair falling into place like dominoes
My mind turns your life into folklore
I can't dare to dream about you anymore

At dinner parties I won't call you out on your contrarian shit
And the coastal town we never found will never see a love as pure as it
'Cause it fades into the gray of my day-old tea
'Cause it will never be


Gleaming, twinkling
Eyes like sinking ships on waters
So inviting, I almost jump in`,coverArt:"https://images.genius.com/3e354c719fe236ab4a75adc6ea4c7fca.1000x1000x1.png"},{songTitle:"Gorgeous by Taylor Swift",lyrics:`Gorgeous


You should take it as a compliment
That I got drunk and made fun of the way you talk
You should think about the consequence
Of your magnetic field being a little too strong
And I got a boyfriend, he's older than us
He's in the club doin' I don't know what
You're so cool, it makes me hate you so much
(I hate you so much)

Whisky on ice, Sunset and Vine
You've ruined my life by not being mine


You're so gorgeous
I can't say anything to your face
'Cause look at your face (Gorgeous)
And I'm so furious
At you for making me feel this way
But what can I say?
You're gorgeous


You should take it as a compliment
That I'm talking to everyone here but you (But you, but you)
And you should think about the consequence
Of you touching my hand in a darkened room (Dark room, dark room)
If you've got a girlfriend, I'm jealous of her
But if you're single that's honestly worse
'Cause you're so gorgeous it actually hurts (Honey, it hurts)


Ocean blue eyes looking in mine
I feel like I might sink and drown and die

You're so gorgeous
I can't say anything to your face (To your face)
'Cause look at your face (Look at your face, gorgeous)
And I'm so furious
At you for making me feel this way (Feel this way)
But what can I say?
You're gorgeous


You make me so happy it turns back to sad
There's nothing I hate more than what I can't have
And you are so gorgeous it makes me so mad (Mmh)
You make me so happy it turns back to sad (Yeah)
There's nothing I hate more than what I can't have and
Guess I'll just stumble on home to my cats (Yeugh), alone
Unless, you wanna come along? (Oh)


You're so gorgeous
I can't say anything to your face (To your face)
'Cause look at your face (Look at your face, gorgeous)
And I'm so furious (I'm so furious)
At you for making me feel this way (Feel this way)
But what can I say? (I say)
You're gorgeous

You make me so happy it turns back to sad (Yeah)
There's nothing I hate more than what I can't have
And you are so gorgeous it makes me so mad (Mmh)
You're gorgeous
You make me so happy it turns back to sad (It turns back to sad)
There's nothing I hate more than what I can't have (What I can\u2019t have)
You are so gorgeous it makes me so mad (Mmh)
You're gorgeous`,coverArt:"https://images.genius.com/8147e18d56c4f5acda89fe4b0ff8417d.1000x999x1.png"},{songTitle:"\u200Bhappiness by Taylor Swift",lyrics:`Honey, when I'm above the trees
I see this for what it is
But now I'm right\u2005down\u2005in it, all\u2005the years I've given
Is just shit\u2005we're dividin' up
Showed you all of my hiding spots
I was dancing when the music stopped
And in the disbelief, I can't face reinvention
I haven't met the new me yet


There'll be happiness after you
But there was happiness because of you
Both of these things can be true
There is happiness

Past the blood and bruise
Past the curses and cries
Beyond the terror in the nightfall
Haunted by the look in my eyes
That would've loved you for a lifetime
Leave it all behind
And there is happiness


Tell me, when did your winning smile
Begin to look like a smirk?
When did all our lessons start to look like weapons
Pointed at my deepest hurt?
I hope she'll be a beautiful fool
Who takes my spot next to you
No, I didn't mean that
Sorry, I can't see facts through all of my fury
You haven't met the new me yet


There'll be happiness after me
But there was happiness because of me
Both of these things, I believe
There is happiness
Related Songs
In our history, across our great divide
There is a glorious sunrise
Dappled with the flickers of light
From the dress I wore at midnight, leave it all behind
And there is happiness


I can't make it go away by making you a villain
I guess it's the price I paid for seven years in Heaven
And I pulled your body into mine
Every goddamn night, now I get fake niceties
No one teaches you what to do
When a good man hurts you
And you know you hurt him too


Honey, when I'm above the trees
I see it for what it is
But now my eyes leak acid rain on the pillow where you used to lay your head
After giving you the best I had
Tell me what to give after that
All you want from me now is the green light of forgiveness
You haven't met the new me yet
And I think she'll give you that

There'll be happiness after you
But there was happiness because of you too
Both of these things can be true
There is happiness


In our history, across our great divide
There is a glorious sunrise
Dappled with the flickers of light
From the dress I wore at midnight, leave it all behind
Oh, leave it all behind
Leave it all behind
And there is happiness`,coverArt:"https://images.genius.com/3e354c719fe236ab4a75adc6ea4c7fca.1000x1000x1.png"},{songTitle:"Haunted by Taylor Swift",lyrics:`You and I walk a fragile line
I have known it all this time
But I never thought I'd live to see it break
It's getting dark and it's all so quiet
And I can't trust anything now
And it's coming over you like it's all a big mistake


Whoa, holding my breath
Won't lose you again
Something's made your eyes go cold

Come on, come on, don't leave me like this
I thought I had you figured out
Something's gone terribly wrong
You're all I wanted
Come on, come on, don't leave me like this
I thought I had you figured out
Can't breathe whenever you're gone
Can't turn back now, I'm haunted


Stood there and watched you walk away
From everything we had
But I still mean every word I said to you
He will try to take away my pain
And he just might make me smile
But the whole time, I'm wishing he was you instead


Oh, holding my breath
Won't see you again
Something keeps me holding onto nothing


Come on, come on, don't leave me like this
I thought I had you figured out
Something's gone terribly wrong
You're all I wanted
Come on, come on, don't leave me like this
I thought I had you figured out
Can't breathe whenever you're gone
Can't turn back now, I'm haunted

I know, I know
I just know
You're not gone
You can't be gone, no


Come on, come on, don't leave me like this
I thought I had you figured out
Something's gone terribly wrong
Won't finish what you started
Come on, come on, don't leave me like this
I thought I had you figured out
Can't breathe whenever you're gone
I can't go back, I'm haunted


Oh-oh, oh-oh, oh-oh, oh
You and I walk a fragile line
I have known it all this time
Never ever thought I'd see it break
Never thought I'd see it`,coverArt:"https://images.genius.com/d04f0a5d76810e4bc7c6d5f8e261bd91.1000x1000x1.jpg"},{songTitle:"Haunted (Acoustic Version) by Taylor Swift",lyrics:`You and I walk a fragile line
I have known it all this time
But I never thought I'd live to see it break
It's getting dark and it's all so quiet
And I can't trust anything now
And it's coming over you like it's all a big mistake


Whoa, holding my breath
Won't lose you again
Something's made your eyes go cold

Come on, come on, don't leave me like this
I thought I had you figured out
Something's gone terribly wrong
You're all I wanted
Come on, come on, don't leave me like this
I thought I had you figured out
Can't breathe whenev\u0435r you're gone
Can't turn back now, I'm haunted


Stood th\u0435re and watched you walk away
From everything we had
But I still mean every word I said to you
He will try to take away my pain
And he just might make me smile
But the whole time, I'm wishing he was you instead


Oh, holding my breath
Won't see you again
Something keeps me holding onto nothing


Come on, come on, don't leave me like this
I thought I had you figured out
Something's gone terribly wrong
You're all I wanted
Come on, come on, don't leave me like this
I thought I had you figured out
Can't breathe whenever you're gone
Can't turn back now, I'm haunted

I know, I know
I just know
You're not gone
You can't be gone, no


Come on, come on, don't leave me like this
I thought I had you figured out
Something's gone terribly wrong
Won't finish what you started
Come on, come on, don't leave me like this
I thought I had you figured out
Can't breathe whenever you're gone
I can't go back, I'm haunted


Oh-oh, oh-oh, oh-oh, oh
You and I walk a fragile line
I have known it all this time
Never ever thought I'd see it break
Never thought I'd see it`,coverArt:"https://images.genius.com/721a6c465a666419bf286b473287c33f.446x446x1.jpg"},{songTitle:"Haunted (Live/2011) by Taylor Swift",lyrics:`You and I walk a fragile line
I have known it all this time
But I never\u2005thought\u2005I'd live to\u2005see it break
It's getting dark and\u2005it's all too quiet
And I can't trust anything now
It's coming over you like it's all a big mistake


Oh-Whoa, holding my breath
Won't lose you again
Something's made your eyes go cold

Come on, come on, don't leave me like this
I thought I had you figured out
Something's gone terribly wrong
You're all I wanted
Come on, come on, don't leave me like this
I thought I had you figured out
Can't breathe whenever you're gone
Can't turn back now, I'm haunted


Stood there and watched you walk away
From everything we had
But I still mean every word I said to you
He will try to take away my pain
And he just might make me smile
But the whole time, I'm wishing it was you instead


Oh-whoa, holding my breath
Whoa Won't see you again
Something keeps me holding onto nothing


Come on, come on, don't leave me like this
I thought I had you figured out
Something's gone terribly wrong
You are all I wanted
Come on, come on, don't leave me like this
I thought I had you figured out
Can't breathe whenever you're gone
Can't turn back now, I'm haunted

I know
I know
I just know
You're not gone, you can't be gone, no


Come on, come on, don't leave me like this
I thought I had you figured out
Something's gone terribly wrong
Won't finish what you started
Come on, come on, don't leave me like this
I thought I had you figured out
Can't breathe whenever you're gone
I Can't go back, I'm haunted
(Oh, oh, oh, oh, oh- woah  oh, oh)


You and I walk a fragile line
I have known it all this time
Never ever thought I'd see it break
Never thought I'd see it`,coverArt:"https://images.genius.com/6510355b9fa1e35fa7e939852c7405d0.900x900x1.jpg"},{songTitle:"Hey Stephen by Taylor Swift",lyrics:`Mmm-mm, mm-mm
Mmm-mm, mm-mm
Mmm-mm, mm-mm, yeah


Hey Stephen, I know looks can be deceiving
But I know I saw a light in you
And as we walked we were talking
I didn't say half the things I wanted to
Of all the girls tossing rocks at your window
I'll be the one waiting there even when it's cold
Hey Stephen, boy, you might have me believing
I don't always have to be alone

'Cause I can't help it if you look like an angel
Can't help it if I wanna kiss you in the rain so
Come feel this magic I've been feeling since I met you
Can't help it if there's no one else
Mmm, I can't help myself


Hey Stephen, I've been holding back this feeling
So I got some things to say to you
I've seen it all, so I thought
But I never seen nobody shine the way you do
The way you walk, way you talk, way you say my name
It's beautiful, wonderful, don't you ever change
Hey Stephen, why are people always leaving?
I think you and I should stay the same


'Cause I can't help it if you look like an angel
Can't help it if I wanna kiss you in the rain so
Come feel this magic I've been feeling since I met you
Can't help it if there's no one else
Mmm, I can't help myself


They're dimming the street lights, you're perfect for me
Why aren't you here tonight?
I'm waiting alone now, so come on and come out
And pull me near and shine, shine, shine

Hey Stephen, I could give you fifty reasons
Why I should be the one you choose
All those other girls, well, they're beautiful
But would they write a song for you? (Ha-ha)


I can't help it if you look like an angel
Can't help it if I wanna kiss you in the rain so
Come feel this magic I've been feeling since I met you
Can't help it if there's no one else
Mmm, I can't help myself
If you look like an angel
Can't help it if I wanna kiss you in the rain so
Come feel this magic I've been feeling since I met you
Can't help it if there's no one else
Mmm, I can't help myself


Myself
Can't help myself
I can't help myself`,coverArt:"https://images.genius.com/026c5c3f1618d0b001cc2a09bbcdc3cd.1000x1000x1.jpg"},{songTitle:"Hey Stephen (Taylor's Version) by Taylor Swift",lyrics:`Mmm-mm, mm-mm
Mmm-mm, mm-mm
Mmm-mm, mm-mm, yeah


Hey Stephen, I know looks can be deceiving
But I know I saw a light in you
And as we walked we were talking
I didn't say half the things\u205FI\u205Fwanted\u205Fto
Of all the\u205Fgirls tossing rocks\u205Fat your window
I'll be the one waiting there even when it's cold
Hey Stephen, boy, you might have me believing
I don't always have to be alone

'Cause I can't help it if you look like an angel
Can't help it if I wanna kiss you in the rain, so
Come feel this magic I've been feeling since I met you
Can't help it if there's no one else
Mmm, I can't help myself


Hey Stephen, I've been holding back this feeling
So I've got some things to say to you (Huh)
I've seen it all, so I thought
But I never seen nobody shine the way you do
The way you walk, way you talk, way you say my name
It's beautiful, wonderful, don't you ever change
Hey Stephen, why are people always leaving?
I think you and I should stay the same


'Cause I can't help it if you look like an angel
Can't help it if I wanna kiss you in the rain, so
Come feel this magic I've been feeling since I met you
Can't help it if there's no one else
Mmm, I can't help myself


They're dimming the street lights, you're perfect for me
Why aren't you here tonight?
I'm waiting alone now, so come on and come out
And pull me near and shine, shine, shine
Hey Stephen, I could give you fifty reasons
Why I should be the one you choose
All those other girls, well, they're beautiful
But would they write a song for you? (Ha-ha-ha)

I can't help it if you look like an angel
Can't help it if I wanna kiss you in the rain, so
Come feel this magic I've been feeling since I met you
Can't help it if there's no one else
Mmm, I can't help myself
If you look like an angel
Can't help it if I wanna kiss you in the rain, so
Come feel this magic I've been feeling since I met you
Can't help it if there's no one else
Mmm, I can't help myself


Ah-uh, myself
Mmm-mm, I can't help myself
I can't help myself
Oh-oh-oh
Mmm-mm, mm-mm
Mmm-mm, mm-mm
Mmm-mm, mm-mm`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"\u200Bhoax by Taylor Swift",lyrics:`My only one
My smoking gun
My eclipsed sun
This has broken me down
My twisted knife
My sleepless night
My\u2005winless\u2005fight
This has frozen\u2005my ground


Stood on the cliffside screaming,\u2005"Give me a reason"
Your faithless love's the only hoax I\u205Fbelieve\u205Fin
Don't\u205Fwant no other\u205Fshade of blue\u205Fbut you
No other sadness in the world would do

My best laid plan
Your sleight of hand
My barren land
I am ash from your fire


Stood on the cliffside screaming, "Give me a reason"
Your faithless love's the only hoax I believe in
Don't want no other shade of blue but you
No other sadness in the world would do


You know I left a part of me back in New York
You knew the hero died so what's the movie for?
You knew it still hurts underneath my scars
From when they pulled me apart
You knew the password so I let you in the door
You knew you won so what's the point of keeping score?
You knew it still hurts underneath my scars
From when they pulled me apart
But what you did was just as dark
(Ah, ah, ah)
Darling, this was just as hard
As when they pulled me apart

My only one
My kingdom come undone
My broken drum
You have beaten my heart
Don't want no other shade of blue but you
No other sadness in the world would do`,coverArt:"https://images.genius.com/4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png"},{songTitle:"\u200Bhoax (the long pond studio sessions) by Taylor Swift",lyrics:`One, two, one


My only one
My smoking gun
My eclipsed sun
This has broken me down
My twisted knife
My sleepless night
My winless fight
This has frozen my ground

Stood on the cliffside screaming, "Give me a reason"
Your faithless love's the only hoax I believe in
Don't want no other shade of blue but you
No other sadness in the world would do


My best laid plan
Your sleight of hand
My barren land
I am ash from your fire


Stood on the cliffside screaming, "Give me a reason"
Your faithless love's th\u0435 only hoax I believe in
Don't want no oth\u0435r shade of blue but you
No other sadness in the world would do


You know I left a part of me back in New York
You knew the hero died so what's the movie for?
You knew it still hurts underneath my scars
From when they pulled me apart
You knew the password so I let you in the door
You knew you won so what's the point of keeping score?
You knew it still hurts underneath my scars
From when they pulled me apart
But what you did was just as dark
Darling, this was just as hard
As when they pulled me apart

My only one
My kingdom come undone
My broken drum
You have beaten my heart
Don't want no other shade of blue but you
No other sadness in the world would do`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"Holy Ground by Taylor Swift",lyrics:`I was reminiscing just the other day
While having coffee all alone, and Lord, it took me away
Back to a first-glance feeling on New York time
Back when you fit in my poems like a perfect rhyme
Took off faster than a green light, go
Hey, you skip the conversation when you already know
I left a note on the door with a joke we'd made
And that was the first day


And darling, it was good
Never looking down
And right there where we stood
Was holy ground

Spinning like a girl in a brand new dress
We had this big wide city all to ourselves
We blocked the noise with the sound of, "I need you"
And for the first time, I had something to lose
And I guess we fell apart in the usual way
And the story's got dust on every page
But sometimes, I wonder how you think about it now
And I see your face in every crowd


'Cause darling, it was good
Never looking down
And right there where we stood
Was holy ground


Tonight, I'm gonna dance
For all that we've been through
But I don't wanna dance
If I'm not dancing with you
Tonight, I'm gonna dance
Like you were in this room
But I don't wanna dance
If I'm not dancing with you

It was good
Never looking down
And right there where we stood
Was holy ground


Tonight, I'm gonna dance
For all that we've been through
But I don't wanna dance
If I'm not dancing with you
Tonight, I'm gonna dance
Like you were in this room
But I don't wanna dance
If I'm not dancing with you`,coverArt:"https://images.genius.com/341214eeb78c133a8170a932919a66aa.1000x1000x1.png"},{songTitle:"Holy Ground (Taylor's Version) by Taylor Swift",lyrics:`I was reminiscing just the other day
While having coffee all alone and, Lord, it took me away
Back to a first-glance feeling on New York time
Back when you fit my poems like a perfect rhyme
Took off faster than a green light, go
Yeah, you skip the conversation when you already know
I left a note on the door with a joke we'd made
And that was the first day


And darling, it was good
Never looking down
And right there where we stood
Was holy ground

Spinning like a girl in a brand new dress
We had this big, wide city all to ourselves
W\u0435 block the noise with the sound of "I need you"
And for th\u0435 first time, I had something to lose
And I guess we fell apart in the usual way
And the story's got dust on every page
But sometimes I wonder how you think about it now
And I see your face in every crowd


'Cause darling, it was good
Never looking down
And right there where we stood
Was holy ground


Tonight I'm gonna dance
For all that we've been through
But I don't wanna dance
If I'm not dancing with you
Tonight I'm gonna dance
Like you were in this room
But I don't wanna dance
If I'm not dancing with you

It was good
Never looking down
And right there where we stood
Was holy ground


Tonight I'm gonna dance
For all that we've been through
But I don't wanna dance
If I'm not dancing with you
Tonight I'm gonna dance
Like you were in this room
But I don't wanna dance
If I'm not dancing with you`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"How You Get the Girl by Taylor Swift",lyrics:`Oh, oh, oh
Oh, oh, oh
Oh-oh, oh-oh


Stand there like a ghost
Shaking from the rain, rain
She'll open up the door and say, "Are you insane?"
Say it's been a long six months
And you were too afraid to tell her what you want, want

And that's how it works
That's how you get the girl
And then, you say


I want you for worse or for better
I would wait forever and ever
Broke your heart, I'll put it back together
I would wait forever and ever
And that's how it works
That's how you get the girl, girl (Oh-oh, oh)
And that's how it works
That's how you get the girl, girl


Remind her how it used to be, be, yeah-yeah
With pictures in frames of kisses on cheeks, cheeks
Tell her how you must have lost your mind, ooh-ooh
When you left her all alone
And never told her why, why


And that's how it works
That's how you lost the girl
And now, you say

I want you for worse or for better
I would wait forever and ever (Ever and ever)
Broke your heart, I'll put it back together
I would wait forever and ever
And that's how it works
That's how you get the girl, girl (Oh-oh, oh-oh)
And that's how it works
That's how you get the girl, girl
Yeah, yeah


And you know
Oh, oh, oh, oh, oh, oh, oh, oh, oh, oh
That I don't want you to go, oh, oh


Remind me how it used to be
Pictures in frames of kisses on cheeks
And say you want me, yeah-yeah
And then you say


I want you for worse or for better (Worse or for better)
I would wait forever and ever (Ever and ever)
Broke your heart, I'll put it back together
I want you forever and ever (I would wait forever and ever)
And that's how it works
That's how you get the girl, girl (This is how it works)
And that's how it works
That's how you get the girl, girl (Get the girl)
(That's how it works)
And that's how it works
That's how you get the girl, girl
(Oh, oh, oh, oh, oh, oh, oh, oh, oh, oh)
And that's how it works
That's how you get the girl, girl
(Oh, oh, oh, oh, oh, oh, oh, oh, oh, oh)

And that's how it works
That's how you got the girl`,coverArt:"https://images.genius.com/da08ff60b6becc4fc1eaa3412338d18f.1000x1000x1.png"},{songTitle:"I Almost Do by Taylor Swift",lyrics:`I bet this time of night, you\u2019re still up
I bet you\u2019re tired from a long hard week
I bet you\u2019re sittin' in your chair by the window
Looking out at the city, and I bet
Sometimes you wonder 'bout me


And I just wanna tell you
It takes everything in me not to call you
And I wish I could run to you
And I hope you know that
Every time I don\u2019t, I almost do, I almost do

I bet you think I either moved on or hate you
\u2018Cause each time you reach out, there\u2019s no reply
I bet it never, ever occurred to you
That I can\u2019t say hello to you and risk another goodbye


And I just wanna tell you
It takes everything in me not to call you
And I wish I could run to you
And I hope you know that
Every time I don\u2019t, I almost do, I almost do


Oh, we made quite a mess, babe
It\u2019s probably better off this way
And I confess, babe
In my dreams, you\u2019re touching my face
And asking me if I want to try again with you
And I almost do


And I just wanna tell you
It takes everything in me not to call you
And I wish I could run to you
And I hope you know that
Every time I don\u2019t, I almost do, I almost do

I bet this time of night, you\u2019re still up
I bet you\u2019re tired from a long hard week
I bet you\u2019re sittin' in your chair by the window
Looking out at the city, and I hope
Sometimes you wonder 'bout me`,coverArt:"https://images.genius.com/341214eeb78c133a8170a932919a66aa.1000x1000x1.png"},{songTitle:"I Almost Do (Taylor's Version) by Taylor Swift",lyrics:`I bet this time of night, you're still up
I bet you're tired from a long hard week
I bet you're sittin' in your chair by the window
Looking out at the city, and I bet
Sometimes you wonder 'bout me


And I just wanna tell you
It takes everything in me not to call you
And I wish I could run to you
And I hope you know that every time I don't
I almost do
I almost do

I bet you think I either moved on or hate you
'Cause each time you reach out, there's no reply
I bet it never, ever occurred to you
That I can't say hello to you and risk another goodbye


And I just wanna tell you
It takes everything in me not to call you
And I wish I could run to you
And I hope you know that every time I don\u2019t
I almost do
I almost do


Oh, we made quite a mess, babe
It's probably better off this way
And I confess, baby
In my dreams, you're touching my face
And asking me if I wanna try again with you
And I almost do


And I just wanna tell you
It takes everything in me not to call you
And I wish I could run to you
And I hope you know that every time I don't
I almost do
I almost do

I bet this time of night, you\u2019re still up
I bet you're tired from a long hard week
I bet you're sittin' in your chair by the window
Looking out at the city, and I hope
Sometimes you wonder 'bout me`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"I Bet You Think About Me (Taylor's Version) [From the Vault] by Taylor Swift (Ft. Chris Stapleton)",lyrics:`3 AM and I'm still awake, I'll bet you're just fine
Fast asleep in your city that's better than mine
And the girl in your bed has a fine pedigree
And I'll bet your friends tell you she's better than me, huh


Well, I tried to fit in with your upper-crust circles
Yeah, they let me sit in back when we were in love
Oh, they sit around talkin' about the meaning of life
And the book that just saved 'em that I hadn't heard of

But now that we're done and it's over
I bet you couldn't believe
When you realized I'm harder to forget than I was to leave
And I bet you think about me


You grew up in a silver-spoon gated community
Glamorous, shiny, bright Beverly Hills
I was raised on a farm, no, it wasn't a mansion
Just livin' room dancin' and kitchen table bills


But you know what they say, you can't help who you fall for
And you and I fell like an early spring snow
But reality crept in, you said we're too different
You laughed at my dreams, rolled your eyes at my jokes


Mr. Superior Thinkin'
Do you have all the space that you need?
I don't have to be your shrink to know that you'll never be happy
And I bet you think about me


I bet you think about me, yes
I bet you think about me

Oh, block it all out
The voices so loud, sayin'
"Why did you let her go?"
Does it make you feel sad
That the love that you're lookin' for
Is the love that you had?


Now you're out in the world, searchin' for your soul
Scared not to be hip, scared to get old
Chasing make-believe status, last time you felt free
Was when none of that shit mattered 'cause you were with me


But now that we're done and it's over
I bet it's hard to believe
But it turned out I'm harder to forget than I was to leave
And, yeah, I bet you think about me


I bet you think about me, yes
I bet you think about me


I bet you think about me when you're out
At your cool indie music concerts every week
I bet you think about me in your house
With your organic shoes and your million-dollar couch
I bet you think about me when you say
"Oh my god, she's insane, she wrote a song about me"
I bet you think about me`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"I Did Something Bad by Taylor Swift",lyrics:`I never trust a narcissist, but they love me
So I play 'em like a violin
And I make it look oh-so-easy
'Cause for every lie I tell them, they tell me three
This is how the world works
Now all he thinks about is me


I can feel the flames on my skin
Crimson red paint on my lips
If a man talks shit, then I owe him nothing
I don't regret it one bit, 'cause he had it coming

They say I did something bad
Then why's it feel so good?
They say I did something bad
But why's it feel so good?
Most fun I ever had
And I'd do it over and over and over again if I could
It just felt so good, good


Ra-di-di-di-di-di-di-di-di-di-da-da
Ra-di-di-di-di-di-di-di-di-di-da-da
Ra-di-di-di-di-di-di-di-di-di-da-da
Da-da da-da


I never trust a playboy, but they love me
So I fly 'em all around the world
And I let them think they saved me
They never see it comin', what I do next
This is how the world works
You gotta leave before you get left


I can feel the flames on my skin
He says, "Don't throw away a good thing"
But if he drops my name, then I owe him nothin'
And if he spends my change, then he had it comin'

They say I did something bad (Oh)
Then why's it feel so good?
They say I did something bad
But why's it feel so good?
Most fun I ever had
And I'd do it over and over and over again if I could
It just felt so good, good


Ra-di-di-di-di-di-di-di-di-di-da-da
Ra-di-di-di-di-di-di-di-di-di-da-da
(It just felt so good)
Ra-di-di-di-di-di-di-di-di-di-da-da
Da-da da-da


They're burning all the witches even if you aren't one
They got their pitchforks and proof, their receipts and reasons
They're burning all the witches even if you aren't one
So light me up (Light me up), light me up (Light me up)
Light me up, go ahead and light me up (Light me up)
Light me up (Light me up), light me up (Light me up)
Light me up (Light me up), light me up


They say I did something bad (Oh)
Then why's it feel so good? (So good)
They say I did something bad
But why's it feel so (Good) good?
Most fun I ever had (Most fun I ever had)
And I'd do it over and over and over again if I could
It just felt so good (Good), good

Ra-di-di-di-di-di-di-di-di-di-da-da
Ra-di-di-di-di-di-di-di-di-di-da-da
Ra-di-di-di-di-di-di-di-di-di-da-da
Da-da da-da


Oh, you say I did something bad
(You say I did something bad?)
Why's it feel so good, good?
So bad, why's it feel so good?
Why's it feel, why's it feel so good? (Bad)
It just felt so good, good`,coverArt:"https://images.genius.com/d6eba083b40fcec8b16ab1b4489fe057.1000x1000x1.png"},{songTitle:"I Forgot That You Existed by Taylor Swift",lyrics:`How many days did I spend thinking
'Bout how you did me wrong, wrong, wrong?
Lived in\u2005the\u2005shade you were\u2005throwing
'Til all of my sunshine was\u2005gone, gone, gone
And I couldn't get away from ya
In my feelings more than Drake, so yeah
Your name on my lips, tongue-tied
Free rent, living in my mind


But then something happened one magical night

I forgot that you existed
And I thought that it would kill me, but it didn't
And it was so nice
So peaceful and quiet
I forgot that you existed
It isn't love, it isn't hate, it's just indifference
I forgot that you


Got out some popcorn
As soon as my rep started going down, down, down
Laughed on the school yard
As soon as I tripped up and hit the ground, ground, ground
And I would've stuck around for ya
Would've fought the whole town, so yeah
Would've been right there, front row
Even if nobody came to your show


But you showed who you are, then one magical night


I forgot that you existed
And I thought that it would kill me, but it didn't
And it was so nice
So peaceful and quiet
I forgot that you existed
It isn't love, it isn't hate, it's just indifference
I forgot that you

Sent me a clear message
Taught me some hard lessons
I just forget what they were
It's all just a blur


I forgot that you existed
And I thought that it would kill me, but it didn't
And it was so nice
So peaceful and quiet
I forgot that you existed
I did, I did, I did
It isn't hate, it's just indifference
It isn't love, it isn't hate, it's just indifference
So, yeah`,coverArt:"https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"},{songTitle:"If This Was a Movie by Taylor Swift",lyrics:`Last night, I heard my own heart beating
Sounded like footsteps on my stairs
Six months gone and I'm still reaching
Even though I know you're not there
I was playing back a thousand memories, baby
Thinking 'bout everything we've been through
Maybe I've been going back too much lately
When time stood still and I had you


Come back, come back, come back to me like
You would, you would if this was a movie
Stand in the rain outside 'til I came out
Come back, come back, come back to me like
You could, you could if you just said you're sorry
I know that we could work it out somehow
But if this was a movie, you'd be here by now

I know people change and these things happen
But I remember how it was back then
Wrapped up in your arms and our friends were laughin'
'Cause nothing like this ever happened to them
Now I'm pacing down the hall, chasing down your street
Flashback to the night when you said to me
That nothing's gonna change, not for me and you
Not before I knew how much I had to lose


Come back, come back, come back to me like
You would, you would if this was a movie
Stand in the rain outside 'til I came out
Come back, come back, come back to me like
You could, you could if you just said you're sorry
I know that we could work it out somehow
But if this was a movie you'd be here by now


If you're out there, if you're somewhere, if you're moving on
I've been waiting for you every day since you've been gone
I just want it back the way it was before
And I just want to see you back at my front door


And I say, "Come back, come back, come back to me like
You would before you said it's not that easy
Before the fight, before I locked you out
But I take it all back now"

Come back, come back, come back to me like
You would, you would if this was a movie
Stand in the rain outside 'til I came out
Come back, come back, come back to me like
You could, you could if you just said you're sorry
I know that we could work it out somehow
But if this was a movie you'd be here by now


You'd be here by now
It's not the kind of ending you want to see now
Baby, what about the ending?
Oh, I thought you'd be here by now
Oh, oh
Thought you'd be here by now`,coverArt:"https://images.genius.com/02e0642f1627ea57f5dcbff9585f1f75.1000x1000x1.jpg"},{songTitle:"I Knew You Were Trouble. by Taylor Swift",lyrics:`

Once upon a time, a few mistakes ago
I was in your sights, you got me alone
You found me, you found me
You found me-e-e-e-e
I guess you didn't care, and I guess I liked that
And when I fell hard, you took a step back
Without me, without me
Without me-e-e-e-e

And he's long gone when he's next to me
And I realize the blame is on me


'Cause I knew you were trouble when you walked in
So shame on me now
I'll flew me to places I'd never been
'Til you put me down, oh
I knew you were trouble when you walked in
So shame on me now
Flew me to places I'd never been
Now I'm lying on the cold hard ground
Oh, oh-oh
Trouble, trouble, trouble
Oh, oh-oh
Trouble, trouble, trouble


No apologies, he'll never see you cry
Pretends he doesn't know that he's the reason why
You're drowning, you're drowning
You're drowning-ing-ing-ing-ing
And I heard you moved on from whispers on the street
A new notch in your belt is all I'll ever be
And now I see, now I see
Now I see-e-e-e-e

He was long gone when he met me
And I realize the joke is on me, yeah


I knew you were trouble when you walked in (Oh)
So shame on me now
I'll flew me to places I'd never been
'Til you put me down, oh
I knew you were trouble when you walked in
So shame on me now
Flew me to places I'd never been (Yeah)
Now I'm lying on the cold hard ground
Oh, oh-oh
Trouble, trouble, trouble (Yeah, trouble)
Oh, oh-oh
Trouble, trouble, trouble


And the saddest fear
Comes creeping in
That you never loved me
Or her, or anyone, or anything (Yeah)


I knew you were trouble when you walked in
So shame on me now
I'll flew me to places I'd never been (Never been)
'Til you put me down, oh
I knew you were trouble when you walked in (Knew it right there)
So shame on me now (Knew it right there)
Flew me to places I'd never been (Ooh)
Now I'm lying on the cold hard ground
Oh, oh-oh
Trouble, trouble, trouble (Oh)
Oh, oh-oh
Trouble, trouble, trouble
I knew you were trouble when you walked in
Trouble, trouble, trouble
I knew you were trouble when you walked in
Trouble, trouble, trouble
`,coverArt:"https://images.genius.com/fbab78d5e0cfec2335760e4c4dd427a6.1000x1000x1.jpg"},{songTitle:"I Knew You Were Trouble (Taylor's Version) by Taylor Swift",lyrics:`Once upon a time, a few mistakes ago
I was in your sights, you got me alone
You found me, you found me
You found me-e-e-e-e
I guess you didn't care, and I guess I liked that
And when I fell hard, you took a step back
Without me, without me
Without me-e-e-e-e


And he's long gone when he's next to me
And I realize the blame is on me

'Cause I knew you were troubl\u0435 when you walked in
So shame on m\u0435 now
Flew me to places I'd never been
'Til you put me down, oh
I knew you were trouble when you walked in
So shame on me now
Flew me to places I'd never been
Now I'm lying on the cold hard ground
Oh, oh-oh
Trouble, trouble, trouble
Oh, oh-oh
Trouble, trouble, trouble


No apologies, he'll never see you cry
Pretends he doesn't know that he's the reason why
You're drowning, you're drowning
You're drowning-ing-ing-ing-ing
And I heard you moved on from whispers on the street
A new notch in your belt is all I'll ever be
And now I see, now I see
Now I see-e-e-e-e


He was long gone when he met me
And I realize the joke is on me, yeah

I knew you were trouble when you walked in (Oh)
So shame on me now
Flew me to places I'd never been
'Til you put me down, oh
I knew you were trouble when you walked in
So shame on me now
Flew me to places I'd never been (Yeah)
Now I'm lying on the cold hard ground
Oh, oh-oh
Trouble, trouble, trouble (Yeah, trouble)
Oh, oh-oh
Trouble, trouble, trouble


And the saddest fear
Comes creeping in
That you never loved me
Or her, or anyone, or anything
Yeah, oh-oh


I knew you were trouble when you walked in
So shame on me now
Flew me to places I'd never been (Never been)
'Til you put me down, oh
I knew you were trouble when you walked in (Knew it right there)
So shame on me now (Knew it right there)
Flew me to places I'd never been (Ooh)
Now I'm lying on the cold hard ground
Oh, oh-oh
Trouble, trouble, trouble (Oh)
Oh, oh-oh
Trouble, trouble, trouble (Trouble)
'Cause I knew you were trouble when you walked in
Trouble, trouble, trouble
'Cause I knew you were trouble when you walked in
Trouble, trouble, trouble`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"I Know Places by Taylor Swift",lyrics:`
I, I, I, I, I, I, I, I-I
I, I, I, I, I, I, I, I-I
I, I, I, I, I, I, I, I-I (I, I, I, I)


You stand with your hand on my waistline
It's a scene and we're out here in plain sight
I can hear them whisper as we pass by
It's a bad sign, bad sign
Something happens when everybody finds out
See the vultures circling, dark clouds
Love's a fragile little flame, it could burn out
It could burn out

'Cause they got the cages, they got the boxes and guns
They are the hunters, we are the foxes and we run


Baby, I know places we won't be found
And they'll be chasing their tails trying to track us down
'Cause I, I know places we can hide
I know places, I know places


Lights flash and we'll run for the fences
Let them say what they want, we won't hear it
Loose lips sink ships all the damn time
Not this time


Just grab my hand and don't ever drop it, my love
They are the hunters, we are the foxes, and we run


Baby, I know places we won't be found
And they'll be chasing their tails trying to track us down
'Cause I, I know places we can hide
I know places

They are the hunters, we are the foxes, and we run
Just grab my hand and don't ever drop it, my love


Baby, I know places we won't be found
And they'll be chasing their tails trying to track us down
'Cause I, I know places we can hide
I know places


They take their shots, but we're bulletproof (I know places)
And you know for me, it's always you (I know places)
In the dead of night, your eyes so green (I know places)
And I know for you, it's always me (I know places)
I, I, I, I, I, I, I, I-I
I, I, I, I, I, I, I, I-I
`,coverArt:"https://images.genius.com/da08ff60b6becc4fc1eaa3412338d18f.1000x1000x1.png"},{songTitle:"\u200Billicit affairs by Taylor Swift",lyrics:`Make sure nobody sees you leave
Hood over your head, keep your eyes down
Tell your friends\u2005you're\u2005out for a\u2005run
You\u2019ll be flushed when you return
Take\u2005the road less traveled by
Tell yourself you can always stop
What started in beautiful rooms
Ends with meetings in parking lots


And that's the thing about illicit affairs
And clandestine meetings and longing stares
It's born from just one single glance
But it dies and it dies and it dies
A million little times

Leave the perfume on the shelf
That you picked out just for him
So you leave no trace behind
Like you don\u2019t even exist
Take the words for what they are
A dwindling, mercurial high
A drug that only worked
The first few hundred times


And that's the thing about illicit affairs
And clandestine meetings and stolen stares
They show their truth one single time
But they lie and they lie and they lie
A million little times


And you wanna scream
Don't call me "kid," don't call me "baby"
Look at this godforsaken mess that you made me
You showed me colors you know I can't see with anyone else
Don't call me "kid," don't call me "baby"
Look at this idiotic fool that you made me
You taught me a secret language I can't speak with anyone else

And you know damn well
For you, I would ruin myself
A million little times`,coverArt:"https://images.genius.com/4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png"},{songTitle:"\u200Billicit affairs (the long pond studio sessions) by Taylor Swift",lyrics:`Make sure nobody sees you leave
Hood over your head, keep your eyes down
Tell your friends you're out for a run
You'll be flushed when you return
Take the road less traveled by
Tell yourself\u205Fyou\u205Fcan\u205Falways stop
What started\u205Fin beautiful rooms
Ends\u205Fwith meetings in parking lots


And that's the thing about illicit affairs
And clandestine meetings and longing stares
It's born from just one single glance
But it dies and it dies and it dies
A million little times

Leave the perfume on the sh\u0435lf
That you picked out just for him
So you leave no trac\u0435 behind
Like you don't even exist
And take the words for what they are
A dwindling, mercurial high
A drug that only worked
The first few hundred times


And that's the thing about illicit affairs
And clandestine meetings and stolen stares
They show their truth one single time
But they lie and they lie and they lie
A million little times


And you wanna scream
Don't call me "kid," don't call me "baby"
Look at this godforsaken mess that you made me
You showed me colors you know I can't see with anyone else
Don't call me "kid," don't call me "baby"
Look at this idiotic fool that you made me
You taught me a secret language I can't speak with anyone else

And you know damn well
For you, I would ruin myself
A million little times`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"I'm Only Me When I'm With You by Taylor Swift",lyrics:`Friday night beneath the stars
In a field behind your yard
You and I are painting pictures in the sky
And sometimes we don't say a thing
Just listen to the crickets sing
Everything I need is right here by my side


And I know everything about you
I don't wanna live without you

I'm only up when you're not down
Don't wanna fly if you're still on the ground
It's like no matter what I do
Well you drive me crazy half the time
The other half, I'm only tryin' to
Let you know that what I feel is true
And I'm only me when I'm with you


Just a small-town boy and girl
Livin' in a crazy world
Tryna figure out what is and isn't true
And I don't try to hide my tears
My secrets or my deepest fears
Through it all, nobody gets me like you do


And you know everything about me
You say that you can't live without me


I'm only up when you're not down
Don't wanna fly if you're still on the ground
It's like no matter what I do
Well you drive me crazy half the time
The other half, I'm only tryin' to
Let you know that what I feel is true
And I'm only me when I'm with you

When I'm with anybody else
It's so hard to be myself
And only you can tell


That I'm only up when you're not down
Don't wanna fly if you're still on the ground
It's like no matter what I do
Well you drive me crazy half the time
The other half, I'm only tryin' to
Let you know that what I feel is true
And I'm only me
Who I wanna be
Well I'm only me when I'm with you


With you
Uh-huh-huh, yeah`,coverArt:"https://images.genius.com/2b6c1070e8e790d6dadd03f5178d3974.440x440x1.jpg"},{songTitle:"Innocent by Taylor Swift",lyrics:`I guess you really did it this time
Left yourself in your war path
Lost your balance on a tightrope
Lost your mind trying to get it back


Wasn't it easier in your lunchbox days?
Always a bigger bed to crawl into
Wasn't it beautiful when you believed in everything
And everybody believed in you?

It's alright, just wait and see
Your string of lights are still bright to me, oh
Who you are is not where you've been
You're still an innocent
You're still an innocent


Did some things you can't speak of
But at night you live it all again
You wouldn't be shattered on the floor now
If only you had seen what you know now then


Wasn't it easier in your firefly-catching days?
When everything out of reach
Someone bigger brought down to you
Wasn't it beautiful running wild 'til you fell asleep
Before the monsters caught up to you?


It's alright, just wait and see
Your string of lights are still bright to me, oh
Who you are is not where you've been
You're still an innocent
It's okay, and life is a tough crowd
Thirty-two and still growing up now
Who you are is not what you did
You're still an innocent

Time turns flames to embers
You'll have new Septembers
Every one of us has messed up too, ooh
Minds change like the weather
I hope you remember
Today is never too late to be brand new, oh


It's alright, just wait and see
Your string of lights is still bright to me, oh
Who you are is not where you've been
You're still an innocent
It's okay, and life is a tough crowd
Thirty-two and still growing up now
Who you are is not what you did
You're still an innocent
You're still an innocent


Lost your balance on a tightrope, oh
It's never too late to get it back`,coverArt:"https://images.genius.com/d04f0a5d76810e4bc7c6d5f8e261bd91.1000x1000x1.jpg"},{songTitle:"Invisible by Taylor Swift",lyrics:`She can't see the way your eyes
Light up when you smile
She'll never notice how you stop and stare
Whenever she walks by


And you can't see me wanting you the way you want her
But you are everything to me


And I just wanna show you
She don't even know you
She's never gonna love you like I want to
And you just see right through me
But if you only knew me
We could be a beautiful miracle, unbelievable
Instead of just invisible

Oh, yeah, oh


There's a fire inside of you
That can't help but shine through
She's never gonna see the light
No matter what you do


And all I think about is how to make you think of me
And everything that we could be


And I just wanna show you
She don't even know you
She's never gonna love you like I want to
And you just see right through me
But if you only knew me
We could be a beautiful miracle, unbelievable
Instead of just invisible


Like shadows in a faded light
Oh, we're invisible
I just wanna open your eyes
And make you realize

I just wanna show you
She don't even know you
Baby, let me love you, let me want you
You just see right through me
But if you only knew me
We could be a beautiful miracle, unbelievable
Instead of just invisible


Oh, yeah


She can't see the way your eyes
Light up when you smile`,coverArt:"https://images.genius.com/be8b30abcf286f1bf996e82e7e96dc14.1000x1000x1.jpg"},{songTitle:"\u200Binvisible string by Taylor Swift",lyrics:`Green was the color of the grass
Where I used to read at Centennial Park
I used\u2005to\u2005think I would\u2005meet somebody there
Teal was the color\u2005of your shirt
When you were sixteen at the yogurt shop
You\u205Fused\u205Fto\u205Fwork at to\u205Fmake a little\u205Fmoney


Time, curious time
Gave me no compasses, gave me no signs
Were there clues I didn't see?
And isn't it just so pretty to think
All along there was some
Invisible string
Tying you to me?
Ooh-ooh-ooh-ooh

Bad was the blood of the song in the cab
On your first trip to LA
You ate at my favorite spot for dinner
Bold was the waitress on our three-year trip
Getting lunch down by the Lakes
She said I looked like an American singer


Time, mystical time
Cutting me open, then healing me fine
Were there clues I didn't see?
And isn't it just so pretty to think
All along there was some
Invisible string
Tying you to me?
Ooh-ooh-ooh-ooh


A string that pulled me
Out of all the wrong arms, right into that dive bar
Something wrapped all of my past mistakes in barbed wire
Chains around my demons
Wool to brave the seasons
One single thread of gold
Tied me to you

Cold was the steel of my axe to grind
For the boys who broke my heart
Now I send their babies presents
Gold was the color of the leaves
When I showed you around Centennial Park
Hell was the journey but it brought me heaven


Time, wondrous time
Gave me the blues and then purple-pink skies
And it's cool
Baby, with me
And isn't it just so pretty to think
All along there was some
Invisible string
Tying you to me?
Ooh-ooh-ooh-ooh
Me
Ooh-ooh-ooh-ooh


(Ah-ah-ah)
(Ah-ah-ah)`,coverArt:"https://images.genius.com/4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png"},{songTitle:"\u200Binvisible string (the long pond studio sessions) by Taylor Swift",lyrics:`Green was the color of the grass
Where I used to read at Centennial Park
I used to think I would meet somebody there
Teal was the color of your shirt
When you were sixteen at the yogurt shop
You used to work at to make a little money


Time, curious time
Gave me no compasses, gave me no signs
Were there clues I didn't see?
And isn't it just so pretty to think
All along there was some
Invisible string
Tying you to me?
Ooh-ooh-ooh-ooh

Bad was the blood of the song in the cab
On your first trip to LA
You ate at my favorite spot for dinner
Bold was the waitress on our three-year trip
Getting lunch down by the Lakes
She said I looked like an American singer


Time, mystical time
Cutting me open, then healing me fine
Were there clues I didn't see?
And isn't it just so pretty to think
All along there was some
Invisible string
Tying you to me?
Ooh-ooh-ooh-ooh


A string that pulled me
Out of all the wrong arms, right into that dive bar
Something wrapped all of my past mistakes in barbed wire
Chains around my demons
Wool to brave the seasons
One single thread of gold
Tied me to you

Cold was the steel of my axe to grind
For the boys who broke my heart
Now I send their babies presents
Gold was the color of the leaves
When I showed you around Centennial Park
Hell was the journey but it brought me heaven


Time, wondrous time
Gave me the blues and then purple-pink skies
And it's cool
Baby, with me
And isn't it just so pretty to think
All along there was some
Invisible string
Tying you to me?
Ooh-ooh-ooh-ooh
Me
Ooh-ooh-ooh-ooh


Ah-ah-ah, yeah
Ooh-ooh-ooh-ooh, oh no`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"I Think He Knows by Taylor Swift",lyrics:`I think he knows
His footprints on the sidewalk
Lead to where I can't stop
Go there every\u2005night
I\u2005think he knows
His\u2005hands around a cold glass
Make me\u2005wanna know that
Body like it's mine


He got that boyish look that I like in a man
I am an architect, I'm drawing up the plans
It's like I'm 17, nobody understands
No one understands

He got my heartbeat
Skipping down 16th Avenue
Got that, ah, I mean
Wanna see what's under that attitude like
I want you, bless my soul
And I ain't gotta tell him, I think he knows
I think he knows


I think he knows
When we get all alone
I'll make myself at home
And he'll want me to stay
I think he knows
He'd better lock it down
Or I won't stick around
'Cause good ones never wait (Ha)


He got that boyish look that I like in a man
I am an architect, I'm drawing up the plans
He's so obsessed with me and, boy, I understand
Boy, I understand


He got my heartbeat (Heartbeat)
Skipping down 16th Avenue
Got that, ah, I mean (I mean)
Wanna see what's under that attitude like
I want you, bless my soul
And I ain't gotta tell him, I think he knows
I think he knows

I want you, bless my
I want you, bless my
I want you, bless my
I want you, bless my soul


Lyrical smile, indigo eyes, hand on my thigh
We could follow the sparks, I'll drive
Lyrical smile, indigo eyes, hand on my thigh
We could follow the sparks, I'll drive
"So where we gonna go?"
I whisper in the dark
"Where we gonna go?"
I think he knows


He got my heartbeat (Heartbeat)
Skipping down 16th Avenue (Baby)
Got that, ah, I mean (I mean)
Wanna see what's under that attitude like (Yeah)
I want you, bless my soul
And I ain't gotta tell him, I think he knows
I think he knows


I want you, bless my
I want you, bless my
I want you, bless my (Oh, baby)
I want you, bless my soul (He got my heartbeat)
I want you, bless my (Skipping down 16th Avenue, baby)
I want you, bless my
I want you, bless my soul
And I ain't gotta tell him, I think he knows`,coverArt:"https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"},{songTitle:"It's Nice to Have a Friend by Taylor Swift",lyrics:`Ooh
Ooh


School bell rings, walk me home
Sidewalk chalk covered in snow
Lost my gloves, you give me one
"Wanna hang out?" Yeah, sounds like fun
Video games, you pass me a note
Sleeping in tents

It's nice to have a friend (Ooh)
It's nice to have a friend (Ooh)


Light pink sky, up on the roof
Sun sinks down, no curfew
20 questions, we tell the truth
You've been stressed out lately, yeah, me too
Something gave you the nerve
To touch my hand


It's nice to have a friend (Ooh)
It's nice to have a friend (Ooh)




Church bells ring, carry me home
Rice on the ground looks like snow
Call my bluff, call you "Babe"
Have my back, yeah, every day
Feels like home, stay in bed
The whole weekend

It's nice to have a friend (Ooh)
It's nice to have a friend (Ooh)
It's nice to have a friend (Ooh)
(Ooh)`,coverArt:"https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"},{songTitle:"\u200Bit\u2019s time to go by Taylor Swift",lyrics:`When the dinner is cold and the chatter gets old
You ask for the tab
Or that moment again, he's insisting that friends
Look at each other like that
When the words of a sister come back in whispers
That prove she was not in fact what she seemed
Not a twin from your dreams
She's a crook who was caught


That old familiar body ache
The snaps from the same little breaks in your soul
You know when it's time to go

Twenty years at your job
Then the son of the boss gets the spot that was yours
Or trying to stay for the kids
When keeping it how it is will only break their hearts worse


That old familiar body ache
The snaps from the same little breaks in your soul
You know when it's time to go


Sometimes giving up is the strong thing
Sometimes to run is the brave thing
Sometimes walking out is the one thing
That will find you the right thing
Sometimes giving up is the strong thing
Sometimes to run is the brave thing
Sometimes walking out is the one thing
That will find you the right thing


Fifteen years, fifteen million tears
Begging 'til my knees bled
I gave it my all, he gave me nothing at all
Then wondered why I left
Now he sits on his throne in his palace of bones
Praying to his greed
He's got my past frozen behind glass
But I've got me

That old familiar body ache
The snaps from the same little breaks in my soul
I know when it's time to go


Sometimes giving up is the strong thing
Sometimes to run is the brave thing
Sometimes walking out is the one thing
That will find you the right thing
Sometimes giving up is the strong thing
Sometimes to run is the brave thing
Sometimes walking out is the one thing
That will find you the right thing


That will find you the right thing
And you know in your soul
You know in your soul
When it's time to go
You know, you know, you know, you know
When it's time to go
So then you go
Then you go
You just go`,coverArt:"https://images.genius.com/a43146535419531bcf8b9dca82c68f85.1000x1000x1.png"},{songTitle:"\u200Bivy by Taylor Swift",lyrics:`How's one to know?
I'd meet you where the spirit meets the bones
In a faith-forgotten land
In from the snow
Your touch brought forth an incandescent glow
Tarnished but so grand


And the old widow goes to the stone every day
But I don't, I just sit here and wait
Grieving for the living

Oh, goddamn
My pain fits in the palm of your freezing hand
Taking mine, but it's been promised to another
Oh, I can't
Stop you putting roots in my dreamland
My house of stone, your ivy grows
And now I'm covered in you


I wish to know
The fatal flaw that makes you long to be
Magnificently cursed
He's in the room
Your opal eyes are all I wish to see
He wants what's only yours


Oh, goddamn
My pain fits in the palm of your freezing hand
Taking mine, but it's been promised to another
Oh, I can't
Stop you putting roots in my dreamland
My house of stone, your ivy grows
And now I'm covered
Related Songs
Clover blooms in the fields
Spring breaks loose, the time is near
What would he do if he found us out?
Crescent moon, coast is clear
Spring breaks loose, but so does fear
He's gonna burn this house to the ground
How's one to know?
I'd live and die for moments that we stole
On begged and borrowed time
So tell me to run
Or dare to sit and watch what we'll become
And drink my husband's wine


Oh, goddamn
My pain fits in the palm of your freezing hand
Taking mine, but it's been promised to another
Oh, I can't
Stop you putting roots in my dreamland
My house of stone, your ivy grows
And now I'm covered in you
And I'm covered in you


So yeah, it's a fire
It's a goddamn blaze in the dark
And you started it
You started it
So yeah, it's a war
It's the goddamn fight of my life
And you started it
You started it

Oh, I can't
Stop you putting roots in my dreamland
My house of stone, your ivy grows
And now I'm covered
In you, in you
Now I'm covered in you
In you`,coverArt:"https://images.genius.com/3e354c719fe236ab4a75adc6ea4c7fca.1000x1000x1.png"},{songTitle:"I Want You Back (Live/2011) by Taylor Swift",lyrics:`Ooh baby give me one more chance
(I'll show you that I love you)
Oh won\u2019t  you please let me
Back in your heart?

Oh darling I was blind to let you go
(Let you go baby)
Now that I see you in her arms

I want you back
I want you back
I want you back
I want you back(I want you back), ooh-ooh baby

I want you back
I want you back
I want you back

Oh-woah-oh

Ooh baby give me one more chance
(I'll show you that I love you)
Won\u2019t  you please let me
Back in your heart?
Oh darling I was blind to let you go
(Let you go baby)
Now that I see you in her arms
I want you back
I want you back
Ooh-ooh baby`,coverArt:"https://images.genius.com/6510355b9fa1e35fa7e939852c7405d0.900x900x1.jpg"},{songTitle:"I Wish You Would by Taylor Swift",lyrics:`It's 2 AM in your car
Windows down, you pass my street, the memories start
You say it's in the past, you drive straight ahead
You're thinking that I hate you now
'Cause you still don't know what I never said


I wish you would come back
Wish I never hung up the phone like I did, I
Wish you knew that
I'd never forget you as long as I live, and I
Wish you were right here, right now, it's all good
I wish you would

It's 2 AM in my room
Headlights pass the window pane
I think of you
We're a crooked love in a straight line down
Makes you want to run and hide
But it makes you turn right back around


I wish you would come back
Wish I never hung up the phone like I did, I
Wish you knew that
I'd never forget you as long as I live, and I
Wish you were right here, right now, it's all good
I wish you would
I wish we could go back
And remember what we were fighting for, and I
Wish you knew that
I miss you too much to be mad anymore, and I
Wish you were right here, right now, it's all good
I wish you would


I, I, I, I, I, I wish I, wish I
I, I, I, I, I, I wish I, wish I
I, I, I, I, I, I wish I, wish I

You always knew how to push my buttons
You give me everything and nothing
This mad, mad love makes you come running
To stand back where you stood
I wish you would, I wish you would
(I wish you would, I wish you would)
I wish you would, I wish you would
(I wish you would, I wish you would)
(I wish I, wish I)


2 AM, here we are
See your face, hear my voice in the dark
We're a crooked love in a straight line down
Makes you wanna run and hide
But it made us turn right back around


I wish you would come back
Wish I never hung up the phone like I did, I
Wish you knew that
I'd never forget you as long as I live, and I
Wish you were right here, right now, it's all good
I wish you would
I wish you would come back
Wish I never hung up the phone like I did, I
Wish you knew that
I'd never forget you as long as I live, and I
Wish you were right here, right now, it's all good
I wish you would
I wish we could go back
And remember what we were fighting for, and I
Wish you knew that
I miss you too much to be mad anymore, and I
Wish you were right here, right now, it's all good
I wish you would

(I, I, I, I, I, I wish I, wish I)
You always knew how to push my buttons
You give me everything and nothing
This mad, mad love makes you come running
To stand back where you stood
I wish you would, I wish you would
(I wish you would, I wish you would)
I wish you would, I wish you would
(I wish you would, I wish you would, I wish you would)
(I, I, I, I, I, I wish I, wish I)
I, I, I, I, I, I wish I, wish I
I, I, I, I, I, I wish I, wish I
I wish you would`,coverArt:"https://images.genius.com/da08ff60b6becc4fc1eaa3412338d18f.1000x1000x1.png"},{songTitle:"Jump Then Fall by Taylor Swift",lyrics:`I like the way you sound in the morning
We're on the phone and without a warning
I realize your laugh is the best sound
I have ever heard
I like the way I can't keep my focus
I watch you talk, you didn't notice
I hear the words but all I can think is
We should be together


Every time you smile, I smile
And every time you shine, I'll shine for you

Whoa oh, I'm feeling you, baby
Don't be afraid to
Jump then fall
Jump then fall into me
Baby, I'm never gonna leave you
Say that you wanna be with me too
'Cause I'ma stay through it all
So jump then fall


Well I like the way your hair falls in your face
You got the keys to me
I love each freckle on your face, oh
I've never been so wrapped up, honey
I like the way you're everything I ever wanted
I had time to think it o-over
And all I can say is come closer
Take a deep breath and  jump then fall into me


'Cause every time you smile, I smile
And every time you shine, I'll shine for you


Whoa oh, I'm feeling you, baby
Don't be afraid to
Jump then fall
Jump then fall into me
Baby, I'm never gonna leave you
Say that you wanna be with me too
'Cause I'ma stay through it all
So jump then fall

The bottom's gonna drop out from under our feet
I'll catch you, I'll catch you
When people say things that bring you to your knees
I'll catch you
The time is gonna come when you're so mad you could cry
But I'll hold you through the night until you smile


Whoa oh, I need you, baby
Don't be afraid, please
Jump then fall
Jump then fall into me
Baby, I'm never gonna leave you
Say that you wanna be with me too
'Cause I'ma stay through it all
So jump then fall
Jump then fall, baby
Jump then fall into me, into me


Every time you smile, I smile
And every time you shine, I shine
And every time you're here
Baby, I'll show you, I'll show you
You can jump then fall, jump then fall
Jump then fall into me, into me, yeah`,coverArt:"https://images.genius.com/52185c8266a672e8c5cbbfbc6b4eb08e.1000x1000x1.jpg"},{songTitle:"Jump Then Fall (Taylor's Version) by Taylor Swift",lyrics:`I like the way you sound in the morning
We're on the phone and without a warning
I realize your laugh is the best sound
I have ever heard
I like the way I can't keep my focus
I watch you talk, you didn't notice
I hear the words but all I can think is
We should be together


Every time you smile, I smile
And every time you shine, I'll shine for you

Whoa oh, I'm feeling you, baby
Don't be afraid to
Jump then fall
Jump then fall into me
Baby, I'm never gonna leave you
Say that you wanna be with me too
'Cause I'ma stay through it all
So jump then fall


Well, I like the way your hair falls in your face
You got the keys to me
I love each freckle on your face, oh
I've never been so wrapped up, honey
I like the way you're everything I ever wanted
I had time to think it oh-over
And all I can say is come closer
Take a deep breath and  jump then fall into me


'Cause every time you smile, I smile
And every time you shine, I'll shine for you


Whoa oh, I'm feeling you, baby
Don't be afraid to
Jump then fall
Jump then fall into me
Baby, I'm never gonna leave you
Say that you wanna be with me too
'Cause I'ma stay through it all
So jump then fall

The bottom's gonna drop out from under our feet
I'll catch you, I'll catch you
When people say things that bring you to your knees
I'll catch you
The time is gonna come when you're so mad you could cry
But I'll hold you through the night until you smile


Whoa oh, I need you, baby
Don't be afraid, please
Jump then fall
Jump then fall into me
Baby, I'm never gonna leave you
Say that you wanna be with me too
'Cause I'ma stay through it all
So jump then fall
Jump then fall, baby
Jump then fall into me, into me


Every time you smile, I smile
And every time you shine, I shine
And every time you're here
Baby, I'll show you, I'll show you
You can jump then fall, jump then fall
Jump then fall into me, into me, yeah`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"King Of My Heart by Taylor Swift",lyrics:`I'm perfectly fine, I live on my own
I made up my mind, I'm better off bein' alone
We met a few weeks ago
Now you try on callin' me "Baby" like tryin' on clothes


Salute to me, I'm your American queen
And you move to me like I'm a Motown beat
And we rule the kingdom inside my room
'Cause all the boys and their expensive cars
With their Range Rovers and their Jaguars
Never took me quite where you do

And all at once, you are the one I have been waiting for
King of my heart, body, and soul, ooh whoa
And all at once, you're all I want, I'll never let you go
King of my heart, body, and soul, ooh whoa


And all at once, I've been waiting, waiting
Ooh whoa, ooh whoa
And all at once, you are the one, I have been waiting, waiting
Body and soul, ooh whoa
And all at once


Late in the night, the city's asleep
Your love is a secret I'm hoping, dreaming, dying to keep
Change my priorities
The taste of your lips is my idea of luxury


Salute to me, I'm your American queen
And you move to me like I'm a Motown beat
And we rule the kingdom inside my room
(Inside my room, oh)
'Cause all the boys and their expensive cars
With their Range Rovers and their Jaguars
Never took me quite where you do (Where you do)

And all at once, you are the one I have been waiting for
King of my heart, body, and soul, ooh whoa
And all at once, you're all I want, I'll never let you go
King of my heart (My heart), body, and soul, ooh whoa


And all at once (Hey), I've been waiting, waiting (Waiting)
Ooh, whoa, ooh whoa
And all at once, you are the one
I have been waiting (Waiting), waiting (Waiting)
Body and soul, ooh whoa
And all at once


Is this the end of all the endings?
My broken bones are mending
With all these nights we're spending
Up on the roof with a school girl crush
Drinking beer out of plastic cups
Say you fancy me, not fancy stuff
Baby, all at once, this is enough


And all at once, you are the one I have been waiting for
King of my heart, body, and soul, ooh whoa
And all at once, you are the one I have been waiting for
King of my heart, body, and soul, ooh whoa
And all at once, you're all I want, I'll never let you go
King of my heart (My heart), body, and soul (My soul), ooh whoa

And all at once, I've been waiting, waiting
Ooh whoa, ooh whoa
And all at once
'Cause you're the one I have been waiting, waiting
Body and soul, ooh whoa
And all at once`,coverArt:"https://images.genius.com/d6eba083b40fcec8b16ab1b4489fe057.1000x1000x1.png"},{songTitle:"Last Christmas by Taylor Swift",lyrics:`Last Christmas I gave you my heart
But the very next day, you gave it away
This year, to save me from tears
I will give it to someone special


Once bitten and twice shied
I keep my distance but you still catch my eye
Tell me baby
Do you recognize me
Well, it has been a year, it does not surprise me
Merry Christmas, I wrapped it up and sent it
With a note saying 'I love you', I meant it
Now I know what a fool I've been
But if you kiss me now, I know you would fool me again

Last Christmas I gave you my heart
But the very next day, you gave it away
This year, to save me from tears
I will give it to someone special
Last Christmas I gave you my heart
But the very next day, you gave it away
This year, to save me from tears
I will give it to someone special


A crowded room and friends with tired eyes
I am hiding from you and your soul of ice
My God, I thought you were someone to rely on
Me, I guess I was a shoulder to cry on
A face on a lover with a fire in his heart
A girl on a cover but you tore her apart
Maybe this year
Maybe this year I will give it to someone special


Because last Christmas I gave you my heart
But the very next day, you gave it away
This year, to save me from tears
I will give it to someone special
Last Christmas I gave you my heart
But the very next day, you gave it away
This year, to save me from tears
I will give it to someone special
And last Christmas
And this year
It won't be anything like, anything like

Last Christmas I gave you my heart
But the very next day, you gave it away
This year, to save me from tears
I will give it to someone special`,coverArt:"https://images.genius.com/46a9fca430dd35d09273fc0deaba7bf7.1000x1000x1.jpg"},{songTitle:"Last Kiss by Taylor Swift",lyrics:`I still remember the look on your face
Lit through the darkness at 1:58
The words that you whispered for just us to know
You told me you loved me
So why did you go away?
Away


I do recall now, the smell of the rain
Fresh on the pavement
I ran off the plane
That July ninth, the beat of your heart
It jumps through your shirt
I can still feel your arms

But now I'll go sit on the floor
Wearing your clothes
All that I know is I don't know
How to be something you miss


I never thought we'd have a last kiss
Never imagined we'd end like this
Your name, forever the name on my lips


I do remember the swing of your step
The life of the party, you're showing off again
And I'd roll my eyes and then you'd pull me in
I'm not much for dancing, but for you, I did
Because I love your handshake, meeting my father
I love how you walk with your hands in your pockets
How you'd kiss me when I was in the middle of saying something
There's not a day I don't miss those rude interruptions


And I'll go sit on the floor
Wearing your clothes
All that I know is I don't know
How to be something you miss

I never thought we'd have a last kiss
I never imagined we'd end like this
Your name, forever the name on my lips, ooh


So I'll watch your life in pictures like I used to watch you sleep
And I feel you forget me like I used to feel you breathe
And I'll keep up with our old friends
Just to ask them how you are
Hope it's nice where you are
And I hope the sun shines and it's a beautiful day
And something reminds you, you wish you had stayed
You can plan for a change in the weather and time
But I never planned on you changing your mind


So I'll go sit on the floor
Wearing your clothes
All that I know is I don't know
How to be something you miss


I never thought we'd have a last kiss
Never imagined we'd end like this
Your name, forever the name on my lips

Just like our last kiss
Forever the name on my lips
Forever the name on my lips
Just like our last`,coverArt:"https://images.genius.com/d04f0a5d76810e4bc7c6d5f8e261bd91.1000x1000x1.jpg"},{songTitle:"Last Kiss (Live/2011) by Taylor Swift",lyrics:`I still remember the look on your face
Lit through the darkness at 1:58
The words that\u2005you\u2005whispered
For just us\u2005to know
You told me you loved\u2005me
So why did you go away? Away
I do recall now\u205Fthe\u205Fsmell\u205Fof the rain\u205FFresh on the\u205Fpavement
I ran off the plane
That July 9th
The beat of your heart
It jumps through your shirt
I can still feel your arms

But now I'll go sit on the floor
Wearing your clothes
All that I know is
I don't know how to be something you miss
I never thought we'd have a last kiss
I Never imagined we'd end like this
Your name, forever the name on my lips


I still remember the swing of your step
The life of the party, you're showing off again
And I roll my eyes and then
You pull me in
I'm not much for dancing
But for you I did

Because I love your handshake, meeting my father
I love how you walk with your hands in your pockets
How you kissed me when I was in the middle of saying something
There's not a day I don't miss those rude interruptions


And I'll go sit on the floor
Wearing your clothes
All that I know is
I don't know how to be something you miss
I never thought we'd have a last kiss
I never imagined we'd end like this
Your name, forever the name on my lips, ooh

So I'll watch your life in pictures like I used to watch you sleep
And I feel you forget me like I used to feel you breathe
And I keep up with our old friends just to ask them how you are
Hope it's nice where you are
And I hope the sun shines
And it's a beautiful day
And something reminds you
You wish you had stayed
You can plan for a change in weather and time
But I never planned on you changing your mind


And I'll go sit on the floor
Wearing your clothes
All that I know is
I don't know how to be something you miss
I never thought we'd have a last kiss
I never imagined we'd end like this
Your name, forever the name on my lips, ooh
Just like our last kiss
Forever the name on my lips


Just like our last`,coverArt:"https://images.genius.com/6510355b9fa1e35fa7e939852c7405d0.900x900x1.jpg"},{songTitle:"London Boy by Taylor Swift",lyrics:`We can go driving in, on my scooter
Uh, you know, just 'round London
Oh, I'd...


I love my hometown as much as Motown, I love SoCal
And you know I love Springsteen, faded blue jeans, Tennessee whiskey
But something happened, I heard him laughing
I saw the dimples first and then I heard the accent
They say home is where the heart is
But that's not where mine lives

You know I love a London boy
I enjoy walking Camden Market in the afternoon
He likes my American smile, like a child when our eyes meet
Darling, I fancy you
Took me back to Highgate, met all of his best mates
So I guess all the rumors are true
You know I love a London boy
Boy, I fancy you (Ooh)


And now I love high tea, stories from Uni, and the West End
You can find me in the pub, we are watching rugby with his school friends
Show me a gray sky, a rainy cab ride
Babes, don't threaten me with a good time
They say home is where the heart is
But God, I love the English


You know I love a London boy, I enjoy nights in Brixton
Shoreditch in the afternoon
He likes my American smile, like a child when our eyes meet
Darling, I fancy you
Took me back to Highgate, met all of his best mates
So I guess all the rumors are true
You know I love a London boy
Boy, I fancy you

So please show me Hackney
Doesn't have to be Louis V up on Bond Street
Just wanna be with you
Wanna be with you
Stick with me, I'm your queen
Like a Tennessee Stella McCartney on the Heath
Just wanna be with you (Wanna be with you)
Wanna be with you (Oh)


You know I love a London boy, I enjoy walking Soho
Drinking in the afternoon (Yeah)
He likes my American smile, like a child when our eyes meet
Darling, I fancy you (You)
Took me back to Highgate, met all of his best mates
So I guess all the rumors are true (Yeah)
You know I love a London boy (Oh)
Boy (Oh), I fancy you (I fancy you, ooh)


So please show me Hackney
Doesn't have to be Louis V up on Bond Street
Just wanna be with you
I, I, I fancy you
Oh whoa, oh, I
Stick with me, I'm your queen
Like a Tennessee Stella McCartney on the Heath
Just wanna be with you (Ooh)
Wanna be with you
I fancy you (Yeah), I fancy you
Oh whoa, ah`,coverArt:"https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"},{songTitle:"Long Live by Taylor Swift",lyrics:`I said, "Remember this moment"
In the back of my mind
The time we stood with our shaking hands
The crowds in stands went wild
We were the kings and the queens
And they read off our names
The night you danced like you knew our lives would
Never be the same
You held your head like a hero on a history book page
It was the end of a decade
But the start of an age

Long live the walls we crashed through
How the kingdom lights shined just for me and you
I was screaming, "Long live all the magic we made"
And bring on all the pretenders
One day, we will be remembered


I said, "Remember this feeling"
I pass the pictures around
Of all the years that we stood there on the sidelines
Wishing for right now
We are the kings and the queens
You traded your baseball cap for a crown
When they gave us our trophies
And we held them up for our town
And the cynics were outraged
Screaming, "This is absurd"
'Cause for a moment, a band of thieves in ripped up jeans
Got to rule the world


Long live the walls we crashed through
How the kingdom lights shined just for me and you
I was screaming, "Long live all the magic we made"
And bring on all the pretenders, I'm not afraid
Long live all the mountains we moved
I had the time of my life fighting dragons with you
I was screaming, "Long live that look on your face"
And bring on all the pretenders
One day, we will be remembered
Related Songs
Hold on to spinning around
Confetti falls to the ground
May these memories break our fall
Will you take a moment? Promise me this
That you'll stand by me forever
But if, God forbid, fate should step in
And force us into a goodbye
If you have children some day
When they point to the pictures
Please tell 'em my name
Tell 'em how the crowds went wild
Tell 'em how I hope they shine
Long live the walls we crashed through
I had the time of my life with you


Long, long live the walls we crashed through
How the kingdom lights shined just for me and you
And I was screaming, "Long live all the magic we made"
And bring on all the pretenders, I'm not afraid
Singing, "Long live all the mountains we moved"
I had the time of my life fighting dragons with you
And long, long live that look on your face
And bring on all the pretenders
One day, we will be remembered`,coverArt:"https://images.genius.com/d04f0a5d76810e4bc7c6d5f8e261bd91.1000x1000x1.jpg"},{songTitle:"Long Live (Live/2011) by Taylor Swift",lyrics:`I said, remember this moment, in the back of my mind
The time we stood with\u2005our\u2005shaking hands
The crowds\u2005in stands went wild
We were the\u2005kings and the queens
And they read off our names
The night\u205Fyou\u205Fdanced\u205Flike you knew\u205Four lives
Would never\u205Fbe the same
You held your head like a hero
On a history book page
It was the end of a decade
But the start of an age

Long live the walls we crashed through
All the kingdom lights shined just for me and you
I was screaming, long live all the magic we made
And bring on all the pretenders
One day, we will be remembered


I said, remember this feeling
I passed the pictures around
Of all the years that we stood there
On the side-lines wishing for right now
We are the kings and the queens
You traded your baseball cap for a crown
When they gave us our trophies
And we held them up for our town
And the cynics were outraged
Screaming, "This is absurd"
'Cause for a moment, a band of thieves
In ripped up jeans got to rule the world


Long live the walls we crashed through
All the kingdom lights shined just for me and you
I was screaming, long live all the magic we made
And bring on all the pretenders
I'm not afraid
Long live all the mountains we moved
I had the time of my life fighting dragons with you
I was screaming, long live that look on your face
And bring on all the pretenders
One day, we will be remembered

Hold on to spinning around
Confetti falls to the ground
May these memories break our fall


We have absolutely loved spending time in your town, and you have been so amazing to us
I mean, you guys know every single word and you\u2019ve danced this entire night and it means the world to me and every single person you see on stage
Thank you


Will you take a moment?
And Promise me this
That you'll stand by me forever
But if, God forbid, fate should step in
And force us into a goodbye
If you have children some day
When they point to the pictures
Please tell \u2018em my name
Tell them how the crowds went wild
Tell them how I hope they shine
Long live the walls we crashed through
I had the time of my life, with you


Long, long live the walls we crashed through
All the kingdom lights shined just for me and you
I was screaming, long live all the magic we made
And bring on all the pretenders
I'm not afraid
Singing, long live all the mountains we moved
I had the time of my life fighting dragons with you
Long, long live that look on your face
And bring on all the pretenders
One day, we will be remembered`,coverArt:"https://images.genius.com/6510355b9fa1e35fa7e939852c7405d0.900x900x1.jpg"},{songTitle:"\u200Bl\u200Bong story short by Taylor Swift",lyrics:`Fatefully
I tried to pick my battles 'til the battle picked me
Misery
Like the war of words I shouted in my sleep
And you passed right by
I was in the alley, surrounded on all sides
The knife cuts both ways
If the shoe fits, walk in it 'til your high heels break


And I fell from the pedestal
Right down the rabbit hole
Long story short, it was a bad time
Pushed from the precipice
Clung to the nearest lips
Long story short, it was the wrong guy

Now I'm all about you
I'm all about you, ah
Yeah, yeah
I'm all about you, ah
Yeah, yeah


Actually
I always felt I must look better in the rear view
Missing me
At the golden gates they once held the keys to
When I dropped my sword
I threw it in the bushes and knocked on your door
And we live in peace
But if someone comes at us, this time, I'm ready


'Cause I fell from the pedestal
Right down the rabbit hole
Long story short, it was a bad time
Pushed from the precipice
Clung to the nearest lips
Long story short, it was the wrong guy


Now I'm all about you
I'm all about you, ah
Yeah, yeah
I'm all about you

No more keepin' score
Now I just keep you warm (Keep you warm)
No more tug of war
Now I just know there's more (Know there's more)
No more keepin' score
Now I just keep you warm (Keep you warm)
And my waves meet your shore
Ever and evermore


Past me
I wanna tell you not to get lost in these petty things
Your nemeses
Will defeat themselves before you get the chance to swing
And he's passing by
Rare as the glimmer of a comet in the sky
And he feels like home
If the shoe fits, walk in it everywhere you go


And I fell from the pedestal
Right down the rabbit hole
Long story short, it was a bad time
Pushed from the precipice
Climbed right back up the cliff
Long story short, I survived

Now I'm all about you
(And now) I'm all about you, ah
(And now) I'm all about you
(And now) I'm all about you, ah
Yeah, yeah
I'm all about you
(And now) Yeah, yeah
I'm all about you


Long story short, it was a bad time
Long story short, I survived`,coverArt:"https://images.genius.com/3e354c719fe236ab4a75adc6ea4c7fca.1000x1000x1.png"},{songTitle:"Look What You Made Me Do by Taylor Swift",lyrics:`I don't like your little games
Don't like your tilted stage
The role you made me play
Of the fool, no, I don't like you
I don't like your perfect crime
How you laugh when you lie
You said the gun was mine
Isn't cool, no, I don't like you (Oh)


But I got smarter, I got harder in the nick of time
Honey, I rose up from the dead, I do it all the time
I've got a list of names and yours is in red, underlined
I check it once, then I check it twice, oh!

Ooh, look what you made me do
Look what you made me do
Look what you just made me do
Look what you just made me\u2014
Ooh, look what you made me do
Look what you made me do
Look what you just made me do
Look what you just made me do


I don't like your kingdom keys
They once belonged to me
You asked me for a place to sleep
Locked me out and threw a feast (What?)
The world moves on, another day, another drama, drama
But not for me, not for me, all I think about is karma
And then the world moves on, but one thing's for sure
Maybe I got mine, but you'll all get yours


But I got smarter, I got harder in the nick of time
Honey, I rose up from the dead, I do it all the time
I've got a list of names and yours is in red, underlined
I check it once, then I check it twice, oh!

Ooh, look what you made me do
Look what you made me do
Look what you just made me do
Look what you just made me\u2014
Ooh, look what you made me do
Look what you made me do
Look what you just made me do
Look what you just made me do


I don't trust nobody and nobody trusts me
I'll be the actress starring in your bad dreams
I don't trust nobody and nobody trusts me
I'll be the actress starring in your bad dreams
I don't trust nobody and nobody trusts me
I'll be the actress starring in your bad dreams
I don't trust nobody and nobody trusts me
I'll be the actress starring in your bad dreams
(Ooh, look what you made me do
Look what you made me do
Look what you just made me do
Look what you just made me\u2014
Ooh, look what you made me do
Look what you made me do
Look what you just made me\u2014)
"I'm sorry, the old Taylor can't come to the phone right now
"Why? Oh, 'cause she's dead!" (Oh)

Ooh, look what you made me do
Look what you made me do
Look what you just made me do
Look what you just made me\u2014
Ooh, look what you made me do
Look what you made me do
Look what you just made me do
Look what you just made me do
Ooh, look what you made me do
Look what you made me do
Look what you just made me do
Look what you just made me\u2014
Ooh, look what you made me do
Look what you made me do
Look what you just made me do
Look what you just made me do`,coverArt:"https://images.genius.com/bcd1ae9927c14b71b487d00cb4fa1b8c.1000x1000x1.png"},{songTitle:"Lover by Taylor Swift",lyrics:`We could leave the Christmas lights up 'til January
And this is our place, we make the rules
And there's a dazzling haze, a mysterious way about you, dear
Have I known you twenty seconds or twenty years?

Can I go where you go?
Can we always be this close?
Forever and ever, ah
Take me out, and take me home
You're my, my, my, my lover

We could let our friends crash in the living room
This is our place, we make the call
And I'm highly suspicious that everyone who sees you wants you
I've loved you three summers now, honey, but I want 'em all

Can I go where you go?
Can we always be this close?
Forever and ever, ah
Take me out, and take me home (Forever and ever)
You're my, my, my, my lover


Ladies and gentlemen, will you please stand?
With every guitar string scar on my hand
I take this magnetic force of a man to be my lover
My heart's been borrowed and yours has been blue
All's well that ends well to end up with you
Swear to be overdramatic and true to my lover
And you'll save all your dirtiest jokes for me
And at every table, I'll save you a seat, lover

Can I go where you go?
Can we always be this close?
Forever and ever, ah
Take me out, and take me home (Forever and ever)
You're my, my, my, my
Oh, you're my, my, my, my
Darling, you're my, my, my, my loverRelated Songs`,coverArt:"https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"},{songTitle:"Lover (First Dance Remix) by Taylor Swift",lyrics:`We could leave the Christmas lights up 'til January
And this is our place, we make\u2005the\u2005rules
And there's a\u2005dazzling haze, a mysterious way about\u2005you, dear
Have I known you 20 seconds or 20 years?


Can I go where you go?
Can we always be this close?
Forever and ever, ah
Take me out, and take me home
You're my, my, my, my lover

We could let our friends crash in the living room
This is our place, we make the call
And I'm highly suspicious that everyone who sees you wants you
I've loved you three summers now, honey, but I want 'em all

Can I go where you go?
Can we always be this close?
Forever and ever, ah
Take me out, and take me home (Forever and ever)
You're my, my, my, my lover


Ladies and gentlemen, will you please stand?
With every guitar string scar on my hand
I take this magnetic force of a man to be my lover
My heart's been borrowed and yours has been blue
All's well that ends well to end up with you
Swear to be overdramatic and true to my lover
And you'll save all your dirtiest jokes for me
And at every table, I'll save you a seat, lover


Can I go where you go?
Can we always be this close?
Forever and ever, ah
Take me out, and take me home (Forever and ever)
You're my, my, my, my
Oh, you're my, my, my, my
Darling, you're my, my, my, my lover`,coverArt:"https://images.genius.com/b567874a721aaae4b4e9f792f3919b25.1000x1000x1.jpg"},{songTitle:"Lover (Live from Paris) by Taylor Swift",lyrics:`We could leave the Christmas lights up 'til January
This is our place, we make the\u2005rules
And\u2005there's a dazzling\u2005haze, a mysterious way about you,\u2005dear
Have I known you 20 seconds or 20 years?


Can I go where you go?
Can we always be this close?
Forever and ever, ah
Take me out, take me home
You're my, my, my, my lover

We could let our friends crash in the living room
This is our place, we make the call
And I'm highly suspicious that everyone who sees you wants you
I've loved you three summers now, honey, but I want 'em all

Can I go where you go?
Can we always be this close?
Forever and ever, ah
Take me out, take me home (Forever and ever)
You're my, my, my, my lover


Ladies and gentlemen, will you please stand?
With every guitar string scar on my hand
I take this magnetic force of a man to be my lover
My heart's been borrowed and yours has been blue
All's well that ends well to end up with you
Swear to be overdramatic and true to my lover
And you'll save all your dirtiest jokes for me
And at every table, I'll save you a seat, lover


Can I go where you go?
Can we always be this close?
Forever and ever, ah
Take me out, and take me home (Forever and ever)
You're my, my, my, my
Oh, you're my, my, my, my
Darling, you're my, my, my, my lover`,coverArt:"https://images.genius.com/81c8b2804aa0dfae4c289ae08e1e45de.512x512x1.jpg"},{songTitle:"Lover (Remix) by Taylor Swift (Ft. Shawn Mendes)",lyrics:`We could leave the Christmas lights up 'til January
And this is our place, we make\u2005the\u2005rules
And there's a\u2005dazzling haze, a mysterious way about\u2005you, dear
Have I known you 20 seconds or 20 years?


Can I go where you go?
Can we always be this close?
Forever and ever, ah
Take me out, and take me home
You're my, my, my, my lover

We could light a bunch of candles
And dance around the kitchen, baby
Pictures of when we were young would hang on the wall
We would sit on the stoop
I'll sing love songs to you when we're eighty
See, I finally got you now, honey, I won't let you fall

Can I go where you go?
Can we always be this close?
Forever and ever, ah
Take me out, and take me home (Forever and ever)
You're my, my, my, my lover


Ladies and gentlemen, will you please stand?
With every guitar string scar on my hand
I take this magnetic force of a man to be my lover
Look in my eyes, they will tell you the truth
The girl in my story has always been you
I'd go down with the Titanic, it's true, for you, lover
And you'll save all your dirtiest jokes for me
And at every table, I'll save you a seat, lover (Save you a seat)


Can I go where you go? (Can I go where you go, baby?)
Can we always be this close?
Forever and ever, ah
Take me out, and take me home (Forever and ever)
You're my, my, my, my
Oh, you're my, my, my, my
Darling, you're my, my, my, my lover`,coverArt:"https://images.genius.com/7892c6aff5644e3abc5b451cce9131e0.1000x1000x1.png"},{songTitle:"Love Story by Taylor Swift",lyrics:`We were both young when I first saw you
I close my eyes, and the flashback starts
I'm standing there
On a balcony in summer air
See the lights, see the party, the ball gowns
See you make your way through the crowd
And say, "Hello"
Little did I know


That you were Romeo, you were throwing pebbles
And my daddy said, "Stay away from Juliet"
And I was crying on the staircase
Begging you, "Please don't go," and I said

Romeo, take me somewhere we can be alone
I'll be waiting, all there's left to do is run
You'll be the prince and I'll be the princess
It's a love story, baby, just say "Yes"


So I sneak out to the garden to see you
We keep quiet, 'cause we're dead if they knew
So close your eyes
Escape this town for a little while, oh, oh


'Cause you were Romeo, I was a scarlet letter
And my daddy said, "Stay away from Juliet"
But you were everything to me
I was begging you, "Please don't go," and I said


Romeo, take me somewhere we can be alone
I'll be waiting, all there's left to do is run
You'll be the prince and I'll be the princess
It's a love story, baby, just say "Yes"
Romeo, save me, they're trying to tell me how to feel
This love is difficult, but it's real
Don't be afraid, we'll make it out of this mess
It's a love story, baby, just say "Yes"

Oh, oh


I got tired of waiting
Wondering if you were ever coming around
My faith in you was fading
When I met you on the outskirts of town


And I said, "Romeo, save me, I've been feeling so alone
I keep waiting for you but you never come
Is this in my head? I don't know what to think"
He knelt to the ground and pulled out a ring, and said


"Marry me, Juliet, you'll never have to be alone
I love you, and that's all I really know
I talked to your dad, go pick out a white dress
It's a love story, baby, just say 'Yes'"


Oh, oh, oh
Oh, oh, oh
'Cause we were both young when I first saw you`,coverArt:"https://images.genius.com/751306e67947d3d966a4ba25ecd07791.1000x1000x1.jpg"},{songTitle:"Love Story (Digital Dog Remix) by Taylor Swift",lyrics:`We were both young when I first saw you
I close my eyes, and the flashback\u2005starts
I'm\u2005standing there
On a\u2005balcony in summer air
See the lights,\u2005see the party, the ball gowns
See you make your way through the crowd
And say, "hello"
Little did I know


That you were Romeo, you were throwing pebbles
And my daddy said, "stay away from Juliet"
And I was crying on the staircase
Begging you, "please don't go," and I said

Romeo, take me somewhere we can be alone
I'll be waiting, all there's left to do is run
You'll be the prince and I'll be the princess
It's a love story baby just say "yes"


So I sneak out to the garden to see you
We keep quiet, 'cause we're dead if they knew
So close your eyes
Escape this town for a little while


'Cause you were Romeo, I was a scarlet letter
And my daddy said, "Stay away from Juliet"
But you were everything to me
I was begging you please don't go and I said


Romeo, take me somewhere we can be alone
I'll be waiting, all there's left to do is run
You'll be the prince and I'll be the princess
It's a love story baby just say "yes"
Romeo, save me, they're trying to tell me how to feel
This love is difficult, but it's real
Don't be afraid, we'll make it out of this mess
It's a love story baby just say "yes"
Oh, oh

I got tired of waiting
Wondering if you were ever coming around
My faith in you was fading
When I met you on the outskirts of town, and I said

Romeo save me I've been feeling so alone
I keep waiting for you but you never come
Is this in my head? I don't know what to think
He knelt to the ground and pulled out a ring


And said: "Marry me Juliet
You'll never have to be alone
I love you and that's all I really know
I talked to your dad, go pick out a white dress
It's a love story baby just say 'yes'"


Oh, oh
Oh, oh
'Cause we were both young when I first saw you`,coverArt:"https://images.genius.com/3b89e0203d30478761dc0f3262026b2b.512x512x1.jpg"},{songTitle:"Love Story (Live From Clear Channel Stripped 2008) by Taylor Swift",lyrics:`We were both young when I first saw you
I close my eyes, and the flashback\u2005starts
I'm\u2005standing there
On a\u2005balcony in summer air
See the lights,\u2005see the party, the ball gowns
See you make your way\u205Fthrough\u205Fthe\u205Fcrowd
And say, "hello"
Little\u205Fdid I know


That\u205Fyou were Romeo, you were throwing pebbles
And my daddy said, "stay away from Juliet"
And I was crying on the staircase
Begging you, "please don't go," and I said

Romeo, take me somewhere we can be alone
I'll be waiting, all there's left to do is run
You'll be the prince and I'll be the princess
It's a love story baby just say "yes"


So I sneak out to the garden to see you
We keep quiet, 'cause we're dead if they knew
So close your eyes
Escape this town for a little while


'Cause you were Romeo, I was a scarlet letter
And my daddy said, "Stay away from Juliet"
But you were everything to me
I was begging you please don't go and I said


Romeo, take me somewhere we can be alone
I'll be waiting, all there's left to do is run
You'll be the prince and I'll be the princess
It's a love story baby just say "yes"
Romeo, save me, they're trying to tell me how to feel
This love is difficult, but it's real
Don't be afraid, we'll make it out of this mess
It's a love story baby just say "yes"
Oh, oh

I got tired of waiting
Wondering if you were ever coming around
My faith in you was fading
When I met you on the outskirts of town, and I said

Romeo save me I've been feeling so alone
I keep waiting for you but you never come
Is this in my head? I don't know what to think
He knelt to the ground and pulled out a ring


And said: "Marry me Juliet
You'll never have to be alone
I love you and that's all I really know
I talked to your dad, go pick out a white dress
It's a love story baby just say 'yes'"


Oh, oh
Oh, oh
'Cause we were both young when I first saw you`,coverArt:"https://images.genius.com/a27d0e4b7173862e0abc61e372597975.1000x1000x1.jpg"},{songTitle:"Love Story (Pop Mix) by Taylor Swift",lyrics:`We were both young when I first saw you
I close my eyes, and the flashback\u2005starts
I'm\u2005standing there
On a\u2005balcony in summer air
See the lights,\u2005see the party, the ball gowns
See you make your way\u205Fthrough\u205Fthe\u205Fcrowd
And say, "hello"
Little\u205Fdid I know


That\u205Fyou were Romeo, you were throwing pebbles
And my daddy said, "stay away from Juliet"
And I was crying on the staircase
Begging you, "please don't go," and I said

Romeo, take me somewhere we can be alone
I'll be waiting, all there's left to do is run
You'll be the prince and I'll be the princess
It's a love story, baby, just say "yes"


So I sneak out to the garden to see you
We keep quiet, 'cause we're dead if they knew
So close your eyes
Escape this town for a little while


'Cause you were Romeo, I was a scarlet letter
And my daddy said, "Stay away from Juliet"
But you were everything to me
I was begging you please don't go, and I said


Romeo, take me somewhere we can be alone
I'll be waiting, all there's left to do is run
You'll be the prince and I'll be the princess
It's a love story baby just say "yes"
Romeo, save me, they're trying to tell me how to feel
This love is difficult, but it's real
Don't be afraid, we'll make it out of this mess
It's a love story, baby, just say "yes"
Oh, oh

I got tired of waiting
Wondering if you were ever coming around
My faith in you was fading
When I met you on the outskirts of town


And I said: "Romeo, save me, I've been feeling so alone
I keep waiting for you but you never come
Is this in my head? I don't know what to think"
He knelt to the ground and pulled out a ring


And said: "Marry me Juliet
You'll never have to be alone
I love you and that's all I really know
I talked to your dad, go pick out a white dress
It's a love story, baby, just say 'yes'"


Oh, oh
Oh, oh
'Cause we were both young when I first saw you`,coverArt:"https://images.genius.com/efccf69ab98db616b9c315e632383028.600x600x1.jpg"},{songTitle:"Love Story (Taylor's Version) by Taylor Swift",lyrics:`We were both young when I first saw you
I close my eyes and the flashback starts
I'm standing there
On a balcony in summer air
See the lights, see the party, the ball gowns
See you make your way through the crowd
And say, "Hello"
Little did I know


That you were Romeo, you were throwing pebbles
And my daddy said, "Stay away from Juliet"
And I was crying on the staircase
Begging you, "Please don't go," and I said

Romeo, take me somewhere we can be alone
I'll be waiting, all there's left to do is run
You'll be the prince and I'll be the princess
It's a love story, baby, just say, "Yes"


So I sneak out to the garden to see you
We keep quiet 'cause we're dead if they knew
So close your eyes
Escape this town for a little while, oh, oh


'Cause you were Romeo, I was a scarlet letter
And my daddy said, "Stay away from Juliet"
But you were everything to me
I was begging you, "Please don't go," and I said


Romeo, take me somewhere we can be alone
I'll be waiting, all there's left to do is run
You'll be the prince and I'll be the princess
It's a love story, baby, just say, "Yes"
Romeo, save me, they're trying to tell me how to feel
This love is difficult, but it's real
Don't be afraid, we'll make it out of this mess
It's a love story, baby, just say, "Yes"

Oh, oh


And I got tired of waiting
Wondering if you were ever coming around
My faith in you was fading
When I met you on the outskirts of town


And I said, "Romeo, save me, I've been feeling so alone
I keep waiting for you, but you never come
Is this in my head? I don't know what to think"
He knelt to the ground and pulled out a ring, and said
"Marry me, Juliet, you'll never have to be alone
I love you and that's all I really know
I talked to your dad, go pick out a white dress
It's a love story, baby, just say, 'Yes'"


Oh, oh, oh
Oh, oh, oh
'Cause we were both young when I first saw you`,coverArt:"https://images.genius.com/87e4c0c2454d2d62ab2e78ea429207c3.1000x1000x1.jpg"},{songTitle:"Love Story (Taylor's Version) [Elvira Remix] by Taylor Swift",lyrics:`We were both young when I first saw you
I close my eyes and the flashback starts
I'm standing there
On a balcony in summer air
See the lights, see the party, the ball gowns
See you make your way through the crowd
And say, "Hello"
Little did I know


That you were Romeo, you were throwing pebbles
And my daddy said, "Stay away from Juliet"
And I was crying on the staircase
Begging you, "Please don't go"
And I said

Romeo, take me somewhere we can be alone
I'll be waiting, all ther\u0435's left to do is run
You'll be the princ\u0435 and I'll be the princess
It's a love story, baby, just say, "Yes"


So I sneak out to the garden to see you
We keep quiet 'cause we're dead if they knew
So close your eyes
Escape this town for a little while, oh, oh


'Cause you were Romeo, I was a scarlet letter
And my daddy said, "Stay away from Juliet"
But you were everything to me
I was begging you, "Please don't go"
And I said


Romeo, take me somewhere we can be alone
I'll be waiting, all there's left to do is run
You'll be the prince and I'll be the princess
It's a love story, baby, just say, "Yes"
Romeo, save me, they're trying to tell me how to feel
This love is difficult, but it's real
Don't be afraid, we'll make it out of this mess
It's a love story, baby, just say, "Yes"
Oh, oh

But I got tired of waiting
Wondering if you were ever coming around
My faith in you was fading
When I met you on the outskirts of town


And I said, "Romeo, save me, I've been feeling so alone
I keep waiting for you, but you never come"
Is this in my head? I don't know what to think
He knelt to the ground and pulled out a ring, and said
"Marry me, Juliet, you'll never have to be alone
I love you and that's all I really know
I talked to your dad, go pick out a white dress
It's a love story, baby, just say, 'Yes'"


Oh, oh, oh
Oh, oh, oh
'Cause we were both young when I first saw you`,coverArt:"https://images.genius.com/f743f908dafc153ab6c21c0bbe3c7a95.1000x1000x1.jpg"},{songTitle:"Lucky You by Taylor Swift",lyrics:`There's a little girl in this little town
With a little too much heart to go around
Live forever, never say never
You could do better, that's what she says


Mama named her Lucky on a starlit night
A rabbit foot in her pocket, she dances in spite
Of the fact that she's different
And yet she's the same
And she says, "do-do-do-do-do-do-do-do
Do-do-do-do-do-do-do, do-do-do-do
Do-do-do, do-do-do, do-do-do-do
Lucky you, lucky you"

She sings her little song, she walks along
A little pathway headed for the skies
Left to travels, lives they unravel
Mind over matter, that's what she says


Mama named her Lucky on a starlit night
A rabbit foot in her pocket, she dances in spite
Of the fact that she's different
And yet she's the same
And she says, "do-do-do-do-do-do-do-do
Do-do-do-do-do-do-do, do-do-do-do
Do-do-do, do-do-do, do-do-do-do
Lucky you, lucky you"


Maybe she'll sing you do-do-do-do
Maybe she'll bring you into the skies
Honey she'll love you, funny how some view
Angels above you aren't so far away


Mama named her Lucky on a starlit night
A rabbit foot in her pocket, she dances in spite
Of the fact that she's different
And yet she's the same
And she says, "lucky you, lucky you"`,coverArt:"https://images.genius.com/a5d1a45a54710b74f28a7e74a06360f6.332x332x1.png"},{songTitle:"Macavity by Taylor Swift (Ft. Idris Elba)",lyrics:`Macavity's a mystery cat, he's called the Hiddenpaw
For he's the master criminal who can defy\u2005the\u2005law
He's the bafflement\u2005of Scotland Yard, the Flying Squad's\u2005despair
For when they reach the scene of crime, Macavity's not there


Macavity, Macavity, there's no one like Macavity
He's broken every human law, he breaks the law of gravity
His powers of levitation would make a fakir stare
But when they reach the scene of crime, Macavity's not there

Macavity's a ginger cat, he's very tall and thin
You would know him if you saw him for his eyes are sunken in
His brow is deeply lined with thought, his head is highly domed
His coat is dusty from neglect, his whiskers are uncombed
He sways his head from side to side, with movements like a snake
And when you think he's half asleep, he's always wide awake


Macavity, Macavity, there's no one like Macavity
For he's a fiend in feline shape, a monster of depravity
You may meet him in a by-street, you may see him in the square
But when a crime's discovered, then Macavity's not there


He's outwardly respectable, I know, he cheats at cards
And his footprints are not found in any files of Scotland Yard's
And when the larder's looted and the jewel case is rifled
Or when the milk is missing or another peke's been stifled
Or the greenhouse glass is broken and the trellis past repair
There's the wonder of the thing, Macavity's not there


Macavity, Macavity, there's no one like Macavity
There never was a cat of such deceitfulness and suavity
He always has an alibi, and one or two to spare
What ever time the deed took place, Macavity wasn't there
And they say that all the cats whose wicked deeds are widely known
I might mention Mungojerrie, Rumpleteazer, Griddlebone
Are nothing more than agents for the cat who all the time
Just controls the operations, the Napoleon of Crime
Macavity, Macavity, there's no one like Macavity
He's a fiend in feline shape, a monster of depravity
You may meet him in a by-street, you may see him in the square
But when a crime's discovered, then Macavity, Macavity
Macavity, Macavity

When a crime's discovered, then
Macavity's not there`,coverArt:"https://images.genius.com/182f588b4cae63a9229afc131b6825a5.1000x1000x1.jpg"},{songTitle:"\u200Bmad woman by Taylor Swift",lyrics:`What did you think I'd say to that?
Does a scorpion sting when fighting back?
They strike\u2005to\u2005kill, and you\u2005know I will
You know I will
What\u2005do you sing on your drive home?
Do you see my\u205Fface\u205Fin\u205Fthe neighbor's lawn?
Does\u205Fshe smile?
Or does\u205Fshe mouth, "Fuck you forever"?


Every time you call me crazy, I get more crazy
What about that?
And when you say I seem angry, I get more angry

And there's nothing like a mad woman
What a shame she went mad
No one likes a mad woman
You made her like that
And you'll poke that bear 'til her claws come out
And you find something to wrap your noose around
And there's nothing like a mad woman


Now I breathe flames each time I talk
My cannons all firin' at your yacht
They say "move on," but you know I won't
And women like hunting witches too
Doing your dirtiest work for you
It's obvious that wanting me dead
Has really brought you two together


Every time you call me crazy, I get more crazy
What about that?
And when you say I seem angry, I get more angry


And there's nothing like a mad woman
What a shame she went mad
No one likes a mad woman
You made her like that
And you'll poke that bear 'til her claws come out
And you find something to wrap your noose around
And there's nothing like a mad woman

I'm taking my time, taking my time
'Cause you took everything from me
Watching you climb, watching you climb
Over people like me
The master of spin has a couple side flings
Good wives always know
She should be mad, should be scathing like me, but


No one likes a mad woman
What a shame she went mad
You made her like that`,coverArt:"https://images.genius.com/4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png"},{songTitle:"\u200Bmad woman (the long pond studio sessions) by Taylor Swift",lyrics:`What did you think I'd say to that?
Does a scorpion sting when fighting back?
They strike to kill, and you know I will
You know I will
What do you sing on your drive home?
Do you see my face in the neighbor's lawn?
Does she smile
Or does she mouth "Fuck you forever"?


Every time you call me crazy, I get more crazy
What about that?
And when you say I seem angry, I get more angry

And there's nothing like a mad woman
What a shame she went mad
No one likes a mad woman
You made her like that
And you'll poke that bear 'til her claws come out
And you find something to wrap your noose around
And there's nothing like a mad woman


Now I breathe flames each time I talk
My cannons all firin' at your yacht
They say "move on," but you know I won't
And women like hunting witches too
Doing your dirtiest work for you
It's obvious that wanting me dead
Has really brought you two together


Every time you call me crazy, I get more crazy
What about that?
And when you say I seem angry, I get more angry


And there's nothing like a mad woman
What a shame she went mad
No one likes a mad woman
You made her like that
And you'll poke that bear 'til her claws come out
And you find something to wrap your noose around
And there's nothing like a mad woman

I'm taking my time, taking my time
'Cause you took everything from me
Watching you climb, watching you climb
Over people like me
The master of spin has a couple side flings
Good wives always know
She should be mad, should be scathing like me, but


No one likes a mad woman
What a shame she went mad
You made her like that`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"\u200Bmarjorie by Taylor Swift",lyrics:`Never be so kind
You forget to be clever
Never be so clever
You forget to be kind


And if I didn't know better
I'd think you were talking to me now
If I didn't know better
I'd think you were still around

What died didn't stay dead
What died didn't stay dead
You're alive, you're alive in my head
What died didn't stay dead
What died didn't stay dead
You're alive, so alive


Never be so polit\u0435
You forget your power
Nev\u0435r wield such power
You forget to be polite


And if I didn't know better
I'd think you were listening to me now
If I didn't know better
I'd think you were still around


What died didn't stay dead
What died didn't stay dead
You're alive, you're alive in my head
What died didn't stay dead
What died didn't stay dead
You're alive, so alive

The autumn chill that wakes me up
You loved the amber skies so much
Long limbs and frozen swims
You'd always go past where our feet could touch
And I complained the whole way there
The car ride back and up the stairs
I should've asked you questions
I should've asked you how to be
Asked you to write it down for me
Should've kept every grocery store receipt
'Cause every scrap of you would be taken from me
Watched as you signed your name Marjorie
All your closets of backlogged dreams
And how you left them all to me


What died didn't stay dead
What died didn't stay dead
You're alive, you're alive in my head
What died didn't stay dead
What died didn't stay dead
You're alive, so alive


And if I didn't know better
I'd think you were singing to me now
If I didn't know better
I'd think you were still around
I know better
But I still feel you all around
I know better
But you're still around`,coverArt:"https://images.genius.com/3e354c719fe236ab4a75adc6ea4c7fca.1000x1000x1.png"},{songTitle:"Mary's Song (Oh My My My) by Taylor Swift",lyrics:`She said I was seven and you were nine
I looked at you like the stars that shined
In the sky, the pretty lights
And our daddies used to joke about the two of us
Growing up and falling in love
And our mamas smiled and rolled their eyes
And said, "Oh, my, my, my"


Take me back to the house in the backyard tree
Said you'd beat me up, you were bigger than me
You never did, you never did
Take me back when our world was one block wide
I dared you to kiss me and ran when you tried
Just two kids, you and I
Oh, my, my, my, my

Well, I was sixteen when suddenly
I wasn't that little girl you used to see
But your eyes still shined like pretty lights
And our daddies used to joke about the two of us
They never believed we'd really fall in love
And our mamas smiled and rolled their eyes
And said, "Oh, my, my, my"


Take me back to the creek beds we turned up
2 a.m. riding in your truck
And all I need is you next to me
Take me back to the time we had our very first fight
The slamming of doors 'stead of kissing goodnight
You stayed outside 'til the morning light
Oh, my, my, my, my


A few years had gone and come around
We were sitting at our favorite spot in town
And you looked at me, got down on one knee


Take me back to the time when we walked down the aisle
Our whole town came and our mamas cried
You said, "I do," and I did too
Take me home where we met so many years before
We'll rock our babies on that very front porch
After all this time, you and I

I'll be eighty-seven, you'll be eighty-nine
I'll still look at you like the stars that shine
In the sky, oh, my, my, my`,coverArt:"https://images.genius.com/be8b30abcf286f1bf996e82e7e96dc14.1000x1000x1.jpg"},{songTitle:"Mary's Song (Oh My My My) (Live from SoHo) by Taylor Swift",lyrics:`She said, I was seven and you were nine
I looked at you like the stars that shined
In the sky\u201A the pretty lights
And our daddies used to joke about the two of us
Growing up and falling in love and our mamas smiled
And rolled their eyes and said oh my my my


Take me back to the house in the backyard tree
Said you'd beat me up\u201A you were bigger than me
You never did\u201A you never did
Take me back when our world was one block wide
I dared you to kiss me and ran when you tried
Just two kids, you and I
Oh my my my my

Well, I was sixteen when suddenly
I wasn't that little girl you used to see
But your eyes still shined like pretty lights
And our daddies used to joke about the two of us
They never believed we'd really fall in love
And our mamas smiled and rolled their eyes
And said oh my my my


Take me back to the creek beds we turned up
Two A.M. riding in your truck and all I need is you next to me
Take me back to the time we had our very first fight
The slamming of doors instead of kissing goodnight
You stayed outside till the morning light
Oh my my my my


A few years had gone and come around
We were sitting at our favorite spot in town
And you looked at me\u201A got down on one knee


Take me back to the time when we walked down the aisle
Our whole town came and our mamas cried
You said I do and I did too
Take me home where we met so many years before
We'll rock our babies on that very front porch
After all this time, you and I

And I'll be eighty-seven; you'll be eighty-nine
I'll still look at you like the stars that shine
In the sky, oh my my my
Thank you so much!`,coverArt:"https://images.genius.com/89ed020cf80ce5c178b2a385efa16113.800x800x1.jpg"},{songTitle:"ME! by Taylor Swift (Ft. Brendon Urie)",lyrics:`I promise that you'll never find another like me


I know that I'm a handful, baby, uh
I know I never think before I jump
And you're the kind of guy the ladies want
(And there's a lot of cool chicks out there)
I know that I went psycho on the phone
I never leave well enough alone
And trouble's gonna follow where I go
(And there's a lot of cool chicks out there)

But one of these things is not like the others
Like a rainbow with all of the colors
Baby doll, when it comes to a lover
I promise that you'll never find another like


Me-e-e, ooh-ooh-ooh-ooh
I'm the only one of me
Baby, that's the fun of me
Eeh-eeh-eeh, ooh-ooh-ooh-ooh
You're the only one of you
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e


I know I tend to make it about me
I know you never get just what you see
But I will never bore you, baby
(And there's a lot of lame guys out there)
And when we had that fight out in the rain
You ran after me and called my name
I never wanna see you walk away
(And there's a lot of lame guys out there)


'Cause one of these things is not like the others
Livin' in winter, I am your summer
Baby doll, when it comes to a lover
I promise that you'll never find another like

Me-e-e, ooh-ooh-ooh-ooh
I'm the only one of me
Let me keep you company
Eeh-eeh-eeh, ooh-ooh-ooh-ooh
You're the only one of you
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e


Girl, there ain't no "I" in "team"
But you know there is a "me"
Strike the band up, one, two, three
I promise that you'll never find another like me
Girl, there ain't no "I" in "team"
But you know there is a "me"
And you can't spell "awesome" without "me"
I promise that you'll never find another like


Me-e-e (Yeah), ooh-ooh-ooh-ooh (And I want ya, baby)
I'm the only one of me (I'm the only one of me)
Baby, that's the fun of me (Baby, that's the fun of me)
Eeh-eeh-eeh, ooh-ooh-ooh-ooh (Oh)
You're the only one of you (Oh)
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e

Girl, there ain't no "I" in "team" (Ooh-ooh-ooh-ooh)
But you know there is a "me"
I'm the only one of me (Oh-oh)
Baby, that's the fun of me
(Eeh-eeh-eeh, ooh-ooh-ooh-ooh)
Strike the band up, one, two, three
You can't spell "awesome" without "me"
You're the only one of you
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e`,coverArt:"https://images.genius.com/6a69d583d0d2f5cbeecedbcc60b9f382.1000x1000x1.jpg"},{songTitle:"Mean by Taylor Swift",lyrics:`You, with your words like knives
And swords and weapons that you use against me
You have knocked me off my feet again
Got me feeling like a nothing
You, with your voice like nails on a chalkboard
Calling me out when I'm wounded
You, picking on the weaker man


Well you can take me down
With just one single blow
But you don't know what you don't know

Someday, I'll be living in a big ole city
And all you're ever gonna be is mean
Someday, I'll be big enough so you can't hit me
And all you're ever gonna be is mean
Why you gotta be so mean?


You, with your switching sides
And your wildfire lies and your humiliation
You have pointed out my flaws again
As if I don't already see them
I walk with my head down, trying to block you out
'Cause I'll never impress you
I just wanna feel okay again


I bet you got pushed around
Somebody made you cold
But the cycle ends right now
'Cause you can't lead me down that road
And you don't know what you don't know


Someday, I'll be living in a big ole city
And all you're ever gonna be is mean
Someday, I'll be big enough so you can't hit me
And all you're ever gonna be is mean
Why you gotta be so mean?
Related Songs
And I can see you years from now in a bar
Talking over a football game
With that same big, loud opinion
But nobody's listening
Washed up and ranting about the same old bitter things
Drunk and grumbling on about how I can't sing
But all you are is mean
All you are is mean
And a liar and pathetic and alone in life and mean
And mean, and mean, and mean


But someday, I'll be living in a big ole city
And all you're ever gonna be is mean
Yeah, someday, I'll be big enough so you can't hit me
And all you're ever gonna be is mean
Why you gotta be so mean?


Someday, I'll be living in a big ole city
(Why you gotta be so mean?)
And all you're ever gonna be is mean
(Why you gotta be so mean?)
Someday, I'll be big enough so you can't hit me
(Why you gotta be so mean?)
And all you're ever gonna be is mean
Why you gotta be so mean?`,coverArt:"https://images.genius.com/87d58999e9588f29f00b796fe7e828c0.720x720x1.jpg"},{songTitle:"Mean (Live/2011) by Taylor Swift",lyrics:`You, with your words like knives
And swords and weapons that you use against me
You have\u2005knocked\u2005me off my\u2005feet again
Got me feeling like I'm\u2005nothing
You, with your voice like nails on a chalkboard
Calling me out when I'm wounded
You, picking on the weaker man


You can take me down
With just one single blow
But you don't know what you don't know

Someday, I'll be living in a big old city
And all you're ever gonna be is mean
Someday, I'll be big enough so you can't hit me
And all you're ever gonna be is mean
Why you gotta be so mean?


You, with your switching sides
And your wildfire lies and your humiliation
You have pointed out my flaws again
As if I don't already see them
I walk with my head down, trying to block you out
'Cause I'll never impress you
I just wanna feel okay again


I bet you got pushed around
Somebody made you cold
But the cycle ends right now
'Cause you can't lead me down that road
And you don't know what you don't know


Someday, I'll be living in a big old city
And all you're ever gonna be is mean
Someday, I'll be big enough so you can't hit me
And all you're ever gonna be is mean
Why you gotta be so mean?

And I can see you years from now in a bar
Talking over a football game
With that same big loud opinion
But nobody's listening
Washed up and ranting about the same old bitter things
Drunk and grumbling on about how I can't sing
All you are is mean
All you are is mean
And a liar, and pathetic, and alone in lifeAnd mean, and mean, and mean, and mean


But someday, I'll be living in a big old cityAnd all you're ever gonna be is mean, yeah


Someday, I'll be big enough so you can't hit me
And all you're ever gonna be is mean
Why you gotta be so-?
Someday, I'll be living in a big old city
(Why you gotta be so-?)
And all you're ever gonna be is mean
(Why you gotta be so-?)
Someday, I'll be big enough so you can't hit me
(Why you gotta be so-?)
And all you're ever gonna be is meanWhy you gotta be so mean?`,coverArt:"https://images.genius.com/6510355b9fa1e35fa7e939852c7405d0.900x900x1.jpg"},{songTitle:"ME! (Billboard Music Awards Live Rehearsal Audio) by Taylor Swift (Ft. Brendon Urie)",lyrics:`I promise that you'll never find another like me


I know that I'm a handful, baby, uh
I know I never think before I jump
And you're the kind of guy the ladies want
(And there's a lot of cool chicks out there)
I know that I went psycho on the phone
I never leave well enough alone
And trouble's gonna follow where I go
(And there's a lot of cool chicks out there)

But one of these things is not like the others
Like a rainbow with all of the colors
Baby doll, when it comes to a lover
I promise that you'll never find another like


Me-e-e, ooh-ooh-ooh-ooh
I'm the only one of me
Baby, that's the fun of me
Eeh-eeh-eeh, ooh-ooh-ooh-ooh
You're the only one of you
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e


I know I tend to make it about me
I know you never get just what you see
But I will never bore you, baby
(And there's a lot of lame guys out there)
And when we had that fight out in the rain
You ran after me and called my name
I never wanna see you walk away
(And there's a lot of lame guys out there)


'Cause one of these things is not like the others
Livin' in winter, I am your summer
Baby doll, when it comes to a lover
I promise that you'll never find another like

Me-e-e, ooh-ooh-ooh-ooh
I'm the only one of me
Let me keep you company
Eeh-eeh-eeh, ooh-ooh-ooh-ooh
You're the only one of you
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e


Hey, kids!
Spelling is fun!
I'm Taylor Swift
I'm Brendon Urie
Welcome to the Billboard Music Awards, ladies and gentlemen
Girl, there ain't no I in "team"
But you know there is a "me"
Strike the band up, 1, 2, 3
I promise that you'll never find another like me
Girl, there ain't no I in "team"
But you know there is a "me"
And you can't spell "awesome" without "me"
I promise that you'll never find another like


Me-e-e (Yeah), ooh-ooh-ooh-ooh (And I want ya, baby)
I'm the only one of me (I'm the only one of me)
Baby, that's the fun of me (Baby, that's the fun of me)
Eeh-eeh-eeh, ooh-ooh-ooh-ooh (Oh)
You're the only one of you (Oh)
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e

Girl, there ain't no I in "team" (Ooh-ooh-ooh-ooh)
But you know there is a "me"
I'm the only one of me (Oh-oh)
Baby, that's the fun of me
(Eeh-eeh-eeh, ooh-ooh-ooh-ooh)
Strike the band up, 1, 2, 3
You can't spell "awesome" without "me"
You're the only one of you
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e


Well, that was much better except the mic  up
I also screwed up all the choreography
That's what I did, I'm gonna rehearse
I'm gonna rehearse and rehearse!`,coverArt:"https://images.genius.com/30751f8144822c10f29dc9fe685c8aa0.599x609x1.jpg"},{songTitle:"ME! (feat. Brendon Urie of Panic! At The Disco) (Live From The Billboard Music Awards) by Taylor Swift (Ft. Brendon Urie)",lyrics:`I promise that you'll never find another like me


I know that I'm a handful, baby, uh
I know I never think before I jump
And you're the kind of guy the ladies want
(And there's a lot of cool chicks out there)
I know that I went psycho on the phone
I never leave well enough alone
And trouble's gonna follow where I go
(And there's a lot of cool chicks out there)

But one of these things is not like the others
Like a rainbow with all of the colors
Baby doll, when it comes to a lover
I promise that you'll never find another like


Me-e-e, ooh-ooh-ooh-ooh
I'm the only one of me
Baby, that's the fun of me
Eeh-eeh-eeh, ooh-ooh-ooh-ooh
You're the only one of you
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e


I know I tend to make it about me
I know you never get just what you see
But I will never bore you, baby
(And there's a lot of lame guys out there)
And when we had that fight out in the rain
You ran after me and called my name
I never wanna see you walk away
(And there's a lot of lame guys out there)


'Cause one of these things is not like the others
Livin' in winter, I am your summer
Baby doll, when it comes to a lover
I promise that you'll never find another like

Me-e-e, ooh-ooh-ooh-ooh
I'm the only one of me
Let me keep you company
Eeh-eeh-eeh, ooh-ooh-ooh-ooh
You're the only one of you
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e


Hey, kids!
Vegas is fun!


I\u2019m Taylor
I\u2019m Brendon
Welcome to the Billboard Music Awards
Yeah!


Girl there ain\u2019t no \u201CI\u201D in team
But you know there is a "me"
Strike the band up, 1, 2, 3
I promise that you'll never find another like me
Girl, there ain't no I in "team"
But you know there is a "me"
And you can't spell "awesome" without "me"
I promise that you'll never find another like

Me-e-e (Yeah), ooh-ooh-ooh-ooh (And I want ya, baby)
I'm the only one of me (I'm the only one of me)
Baby, that's the fun of me (Baby, that's the fun of me)
Eeh-eeh-eeh, ooh-ooh-ooh-ooh (Oh)
You're the only one of you (Oh)
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e


Girl, there ain't no I in "team" (Ooh-ooh-ooh-ooh)
But you know there is a "me"
I'm the only one of me (Oh-oh)
Baby, that's the fun of me
(Eeh-eeh-eeh, ooh-ooh-ooh-ooh)
Strike the band up, 1, 2, 3
You can't spell "awesome" without "me"
You're the only one of you
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e`,coverArt:"https://images.genius.com/721a6c465a666419bf286b473287c33f.446x446x1.jpg"},{songTitle:"ME! (Live from Paris) by Taylor Swift",lyrics:`I promise that you'll never find another like me


I know that I'm a handful, baby,\u2005uh
I\u2005know I never\u2005think before I jump
You're the kind\u2005of guy the ladies want
(And there's a lot of cool chicks out there)
I know that I'm a psycho on the phone
Never leave well enough alone
And trouble's gonna follow where I go
(And there's a lot of cool chicks out there)

But one of these things is not like the others
Like a rainbow with all of the colors
Baby doll, when it comes to a lover
I promise that you'll never find another like


Me-e-e, ooh-ooh-ooh-ooh
I'm the only one of me
Baby, that's the fun of me
Eeh-eeh-eeh, ooh-ooh-ooh-ooh
You're the only one of you
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e


I know I tend to make it about me
I know you never get just what you see
But I will never bore you, baby
(And there's a lot of lame guys out there)
And when we had that fight out in the rain
You ran after me and called my name
Never wanna see you walk away
(And there's a lot of lame guys out there)


'Cause one of these things is not like the others
Livin' in winter, I am your summer
Baby doll, when it comes to a lover
I promise that you'll never find another like

Me-e-e, ooh-ooh-ooh-ooh
I'm the only one of me
Let me keep you company
Eeh-eeh-eeh, ooh-ooh-ooh-ooh
You're the only one of you
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e


Hey kids (Spelling is fun)
Girl, there ain't no I in "team"
But you know there is a "me"
Strike the band up, 1, 2, 3
I promise that you'll never find another like me
Girl, there ain't no I in "team"
But you know there is a "me"
And you can't spell "awesome" without "me"
I promise that you'll never find another like


Me-e-e (Yeah), ooh-ooh-ooh-ooh
I'm the only one of me
Baby, that's the fun of me
Eeh-eeh-eeh, ooh-ooh-ooh-ooh
You're the only one of you
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e

Girl, there ain't no I in "team" (Ooh-ooh-ooh-ooh)
But you know there is a "me"
I'm the only one of me
Baby, that's the fun of me (Eeh-eeh-eeh)
Strike the band up, 1, 2, 3 (Ooh-ooh-ooh-ooh)
You can't spell "awesome" without "me"
You're the only one of you
Baby, that's the fun of you
And I promise that nobody's gonna love you like me-e-e`,coverArt:"https://images.genius.com/fad996d1927cbef89d6f7d11047f5cf4.512x512x1.jpg"},{songTitle:"Message In A Bottle (Taylor\u2019s Version) (Fat Max G Remix) by Taylor Swift",lyrics:`I know that you like me
And it's kinda frightenin' standin' here waitin' (Waitin')
And I became hypnotized by freckles and bright eyes, tongue-tied


But now (now)
You're so far away and I'm down (Down)
Feelin' like a face in the crowd
I'm reachin' for you, terrified-ied-ied-ied

'Cause you could be the one that I love
I could be the one that you dream of
A message in a bottle is all I can do
Standin' here, hopin' it gets to you
You could be the one that I keep, and I
I could b\u0435 the reason you can't sleep at night
A messag\u0435 in a bottle is all I can do
Standin' here, hopin' it gets to you


These days I'm restless
Workdays are endless, look how you made me (Made me)
But time moves faster, replaying your laughter, disaster


'Cause now (now)
You're so far away and I'm down (down)
Feelin' like a face in the crowd
I'm reachin' for you, terrified-ied-ied-ied, 'cause


'Cause you could be the one that I love
I could be the one that you dream of
A message in a bottle is all I can do
Standin' here, hopin' it gets to you (It gets to you)
You could be the one that I keep, and I (I)
I could be the reason you can't sleep at night (At night)
A message in a bottle is all I can do
Standin' here, hopin' it gets to you

I know-know-know that you like-like me-me
Bright-bright tongue-tied (Tongue-tied)
I know-know-know that you like-like me-me
Bright-bright tongue-tied (Tongue-tied)
You could be the one that I love, mm-mm
And now I'm standin' here, hopin' it gets to you


(Yeah, yeah)
'Cause you could be the one that I love
I could be the one that you dream of
A message in a bottle is all I can do
Standin' here, hopin' it gets to you (It gets to you)
You could be the one that I keep, and I
I could be the reason you can't sleep at night (You can't sleep at night)
A message in a bottle is all I can do (Yeah, yeah)
Standin' here, hopin' it gets to you (Yeah, yeah)


You could be the one that I love
You could be the one that I love, I love
And now I'm standin' here, hopin' this gets to you`,coverArt:"https://images.genius.com/285396fb7c7124f41ad3498834ddcda7.1000x1000x1.png"},{songTitle:"Message In A Bottle (Taylor's Version) [From The Vault] by Taylor Swift",lyrics:`I know that you like me
And it's kinda frightenin' standin' here waitin', waitin'
And I became hypnotized by freckles and bright eyes, tongue-tied


But now you're so far away and I'm down
Feelin' like a face in the crowd
I'm reachin' for you, terrified


'Cause you could be the one that I love
I could be the one that you dream of
A message in a bottle is all I can do
Standin' here, hopin' it gets to you
You could be the one that I keep, and I
I could be the reason you can't sleep at night
A m\u0435ssage in a bottle is all I can do
Standin' her\u0435, hopin' it gets to you

These days I'm restless
Workdays are endless, look how you made me, made me
But time moves faster, replaying your laughter, disaster


'Cause now you're so far away and I'm down
Feelin' like a face in the crowd
I'm reachin' for you, terrified, 'cause


'Cause you could be the one that I love
I could be the one that you dream of
A message in a bottle is all I can do
Standin' here, hopin' it gets to you (It gets to you)
You could be the one that I keep, and I (I)
I could be the reason you can't sleep at night (At night)
A message in a bottle is all I can do
Standin' here, hopin' it gets to you


How is it in London? (London)
Where were you while I'm wondering (Wondering)
If I'll ever see you again?
You could be the one that I love, mm-mm
And now I'm standin' here, hopin' it gets to you

'Cause you could be the one that I love (Yeah, yeah)
I could be the one that you dream of
A message in a bottle is all I can do
Standin' here, hopin' it gets to you (It gets to you)
You could be the one that I keep, and I
I could be the reason you can't sleep at night (You can't sleep at night)
A message in a bottle is all I can do (Yeah, yeah)
Standin' here, hopin' it gets to you (Yeah, yeah)


You could be the one that I love
You could be the one that I love, I love
And now I'm standin' here, hopin' this gets to you`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"Mine by Taylor Swift",lyrics:`You were in college, working part-time, waiting tables
Left a small town and never looked back
I was a flight risk, with a fear of falling
Wondering why we bother with love, if it never lasts


I say, "Can you believe it?"
As we're lying on the couch
The moment, I could see it
Yes, yes, I can see it now

Do you remember, we were sitting there, by the water?
You put your arm around me for the first time
You made a rebel of a careless man's careful daughter
You are the best thing that's ever been mine


Flash forward, and we're taking on the world together
And there's a drawer of my things at your place
You learn my secrets and you figure out why I'm guarded
You say we'll never make my parents' mistakes


But we got bills to pay
We got nothing figured out
When it was hard to take
Yes, yes
This is what I thought about:


Do you remember, we were sitting there, by the water?
You put your arm around me for the first time
You made a rebel of a careless man's careful daughter
You are the best thing that's ever been mine
Do you remember all the city lights on the water?
You saw me start to believe for the first time
You made a rebel of a careless man's careful daughter
You are the best thing that's ever been mine

And I remember that fight, 2:30 A.M
As everything was slipping right out of our hands
I ran out, crying, and you followed me out into the street
Braced myself for the goodbye
'Cause that's all I've ever known
Then, you took me by surprise
You said, "I'll never leave you alone."


You said, "I remember how we felt, sitting by the water
And every time I look at you, it's like the first time
I fell in love with a careless man's careful daughter
She is the best thing that's ever been mine"
Hold on, make it last
Hold on, never turn back
You made a rebel of a careless man's careful daughter
You are the best thing that's ever been mine


Yeah, yeah
Do you believe it? (Hold on)
We're gonna make it now (Hold on)
And I can see it
Yeah, yeah
I can see it now (See it now)`,coverArt:"https://images.genius.com/f5f5e652dbcaf63070aaf6209f228024.800x800x1.png"},{songTitle:"Mine (Live/2011) by Taylor Swift",lyrics:`You were in college, working part-time, waiting tables
Left a small town and never looked back
I\u2005was\u2005a flight risk,\u2005with a fear of falling
Wondering why\u2005we bother with love, if it never lasts


I say, "Can\u205Fyou\u205Fbelieve\u205Fit?"
As we're lying\u205Fon the couch
The\u205Fmoment, I could see it
Yes, yes, I can see it now

Do you remember, we were sitting there, by the water?
You put your arm around me for the first time
You made a rebel of a careless man's careful daughter
You are the best thing that's ever been mine


Flash forward, and we're taking on the world together
And there's a drawer of my things at your place
You learn my secrets and you figure out why I'm guarded
You say we'll never make my parents' mistakes


But we got bills to pay
We got nothing figured out
When it was hard to take
Yes, yes
This is what I thought about:


Do you remember, we were sitting there, by the water?
You put your arm around me for the first time
You made a rebel of a careless man's careful daughter
You are the best thing that's ever been mine

Do you remember all the city lights on the water?
You saw me start to believe for the first time
You made a rebel of a careless man's careful daughter
You are the best thing that's ever been mine oh-woah

And I remember that fight, 2:30 AM
As everything was slipping right out of our hands
I ran out, crying, and you followed me out into the street
Braced myself for the goodbye
'Cause that's all I've ever known
Then, you took me by surprise
You said, "I'll never leave you alone."


You said, "I remember how we felt, sitting by the water
And every time I look at you, it's like the first time
I fell in love with a careless man's careful daughter
She is the best thing that's ever been mine
"Hold on, make it last"
Hold on, never turn back
You made a rebel of a careless man's careful daughter
You are the best thing that's ever been mine


Do you believe it?
We're gonna make it now
And I can see it
Yeah, yeah
I can see it now (See it now, see it now)`,coverArt:"https://images.genius.com/6510355b9fa1e35fa7e939852c7405d0.900x900x1.jpg"},{songTitle:"\u200Bmirrorball by Taylor Swift",lyrics:`I want you to know
I'm a mirrorball
I'll show you every version of yourself tonight
I'll get\u2005you\u2005out on the\u2005floor
Shimmering beautiful
And when I break, it's\u2005in a million pieces


Hush, when no one is around, my dear
You'll find me on my tallest tiptoes
Spinning in my highest heels, love
Shining just for you
Hush, I know they said the end is near
But I'm still on my tallest tiptoes
Spinning in my highest heels, love
Shining just for you

I want you to know
I'm a mirrorball
I can change everything about me to fit in
You are not like the regulars
The masquerade revelers
Drunk as they watch my shattered edges glisten


Hush, when no one is around, my dear
You'll find me on my tallest tiptoes
Spinning in my highest heels, love
Shining just for you
Hush, I know they said the end is near
But I'm still on my tallest tiptoes
Spinning in my highest heels, love
Shining just for you


And they called off the circus, burned the disco down
When they sent home the horses and the rodeo clowns
I'm still on that tightrope
I'm still trying everything to get you laughing at me
And I'm still a believer, but I don't know why
I've never been a natural, all I do is try, try, try
I'm still on that trapeze
I'm still trying everything to keep you looking at me

Because I'm a mirrorball
I'm a mirrorball
And I'll show you every version of yourself tonight`,coverArt:"https://images.genius.com/4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png"},{songTitle:"\u200Bmirrorball (the long pond studio sessions) by Taylor Swift",lyrics:`I want you to know
I'm a mirrorball
I'll show you every version of yourself tonight
I'll get you out on the floor
Shimmering beautiful
And when I break, it's in a million pieces


Hush, when no one is around, my dear
You'll find me on my tallest tiptoes
Spinning in my highest heels, love
Shining just for you
Hush, I know they said the end is near
But I'm still on my tallest tiptoes
Spinning in my highest heels, love
Shining just for you

I want you to know
I'm a mirrorball
I can change everything about me to fit in
You are not like the regulars
The masquerade revelers
Drunk as th\u0435y watch my shattered edg\u0435s glisten


Hush, when no one is around, my dear
You'll find me on my tallest tiptoes
Spinning in my highest heels, love
Shining just for you
Hush, I know they said the end is near
But I'm still on my tallest tiptoes
Spinning in my highest heels, love
Shining just for you


And they called off the circus, burned the disco down
When they sent home the horses and the rodeo clowns
I'm still on that tightrope
I'm still tryin' everything to get you laughing at me
And I'm still a believer, but I don't know why
I've never been a natural, all I do is try, try, try
I'm still on that trapeze
I'm still trying everything to keep you looking at me

Because I'm a mirrorball
I'm a mirrorball
And I'll show you every version of yourself tonight`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"Miss Americana & The Heartbreak Prince by Taylor Swift",lyrics:`You know I adore you, I'm crazier for you
Than I was at 16, lost in a film scene
Waving homecoming queens, marching band playing
I'm lost in the lights
American glory faded before me
Now I'm feeling hopeless, ripped up my prom dress
Running through rose thorns, I saw the scoreboard
And ran for my life (Ah)


No cameras catch my pageant smile
I counted days, I counted miles
To see you there, to see you there
It's been a long time coming, but

It's you and me, that's my whole world
They whisper in the hallway, "She's a bad, bad girl" (Okay)
The whole school is rolling fake dice
You play stupid games, you win stupid prizes
It's you and me, there's nothing like this
Miss Americana and The Heartbreak Prince (Okay)
We're so sad, we paint the town blue
Voted most likely to run away with you


My team is losing, battered and bruising
I see the high fives between the bad guys
Leave with my head hung, you are the only one
Who seems to care
American stories burning before me
I'm feeling helpless, the damsels are depressed
Boys will be boys then, where are the wise men?
Darling, I'm scared (Ah)


No cameras catch my muffled cries
I counted days, I counted miles
To see you there, to see you there
And now the storm is coming, but

It's you and me, that's my whole world
They whisper in the hallway, "She's a bad, bad girl" (Okay)
The whole school is rolling fake dice
You play stupid games, you win stupid prizes
It's you and me, there's nothing like this
Miss Americana and The Heartbreak Prince (Okay)
We're so sad, we paint the town blue
Voted most likely to run away with you


And I don't want you to (Go), I don't really wanna (Fight)
'Cause nobody's gonna (Win), I think you should come home
And I don't want you to (Go), I don't really wanna (Fight)
'Cause nobody's gonna (Win), I think you should come home
And I don't want you to (Go), I don't really wanna (Fight)
'Cause nobody's gonna (Win), just thought you should know
And I'll never let you (Go) 'cause I know this is a (Fight)
That someday we're gonna (Win)


It's you and me, that's my whole world
They whisper in the hallway, "She's a bad, bad girl"
Oh, I just thought you should know (You should know)
It's you and me, there's nothing like this (Like this)
Miss Americana and The Heartbreak Prince (Okay)
We're so sad, we paint the town blue (Paint it blue)
Voted most likely to run away with you

And I don't want you to (Go), I don't really wanna (Fight)
'Cause nobody's gonna (Win), I think you should come home
And I'll never let you (Go) 'cause I know this is a (Fight)
That someday we're gonna (Win), just thought you should know


It's you and me, that's my whole world
They whisper in the hallway, "She's a bad, bad girl"
"She's a bad, bad girl"`,coverArt:"https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"},{songTitle:"Mr. Perfectly Fine (Taylor's Version) [From the Vault] by Taylor Swift",lyrics:`Mr. "Perfect face"
Mr. "Here to stay"
Mr. "Looked me in the eye and told me you would never go away"
Everything was right
Mr. "I've been waitin' for you all my life"
Mr. "Every single day until the end, I will be by your side"


But that was when I got to know Mr. "Change of heart"
Mr. "Leaves me all alone," I fall apart
It takes everything in me just to get up each day
But it's wonderful to see that you're okay

Hello, Mr. "Perfectly fine"
How's your heart after breakin' mine?
Mr. "Always at the right place at the right time," baby
Hello, Mr. "Casually cruel"
Mr. "Everything revolves around you"
I've been Miss Misery since your goodbye
And you're Mr. "Perfectly fine"


Mr. "Never told me why"
Mr. "Never had to see me cry"
Mr. "Insincere apology so he doesn't look like the bad guy"
He goes about his day
Forgets he ever even heard my name
Well, I thought you might be different than the rest, I guess you're all the same


'Cause I hear he's got his arm 'round a brand-new girl
I've been pickin' up my heart, he's been pickin' up her
And I never got past what you put me through
But it's wonderful to see that it never phased you


Hello, Mr. "Perfectly fine"
How's your heart after breakin' mine?
Mr. "Always at the right place at the right time," baby
Hello, Mr. "Casually cruel"
Mr. "Everything revolves around you"
I've been Miss Misery since your goodbye
And you're Mr. "Perfectly fine"

So dignified in your well-pressed suit
So strategized, all the eyes on you
Sashay your way to your seat
It's the best seat, in the best room
Oh, he's so smug, Mr. "Always wins"
So far above me in every sense
So far above feeling anything


And it's really such a shame
It's such a shame
'Cause I was Miss "Here to stay"
Now I'm Miss "Gonna be alright someday"
And someday maybe you'll miss me
But by then, you'll be Mr. "Too late"


Goodbye, Mr. "Perfectly fine"
How's your heart after breakin' mine?
Mr. "Always at the right place at the right time," baby
Goodbye, Mr. "Casually cruel"
Mr. "Everything revolves around you"
I've been Miss Misery for the last time
And you're Mr. "Perfectly fine"

You're perfectly fine
Mr. "Looked me in the eye and told me you would never go away"
You said you'd never go away`,coverArt:"https://images.genius.com/6cd0ab9299beabca6c26f6543614811f.533x534x1.jpg"},{songTitle:"\u200Bmy tears ricochet by Taylor Swift",lyrics:`We gather here, we line up, weepin' in a sunlit room
And if I'm on fire,\u2005you'll\u2005be made of\u2005ashes, too
Even on my worst day,\u2005did I deserve, babe
All the hell you gave me?
'Cause I\u205Floved\u205Fyou,\u205FI swear I\u205Floved you
'Til my\u205Fdying day


I didn't have it in myself to go with grace
And you're the hero flying around, saving face
And if I'm dead to you, why are you at the wake?
Cursing my name, wishing I stayed
Look at how my tears ricochet

We gather stones, never knowing what they'll mean
Some to throw, some to make a diamond ring
You know I didn't want to have to haunt you
But what a ghostly scene
You wear the same jewels that I gave you
As you bury me


I didn't have it in myself to go with grace
'Cause when I'd fight, you used to tell me I was brave
And if I'm dead to you, why are you at the wake?
Cursing my name, wishing I stayed
Look at how my tears ricochet


And I can go anywhere I want
Anywhere I want, just not home
And you can aim for my heart, go for blood
But you would still miss me in your bones
And I still talk to you (When I'm screaming at the sky)
And when you can't sleep at night (You hear my stolen lullabies)


I didn't have it in myself to go with grace
And so the battleships will sink beneath the waves
You had to kill me, but it killed you just the same
Cursing my name, wishing I stayed
You turned into your worst fears
And you're tossing out blame, drunk on this pain
Crossing out the good years
And you're cursing my name, wishing I stayed
Look at how my tears ricochetRelated Songs`,coverArt:"https://images.genius.com/4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png"},{songTitle:"\u200Bmy tears ricochet (the long pond studio sessions) by Taylor Swift",lyrics:`We gather here, we line up, weepin' in a sunlit room
And if I'm on fire, you'll be made of ashes, too
Even on my worst day, did I deserve, babe
All the hell you gave me?
'Cause I loved you, I swear I loved you
'Til my dying day


I didn't have it in myself to go with grace
And you're the hero flying around, saving face
And if I'm dead to you, why are you at the wake?
Cursing my name, wishin' I stayed
Look at how my tears ricochet

We gather stones, nev\u0435r knowing what they'll mean
Some to throw, som\u0435 to make a diamond ring
You know I didn't want to have to haunt you
But what a ghostly scene
You wear the same jewels that I gave you
As you bury me


I didn't have it in myself to go with grace
'Cause when I'd fight, you used to tell me I was brave
And if I'm dead to you, why are you at the wake?
Cursing my name, wishin' I stayed
Look at how my tears ricochet


And I can go anywhere I want
Anywhere I want, just not home
And you can aim for my heart, go for blood
But you would still miss me in your bones
And I still talk to you
When I'm screaming at the sky
And when you can't sleep at night
You hear my stolen lullabies


I didn't have it in myself to go with grace
And so the battleships will sink beneath the waves
You had to kill me, but it killed you just the same
Cursing my name, wishin' I stayed
You turned into your worst fears
And you're tossing out blame, drunk on this pain
Crossin' out the good years
And you're cursing my name, wishin' I stayed
Look at how my tears ricochet

Yeah, look at how my tears ricochet
Look at all of my tears
Turnin' into your tears
Look at how my tears ricochet`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"Never Grow Up by Taylor Swift",lyrics:`Your little hand's wrapped around my finger
And it's so quiet in the world tonight
Your little eyelids flutter 'cause you're dreaming
So I tuck you in, turn on your favorite nightlight
To you, everything's funny
You got nothing to regret
I'd give all I have, honey
If you could stay like that


Oh, darling, don't you ever grow up
Don't you ever grow up, just stay this little
Oh, darling, don't you ever grow up
Don't you ever grow up, it could stay this simple
I won't let nobody hurt you
Won't let no one break your heart
And no one will desert you
Just try to never grow up
Never grow up

You're in the car on the way to the movies
And you're mortified your mom's dropping you off
At fourteen, there's just so much you can't do
And you can't wait to move out someday and call your own shots
But don't make her drop you off around the block
Remember that she's getting older too
And don't lose the way that you dance around
In your PJs getting ready for school


Oh, darling, don't you ever grow up
Don't you ever grow up, just stay this little
Oh, darling, don't you ever grow up
Don't you ever grow up, it could stay this simple
No one's ever burned you
Nothing's ever left you scarred
And even though you want to
Just try to never grow up


Take pictures in your mind of your childhood room
Memorize what it sounded like when your dad gets home
Remember the footsteps, remember the words said
And all your little brother's favorite songs
I just realized everything I have is someday gonna be gone
So here I am in my new apartment
In a big city, they just dropped me off
It's so much colder than I thought it would be
So I tuck myself in and turn my nightlight on
Wish I'd never grown up
I wish I'd never grown up

Oh, I don't wanna grow up
Wish I'd never grown up, I could still be little
Oh, I don't wanna grow up
Wish I'd never grown up, it could still be simple
Oh, darling, don't you ever grow up
Don't you ever grow up, just stay this little
Oh, darling, don't you ever grow up
Don't you ever grow up, it could stay this simple
Won't let nobody hurt you
Won't let no one break your heart
And even though you want to
Please try to never grow up


Oh, oh
Don't you ever grow up
Oh (Never grow up), just never grow up`,coverArt:"https://images.genius.com/d04f0a5d76810e4bc7c6d5f8e261bd91.1000x1000x1.jpg"},{songTitle:"New Romantics by Taylor Swift",lyrics:`We're all bored, we're all so tired of everything
We wait for trains that just aren't coming
We show off our different scarlet letters
Trust me, mine is better
We're so young, but we're on the road to ruin
We play dumb, but we know exactly what we're doing
We cry tears of mascara in the bathroom
Honey, life is just a classroom
(Ah, ah, ah, ah, ah, ah)

'Cause baby, I could build a castle
Out of all the bricks they threw at me
And every day is like a battle
But every night with us is like a dream
Baby, we're the new romantics
Come on, come along with me
Heartbreak is the national anthem
We sing it proudly
We are too busy dancing
To get knocked off our feet
Baby, we're the new romantics
The best people in life are free


We're all here, the lights and noise are blinding
We hang back, it's all in the timing
It's poker, he can't see it in my face
But I'm about to play my Ace (Ahh)
We need love, but all we want is danger
We team up, then switch sides like a record changer
The rumors are terrible and cruel
But, honey, most of them are true
(Ah, ah, ah, ah, ah, ah)


'Cause baby, I could build a castle
Out of all the bricks they threw at me
And every day is like a battle (Every day is like a battle)
But every night with us is like a dream
Baby, we're the new romantics
Come on, come along with me
Heartbreak is the national anthem
We sing it proudly
We are too busy dancing (Yeah)
To get knocked off our feet (Hey!)
Baby, we're the new romantics
The best people in life are free

(Oh, oh, oh-oh, oh)
Oh-oh
(Oh, oh, oh-oh, oh)
So, come on, come along with me
(Oh, oh, oh-oh, oh)
The best people in life are free
(Oh, oh, oh-oh, oh)


Please, take my hand and
Please, take me dancing and
Please, leave me stranded
It's so romantic (It's so romantic)
(Ah, ah, ah, ah, ah, ah)


'Cause baby, I could build a castle (Oh, baby, I could build a castle)
Out of all the bricks they threw at me (At me)
And every day is like a battle (Oh-oh-oh-oh-oh)
But every night with us is like a dream (Like a dream)
'Cause baby, I could build a castle (Castle)
Out of all the bricks they threw at me
And every day is like a battle (And every day is like a battle)
But every night with us is like a dream
Baby, we're the new romantics (Ah, ah, ah, ah, ah)
Come on, come along with me
Heartbreak is the national anthem (Ah, ah, ah, ah, ah)
We sing it proudly
We are too busy dancing (Ah, ah, ah, ah, ah)
To get knocked off our feet
Baby, we're the new romantics (Ah, ah, ah, ah, ah)
The best people in life are free`,coverArt:"https://images.rapgenius.com/19165ff1a27ca9838910264e6bdefbb7.1000x1000x1.jpg"},{songTitle:"New Year's Day by Taylor Swift",lyrics:`There's glitter on the floor after the party
Girls carrying their shoes down in the lobby
Candle wax and Polaroids on the hardwood floor
You and me from the night before, but


Don\u2019t read the last page
But I stay when you're lost and I'm scared and you\u2019re turning away
I want your midnights
But I'll be cleaning up bottles with you on New Year's Day

You squeeze my hand three times in the back of the taxi
I can tell that it's gonna be a long road
I'll be there if you're the toast of the town, babe
Or if you strike out and you're crawling home


Don't read the last page
But I stay when it\u2019s hard or it\u2019s wrong or we're making mistakes
I want your midnights
But I\u2019ll be cleaning up bottles with you on New Year's Day


Hold on to the memories, they will hold on to you
Hold on to the memories, they will hold on to you
Hold on to the memories, they will hold on to you
And I will hold on to you


Please don't ever become a stranger
Whose laugh I could recognize anywhere
Please don't ever become a stranger
Whose laugh I could recognize anywhere


There\u2019s glitter on the floor after the party
Girls carrying their shoes down in the lobby
Candle wax and Polaroids on the hardwood floor
You and me forevermore

Don't read the last page
But I stay when it's hard or it's wrong or we're making mistakes
I want your midnights
But I'll be cleaning up bottles with you on New Year's Day


Hold on to the memories, they will hold on to you
Hold on to the memories, they will hold on to you
Hold on to the memories, they will hold on to you
And I will hold on to you


Please don't ever become a stranger
(To the memories, they will hold on to you)
Whose laugh I could recognize anywhere
(Hold on to the memories, they will hold on to you)
Please don't ever become a stranger
(Hold on to the memories, they will hold on to you)
Whose laugh I could recognize anywhere
(I will hold on to you)`,coverArt:"https://images.genius.com/d6eba083b40fcec8b16ab1b4489fe057.1000x1000x1.png"},{songTitle:"\u200Bno body, no crime by Taylor Swift (Ft. HAIM)",lyrics:`He did it
He did it


Este's a friend of mine
We meet up every Tuesday night for dinner and a glass of wine
Este's been losin' sleep
Her husband's actin' different, and it smells like infidelity
She says, "That ain't my Merlot on his mouth
That ain't my jewelry on our joint account"
No, there ain't no doubt
I think I'm gonna call him out

She says, "I think he did it, but I just can't prove it"
I think he did it, but I just can't prove it
I think he did it, but I just can't prove it
No, no body, no crime
But I ain't lettin' up until the day I die


No, no
I think he did it
No, no
He did it


Este wasn't there Tuesday night at Olive Gard\u0435n
At her job or anywhere
H\u0435 reports his missing wife
And I noticed when I passed his house
His truck has got some brand new tires
And his mistress moved in
Sleeps in Este's bed and everything
No, there ain't no doubt
Somebody's gotta catch him out, 'cause


I think he did it, but I just can't prove it (He did it)
I think he did it, but I just can't prove it (He did it)
I think he did it, but I just can't prove it
No, no body, no crime
But I ain't lettin' up until the day I die

No, no
I think he did it
No, no
He did it


Good thing my daddy made me get a boating license when I was fifteen
And I've cleaned enough houses to know how to cover up a scene
Good thing Este's sister's gonna swear she was with me
(She was with me, dude)
Good thing his mistress took out a big life insurance policy


They think she did it, but they just can't prove it
They think she did it, but they just can't prove it
She thinks I did it, but she just can't prove it


No, no body, no crime
I wasn't lettin' up until the day he\u2014
No, no body, no crime
I wasn't lettin' up until the day he\u2014
No, no body, no crime
I wasn't lettin' up until the day he died`,coverArt:"https://images.genius.com/5ea71767d74b0f6a146d00db11c078cc.360x360x1.jpg"},{songTitle:"Nothing New (Taylor's Version) [From the Vault] by Taylor Swift (Ft. Phoebe Bridgers)",lyrics:`They tell you while you're young
"Girls, go out and have your fun"
Then they hunt and\u2005slay\u2005the ones who\u2005actually do it
Criticize the way you\u2005fly
When you're soaring through the sky
Shoot you down and then they sigh
And say, "She looks like she's been through it"
Lord, what will become of me
Once I've lost my novelty?

I've had too much to drink tonight
And I know it's sad but this is what I think about
And I wake up in the middle of the night
It's like I can feel time moving
How can a person know everything at eighteen
But nothing at twenty-two?
And will you still want me when I'm nothing new?


How long will it be cute, all this crying in my room?
When you can't blame it on my youth
And roll your eyes with affection
And my cheeks are growing tired
From turning red and faking smiles
Are we only biding time 'til I lose your attention
And someone else lights up the room? (Ahh)
People love an ing\xE9nue (Ahh)


I've had (I've had) too much to drink tonight
How did I go from growing up to breaking down?
And I wake up (Wake up) in the middle of the night
It's like I can feel time moving
How can a person know everything at eighteen
But nothing at twenty-two?
And will you still want me when I'm nothing new?

I know someday I'm gonna meet her
It's a fever dream
The kind of radiance you only have at seventeen
She'll know the way and then she'll say she got the map from me
I'll say I'm happy for her then I'll cry myself to sleep
Oh woah ohh, oh woah ohh, oh, oh


I've had (I've had) too much to drink tonight
But I wonder if they'll miss me once they drive me out
I wake up (Wake up) in the middle of the night
And I can feel time moving
How can a person know everything at eighteen
But nothing at twenty-two?
And will you still want me, will you still want me
Will you still want me when I'm nothing new?`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"Only The Young by Taylor Swift",lyrics:`It keeps me awake, the look on your face
The moment you heard the news
You're screaming\u2005inside\u2005and frozen in\u2005time
You did all that you could\u2005do
The game was rigged, the ref got tricked
The wrong ones think they\u2019re right
You were outnumbered this time


But only the young, only the young
Only the young, only the young
Can run
Can run
So run, and run, and run

So every day now
You brace for the sound you've only heard on TV
You go to class, scared
Wondering where the best hiding spot would be
And the big bad man and his big bad clan
Their hands are stained with red
Oh, how quickly they forget


They aren't gonna help us
Too busy helping themselves
They aren't gonna change this
We gotta do it ourselves
They think that it's over
But it's just begun


Only one thing can save us
Only the young (Only the young)
Only the young (Only the young)
Only the young (Only the young)
Only the young
Only the young (Only the young)
Only the young (Only the young)
Only the young (Only the young)
Only the young
Only the young (Only the young; Don't say you're too tired to fight)
Only the young (Only the young; It's just a matter of time)
Only the young (Only the young; Up there's the finish line)
Only the young
Can run

Don't say you're too tired to fight
It's just a matter of time (Can run)
Up there's the finish line (So run, and run, and run)
Don't say you're too tired to fight
It's just a matter of time (So run)
Up there's the finish line (And run, and run, and run)


Only the young
Only the young
Only the young`,coverArt:"https://images.genius.com/192e5c97447cc14f93d83b29be52797a.512x512x1.jpg"},{songTitle:"Ours by Taylor Swift",lyrics:`Elevator buttons and morning air
Strangers' silence makes me want to take the stairs
If you were here, we'd laugh about their vacant stares
But right now, my time is theirs
Seems like there's always someone who disapproves
They'll judge it like they know about me and you
And the verdict comes from those with nothing else to do
The jury's out, but my choice is you


So don't you worry your pretty little mind
People throw rocks at things that shine
And life makes love look hard
The stakes are high, the water's rough
But this love is ours

You never know what people have up their sleeves
Ghosts from your past gonna jump out at me
Lurking in the shadows with their lip gloss smiles
But I don't care, 'cause right now, you're mine
And you'll say


Don't you worry your pretty little mind
People throw rocks at things that shine
And life makes love look hard
The stakes are high, the water's rough
But this love is ours


And it's not theirs to speculate if it's wrong and
Your hands are tough, but they are where mine belong and
I'll fight their doubt and give you faith with this song for you
'Cause I love the gap between your teeth
And I love the riddles that you speak
And any snide remarks from my father about your tattoos
Will be ignored, 'cause my heart is yours


So don't you worry your pretty little mind
People throw rocks at things that shine
And life makes love look hard
Don't you worry your pretty little mind
People throw rocks at things that shine
But they can't take what's ours
They can't take what's ours
The stakes are high, the water's rough
But this love is ours`,coverArt:"https://images.genius.com/46a4f7383f53a1f0fc51fa65c385c14d.1000x1000x1.jpg"},{songTitle:"Ours (Live/2011) by Taylor Swift",lyrics:`Elevator buttons and morning air
Strangers' silence makes me want to take the stairs
If you were\u2005here,\u2005we'd laugh about\u2005their vacant stares
But right now, my\u2005time is theirs
Seems like there's always someone who disapproves
They'll judge it like they know about me and you
And the verdict comes from those with nothing else to do
The jury's out, but my choice is you


So don't you worry your pretty little mind
People throw rocks at things that shine
And life makes love look hard
The stakes are high, the water's rough
But this love is ours

You never know what people have up their sleeves
Ghosts from your past gonna jump out at me
Lurking in the shadows with their lip gloss smiles
But I don't care, 'cause right now, you're mine


And you'll say
Don't you worry your pretty little mind
People throw rocks at things that shine
And life makes love look hard
The stakes are high, the water's rough
But this love is ours


And it's not theirs to speculate if it's wrong
And your hands are tough, but they are where mine belong
And I'll fight their doubt and give you faith
With this song for you


'Cause I love the gap between your teeth
And I love the riddles that you speak
And any snide remarks from my father about your tattoos
Will be ignored
'Cause my heart is yours

So don't you worry your pretty little mind
People throw rocks at things that shine
And life makes love look hard
So Don't you worry your pretty little mind
People throw rocks at things that shine
But they can't take what's ours
They can't take what's ours


The stakes are high, the water's rough
But this love is ours`,coverArt:"https://images.genius.com/6510355b9fa1e35fa7e939852c7405d0.900x900x1.jpg"},{songTitle:"Our Song by Taylor Swift",lyrics:`I was ridin' shotgun with my hair undone
In the front seat of his car
He's got a one-hand feel on the steering wheel
The other on my heart
I look around, turn the radio down
He says, "Baby, is something wrong?"
I say, "Nothin', I was just thinkin'
How we don't have a song"
And he says

Our song is the slamming screen door
Sneakin' out late, tapping on your window
When we're on the phone and you talk real slow
'Cause it's late and your mama don't know
Our song is the way you laugh
The first date: "Man, I didn't kiss her, and I should have"
And when I got home, 'fore I said amen
Askin' God if he could play it again


I was walking up the front porch steps
After everything that day
Had gone all wrong or been trampled on
And lost and thrown away
Got to the hallway, well on my way
To my lovin' bed
I almost didn't notice all the roses
And the note that said


Our song is the slamming screen door
Sneakin' out late, tapping on your window
When we're on the phone and you talk real slow
'Cause it's late and your mama don't know
Our song is the way you laugh
The first date: "Man, I didn't kiss her, and I should have"
And when I got home, 'fore I said amen
Askin' God if he could play it again

Da-da-da-da


I've heard every album, listened to the radio
Waited for somethin' to come along
That was as good as our song


'Cause our song is the slamming screen door
Sneakin' out late, tappin' on his window
When we're on the phone and he talks real slow
'Cause it's late and his mama don't know
Our song is the way he laughs
The first date: "Man, I didn't kiss him, and I should have"
And when I got home, 'fore I said amen
Askin' God if he could play it again


Play it again, oh, yeah
Oh, oh, yeah


I was ridin' shotgun with my hair undone
In the front seat of his car
I grabbed a pen and an old napkin
And I wrote down our song`,coverArt:"https://images.genius.com/66bed5ec2b6e815b9370c225b34ab472.953x953x1.jpg"},{songTitle:"Our Song (Live from SoHo) by Taylor Swift",lyrics:`One, two


Well, I was riding shotgun with my hair undone
In the front seat of his car
He's got a one-hand feel on the steering wheel
The other on my heart
I look around, turn the radio down
He says, "Baby, is something wrong?"
I say, "Nothing, I was just thinking
How we don't have a song"
And he says

Our song is the slamming screen door
Sneakin' out late, tapping on your window
When we're on the phone and you talk real slow
'Cause it's late and your mama don't know
Our song is the way you laugh
The first date: "Man, I didn't kiss her, and I should have"
And when I got home 'fore I said amen
Asking God if he could play it again


I was walking up the front porch steps
After everything that day
Had gone all wrong and been trampled on
And lost and thrown away
Got to the hallway, well on my way
To my lovin' bed
I almost didn't notice all the roses
And the note that said


Our song is the slamming screen door
Sneakin' out late, tapping on your window
When we're on the phone and you talk real slow
'Cause it's late and your mama don't know
Our song is the way you laugh
The first date: "Man, I didn't kiss her, and I should have"
And when I got home 'fore I said amen
Asking God if he could play it again
Da da da da

Well, I've heard every album, listened to the radio
Waited for something to come along
That was as good as our song


'Cause our song is the slamming screen door
Sneakin' out late, tapping on his window
When we're on the phone and he talks real slow
'Cause it's late and his mama don't know
Our song is the way he laughs
The first date: "Man, I didn't kiss him, and I should have"
And when I got home 'fore I said amen
Asking God if he could play it again
Play it again
Oh yeah
Oh oh yeah


I was riding shotgun with my hair undone
In the front seat of his car
I grabbed a pen and an old napkin
And I wrote down our song
Thank you so much!`,coverArt:"https://images.genius.com/89ed020cf80ce5c178b2a385efa16113.800x800x1.jpg"},{songTitle:"Out Of The Woods by Taylor Swift",lyrics:`Looking at it now
It all seems so simple
We were lying on your couch
I remember
You took a Polaroid of us
Then discovered (Then discovered)
The rest of the world was black and white
But we were in screaming color
And I remember thinking

Are we out of the woods yet? Are we out of the woods yet?
Are we out of the woods yet? Are we out of the woods?
Are we in the clear yet? Are we in the clear yet?
Are we in the clear yet, in the clear yet? Good
Are we out of the woods yet? Are we out of the woods yet?
Are we out of the woods yet? Are we out of the woods?
Are we in the clear yet? Are we in the clear yet?
Are we in the clear yet, in the clear yet? Good
(Are we out of the woods?)

Looking at it now
Last December (Last December)
We were built to fall apart
Then fall back together (Back together)
Ooh, your necklace hanging from my neck
The night we couldn't quite forget
When we decided, we decided
To move the furniture so we could dance
Baby, like we stood a chance
Two paper airplanes flying, flying, flying
And I remember thinking


Are we out of the woods yet? Are we out of the woods yet?
Are we out of the woods yet? Are we out of the woods?
Are we in the clear yet? Are we in the clear yet?
Are we in the clear yet, in the clear yet? Good
Are we out of the woods yet? Are we out of the woods yet?
Are we out of the woods yet? (Oh) Are we out of the woods?
Are we in the clear yet? Are we in the clear yet?
Are we in the clear yet, in the clear yet? Good
(Are we out of the woods?)

Remember when you hit the brakes too soon?
Twenty stitches in the hospital room
When you started crying, baby, I did too
But when the sun came up, I was looking at you
Remember when we couldn't take the heat?
I walked out, I said, "I'm setting you free"
But the monsters turned out to be just trees
When the sun came up, you were looking at me
You were looking at me, ooh
You were looking at me
(Are we out of the woods yet? Are we out of the woods yet?)
(Are we out of the woods yet? Are we out of the woods?)
I remember
(Are we in the clear yet? Are we in the clear yet?)
(Are we in the clear yet, in the clear yet? Good)
Oh, I remember


Are we out of the woods yet? Are we out of the woods yet? (Yeah, yeah)
Are we out of the woods yet? Are we out of the woods?
Are we in the clear yet? Are we in the clear yet? (Say, are we?)
Are we in the clear yet, in the clear yet? Good
Are we out of the woods yet? Are we out of the woods yet?
Are we out of the woods yet? Are we out of the woods?
Are we in the clear yet? (Yeah) Are we in the clear yet? (Yeah)
Are we in the clear yet, in the clear yet? Good (Clear yet? Good)
Are we out of the woods yet? Are we out of the woods yet?
Are we out of the woods yet? Are we out of the woods?
Are we in the clear yet? Are we in the clear yet?
Are we in the clear yet, in the clear yet? Good (Do you remember?)
Are we out of the woods yet? Are we out of the woods yet?
Are we out of the woods yet? Are we out of the woods?
Are we in the clear yet? Are we in the clear yet?
Are we in the clear yet, in the clear yet? Good`,coverArt:"https://images.rapgenius.com/0b83c9f40d79468954d6532431da7639.1000x1000x1.jpg"},{songTitle:"Paper Rings by Taylor Swift",lyrics:`The moon is high
Like your friends were the night that we first met
Went home and tried to stalk you on the internet
Now I've read all of the books beside your bed
The wine is cold
Like the shoulder that I gave you in the street
Cat and mouse for a month or two or three
Now I wake up in the night and watch you breathe


(Ayy)
Kiss me once 'cause you know I had a long night (Oh)
Kiss me twice 'cause it's gonna be alright (Uh)
Three times 'cause I waited my whole life (1, 2, 1, 2, 3, 4)

I like shiny things, but I'd marry you with paper rings
Uh huh, that's right
Darling, you're the one I want, and
I hate accidents except when we went from friends to this
Uh huh, that's right
Darling, you're the one I want
In paper rings, in picture frames, in dirty dreams
Oh, you're the one I want


In the winter, in the icy outdoor pool
When you jumped in first, I went in too
I'm with you even if it makes me blue
Which takes me back
To the color that we painted your brother's wall
Honey, without all the exes, fights, and flaws
We wouldn't be standing here so tall, so


(Ayy)
Kiss you once 'cause I know you had a long night (Oh)
Kiss you twice 'cause it's gonna be alright (Uh)
Three times 'cause you waited your whole life (1, 2, 1, 2, 3, 4)
Ah

I like shiny things, but I'd marry you with paper rings
Uh huh, that's right
Darling, you're the one I want, and
I hate accidents except when we went from friends to this
Uh huh, that's right
Darling, you're the one I want
In paper rings, in picture frames, in dirty dreams
Oh, you're the one I want


I want to drive away with you
I want your complications too
I want your dreary Mondays
Wrap your arms around me, baby boy
I want to drive away with you
I want your complications too
I want your dreary Mondays
Wrap your arms around me, baby boy
Uh huh


I like shiny things, but I'd marry you with paper rings
Ah-ah, that's right, you're the one I want
I hate accidents except when we went from friends to this
Ah-ah, darling, you're the one I want
I like shiny things, but I'd marry you with paper rings
Uh huh, that's right
Darling, you're the one I want, and
I hate accidents except when we went from friends to this
Uh huh, that's right
Darling, you're the one I want
In paper rings, in picture frames, in all my dreams
You're the one I want
In paper rings, in picture frames, in all my dreams
Oh, you're the one I want

You're the one I want, one I want
You're the one I want, one I want`,coverArt:"https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"},{songTitle:"\u200Bpeace by Taylor Swift",lyrics:`Our coming-of-age has come and gone
Suddenly this summer, it's clear
I never had the courage of\u2005my\u2005convictions
As long as\u2005danger is near
And it's just around\u2005the corner, darlin'
'Cause it lives in me
No, I could never\u205Fgive\u205Fyou\u205Fpeace


But I'm a\u205Ffire and I'll\u205Fkeep your brittle heart warm
If your cascade, ocean wave blues come
All these people think love's for show
But I would die for you in secret
The devil's in the details, but you got a friend in me
Would it be enough if I could never give you peace?

Your integrity makes me seem small
You paint dreamscapes on the wall
I talk shit with my friends, it's like I'm wasting your honor
And you know that I'd swing with you for the fences
Sit with you in the trenches
Give you my wild, give you a child
Give you the silence that only comes when two people understand each other
Family that I chose, now that I see your brother as my brother
Is it enough?
But there's robbers to the east, clowns to the west
I'd give you my sunshine, give you my best
But the rain is always gonna come if you're standin' with me


But I'm a fire and I'll keep your brittle heart warm
If your cascade, ocean wave blues come
All these people think love's for show
But I would die for you in secret
The devil's in the details, but you got a friend in me
Would it be enough if I could never give you peace?
Would it be enough if I could never give you peace?
Would it be enough if I could never give you peace?`,coverArt:"https://images.genius.com/4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png"},{songTitle:"\u200Bpeace (the long pond studio sessions) by Taylor Swift",lyrics:`Our coming-of-age has come and gone
Suddenly this summer, it's clear
I never had the courage of my convictions
As long as danger is near
And it's just around the corner, darlin'
'Cause it lives in me
No, I could never give you peace


But I'm a fire and I'll keep your brittle heart warm
If your cascade, ocean wave blues come
All these people think love's for show
But I would die for you in secret
The devil's in the details, but you got a fri\u0435nd in me
Would it be enough if I could n\u0435ver give you peace?

Your integrity makes me seem small
You paint dreamscapes on the wall
I talk shit with my friends, it's like I'm wasting your honor
And you know that I'd swing with you for the fences
Sit with you in the trenches
Give you my wild, give you a child
Give you the silence that only comes when two people understand each other
Family that I chose, now that I see your brother as my brother
Is it enough?
'Cause there's robbers to the east, clowns to the west
I'd give you my sunshine, give you my best
But the rain is always gonna come if you're standin' with me


But I'm a fire and I'll keep your brittle heart warm
If your cascade, ocean wave blues come
All these people think love's for show
And I would die for you in secret
The devil's in the details, but you got a friend in me
Would it be enough if I could never give you peace?
Would it be enough if I could never give you peace?
Would it be enough if I could never give you peace?`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"Picture to Burn by Taylor Swift",lyrics:`State the obvious, I didn't get my perfect fantasy
I realize you love yourself more than you could ever love me
So go and tell your friends that I'm obsessive and crazy
That's fine, you won't mind if I say
By the way


I hate that stupid old pickup truck you never let me drive
You're a redneck heartbreak who's really bad at lying
So watch me strike a match on all my wasted time
As far as I'm concerned, you're just another picture to burn

There's no time for tears
I'm just sitting here planning my revenge
There's nothing stopping me
From going out with all of your best friends
And if you come around saying sorry to me
My daddy's gonna show you how sorry you'll be


'Cause I hate that stupid old pickup truck you never let me drive
You're a redneck heartbreak who's really bad at lying
So watch me strike a match on all my wasted time
As far as I'm concerned, you're just another picture to burn


And if you're missing me, you'd better keep it to yourself
'Cause coming back around here would be bad for your health


'Cause I hate that stupid old pickup truck you never let me drive
You're a redneck heartbreak who's really bad at lying
So watch me strike a match on all my wasted time
In case you haven't heard
I really really hate that
Stupid old pickup truck you never let me drive
You're a redneck heartbreak, who's really bad at lying
So watch me strike a match on all my wasted time
As far as I'm concerned, you're just another picture to burn

Burn, burn, burn, baby, burn
You're just another picture to burn
Baby, burn`,coverArt:"https://images.genius.com/4e31bcf25d2533eb816cb8b5bd992f1f.953x953x1.jpg"},{songTitle:"Picture To Burn (Live from Clear Channel Stripped 2008) by Taylor Swift",lyrics:`State the obvious, I didn't get my perfect fantasy
I realize you love yourself more than\u2005you\u2005could ever love\u2005me
So go and tell your friends\u2005that I'm obsessive and crazy
That's fine, you won't mind if I say
By the way


I hate that stupid old pickup truck you never let me drive
You're a redneck heartbreak who's really bad at lying
So watch me strike a match on all my wasted time
As far as I'm concerned, you're just another picture to burn

There's no time for tears
I'm just sitting here planning my revenge
There's nothing stopping me
From going out with all of your best friends
And if you come around saying sorry to me
My daddy's gonna show you how sorry you'll be


'Cause I hate that stupid old pickup truck you never let me drive
You're a redneck heartbreak who's really bad at lying
So watch me strike a match an all my wasted time
As far as I'm concerned, you're just another picture to burn


And if you're missing me, you'd better keep it to yourself
'Cause coming back around here would be bad for your health


'Cause I hate that stupid old pickup truck you never let me drive
You're a redneck heartbreak who's really bad at lying
So watch me strike a match on all my wasted time
In case you haven't heard
I really really hate that
Stupid old pickup truck you never let me drive
You're a redneck heartbreak, who's really bad at lying
So watch me strike a match on all my wasted time
As far as I'm concerned, you're just another picture to burn

Burn, burn, burn, baby, burn
You're just another picture to burn
Baby, burn`,coverArt:"https://images.genius.com/a27d0e4b7173862e0abc61e372597975.1000x1000x1.jpg"},{songTitle:"Picture to Burn (Live From SoHo) by Taylor Swift",lyrics:`This one's called "Picture to Burn"
One, two, three


Well, state the obvious, I didn't get my perfect fantasy
I realize you love yourself more than you could ever love me
So go and tell your friends that I'm obsessive and crazy
That's fine, I'll tell mine you're gay
And by the way

I hate that stupid old pickup truck you never let me drive
You're a redneck heartbreak who's really bad at lying
So watch me strike a match on all my wasted time
As far as I'm concerned, you're just another picture to burn


Well, there's no time for tears
I'm just sitting here planning my revenge
There's nothing stopping me
From going out with all of your best friends
And if you come around saying sorry to me
My daddy's gonna show you how sorry you'll be


I hate that stupid old pickup truck you never let me drive
You're a redneck heartbreak who's really bad at lying
So watch me strike a match an all my wasted time
As far as I'm concerned, you're just another picture to burn


And if you're missing me, you'd better keep it to yourself
'Cause coming back around here would be bad for your health


'Cause I hate that stupid old pickup truck you never let me drive
You're a redneck heartbreak who's really bad at lying
So watch me strike a match on all my wasted time
In case you haven't heard
I really really hate that
Stupid old pickup truck you never let me drive
You're a redneck heartbreak, who's really bad at lying
So watch me strike a match on all my wasted time
As far as I'm concerned, you're just another picture to burn

Burn, burn, burn, baby, burn
You're just another picture to burn
Baby, burn
Thank you so much!
Thank you!`,coverArt:"https://images.genius.com/89ed020cf80ce5c178b2a385efa16113.800x800x1.jpg"},{songTitle:"Picture to Burn (Original Version) by Taylor Swift",lyrics:`State the obvious, I didn't get my perfect fantasy
I realize you love yourself more than you could ever love me
So go and tell your friends that I'm obsessive and crazy
That's fine,\u205FI'll\u205Ftell\u205Fmine you're gay
And\u205Fby the way


I\u205Fhate that stupid old pickup truck you never let me drive
You're a redneck heartbreak who's really bad at lying
So watch me strike a match on all my wasted time
As far as I'm concerned, you're just anoth\u0435r picture to burn

There's no tim\u0435 for tears
I'm just sitting here planning my revenge
There's nothing stopping me
From going out with all of your best friends
And if you come around saying sorry to me
My daddy's gonna show you how sorry you'll be


'Cause I hate that stupid old pickup truck you never let me drive
You're a redneck heartbreak who's really bad at lying
So watch me strike a match on all my wasted time
As far as I'm concerned, you're just another picture to burn


And if you're missing me, you'd better keep it to yourself
'Cause coming back around here would be bad for your health


'Cause I hate that stupid old pickup truck you never let me drive
You're a redneck heartbreak who's really bad at lying
So watch me strike a match on all my wasted time
In case you haven't heard
I really really hate that
Stupid old pickup truck you never let me drive
You're a redneck heartbreak, who's really bad at lying
So watch me strike a match on all my wasted time
As far as I'm concerned, you're just another picture to burn

Burn, burn, burn, baby, burn
You're just another picture to burn
Baby, burn`,coverArt:"https://images.genius.com/721a6c465a666419bf286b473287c33f.446x446x1.jpg"},{songTitle:"...Ready for It? by Taylor Swift",lyrics:`Knew he was a killer first time that I saw him
Wondered how many girls he had loved and left haunted
But if he's a ghost, then I can be a phantom
Holdin' him for ransom, some
Some boys are tryin' too hard, he don't try at all though
Younger than my exes, but he act like such a man, so
I see nothing better, I keep him forever
Like a vendetta-ta


I, I, I see how this is gon' go
Touch me and you'll never be alone
I-Island breeze and lights down low
No one has to know

In the middle of the night, in my dreams
You should see the things we do, baby
In the middle of the night, in my dreams
I know I'm gonna be with you, so I take my time
Are you ready for it?


Knew I was a robber first time that he saw me
Stealing hearts and running off and never sayin' sorry
But if I'm a thief, then he can join the heist, and
We'll move to an island, and
And he can be my jailer, Burton to this Taylor
Every love I've known in comparison is a failure
I forget their names now, I'm so very tame now
Never be the same now, now


I, I, I see how this is gon' go
Touch me and you'll never be alone
I-Island breeze and lights down low
No one has to know (No one has to know)


In the middle of the night, in my dreams
You should see the things we do, baby
In the middle of the night in my dreams
I know I'm gonna be with you, so I take my time
Are you ready for it?
Oh, are you ready for it?

Baby, let the games begin
Let the games begin
Let the games begin
Baby, let the games begin
Let the games begin
Let the games begin


I, I, I see how this is gon' go
Touch me and you'll never be alone
I-Island breeze and lights down low
No one has to know


In the middle of the night (Night), in my dreams (My dreams)
You should see the things we do (We do), baby (Baby), hmm (Eh)
In the middle of the night, in my dreams (My dreams)
I know I'm gonna be with you (I know I'm gonna be with you)
So I take my time
In the middle of the night


Baby, let the games begin
Let the games begin
Let the games begin
Are you ready for it?
Baby, let the games begin
Let the games begin
Let the games begin
Are you ready for it?`,coverArt:"https://images.genius.com/5aeff71a5f148ca52f0b19d92a701246.800x800x1.jpg"},{songTitle:"...Ready for It? (BloodPop\xAE Remix) by Taylor Swift",lyrics:`Knew he was a killer first time that I saw him
Wondered how many girls he had loved and left haunted
But if he's a ghost, then I can be a phantom
Holdin' him for ransom, some
Some boys are tryin' too hard, he don't try at all though
Younger than my exes, but he act like such a man, so
I see nothing better, I keep him forever
Like a vendetta-ta


I, I, I see how this is gon' go
Touch me and you'll never be alone
I-Island breeze and lights down low
No one has to know

In the middle of the night, in my dreams (Yeah)
You should see the things we do, baby
In the middle of the night, in my dreams (The night, my dreams)
I know I'm gonna be with you, so I'll take my time
Are you ready for it?


Knew I was a robber first time that he saw me
Stealing hearts and running off and never sayin' sorry
But if I'm a thief, then he can join the heist, and
We'll move to an island, and
And he can be my jailer, Burton to this Taylor
Every love I've known in comparison is a failure
I forget their names now, I'm so very tame now
Never be the same now, now


I, I, I see how this is gon' go
Touch me and you'll never be alone
I-Island breeze and lights down low
No one has to know


In the middle of the night, in my dreams (Night, in my dreams)
You should see the things we do, baby (We'd do, baby)
Yeah, in the middle of the night in my dreams (My dreams)
I know I'm gonna be with you, so I take my time
Are you ready for it?

Night, in my dreams
We'd do, baby
Yeah, in the middle of the night
Baby, let the games begin
Let the games begin
Let the games begin
Baby, let the games begin
Let the games begin
Let the games begin


In the middle of the night, in my dreams
You should see the things we do, baby`,coverArt:"https://images.genius.com/ad440cde6e1244ed5fd84722ee043326.1000x1000x1.jpg"},{songTitle:"Red by Taylor Swift",lyrics:`Loving him is like driving a new Maserati down a dead-end street
Faster than the wind, passionate as sin, ending so suddenly
Loving him is like trying to change your mind once you're already flying through the free fall
Like the colors in autumn, so bright just before they lose it all


Losing him was blue like I'd never known
Missing him was dark gray, all alone
Forgetting him was like trying to know somebody you've never met
But loving him was red

(Red, red)
(Red, red)
Loving him was red
(Red, red)
(Red, red)


Touching him was like realizing all you ever wanted was right there in front of you
Memorizing him was as easy as knowing all the words to your old favorite song
Fighting with him was like trying to solve a crossword and realizing there's no right answer
Regretting him was like wishing you never found out that love could be that strong


Losing him was blue like I'd never known
Missing him was dark gray, all alone (Whoa)
Forgetting him was like trying to know somebody you've never met
But loving him was red


(Red, red)
Oh, red (Red, red)
Burning red (Red, red)
(Red, red)


Remembering him comes in flashbacks and echoes
Tell myself it's time now, gotta let go
But moving on from him is impossible
When I still see it all in my head
In burning red
Burning, it was red

Oh, losing him was blue like I'd never known
Missing him was dark gray, all alone (Whoa)
Forgetting him was like trying to know somebody you've never met
'Cause loving him was red


(Red, red) Yeah, yeah, red (Red, red)
Burning red (Red, red)
(Red, red)


And that's why (Red, red) he's spinning 'round in my head
Comes back to me (Red, red), burning red
(Red, red) Yeah, yeah
(Red, red)


His love was like driving a new Maserati down a dead-end street`,coverArt:"https://images.genius.com/4839c3ee641328b578c5e7fc41f5d038.1000x1000x1.jpg"},{songTitle:"Red (Original Demo Recording) by Taylor Swift",lyrics:`Loving him is like
Driving a new Maserati down a dead end street
Faster than the wind, passionate as sin, ending so suddenly
Loving him is like
Trying to change your mind once you're already flying through the freefall
Like the colors in autumn
So bright, just before they lose it all

Losing him was blue like I'd never known
Missing him was dark grey, all alone
Forgetting him was like trying to know somebody you've never met
But loving him was red
Loving him was red

Touching him was like
Realizing all you ever wanted was right there in front of you
Memorizing him was as
Easy as knowing all the words to your old favorite song
Fighting with him was like
Trying to solve a crossword and realizing there's no right answer
Regretting him was like
Wishing you never found out that love could be that strong

Losing him was blue like I'd never known
Missing him was dark grey, all alone
Forgetting him was like trying to know somebody you've never met
But loving him was red
Oh, red
Burning red

Remembering him comes in flashbacks and echoes
Tell myself it's time now, gotta let go
But moving on from him is impossible
When I still see it all in my head
In burning red
Burning, it was red

Losing him was blue like I'd never known
Missing him was dark grey, all alone
Forgetting him was like trying to know somebody you never met
'Cause loving him was red
Yeah, yeah, red
We're burning red


And that's why he's spinning 'round in my head
Burning red, burning red

His love was like
Driving a new Maserati down a dead end street`,coverArt:"https://images.genius.com/467cd7140d29f54794fa8e91ccd87b8e.1000x1000x1.jpg"},{songTitle:"Red (Taylor's Version) by Taylor Swift",lyrics:`Loving him is like driving a new Maserati down a dead-end street
Faster than the wind, passionate as sin, ending so suddenly
Loving him is like trying to change your mind once you're already flying through the free fall
Like the colors in autumn, so bright just before they lose it all


Losing him was blue like I'd never known
Missing him was dark gray, all alone (Whoa)
Forgetting him was like trying to know somebody you never met
But loving him was red

(Red, red)
(Red, red)
But loving him was red
(Red, red)
(Red, red)


Touching him was like realizing all you ever wanted was right there in front of you
Memorizing him was as easy as knowing all the words to your old favorite song
Fighting with him was like trying to solve a crossword and realizing there's no right answer
Regretting him was like wishing you never found out that love could be that strong


Losing him was blue like I'd never known
Missing him was dark gray, all alone (Whoa)
Forgetting him was like trying to know somebody you never met
But loving him was red


(Red, red)
Oh, red (Red, red)
Burning red (Red, red)
(Red, red)


Remembering him comes in flashbacks and echoes
Tell myself it's time now, gotta let go
But moving on from him is impossible
When I still see it all in my head
In burning red

Burning, it was red


Oh, losing him was blue like I'd never known
Missing him was dark gray, all alone (Whoa)
Forgetting him was like
Trying to know somebody you never met
'Cause loving him was red


(Red, red) Yeah, yeah, red (Red, red)
Burning red (Red, red)
(Red, red)


And that's why he's spinning 'round in my head (Red, red)
Comes back to me, burning red (Red, red)
(Red, red) Yeah, yeah
(Red, red)


His love was like
Driving a new Maserati down a dead-end street`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"\u200Br\u200Bight where you left me by Taylor Swift",lyrics:`Friends break up, friends get married
Strangers get born, strangers get buried
Trends change, rumors fly through new skies
But I'm right where you left me
Matches burn after the other
Pages turn and stick to each other
Wages earned and lessons learned
But I, I'm right where you left me


Help, I'm still at the restaurant
Still sitting in a corner I haunt
Cross-legged in the dim light
They say, "What a sad sight"
I, I swear you could hear a hair pin drop
Right when I felt the moment stop
Glass shattered on the white cloth
Everybody moved on, I, I stayed there
Dust collected on my pinned-up hair
They expected me to find somewhere
Some perspective, but I sat and stared

Right where you left me
You left me no, you left me no
You left me no choice but to stay here forever
You left me, you left me no, oh, you left me no
You left me no choice but to stay here forever


Did you ever hear about the girl who got frozen?
Time went on for everybody else, she won't know it
She's still twenty-three inside her fantasy
How it was supposed to be
Did you hear about the girl who lives in delusion?
Breakups happen every day, you don't have to lose it
She's still twenty-three inside her fantasy
And you're sitting in front of me


At the restaurant when I was still the one you want
Cross-legged in the dim light, everything was just right
I, I could feel the mascara run
You told me that you met someone
Glass shattered on the white cloth
Everybody moved on


Help, I'm still at the restaurant
Still sitting in a corner I haunt
Cross-legged in the dim light
They say, "What a sad sight"
I, I stayed there
Dust collected on my pinned-up hair
I'm sure that you got a wife out there
Kids and Christmas, but I'm unaware
'Cause I'm right where I cause no harm
Mind my business
If our love died young
I can't bear witness
And it's been so long
But if you ever think you got it wrong

I'm right where
You left me
You left me no, oh, you left me no
You left me no choice but to stay here forever
You left me
You left me no, oh, you left me no
You left me no choice but to stay here forever`,coverArt:"https://images.genius.com/a43146535419531bcf8b9dca82c68f85.1000x1000x1.png"},{songTitle:"Ronan by Taylor Swift",lyrics:`I remember you bare feet, down the hallway
I remember your little laugh
Race cars on the kitchen floor, plastic dinosaurs
I love you to the moon and back
I remember your blue eyes looking into mine
Like we had our own secret club
I remember you dancing before bed time
Then jumping on me waking me up
I can still feel you hold my hand, little man
And even the moment I knew
You fought it hard like an army guy
Remember I leaned in and whispered to you

"Come on, baby, with me
We're going to fly away from here
You were my best four years"


I remember the drive home
When the blind hope turned to crying and screaming, "Why?"
Flowers pile up in the worst way, no one knows what to say
About a beautiful boy who died
And it's about to be Halloween
You could be anything you wanted, if you were still here
I remember the last day, when I kissed your face
And whispered in your ear


"Come on, baby, with me
We're going to fly away from here
Out of this curtained room and this hospital grey
We'll just disappear
Come on, baby, with me
We're going to fly away from here
You were my best four years"


What if I'm standing in your closet trying to talk to you?
And what if I kept the hand-me-downs you won't grow into?
And what if I really thought some miracle would see us through?
What if the miracle was even getting one moment with you?

Come on, baby, with me
We're going to fly away from here
Come on, baby, with me
We're going to fly away from here
You were my best four years


I remember you bare feet, down the hallway
I love you to the moon and back`,coverArt:"https://images.genius.com/e01fce2350dbcbc42bdf5bd570543dee.220x220x1.png"},{songTitle:"Ronan (Taylor's Version) by Taylor Swift",lyrics:`I remember your bare feet, down the hallway
I remember your little laugh
Race cars on the kitchen floor, plastic dinosaurs
I love you to the moon and back
I remember your blue eyes looking into mine
Like we had our own secret club
I remember you dancing before bedtime
Then jumping on me, waking me up
I can still feel you hold my hand, little man
And even the moment I knew
You fought it hard like an army guy
Remember I leaned in and whispered to you

"Come on, baby, with me
We're going to fly away from here
You were my best four years"


I remember the drive home
When the blind hope turned to crying and screaming, "Why?"
Flowers pile up in the worst way, no one knows what to say
About a beautiful boy who died
And it's about to be Halloween
You could be anything you wanted if you were still here
I remember the last day, when I kissed your face
And whispered in your ear


"Come on, baby, with me
We're going to fly away from here
Out of this curtained room and this hospital gray
We'll just disappear
Come on, baby, with me
We're going to fly away from here
You were my best four years"


What if I'm standing in your closet trying to talk to you?
And what if I kept the hand-me-downs you won't grow into?
And what if I really thought some miracle would see us through?
What if the miracle was even getting one moment with you?

Come on, baby, with me
We're going to fly away from here
Come on, baby, with me
We're going to fly away from here
You were my best four years


I remember your bare feet, down the hallway
I love you to the moon and back`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"Run (Taylor's Version) [From the Vault] by Taylor Swift (Ft. Ed Sheeran)",lyrics:`One, two, three, four


Give me the keys, I'll bring the car back around
We shouldn't be in this town
And my so-called friends, they don't know
I'd drive away before I let you go
So give me a reason and don't say no, no
There's a chain 'round your throat, piece of paper where I wrote
"I'll wait for you"
There's a key on the chain, there's a picture in a frame
Take it with you

And run, like you'd run from the law
Darling, let's run
Run from it all
We can go where our eyes can take us
Go where no one else is, run
Ooh, we'll run
Ooh, we'll run
Ooh, we'll run


So you laugh like a child
And I'll sing like no one cares
No one to be, no one to tell
I could see this view a hundred times
Pale blue sky reflected in your eyes
So give me a reason and don't say no, no
And the note from the locket, you keep it in your pocket
Since I gave it to you
There's a heart on your sleeve
I'll take it when I leave
And hold it for you


And run, like you'd run from the law
Darling, let's run
Run from it all
We can go like they're trying to chase us
Go where no one else is, run
Ooh, we'll run
Ooh, we'll run
Ooh, we'll run

There's been this hole in my heart
This thing was a shot in the dark
Say you'll never let 'em tear us apart
And I'll hold onto you while we run (And we run, and we run, and we run)


Like you'd run from the law (And we run, and we run, and we run)
Darling, let's run (And we run, and we run, and we run)
Run from it all (And we run, and we run, and we run)
We can go where our eyes can take us (And we run, and we run, and we run)
Go where no one else is, run (And we run, and we run, and we run)
Ooh, we'll run (And we run, and we run, and we run)
Ooh, we'll run (And we run, and we run, and we run)
Ooh, we'll run (And we run, and we run, and we run)
Ooh, and we'll run`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"Sad Beautiful Tragic by Taylor Swift",lyrics:`Long handwritten note, deep in your pocket
Words, how little they mean, when you're a little too late
I stood right by the tracks, your face in a locket
Good girls, hopeful they'll be and long they will wait


We had a beautiful magic love there
What a sad, beautiful, tragic love affair


In dreams, I meet you in warm conversation
We both wake in lonely beds, different cities
And time is taking its sweet time erasing you
And you've got your demons, and darling, they all look like me

'Cause we had a beautiful magic love there
What a sad, beautiful, tragic love affair


Distance, timing
Breakdown, fighting
Silence, the train runs off its tracks
Kiss me, try to fix it
Could you just try to listen?
Hang up, give up
And for the life of us we can't get back


A beautiful, magic love there
What a sad, beautiful, tragic
Beautiful, tragic, beautiful


What we had, a beautiful magic love there
What a sad, beautiful, tragic, love affair
We had a beautiful magic love there
What a sad, beautiful, tragic love affair`,coverArt:"https://images.genius.com/341214eeb78c133a8170a932919a66aa.1000x1000x1.png"},{songTitle:"Sad Beautiful Tragic (Taylor's Version) by Taylor Swift",lyrics:`Long handwritten notes, deep in your pocket
Words, how little they mean when you're a little too late
I stood right by the tracks, your face in a locket
Good girls, hopeful they'll be and long they will wait


We had a beautiful, magic love there
What a sad, beautiful, tragic love affair


In dreams, I meet you in warm conversation
And we both wake in lonely beds and different cities
And time is taking its sweet time erasing you
And you've got your demons and, darling, they all look like me

'Cause w\u0435 had a beautiful, magic love ther\u0435
What a sad, beautiful, tragic love affair


Whoa, oh, whoa, oh


Distance, timing
Breakdown, fighting
Silence, the train runs off its tracks
Kiss me, try to fix it
Could you just try to listen?
Hang up, give up
And for the life of us, we can't get back


A beautiful, magic love there
What a sad, beautiful, tragic
Beautiful, tragic, beautiful


What we had, a beautiful, magic love there
What a sad, beautiful, tragic love affair
We had a beautiful, magic love there
What a sad, beautiful, tragic love affair`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"Safe & Sound by Taylor Swift (Ft. The Civil Wars)",lyrics:`I remember tears streaming down your face
When I said I'll never let you go
When all those shadows almost killed your light
I remember you said, "Don't leave me here alone"
But all that's dead and gone and passed tonight


Just close your eyes
The sun is going down
You'll be alright
No one can hurt you now
Come morning light
You and I'll be safe and sound

Don't you dare look out your window
Darling, everything's on fire
The war outside our door keeps raging on
Hold on to this lullaby
Even when (the) music's gone
Gone


Just close your eyes
The sun is going down
You'll be alright
No one can hurt you now
Come morning light
You and I'll be safe and sound


Ooh, ooh, ooh, ooh, oh, oh


Just close your eyes
You'll be alright
Come morning light
You and I'll be safe and sound


Ooh, ooh, ooh, ooh oh oh`,coverArt:"https://images.genius.com/b7df0070c681ee44b855d68d7c6f0b07.1000x1000x1.jpg"},{songTitle:"Santa Baby by Taylor Swift",lyrics:`Santa baby, slip a sable under the tree, for me
I have been an awful good girl, Santa baby
So hurry down the chimney tonight
Santa baby, a '54 convertible, too, light blue
Well I will wait up for you, dear, Santa baby
So hurry down the chimney tonight, yeah


Think of all the fun I have missed
Think of all the boys I have not kissed
Next year I could be just as good
If you check off my Christmas list

Santa baby, I want a yacht and really that is not a lot
I have been an angel all year, Santa baby
So hurry down the chimney tonight
Santa, honey, there is one more thing I really do need, the deed
To a platinum mine, Santa honey
So hurry down the chimney tonight


Come and trim my Christmas tree
With some decorations bought at Tiffany's
I really do believe in you
Let us see if you believe in me


Santa baby, forgot to mention one little thing
A ring
And I do not mean on the phone, Santa baby
So hurry down the chimney tonight`,coverArt:"https://images.genius.com/46a9fca430dd35d09273fc0deaba7bf7.1000x1000x1.jpg"},{songTitle:"\u200Bseven by Taylor Swift",lyrics:`Please picture me in the trees
I hit my peak at seven
Feet in the swing over\u2005the\u2005creek
I was too\u2005scared to jump in
But I, I\u2005was high in the sky
With Pennsylvania under me
Are there still beautiful things?


Sweet tea in the summer
Cross your heart, won't tell no other
And though I can\u2019t recall your face
I still got love for you
Your braids like a pattern
Love you to the Moon and to Saturn
Passed down like folk songs
The love lasts so long

And I've been meaning to tell you
I think your house is haunted
Your dad is always mad and that must be why
And I think you should come live with me
And we can be pirates
Then you won't have to cry
Or hide in the closet
And just like a folk song
Our love will be passed on


Please picture me in the weeds
Before I learned civility
I used to scream ferociously
Any time I wanted
I, I


Sweet tea in the summer
Cross my heart, won\u2019t tell no other
And though I can't recall your face
I still got love for you
Pack your dolls and a sweater
We'll move to India forever
Passed down like folk songs
Our love lasts so long`,coverArt:"https://images.genius.com/4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png"},{songTitle:"\u200Bseven (the long pond studio sessions) by Taylor Swift",lyrics:`Please picture me in the trees
I hit my peak at seven
Feet in the swing over\u2005the\u2005creek
I was too\u2005scared to jump in
But I, I\u2005was high in the sky
With Pennsylvania under me
Are there still\u205Fbeautiful\u205Fthings?


Sweet\u205Ftea in the\u205Fsummer
Cross your heart,\u205Fwon't tell no other
And though I can't recall your face
I still got love for you
Your braids make a pattern
Love you to the Moon and to Saturn
Passed down like folk songs
The love lasts so long

And I've been meaning to tell you
I think your house is haunted
Your dad is always mad and that must be why
And I think you should come live with me
And we can be pirates
Then you won't have to cry
Or hide in the closet
And just like a folk song
Our love will be passed on


Please picture me in the weeds
Before I learned civility
I used to scream ferociously
Any time I wanted
I, I


Sweet tea in the summer
Cross your heart, won't tell no other
And though I can't recall your face
I still got love for you
Pack your dolls and a sweater
We'll move to India forever
Passed down like folk songs
The love lasts so long`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"Shake It Off by Taylor Swift",lyrics:`I stay out too late
Got nothing in my brain
That's what people say, mmm-mmm
That's what people say, mmm-mmm
I go on too many dates
But I can't make them stay
At least that's what people say, mmm-mmm
That's what people say, mmm-mmm


But I keep cruisin'
Can't stop, won't stop movin'
It's like I got this music in my mind
Sayin', "It's gonna be alright"

'Cause the players gonna play, play, play, play, play
And the haters gonna hate, hate, hate, hate, hate
Baby, I'm just gonna shake, shake, shake, shake, shake
I shake it off, I shake it off
Heartbreakers gonna break, break, break, break, break
And the fakers gonna fake, fake, fake, fake, fake
Baby, I'm just gonna shake, shake, shake, shake, shake
I shake it off, I shake it off


I never miss a beat
I'm lightnin' on my feet
And that's what they don't see, mmm-mmm
That's what they don't see, mmm-mmm
I'm dancin' on my own (Dancin' on my own)
I make the moves up as I go (Moves up as I go)
And that's what they don't know, mmm-mmm
That's what they don't know, mmm-mmm


But I keep cruisin'
Can't stop, won't stop groovin'
It's like I got this music in my mind
Sayin', "It's gonna be alright"
Related Songs
'Cause the players gonna play, play, play, play, play
And the haters gonna hate, hate, hate, hate, hate
Baby, I'm just gonna shake, shake, shake, shake, shake
I shake it off, I shake it off
Heartbreakers gonna break, break, break, break, break
And the fakers gonna fake, fake, fake, fake, fake
Baby, I'm just gonna shake, shake, shake, shake, shake
I shake it off, I shake it off


Shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off


Hey, hey, hey
Just think, while you've been gettin' down and out about the liars
And the dirty, dirty cheats of the world
You could've been gettin' down
To this sick beat


My ex-man brought his new girlfriend
She's like, "Oh my God!" But I'm just gonna shake
And to the fella over there with the hella good hair
Won't you come on over, baby?
We can shake, shake, shake
Yeah, oh, oh, oh

'Cause the players gonna play, play, play, play, play
And the haters gonna hate, hate, hate, hate, hate
(Haters gonna hate)
Baby, I'm just gonna shake, shake, shake, shake, shake
I shake it off, I shake it off (Ha!)
Heartbreakers gonna break, break, break, break, break (Mmm)
And the fakers gonna fake, fake, fake, fake, fake
(And fake, and fake, and fake)
Baby, I'm just gonna shake, shake, shake, shake, shake
I shake it off, I shake it off (I, I, I)


Shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off
Shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off (Yeah!)
Shake it off, I shake it off
I, I, I shake it off, I shake it off (You got to)
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off
`,coverArt:"https://images.rapgenius.com/7b9fa8f6506f0106c91d9c75808a6253.1000x1000x1.jpg"},{songTitle:"Should've Said No by Taylor Swift",lyrics:`It's strange to think the songs we used to sing
The smiles, the flowers, everything is gone
Yesterday I found out about you
Even now, just lookin' at you feels wrong


You say that you'd take it all back
Given one chance
It was a moment of weakness
And you said yes

You should've said no, you should've gone home
You should've thought twice 'fore you let it all go
You should've known that word
'Bout what you did with her'd get back to me (Get back to me)
And I should've been there, in the back of your mind
I shouldn't be asking myself why
You shouldn't be begging for forgiveness at my feet
You should've said no
Baby, and you might still have me


You can see that I've been cryin'
And baby, you know all the right things to say
But do you honestly expect me to believe
We could ever be the same?


You say that the past is the past
You need one chance
It was a moment of weakness
And you said yes


You should've said no, you should've gone home
You should've thought twice 'fore you let it all go
You should've known that word
'Bout what you did with her\u2019d get back to me (Get back to me)
And I should've been there, in the back of your mind
I shouldn't be asking myself why
You shouldn't be begging for forgiveness at my feet
You should've said no
Baby, and you might still have me
Oh, oh

I can't resist
Before you go, tell me this
Was it worth it?
Was she worth this?
No, no
No, no, no, no


You should've said no, you should've gone home
You should've thought twice 'fore you let it all go
You should've known that word
'Bout what you did with her\u2019d get back to me (Get back to me)
And I should've been there, in the back of your mind
I shouldn't be asking myself why
You shouldn't be begging for forgiveness at my feet
You should've said no
Baby, and you might still have me`,coverArt:"https://images.genius.com/897dec91b765613a239fb3abc3a904b7.1000x1000x1.jpg"},{songTitle:"Should've Said No (Alternate Version) by Taylor Swift",lyrics:`It's strange to think the songs we used to sing
The smiles, the flowers, everything is gone
Yesterday I found out about you
Even now, just lookin' at you feels wrong


You say that you'd take it all back
Given one chance
It was a moment of weakness
And you said yes

You should've said no, you should've gone home
You should've thought twice 'fore you let it all go
You should've known that word
'Bout what you did with her\u2019d get back to me (Get back to me)
And I should've been there in the back of your mind
I shouldn't be asking myself why
You shouldn't be begging for forgiveness at my feet
You should've said no
Baby, and you might still have me


You can see that I've been cryin'
And baby, you know all the right things to say
But do you honestly expect me to believe
We could ever be the same?


You say that the past is the past
You need one chance
It was a moment of weakness
And you said yes


You should've said no, you should've gone home
You should've thought twice 'fore you let it all go
You should've known that word
'Bout what you did with her\u2019d get back to me (Get back to me)
And I should've been there in the back of your mind
I shouldn't be asking myself why
You shouldn't be begging for forgiveness at my feet
You should've said no
Baby, and you might still have me
Oh, oh

I can't resist
Before you go, tell me this
Was it worth it?
Was she worth this?
No, no
No, no, no, no


You should've said no, you should've gone home
You should've thought twice 'fore you let it all go
You should've known that word
'Bout what you did with her\u2019d get back to me (Get back to me)
And I should've been there in the back of your mind
I shouldn't be asking myself why
You shouldn't be begging for forgiveness at my feet
You should've said no
Baby, and you might still have me`,coverArt:"https://images.genius.com/d6286ec27200e6d723c36d55fd89b4ca.894x894x1.jpg"},{songTitle:"Should\u2019ve Said No (Live from Clear Channel Stripped 2008) by Taylor Swift",lyrics:`It's strange to think the songs we used to sing
The smiles, the flowers, everything is\u2005gone
Yesterday\u2005I found out\u2005about you
Even now just looking at\u2005you: feels wrong


You say that you'd take it all back,\u205Fgiven\u205Fone\u205Fchance
It was a\u205Fmoment of weakness\u205Fand you said, "Yes"


You should've said, "No"
You should've gone home
You should've thought twice 'fore you let it all go
You should've known that word, 'bout what you did with her\u2019d
Get back to me (Get back to me)
And I should've been there, in the back of your mind
I shouldn't be asking myself, "Why?"
You shouldn't be begging for forgiveness at my feet
You should've said no, baby, and you might still have me

You can see that I've been crying
Baby, you know all the right things to say
But do you honestly expect me to believe
We could ever be the same?


You say that the past is the past, you need one chance
It was a moment of weakness and you said, "Yes"


You should've said, "No"
You should've gone home
You should've thought twice 'fore you let it all go
You should've known that word, 'bout what you did with her\u2019d
Get back to me (Get back to me)
And I should've been there, in the back of your mind
I shouldn't be asking myself, "Why?"
You shouldn't be begging for forgiveness at my feet
You should've said no, baby, and you might still have me


I can't resist
Before you go tell me this
Was it worth it?
Was she worth this?
No no, no, no

You should've said, "No"
You should've gone home
You should've thought twice 'fore you let it all go
You should've known that word, 'bout what you did with her\u2019d
Get back to me (Get back to me)
And I should've been there, in the back of your mind
I shouldn't be asking myself, "Why?"
You shouldn't be begging for forgiveness at my feet
You should've said no, baby, and you might still have me`,coverArt:"https://images.genius.com/a27d0e4b7173862e0abc61e372597975.1000x1000x1.jpg"},{songTitle:"Should've Said No (Live from SoHo) by Taylor Swift",lyrics:`You should've said, "No"
You\u200A should've gone home
You\u200A should've thought twice 'fore you let it all go
You should've know that word, 'bout what you did with her
Get back to me


It's\u200A strange to think the songs we used to sing
The\u200A smiles, the flowers, everything is gone
Yesterday I found out about you
Even\u200A now just looking at you: feels wrong

And Yyu say that you'd take it all back, given one chance
It was a moment of weakness and you said, "Yes"


You should've said, "No"
You\u200A should've gone home
You should've thought twice 'fore you let it all go
You should've know that word, 'bout what you did with her
Get back to me (Get back to me)
And I should've been there, in the back of your mind
I shouldn't be asking myself, "Why?"
You shouldn't be begging for forgiveness at my feet
You should've said no, baby, and you might still have me


You can see that I've been crying
Baby, you know all the right things to say
But do you honestly expect me to believe
We could ever be the same?


And you say that the past is the past, you need one chance
It was a moment of weakness and you said, "Yes"


You should've said, "No"
You should've gone home
You should've thought twice 'fore you let it all go
You should've know that word, 'bout what you did with her
Get back to me (Get back to me)
And I should've been there, in the back of your mind
I shouldn't be asking myself, "Why?"
You shouldn't be begging for forgiveness at my feet
You should've said no, baby, and you might still have me

Well, I can't resist
Before you go tell me this
Was it worth it?
Was she worth this?
No no, no, no, no, no


You should've said, "No"
You should've gone home
You should've thought twice 'fore you let it all go
You should've know that word, 'bout what you did with her
Get back to me (Get back to me)
And I should've been there, in the back of your mind
I shouldn't be asking myself, "Why?"
You shouldn't be begging for forgiveness at my feet
You should've said no, baby, and you might still have me
Thank you`,coverArt:"https://images.genius.com/89ed020cf80ce5c178b2a385efa16113.800x800x1.jpg"},{songTitle:"Silent Night by Taylor Swift",lyrics:`Silent night, holy night
All is calm and all is bright
Round yon virgin mother and child
Holy infant so tender and mild
Sleep in heavenly peace
Sleep in heavenly peace


Silent night, holy night
Shepherds quake at the sight
Glories stream from Heaven afar
Heavenly hosts sing Hallelujah
Christ the Saviour is born
Christ our Saviour is born

Silent night, holy night
Son of God
Love's pure light
Radiant beams from thy holy face
With the dawn of redeeming grace
Jesus Lord at thy birth
Jesus Lord at thy birth


Hallelujah!
Hallelujah!
Hallelujah!
Christ the Saviour is born`,coverArt:"https://images.genius.com/46a9fca430dd35d09273fc0deaba7bf7.1000x1000x1.jpg"},{songTitle:"So It Goes... by Taylor Swift",lyrics:`See you in the dark
All eyes on you, my magician
All eyes on us
You make everyone disappear, and
Cut me into pieces
Gold cage, hostage to my feelings
Back against the wall
Trippin', trip-trippin' when you're gone


'Cause we break down a little
But when you get me alone, it's so simple
'Cause baby, I know what you know
We can feel it

And all the pieces fall right into place
Getting caught up in a moment
Lipstick on your face
So it goes\u2026
I'm yours to keep
And I'm yours to lose
You know I'm not a bad girl, but I
Do bad things with you
So it goes\u2026


Met you in a bar
All eyes on me, your illusionist
All eyes on us
I make all your gray days clear
And wear you like a necklace
I'm so chill, but you make me jealous
But I got your heart
Skippin', skip-skippin' when I'm gone


'Cause we break down a little
But when I get you alone, it's so simple
'Cause baby, I know what you know
We can feel it

And all the pieces fall right into place
Getting caught up in a moment
Lipstick on your face
So it goes\u2026
I'm yours to keep
And I'm yours to lose
You know I'm not a bad girl, but I
Do bad things with you
So it goes\u2026


Come here, dressed in black now
So, so, so it goes
Scratches down your back now
So, so, so it goes


You did a number on me
But, honestly, baby, who's counting?
I did a number on you
But, honestly, baby, who's counting?
You did a number on me
But, honestly, baby, who's counting?
Who's counting? (One, two, three)

And all the pieces fall (Pieces fall) right into place
Getting caught up in a moment (Caught up, caught up)
Lipstick on your face
So it goes\u2026
I'm yours to keep (Oh)
And I'm yours to lose (Baby)
You know I'm not a bad girl, but I
Do bad things with you
So it goes\u2026


Come here, dressed in black now
So, so, so it goes
Scratches down your back now
So, so, so it goes
Come here, dressed in black now
So, so, so it goes
Scratches down your back now
So, so, so it goes`,coverArt:"https://images.genius.com/d6eba083b40fcec8b16ab1b4489fe057.1000x1000x1.png"},{songTitle:"Soon You'll Get Better by Taylor Swift (Ft. The Chicks)",lyrics:`The buttons of my coat were tangled in my hair
In doctor's office lighting, I didn't tell you I was scared
That was the first time we were there
Holy orange bottles, each night, I pray to you
Desperate people find faith, so now I pray to Jesus too
And I say to you...


Ooh-ah
Soon, you'll get better
Ooh-ah
Soon, you'll get better
Ooh-ah
You'll get better soon
'Cause you have to

I know delusion when I see it in the mirror
You like the nicer nurses, you make the best of a bad deal
I just pretend it isn't real
I'll paint the kitchen neon, I'll brighten up the sky
I know I'll never get it, there's not a day that I won't try
And I say to you...


Ooh-ah
Soon, you'll get better
Ooh-ah
Soon, you'll get better
Ooh-ah
You'll get better soon
'Cause you have to


And I hate to make this all about me
But who am I supposed to talk to?
What am I supposed to do
If there's no you?


This won't go back to normal, if it ever was
It's been years of hoping, and I keep saying it because
'Cause I have to

Ooh-ah
You'll get better
Ooh-ah
Soon, you'll get better
Ooh-ah
You'll get better soon
Ooh-ah
Soon, you'll get better
Ooh-ah
Soon, you'll get better
Ooh-ah
You'll get better soon
'Cause you have to`,coverArt:"https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"},{songTitle:"Soon You\u2019ll Get Better (One World: Together At Home) by Taylor Swift",lyrics:`The buttons of my coat were tangled in my hair
In doctor's office lighting, I didn't\u2005tell\u2005you I was\u2005scared
That was the first time we\u2005were there
Holy orange bottles, each night, I pray to you
Desperate\u205Fpeople\u205Ffind\u205Ffaith, so now\u205FI pray to\u205FJesus too
And I say to you...


Ooh-ah
Soon, you'll get better
Ooh-ah
Soon, you'll get better
Ooh-ah
You'll get better soon
'Cause you have to

I know delusion when I see it in the mirror
You like the nicer nurses, you make the best of a bad deal
I just pretend it isn't real
I'll paint the kitchen neon, I'll brighten up the sky
I know I'll never get it, there's not a day that I won't try
And I say to you...


Ooh-ah
Soon, you'll get better
Ooh-ah
Soon, you'll get better
Ooh-ah
You'll get better soon
'Cause you have to


And I hate to make this all about me
But who am I supposed to talk to?
What am I supposed to do
If there's no you?


This won't go back to normal, if it ever was
It's been years of hoping, and I keep saying it because
'Cause I have to

Ooh
You'll get better
Ooh
You'll get better
Ooh-ah
You'll get better soon
'Cause you have to`,coverArt:"https://images.genius.com/9d2f3ba9ff3ff3c3cebd488cd62898ab.1000x1000x1.jpg"},{songTitle:"Sparks Fly by Taylor Swift",lyrics:`The way you move is like a full on rainstorm
And I'm a house of cards
You're the kind of reckless
That should send me running
But I kinda know that I won't get far
And you stood there in front of me
Just close enough to touch
Close enough to hope you couldn't see
What I was thinking of

Drop everything now, meet me in the pouring rain
Kiss me on the sidewalk, take away the pain
'Cause I see sparks fly whenever you smile
Get me with those green eyes, baby, as the lights go down
Give me something that'll haunt me when you're not around
'Cause I see sparks fly whenever you smile


My mind forgets to remind me
You're a bad idea
You touch me once and it's really something
You find I'm even better than you imagined I would be
I'm on my guard for the rest of the world
But with you I know it's no good
And I could wait patiently but I really wish you would


Drop everything now, meet me in the pouring rain
Kiss me on the sidewalk, take away the pain
'Cause I see sparks fly whenever you smile
Get me with those green eyes, baby, as the lights go down
Give me something that'll haunt me when you're not around
'Cause I see sparks fly whenever you smile


I run my fingers through your hair and watch the lights go wild
Just keep on keeping your eyes on me
It's just wrong enough to make it feel right
And lead me up the staircase
Won't you whisper soft and slow?
I'm captivated by you, baby, like a firework show

Drop everything now, meet me in the pouring rain
Kiss me on the sidewalk, take away the pain
'Cause I see sparks fly whenever you smile
Get me with those green eyes, baby, as the lights go down
Give me something that'll haunt me when you're not around
'Cause I see sparks fly whenever you smile


And the sparks fly
Oh, baby, smile
And the sparks fly`,coverArt:"https://images.genius.com/a7b4fee7f61355be5edb388a863b8af2.1000x1000x1.jpg"},{songTitle:"Sparks Fly (Live/2011) by Taylor Swift",lyrics:`I don\u2019t think you should wait, you speak now
Drop everything now


The way you move is\u2005like\u2005a full on\u2005rainstorm
And I'm a house of cards
You're\u2005the kind of reckless
That should send me running
But I kinda\u205Fknow\u205Fthat\u205FI won't get\u205Ffar
And you stood\u205Fthere in front of me
Just close enough to touch
Close enough to hope you couldn't see
What I was thinking of

Drop everything now
Meet me in the pouring rain
Kiss me on the sidewalk
Take away the pain
'Cause I see sparks fly whenever you smile
Get me with those green eyes, baby, as the lights go down
Give me something that'll haunt me when you're not around
I see sparks fly whenever you smile


My mind forgets to remind me
You're a bad idea
You touch me once and it's really something
You find I'm even better than you imagined I would be
I'm on my guard for the rest of the world
But with you I know it's no good
Well I could wait patiently but I really wish you would


Drop everything now
Meet me in the pouring rain
Kiss me on the sidewalk
Take away the pain
'Cause I see sparks fly whenever you smile
Get me with those green eyes, baby, as the lights go down
Give me something that'll haunt me when you're not around
I see sparks fly whenever you smile

I run my fingers through your hair and watch the lights go wild
Just keep on keeping your eyes on me, it's just wrong enough to make it feel right
And lead me up the staircase
Won't you whisper soft and slow?
I'm captivated by you, baby, like a firework show


Drop everything now
Meet me in the pouring rain
Drop everything now
Take away (take away) the pain
Drop everything now
Meet me in the pouring rain
Drop everything now
(Take away, take away the pain)
Drop everything now
Meet me in the pouring rain
Kiss me on the sidewalk
Take away the pain
'Cause I see sparks fly whenever you smile
Get me with those green eyes, baby, as the lights go down
Give me something that'll haunt me when you're not around
I see sparks fly whenever you smile


And the sparks fly`,coverArt:"https://images.genius.com/6510355b9fa1e35fa7e939852c7405d0.900x900x1.jpg"},{songTitle:"Sparks Fly (Original Version) by Taylor Swift",lyrics:`The way you move is like a full-on rainstorm
And I'm a house of cards
You say my name for the first time, baby
And I fall in love in an empty bar
And you stood there in front of me just close enough to touch
Close enough to hope you couldn't see what I was thinking of


Drop everything now
Meet me in the pouring rain
Kiss me on the sidewalk
Take away the pain
'Cause I see sparks fly whenever you smile
Get me with those green eyes, baby, as the lights go down
Give me something that'll haunt me when you're not around
'Cause I see sparks fly whenever you smile

So reach out open handed and lead me out to that floor
I don't need more paper lanterns
Take me down, baby
Bring on the movie score
'Cause my heart is beating fast and you are beautiful
I could wait patiently, but I really wish you would


Drop everything now
Meet me in the pouring rain
Kiss me on the sidewalk
Take away the pain
'Cause I see sparks fly whenever you smile
Get me with those green eyes, baby, as the lights go down
Give me something that'll haunt me when you're not around
'Cause I see sparks fly whenever you smile


I run my fingers through your hair and watch the lights go wild
Just keep your beautiful eyes on me
Gonna strike this match tonight
And lead me up the staircase
Won't you whisper soft and slow
I'd love to hate it, but you make it like a firework show

Drop everything now
Meet me in the pouring rain
Kiss me on the sidewalk
Take away the pain
'Cause I see sparks fly whenever you smile
Get me with those green eyes, baby, as the lights go down
Give me something that'll haunt me when you're not around
'Cause I see sparks fly whenever you smile


And the sparks fly
Oh, baby, smile
And the sparks fly`,coverArt:"https://images.genius.com/721a6c465a666419bf286b473287c33f.446x446x1.jpg"},{songTitle:"Speak Now by Taylor Swift",lyrics:`I am not the kind of girl
Who should be rudely barging in on a white veil occasion
But you are not the kind of boy
Who should be marrying the wrong girl
I sneak in and see your friends
And her snotty little family all dressed in pastel
And she is yelling at a bridesmaid
Somewhere back inside a room
Wearing a gown shaped like a pastry

This is surely not what you thought it would be
I lose myself in a daydream
Where I stand and say


Don't say yes, run away now
I'll meet you when you're out of the church, at the back door
Don't wait or say a single vow
You need to hear me out
And they said, "Speak now"


Fond gestures are exchanged
And the organ starts to play a song that sounds like a death march
And I am hiding in the curtains
It seems that I was uninvited by your lovely bride-to-be


She floats down the aisle like a pageant queen
But I know you wish it was me
You wish it was me, don't you?


Don't say yes, run away now
I'll meet you when you're out of the church, at the back door
Don't wait or say a single vow
You need to hear me out
And they said, "Speak now"
Don't say yes, run away now (Run away now)
I'll meet you when you're out of the church, at the back door
Don't wait or say a single vow (Say a single vow)
Your time is running out
And they said, "Speak now"

Ooh (Run away now), la
Ooh (Say a single vow), ooh


I hear the preacher say
"Speak now or forever hold your peace"
There's the silence, there's my last chance
I stand up with shaky hands, all eyes on me
Horrified looks from everyone in the room
But I'm only looking at you


I am not the kind of girl
Who should be rudely barging in on a white veil occasion
But you are not the kind of boy
Who should be marrying the wrong girl


So don't say yes, run away now
I'll meet you when you're out of the church, at the back door
Don't wait or say a single vow
You need to hear me out
They said, "Speak now"
And you say, "Let's run away now (Run away now)
I'll meet you when I'm out of my tux, at the back door
Baby, I didn't say my vows (Say a single vow)
So glad you were around
When they said, 'Speak now'"`,coverArt:"https://images.genius.com/15ecb9353dcffc3a59b3a27819096889.1000x1000x1.jpg"},{songTitle:"Starlight by Taylor Swift",lyrics:`I said, "Oh, my, what a marvelous tune"
It was the best night, never would forget how we moved
The whole place was dressed to the nines
And we were dancing, dancing
Like we're made of starlight
Like we're made of starlight


I met Bobby on the boardwalk, summer of '45
Picked me up, late one night at the window
We were 17 and crazy, running wild, wild
Can't remember what song it was playing when we walked in
The night we snuck into a yacht club party
Pretending to be a duchess and a prince

And I said, "Oh, my, what a marvelous tune"
It was the best night, never would forget how we moved
The whole place was dressed to the nines
And we were dancing, dancing
Like we're made of starlight, starlight
Like we're made of starlight, starlight


He said, \u201CLook at you, worrying too much about things you can't change
You'll spend your whole life singing the blues if you keep thinking that way"
He was trying to skip rocks on the ocean, saying to me
"Don't you see the starlight, starlight?
Don't you dream impossible things?"


Like, "Oh, my, what a marvelous tune"
It was the best night, never would forget how we moved
The whole place was dressed to the nines
And we were dancing, dancing
Like we're made of starlight, starlight
Like we're made of starlight, starlight


Ooh-ooh, he's talking crazy
Ooh-ooh, dancing with me
Ooh-ooh, we could get married
Have ten kids and teach 'em how to dream



Oh, my, what a marvelous tune
It was the best night, never would forget how we moved
The whole place was dressed to the nines
And we were dancing, dancing
Like we're made of starlight, starlight
Like we're made of starlight, starlight


Like we're made of starlight, starlight
Like we dream impossible dreams
Like starlight, starlight
Like we dream impossible dreams


Don't you see the starlight, starlight?
Don't you dream impossible things?`,coverArt:"https://images.genius.com/341214eeb78c133a8170a932919a66aa.1000x1000x1.png"},{songTitle:"Starlight (Taylor's Version) by Taylor Swift",lyrics:`I said, "Oh my, what a marvelous tune"
It was the best night
Never would forget how he moved
The whole place was dressed to the nines
And we were dancing, dancing
Like we're made of starlight
Like we're made of starlight


I met Bobby on the boardwalk, summer of '45
Picks me up late one night
Out the window, we were seventeen and crazy, running wild, wild
Can't remember what song it was playing wh\u0435n we walked in
The night w\u0435 snuck into a yacht club party
Pretending to be a duchess and a prince

And I said, "Oh my, what a marvelous tune"
It was the best night, never would forget how he moved
The whole place was dressed to the nines
And we were dancing, dancing
Like we're made of starlight, starlight
Like we're made of starlight, starlight


He said, "Look at you, worrying too much about things you can't change
You'll spend your whole life singing the blues if you keep thinking that way"
He was trying to skip rocks on the ocean, saying to me
"Don't you see the starlight, starlight?
Don't you dream impossible things?"


Like, "Oh my, what a marvelous tune"
It was the best night, never would forget how he moved
The whole place was dressed to the nines
And we were dancing, dancing
Like we're made of starlight, starlight
Like we're made of starlight, starlight


Ooh-ooh, he's talking crazy
Ooh-ooh, dancing with me
Ooh-ooh, we could get married
Have ten kids and teach them how to dream

(Ooh, hoo, hoo)
(Ooh, hoo, hoo)
(Ooh, hoo, hoo)
(Ooh, hoo, hoo)


Oh my, what a marvelous tune
It was the best night, never would forget how he moved
The whole place was dressed to the nines
And we were dancing, dancing
Like we're made of starlight, starlight
Like we're made of starlight, starlight


Like we're made of starlight, starlight
Like we dream impossible dreams
Like starlight, starlight
Like we dream impossible dreams


Don't you see the starlight, starlight?
Don't you dream impossible things?`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"State of Grace by Taylor Swift",lyrics:`I'm walking fast through the traffic lights
Busy streets and busy lives
And all we know is touch and go
We are alone with our changing minds
We fall in love 'til it hurts or bleeds
Or fades in time


And I never (Never)
Saw you coming
And I\u2019ll never (Never)
Be the same

You come around and the armor falls
Pierce the room like a cannonball
Now all we know is don\u2019t let go
We are alone, just you and me
Up in your room and our slates are clean
Just twin fire signs, four blue eyes


So you were never a saint
And I've loved in shades of wrong
We learn to live with the pain
Mosaic broken hearts
But this love is brave and wild


And I never (Never)
Saw you coming
And I\u2019ll never (Never)
Be the same


This is a state of grace
This is the worthwhile fight
Love is a ruthless game
Unless you play it good and right
These are the hands of fate
You\u2019re my Achilles heel
This is the golden age
Of something good and right and real

And I never (Never)
Saw you coming
And I\u2019ll never
Be the same


And I never (Never)
Saw you coming
And I\u2019ll never (So you were never a saint)
(And I've loved in shades of wrong)
Be the same (We learn to live with the pain)
(Mosaic broken hearts)
(But this love is brave and wild)


This is a state of grace
This is the worthwhile fight
Love is a ruthless game
Unless you play it good and right`,coverArt:"https://images.genius.com/d04abe7a7e67aeb3131825cacfb4e3ae.1000x1000x1.jpg"},{songTitle:"State of Grace (Acoustic Version) by Taylor Swift",lyrics:`I'm walking fast through the traffic lights
Busy streets and busy lives
And all we know is touch and go
We are alone with our changing minds
We fall in love till it hurts or bleeds, or fades in time


And I never saw you coming
And I\u2019ll never be the same

You come around and the armor falls
Pierce the room like a cannon ball
Now all we know, is don\u2019t let go
We are alone just you and me
Up in your room and our slates are clean
Just twin fire signs, four blue eyes


So you were never a saint
And I've loved in shades of wrong
We learn to live with the pain
Mosaic broken hearts
But this love is brave and wild


And I never saw you coming
And I\u2019ll never be the same


This is a state of grace
This is the worthwhile fight
Love is a ruthless game
Unless you play it good and right
These are the hands of fate
You\u2019re my Achilles heel
This is the golden age of something good
And right and real

And I never saw you coming
And I\u2019ll never be the same
And I never saw you coming
And I\u2019ll never be the same


This is a state of grace
This is a worthwhile fight
Love is a ruthless game
Unless you play it good and right`,coverArt:"https://images.genius.com/467cd7140d29f54794fa8e91ccd87b8e.1000x1000x1.jpg"},{songTitle:"State Of Grace (Acoustic Version) [Taylor's Version] by Taylor Swift",lyrics:`I'm walking fast through the traffic lights
Busy streets and busy lives
And all we know is touch and go
We are alone with our changing minds
We fall in love 'til it hurts or bleeds
Or fades in time


And I never saw you comin'
And I'll never be the same

You come around and the armor falls
Pierce the room like a cannonball
Now all we know is don\u2019t let go
We are alone, just you and me
Up in your room and our slates are clean
Just twin fire signs, four blue eyes


So you were never a saint
And I've loved in shad\u0435s of wrong
We learn to live with th\u0435 pain
Mosaic broken hearts
But this love is brave and wild


I never saw you comin'
And I'll never be the same


This is a state of grace
This is the worthwhile fight
Love is a ruthless game
Unless you play it good and right
These are the hands of fate
You're my Achilles heel
This is the golden age of something good and right and real

And I never saw you comin'
And I'll never be the same, oh
Oh, I never saw you comin'
And I'll never be the same


This is a state of grace
This is the worthwhile fight
Love is a ruthless game
Unless you play it good and right`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"State of Grace (Taylor's Version) by Taylor Swift",lyrics:`I'm walkin' fast through the traffic lights
Busy streets and busy lives
And all we know is touch and go
We are alone with our changing minds
We fall in love 'til it hurts or bleeds
Or fades in time


And I never (I never)
Saw you comin'
And I'll never (Never)
Be the same

You come around and the armor falls
Pierce the room like a cannonball
Now all we know is don\u2019t let go
We are alone, just you and me
Up in your room and our slates are clean
Just twin fire signs, four blue eyes


So you were never a saint
And I loved in shades of wrong
We learn to live with the pain
Mosaic broken hearts
But this love is brave and wild


And I never (Never) (Oh, oh, oh, oh, oh-oh, oh)
Saw you comin' (Oh, oh, oh, oh, oh-oh, oh)
(Oh, oh, oh, oh, oh-oh, oh) (Oh, oh, oh, oh, oh-oh, oh)
And I'll never (Never) (Oh, oh, oh, oh, oh-oh, oh)
Be the same (Oh, oh, oh, oh, oh-oh, oh)
(Oh, oh, oh, oh, oh-oh, oh)
(Oh, oh, oh, oh, oh-oh, oh)


This is a state of grace
This is the worthwhile fight
Love is a ruthless game
Unless you play it good and right
These are the hands of fate
You're my Achilles heel
This is the golden age
Of something good and right and real

And I never (Never)
Saw you comin'
And I'll never
Be the same, oh


And I never (Never) (Oh, oh, oh, oh, oh-oh, oh)
Saw you comin' (Oh, oh, oh, oh, oh-oh, oh)
(Oh, oh, oh, oh, oh-oh, oh)
(Oh, oh, oh, oh, oh-oh, oh)
And I'll never (Never) (Oh, oh, oh, oh, oh-oh, oh)
(So you were never a saint and I loved in shades of wrong)
(We learn to live with the pain)
Be the same (Mosaic broken hearts) (Oh, oh, oh, oh, oh-oh, oh)
(Oh, oh, oh, oh, oh-oh, oh)
(But this love is brave and wild) (Oh, oh, oh, oh, oh-oh, oh)


This is a state of grace
This is the worthwhile fight
Love is a ruthless game
Unless you play it good and right`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"Stay Beautiful by Taylor Swift",lyrics:`Cory's eyes are like a jungle
He smiles, it's like the radio
He whispers songs into my window
In words that nobody knows
There's pretty girls on every corner
They watch him as he's walking home
Saying, "Does he know?"
Will you ever know?


You're beautiful, every little piece, love
Don't you know you're really gonna be someone?
Ask anyone
And when you find everything you looked for
I hope your life leads you back to my door
Oh, but if it don't
Stay beautiful

Cory finds another way to be
The highlight of my day
I'm taking pictures in my mind
So I can save them for a rainy day
It's hard to make a conversation
When he's taking my breath away
I should say, "Hey, by the way"


You're beautiful, every little piece, love
Don't you know you're really gonna be someone?
Ask anyone
And when you find everything you looked for
I hope your life leads you back to my door
Oh, but if it don't
Stay beautiful


If you and I are a story
That never gets told
If what you are is a daydream
I'll never get to hold, at least you'll know


You're beautiful, every little piece, love
Don't you know you're really gonna be someone?
Ask anyone
And when you find everything you looked for
I hope your life leads you back to my front door
Oh, but if it don't
Will you stay beautiful, beautiful, beautiful?
Beautiful, beautiful, beautiful

La-la-la
Oh-oh-oh
Oh-oh-oh-oh
Oh, but if it don't
Stay beautiful, stay beautiful
Na-na-na, na-na`,coverArt:"https://images.genius.com/6b596144050683a8bfea75da8aa70fc3.1000x1000x1.jpg"},{songTitle:"Stay Stay Stay by Taylor Swift",lyrics:`I'm pretty sure we almost broke up last night
I threw my phone across the room, at you
I was expecting some dramatic turn away
But you stayed
This morning, I said we should talk about it
'Cause I read you should never leave a fight unresolved
That's when you came in wearing a football helmet
And said, "Okay, let's talk"
And I said

Stay, stay, stay
I've been loving you for quite some time, time, time
You think that it's funny when I'm mad, mad, mad
But I think that it's best if we both stay


Before you, I'd only dated self-indulgent takers
Who took all of their problems out on me
But you carry my groceries and now I'm always laughing
And I love you because you have given me
No choice but to


Stay, stay, stay
I've been loving you for quite some time, time, time
You think that it's funny when I'm mad, mad, mad
But I think that it's best if we both stay, stay, stay, stay


You took the time to memorize me
My fears, my hopes, and dreams
I just like hanging out with you, all the time
All those times that you didn't leave, it's been occurring to me
I'd like to hang out with you, for my whole life

Stay, and I'll be loving you for quite some time
No one else is gonna love me when I get mad, mad, mad
So I think that it's best if we both stay, stay
Stay, stay, stay, stay!


Stay, stay, stay
I've been loving you for quite some time, time, time
You think that it's funny when I'm mad, mad, mad
But I think that it's best if we both stay, stay
Stay, stay, stay, stay!


Stay, stay, stay
I've been loving you for quite some time, time, time
You think that it's funny when I'm mad, mad, mad
But I think that it's best if we both stay
(Ha-ha-ha, it's so fun)`,coverArt:"https://images.genius.com/341214eeb78c133a8170a932919a66aa.1000x1000x1.png"},{songTitle:"Stay Stay Stay / Ho Hey by Taylor Swift",lyrics:`I'm pretty sure we almost broke up last night
I threw my phone across the room, at you
I was expecting some dramatic turn-away
But you stayed

This morning I said we should talk about it
'Cause I've read you should never leave a fight unresolved
That's when you came in wearing a football helmet
And said "okay, let's talk"
And I said
Stay, stay, stay
I've been loving you for quite some time, time, time
You think that it's funny when I'm mad, mad, mad
So I think that it's best if we both stay

Before you I'd only dated self-indulgent takers
Who took all of their problems out on me
But you carry my groceries and now I'm always laughing
And I love you because you have given me no choice but to

Stay, stay, stay
I've been loving you for quite some time, time, time
You think that it's funny when I'm mad, mad, mad
So I think that it's best if we both stay
Stay, stay, stay

You took the time to memorize me
My fears, my hopes, and dreams
I just like hanging out with you all the time
All those times that you didn't leave
It's been occurring to me
I'd like to hang out with you for my whole life


Ho, hey, ho, hey
So show your family
All the blood that I would bleed
I don't know where I belong
I don't know where I went wrong
But I can write a song
I belong with you
You belong with me
You're my sweetheart 
I belong with you
You belong with me
You're my sweetheart
I belong with you
You belong with me
You're my sweetheart
I belong with you 
You belong with me 

So please, please


Stay, stay, stay
I'll be loving you for quite some time
No one else is gonna love me when I get mad, mad, mad
So I think that it's best if we both stay, stay, stay, stay

Stay, stay, stay
I've been loving you for quite some time, time, time
You think that it's funny when I'm mad, mad, mad
So I think that it's best if we both stay, stay, stay, stay, stay, stay

Stay, stay, stay
I've been loving you for quite some time, time, time
You think that it's funny when I'm mad, mad, mad
So I think that it's best if we both stay`,coverArt:"https://images.rapgenius.com/dc8b7e532da0742684a2cef40ddda8af.500x439x1.png"},{songTitle:"Stay Stay Stay (Taylor's Version) by Taylor Swift",lyrics:`I'm pretty sure we almost broke up last night
I threw my phone across the room, at you
I was expecting some dramatic turn away
But you stayed
This morning, I said we should talk\u205Fabout\u205Fit
'Cause\u205FI read you\u205Fshould never leave\u205Fa fight unresolved
That's when you came in wearing a football helmet
And said, "Okay, let's talk"
And I said

Stay, stay, stay
I've been loving you for quite some time, time, time
You think that it's funny when I'm mad, mad, mad
But I think that it's best if we both stay


Before you, I'd only dated self-indulgent takers
Who took all of their problems out on me
But you carry my groceries and now I'm always laughing
And I love you because you have given me
No choice but to


Stay, stay, stay
I've been loving you for quite some time, time, time
You think that it's funny when I'm mad, mad, mad
But I think that it's best if we both stay, stay, stay, stay


You took the time to memorize me
My fears, my hopes, and dreams
I just like hanging out with you all the time
All those times that you didn't leave
It's been occurring to me
I'd like to hang out with you for my whole life

Stay, and I'll be loving you for quite some time
No one else is gonna love me when I get mad, mad, mad
So I think that it's best if we both stay, stay
Stay, stay, stay, stay


Stay, stay, stay
I've been loving you for quite some time, time, time
You think that it's funny when I'm mad, mad, mad
But I think that it's best if we both stay, stay
Stay, stay, stay, stay


Stay, stay, stay
I've been loving you for quite some time, time, time
You think that it's funny when I'm mad, mad, mad
But I think that it's best if we both stay
(Ha-ha-ha, that's so fun)`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"Style by Taylor Swift",lyrics:`Midnight
You come and pick me up, no headlights
A long drive
Could end in burning flames or paradise
Fade into view, oh
It's been a while since I have even heard from you
(Heard from you)
And I should just tell you to leave, 'cause I
Know exactly where it leads, but I
Watch us go 'round and 'round each time

You got that James Dean daydream look in your eye
And I got that red lip classic thing that you like
And when we go crashing down, we come back every time
'Cause we never go out of style, we never go out of style
You got that long hair, slicked back, white t-shirt
And I got that good girl faith and a tight little skirt
And when we go crashing down, we come back every time
'Cause we never go out of style, we never go out of style


So it goes
He can't keep his wild eyes on the road (Mmm)
Takes me home
The lights are off, he's taking off his coat (Mmm, yeah)
I say, "I heard, oh
That you've been out and about with some other girl"
Some other girl
He says, "What you heard is true, but I
Can't stop thinking 'bout you and I"
I said, "I've been there too a few times"


'Cause you got that James Dean daydream look in your eye
And I got that red lip classic thing that you like
And when we go crashing down, we come back every time
'Cause we never go out of style, we never go out of style
You got that long hair, slicked back, white t-shirt
And I got that good girl faith and a tight little skirt
(A tight little skirt)
And when we go crashing down, we come back every time
'Cause we never go out of style (We never go, we never go)
We never go out of style

Take me home
Just take me home
Yeah, just take me home
Oh-oh, whoa-oh, oh
(Out of style)


Oh, you got that James Dean daydream look in your eye
And I got that red lip classic thing that you like
And when we go crashing down (And when we go)
We come back every time
'Cause we never go out of style, we never go out of style1K`,coverArt:"https://images.genius.com/b9164869778f4f40230d599880b7bfc8.1000x1000x1.jpg"},{songTitle:"Superman by Taylor Swift",lyrics:`Tall, dark, and superman
He puts papers in his briefcase and drives away
To save the world or go to work
It's the same thing to me
He's got his mother's eyes, his father's ambition
I wonder if he knows how much that I miss him
I hang on every word you say, yay
And you smile and say, "How are you?\u201D
I say, "Just fine"
I always forget to tell you, I love you
I love you forever

I watch superman fly away
You've got a busy day today
Go save the world, I'll be around
I watch superman fly away
Come back, I'll be with you someday
I'll be right here on the ground
When you come back down


Tall, dark and beautiful
He's complicated, he's irrational
But I hope someday you'll take me away and save the day, yeah
Something in his deep brown eyes has me sayin'
He's not all bad like his reputation
And I can't hear one single word they say
And you'll leave, got places to be and I'll be okay
I always forget to tell you I love you
I loved you from the very first day


I watch superman fly away
You've got a busy day today
Go save the world, I'll be around
I watch superman fly away
Come back, I'll be with you someday
I'll be right here on the ground
When you come back down

And I watch you fly around the world
And I hope you don't save some other girl
Don't forget, don't forget about me
I'm far away, but I never let you go
I'm love-struck and looking out the window
Don't forget, don't forget where I'll be


Right here, wishing the flowers were from you
Wishing the card was from you
Wishing the call was from you
'Cause I loved you from the very first day


I watch superman fly away
You've got a busy day today
Go save the world, I'll be around
Forever and ever here
I watch superman fly away
I swear, I'll be with you someday
I'll be right here on the ground
When you come back down


La, la, la, la, la, la
La, la, la, la, la, la
When you come back down`,coverArt:"https://images.genius.com/02e0642f1627ea57f5dcbff9585f1f75.1000x1000x1.jpg"},{songTitle:"SuperStar by Taylor Swift",lyrics:`This is wrong but I can't help but feel like
There ain\u2019t nothing more right babe
Misty morning comes again and I can't
Help but wish I could see your face
And I knew from the first note played
I'd be breaking all my rules to see you
You smile that beautiful smile and all the girls in the front row
Scream your name


So dim that spotlight, tell me things like
I can't take my eyes off of you
I'm no one special, just another wide-eyed girl
Who's desperately in love with you
Give me a photograph to hang on my wall, superstar

Good morning loneliness
Comes around when I'm not dreaming about you
When my world wakes up today
You'll be in another town
And I knew when I saw your face
I'd be counting down the ways to see you
You smile that beautiful smile and all the girls in the front row Scream your name


So dim that spotlight, tell me things like
I can't take my eyes off of you
I'm no one special, just another wide-eyed girl
Who's desperately in love with you
Give me a photograph to hang on my wall, superstar


You played in bars, you play guitar
And I'm invisible and everyone knows who you are
And you'll never see, you sing me to sleep
Every night from the radio


So dim that spotlight, tell me things like
I can't take my eyes off of you
I'm no one special, just another wide-eyed girl
Who's desperately in love with you
Give me a photograph to hang on my wall, superstar

Sweet, sweet superstar
Superstar`,coverArt:"https://images.genius.com/52185c8266a672e8c5cbbfbc6b4eb08e.1000x1000x1.jpg"},{songTitle:"Superstar (Taylor's Version) by Taylor Swift",lyrics:`This is wrong but I can't help but feel like
There ain\u2019t nothing more right, babe
Misty morning comes again and I can't
Help but wish I could see your face
I knew from the first note played
I'd be breaking all my rules to see you
You smile that beautiful smile and all the girls in the front row
Scream your name


So dim that spotlight, tell me things like
I can't keep my eyes off of you
I'm no one special, just another wide-eyed girl
Who's desperately in love with you
Give me a photograph to hang on my wall, superstar

Morning lonelin\u0435ss
Comes around when I'm not dreaming about you
Wh\u0435n my world wakes up today
You'll be in another town
And I knew when I saw your face
I'd be counting down the ways to see you
You smile that beautiful smile and all the girls in the front row
Scream your name


So dim that spotlight, tell me things like
I can't take my eyes off of you
I'm no one special, just another wide-eyed girl
Who's desperately in love with you
Give me a photograph to hang on my wall, superstar


You played in bars, you play guitar
I'm invisible and everyone knows who you are
And you'll never see, you sing me to sleep
Every night from the radio


So dim that spotlight, tell me things like
I can't take my eyes off of you
I'm no one special, just another wide-eyed girl
Who's desperately in love with you
Give me a photograph to hang on my wall, superstar

Sweet, sweet superstar
Superstar`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"Sweeter Than Fiction by Taylor Swift",lyrics:`Hit the ground, hit the ground, hit the ground (oh, oh)
Only sound, only sound that you hear is "no"
You never saw it coming
Slipped when you started running
And now you've come undone and (I, I, I, I)
Seen you fall, seen you crawl on your knees (eh, eh)
Seen you lost in a crowd, seen your colors fade
Wish I could make it better
Someday you won't remember
This pain you thought would last forever and ever

There you stand, ten feet tall
I will say, "I knew it all along"
Your eyes are wider than distance
This life is sweeter than fiction


Just a shot, just a shot in the dark (oh, oh)
All you got, all you got are your shattered hopes
They never saw it coming
You hit the ground running
And now you're on to something
I, I, I say
What a sight, what a sight when the light came on
Proved me right, proved me right when you proved them wrong
And in this perfect weather
It's like we don't remember
The rain we thought would last forever and ever


There you stand, ten feet tall
I will say, "I knew it all along"
Your eyes are wider than distance
This life is sweeter than fiction
There you stand, next to me
All at once, the rest is history
Your eyes are wider than distance
This life is sweeter than fiction, fiction

I\u2019ll be one of the many saying
Look at you now, look at you now, now
I\u2019ll be one of the many saying
You made us proud, you made us proud, proud
I\u2019ll be one of the many saying
Look at you now, look at you now, now
I\u2019ll be one of the many saying
You made us proud, you made us proud, proud
And when they call your name
And they put your picture in a frame
You know that I\u2019ll be there time and again
'Cause I loved you when
When you hit the ground, hit the ground, hit the ground, oh oh
Only sound, only sound that you heard was "no"
Now in this perfect weather
It's like we don't remember
The rain we thought would last forever and ever


There you stand, ten feet tall
I will say, "I knew it all along"
Your eyes are wider than distance
This life is sweeter than fiction
There you stand, next to me
All at once, the rest is history
Your eyes are wider than distance
This life is sweeter than fiction, fiction`,coverArt:"https://images.rapgenius.com/p2v2k8hxpti8gy0zunuaydet.620x625x1.png"},{songTitle:"Teardrops On My Guitar by Taylor Swift",lyrics:`Drew looks at me
I fake a smile so he won't see
That I want and I'm needing
Everything that we should be


I'll bet she's beautiful
That girl he talks about
And she's got everything that I have to live without

Drew talks to me
I laugh 'cause it's just so funny
That I can't even see
Anyone when he's with me


He says he's so in love
He's finally got it right
I wonder if he knows he's all I think about at night


He's the reason for the teardrops on my guitar
The only thing that keeps me wishing on a wishing star
He's the song in the car I keep singing
Don't know why I do


Drew walks by me
Can he tell that I can't breathe?
And there he goes, so perfectly
The kind of flawless I wish I could be


She'd better hold him tight
Give him all her love
Look in those beautiful eyes and know she's lucky 'cause

He's the reason for the teardrops on my guitar
The only thing that keeps me wishing on a wishing star
He's the song in the car I keep singing
Don't know why I do


So I drive home alone
As I turn off the light
I'll put his picture down and maybe get some sleep tonight


'Cause he's the reason for the teardrops on my guitar
The only one who\u2019s got enough for me to break my heart
He's the song in the car I keep singing
Don't know why I do
He's the time taken up, but there's never enough
And he's all that I need to fall into


Drew looks at me
I fake a smile so he won't see`,coverArt:"https://images.genius.com/3d430d7fc8d4a4a6282bc4e887a11e62.600x600x1.png"},{songTitle:"Teardrops On My Guitar (Acoustic) by Taylor Swift",lyrics:`Drew looks at me
I fake a smile so he won't see
That I want and I'm needing
Everything that we should be


I'll bet she's beautiful
That girl he talks about
And she's got everything that I have to live without

Drew talks to me
I laugh 'cause it's just so funny
That I can't even see
Anyone when he's with me


He says he's so in love
He's finally got it right
I wonder if he knows he's all I think about at night


He's the reason for the teardrops on my guitar
The only thing that keeps me wishing on a wishing star
He's the song in the car I keep singing
Don't know why I do


Drew walks by me
Can he tell that I can't breathe?
And there he goes, so perfectly
The kind of flawless I wish I could be


She'd better hold him tight
Give him all her love
Look in those beautiful eyes and know she's lucky 'cause

He's the reason for the teardrops on my guitar
The only thing that keeps me wishing on a wishing star
He's the song in the car I keep singing
Don't know why I do


So I drive home alone
As I turn off the light
I'll put his picture down and maybe get some sleep tonight


'Cause he's the reason for the teardrops on my guitar
The only one who\u2019s got enough for me to break my heart
He's the song in the car I keep singing
Don't know why I do
He's the time taken up, but there's never enough
And he's all that I need to fall into


Drew looks at me
I fake a smile so he won't see`,coverArt:"https://images.genius.com/d6286ec27200e6d723c36d55fd89b4ca.894x894x1.jpg"},{songTitle:"Teardrops On My Guitar (Alternate Demo) by Taylor Swift",lyrics:`You look at me
I fake a smile so you won't see
That I want and I'm needing
Everything that we should be


I'll bet she's beautiful, that girl ya talk about
And she's got everything that I have to live without


You talk to me
I laugh 'cause it's so damn funny
But I can't even see
Anyone when you're with me

You say you're so in love, you finally got it right
I wonder if you know you're all I think about at night


You're the reason for the teardrops on my guitar
The only thing that keeps me wishing on a wishing star
You're the song in the car
I keep singing, don't know why I do...


You walk by me
Can't you tell that I can't breathe?
And there you go, so perfectly
The kind of flawless I wish I could be


She'd better hold ya tight, give you all her love
Look in those beautiful eyes and know she's lucky cause


You're the reason for the teardrops on my guitar
The only thing that keeps me wishing on a wishing star
You're the song in the car
I keep singing, don't know why I do...

You're the reason for the teardrops on my guitar
The only one who\u2019s got enough of me to break my heart
You're the song in the car
I keep singing, don't know why I do...


You're the time taken up, but there's never enough
And you're all that I need to fall into
You look at me
I fake a smile so you won't see`,coverArt:"https://images.genius.com/0c1761e521342c5dd1ea7957bd0a25fa.400x400x1.jpg"},{songTitle:"Teardrops On My Guitar (Cahill Radio Edit) by Taylor Swift",lyrics:`Drew looks at me
I fake a smile so he won't see
That I want and I'm needing
Everything that we should be


I'll bet she's beautiful, that girl he talks about
And she's got everything that I have to live without


Drew talks to me
I laugh 'cause it's just so funny
That I can't even see
Anyone when he's with me

He says he's so in love, he's finally got it right
I wonder if he knows he's all I think about at night


He's the reason for the teardrops on my guitar
The only thing that keeps me wishing on a wishing star
He's the song in the car
I keep singing, don't know why I do...


Drew walks by me
Can't he tell that I can't breathe?
And there he goes, so perfectly
The kind of flawless I wish I could be


She'd better hold him tight, give him all her love
Look in those beautiful eyes and know she's lucky 'cause


He's the reason for the teardrops on my guitar
The only thing that keeps me wishing on a wishing star
He's the song in the car
I keep singing, don't know why I do...
He's the reason for the teardrops on my guitar
The only thing that keeps me wishing on a wishing star
He's the song in the car
I keep singing, don't know why I do...

So I drive home alone, as I turn off the light
I'll put his picture down and maybe get some sleep tonight


He's the reason for the teardrops on my guitar
The only one who\u2019s got enough of me to break my heart
He's the song in the car
I keep singing, don't know why I do...


He's the time taken up, but there's never enough
And he's all that I need to fall into
Drew looks at me
I fake a smile so he won't see`,coverArt:"https://images.genius.com/1492a6f545351efc827d73158a4a6732.1000x1000x1.jpg"},{songTitle:"Teardrops on my Guitar (Live from Clear Channel Stripped 2008) by Taylor Swift",lyrics:`Drew looks at me
I fake a smile so he won't see
That I want and I'm\u2005needing
Everything\u2005that we should\u2005be


I'll bet she's beautiful, that girl\u2005he talks about
And she's got everything that I have to\u205Flive\u205Fwithout


Drew\u205Ftalks to me
I\u205Flaugh 'cause it's\u205Fso damn funny
That I can't even see
Anyone when he's with me

He says he's so in love, he's finally got it right
I wonder if he knows he's all I think about at night


He's the reason for the teardrops on my guitar
The only thing that keeps me wishing on a wishing star
He's the song in the car
I keep singing, don't know why I do...


Drew walks by me
Can't he tell that I can't breathe?
And there he goes, so perfectly
The kind of flawless I wish I could be


She'd better hold him tight, give him all her love
Look in those beautiful eyes and know she's lucky 'cause


He's the reason for the teardrops on my guitar
The only thing that keeps me wishing on a wishing star
He's the song in the car
I keep singing, don't know why I do...

So I drive home alone, as I turn off the light
I'll put his picture down and maybe get some sleep tonight


He's the reason for the teardrops on my guitar
The only one who\u2019s got enough of me to break my heart
He's the song in the car
I keep singing, don't know why I do...


He's the time taken up, but there's never enough
And he's all that I need to fall into
Drew looks at me
I fake a smile so he won't see`,coverArt:"https://images.genius.com/a27d0e4b7173862e0abc61e372597975.1000x1000x1.jpg"},{songTitle:"Teardrops on My Guitar (Live from SoHo) by Taylor Swift",lyrics:`Drew looks at me
I\u200A fake a smile so he won't see
That\u200A I want and I'm needing
Everything that we should be


I'll bet she's beautiful, that girl he talks about
And\u200A she's got everything that I have to live without


Drew\u200A talks to me
I laugh 'cause it's just so funny
That\u200A I can't even see
Anyone when he's with me

He says he's so in love, he's finally got it right
I wonder if he knows he's all I think about at night


He's\u200A the reasons for the teardrops on my guitar
The only thing that keeps me wishing on a wishing star
He's the song in the car
I keep singing, don't know why I do...


Drew walks by me
Can't he tell that I can't breathe?
And there he goes, so perfectly
The kind of flawless I wish I could be


She'd better hold him tight, give him all her love
Look in those beautiful eyes and know she's lucky 'cause


He's the reason for the teardrops on my guitar
The only thing that keeps me wishing on a wishing star
He's the song in the car
I keep singing, don't know why I do...

So I drive home alone, as I turn out the light
I'll put his picture down and maybe get some sleep tonight


'Cause he's the reason for the teardrops on my guitar
The only one who\u2019s got enough of me to break my heart
He's the song in the car
I keep singing, don't know why I do...


He's the time taken up, but there's never enough
And he's all that I need to fall into
Drew looks at me
I fake a smile so he won't see
Thank you`,coverArt:"https://images.genius.com/89ed020cf80ce5c178b2a385efa16113.800x800x1.jpg"},{songTitle:"Teardrops on My Guitar (Pop Version) by Taylor Swift",lyrics:`Drew looks at me
I fake a smile so he won't see
That I want and I'm needing
Everything that we should be


I'll bet she's beautiful
That girl he talks about
And she's got everything that I have to live without

Drew talks to me
I laugh 'cause it's just so funny
That I can't even see
Anyone when he's with me


He says he's so in love
He's finally got it right
I wonder if he knows he's all I think about at night


He's the reason for the teardrops on my guitar
The only thing that keeps me wishing on a wishing star
He's the song in the car I keep singing
Don't know why I do


Drew walks by me
Can he tell that I can't breathe?
And there he goes, so perfectly
The kind of flawless I wish I could be


She'd better hold him tight
Give him all her love
Look in those beautiful eyes and know she's lucky 'cause

He's the reason for the teardrops on my guitar
The only thing that keeps me wishing on a wishing star
He's the song in the car I keep singing
Don't know why I do


So I drive home alone
As I turn off the light
I'll put his picture down and maybe get some sleep tonight


'Cause he's the reason for the teardrops on my guitar
The only one who\u2019s got enough for me to break my heart
He's the song in the car I keep singing
Don't know why I do (Why I do)
He's the time taken up, but there's never enough
And he's all that I need to fall into


Drew looks at me
I fake a smile so he won't see`,coverArt:"https://images.genius.com/64a12102f96dacf8e26969621e8d80cc.1000x1000x1.jpg"},{songTitle:"Tell Me by Taylor Swift",lyrics:`It was something like a perfect start to this love yesterday
But now who are you?
I thought I knew
Your eyes happen now to look right through me
It\u2019s like you forgot the words you whispered to me
They weren't true
It's like it wasn't you


Could you tell me what did I do?
Because it can't be we're already through
Did you sell me out for a fool after you held me?
Was that just what you do?
What did you need from me?
Tell me

Take time to realize
I know that people change their minds
But that was something I wished you would say to my face
But you ran away


Could you tell me what did I do?
Because it can't be we're already through
Did you sell me out for a fool after you held me?
Was that just what you do?
What did you need from me?
Tell me


If I had a reason or a simple goodbye
Baby, even a lie
Yeah, yeah


Tell me what did I do
'Cause, baby, suddenly we're already through
Did you sell me out for a fool after you held me?
Was that just what you do?
What did you need from me?
And tell me

And tell me
Oh-oh-oh, oh-yeah
And tell me
Tell me`,coverArt:"https://images.genius.com/721a6c465a666419bf286b473287c33f.446x446x1.jpg"},{songTitle:"Tell Me Why by Taylor Swift",lyrics:`I took a chance, I took a shot
And you might think I'm bulletproof, but I'm not
You took a swing, I took it hard
And down here from the ground I see who you are


I'm sick and tired of your attitude
I'm feeling like I don't know you
You tell me that you love me, then cut me down
And I need you like a heartbeat
But you know you got a mean streak
That makes me run for cover when you're around
And here's to you and your temper
Yes, I remember what you said last night
And I know, that you see, what you're doing to me
Tell me why

You could write a book on how to ruin someone's perfect day
Well, I get so confused and frustrated
Forget what I'm trying to say, oh


I'm sick and tired of your reasons
I got no one to believe in
You tell me that you want me, then push me around
And I need you like a heartbeat
But you know you got a mean streak
That makes me run for cover when you're around
Here's to you and your temper
Yes, I remember what you said last night
And I know, that you see, what you're doing to me
Tell me why


Why do you have to make me feel small
So you can feel whole inside?
Why do you have to put down my dreams
So you're the only thing on my mind?


I'm sick and tired of your attitude
I'm feeling like I don't know you
You tell me that you want me, then cut me down
I'm sick and tired of your reasons
I've got no one to believe in
You ask me for my love, then you push me around
Here's to you and your temper
Yes, I remember what you said last night
And I know that you see what you're doing to me
Tell me why (Why)
Tell me why (Why)

I take a step back, let you go
I told you I'm not bulletproof
Now you know`,coverArt:"https://images.genius.com/026c5c3f1618d0b001cc2a09bbcdc3cd.1000x1000x1.jpg"},{songTitle:"Tell Me Why (Taylor's Version) by Taylor Swift",lyrics:`I took a chance, I took a shot
And you might think I'm bulletproof, but I'm not
You took a swing, I took it hard
And down here from the ground, I see who you are


I'm sick and tired of your attitude
I'm feeling like I don't know you
You tell me that you love me, then cut me down
And I need you like a heartbeat
But you know you got a mean streak
Makes me run for cover when you're around
Here's to you and your temper
Yes, I remember what you said last night
And I know that you see what you're doin' to me
Tell me why

Well, you could write a book on
How to ruin someone's perf\u0435ct day
Well, I get so confused and frustrat\u0435d
Forget what I'm tryin' to say, oh


I'm sick and tired of your reasons
I got no one to believe in
You tell me that you want me, then push me around
And I need you like a heartbeat
But you know you got a mean streak
Makes me run for cover when you're around
Here's to you and your temper
Yes, I remember what you said last night
And I know that you see what you're doin' to me
Tell me why


Why do you have to make me feel small
So you can feel whole inside?
Why do you have to put down my dreams
So you're the only thing on my mind?


I'm sick and tired of your attitude
Feeling like I don't know you
You tell me that you want me, then cut me down
I'm sick and tired of your reasons
I've got no one to believe in
You ask me for my love, then you push me around
Here's to you and your temper
Yes, I remember what you said last night
And I know that you see what you're doin' to me
Tell me why (Why)
Tell me why (Oh)

I take a step back, I let you go
I told you I'm not bulletproof
Now you know`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"That's When (Taylor's Version) [From the Vault] by Taylor Swift (Ft. Keith Urban)",lyrics:`You said, "I know"
When I said, "I need some time, need some space
To think about all of this"
And you watched me go
And I knew my words were hard to hear
And harder to ever take back


And I said, "When can I-I-I come back?"

And you said, "That's when
When I wake up in the morning
That's when, when it's sunny or storming
Laughing, when I'm crying
And that's when I'll be waiting at the front gate
That's when, when I see your face
I'll let you in, and baby, that's when"
Mm, mm


I said, "I know"
When you said, "I did you wrong, made mistakes
And put you through all of this" (Through all of this)
Then through the phone
Came all your tears
And I said, "Leave those all in our past"


And you said, "When can I-I-I come back?"


And I said, "That's when
When I wake up in the morning
That's when, when it's sunny or storming
Laughing, when I'm crying
And that's when I'll be waiting at the front gate
That's when, when I see your face
I'll let you in, and baby, that's when"

And you said, "Honestly
When you were gone
Did you ever think of me?"
And I said


"That's when, when I woke up in the morning
That's when it was sunny or storming
Laughing, when I was crying
And that's when you were waiting at the front gate
That's when, when I saw your face
You let me in, and baby, that's when"


That's when, when I wake up in the morning (Yeah)
That's when, when it's sunny or storming
When I'm laughing, when I'm crying
That's when I'll be waiting at the front gate
(That's when I miss you, that's when I want you)
That's when, when I see your face
That's when I love you, that's when`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"\u200Bthe 1 by Taylor Swift",lyrics:`I'm doing good, I'm on some new shit
Been saying "yes" instead of "no"
I thought I\u2005saw\u2005you at the\u2005bus stop, I didn't though
I hit\u2005the ground running each night
I hit the Sunday matin\xE9e
You know the greatest films of all time were never made


I guess you never know, never know
And if you wanted me, you really should've showed
And if you never bleed, you're never gonna grow
And it's alright now

But we were something, don't you think so?
Roaring twenties, tossing pennies in the pool
And if my wishes came true
It would've been you
In my defense, I have none
For never leaving well enough alone
But it would've been fun
If you would've been the one
(Ooh)


I have this dream you're doing cool shit
Having adventures on your own
You meet some woman on the internet and take her home
We never painted by the numbers, baby
But we were making it count
You know the greatest loves of all time are over now


I guess you never know, never know
And it's another day waking up alone


But we were something, don't you think so?
Roaring twenties, tossing pennies in the pool
And if my wishes came true
It would've been you
In my defense, I have none
For never leaving well enough alone
But it would've been fun
If you would've been the one
Related Songs
I, I, I persist and resist the temptation to ask you
If one thing had been different
Would everything be different today?


We were something, don't you think so?
Ros\xE9 flowing with your chosen family
And it would've been sweet
If it could've been me
In my defense, I have none
For digging up the grave another time
But it would've been fun
If you would've been the one
(Ooh)`,coverArt:"https://images.genius.com/4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png"},{songTitle:"\u200Bthe 1 (the long pond studio sessions) by Taylor Swift",lyrics:`I'm doing good, I'm on some new shit
Been saying "yes" instead of "no"
I thought I saw you at the bus stop, I didn't though
I hit the ground running each night
I hit the Sunday matin\xE9e
You know the greatest films of all time were never made


I guess you never know, never know
And if you wanted me, you really should've showed
And if you never bleed, you're never gonna grow
And it's alright now

But we were something, don't you think so?
Roaring twenties, tossing pennies in the pool
And if my wish\u0435s came true
It would've been you
In my d\u0435fense, I have none
For never leaving well enough alone
But it would've been fun
If you would've been the one


I have this dream you're doing cool shit
Having adventures on your own
You meet some woman on the internet and take her home
We never painted by the numbers, baby
But we were making it count
You know the greatest loves of all time are over now


I guess you never know, never know
And it's another day waking up alone


But we were something, don't you think so?
Roaring twenties, tossing pennies in the pool
And if my wishes came true
It would've been you
In my defense, I have none
For never leaving well enough alone
But it would've been fun
If you would've been the one

I, I, I persist and resist the temptation to ask you
If one thing had been different
Would everything be different today?


We were something, don't you think so?
Ros\xE9 flowing with your chosen family
And it would've been sweet
If it could've been me
In my defense, I have none
For digging up the grave another time
But it would've been fun
If you would've been the one
(Ooh, ooh)`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"The Archer by Taylor Swift",lyrics:`Combat, I'm ready for combat
I say I don't want that, but what if I do?
'Cause cruelty wins in the movies
I've got a hundred thrown-out speeches I almost said to you


Easy they come, easy they go
I jump from the train, I ride off alone
I never grew up, it's getting so old
Help me hold on to you

I've been the archer, I've been the prey
Who could ever leave me, darling
But who could stay?


Dark side, I search for your dark side
But what if I'm alright, right, right, right here?
And I cut off my nose just to spite my face
Then I hate my reflection for years and years


I wake in the night, I pace like a ghost
The room is on fire, invisible smoke
And all of my heroes die all alone
Help me hold on to you


I've been the archer, I've been the prey
Screaming, who could ever leave me, darling
But who could stay?
(I see right through me, I see right through me)


'Cause they see right through me
They see right through me
They see right through
Can you see right through me?
They see right through
They see right through me
I see right through me
I see right through me

All the king's horses, all the king's men
Couldn't put me together again
'Cause all of my enemies started out friends
Help me hold on to you


I've been the archer, I've been the prey
Who could ever leave me, darling
But who could stay?
(I see right through me, I see right through me)
Who could stay?
Who could stay?
Who could stay?
You could stay
You could stay


Combat, I'm ready for combat`,coverArt:"https://images.genius.com/65c4c1675f63c4713c6d6d2a64755388.1000x1000x1.jpg"},{songTitle:"The Archer (Live from Paris) by Taylor Swift",lyrics:`Combat, I'm ready for combat
I say I don't want that, but what if I do?
'Cause\u2005cruelty\u2005wins in the\u2005movies
I've got a hundred thrown-out speeches\u2005I almost said to you


Easy they come, easy they go
I jump from the train, I ride off alone
I never grew up, it's getting so old
Help me hold on to you

I've been the archer
I've been the prey
Who could ever leave me, darling
But who could stay?


Dark side, I search for your dark side
But what if I'm alright, right, right, right here?
And I cut off my nose just to spite my face
Then I hate my reflection for years and years


I wake in the night, I pace like a ghost
The room is on fire, invisible smoke
And all of my heroes die all alone
Help me hold on to you


I've been the archer
I've been the prey
Screaming, who could ever leave me, darling
But who could stay?
(I see right through me, I see right through me)


'Cause they see right through me
They see right through me
They see right through
Can you see right through me?
They see right through
They see right through me
I see right through me
I see right through me

All the king's horses, all the king's men
Couldn't put me together again
'Cause all of my enemies started out friends
Help me hold on to you


I've been the archer
I've been the prey
Who could ever leave me, darling
But who could stay?
(I see right through me, I see right through me)
But who could stay?
Who could stay?
Who could stay?
Who could stay?
Who could stay?
You could stay
You


Combat, I'm ready for combat`,coverArt:"https://images.genius.com/b5d5eb3150211dba758575036afe145c.512x512x1.jpg"},{songTitle:"The Best Day by Taylor Swift",lyrics:`I'm five years old, it's getting cold, I've got my big coat on
I hear your laugh and look up smiling at you, I run and run
Past the pumpkin patch and the tractor rides
Look now, the sky is gold
I hug your legs and fall asleep on the way home


I don't know why all the trees change in the fall
But I know you're not scared of anything at all
Don't know if Snow White's house is near or far away
But I know I had the best day with you today

I'm thirteen now
And don't know how my friends could be so mean
I come home crying and you hold me tight and grab the keys
And we drive and drive until we found a town far enough away
And we talk and window shop 'til I've forgotten all their names


I don't know who I'm going to talk to now at school
But I know I'm laughing on the car ride home with you
Don't know how long it's going to take to feel okay
But I know I had the best day with you today


I have an excellent father, his strength is making me stronger
God smiles on my little brother, inside and out
He's better than I am
I grew up in a pretty house and I had space to run
And I had the best days with you


There is a video I found from back when I was three
You set up a paint set in the kitchen and you're talking to me
It's the age of princesses and pirate ships and the seven dwarfs
And Daddy's smart
And you're the prettiest lady in the whole wide world

And now I know why all the trees change in the fall
I know you were on my side even when I was wrong
And I love you for giving me your eyes
For staying back and watching me shine
And I didn't know if you knew, so I'm taking this chance to say
That I had the best day with you today`,coverArt:"https://images.genius.com/026c5c3f1618d0b001cc2a09bbcdc3cd.1000x1000x1.jpg"},{songTitle:"The Best Day (Taylor's Version) by Taylor Swift",lyrics:`I'm five years old, it's getting cold, I've got my big coat on
I hear your laugh and look up smiling at you, I run and run
Past the pumpkin patch and the tractor rides
Look now, the sky is gold
I hug your legs and fall asleep on the way home


I don't know why all the trees change in the fall
But I know you're not scared of anything at all
Don't know if Snow White's house is near or far away
But I know I had the best day with you today

I'm thirteen now
And don't know how my friends could be so mean
I come home crying and you hold me tight and grab the keys
And we drive and drive until we found a town far enough away
And we talk and window shop 'til I've forgotten all their names


I don't know who I'm going to talk to now at school
But I know I'm laughing on the car ride home with you
Don't know how long it's going to take to feel okay
But I know I had the best day with you today


I have an excellent father, his strength is making me stronger
God smiles on my little brother, inside and out
He's better than I am
I grew up in a pretty house and I had space to run
And I had the best days with you


There is a video I found from back when I was three
You set up a paint set in the kitchen and you're talking to me
It's the age of princesses and pirate ships and the seven dwarves
Daddy's smart
And you're the prettiest lady in the whole wide world

Now I know why all the trees change in the fall
I know you were on my side even when I was wrong
And I love you for giving me your eyes
For staying back and watching me shine
And I didn't know if you knew, so I'm taking this chance to say
That I had the best day with you today`,coverArt:"https://images.genius.com/ef111f4faec7c1b30e12a97b73a03eb2.719x719x1.jpg"},{songTitle:"\u200Bthe lakes by Taylor Swift",lyrics:`Is it romantic how all my elegies eulogize me?
I'm not cut out for all these\u2005cynical\u2005clones
These hunters with\u2005cell phones


Take me to the Lakes\u2005where all the poets went to die
I don't belong and,\u205Fmy\u205Fbeloved,\u205Fneither do you
Those\u205FWindermere peaks look\u205Flike a perfect place to cry
I'm setting off, but not without my muse

What should be over burrowed under my skin
In heart-stopping waves of hurt
I've come too far to watch some namedropping sleaze
Tell me what are my words worth


Take me to the Lakes where all the poets went to die
I don't belong and, my beloved, neither do you
Those Windermere peaks look like a perfect place to cry
I'm setting off, but not without my muse


I want auroras and sad prose
I want to watch wisteria grow right over my bare feet
'Cause I haven't moved in years
And I want you right here
A red rose grew up out of ice frozen ground
With no one around to tweet it
While I bathe in cliffside pools
With my calamitous love and insurmountable grief


Take me to the Lakes where all the poets went to die
I don't belong and, my beloved, neither do you
Those Windermere peaks look like a perfect place to cry
I'm setting off, but not without my muse
No, not without you`,coverArt:"https://images.genius.com/1509fab32e174cf85ecf7194bf260a93.1000x1000x1.png"},{songTitle:"\u200Bthe lakes (original version) by Taylor Swift",lyrics:`Is it romantic how all my elegies eulogize me?
I'm not cut out for all these cynical clones
These hunters with cell phones


Take me to the Lakes where all the poets went to die
I don't belong and, my beloved, neither do you
Those Windermere peaks look like a perfect place to cry
I'm setting off, but not without my muse

What should be over burrowed under my skin
In heart-stopping waves of hurt
I've come too far to watch some namedropping sleaze
Tell me what are my words worth


Take me to the Lakes where all the poets went to die
I don't belong and, my beloved, neither do you
Those Windermere peaks look like a perfect place to cry
I'm setting off, but not without my muse


I want auroras and sad prose
I want to watch wisteria grow right over my bare feet
'Cause I haven't moved in years
And I want you right here
A red rose grew up out of ice frozen ground
With no one around to tweet it
While I bathe in cliffside pools
With my calamitous love and insurmountable grief


Take me to the Lakes where all the poets went to die
I don't belong and, my beloved, neither do you
Those Windermere peaks look like a perfect place to cry
I'm setting off, but not without my muse
Not without you
Take me to the Lakes where all the poets went to die
I don't belong and, my beloved, neither do you
Those Windermere peaks look like a perfect place to cry
I'm setting off, but not without my muse
No, not without you`,coverArt:"https://images.genius.com/42492bf752b50642dcb86b02ce2f7b81.1000x1000x1.png"},{songTitle:"\u200Bthe lakes (the long pond studio sessions) by Taylor Swift",lyrics:`Is it romantic how all my elegies eulogize me?
I'm not cut out for all these cynical clones
These hunters with cell phones


Take me to the Lakes where all the poets went to die
I don't belong and, my beloved, neither do you
Those Windermere peaks look like a perfect place to cry
I'm setting off, but not without my muse

What should be over burrow\u0435d under my skin
In heart-stopping waves of hurt
I'v\u0435 come too far to watch some namedropping sleaze
Tell me what are my words worth


Take me to the Lakes where all the poets went to die
I don't belong and, my beloved, neither do you
Those Windermere peaks look like a perfect place to cry
I'm setting off, but not without my muse


I want auroras and sad prose
I want to watch wisteria grow right over my bare feet
'Cause I haven't moved in years
And I want you right here
A red rose grew up out of ice frozen ground
With no one around to tweet it
While I bathe in cliffside pools
With my calamitous love and insurmountable grief


Take me to the Lakes where all the poets went to die
I don't belong and, my beloved, neither do you
Those Windermere peaks look like a perfect place to cry
I'm setting off, but not without my muse
No, not without you
No, not without you`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"\u200Bthe last great american dynasty by Taylor Swift",lyrics:`Rebekah rode up on the afternoon train, it was sunny
Her saltbox house on the coast\u2005took\u2005her mind off\u2005St. Louis
Bill was the heir to\u2005the Standard Oil name and money
And the town said, "How\u205Fdid\u205Fa\u205Fmiddle-class divorc\xE9e do\u205Fit?"
The wedding was\u205Fcharming, if a little gauche
There's only so far new money goes
They picked out a home and called it "Holiday House"
Their parties were tasteful, if a little loud
The doctor had told him to settle down
It must have been her fault his heart gave out

And they said
"There goes the last great American dynasty
Who knows, if she never showed up, what could've been
There goes the maddest woman this town has ever seen
She had a marvelous time ruining everything"


Rebekah gave up on the Rhode Island set forever
Flew in all her Bitch Pack friends from the city
Filled the pool with champagne and swam with the big names
And blew through the money on the boys and the ballet
And losing on card game bets with Dal\xED


And they said
"There goes the last great American dynasty
Who knows, if she never showed up, what could've been
There goes the most shameless woman this town has ever seen
She had a marvelous time ruining everything"


They say she was seen on occasion
Pacing the rocks, staring out at the midnight sea
And in a feud with her neighbor
She stole his dog and dyed it key lime green
Fifty years is a long time
Holiday House sat quietly on that beach
Free of women with madness, their men and bad habits
And then it was bought by me

Who knows, if I never showed up, what could've been
There goes the loudest woman this town has ever seen
I had a marvelous time ruining everything


I had a marvelous time ruining everything
A marvelous time ruining everything
A marvelous time
I had a marvelous time`,coverArt:"https://images.genius.com/4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png"},{songTitle:"\u200Bthe last great american dynasty (the long pond studio sessions) by Taylor Swift",lyrics:`Rebekah rode up on the afternoon train, it was sunny
Her saltbox house on the coast took her mind off St. Louis
Bill was the heir to the Standard Oil name and money
And the town said, "How did a middle-class divorc\xE9e do it?"
The wedding was charming, if a little gauche
There's only so far new money goes
They picked out a home and called it "Holiday House"
Their parties were tasteful, if a little loud
The doctor had told him to settle down
It must have been her fault his heart gave out

And they said
"There goes the last great American dynasty
Who knows, if she never showed up, what could've been
There goes the maddest woman this town has ever seen
She had a marvelous time ruining everything"


Rebekah gave up on the Rhode Island set forever
Flew in all her Bitch Pack friends from the city
Filled the pool with champagne and swam with the big names
And blew through the money on the boys and the ballet
And losing on card game bets with Dal\xED


And they said
"There goes the last great American dynasty
Who knows, if she never showed up, what could've been
There goes the most shameless woman this town has ever seen
She had a marvelous time ruining everything"


They say she was seen on occasion
Pacing the rocks, staring out at the midnight sea
And in a feud with her neighbor
She stole his dog and dyed it key lime green
Fifty years is a long time
Holiday House sat quietly on that beach
Free of women with madness, their men and bad habits
And then it was bought by me

Who knows, if I never showed up, what could've been
There goes the loudest woman this town has ever seen
I had a marvelous time ruining everything


I had a marvelous time ruining everything
A marvelous time ruining everything
A marvelous time
Ruining everything
A marvelous time`,coverArt:"https://images.genius.com/beb4e3221ee36688fb6dc0a918bfc2b5.512x512x1.jpg"},{songTitle:"The Last Time by Taylor Swift (Ft. Gary Lightbody)",lyrics:`Find myself at your door
Just like all those times before
I\u2019m not sure how I got there
All roads they lead me here
I imagine you are home
In your room, all alone
And you open your eyes into mine
And everything feels better


And right before your eyes
I'm breaking, no past
No reasons why
Just you and me

This is the last time I'm asking you this
Put my name at the top of your list
This is the last time I'm asking you why
You break my heart in the blink of an eye (Eye, eye)


You find yourself at my door
Just like all those times before
You wear your best apology
But I was there to watch you leave
And all the times I let you in
Just for you to go again
Disappear when you come back
Everything is better


And right before your eyes
I'm aching, run fast
Nowhere to hide
Just you and me


This is the last time I'm asking you this
Put my name at the top of your list
This is the last time I'm asking you why
You break my heart in the blink of an eye (Eye, eye)



This is the last time you tell me I've got it wrong
This is the last time I say it's been you all along
This is the last time I let you in my door
This is the last time, I won't hurt you anymore
Oh-ho, oh-ho, oh-ho, oh-ho
Oh-ho, oh-ho, oh-ho, oh-ho

This is the last time I'm asking you this
Put my name at the top of your list
This is the last time I'm asking you why
You break my heart in the blink of an eye


This is the last time I'm asking you this (This is the last time I'm asking you this)
Put my name at the top of your list (Put my name at the top of your list)
This is the last time I'm asking you why (This is the last time I'm asking you why)
You break my heart in the blink of an eye (You break my heart)

This is the last time I'm asking you, last time I'm asking you
Last time I'm asking you this
This is the last time I'm asking you, last time I'm asking you
Last time I'm asking you this
This is the last time I'm asking you, last time I'm asking you
Last time I'm asking you this
This is the last time I'm asking you, last time I'm asking you
Last time I'm asking you this`,coverArt:"https://images.genius.com/01a4c7fe9485856eefbc3f8eabb3ac3e.850x850x1.jpg"},{songTitle:"The Last Time (Taylor's Version) by Taylor Swift (Ft. Gary Lightbody)",lyrics:`I find myself at your door
Just like all those times before
I\u2019m not sure how I got there
All roads they lead me here
I imagine you are home
In your room, all alone
And you open your eyes into mine
And everything feels better


And right before your eyes
I'm breaking, no past
No reasons why
Just you and me

This is the last time I'm asking you this
Put my name at the top of your list
This is the last time I'm asking you why
You break my heart in the blink of an eye, eye, eye


You find yourself at my door
And just like all those times before
You wear your best apology
But I was there to watch you leave
And all the times I let you in
Just for you to go again
Disappear when you come back
Everything is better


And right before your eyes
I'm aching, no past
Nowhere to hide
Just you and me


This is the last time I'm asking you this
Put my name at the top of your list
This is the last time I'm asking you why
You break my heart in the blink of an eye, eye, eye



This is the last time you tell me I've got it wrong
This is the last time I say, "It's been you all along"
This is the last time I let you in my door
This is the last time, I won't hurt you anymore
Oh-ho, oh-ho, oh-ho, oh-ho
Oh-ho, oh-ho, oh-ho, oh-ho

This is the last time I'm asking you this
Put my name at the top of your list
This is the last time I'm asking you why
You break my heart in the blink of an eye


This is the last time I'm asking you this (This is the last time I'm asking you this)
Put my name at the top of your list (Put my name at the top of your list)
This is the last time I'm asking you why (This is the last time I'm asking you why)
You break my heart in the blink of an eye (You break my heart)

This is the last time I'm asking you, last time I'm asking you
Last time I'm asking you this
This is the last time I'm asking you, last time I'm asking you
Last time I'm asking you this
This is the last time I'm asking you, last time I'm asking you
Last time I'm asking you this
This is the last time I'm asking you, last time I'm asking you
Last time I'm asking you this`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"The Last Time (VEVO Version) by Taylor Swift (Ft. Gary Lightbody)",lyrics:`Find myself at your door
Just like all those times before
I\u2019m not sure how I got there
All roads they lead me here
I imagine you are home
In your room, all alone
And you open your eyes into mine
And everything feels better


And right before your eyes
I\u2019m breaking
No fuss, no reasons why
Just you and me
(e-he-e-he-e-he-e-he-e-he-e-he-e-he-e-he)

This is the last time I\u2019m asking you this
Put my name at the top of your list
This is the last time I\u2019m asking you why
You break my heart in the blink of an eye
(eye, eye)


You find yourself at my door
Just like all those times before
You wear your best apology
But I was there to watch you leave
And all the times I let you in
Just for you to go again
Disappear when you come back
Everything is better


And right before your eyes
I\u2019m aching
No fuss, nowhere to hide
Just you and me
(e-he-e-he-e-he-e-he-e-he-e-he-e-he-e-he)


This is the last time I\u2019m asking you this
Put my name at the top of your list
This is the last time I\u2019m asking you why
You break my heart in the blink of an eye
(eye, eye)

This is the last time you tell me I\u2019ve got it wrong
This is the last time I say it\u2019s been you all along
This is the last time I let you in my door
This is the last time, I won\u2019t hurt you anymore
Oh-ho, oh-ho, oh-ho, oh-ho
Oh-ho, oh-ho, oh-ho, oh-ho


This is the last time I\u2019m asking you this
Put my name at the top of your list
This is the last time I\u2019m asking you why
You break my heart in the blink of an eye


This is the last time I\u2019m asking you, last time I'm asking you
Last time I'm asking you this
This is the last time I\u2019m asking you, last time I'm asking you
Last time I'm asking you this`,coverArt:"https://images.genius.com/c75babe2b330b5ce3da2e046c671395c.588x320x1.png"},{songTitle:"The Lucky One by Taylor Swift",lyrics:`New to town with a made-up name
In the angel's city, chasing fortune and fame
And the camera flashes make it look like a dream
You had it figured out since you were in school
Everybody loves pretty, everybody loves cool
So overnight, you look like a sixties queen


Another name goes up in lights
Like diamonds in the sky

And they\u2019ll tell you now, you\u2019re the lucky one
Yeah, they\u2019ll tell you now, you\u2019re the lucky one
But can you tell me now, you\u2019re the lucky one?
Oh, oh, oh


Now, it\u2019s big black cars and Riviera views
And your lover in the foyer doesn\u2019t even know you
And your secrets end up splashed on the news front page
And they tell you that you\u2019re lucky, but you\u2019re so confused
'Cause you don\u2019t feel pretty, you just feel used
And all the young things line up to take your place


Another name goes up in lights
You wonder if you\u2019ll make it out alive


And they\u2019ll tell you now, you\u2019re the lucky one
Yeah, they\u2019ll tell you now, you\u2019re the lucky one
But can you tell me now, you\u2019re the lucky one?
Oh, oh, oh


It was a few years later, I showed up here
And they still tell the legend of how you disappeared
How you took the money and your dignity and got the hell out
They say you bought a bunch of land somewhere
Chose the rose garden over Madison Square
And it took some time, but I understand it now

'Cause now my name is up in lights
But I think you got it right


Let me tell you now, you\u2019re the lucky one
Let me tell you now, you\u2019re the lucky one
Let me tell you now, you\u2019re the lucky one, oh, oh, oh
And they\u2019ll tell you now, you\u2019re the lucky one
Yeah, they\u2019ll tell you now, you\u2019re the lucky one
And they\u2019ll tell you now, you\u2019re the lucky one, oh, oh, oh
Oh, whoa, oh, oh`,coverArt:"https://images.genius.com/341214eeb78c133a8170a932919a66aa.1000x1000x1.png"},{songTitle:"The Lucky One (Taylor's Version) by Taylor Swift",lyrics:`New to town with a made-up name
In the angel's city, chasing fortune and fame
And the camera flashes make it look like a dream
You had it figured out since you were in school
Everybody loves pretty, everybody loves cool
So overnight, you look like a sixties queen


Another name goes up in lights
Like diamonds in the sky

And they'll tell you now, you're the lucky one
Yeah, they'll tell you now, you're the lucky one
But can you tell me now, you're the lucky one?
Oh, oh, oh


And now, it's big black cars and Riviera views
And your lover in the foyer doesn't even know you
And your secrets end up splashed on the news front page
And they tell you that you're lucky, but you're so confused
'Cause you don't feel pretty, you just feel used
And all the young things line up to take your place


Another name goes up in lights
You wonder if you'll make it out alive


And they'll tell you now, you're the lucky one
Yeah, they'll tell you now, you're the lucky one
Can you tell me now, you're the lucky one?
Oh, oh, oh
Oh, oh, oh


It was a few years later, I showed up here
And they still tell the legend of how you disappeared
How you took the money and your dignity, and got the hell out
They say you bought a bunch of land somewhere
Chose the rose garden over Madison Square
And it took some time, but I understand it now

'Cause now my name is up in lights
But I think you got it right


Let me tell you now, you're the lucky one
Let me tell you now, you're the lucky one
Let me tell you now, you're the lucky one, oh, oh, oh
Yeah, they'll tell you now, you're the lucky one
Yeah, they'll tell you now, you're the lucky one
Let me tell you now, you're the lucky one, oh, oh, oh
Oh, oh, whoa, oh, oh`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"The Man by Taylor Swift",lyrics:`I would be complex, I would be cool
They'd say I played the field before I found someone to commit to
And that would be okay for me to do
Every conquest I had made would make me more of a boss to you


I\u2019d be a fearless leader
I'd be an alpha type
When everyone believes ya
What's that like?

I\u2019m so sick of running as fast as I can
Wondering if I'd get there quicker if I was a man
And I'm so sick of them coming at me again
'Cause if I was a man, then I'd be the man
I'd be the man
I'd be the man


They'd say I hustled, put in the work
They wouldn\u2019t shake their heads and question how much of this I deserve
What I was wearing, if I was rude
Could all be separated from my good ideas and power moves


And they would toast to me, oh, let the players play
I\u2019d be just like Leo in Saint-Tropez


I'm so sick of running as fast as I can
Wondering if I\u2019d get there quicker if I was a man
And I'm so sick of them coming at me again
'Cause if I was a man, then I'd be the man
I\u2019d be the man
I'd be the man

What's it like to brag about raking in dollars
And getting bitches and models?
And it's all good if you're bad
And it's okay if you're mad
If I was out flashing my dollars
I'd be a bitch, not a baller
They'd paint me out to be bad
So, it's okay that I'm mad


I'm so sick of running as fast as I can
Wondering if I'd get there quicker if I was a man (You know that)
And I'm so sick of them coming at me again (Coming at me again)
'Cause if I was a man (If I was a man)
Then I'd be the man (Then I'd be the man)
I'm so sick of running as fast as I can (As fast as I can)
Wondering if I'd get there quicker if I was a man (Hey)
And I'm so sick of them coming at me again (Coming at me again)
'Cause if I was a man (If I was a man), then I'd be the man
I'd be the man
I'd be the man (Oh)
I'd be the man (Yeah)
I'd be the man (I'd be the man)


If I was a man, then I'd be the man`,coverArt:"https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"},{songTitle:"The Man (Live From Paris) by Taylor Swift",lyrics:`I would be complex, I would be cool
They'd say I played the field before I\u2005found\u2005someone to commit\u2005to
And that would be okay for\u2005me to do
Every conquest I had made would make me more of a boss to you


I'd be a fearless leader
I'd be an alpha type
When everyone believes ya
What's that like?

I'm so sick of running as fast as I can
Wondering if I'd get there quicker if I was a man
And I'm so sick of them coming at me again
'Cause if I was a man, then I'd be the man
I'd be the man
I'd be the man


They'd say I hustled, put in the work
They wouldn't shake their heads and question how much of this I deserve
What I was wearing, or if I was rude
Could all be separated from my good ideas and power moves


And they would toast to me, oh
Let the players play
I'd be just like Leo in Saint-Tropez


I'm so sick of running as fast as I can
Wondering if I'd get there quicker if I was a man
And I'm so sick of them coming at me again
'Cause if I was a man, then I'd be the man
I'd be the man
I'd be the man, yeah

What's it like to brag about raking in dollars
And getting bitches and models?
And it's all good if you're bad
It's okay if you're mad
If I was out flashing my dollars
I'd be a bitch, not a baller
They'd paint me out to be bad
So, it's okay that I'm mad


I'm so sick of running as fast as I can
Wondering if I'd get there quicker if I was a man
You know that I'm so sick of them coming at me again
'Cause if I was a man, then I'd be the man
I'd be the man, yeah
Yeah, I'd be the man, yeah
Oh, I'd be the man
I'd be the man


If I was a man
Then I'd be the man`,coverArt:"https://images.genius.com/d1692084f685a6bcad3e7fc701b55140.1000x1000x1.jpg"},{songTitle:"The Moment I Knew by Taylor Swift",lyrics:`You should've been there
Should've burst through the door
With that "Baby, I'm right here" smile
And it would've felt like
A million little shining stars had just aligned
And I would've been so happy


Christmas lights glisten
I've got my eye on the door
Just waiting for you to walk in
But the time is ticking
People ask me how I've been
As I comb back through my memory
How you said you'd be here
You said you'd be here

And it was like slow motion
Standing there in my party dress
In red lipstick
With no one to impress
And they're all laughing
As I'm looking around the room
But there was one thing missing
And that was the moment I knew


And the hours pass by
Now I just wanna be alone
But your close friends always seem to know
When there's something really wrong
So they follow me down the hall
And there in the bathroom
I try not to fall apart
And the sinking feeling starts
As I say hopelessly
"He said he'd be here"


And it was like slow motion
Standing there in my party dress
In red lipstick
With no one to impress
And they're all laughing
And asking me about you
But there was one thing missing (Missing)
And that was the moment I knew

What do you say
When tears are streaming down your face
In front of everyone you know?
And what do you do
When the one who means the most to you
Is the one who didn't show?


You should've been here
And I would've been so happy


And it was like slow motion
Standing there in my party dress
In red lipstick
With no one to impress
And they're all standing around me, singing
"Happy birthday to you"
But there was one thing missing
And that was the moment I knew
Oh-oh-oh-oh-oh-oh-oh, I knew
Oh-oh-oh-oh-oh-oh-oh


You called me later
And said, "I'm sorry I didn't make it"
And I said, "I'm sorry, too"
And that was the moment I knew`,coverArt:"https://images.genius.com/0611cfc055df712e859e13c094714643.1000x1000x1.jpg"},{songTitle:"The Moment I Knew (Taylor's Version) by Taylor Swift",lyrics:`You should've been there
Should've burst through the door
With that "Baby, I'm right here" smile
And it would've felt like
A million little shining stars that just align
And I would've been so happy


Christmas lights glisten
I've got my eye on the door
Just waiting for you to walk in
But the time is ticking
People ask me how I've been
As I comb back through my memory
How you said you'd be here
You said you'd be here

And it was like slow motion
Standing there in my party dress
In red lipstick
With no one to impress
And they're all laughing
As I'm looking around the room
But ther\u0435 was one thing missing
And that was the moment I kn\u0435w


And the hours pass by
Now I just wanna be alone
But your close friends always seem to know
When there's something really wrong
So they follow me down the hall
And there in the bathroom
I try not to fall apart
And the sinking feeling starts
As I say hopelessly
"He said he'd be here"


And it was like slow motion
Standing there in my party dress
In red lipstick
With no one to impress
And they're all laughing
And asking me about you
But there was one thing missing
And that was the moment I knew

What do you say
When tears are streaming down your face
In front of everyone you know?
And what do you do
When the one who means the most to you
Is the one who didn't show?


You should've been here
And I would've been so happy


And it was like slow motion
Standing there in my party dress
In red lipstick
With no one to impress
And they're all standing around me, singing
"Happy birthday to you"
But there was one thing missing
And that was the moment I knew
Oh-oh-oh-oh-oh-oh-oh, I knew
Oh-oh-oh-oh-oh-oh-oh


You called me later
And said, "I'm sorry I didn't make it"
And I said, "I'm sorry, too"
And that was the moment I knew`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"The Other Side Of The Door by Taylor Swift",lyrics:`In the heat of the fight I walked away
Ignoring words that you were saying
Trying to make me stay
I said, "This time I've had enough"
And you've called a hundred times
But I'm not picking up


'Cause I'm so mad I might tell you that it's over
But if you look a little closer

I said, "Leave," but all I really want is you
To stand outside my window throwing pebbles
Screaming, "I'm in love with you"
Wait there in the pouring rain
Come back for more
And don't you leave 'cause I know
All I need is on the other side of the door


Me and my stupid pride are sitting here alone
Going through the photographs, staring at the phone
I keep going back over things we both said
And I remember the slamming door
And all the things that I misread


So babe if you know everything
Tell me why you couldn't see
When I left, I wanted you to chase after me


Yeah, I said, "Leave," but all I really want is you
To stand outside my window throwing pebbles
Screaming, "I'm in love with you"
Wait there in the pouring rain
Come back for more
And don't you leave 'cause I know
All I need is on the other side of the door

And I'll scream out the window
I can't even look at you
I don't need you but I do, I do, I do
I say, "There's nothing you can say
To make this right again, I mean it, I mean it"
What I mean is


I said, "Leave," but baby, all I want is you
To stand outside my window throwing pebbles
Screaming, "I'm in love with you"
Wait there in the pouring rain
Come back for more
And don't you leave 'cause I know
All I need is on the other side of the door


With your face and the beautiful eyes
And the conversation with the little white lies
And the faded picture of a beautiful night
You carried me from your car up the stairs
And I broke down crying, was she worth this mess?
After everything and that little black dress
After everything I must confess, I need you`,coverArt:"https://images.genius.com/52185c8266a672e8c5cbbfbc6b4eb08e.1000x1000x1.jpg"},{songTitle:"The Other Side of the Door (Taylor's Version) by Taylor Swift",lyrics:`In the heat of the fight I walked away
Ignorin' words that you were sayin'
Tryna make me stay
I said, "This time I've had enough"
And you've called a hundred times
But I'm not picking up


'Cause I'm so mad I might tell you that it's over
But if you look a little closer

I said, "Leave," but all I really want is you
To stand outside my window throwin' pebbles
Screamin', "I'm in love with you"
Wait there in the pourin' rain, comin' back for more
And don't you leave 'cause I know
All I need is on the other side of the door


Me and my stupid pride are sittin' here alone
Goin' through the photographs, starin' at the phone
I keep goin' back over things we both said
And I remember the slamming door
And all the things that I misread


Oh, babe, if you know everything
Tell me why you couldn't see
When I left, I wanted you to chase after me, yeah


I said, "Leave," but all I really want is you
To stand outside my window throwin' pebbles
Screamin', "I'm in love with you"
Wait there in the pourin' rain, comin' back for more
And don't you leave 'cause I know
All I need is on the other side of the door

And I'll scream out the window
I can't even look at you
I don't need you but I do, I do, I do
I say, "There's nothing you can say
To make this right again, I mean it, I mean it"
But what I mean is


I said, "Leave," but, baby, all I want is you
To stand outside my window throwin' pebbles
Screamin', "I'm in love with you"
Wait there in the pourin' rain, comin' back for more
And don't you leave 'cause I know
All I need is on the other side of the door


With your face and the beautiful eyes
And the conversation with the little white lies
And the faded picture of a beautiful night
You carried me from your car up the stairs
And I broke down crying, was she worth this mess?
After everything and that little black dress
After everything I must confess, I need you`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"The Outside by Taylor Swift",lyrics:`I didn't know what I would find
When I went looking for a reason, I know
I didn't read between the lines
And, baby, I've got nowhere to go


I tried to take the road less traveled by
But nothing seems to work the first few times
Am I right?

So how can I ever try to be better?
Nobody ever lets me in
I can still see you, this ain't the best view
On the outside looking in
I've been a lot of lonely places
I've never been on the outside


You saw me there, but never knew
That I would give it all up to be
A part of this, a part of you
And now it's all too late, so you see


You could've helped if you had wanted to
But no one notices until it's too
Late to do anything


How can I ever try to be better?
Nobody ever lets me in
I can still see you, this ain't the best view
On the outside looking in
I've been a lot of lonely places
I've never been on the outside

Oh, yeah


How can I ever try to be better?
Nobody ever lets me in
And I can still see you, this ain't the best view
On the outside looking in
I've been a lot of lonely places
I've never been on the outside


Oh-oh
Oh, oh-oh
Oh-oh
Oh-oh`,coverArt:"https://images.genius.com/6b596144050683a8bfea75da8aa70fc3.1000x1000x1.jpg"},{songTitle:"The Story of Us by Taylor Swift",lyrics:`I used to think one day, we'd tell the story of us
How we met and the sparks flew instantly
And people would say, "They're the lucky ones"
I used to know my place was the spot next to you
Now I'm searching the room for an empty seat
'Cause lately, I don't even know what page you're on


Oh, a simple complication
Miscommunications lead to fallout
So many things that I wish you knew
So many walls up, I can't break through

Now I'm standing alone in a crowded room
And we're not speaking
And I'm dying to know
Is it killing you like it's killing me? Yeah
I don't know what to say since the twist of fate
When it all broke down
And the story of us looks a lot like a tragedy now


Next chapter


How'd we end up this way?
See me nervously pulling at my clothes and trying to look busy
And you're doing your best to avoid me
I'm starting to think one day, I'll tell the story of us
How I was losing my mind when I saw you here
But you held your pride like you should've held me


Oh, I'm scared to see the ending
Why are we pretending this is nothing?
I'd tell you I miss you, but I don't know how
I've never heard silence quite this loud
Related Songs
Now I'm standing alone in a crowded room
And we're not speaking
And I'm dying to know
Is it killing you like it's killing me? Yeah
I don't know what to say since the twist of fate
When it all broke down
And the story of us looks a lot like a tragedy now


This is looking like a contest
Of who can act like they care less
But I liked it better when you were on my side
The battle's in your hands now
But I would lay my armor down
If you said you'd rather love than fight


So many things that you wish I knew
But the story of us might be ending soon


Now I'm standing alone in a crowded room
And we're not speaking
And I'm dying to know
Is it killing you like it's killing me? Yeah
I don't know what to say since the twist of fate
When it all broke down
The story of us looks a lot like a tragedy now, now, now

And we're not speaking
And I'm dying to know
Is it killing you like it's killing me? Yeah
I don't know what to say since the twist of fate
'Cause we're goin' down
And the story of us looks a lot like a tragedy now


The end`,coverArt:"https://images.genius.com/9b24e6395b4091cddd8c4e91a055d49c.604x620x1.jpg"},{songTitle:"The Story Of Us (European Version) by Taylor Swift",lyrics:`I used to think one day, we'd tell the story of us
How we met, and the sparks flew instantly
And people would say, "They're the lucky ones"
I used to know my place was a spot next to you
Now I'm searching the room for an empty seat
'Cause lately, I don't even know what page you're on


Oh, a simple complication
Miscommunications lead to fallout
So many things that I wish you knew
So many walls up, I can't break through

Now I'm standing alone in a crowded room
And we're not speaking
And I'm dying to know
Is it killing you like it's killing me?
Yeah, I don't know what to say
Since the twist of fate when it all broke down
And the story of us looks a lot like a tragedy now
Next chapter


How'd we end up this way?
See me nervously pulling at my clothes and trying to look busy
And you're doing your best to avoid me
I'm starting to think one day, I'll tell the story of us
How I was losing my mind when I saw you here
But you held your pride like you should've held me


Oh, I'm scared to see the ending
Why are we pretending this is nothing?
I'd tell you I miss you, but I don't know how
I've never heard silence quite this loud


Now I'm standing alone in a crowded room
And we're not speaking
And I'm dying to know
Is it killing you like it's killing me?
Yeah, and I don't know what to say
Since the twist of fate, when it all broke down
And the story of us looks a lot like a tragedy now

This is looking like a contest
Of who can act like they care less
But I liked it better when you were on my side
The battle's in your hands now
But I would lay my armor down
If you say you'd rather love than fight
So many things that you wish I knew
But the story of us might be ending soon


Now I'm standing alone in a crowded room
And we're not speaking
And I'm dying to know
Is it killing you like it's killing me?
Yeah, and I don't know what to say
Since the twist of fate, when it all broke down
And the story of us looks a lot like a tragedy now, now, now


And we're not speaking
And I'm dying to know
Is it killing you like it's killing me, yeah?
I don't know what to say since the twist of fate
'Cause we're going down
And the story of us looks a lot like a tragedy now
The End`,coverArt:"https://images.genius.com/721a6c465a666419bf286b473287c33f.446x446x1.jpg"},{songTitle:"The Story Of Us (Live/2011) by Taylor Swift",lyrics:`Go!


I used to think one day, we'd tell the story of us
How we met, and\u2005the\u2005sparks flew instantly
And\u2005people would say, they're the lucky\u2005ones
I used to know my place was a spot next to you
Now I'm searching the room for an empty seat
Lately, I don't even know what page you're on

Oh, a simple complication
Miscommunications lead to fallout
So many things that I wish you knew
So many walls up, I can't break through


Now I'm standing alone in a crowded room
And we're not speaking
And I'm dying to know
Is it killing you like it's killing me?
Yeah, I don't know what to say
Since the twist of fate when it all broke down
And the story of us looks a lot like a tragedy now
Next chapter


How'd we end up this way?
See me nervously pulling at my clothes and trying to look busy
And you're doing your best to avoid me
I'm starting to think one day, I'll tell the story of us
Of how I was losing my mind when I saw you here
But you held your pride like you should've held me


Oh, I'm scared to see the ending
Why are we pretending this is nothing?
I'd tell you I miss you, but I don't know how
I've never heard silence quite this loud

Now I'm standing alone in a crowded room
And we're not speaking
And I'm dying to know
Is it killing you like it's killing me?
Yeah, and I don't know what to say
Since the twist of fate, when it all broke down
And the story of us looks a lot like a tragedy now


Can I please see you jump?


This is looking like a contest
Of who can act like they care less
But I liked it better when you were on my side
The battle's in your hands now
But I would lay my armor down
If you say you'd rather love than fight
So many things that you wish I knew
But the story of us might be ending soon


Now I'm standing alone in a crowded room
And we're not speaking
And I'm dying to know
Is it killing you like it's killing me?
Yeah,  I don't know what to say
Since the twist of fate, when it all broke down
And the story of us looks a lot like a tragedy now, now, now (now, now, now)
Oh (Now, now, now)

And we're not speaking
And I'm dying to know
Is it killing you like it's killing me, yeah?
I don't know what to say since the twist of fate
'Cause we're going down
And the story of us looks a lot like a tragedy now
The End`,coverArt:"https://images.genius.com/6510355b9fa1e35fa7e939852c7405d0.900x900x1.jpg"},{songTitle:"The Very First Night (Taylor's Version) [From the Vault] by Taylor Swift",lyrics:`I wish I could fly
I'd pick you up and we'd go back in time
I'd write this in the sky
I miss you like it was the very first night


And so it goes
Every weekend, this same party
I never go alone
And I don't seem broken-hearted
My friends all say they know
Everything I'm going through
I drive down different roads
But they all lead back to you

'Cause they don't know about the night in the hotel
They weren't ridin' in the car when we both fell
Didn't read the note on the Polaroid picture
They don't know how much I miss you


I wish I could fly
I'd pick you up and we'd go back in time
I'd write this in the sky
I miss you like it was the very first night


And so it was
We never saw it coming
Not trying to fall in love
But we did like children running
Back then, we didn't know
We were built to fall apart
We broke the status quo
Then we broke each other's hearts


But don't forget about the night out in L.A
Dance in the kitchen, chase me down through the hallway
No one knows about the words that we whispered
No one knows how much I miss you

I wish I could fly
I'd pick you up and we'd go back in time
I'd write this in the sky
I miss you like it was the very first night


Take me away
Take me away
Take me away
To you, to you
Take me away
Take me away
Take me away
To you, to you


I remember the night at the hotel
I was ridin' in the car when we both fell
I'm the one on the phone as you whisper
"Do you know how much I miss you?"


I wish that we could go back in time
And I'd say to you
"I miss you like it was the very first night"

I wish I could fly
I'd pick you up and we'd go back in time
I'd write this in the sky
I miss you like it was the very first night


Take me away
Take me away
Take me away
To you, to you
Take me away
Take me away
Take me away
To you, to you`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"The Way I Loved You by Taylor Swift",lyrics:`He is sensible and so incredible
And all my single friends are jealous
He says everything I need to hear and it's like
I couldn't ask for anything better
He opens up my door and I get into his car
And he says you look beautiful tonight
And I feel perfectly fine


But I miss screaming and fighting and kissing in the rain
And it's 2AM and I'm cursing your name
You're so in love that you act insane
And that's the way I loved you
Breaking down and coming undone
It's a roller coaster kind of rush
And I never knew I could feel that much
And that's the way I loved you

He respects my space
And never makes me wait
And he calls exactly when he says he will
He's close to my mother
Talks business with my father
He's charming and endearing
And I'm comfortable


But I miss screaming and fighting and kissing in the rain
It's 2AM and I'm cursing your name
You're so in love that you acted insane
And that's the way I loved you
Breaking down and coming undone
It's a roller coaster kind of rush
And I never knew I could feel that much
And that's the way I loved you


He can't see the smile I'm faking
And my heart's not breaking
'Cause I'm not feeling anything at all
And you were wild and crazy
Just so frustrating
Intoxicating, complicated
Got away by some mistake and now

I miss screaming and fighting and kissing in the rain
It's 2AM and I'm cursing your name
I'm so in love that I acted insane
And that's the way I loved you
Breaking down and coming undone
It's a roller coaster kind of rush
And I never knew I could feel that much
And that's the way I loved you oh, oh


And that's the way I loved you oh, oh
Never knew I could feel that much
And that's the way I loved you`,coverArt:"https://images.genius.com/026c5c3f1618d0b001cc2a09bbcdc3cd.1000x1000x1.jpg"},{songTitle:"The Way I Loved You (Taylor's Version) by Taylor Swift",lyrics:`He is sensible and so incredible
And all my single friends are jealous
He says everything I\u2005need\u2005to hear and\u2005it's like
I couldn't ask for anything\u2005better
He opens up my door and I get into his car
And he says, "You look beautiful tonight"
And I feel perfectly fine


But I miss screaming and fighting and kissing in the rain
And it's 2AM and I'm cursing your name
You're so in love that you act insane
And that's the way I loved you
Breaking down and coming undone
It's a rollercoaster kind of rush
And I never knew I could feel that much
And that's the way I loved you

He respects my space
And never makes me wait
And he calls exactly when he says he will
He's close to my mother
Talks business with my father
He's charming and endearing
And I'm comfortable


But I miss screaming and fighting and kissing in the rain
And it's 2AM and I'm cursing your name
You're so in love that you act insane
And that's the way I loved you
Breaking down and coming undone
It's a rollercoaster kind of rush
And I never knew I could feel that much
And that's the way I loved you


He can't see the smile I'm faking
And my heart's not breaking
'Cause I'm not feeling anything at all
And you were wild and crazy
Just so frustrating
Intoxicating, complicated
Got away by some mistake and now

I miss screaming and fighting and kissing in the rain
It's 2AM and I'm cursing your name
So in love that I acted insane
And that's the way I loved you
Breaking down and coming undone
It's a rollercoaster kind of rush
And I never knew I could feel that much
And that's the way I loved you oh, oh


Whoa, whoa, oh-oh, oh
And that's the way I loved you oh, oh, oh, oh
Oh, oh, oh, whoa
Never knew I could feel that much
And that's the way I loved you`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"\u200Bthis is me trying by Taylor Swift",lyrics:`I've been having a hard time adjusting
I had the shiniest wheels, now they're rusting
I didn't\u2005know\u2005if you'd care\u2005if I came back
I have a\u2005lot of regrets about that
Pulled the car off the road to the lookout
Could've followed my fears all the way down
And maybe I don't quite know what to say
But I'm here in your doorway


I just wanted you to know that this is me trying
I just wanted you to know that this is me trying

They told me all of my cages were mental
So I got wasted like all my potential
And my words shoot to kill when I'm mad
I have a lot of regrets about that
I was so ahead of the curve, the curve became a sphere
Fell behind all my classmates and I ended up here
Pouring out my heart to a stranger
But I didn't pour the whiskey


I just wanted you to know that this is me trying
I just wanted you to know that this is me trying


At least I'm trying


And it's hard to be at a party when I feel like an open wound
It's hard to be anywhere these days when all I want is you
You're a flashback in a film reel on the one screen in my town


And I just wanted you to know that this is me trying
(And maybe I don't quite know what to say)
I just wanted you to know that this is me trying

At least I'm trying`,coverArt:"https://images.genius.com/4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png"},{songTitle:"\u200Bthis is me trying (the long pond studio sessions) by Taylor Swift",lyrics:`I've been having a hard time adjusting
I had the shiniest wheels, now they're rusting
I didn't know if you'd care if I came back
I have a lot of regrets about that
Pulled the car off the road to the lookout
Could've followed my fears all the way down
And maybe I don't quite know what to say
But I'm here in your doorway


I just wanted you to know that this is me trying
I just wanted you to know that this is me trying

They told me all of my cages were mental
So I got wasted like all my potential
And my words shoot to kill when I'm mad
I have a lot of regrets about that
I was so ahead of the curve, the curve became a sphere
Fell behind all my classmates and I ended up here
Pouring out my heart to a stranger
But I didn't pour the whiskey


I just wanted you to know that this is me trying
I just wanted you to know that this is me trying


At least I'm trying


And it's hard to be at a party when I feel like an open wound
It's hard to be anywhere these days when all I want is you
You're a flashback in a film reel on the one screen in my town


And I just wanted you to know that this is me trying
I just wanted you to know that this is me trying

At least I'm trying`,coverArt:"https://images.genius.com/ca8060b14c65d348d8f2994a6b0d0a94.600x600x1.jpg"},{songTitle:"This Is Why We Can\u2019t Have Nice Things by Taylor Swift",lyrics:`It was so nice throwing big parties
Jump into the pool from the balcony
Everyone swimming in a champagne sea
And there are no rules when you show up here
Bass beat rattling the chandelier
Feeling so Gatsby for that whole year


So why'd you have to rain on my parade?
I'm shaking my head and locking the gates

This is why we can't have nice things, darling
Because you break them
I had to take them away
This is why we can't have nice things, honey (Oh)
Did you think I wouldn't hear all the things you said about me?
This is why we can't have nice things


It was so nice being friends again
There I was, giving you a second chance
But you stabbed me in the back while shaking my hand
And therein lies the issue
Friends don't try to trick you
Get you on the phone and mind-twist you
And so I took an axe to a mended fence


But I'm not the only friend you've lost lately (Mm-mm)
If only you weren't so shady

This is why we can't have nice things, darling (Yeah)
Because you break them
I had to take them away
This is why we can't have nice (Nice things) things (Baby), honey
Did you think I wouldn't hear all the things you said about me?
This is why we can't have

Here's a toast to my real friends
They don't care about the he-said, she-said
And here's to my baby
He ain't reading what they call me lately
And here's to my mama
Had to listen to all this drama
And here's to you
'Cause forgiveness is a nice thing to do
Haha, I can't even say it with a straight face

This is why we can't have nice things, darling (Darling)
Because you break them
I had to take them away
This is why we can't have nice (Uh-uh) things (Oh no), honey (Baby, oh)
Did you think I wouldn't hear all the things you said about me?
This is why we can't have nice things, darling
(And here's to my real friends)
Because you break them
I had to take them
(And here's to my baby)
Nice things, honey
(They didn't care about that he-said, she-said)
Did you think I wouldn't hear all the things you said about me?
This is why we can't have nice things`,coverArt:"https://images.genius.com/d6eba083b40fcec8b16ab1b4489fe057.1000x1000x1.png"},{songTitle:"This Love by Taylor Swift",lyrics:`Clear blue water
High tide came and brought you in
And I could go on and on, on and on and I will
Skies grew darker
Currents swept you out again
And you were just gone and gone, gone and gone


In silent screams and wildest dreams
I never dreamed of this

This love is good, this love is bad
This love is alive back from the dead, oh-oh, oh
These hands had to let it go free, and
This love came back to me, oh-oh, oh
Oh-oh, oh, oh-oh, oh


Tossing, turning
Struggled through the night with someone new
Baby, I could go on and on, on and on
Lantern, burning
Flickered in my mind, only you
But you were still gone, gone, gone


Been losing grip, on sinking ships
You showed up just in time


This love is good, this love is bad
This love is alive back from the dead, oh-oh, oh
These hands had to let it go free, and
This love came back to me, oh-oh, oh
This love left a permanent mark
This love is glowing in the dark, oh-oh, oh
These hands had to let it go free, and
This love came back to me, oh-oh, oh

(This love, this love, this love, this love, oh)
(This love, this love, this love, this love, oh)
(This love, this love, this love, this love, oh)
(This love, this love, this love, this love, oh)


Your kiss, my cheek
I watched you leave
Your smile, my ghost
I fell to my knees
When you're young, you just run
But you come back to what you need


This love is good, this love is bad
This love is alive back from the dead, oh-oh, oh
These hands had to let it go free, and
This love came back to me, oh-oh, oh
(This love) This love left a permanent mark
(This love) This love is glowing in the dark, oh-oh, oh
(This love) These hands had to let it go free, and
(This love) This love came back to me, oh-oh, oh


(This love, this love, this love, this love, oh)
(This love, this love, this love, this love, oh)
(This love, this love, this love, this love)
This love, this love came back to me, oh-oh, oh`,coverArt:"https://images.genius.com/da08ff60b6becc4fc1eaa3412338d18f.1000x1000x1.png"},{songTitle:"This Love (Taylor\u2019s Version) by Taylor Swift",lyrics:`Clear blue water
High tide came and brought you in
And I could go on and on, on and on, and I will
Skies grew darker
Currents swept you out again
And you were just gone and gone, gone and gone


In silent screams, in wildest dreams
I never dreamed of this

This love is good, this love is bad
This love is alive back from the dead, oh
These hands had to let it go free, and
This love came back to me, oh
Oh, oh


Tossing, turning
Struggled through the night with someone new
Baby, I could go on and on, on and on
Lantern, burning
Flickered in the night for only you
But you were still gone, gone, gone


In losing grip, on sinking ships
You showed up just in time


This love is good, this love is bad
This love is alive back from the dead, oh
These hands had to let it go free, and
This love came back to me, oh
This love left a permanent mark
This love is glowing in the dark, oh
These hands had to let it go free, and
This love came back to me, oh

(This love, this love, this love, this love, oh)
(This love, this love, this love, this love, oh)
(This love, this love, this love, this love, oh)
(This love, this love, this love, this love)


Your kiss, my cheek
I watched you leave
Your smile, my ghost
I fell to my knees
When you're young, you just run
But you come back to what you need


This love is good, this love is bad
This love is alive back from the dead, oh
These hands had to let it go free, and
This love came back to me, oh
(This love) This love left a permanent mark
(This love) This love is glowing in the dark, oh
(This love) These hands had to let it go free, and
(This love) This love came back to me, oh


(This love, this love, this love, this love, oh)
(This love, this love, this love, this love, oh)
(This love, this love, this love, this love)
(This love) This love came back to me, oh`,coverArt:"https://images.genius.com/16e64003c81800365b3457b455eaddac.1000x1000x1.jpg"},{songTitle:"Tied Together with a Smile by Taylor Swift",lyrics:`Seems the only one who doesn't see your beauty
Is the face in the mirror looking back at you
You walk around here thinking you're not pretty
But that's not true
'Cause I know you


Hold on, baby, you're losing it
The water's high, you're jumping into it and letting go
And no one knows
That you cry, but you don't tell anyone
That you might not be the golden one
And you're tied together with a smile
But you're coming undone, oh

I guess it's true that love was all you wanted
'Cause you're giving it away like it's extra change
Hoping it will end up in his pocket (Pocket)
But he leaves you out like a penny in the rain
Oh, 'cause it's not his price to pay
It's not his price to pay


Hold on, baby, you're losing it
The water's high, you're jumping into it and letting go
And no one knows
That you cry, but you don't tell anyone
That you might not be the golden one
And you're tied together with a smile
But you're coming undone, oh
Oh, oh


Hold on, baby, you're losing it
The water's high, you're jumping into it and letting go
And no one knows
That you cry but you don't tell anyone
That you might not be the golden one
And you're tied together with a smile
But you're coming undone, oh

You're tied together with a smile
But you're coming undone, oh, oh-oh
Goodbye, baby
With a smile, baby, baby
Oh`,coverArt:"https://images.genius.com/be8b30abcf286f1bf996e82e7e96dc14.1000x1000x1.jpg"},{songTitle:"Tim McGraw by Taylor Swift",lyrics:`He said the way my blue eyes shined
Put those Georgia stars to shame that night
I said, "That's a lie"
Just a boy in a Chevy truck
That had a tendency of gettin' stuck
On backroads at night
And I was right there beside him all summer long
And then the time we woke up to find that summer gone


But when you think Tim McGraw
I hope you think my favorite song
The one we danced to all night long
The moon like a spotlight on the lake
When you think happiness
I hope you think that little black dress
Think of my head on your chest
And my old faded blue jeans
When you think Tim McGraw
I hope you think of me

September saw a month of tears
And thankin' God that you weren't here
To see me like that
But in a box beneath my bed
Is a letter that you never read
From three summers back
It's hard not to find it all a little bittersweet
And lookin' back on all of that, it's nice to believe


When you think Tim McGraw
I hope you think my favorite song
The one we danced to all night long
The moon like a spotlight on the lake
When you think happiness
I hope you think that little black dress
Think of my head on your chest
And my old faded blue jeans
When you think Tim McGraw
I hope you think of me


And I'm back for the first time since then
I'm standin' on your street
And there's a letter left on your doorstep
And the first thing that you'll read is:
"When you think Tim McGraw
I hope you think my favorite song
Someday you'll turn your radio on
I hope it takes you back to that place"

When you think happiness
I hope you think that little black dress
Think of my head on your chest
And my old faded blue jeans
When you think Tim McGraw
I hope you think of me
Oh, think of me
Mmmm


He said the way my blue eyes shine
Put those Georgia stars to shame that night
I said, "That's a lie"`,coverArt:"https://images.genius.com/2edcc7b0d876e5ef82538fbd3344a725.953x953x1.jpg"},{songTitle:"Tim McGraw (Demo) by Taylor Swift",lyrics:`You said the way my blue eyes shined
Put those Georgia stars to shame that night
I said, "that's a lie"
Just a boy in a pickup truck
That had a funny way of getting stuck
On backroads at night


I was right there beside you all summer long
Then in time we woke up to find that summer gone

When you think Tim McGraw
Hope you think my favorite song
The one we danced to all night long
The moon like a spotlight on the lake
When you think happiness
I hope you think that little black dress
The one you said you liked best
Next to my old faded pair of jeans
When you think Tim McGraw
I hope you think me


September saw a month of tears
Thanking God that you weren't here
To see me like that
In a box beneath my bed
Sits a letter that you never read
From three summers back


It's hard not to find it all bittersweet
But looking back on all of that it's nice to believe


When you think Tim McGraw
Hope you think my favorite song
The one we danced to all night long
The moon like a spotlight on the lake
When you think happiness
I hope you think that little black dress
The one you said you liked best
Next to my old faded pair of jeans
When you think Tim McGraw
I hope you think me

Been back a couple times since then
And I didn't look you up
But some trains you can't catch again
You gotta leave it as it was


But when you think Tim McGraw
Hope you think my favorite song
The one we danced to all night long
The moon like a spotlight on the lake
When you think happiness
I hope you think that little black dress
The one you said you liked best
Next to my old faded pair of jeans
When you think Tim McGraw
When you think Tim McGraw
When you think Tim McGraw
I hope you think me


You said the way my blue eyes shined
Put those Georgia stars to shame that night
I said, "that's a lie"`,coverArt:"https://images.genius.com/a4b0cfd9dcd67b54afe65322ab9f13a8.320x320x1.png"},{songTitle:"Tim McGraw (Live from SoHo) by Taylor Swift",lyrics:`This is the song that got it all started for me
It's called "Tim McGraw"


He said the way my blue eyes shined
Put those Georgia stars to shame that night
I said, "That's a lie"
Just a boy in a Chevy truck
That had a tendency of gettin' stuck
On backroads at night
And I was right there beside him all summer long
And then the time we woke up to find that summer gone

But when you think Tim McGraw
I hope you think my favorite song
The one we danced to all night long
The moon like a spotlight on the lake
When you think happiness
I hope you think that little black dress
Think of my head on your chest
And my old faded blue jeans
When you think Tim McGraw
I hope you think of me


September saw a month of tears
And thankin' God that you weren't here
To see me like that
But in a box beneath my bed
Is a letter that you never read
From three summers back
It's hard not to find it all a little bittersweet
And lookin' back on all of that, it's nice to believe


When you think Tim McGraw
I hope you think my favorite song
The one we danced to all night long
The moon like a spotlight on the lake
When you think happiness
I hope you think that little black dress
Think of my head on your chest
And my old faded blue jeans
When you think Tim McGraw
I hope you think of me

And I'm back for the first time since then
I'm standin' on your street
And there's a letter left on your doorstep
And the first thing that you'll read is:
"Is when you think Tim McGraw
I hope you think my favorite song
Someday you'll turn your radio on
I hope it takes you back to that place"


When you think happiness
I hope you think that little black dress
Think of my head on your chest
And my old faded blue jeans
When you think Tim McGraw
I hope you think of me
Ooh, think of me
Mmmm


He said the way my blue eyes shine
Put those Georgia stars to shame that night
I said, "That's a lie"
Thank you so much`,coverArt:"https://images.genius.com/89ed020cf80ce5c178b2a385efa16113.800x800x1.jpg"},{songTitle:"\u200B'tis the damn season by Taylor Swift",lyrics:`If I wanted to know who you were hanging with
While I was gone, I would've asked you
It's the kind of cold, fogs up windshield glass
But I felt it when I passed you
There's an ache in you, put there by the ache in me
But if it's all the same to you
It's the same to me


So we could call it even
You could call me "babe" for the weekend
\u200B'Tis the damn season, write this down
I'm stayin' at my parents' house
And the road not taken looks real good now
And it always leads to you and my hometown

I park\u0435d my car right between the Methodist
And th\u0435 school that used to be ours
The holidays linger like bad perfume
You can run, but only so far
I escaped it too, remember how you watched me leave
But if it's okay with you, it's okay with me


We could call it even
You could call me "babe" for the weekend
\u200B'Tis the damn season, write this down
I'm stayin' at my parents' house
And the road not taken looks real good now
Time flies, messy as the mud on your truck tires
Now I'm missing your smile, hear me out
We could just ride around
And the road not taken looks real good now
And it always leads to you and my hometown


Sleep in half the day just for old times' sake
I won't ask you to wait if you don't ask me to stay
So I'll go back to L.A. and the so-called friends
Who'll write books about me if I ever make it
And wonder about the only soul
Who can tell which smiles I'm fakin'
And the heart I know I'm breakin' is my own
To leave the warmest bed I've ever known
We could call it even
Even though I'm leaving
And I'll be yours for the weekend
\u200B'Tis the damn season

We could call it even
You could call me "babe" for the weekend
\u200B'Tis the damn season, write this down
I'm stayin' at my parents' house
And the road not taken looks real good now
Time flies, messy as the mud on your truck tires
Now I'm missing your smile, hear me out
We could just ride around
And the road not taken looks real good now
And it always leads to you and my hometown


It always leads to you and my hometown`,coverArt:"https://images.genius.com/3e354c719fe236ab4a75adc6ea4c7fca.1000x1000x1.png"},{songTitle:"Today Was a Fairytale by Taylor Swift",lyrics:`Today was a fairytale
You were the prince
I used to be a damsel in distress
You took me by the hand and you picked me up at six
Today was a fairytale
Today was a fairytale
Today was a fairytale
I wore a dress
You wore a dark gray t-shirt
You told me I was pretty when I looked like a mess
Today was a fairytale

Time slows down
Whenever you're around


Well, can you feel this magic in the air?
It must have been the way you kissed me
Fell in love when I saw you standing there
It must have been the way
Today was a fairytale
It must have been the way
Today was a fairytale


Today was a fairytale
You've got a smile
That takes me to another planet
Every move you make, everything you say is right
Today was a fairytale
Today was a fairytale
All that I can say
Is now it's getting so much clearer
Nothing made sense 'til the time I saw your face
Today was a fairytale


Time slows down
Whenever you're around, yeah

But can you feel this magic in the air?
It must have been the way you kissed me
Fell in love when I saw you standing there
It must have been the way
Today was a fairytale
It must have been the way
Today was a fairytale


Time slows down
Whenever you're around
I can feel my heart
It's beating in my chest
Did you feel it?
I can't put this down


But can you feel this magic in the air?
It must have been the way you kissed me
Fell in love when I saw you standing there
It must have been the way


But can you feel this magic in the air?
It must have been the way you kissed me
Fell in love when I saw you standing there
It must have been the way
Today was a fairytale
It must have been the way
Today was a fairytale

Today was a fairytale`,coverArt:"https://images.genius.com/bf39f1de00109d2884b12f99b2006171.1000x1000x1.jpg"},{songTitle:"Today Was a Fairytale (Taylor's Version) by Taylor Swift",lyrics:`Today was a fairytale
You were the prince
I used to be a damsel in distress
You took me by the hand and you picked me up at six
Today was a fairytale
Today was a fairytale
Today was a fairytale
I wore a dress
You wore a dark gray t-shirt
You told me I was pretty when I looked like a mess
Today was a fairytale

Time slows down
Whenever you're around


Well, can you feel this magic in the air?
It must have been the way you kissed me
Fell in love when I saw you standing there
It must have been the way
Today was a fairytale
It must have been the way
Today was a fairytale


Today was a fairytale
You've got a smile
That takes me to another planet
Every move you make, everything you say is right
Today was a fairytale
Today was a fairytale
All that I can say
Is now it's getting so much clearer
Nothing made sense 'til the time I saw your face
Today was a fairytale


Time slows down
Whenever you're around, yeah

But can you feel this magic in the air?
It must have been the way you kissed me
Fell in love when I saw you standing there
It must have been the way
Today was a fairytale
It must have been the way
Today was a fairytale


Time slows down
Whenever you're around
I can feel my heart
It's beating in my chest
Did you feel it?
I can't put this down


But can you feel this magic in the air?
It must have been the way you kissed me
Fell in love when I saw you standing there
It must have been the way


But can you feel this magic in the air?
It must have been the way you kissed me
Fell in love when I saw you standing there
It must have been the way
Today was a fairytale
It must have been the way
Today was a fairytale

Oh, oh, yeah, oh-oh
Today was a fairytale`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"\u200Btolerate it by Taylor Swift",lyrics:`I sit and watch you reading with your head low
I wake and watch you breathing with your eyes closed
I sit and watch you
I notice everything you do or don't do
You're so much older and wiser, and I


I wait by the door like I'm just a kid
Use my best colors for your portrait
Lay the table with the fancy shit
And watch you tolerate it
If it's all in my head, tell me now
Tell me I've got it wrong somehow
I know my love should be celebrated
But you tolerate it

I greet you with a battle hero's welcome
I take your indiscretions all in good fun
I sit and list\u0435n, I polish plates until they gleam and glist\u0435n
You're so much older and wiser and I


I wait by the door like I'm just a kid
Use my best colors for your portrait
Lay the table with the fancy shit
And watch you tolerate it
If it's all in my head, tell me now
Tell me I've got it wrong somehow
I know my love should be celebrated
But you tolerate it


While you were out building other worlds, where was I?
Where's that man who'd throw blankets over my barbed wire?
I made you my temple, my mural, my sky
Now I'm begging for footnotes in the story of your life
Drawing hearts in the byline
Always taking up too much space or time
You assume I'm fine, but what would you do if I


Break free and leave us in ruins
Took this dagger in me and removed it
Gain the weight of you, then lose it
Believe me, I could do it
If it's all in my head, tell me now
Tell me I've got it wrong somehow
I know my love should be celebrated
But you tolerate it
Related Songs
I sit and watch you`,coverArt:"https://images.genius.com/3e354c719fe236ab4a75adc6ea4c7fca.1000x1000x1.png"},{songTitle:"Treacherous by Taylor Swift",lyrics:`Put your lips close to mine
As long as they don't touch
Out of focus, eye to eye
'Til the gravity's too much
And I'll do anything you say
If you say it with your hands
And I'd be smart to walk away
But you're quicksand


This slope is treacherous
This path is reckless
This slope is treacherous
And I-I-I like it

I can't decide if it's a choice
Getting swept away
I hear the sound of my own voice
Asking you to stay
And all we are is skin and bone
Trained to get along
Forever going with the flow
But you're friction


This slope is treacherous
This path is reckless
This slope is treacherous
I, I, I like it


Two headlights shine through the sleepless night
And I will get you, get you alone
Your name has echoed through my mind
And I just think you should, think you should know
That nothing safe is worth the drive
And I would follow you, follow you home
I'll follow you, follow you home


This hope is treacherous
This daydream is dangerous
This hope is treacherous
I-I-I, I-I-I, I-I-I

Two headlights shine through the sleepless night
And I will get you, get you alone
Your name has echoed through my mind
And I just think you should, think you should know
That nothing safe is worth the drive
And I would follow you, follow you home
I'll follow you, follow you home
I'll follow you, follow you home
I'll follow you, follow you home


This slope is treacherous
I-I-I like it`,coverArt:"https://images.genius.com/341214eeb78c133a8170a932919a66aa.1000x1000x1.png"},{songTitle:"Treacherous (Original Demo Recording) by Taylor Swift",lyrics:`Put your lips close to mine
As long as they don\u2019t touch
Out of focus, eye to eye
Till the gravity\u2019s too much
And I\u2019ll do anything you say
If you say it with your hands
And I\u2019d be smart to walk away
But you\u2019re quicksand


This slope is treacherous
This path is reckless
This slope is treacherous
And I, I, I, like it

I can\u2019t decide if it\u2019s a choice
Getting swept away
I hear the sound of my own voice
Asking you to stay
And all we are is skin and bone
Trained to get along
Forever going with the flow
But you\u2019re friction


This slope is treacherous
This path is reckless
This slope is treacherous
I, I, I, like it

Two headlights shine through the sleepless night
And I will get you, get you alone
Your name has echoed through my mind
And I just think you should
Think you should know
That nothing safe is worth the drive
And I would follow you, follow you home
I\u2019ll follow you, follow you home

This hope is treacherous
This daydream is dangerous
This hope is treacherous
I, I, I
I, I, I
I, I, I

Two headlights shine through the sleepless night
And I will get you, get you alone
Your name has echoed through my mind
And I just think you should
Think you should know
That nothing safe is worth the drive
And I would follow you, follow you home
I\u2019ll follow you, follow you home
I\u2019ll follow you, follow you home
I\u2019ll follow you, follow you home
I\u2019ll follow you, follow you home

This slope is treacherous
I, I, I, like it`,coverArt:"https://images.genius.com/467cd7140d29f54794fa8e91ccd87b8e.1000x1000x1.jpg"},{songTitle:"Treacherous (Taylor's Version) by Taylor Swift",lyrics:`Put your lips close to mine
As long as they don't touch
Out of focus, eye to eye
'Til the gravity's too much
And I'll do anything you say
If you say it with your hands
And I'd be smart to walk away
But you're quicksand


This slope is treacherous
This path is reckless
This slope is treacherous
And I-I-I like it

I can't decide if it's a choice
Getting swept away
I hear the sound of my own voice
Asking you to stay
All we are is skin and bone
Trained to get along
Forever going with the flow
But you're friction


This slope is treacherous
This path is reckless
This slope is treacherous
I-I-I like it


Two headlights shine through the sleepless night
And I will get you a, get you alone
Your name has echoed through my mind
And I just think you should, think you should know
That nothing safe is worth the drive
And I would follow you, follow you home
I'll follow you, follow you home


This hope is treacherous
This daydream is dangerous
This hope is treacherous
I-I-I, I-I-I, I-I-I\u2014

Two headlights shine through the sleepless night
And I will get you a, get you alone
Your name has echoed through my mind
And I just think you should, think you should know
That nothing safe is worth the drive
And I will follow you, follow you home
I'll follow you, follow you home
I'll follow you, follow you home
I'll follow you, follow you home


This slope is treacherous
I-I-I like it`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"Untouchable by Taylor Swift",lyrics:`Untouchable like a distant diamond sky
I'm reaching out and I just can't tell you why
I'm caught up in you, I'm caught up in you


Untouchable, burning brighter than the sun
And when you're close, I feel like coming undone


In the middle of the night when I'm in this dream
It's like a million little stars spelling out your name
You got to come on, come on, say that we'll be together
Come on, come on, little taste of heaven

It's half full and I won't wait here all day
I know you're saying that you'd be here anyway


But you're untouchable, burning brighter than the sun
And now that you're close, I feel like coming undone


In the middle of the night when I'm in this dream
It's like a million little stars spelling out your name
You got to come on, come on, say that we'll be together
Come on, come on, oh
In the middle of the night waking from this dream
I want to feel you by my side, standing next to me
You got to come on, come on, say that we'll be together
Come on, come on, little taste of heaven


I'm caught up in you
Oh-oh, oh, oh-oh
But you're untouchable, burning brighter than the sun
Now that you're close, I feel like coming undone


In the middle of the night when I'm in this dream
It's like a million little stars spelling out your name
You got to come on, come on, say that we'll be together
Come on, come on, oh-oh-oh
In the middle of the night when I'm in this dream
It's like a million little stars spelling out your name
You got to come on, come on, say that we'll be together
Come on, come on, come on
In the middle of the night waking from this dream
I want to feel you by my side, standing next to me
You got to come on, come on, say that we'll be together
Come on, come on, little taste of heaven

Oh-oh, oh-oh-oh, oh
And in the middle of the night when I'm in this dream
It's like a million little stars spelling out your name
You got to come on, come on, oh, come on, come on
Come on, come on, oh, oh, oh, oh
Like a million little stars spelling out your name
They're spelling out your name, oh`,coverArt:"https://images.genius.com/52185c8266a672e8c5cbbfbc6b4eb08e.1000x1000x1.jpg"},{songTitle:"Untouchable (Live from Clear  Channel Stripped 2008) by Taylor Swift",lyrics:`Untouchable like a distant diamond sky
I'm reaching out and I just can\u2019t tell you why
I'm\u2005caught\u2005up in you,\u2005I'm caught up in you


Untouchable, burning\u2005brighter than the sun
And when you\u2019re close, I feel like\u205Fcoming\u205Fundone


In\u205Fthe middle of\u205Fthe night when\u205FI'm in this dream
It's like a million little stars spelling out your name
You got to come on, come on, say that we'll be together
Come on, come on, little taste of heaven

It's half full and I won't wait here all day
I know you're saying that you'd be here anyway


But you\u2019re untouchable, burning brighter than the sun
Now that you\u2019re close, I feel like coming undone


In the middle of the night when I'm in this dream
It\u2019s like a million little stars spelling out your name
You got to come on, come on, say that we'll be together
Come on, come on, oh
In the middle of the night waking from this dream
I want to feel you by my side, standing next to me
You got to come on, come on, say that we'll be together
Come on, come on, little taste of heaven


I'm caught up in you
Oh, oh, oh


But you\u2019re untouchable, burning brighter than the sun
Now that you're close, I feel like coming undone

In the middle of the night when I'm in this dream
It's like a million little stars spelling out your name
You got to come on, come on, say that we'll be together
Come on, come on, oh
In the middle of the night when I'm in this dream
It's like a million little stars spelling out your name
You got to come on, come on, say that we'll be together
Come on, come on, oh
In the middle of the night waking from this dream
I want to feel you by my side, standing next to me
You got to come on, come on, say that we'll be together
Come on, come on, little taste of heaven
And in the middle of the night when I'm in this dream
It's like a million little stars spelling out your name
You got to come on, come on, come on, come on
Come on, come on, oh, oh, oh


Like a million little stars spelling out your name
They're spelling out your name, oh`,coverArt:"https://images.genius.com/a27d0e4b7173862e0abc61e372597975.1000x1000x1.jpg"},{songTitle:"Untouchable (Taylor's Version) by Taylor Swift",lyrics:`Untouchable like a distant diamond sky
I'm reaching out and I just can't tell you why
I'm caught up in you, I'm caught up in you


Untouchable, burning brighter than the sun
And when you're close, I feel like coming undone


In the middle of the night, when I'm in this dream
It's like a million little stars spelling out your name
You got to come on, come on, say that we'll be together
Come on, come on, little taste of heaven
Oh, oh

It's half full and I won't wait here all day
I know you're saying that you'd be here anyway


But you're untouchable, burning brighter than the sun
And now that you're close, I feel like coming undone


In the middle of the night, when I'm in this dream
It's like a million little stars spelling out your name
You got to come on, come on, say that we'll be together
Come on, come on, oh
In the middle of the night, waking from this dream
I want to feel you by my side, standing next to me
You got to come on, come on, say that we'll be together
Come on, come on, little taste of heaven


I'm caught up in you
Oh-oh, oh, oh-oh
But you're untouchable, burning brighter than the sun
Now that you're close, I feel like coming undone


In the middle of the night, when I'm in this dream
It's like a million little stars spelling out your name
You got to come on, come on, say that we'll be together
Come on, come on, oh, oh-oh
In the middle of the night, when I'm in this dream
It's like a million little stars spelling out your name
You got to come on, come on, say that we'll be together
Come on, come on, come on
In the middle of the night, waking from this dream
I want to feel you by my side, standing next to me
You got to come on, come on, say that we'll be together
Come on, come on, little taste of heaven
Oh, oh-oh-oh, oh-oh-oh, oh

And in the middle of the night, when I'm in this dream
It's like a million little stars spelling out your name
You got to come on, come on, oh
Come on, come on
Come on, come on, oh, oh, oh, oh
It's like a million little stars spelling out your name
They're spelling out your name, oh`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"We Are Never Ever Getting Back Together by Taylor Swift",lyrics:`I remember when we broke up the first time
Saying, "This is it, I've had enough," 'cause like
We hadn't seen each other in a month
When you said you needed space (What?)
Then you come around again and say
"Baby, I miss you and I swear I'm gonna change, trust me"
Remember how that lasted for a day?
I say, "I hate you," we break up, you call me, "I love you"


Ooh-ooh-ooh-ooh-ooh
We called it off again last night, but
Ooh-ooh-ooh-ooh-ooh
This time, I'm telling you, I'm telling you

We are never, ever, ever getting back together
We are never, ever, ever getting back together
You go talk to your friends, talk to my friends, talk to me
But we are never, ever, ever, ever
Getting back together
Like, ever


I'm really gonna miss you picking fights
And me falling for it, screaming that I'm right
And you would hide away and find your peace of mind
With some indie record that's much cooler than mine


Ooh-ooh-ooh-ooh-ooh
You called me up again tonight, but
Ooh-ooh-ooh-ooh-ooh
This time, I'm telling you, I'm telling you


We (We) are never, ever, ever getting back together
We are never, ever, ever getting back together
You go talk to your friends, talk to my friends, talk to me
(Talk to me) But we are never, ever, ever, ever
Getting back together

Ooh-ooh-ooh-ooh-ooh (Yeah)
Ooh-ooh-ooh-ooh-ooh-ooh (Yeah)
Ooh-ooh-ooh-ooh-ooh (Yeah)
Oh-oh-oh


I used to think that we were forever, ever
And I used to say, "Never say never"
Ugh, so he calls me up and he's like, "I still love you"
And I'm like, "I just, I mean, this is exhausting, you know?
Like, we are never getting back together, like, ever"


(No) We are never, ever, ever getting back together
We are never, ever, ever (Ooh) getting back together
You go talk to your friends, talk to my friends, talk to me
But we are never, ever, ever, ever
Getting back together


We (Ooh-ooh-ooh-ooh-ooh, ooh-ooh-ooh, no)
Getting back together
We (Ooh-ooh-ooh-ooh-ooh, oh, oh)
Getting back together (Yeah)
You go talk to your friends, talk to my friends, talk to me
(Talk to me) But we are never, ever, ever, ever
Getting back together`,coverArt:"https://images.genius.com/a712044cf7ec4cf7d7493078f3cf2573.800x800x1.jpg"},{songTitle:"We Are Never Ever Getting Back Together (Taylor's Version) by Taylor Swift",lyrics:`I remember when we broke up
The first time, saying, "This is it, I've had enough"
'Cause like we hadn't seen each other in a month
When you said you needed space (What?)
Then you come around again and say
"Baby, I miss you and I swear I'm gonna change"
"Trust me," remember how that lasted for a day?
I say, "I hate you," we break up, you call me, "I love you"


Ooh-ooh-ooh-ooh-ooh
We called it off again last night, but
Ooh-ooh-ooh-ooh-ooh
This time, I'm telling you, I'm telling you

We are never, ev\u0435r, ever getting back tog\u0435ther
We are never, ever, ever getting back together
You go talk to your friends, talk to my friends, talk to me
But we are never, ever, ever, ever getting back together


Like, ever


I'm really gonna miss you picking fights
And me falling for it, screaming that I'm right
And you would hide away and find your peace of mind
With some indie record that's much cooler than mine


Ooh-ooh-ooh-ooh-ooh
You called me up again tonight, but
Ooh-ooh-ooh-ooh-ooh
This time, I'm telling you, I'm telling you


We (We) are never, ever, ever getting back together
We are never, ever, ever getting back together
You go talk to your friends, talk to my friends, talk to me
(Talk to me)
But we are never, ever, ever, ever getting back together

Ooh-ooh-ooh-ooh-ooh (Yeah)
Ooh-ooh-ooh-ooh-ooh-ooh (Yeah)
Ooh-ooh-ooh-ooh-ooh (Yeah)
Oh-oh-oh


I used to think that we were forever, ever
And I used to say, "Never say never"
Ugh, so he calls me up and he's like, "I still love you"
And I'm like, I just, I mean, this is exhausting, you know?
Like, we are never getting back together, like, ever


(No) We are never, ever, ever getting back together
We are never, ever, ever (Ooh) getting back together
You go talk to your friends, talk to my friends, talk to me
But we are never, ever, ever, ever getting back together


We (Ooh-ooh-ooh-ooh-ooh, ooh-ooh-ooh, no)
Getting back together
We (Ooh-ooh-ooh-ooh-ooh, oh)
Getting back together (Yeah)
You go talk to your friends, talk to my friends, talk to me
(Talk to me)
But we are never, ever, ever, ever getting back together`,coverArt:"https://images.genius.com/7809d535eef0145a98d1ef1d5fbe4391.1000x1000x1.jpg"},{songTitle:"Welcome to New York by Taylor Swift",lyrics:`Walking through a crowd, the village is aglow
Kaleidoscope of loud heartbeats under coats
Everybody here wanted something more
Searching for a sound we hadn't heard before
And it said


Welcome to New York, it's been waiting for you
Welcome to New York, welcome to New York
Welcome to New York, it's been waiting for you
Welcome to New York, welcome to New York
It's a new soundtrack, I could dance to this beat, beat, forevermore
The lights are so bright but they never blind me, me
Welcome to New York, it's been waiting for you
Welcome to New York, welcome to New York

When we first dropped our bags on apartment floors
Took our broken hearts, put them in a drawer
Everybody here was someone else before
And you can want who you want
Boys and boys and girls and girls


Welcome to New York, it's been waiting for you
Welcome to New York, welcome to New York
Welcome to New York, it's been waiting for you
Welcome to New York, welcome to New York
It's a new soundtrack, I could dance to this beat, beat, forevermore
The lights are so bright, but they never blind me, me
Welcome to New York (New York), it's been waiting for you
Welcome to New York, welcome to New York


Like any great love, it keeps you guessing
Like any real love, it's ever-changing
Like any true love, it drives you crazy
But you know you wouldn't change anything, anything, anything


Welcome to New York, it's been waiting for you
Welcome to New York, welcome to New York
Welcome to New York, it's been waiting for you
Welcome to New York, welcome to New York
It's a new soundtrack, I could dance to this beat
The lights are so bright, but they never blind me
Welcome to New York (New soundtrack)
It's been waiting for you
Welcome to New York
The lights are so bright but they never blind me
Welcome to New York
So bright, they never blind me
Welcome to New York
Welcome to New York`,coverArt:"https://images.genius.com/da08ff60b6becc4fc1eaa3412338d18f.1000x1000x1.png"},{songTitle:"We Were Happy (Taylor's Version) [From the Vault] by Taylor Swift",lyrics:`We used to walk along the streets
When the porch lights were shining bright
Before I had somewhere to be
Back when we had all night and we were happy
I do recall a good while back, we snuck into the circus
You threw your arms around my neck, back when I deserved it
And we were happy


When it was good, baby, it was good, baby
We showed 'em all up
No one could touch the way we laughed in the dark
Talking 'bout your daddy's farm we were gonna buy someday
And we were happy

We used to watch the sun go down on the boats in the water
That's sorta how I feel right now
And goodbye's so much harder 'cause we were happy


When it was good, baby, it was good, baby
We showed 'em all up
No one could touch the way we laughed in the dark
Talking 'bout your daddy's farm we were gonna buy someday
And we were happy
We were happy


Oh, I hate those voices telling me I'm not in love anymore
But they don't give me choices and that's what these tears are for
'Cause we were happy
We were happy


When it was good, baby, it was good, baby
We showed 'em all up
No one could touch the way we laughed in the dark
Talking 'bout your daddy's farm
And you were gonna marry me
And we were happy
We were happy
Oh-oh-oh-oh
We were happy`,coverArt:"https://images.genius.com/5713f7e9d349e8744040b8be2f5ef73c.1000x1000x1.png"},{songTitle:"White Christmas by Taylor Swift",lyrics:`I'm dreaming of a white Christmas
Just like the ones I used to know
Where the tree tops glisten and children listen
To hear sleigh bells in the snow


I'm dreaming of a white Christmas
With every Christmas card I write
May your days be merry and bright
And may all your Christmases be white



I'm dreaming of a white Christmas
Just like the ones I used to know
So may your days be merry and bright
And may all your Christmases be white


May your days be merry and bright
And may all your Christmases be white`,coverArt:"https://images.genius.com/46a9fca430dd35d09273fc0deaba7bf7.1000x1000x1.jpg"},{songTitle:"White Horse by Taylor Swift",lyrics:`Say you're sorry, that face of an angel
Comes out just when you need it to
As I paced back and forth all this time
'Cause I honestly believed in you
Holdin' on, the days drag on
Stupid girl, I shoulda known, I shoulda known


That I'm not a princess, this ain't a fairytale
I'm not the one you'll sweep off her feet, lead her up the stairwell
This ain't Hollywood, this is a small town
I was a dreamer before you went and let me down
Now it's too late for you and your white horse
To come around

Maybe I was naive, got lost in your eyes
And never really had a chance
My mistake, I didn't know to be in love
You had to fight to have the upper hand
I had so many dreams about you and me
Happy endings, now I know


That I'm not a princess, this ain't a fairytale
I'm not the one you'll sweep off her feet, lead her up the stairwell
This ain't Hollywood, this is a small town
I was a dreamer before you went and let me down
Now it's too late for you and your white horse
To come around


And there you are on your knees
Beggin' for forgiveness, beggin' for me
Just like I always wanted
But I'm so sorry


'Cause I'm not your princess, this ain't our fairytale
I'm gonna find someone someday, who might actually treat me well
This is a big world, that was a small town
There in my rear view mirror disappearing now
And it's too late for you and your white horse
Now it's too late for you and your white horse
To catch me now

Oh, whoa, whoa, whoa
Try and catch me now, oh
It's too late to catch me now`,coverArt:"https://images.genius.com/1110a3640334058f917bccee75bbeffe.1000x1000x1.jpg"},{songTitle:"White Horse (Taylor's Version) by Taylor Swift",lyrics:`Say you're sorry, that face of an angel
Comes out just when you need it to
As I paced back and forth all this time
'Cause I honestly believed in you
Holdin' on, the days drag on
Stupid girl, I shoulda known, I shoulda known


That I'm not a princess, this ain't a fairytale
I'm not the one you'll sweep off her feet, lead her up the stairwell
This ain't Hollywood, this is a small town
I was a dreamer before you went and let me down
Now it's too late for you and your white horse
To come around

Maybe I was naive, got lost in your eyes
And never really had a chance
Well, my mistak\u0435, I didn't know to be in love
You had to fight to have th\u0435 upper hand
I had so many dreams about you and me
Happy endings, now I know


That I'm not a princess, this ain't a fairytale
I'm not the one you'll sweep off her feet, lead her up the stairwell
This ain't Hollywood, this is a small town
I was a dreamer before you went and let me down
Now it's too late for you and your white horse
To come around


And there you are on your knees
Beggin' for forgiveness, beggin' for me
Just like I always wanted
But I'm so sorry


'Cause I'm not your princess, this ain't our fairytale
I'm gonna find someone someday
Who might actually treat me well
This is a big world, that was a small town
There in my rearview mirror disappearing now
And it's too late for you and your white horse
Now it's too late for you and your white horse
To catch me now

Oh, whoa, whoa, whoa
Try and catch me now, oh
It's too late to catch me now`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"Wildest Dreams by Taylor Swift",lyrics:`He said, "Let's get out of this town
Drive out of the city, away from the crowds"
I thought, "Heaven can't help me now"
Nothing lasts forever
But this is gonna take me down


He's so tall and handsome as hell
He's so bad, but he does it so well
I can see the end as it begins
My one condition is

Say you'll remember me
Standin' in a nice dress
Starin' at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just in your
Wildest dreams, ah, ha
Wildest dreams, ah, ha


I said, "No one has to know what we do"
His hands are in my hair, his clothes are in my room
And his voice is a familiar sound
Nothin' lasts forever
But this is gettin' good now


He's so tall and handsome as hell
He's so bad, but he does it so well
And when we've had our very last kiss
My last request is


Say you'll remember me
Standin' in a nice dress
Starin' at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just in your
Wildest dreams, ah, ha (Ha, ha)
Wildest dreams, ah, ha

You'll see me in hindsight
Tangled up with you all night
Burnin' it down
Someday, when you leave me
I bet these memories
Follow you around
You'll see me in hindsight
Tangled up with you all night
Burnin' (Burnin') it (It) down (Down)
Someday, when you leave me
I bet these memories
Follow (Follow) you (You) around
(Follow you around)


Say you'll remember me
Standing in a nice dress
Starin' at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just pretend


Say you'll remember me
Standin' in a nice dress
Starin' at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just in your (Just pretend, just pretend)
Wildest dreams, ah, ha (Ah)
In your wildest dreams, ah, ha
Even if it's just in your
In your wildest dreams, ah, ha
In your wildest dreams, ah, ha`,coverArt:"https://images.genius.com/efe7f089b5f93d52c43d5fde651da844.1000x1000x1.jpg"},{songTitle:"Wildest Dreams / Enchanted by Taylor Swift",lyrics:`This night is sparkling, don't you let it go
I'm wonderstruck, blushing all the way home
I'll spend forever wondering if you knew
That this night is flawless, don't you let it go
I'm wonderstruck, dancing around all alone
I'll spend forever wondering if you knew
I was enchanted to meet you


He said let's get out of this town
Drive out of the city, away from the crowds
I thought heaven can't help me now
Nothing lasts forever, but this is gonna take me down
He's so tall and handsome as hell
He's so bad but he does it so well
I can see the end as it begins
My one condition is
Say you'll remember me
Standing in a nice dress, staring at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again even if it's just in your
Wildest dreams (ah ah)
Wildest dreams (ah ah)
He said no one has to know what we do
His hands are in my hair, his clothes are in my room
And his voice is a familiar sound
Nothing lasts forever
But this is getting good now
He's so tall and handsome as hell
He's so bad but he does it so well
And when we've had our very last kiss
My last request is
Say you'll remember me
Standing in a nice dress, staring at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again even if it's just in your
Wildest dreams (ah ah)
Wildest dreams (ah ah)
Ooh


This night is sparkling
Don't you let it go, don't you let it go
This night is flawless
Don't you let it go, don't you let it go
This night is sparkling
Don't you let it go, don't you let it go
This night is flawless
Don't you let it go


You'll see me in hindsight, tangled up with you all night
Burning it down
Someday when you leave me
I bet these memories follow you around
You'll see me in hindsight, tangled up with you all night
Burning it down
Someday when you leave me
I bet these memories follow you around
You'll see me in hindsight, tangled up with you all night
Burning it down
Someday when you leave me
I bet these memories follow you around
You'll see me in hindsight, tangled up with you all night
Burning it down
Someday when you leave me
I bet these memories follow you around (follow you around)
Say you'll remember me
Standing in a nice dress, staring at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again, even if it's just pretend
Say you'll remember me
Standing in a nice dress, staring at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again even if it's just in your
Wildest dreams (ah ah)
Wildest dreams (ah ah)
(Even if it's just in your)
Wildest dreams (ah ah)
Wildest dreams (ah ah)

This night is sparkling
Don't you let it go, don't you let it go
This night is flawless
Don't you let it go, don't you let it go
This night is sparkling
Don't you let it go, don't you let it go
This night is flawless
Don't you let it go

In your


Wildest dreams (ah ah)
Wildest dreams (ah ah)
Even if it's just in your
Wildest dreams (ah ah)
Wildest dreams (ah ah)`,coverArt:"https://images.rapgenius.com/3f17c8cd5261b240018144c56914aaf6.736x728x1.jpg"},{songTitle:"Wildest Dreams (R3hab Remix) by Taylor Swift",lyrics:`He said, "Let's get out of this town
Drive out of this city, away from the\u2005crowds"
I\u2005thought, "Heaven can't\u2005help me now"
Nothing lasts forever
But this\u2005is gonna take me down


He's so tall and handsome as hell
He's so bad, but he does it so well
I can see the end as it begins
My one condition is

Say you'll remember me
Standing in a nice dress
Staring at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just in your
Wildest dreams, ah-aah, haa
Wildest dreams, ah-aah, haa
In your Wildest dreams
Wildest dreams, ah-aah


I said, "No one has to know what we do"
His hands are in my hair, his clothes are in my room
And his voice is a familiar sound
Nothing lasts forever
But this is gettin' good now


He's so tall and handsome as hell
He's so bad, but he does it so well
And when we've had our very last kiss
My last request, it is


Say you'll remember me
Standing in a nice dress
Staring at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just in your
Wildest dreams, ah-aah, haa (Ah-aah, haa)
Wildest dreams, ah-aah, haa
In your Wildest dreams
Wildest dreams, ah-aah`,coverArt:"https://images.genius.com/2b848ecbea16926d19d4c6b6158528ea.600x600x1.jpg"},{songTitle:"Wildest Dreams (Taylor's Version) by Taylor Swift",lyrics:`He said, "Let's get out of this town
Drive out of the city, away from the crowds"
I thought, "Heaven can't help me now"
Nothing lasts forever
But this is gonna take me down


He's so tall and handsome as hell
He's so bad, but he does it so well
I can see the end as it begins
My one condition is

Say you'll remember me
Standin' in a nice dress
Starin' at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just in your
Wildest dreams, ah, ha
Wildest dreams, ah, ha


I said, "No one has to know what w\u0435 do"
His hands are in my hair, his clothes are in my room
And his voic\u0435 is a familiar sound
Nothin' lasts forever
But this is gettin' good now


He's so tall and handsome as hell
He's so bad, but he does it so well
And when we've had our very last kiss
My last request it is


Say you'll remember me
Standin' in a nice dress
Starin' at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just in your
Wildest dreams, ah, ha (Ha, ha)
Wildest dreams, ah, ha

You'll see me in hindsight
Tangled up with you all night
Burnin' it down
Someday, when you leave me
I bet these memories
Follow you around
You'll see me in hindsight
Tangled up with you all night
Burnin' (Burnin') it (It) down (Down)
Someday, when you leave me
I bet these memories
Follow (Follow) you (You) around (Around)
(Follow you around)


Say you'll remember me
Standing in a nice dress
Starin' at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just pretend
Say you'll remember me
Standin' in a nice dress
Starin' at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just in your (Just pretend, just pretend)
Wildest dreams, ah, ha (Ah-ah)
In your wildest dreams, ah, ha
Even if it's just in your
In your wildest dreams, ah, ha
In your wildest dreams, ah, ha`,coverArt:"https://images.genius.com/52f3764998d129abf5a756b74a22e8b6.1000x1000x1.png"},{songTitle:"\u200Bwillow by Taylor Swift",lyrics:`I'm like the water when your ship rolled in that night
Rough on the surface, but you cut through like a knife
And if it was an open-shut case
I never would've known from that look on your face
Lost in your current like a priceless wine


The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man

Life was a willow and it bent right to your wind
Head on the pillow, I could feel you sneakin' in
As if you were a mythical thing
Like you were a trophy or a champion ring
And there was one prize I'd cheat to win


The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
I'm begging for you to take my hand
Wreck my plans, that's my man


Life was a willow and it bent right to your wind
They count me out time and time again
Life was a willow and it bent right to your wind
But I come back stronger than a '90s trend


Wait for the signal, and I'll meet you after dark
Show me the places where the others gave you scars
Now this is an open-shut case
I guess I should've known from the look on your face
Every bait-and-switch was a work of art

The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
I'm begging for you to take my hand
Wreck my plans, that's my man
The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
I'm begging for you to take my hand
Wreck my plans, that's my man


Hey, that's my man
That's my man
Yeah, that's my man
Every bait-and-switch was a work of art
That's my man
Hey, that's my man
I'm begging for you to take my hand
Wreck my plans, that's my man`,coverArt:"https://images.genius.com/470f33317c22f26869b26b812ae9bebd.1000x1000x1.jpg"},{songTitle:"\u200Bwillow (90's trend remix) by Taylor Swift",lyrics:`I'm like the water when your ship rolled in that night
Rough on the surface, but you cut through like a knife
And if it was an open-shut case
I never would've known from that look on your face
Lost in your current like a priceless wine


The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
That's my man

Life was a willow and it bent right to your wind
Head on the pillow, I could feel you sneakin' in
As if you were a mythical thing
Like you were a trophy or a champion ring
And there was one prize I'd cheat to win


The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
I'm begging for you to take my hand
Wreck my plans, that's my man
That's my man


Life was a willow and it bent right to your wind
They count me out time and time again
Life was a willow and it bent right to your wind
But I come back stronger than a '90s trend


Wait for the signal, and I'll meet you after dark
Show me the places where the others gave you scars
Now this is an open-shut case
I guess I should've known from the look on your face
Every bait-and-switch was a work of art

The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
I'm begging for you to take my hand
Wreck my plans, that's my man


Hey, that\u2019s my man
That\u2019s my man
Yeah, that\u2019s my man
Every bait-and-switch was a work of art (That\u2019s my man)
That\u2019s my man
Hey, that\u2019s my man (That\u2019s my man)
I\u2019m begging for you to take my hand
Wreck my plans, that\u2019s my man
That\u2019s my man
That\u2019s my man
Hey that\u2019s my man
I\u2019m begging for you to take my hand
Wreck my plans, that\u2019s my man`,coverArt:"https://images.genius.com/bdf7bd0e3988a00de1c1fcd031ee66a5.512x512x1.jpg"},{songTitle:"\u200Bwillow (dancing witch version) [Elvira Remix] by Taylor Swift",lyrics:`I'm like the water when your ship rolled in that night
Rough on the surface, but you cut through like a knife
And if it was an open-shut case
I never would've known from that look on your face
Lost in your current like a priceless wine


The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man

Life was a willow and it bent right to your wind
Head on the pillow, I could feel you sneakin' in
As if you were a mythical thing
Like you were a trophy or a champion ring
And there was one prize I'd cheat to win


The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
I'm begging for you to take my hand
Wreck my plans, that's my man


Life was a willow, and it bent right to your wind
They count me out time and time again
Life was a willow, and it bent right to your wind
But I come back stronger than a '90s trend


Wait for the signal, and I'll meet you after dark
Show me the places where the others gave you scars
Now this is an open-shut case
I guess I should've known from the look on your face
Every bait-and-switch was a work of art

The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
I'm begging for you to take my hand
Wreck my plans, that's my man
The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
I'm begging for you to take my hand
Wreck my plans, that's my man`,coverArt:"https://images.genius.com/07a972c719c1ed73be8a5b45eb0fdda1.1000x1000x1.jpg"},{songTitle:"\u200Bwillow (lonely witch version) by Taylor Swift",lyrics:`I'm like the water when your ship rolled in that night
Rough on the surface, but you cut through like a knife
And if it was an open-shut case
I never would've known from that look on your face
Lost in your current like a priceless wine


The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man

Life was a willow and it bent right to your wind
Head on the pillow, I could feel you sneakin' in
As if you were a mythical thing
Like you were a trophy or a champion ring
And there was one prize I'd cheat to win


The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
I'm begging for you to take my hand
Wreck my plans, that's my man


Life was a willow and it bent right to your wind
They count me out time and time again
Life was a willow and it bent right to your wind
But I come back stronger than a '90s trend


Wait for the signal, and I'll meet you after dark
Show me the places where the others gave you scars
Now this is an open-shut case
I guess I should've known from the look on your face
Every bait-and-switch was a work of art

The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
I'm begging for you to take my hand
Wreck my plans, that's my man
The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
I'm begging for you to take my hand
Wreck my plans, that's my man


Hey, that's my man
That's my man
Yeah, that's my man
Every bait-and-switch was a work of art
That's my man
Hey, that's my man
I'm begging for you to take my hand
Wreck my plans, that's my man`,coverArt:"https://images.genius.com/6912cbe88d224556994a690b552eab14.1000x1000x1.jpg"},{songTitle:"\u200Bwillow (moonlit witch version) by Taylor Swift",lyrics:`I'm like the water when your ship rolled in that night
Rough on the surface, but you cut through like a knife
And if it was an open-shut case
I never would've known from that look on your face
Lost in your current like a priceless wine


The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man

Life was a willow and it bent right to your wind
Head on the pillow, I could feel you sneakin' in
As if you were a mythical thing
Like you were a trophy or a champion ring
And there was on\u0435 prize I'd cheat to win


The mor\u0435 that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
I'm begging for you to take my hand
Wreck my plans, that's my man


Life was a willow, and it bent right to your wind
They count me out time and time again
Life was a willow, and it bent right to your wind
But I come back stronger than a '90s trend


Wait for the signal, and I'll meet you after dark
Show me the places where the others gave you scars
Now this is an open-shut case
I guess I should've known from the look on your face
Every bait-and-switch was a work of art

The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
I'm begging for you to take my hand
Wreck my plans, that's my man
The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
I'm begging for you to take my hand
Wreck my plans, that's my man


Hey, that's my man
That's my man
Yeah, that's my man
Every bait-and-switch was a work of art
That's my man
Hey, that's my man
I'm begging for you to take my hand
Wreck my plans, that's my man`,coverArt:"https://images.genius.com/77f445b8977876a2a4558d452469c101.1000x1000x1.jpg"},{songTitle:"\u200Bwillow (original songwriting demo) by Taylor Swift",lyrics:`Ok, here\u2019s the Westerly one, written in Westerly


I'm like the water when your ship rolled in that night
Rough on the surface, but you cut through like a knife
And if it was an open-shut case
I never would've known from the look on your face
Drown in your current like a priceless wine


The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man

Life was a willow and it bent right to your wind
H\u0435ad on the pillow, I could feel you sneakin' in
As if you wer\u0435 a mythical thing
Like you were a trophy or a champion ring
And it was only one game I'd die  to win


The more that you say, the less I know
Wherever you stray, I follow
I'm begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
Begging for you to take my hand
Wreck my plans, that's my man


And then I was thinking like a choral section like ...


Wait for the signal, and I'll meet you after dark
Show me the places where the others gave you scars
Now this is an open-shut case
I guess I should've known from the look on your face
Every bait-and-switch was a work of art

The more that you say, the less I know
Wherever you stray, I follow
Begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
I'm begging for you to take my hand
Wreck my plans, that's my man
The more that you say, the less I know
Wherever you stray, I follow
Begging for you to take my hand
Wreck my plans, that's my man
You know that my train could take you home
Anywhere else is hollow
Begging for you to take my hand
Wreck my plans, that's my man


Hey, that's my man
Yeah, that's my man
Yeah, that's my man
Every bait-and-switch was a work of art
That's my man
Hey, that's my man
I'm begging for you to take my hand
Wreck my plans, that's my man`,coverArt:"https://images.genius.com/360ade1081604d8d3d229544acf2ac58.1000x1000x1.jpg"},{songTitle:"Wonderland by Taylor Swift",lyrics:`Flashing lights and we
Took a wrong turn and we
Fell down a rabbit hole
You held on tight to me
'Cause nothing's as it seems
And spinning out of control

Didn't they tell us "Don't rush into things"?
Didn't you flash your green eyes at me?
Haven't you heard what becomes of curious minds?
Ooh, didn't it all seem new and exciting?
I felt your arms twistin' around me
I should have slept with one eye open at night

We found Wonderland
You and I got lost in it
And we pretended it could last forever (Eh, eh)
We found Wonderland
You and I got lost in it
And life was never worse but never better (Eh, eh)


(Eh, eh, eh, eh, eh)
In Wonderland
(Eh, eh, eh, eh, eh)
In Wonderland
(Eh, eh, eh, eh, eh)
In Wonderland
(Eh, eh, eh, eh, eh)
In Wonderland


So we went on our way
Too in love to think straight
All alone, or so it seemed
But there were strangers watching
And whispers turned to talking
And talking turned to screams, oh

Didn't they tell us "Don't rush into things"?
Didn't you flash your green eyes at me?
Didn't you calm my fears with a Cheshire cat smile?
Ooh, didn't it all seem new and exciting?
I felt your arms twistin' around me
It's all fun and games 'til somebody loses their mind
But darlin'


We found Wonderland
You and I got lost in it
And we pretended it could last forever (Eh, eh)
We found Wonderland
You and I got lost in it
And life was never worse but never better (Eh, eh)


(Eh, eh, eh, eh, eh)
In Wonderland
(Eh, eh, eh, eh, eh)
In Wonderland
(Eh, eh, eh, eh, eh)
In Wonderland
(Eh, eh, eh, eh, eh)
Whoa, in Wonderland

I reached for you, but you were gone
I knew I had to go back home
You searched the world for something else
To make you feel like what we had
And in the end, in Wonderland
We both went mad
Oh


We found Wonderland
You and I got lost in it
And we pretended it could last forever
Last forever (Eh, eh)
We found Wonderland
You and I got lost in it (Got lost in it)
And life was never worse but never better
Never better (Eh, eh)
(Eh, eh, eh, eh, eh)
We found Wonderland
You and I got lost in it
(Eh, eh, eh, eh, eh)
And we pretended it could last forever (In Wonderland)
(Eh, eh, eh, eh, eh)
We found Wonderland
You and I got lost in it
(Eh, eh, eh, eh, eh)
And life was never worse but never better
In Wonderland`,coverArt:"https://images.genius.com/e7670a941db01564c2aaa56668faaefb.1000x1000x1.png"},{songTitle:"You All Over Me (Taylor's Version) [From the Vault] by Taylor Swift (Ft. Maren Morris)",lyrics:`Once the last drop of rain has dried off the pavement
Shouldn't I find a stain, but I never do
The way the tires turn stones on old county roads
They leave 'em muddy underneath, reminds me of you
You find graffiti on the walls of old bathroom stalls
You know, you can scratch it right off, it's how it used to be
But like the dollar in your pocket, it's been spent and traded in
You can't change where it's been, reminds me of me


I lived, and I learned, had you, got burned
Held out, and held on
God knows, too long, and wasted time
Lost tears, swore that I'd get out of here
But no amount of freedom gets you clean
I've still got you all over me

The best and worst day of June
Was the one that I met you
With your hands in your pockets
And your "Don't you wish you had me?" grin
Well I did, so I smiled
And I melted like a child
Now every breath of air I breathe reminds me of then


And I lived, and I learned, had you, got burned
Held out, and held on
God knows, too long, and wasted time
Lost tears, swore that I'd get out of here
But no amount of freedom gets you clean
I've still got you all over me




I lived, and I learned
And found out what it was to turn around
And see that we
Were never really meant to be
So I lied, and I cried
And I watched a part of myself die
'Cause no amount of freedom gets you clean
I've still got you all over me

I've still got you all over me
Still got you all over me`,coverArt:"https://images.genius.com/974f1a97d64b320d5d2a18d6664e1432.1000x1000x1.jpg"},{songTitle:"You Are in Love by Taylor Swift",lyrics:`One look, dark room
Meant just for you
Time moved too fast, you play it back
Buttons on a coat, lighthearted joke
No proof, not much, but you saw enough
Small talk, he drives
Coffee at midnight
The light reflects the chain on your neck
He says, "Look up"
And your shoulders brush
No proof, one touch, but you felt enough

You can hear it in the silence (Silence), silence (Silence), you
You can feel it on the way home (Way home), way home (Way home), you
You can see it with the lights out (Lights out), lights out (Lights out)
You are in love, true love
You are in love


Morning, his place
Burnt toast, Sunday
You keep his shirt, he keeps his word
And for once, you let go
Of your fears and your ghosts
One step, not much, but it said enough
You kiss on sidewalks
You fight and you talk
One night, he wakes
Strange look on his face
Pauses, then says "You're my best friend"
And you knew what it was, he is in love


You can hear it in the silence (Silence), silence (Silence), you
You can feel it on the way home (Way home), way home (Way home), you
You can see it with the lights out (Lights out), lights out (Lights out)
You are in love, true love

And so it goes
You two are dancing in a snow globe, 'round and 'round
And he keeps a picture of you in his office downtown
And you understand now
Why they lost their minds and fought the wars
And why I've spent my whole life trying to put it into words


'Cause you can hear it in the silence
You can feel it on the way home
You can see it with the lights out
You are in love, true love
You are in love


You can hear it in the silence (Silence), silence (Silence), you
You can feel it on the way home (Way home), way home (Way home), you
You can see it with the lights out (Lights out), lights out (Lights out)
You are in love, true love
You are in love (Ah)
You can hear it in the silence (Silence), silence (Silence), you (Ah)
You can feel it on the way home (Way home), way home (Way home), you (Ah)
You can see it with the lights out (Lights out), lights out (Lights out)
You are in love, true love
You are in love`,coverArt:"https://images.genius.com/e7670a941db01564c2aaa56668faaefb.1000x1000x1.png"},{songTitle:"You Belong with Me by Taylor Swift",lyrics:`You're on the phone with your girlfriend, she's upset
She's going off about something that you said
'Cause she doesn't get your humor like I do
I'm in the room, it's a typical Tuesday night
I'm listening to the kind of music she doesn't like
And she'll never know your story like I do


But she wears short skirts, I wear T-shirts
She's Cheer Captain and I'm on the bleachers
Dreaming about the day when you wake up and find
That what you're looking for has been here the whole time

If you could see that I'm the one who understands you
Been here all along, so why can't you see?
You belong with me, you belong with me


Walking the streets with you and your worn-out jeans
I can't help thinking this is how it ought to be
Laughing on a park bench, thinking to myself
Hey, isn't this easy?
And you've got a smile that could light up this whole town
I haven't seen it in a while since she brought you down
You say you're fine, I know you better than that
Hey, whatcha doing with a girl like that?


She wears high heels, I wear sneakers
She's Cheer Captain and I'm on the bleachers
Dreaming about the day when you wake up and find
That what you're looking for has been here the whole time


If you could see that I'm the one who understands you
Been here all along, so why can't you see?
You belong with me
Standing by and waiting at your back door
All this time how could you not know, baby?
You belong with me, you belong with me

Oh, I remember you driving to my house
In the middle of the night
I'm the one who makes you laugh
When you know you're 'bout to cry
And I know your favorite songs
And you tell me 'bout your dreams
Think I know where you belong
Think I know it's with me


Can't you see that I'm the one who understands you
Been here all along, so why can't you see?
You belong with me
Standing by and waiting at your back door
All this time how could you not know, baby?
You belong with me, you belong with me


You belong with me
Have you ever thought just maybe
You belong with me?
You belong with me`,coverArt:"https://images.genius.com/eebaa68e1dd744ea65b3c25b72d056dd.1000x1000x1.jpg"},{songTitle:"You Belong With Me (Taylor's Version) by Taylor Swift",lyrics:`You're on the phone with your girlfriend, she's upset
She's going off about something that you said
'Cause she doesn't get your humor like I do
I'm in my room, it's a typical Tuesday night
I'm listening to the kind of music she doesn't like
And she'll never know your story like I do


'Cause she wears short skirts, I wear T-shirts
She's Cheer Captain and I'm on the bleachers
Dreaming 'bout the day when you wake up and find
That what you're looking for has been here the whole time

If you could see that I'm the on\u0435 who understands you
Been here all along, so why can't you see?
You b\u0435long with me, you belong with me


Walking the streets with you and your worn-out jeans
I can't help thinking this is how it ought to be
Laughing on a park bench, thinking to myself
Hey, isn't this easy?
And you've got a smile that could light up this whole town
I haven't seen it in a while since she brought you down
You say you're fine, I know you better than that
Hey, whatcha doing with a girl like that?


She wears high heels, I wear sneakers
She's Cheer Captain and I'm on the bleachers
Dreaming about the day when you wake up and find
That what you're looking for has been here the whole time


If you could see that I'm the one who understands you
Been here all along, so why can't you see?
You belong with me
Standing by and waiting at your back door
All this time how could you not know, baby?
You belong with me, you belong with me

Oh, I remember you driving to my house
In the middle of the night
I'm the one who makes you laugh
When you know you're 'bout to cry
I know your favorite songs
And you tell me 'bout your dreams
Think I know where you belong
Think I know it's with me


Can't you see that I'm the one who understands you?
Been here all along, so why can't you see?
You belong with me
Standing by and waiting at your back door
All this time how could you not know, baby?
You belong with me, you belong with me


You belong with me
Have you ever thought just maybe
You belong with me?
You belong with me`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"},{songTitle:"You Need To Calm Down by Taylor Swift",lyrics:`You are somebody that I don't know
But you're takin' shots at me like it's Patr\xF3n
And I'm just like, damn, it's 7 AM
Say it in the street, that's a knock-out
But you say it in a Tweet, that's a cop-out
And I'm just like, "Hey, are you okay?"


And I ain't tryna mess with your self-expression
But I've learned a lesson that stressin' and obsessin' 'bout somebody else is no fun
And snakes and stones never broke my bones

So oh-oh, oh-oh, oh-oh, oh-oh, oh-oh
You need to calm down, you're being too loud
And I'm just like oh-oh, oh-oh, oh-oh, oh-oh, oh-oh (Oh)
You need to just stop, like can you just not step on my gown?
You need to calm down


You are somebody that we don't know
But you're comin' at my friends like a missile
Why are you mad when you could be GLAAD? (You could be GLAAD)
Sunshine on the street at the parade
But you would rather be in the dark ages
Makin' that sign must've taken all night


You just need to take several seats and then try to restore the peace
And control your urges to scream about all the people you hate
'Cause shade never made anybody less gay


So oh-oh, oh-oh, oh-oh, oh-oh, oh-oh
You need to calm down, you're being too loud
And I'm just like oh-oh, oh-oh, oh-oh, oh-oh, oh-oh (Oh)
You need to just stop, like can you just not step on his gown?
You need to calm down

And we see you over there on the internet
Comparing all the girls who are killing it
But we figured you out
We all know now we all got crowns
You need to calm down


Oh-oh, oh-oh, oh-oh, oh-oh, oh-oh
You need to calm down (You need to calm down)
You're being too loud (You're being too loud)
And I'm just like oh-oh, oh-oh, oh-oh, oh-oh, oh-oh (Oh)
You need to just stop (Can you stop?)
Like can you just not step on our gowns?
You need to calm down`,coverArt:"https://images.genius.com/4253720bc19aaeec19d45e7750e318d0.1000x1000x1.jpg"},{songTitle:"You Need To Calm Down (Clean Bandit Remix) by Taylor Swift (Ft. Clean Bandit)",lyrics:`You are somebody that I don't know
But you're takin' shots at me like it's Patr\xF3n
And\u2005I'm\u2005just like, damn,\u2005it's 7 AM
Say it in the\u2005street, that's a knock-out
But you say it in a Tweet, that's a cop-out
And I'm just like, "Hey, are you okay?"


And I ain't tryna mess with your self-expression
But I've learned a lesson that stressin' and obsessin' 'bout somebody else is no fun
And snakes and stones never broke my bones

So oh-oh, oh-oh, oh-oh, oh-oh, oh-oh
You need to calm down, you're being too loud
And I'm just like oh-oh, oh-oh, oh-oh, oh-oh, oh-oh (Oh)
You need to just stop, like can you just not step on my gown?
You need to calm down


You are somebody that we don't know
But you're comin' at my friends like a missile
Why are you mad when you could be GLAAD? (You could be GLAAD)
Sunshine on the street at the parade
But you would rather be in the dark ages
Makin' that sign must've taken all night


You just need to take several seats and then try to restore the peace
And control your urges to scream about all the people you hate
'Cause shade never made anybody less gay


So oh-oh, oh-oh, oh-oh, oh-oh, oh-oh
You need to calm down, you're being too loud
And I'm just like oh-oh, oh-oh, oh-oh, oh-oh, oh-oh (Oh)
You need to just stop, like can you just not step on his gown?
You need to calm down

And we see you over there on the internet
Comparing all the girls who are killing it
But we figured you out
We all know now we all got crowns
You need to calm down


Oh-oh, oh-oh, oh-oh, oh-oh, oh-oh
You need to calm down (You need to calm down)
You're being too loud (You're being too loud)
And I'm just like oh-oh, oh-oh, oh-oh, oh-oh, oh-oh (Oh)
You need to just stop (Can you stop?)
Like can you just not step on our gowns?
You need to calm down`,coverArt:"https://images.genius.com/4caeadbacd3a9cadb30ec844b3d30fb8.997x1000x1.jpg"},{songTitle:"You Need To Calm Down (Live from Paris) by Taylor Swift",lyrics:`You are somebody that I don't know
But you're takin' shots at me like it's Patr\xF3n
And\u2005I'm\u2005just like, damn,\u2005it's 7 AM
Say it in the\u2005street, that's a knock-out
But you say it in a Tweet, that's a cop-out
And I'm just like, "Hey, are you okay?"


And I ain't tryna mess with your self-expression
But I've learned a lesson that stressin' and obsessin' 'bout somebody else is no fun
And snakes and stones never broke my bones

So oh-oh, oh-oh, oh-oh, oh-oh, oh-oh
You need to calm down
You're being too loud
And I'm just like oh-oh, oh-oh, oh-oh, oh-oh, oh-oh (Oh)
You need to just stop
Like can you just not step on my gown?
You need to calm down


You are somebody that we don't know
But you're comin' at my friends like a missile
Why are you mad when you could be GLAAD? (You could be GLAAD)
Sunshine on the street at the parade
But you would rather be in the dark ages
Makin' that sign must've taken all night


You just need to take several seats and then try to restore the peace
And control your urges to scream about all the people you hate
'Cause shade never made anybody less gay


So oh-oh, oh-oh, oh-oh, oh-oh, oh-oh
You need to calm down
You're being too loud
And I'm just like oh-oh, oh-oh, oh-oh, oh-oh, oh-oh (Oh)
You need to just stop
Like can you just not step on his gown?
You need to calm down

And we see you over there on the internet
Comparin' all the girls who are killing it
But we figured you out
We all know now we all got crowns
You need to calm down


Oh-oh, oh-oh, oh-oh, oh-oh, oh-oh
You need to calm down
You're being too loud (You're being too loud)
And I'm just like oh-oh, oh-oh, oh-oh, oh-oh, oh-oh (Oh)
You need to just stop
Like can you just not step on our gowns?
You need to calm down


You need to just stop
Like can you just not step on our gowns?
You need to calm down`,coverArt:"https://images.genius.com/4e3da44f0e8c56b5106ff38754def441.512x512x1.jpg"},{songTitle:"You're Not Sorry by Taylor Swift",lyrics:`All this time I was wasting hoping you would come around
I've been giving out chances every time and all you do is let me down
And it's taken me this long, baby, but I've figured you out
And you're thinking we'll be fine again, but not this time around


You don't have to call anymore
I won't pick up the phone
This is the last straw
Don't wanna hurt anymore
And you can tell me that you're sorry
But I don't believe you, baby, like I did before
You're not sorry (No no no no)

You're looking so innocent, I might believe you if I didn't know
Could've loved you all my life if you hadn't left me waiting in the cold
And you've got your share of secrets
And I'm tired of being last to know, oh
And now you're asking me to listen 'cause it's worked each time before


But you don't have to call anymore
I won't pick up the phone
This is the last straw
Don't wanna hurt anymore
And you can tell me that you're sorry
But I don't believe you, baby, like I did before
You're not sorry (No no no no)
You're not sorry (No no no no)


You had me crawling for you, honey, and it never would've gone away, no
You used to shine so bright, but I watched all of it fade


So you don't have to call anymore
I won't pick up the phone
This is the last straw
There's nothing left to beg for
And you can tell me that you're sorry
But I don't believe you, baby, like I did before
You're not sorry (No no no no)
You're not sorry (No no no no)
(No, no, no, no, no, no, no, no, no, no, no, no)
Woah, oh, oh oh, oh oh oh
(Oh, oh, oh, no, no, no, no, no, no)`,coverArt:"https://images.genius.com/50ffaf6b0a962bae986a1c8640bf6426.600x600x1.jpg"},{songTitle:"You're Not Sorry (CSI Remix) by Taylor Swift",lyrics:`All this time, time, time...
All this time, time, time...


All this time I was wasting hoping you would come around
I've been giving out chances every time and all you do is let me down
And it's taken me this long, baby, but I've figured you out
And you're thinking we'll be fine again but not this time around


You don't have to call anymore
I won't pick up the phone
This is the last straw
Don't wanna hurt anymore
And you can tell me that you're sorry
But I don't believe you, baby, like I did before
You're not sorry (No no no no)

You're looking so innocent
I might believe you if I didn't know
Could've loved you all my life if you hadn't left me waiting in the cold
And you've got your share of secrets
And I'm tired of being last to know
And now you're asking me to listen 'cause it's worked each time before but


You don't have to call anymore
I won't pick up the phone
This is the last straw
Don't wanna hurt anymore
And you can tell me that you're sorry
But I don't believe you, baby, like I did before
You're not sorry (No no no no)
You're not sorry (No no no no)


You had me crawling for you, honey, and it never would've gone away, no
You used to shine so bright but I watched all of it fade so


So you don't have to call anymore
I won't pick up the phone
This is the last straw
There's nothing left to beg for
And you can tell me that you're sorry
But I don't believe you, baby, like I did before
You're not sorry (No no no no)
You're not sorry (No no no no)
(No, no, no, no, no, no, no, no, no, no, no, no)
Woah, oh, oh oh, oh oh oh
(Oh, oh, oh, no, no, no, no, no, no)`,coverArt:"https://images.genius.com/3efe3cd5d1c06d3a8459a89e81671a73.600x600x1.jpg"},{songTitle:"You're Not Sorry (Taylor's Version) by Taylor Swift",lyrics:`All this time I was wasting hoping you would come around
I've been giving out chances every time and all you do is let me down
And it's taken me this long, baby, but I've figured you out
And you're thinking we'll be fine again, but not this time around


You don't have to call anymore
I won't pick up the phone
This is the last straw
Don't wanna hurt anymore
And you can tell me that you're sorry
But I don't believe you, baby, like I did before
You're not sorry
No, no, oh-oh

You're looking so innocent, I might believe you if I didn't know
Could've loved you all my life if you hadn't l\u0435ft me waiting in the cold
And you've got your shar\u0435 of secrets
And I'm tired of being last to know, oh
And now you're asking me to listen
'Cause it's worked each time before


But you don't have to call anymore
I won't pick up the phone
This is the last straw
Don't wanna hurt anymore
And you can tell me that you're sorry
But I don't believe you, baby, like I did before
You're not sorry
No, no, oh-oh
You're not sorry
No, no, oh-oh


You had me crawling for you, honey
And it never would've gone away, no
You used to shine so bright, but I watched all of it fade


So you don't have to call anymore
I won't pick up the phone
This is the last straw
There's nothing left to beg for
And you can tell me that you're sorry
But I don't believe you, baby, like I did before
You're not sorry
No, no, oh-oh
You're not sorry
No, no, oh-oh

No, no, no, no, no, no, no, no, no, no, no, no
Woah, oh, oh oh, oh oh oh
Oh, oh, oh, no, no, no, no, no, no`,coverArt:"https://images.genius.com/cb3e5556ace37f591ee4247fb36ba50b.1000x1000x1.jpg"}];function V(e,n,o){const t=e.slice();return t[5]=n[o],t}function K(e){let n,o=e[5]+"",t,a;return{c(){n=w("span"),t=B(o),a=w("br")},m(i,s){A(i,n,s),y(n,t),y(n,a)},p(i,s){s&2&&o!==(o=i[5]+"")&&Q(t,o)},d(i){i&&k(n)}}}function U(e){let n=e[5].match(/\w/),o,t=n&&K(e);return{c(){t&&t.c(),o=re()},m(a,i){t&&t.m(a,i),A(a,o,i)},p(a,i){i&2&&(n=a[5].match(/\w/)),n?t?t.p(a,i):(t=K(a),t.c(),t.m(o.parentNode,o)):t&&(t.d(1),t=null)},d(a){t&&t.d(a),a&&k(o)}}}function ke(e){let n,o,t,a,i,s,u,r,h,f,c,T,p,b,M,E,v=e[1],m=[];for(let l=0;l<v.length;l+=1)m[l]=U(V(e,v,l));return{c(){n=w("figure"),o=w("img"),a=x(),i=w("div"),s=w("blockquote"),u=w("p");for(let l=0;l<m.length;l+=1)m[l].c();r=x(),h=w("div"),f=w("cite"),c=B(e[0]),T=B(" by Taylor Swift"),p=x(),b=w("button"),b.textContent="Random Swiftie Lyric",J(o.src,t=e[2])||g(o,"src",t),g(o,"alt","Album cover"),g(o,"width","200px"),g(o,"class","m-3"),g(s,"class","mb-2 blockquote text-light d-flex align-items-center"),de(s,"min-height","200px"),g(f,"title","Source Title"),g(h,"class","blockquote-footer mb-2 svelte-dqur8x"),g(n,"class","p-4 w-100 rounded mb-2 d-flex align-items-center justify-content-around svelte-dqur8x"),g(b,"id","test")},m(l,I){A(l,n,I),y(n,o),y(n,a),y(n,i),y(i,s),y(s,u);for(let d=0;d<m.length;d+=1)m[d].m(u,null);y(i,r),y(i,h),y(h,f),y(f,c),y(h,T),A(l,p,I),A(l,b,I),M||(E=le(b,"click",e[3]),M=!0)},p(l,[I]){if(I&4&&!J(o.src,t=l[2])&&g(o,"src",t),I&2){v=l[1];let d;for(d=0;d<v.length;d+=1){const R=V(l,v,d);m[d]?m[d].p(R,I):(m[d]=U(R),m[d].c(),m[d].m(u,null))}for(;d<m.length;d+=1)m[d].d(1);m.length=v.length}I&1&&Q(c,l[0])},i:W,o:W,d(l){l&&k(n),he(m,l),l&&k(p),l&&k(b),M=!1,E()}}}function pe(e,n,o){let t,a,i;const s=r=>r[Math.floor(Math.random()*r.length)],u=()=>{let r=s(fe),h=r.lyrics.split(`

`);if(o(1,a=s(h).split(`
`)),a.length<3||a.length>4)return u();o(0,t=r.songTitle),o(2,i=r.coverArt)};return u(),[t,a,i,u]}class ve extends te{constructor(n){super(),oe(this,n,pe,ke,$,{})}}function Ae(e){let n,o,t,a,i,s,u;return s=new ve({}),{c(){n=w("main"),o=w("div"),o.innerHTML=`<h1 class="display-1 mt-3 mb-4 fw-bold svelte-xe5mp6">swiftie</h1> 
    <p class="fst-italic svelte-xe5mp6" style="font-size: 25px;">You can&#39;t spell awesome without me!</p>`,t=x(),a=w("div"),i=w("div"),be(s.$$.fragment),g(o,"class","text-center"),g(i,"class","col-9 col-lg-6"),g(a,"class","d-flex justify-content-center align-items-center")},m(r,h){A(r,n,h),y(n,o),y(n,t),y(n,a),y(a,i),ee(s,i,null),u=!0},p:W,i(r){u||(Z(s.$$.fragment,r),u=!0)},o(r){ce(s.$$.fragment,r),u=!1},d(r){r&&k(n),ne(s)}}}class Te extends te{constructor(n){super(),oe(this,n,null,Ae,$,{})}}new Te({target:document.getElementById("app")});
