export const state = () => ({
  sidebar: false,
  lessons: [
    {
      title_sans: 'श्रीगणेशाय नमः',
      title_eng: 'Benedictory Verses - Mangala śloka ',
      id: 1,
      slokas: [
        {
          sloka: 'अमरीकबरीभारभ्रमरीमुखरीकृतम् ।<br>दूरीकरितु दुरितं गीरीचरणापङ्कजम् ॥',
          sloka_explanation: {
            eng: 'May the foot- lotus of Gauri made resonant by the female bees in the masses of braided hairs of the prostrating goddesses!'
          }
        },
        {
          sloka: 'परस्परतपःसम्पत्फलायितपरस्परौ।<br>प्रपञ्चमातापितरौ प्राञ्चौ जायापती स्तुमः॥',
          sloka_explanation: {
            eng: 'We glorify that ancient husband and wife, the parents of the universe, each of whom became the fruit of the penance treasure of the other.'
          }
        },
        {
          sloka: 'अलङ्कारेषु बालानामवगाहनसिद्धये।<br>ललितः क्रियते तेषां लक्ष्यलक्षणसंग्रहः॥',
          sloka_explanation: {
            eng: 'This elegant treatise on Alankaras with their  concise definitions and apt examples has been composed (by me) for the purpose of enabling the young students to understand the ornaments easily'
          }
        }
      ]
    },
    {
      title_sans: 'उपमालङ्कारः',
      title_eng: 'Upamālaṅkāra - Simile',
      id: 2,
      slokas: [
        {
          sloka: 'उपमा यत्र सादृश्यलक्ष्मीरुल्लसति द्वयोः। <br>',
          sloka_explanation: {
            sans: 'यत्र उपमान-उपमेययोः सहृदय-हृदयाह्लादकत्वेन चारुसादृश्यम् उद्भूततया उल्लसति व्यङ्ग्यमर्यादा विना स्पष्टं प्रकाशत तत्र उपमालङ्कारः।',
            eng: 'When the beauty of equality between the thing equated and the thing equated to pleases the hearts of connoisseurs, it is known as "Upamā"'
          },
          examples: [
            {
              text: 'हंसीव कृष्ण! ते कीर्तिः स्वर्गङ्गामवगाहते॥',
              explanation: {
                sans: '<p>इयं च पूर्णोपमा इत्युच्यते। तत्रोपमानोपमेय साधारणधर्मोपमावाचकानां चतुर्णां प्रयोगे पूर्णेत्युच्यते <br>हंसी कीर्तिः स्वर्गङ्गावगाहनमिव शब्दश्चेत् एतेषाम् उपमान-उपमेय-साधारण-धर्मोपमा-वाचकानां चतुर्णामपि उपादानात्‌। </p>',
                eng: '<p>O Krishna, thy fame like a she-swan enters the celestial Ganges (or pervades the celestial regions and this earth).</p><p>This is an example of ‘simile complete’; for, it contains all the four essentials of comparison,which are –</p><table><thead><th></th><th></th><th>In the present example</th></thead><tr><td>1. उपमेयम्, वर्ण्यम् or विषयः</td><td>The object compared, i.e, the subject of comparison, such as face etc.</td><td>कीर्तिः - Fame</td></tr><tr><td>2. उपमानम्, अवर्ण्यम् or विषयी</td><td>The object compared to, i.e, the standard of comparison, such as moon, lotus etc.</td><td>हंसी - swan </td></tr><tr><td>3. साधारणधर्मः or सामान्यधर्मः or simply धर्मः </td><td>The common attribute, i.e, the characteristic resemblance between the two objects (the object compared and the object compared to); or the quality of the said two objects that occasions their similitude such as charmingness or the like.</td><td>अवगाहते i.e, अवगाहनक्रिया - ‘The act of entering or pervading’ – the common attribute</td></tr><tr><td>4. उपमावाचकः or simply वाचकः </td><td>The word implying comparison, such as इव ‘as’ or the like.</td><td>इव - like</td></tr></table><br><p>कीर्तिः ‘fame’, यशस् ‘reputation’ and हासः ‘laughter’ are always described as white according to the convention of the poets. Hence, the fame of Krishna is compared to a swan which is of white colour.</p>'
              }
            }
          ]
        },
        {
          sloka: 'वर्ण्योपमानधर्माणामुपमावाचकस्य च।<br>एकद्वित्र्यनुपादानैर्भिन्ना लुप्तोपमाष्टधा॥',
          sloka_explanation: {
            sans: '<p>उपमेयादीनां चतुर्णां मध्ये एकस्य द्वयोस्त्रयाणां वा प्रतिपादकशब्दाभावेन लुप्तोपमेत्युच्यते। </p><p>सा चाष्टधा। यथा –</p><ul><li> वाचकलुप्ता </li><li>धर्मलुप्ता </li><li>धर्मवाचकलुप्ता </li><li>वाचकोपमेयलुप्ता </li><li> उपमानलुप्ता </li><li> वाचकोपमानलुप्ता </li><li>धर्मोपमानलुप्ता </li><li>धर्मोपमानवाचकलुप्ता </li></ul>',
            eng: '<h3>Word meanings</h3><table><tr><td>वर्ण्य-उपमान-धर्माणां </td><td>of the object compared, the object compared to, the common attribute</td></tr><tr><td>उपमावाचकस्य च  </td><td>and of the word implying comparison.</td></tr><tr><td>एक-द्वि- त्रि- अनुपादानात् </td><td>by the omission of the one, two or three</td></tr><tr><td>अष्टधा</td><td>eightfold</td></tr><tr><td>भिन्ना</td><td>divided</td></tr><tr><td>लुप्तोपमा</td><td>elliptical simile</td></tr><tr><td>(भवति)</td><td>(becomes)</td></tr></table><h3>Summary of the verse</h3><p>By the omission of one, two or three (of the four requisites of simile complete, i. e., the object compared, the object compared to, the common attribute and the word implying comparison) the simile becomes elliptical and is eightfold, which are :-</p><ol><li>वाचकलुप्ता-SIMILE in the omission of the word implying comparison.</li><li>धर्मपुल्ता- SIMILE in the omission of the common attribute.</li><li>धर्मवाचकलुप्ता- SIMILE in the omission of the common attribute and of the Word implying comparison.</li><li>वाचकोपमेयलुप्ता- SIMILE in the omission of the word implying comparison and of the object compared.</li><li>उपमानवाचकलुप्ता- SIMILE in the omission of  the object compared to and the word implying comparison.</li><li>उपमानलुप्ता- SIMILE in the omission of the object compared to.</li><li>उपमानवाचकधर्मलुप्ता- SIMILE in the omission of the object compared to, of the word implying comparison and of the common attribute.</li><li>उपमानधर्मलुप्ता- SIMILE in the omission of the object compared to and of the common attribute.</li>'
          },
          examples: [
            {
              text: 'तडिद्गौरीन्दुतुल्यास्या कर्पूरन्ती दृशोर्मम।<br>कान्त्या स्मरवधूयन्ती दृष्टा तन्वी रहो मया॥',
              explanation: {
                sans: '<p>तत्रोपमानलोपरहिताश्चत्वारो भेदाः ‘तडिद्गौरी’ – इत्यादिश्लोकेन प्रदर्शिताः।</p><h3>वाचकलुप्ता</h3><p>तत्र ‘तडिद्गौरी’ इत्यत्र वाचकलोपस्तडिदिव गौरीत्यर्थे ‘उपमानामि सामान्यवचनैः (पा. २।१।५५) इति समासविधायकशास्त्रकृतः।</p><h3>धर्मलुप्ता</h3><p>‘इन्दुतुल्यास्या’ इत्यत्र धर्मलोपः, स त्वैच्छिको न शास्त्रकृतः, कान्त्या इन्दुतुप्यास्येत्यपि वक्तुं शक्यत्वात्‌।</p><h3>धर्मवाचकलुप्ता</h3><p>‘कर्पूरन्ती’ इत्यत्र धर्मवाचकलोपः कर्पूरमिवाचरन्तीत्यर्थे विहितस्य कर्पूरवदानन्दात्मकाचारार्थकस्य किप्‌ इवशब्देन सह लोपात्‌।</p><p>अत्र धर्मलोप; ऐ्च्छिकः, ननयोरानन्दात्मकतया कर्पूरन्तीति तदुपादानस्यापि संभावादिति।</p><h3>वाचकोपमेयलुप्ता</h3><p>‘कान्त्या स्मरवधूयन्ती’ इत्यत्र वाचकोपमेयलोपः अत्र कान्त्येति विशेषणसामर्थ्यात्स्वात्मानं कामवधूमिवाचरन्तीत्यर्थस्य गम्यमानतया स्वात्मन उपमेयस्य सहोपमावाचकेनानुपादानात्स त्वैच्छिकः; स्वात्मानं स्मरवधूयन्तीत्युपमेयोपादानस्यापि संभवात्‌।</p>',
                eng: '<p>Examples of the first four Elliptical Similes in their order:</p><h3>Word Meaning:</h3><table><tr><td>तङिट्गौरी-</td><td> it (as) yellowish (as) the lightning</td></tr><tr><td>इन्दुतुल्यास्या</td><td>having the face like the moon.</td></tr><tr><td>मम</td><td>my</td></tr><tr><td>दृशोः</td><td>of eyes</td></tr><tr><td>कर्पूरन्ती</td><td>acts (like) the camphor</td></tr><tr><td>कान्त्या</td><td>by (her)loveliness</td></tr><tr><td>स्मरवधूयन्ती</td><td>acts (herself) like the Kama’s bride (Goddess of love)</td></tr><tr><td>(एवंविधा)</td><td>(Such a.)</td></tr><tr><td>तन्वी</td><td>slender woman</td></tr><tr><td>रहः</td><td>in a lonely place</td></tr><tr><td>मया</td><td>by me</td></tr><tr><td>दृष्टा</td><td>was seen. </td></tr></table><br><h3>Summary</h3><p>A slender woman was seen by me in a lonely place a, woman (as) yellowish as the lightning ; and, having the face like the moon, she acts (like) camphor to my eyes, and by (her) loveliness she acts (herself) like the Goddess of love.</p><h3>Example of the Elliptical Simile, No. 1,-in the omission of the word implying comparison (वाचकलुप्ता)</h3><br><p>तङिद्गौरी- If this compound is uncompounded, we have तङिद् इव गौरी , where :-</p><table><tr><td>तङिद् -</td><td>the object compared to</td></tr><tr><td>गौरी-</td><td>the common attribute</td></tr><tr><td>तन्वी </td><td>the object compared.</td></tr></table><br><p>We have, in this example, these 3 requisites, but the remaining requisite, the word इव, expressive of comparison, is indirectly omitted and in the expansion of the compound, it becomes expressed and so this is the example of the Elliptical Simile, No. 1,-in the omission of the word implying comparison (वाचकलुप्ता).</p><h3>Example of the Elliptical Simile, No. 2,-in the omission of the common attribute ( धर्मलुप्ता ).</h3><br><p>इन्दुतुल्यास्या,when uncompounded, becomes इन्दुना तुल्यं आस्यं यस्याः सा ‘she whose face is like the moon,’ where :-</p><table><tr><td>इन्दुः - </td><td>the object compared to</td></tr><tr><td>तुल्यम् - </td><td>the word implying comparison</td></tr><tr><td>आस्यम् - </td><td>the object compared</td></tr></table><br><p>Here, we have the above three requisites; and the remaining requisite--the common attribute such as charmingness &c., we have not got. Hence, this is the example of the Elliptical Simile, No. 2,-in the omission of the common attribute ( धर्मलुप्ता ).</p><p>Observe :-With regard to Elliptical Similes in the omission of the common attribute only, the word omission ‘लोपः’ is used strictly in the sense in which it is used in the Panini’s Sutra ’अदर्शनं लोपः’</p><p>(I. 1. 60) ‘The disappearance is called ‘लोपः’. With regard to the omissions of the other three, i.e., the object compared, the object compared to and the word implying comparison, they are indirectly omitted; but when the compounds which contain them are uncompounded, they come to light, and thus, We see, they are understood. Moreover, the student should note that, without these three requisites, either expressed or understood, there will be no simile at all.</p><h3>Example of the Elliptical Simile, No. 3,-in the omission of the common attribute and the word implying comparison (धर्मवाचकलुप्ता)</h3><br><p>कर्पूरन्ती दृशोर्मम । कर्पूरन्ती is the present participial noun, feminine gender, of the nominal verb ‘कर्पूरति’ having the क्विप् affix expressive of comparison omitted. If it is uncompounded, it becomes कर्पूरमिव आचरन्तौ ‘she acts like the camphor’, where :-</p><table><tr><td>तन्वौ</td><td>in the second line of the sloka is the object compared and</td></tr><tr><td>कर्पूरम्</td><td>is the object compared to.</td></tr></table><br><p>Thus, we have here only the above two requisites and the other two ingredients of comparison, the common attribute and the word implying comparison, are omitted. Hence, this is the example of the Elliptical Simile, No. 3,-in the omission of the common attribute and the word implying comparison (धर्मवाचकलुप्ता)</p><h3>Example of the Elliptical Simile, No. 4,-in the omission of the word implying comparison and the object compared (वाचकोपमेयलुप्ता)</h3><br><p>कान्त्या स्मरवधूयन्ती-by (her) loveliness, she acts (herself) like Kama’s bride. The compound स्मरवधूयन्ती is the present participial noun, feminine gender, of the nominal verb स्मरवधूयति having the affix ‘kyach’ (क्यच्) expressive of comparison. If it is uncompounded, it becomes आत्मानम् स्मरवधूम् इव आचरन्तौ ;  where we have</p><table><tr><td>स्मरवधू - </td><td>the object compared to</td></tr><tr><td>कान्त्या - </td><td>the common attribute</td></tr></table><br><p>Only  two essentials of comparison. The other two, i.e., the object compared आत्मानम्  ‘herself’ and the word expressive of comparison इव ‘as’ are indirectly omitted. Hence, we have the example of the Elliptical Simile, No. 4,-in the omission of the word implying comparison and the object compared (वाचकोपमेयलुप्ता)</p>'
              }
            },
            {
              text: 'यत्तया मेलनं तत्र लाभो मे यश्च तद्रतेः।<br>तदेतत्काकतालीयमवितर्कितसंभवम्‌॥',
              explanation: {
                sans: '<p>‘काकतालीय’ इत्यत्र काकतालशब्दौ वृत्तिविषये काकतालसमवेतक्रियावर्तिनौ, तेन काकागमनमिव तालपतनमिव काकतालमितीवार्थे ‘समासाच्च तद्विषयात्‌’ (पा. ५।३।१०६) इति ज्ञापकात्समासः।</p><p>उभयत्रोपमेयं स्वस्य क्वचिद्गमनं तत्रैव रहसि तन्व्या अवस्थानं च।</p>तेन स्वस्य तस्याश्च समागमः काकतालसमागमसदृश इति फलति।</p><p>ततः ‘ काकतालमिव काकतालीय‌म्‌’ इति द्वितीयस्मिन्निवार्थे ‘समासाच्च तद्विषयात्‌’ (पा. ५।३।१०६) इति सूत्रेण ‘इवे प्रतिकृतौ’ (पा. ५।३।९६) इत्यधिकारस्थेन छ-प्रत्ययः।</p><h3>उपमानलुप्ता, वाचकोपमानलुप्ता </h3><p>तथा च पतनदलितं तालफलं यथा काकेनोपभुक्तम्‌, एवं रहोदर्शनक्षुभितहृदया तन्वी तालफलोपभोगरुपस्य हओपमानस्यानुपादानात्प्रत्ययार्थोपमायामुपमानलोपः, समासार्थोपमायां वाचकोपमानलोपः ।</p><h3>धर्मोपमानलुप्ता</h3><p>सर्वोऽप्ययं लोपश्छप्रत्ययविधायकशास्त्रकृतः, अवितर्कितसंभवमिति साधारणधर्मस्यानुपादाने प्रत्ययार्थोपमायां धर्मोपमानलोपः।</p><h3>धर्मोपमानवाचकलुप्ता</h3><p>समासार्थोपमायां धर्मोपमानवाचकलोप इति सूक्ष्मया दृष्ट्यावधारितम्‌।</p>',
                eng: '<p>Examples of the Elliptical Similes Nos. 5 and 6 are discussed here. </p><h3>Word meanings</h3><table><tr><td>तत्र - </td><td>there, i.e., in that lonely place</td></tr><tr><td>मे - </td><td>my</td></tr><tr><td>तया - </td><td>with that (lady)</td></tr><tr><td>यत् - </td><td>which </td></tr><tr><td>मेलनम् - </td><td>meeting</td></tr><tr><td>यः - </td><td>which</td></tr><tr><td>तदू रतेः - </td><td>of the sexual intercourse with that lady</td></tr><tr><td>लाभः - </td><td>gain</td></tr><tr><td>तदू - </td><td>that</td></tr><tr><td>एतदू - </td><td>this</td></tr><tr><td>अवितर्कितसम्भवम् - </td><td>accidental or unexpected occurrence</td></tr><tr><td>काकतालीयम्</td><td>like the maxim of the crow and the palm fruit</td></tr></table><br><h3>Summary</h3><p>My meeting with that lady, in that lonely place, and my gain of sexual intercourse with that lady- each is an accidental occurrence like the maxim of the crow and the palm fruit.</p><h3>Examination of the compound काकतालीयम् </h3><br><p>This is the most puzzling example. The compound काकतालीयम्  must be first analyzed ; but its analysis can be best understood only when the Panini’s Sutra समासाच्च तद्विषयात् (V. 3. 106) with its commentary is rightly and fully understood. This Sutra contains 3 words and one word छः is to be supplied from the preceding Sutra (V. 3. 105) and the full Sutra stands thus :-</p><p>समासात् च तद्- विषयात् छः ।</p><p>Meaning: The affix Chha. ( ईय ) comes, also in the sense of  ‘like this’, after a compound noun containing in itself the force of ‘like this’ (hidden).</p><h4 class="text-xs-center">Kasika commentary on the Sutra</h4><br><ul><li>तद् इत्यनेन प्रकृतः इवार्थः निर्दिश्यते -By the Word तद् the sense of इव the subject of discussion, is referred to.</li><li>इवार्थविषयात् समासात् अपरस्मिन् इवार्थे एव छः प्रत्ययो भवति - The affix Chha ( ईय ) comes, only in the second sense of इव ‘like this’, after a compound containing in itself the force of इव.</li></ul><h4>Examples</h4><ol><li>काकतालीयम् -Like the maxim of the crow (काक) and the palm fruit (ताल).</li><li>अजाकृपाणीयम् - Like the death of a goat (अजा) by the accidental falling of a. sword ( कृपाणा ).</li><li>अन्धकर्त्तिकीयम्- the accidental falling of a quail ( वर्त्तिकी ) into the hands of a blind person (अन्धक ).</li></ol><h4>Explanation of the example</h4><table><tr><td>अतर्कितोपनतं चित्रीकरणम् उच्यते-</td><td>Unintentional and strange coincidences are referred to here.</td></tr><tr><td>तत् कथम्-</td><td>How is that.</td></tr><tr><td>काकस्य आगमनम् याट्टच्छिकम्</td><td>The coming of the crow is accidental.</td></tr><tr><td>तालस्य पतनं च</td><td>As also the (sudden) fall of the palm fruit (on the head of the crow).</td></tr><tr><td>तेन तालेन पतता काकस्य वधः कृतः</td><td>By the palm fruit thus falling, the death of the crow occurred.</td></tr><tr><td>एवं एव देवदत्तस्य तत्र आगमनम्</td><td>In the very same manner, the coming of Devadatta. (a person) there.</td></tr><tr><td>दस्यूनां च उपनिपातः</td><td>In the same manner, the sudden attack of robbers (upon Devadatta).</td></tr><tr><td>तैश्च तस्य वधः कृतः</td><td>By them (robbers) his (Devadatta’s) death occurred.</td></tr><tr><td>तत्र यो देवदत्तस्य दस्यूनां च समागमः, सः काकतालसमागमसदृशः</td><td>There, the coincidence of the person Devadatta and the robbers is like that of the crow and the palm fruit.</td></tr><tr><td>इति एकः उपमार्थः</td><td>This is the first sense of ‘like this’ (in the compound काकतालम्).</td></tr><tr><td>अतश्च देवदत्तस्य वधः , सः काकतालवधसदृसः</td><td>Then, the killing of Devadatta is like that of the crow by the fall of the palm fruit.</td></tr><tr><td>इति द्वितीयः उपमार्थः</td><td>This is the second sense of ‘like this’.</td></tr><tr><td>तत्र प्रथमे, समासः</td><td>In the first case, we have the sense of इव  in the compound (काकतालम् hidden).</td></tr><tr><td>द्वितीये, प्रत्ययः</td><td>In the second case, We have the same, expressed in the affix छ (in the compound ककतालीयम्).</td></tr><tr><td>समासश्च अयम् अस्मादेव ज्ञापकात्</td><td>The implication of such a compound, having the sense of ‘like this’ hidden, is indicated by this Sutra, only.</td></tr><tr><td>नहि  अस्य अपरं लक्षणं अस्ति-</td><td>There is no other rule for the formation of this compound but this indication (as no such compound with the Force of इव is taught in the chapter on compounds).</td></tr></table><p>By a careful study of this Sutra with its commentary, we come to know that the compound काकतालीयम् contains two senses of  “इव” = like this’ :</p><ul><li>The first sense is hidden in the compound काकतालम्  and the second sense is expressed by means of the affix chha in the compound काकतालीयम्.</li><li>The compound काकतालम्, if uncompounded, becomes काकः इव, तालमिव  which again become काकागमनमिव ‘like the coming of the crow’ and तालफलपतनमिव ‘like the Falling of the palm fruit’.</li></ul><h3>Example of the Elliptical Similes No. 5 - In the omission of the object compared to and the word implying comparison.</h3><p>From the sloka quoted above, let us first take the example for the Elliptical Simile, No. 5-in the omission of the object compared to and the word implying comparison and consider the same.</p><p>यत्तया मेलनम् तत् अवितर्कितसंभवं काकतालम् where</p><p>मेलनम्  is the object compared and अवितर्कितसंभवम् is the common attribute. Here, we have only the above two essentials of comparison. The other two the object compared to and the word implying comparison, are both hidden in the compound काकतालम्. The coming of the person (पुरुषागमनम्) is compared to the coming of the crow (काकागमनम्) and the coming of the lady is compared to the falling of the palm fruit (तालफलपतनम्). The union of these two, i.e., the person and the lady (तयोः मेलनम् ) which is the object compared) is like that of the crow and the palm fruit (काकतालसमागमसदृशम्). The Word समागमः, the object compared to, and the word, इव, implying comparison, are both omitted. Hence, we have the Elliptical Simile, No. 5 - in the omission of the object compared to and the word implying comparison.</p><h3>Example for the Elliptical Simile No. 6 - in the omission of the object compared to</h3><p>Let us then consider the example for the Elliptical Simile No. 6.</p><p>लाभो मे यश्च तद्रतेः<br>तदेतत् काकतालीयम् अवितर्कितसंभवम् ॥</p>Where: <table><tr><td>लाभः</td><td>is the object compared,</td></tr><tr><td>अवितर्कितसंभवम्</td><td>is the common attribute and the compound</td></tr><tr><td>काकतालीयम्</td><td>contains the object compared to,</td></tr><tr><td>उपभोगः</td><td>eating, hidden and the word implying comparison expressed by the affix छ (ईय) because the compound, if uncompounded, becomes</td></tr><tr><td> काकतालम् इव = काककृततालोपभोगसदृशः</td><td> ‘like the eating of the palm fruit by the crow’:</td></tr></table><p>In this example, we have the above three ingredients of comparison; and the fourth, the object compared to, is omitted. Hence, this is the example of the Elliptical Simile, No. 6-in the omission of the object compared to.</p><h3>Examples of the Elliptical Simile, No. 7 and 8</h3><p>Now, if we take away the common attribute अवितर्कितसंभवम् from the sloka which contains the examples for the Elliptical Similes Nos. 5 and 6 and substitute in its place “अभवत् किं ब्रवीमि ते” it so chanced ; what shall I tell you’ ; and read the sloka. thus :-</p><p>यत्तया मेलनं तत्र लाभो मे यश्च तद्रतेः ।<br>तदेतत्काकतालीयमभवन् किं ब्रवीमि ते ॥</p><p>We have here the omission of the common attribute in the above two examples.</p><h4>In the first example :-</h4><p>मेलनम्  is the object compared and, of the other three essentials of comparison, the common attribute is directly omitted, and the object compared to and the word implying comparison are indirectly omitted in the compound काकतालम् as explained before and so we have the example of the Elliptical Simile, No. 7, in the omission of the object compared to the word implying comparison and the common attribute (उपमानवाचकधर्मलुप्ता).</p><h4>In the second example-</h4><p>लाभः  is the object compared and the compound काकतालीयम् contains the object compared to hidden and the word implying comparison expressed in the affix 5 and We have no common attribute ; so we have the example of the Elliptical Simile, No. 8,—in the omission of the object compared to and of the common attribute (उपमानधर्मलुप्ता).</p><h3>Difference between Simile and other types of Alaṅkāras</h3><p>This ornament उपमा is distinguishable from certain other ornaments such as अनन्वयः No. II. ‘Comparison Absolute,’ रूपकम् No. V.-Metaphor, उपमेयोपमा No. III.-Reciprocal Comparison, and व्यतिरिकः  No. XX.-Dissimilitude.</p><p>In the Rupaka, the resemblance is suggested whereas it is expressed here.</p><p>In the Comparison Absolute, only one object is compared to itself. Here, two different objects are compared.</p><p>In the Reciprocal Comparison, two sentences are employed ; here, only one sentence.</p><p>In the Dissimilitude, contrast also is stated, whereas it is not so in this figure.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अनन्वयालङ्कारः',
      title_eng: 'Ananvayālaṅkāra - Comparison Absolute',
      id: 3,
      slokas: [
        {
          sloka: 'उपमानोपमेयत्वं यदेकस्यैव वस्तुनः।<br>इन्दुरिन्दुरिव श्रीमानित्यादौ तदनन्वयः॥',
          sloka_explanation: {
            sans: 'एकस्यैव वस्तुनः उपमानोपमेयत्ववर्णनमनन्वयः।   वर्ण्यमानमपि स्वस्य स्वेन साधर्म्यं नान्वेतीति व्युत्पत्तेः।  अनन्वयिनोऽप्यर्थस्याभिधानं सदृशान्तरव्यवच्छेदेनानुपमत्वद्योतनाय।',
            eng: '<h3>Word meaning</h3><table><tr><td>एकस्य एव</td><td>of only one object on hand.</td></tr><tr><td>यद्</td><td>which like the moon itself</td></tr><tr><td>उपमानोपमेयत्वम्</td><td>the relation of the object compared to and that compared</td></tr><tr><td>तत्</td><td>that</td></tr><tr><td>  श्रीमान्</td><td>glorious</td></tr><tr><td>इन्दुः</td><td>moon</td></tr><tr><td>इन्दुः इव</td><td>like the moon itself</td></tr><tr><td>इत्यादौ</td><td>in the illustrations like this</td></tr><tr><td>अनन्वयः</td><td>the ﬁgure comparison absolute</td></tr></table><h3>Definition of Comparison Absolute</h3><p>When the object compared to and the object compared are one and the same, or in other words, when one and the same object is compared to itself, it is Comparison Absolute</p><p>Meaning of the word Ananvaya:</p><table><tr><td>अनन्वयः = नास्ति यस्य सः: <br>अन्वयः = </td><td>connection</td></tr><tr><td>यस्य सः = </td><td>want of connection with any other object in the world in respect of comparison.</td></tr></table>'
          },
          examples: [
            {
              text: 'इन्दुरिन्दुरिव श्रीमान्‌',
              explanation: {
                sans: '<p>‘इन्दुरिन्दुरिव श्रीमान्‌’ इत्युक्ते श्रीमत्त्वेन चन्द्रस्य नान्यः सदृशोऽस्तीति सदृशान्तरव्यवच्छेदो लक्ष्यते।</p><p>ततश्च स्वस्य स्वेनापि सादृश्यासंभवादनुपमेयत्वे पर्यवसानम्‌॥</p>',
                eng: '<p>The glorious moon is like the moon itself.</p><p>In this figure, a sameness of terms would be more expedient for the really understanding of the identity of the object at the very hearing. ‘इन्दुः इन्दुरिव’ holds better than ‘इन्दुः चन्द्रः इव’ although the latter is a Synonym of the former.</p>'
              }
            },
            {
              text: 'गगनं गगनाकारः सागरः सागरोपमः।<br>रामरावणयोर्युद्धं रामरावणयोरिव॥',
              explanation: {
                sans: '<p>पूर्वोदाहरणे श्रीमत्त्वस्य धर्मस्योपादानमस्ति।</p><p>इह तु गगनादिषु वैपुल्यादेर्धर्मस्य तन्नास्तीति विशेषः</p>',
                eng: '<p>(As regards spaciousness), the sky is like the sky itself. (As regards vastness), the ocean is similar to the ocean itself. (As regards awfulness), the battle between Rama and Ravana is like the battle between Rama and Ravana.</p><p>The self-comparison of the ocean, sky and the battle is to show the non-existence of their like.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'उपमेयोपमालङ्कारः',
      title_eng: 'Upameyopamālaṅkāra - Reciprocal Comparison',
      id: 4,
      slokas: [
        {
          sloka: 'पर्यायेण द्वयोस्तच्चेदुपमेयोपमा मता ।<br>',
          sloka_explanation: {
            sans: 'द्वयोः पर्यायेणोपमानोपमेयत्वकल्पनं तृतीयसदृशव्यवच्छेदार्थम्‌।',
            eng: '<h3>Word meanings</h3><table><tr><td>द्वयोः</td><td>Of the two, i.e., the object compared to and that compared</td></tr><tr><td>पर्यायेण</td><td>In turn, i.e., alternation</td></tr><tr><td>तत्</td><td>That i.e., the position of upamana and upameya (taken from the preceding sloka)</td></tr><tr><td>चेत्</td><td>If</td></tr><tr><td> उपमेयोपमा</td><td>Reciprocal comparison</td></tr><tr><td>मता </td><td>Is termed</td></tr></table><h3>Definition</h3><p>That, i.e., the position of Upamana and Upameya, when alternated is declared the Reciprocal Comparison.</p>'
          },
          examples: [
            {
              text: 'धर्मोऽर्थ इव पूर्णश्रीरर्थो धर्म इव त्वयि ॥',
              explanation: {
                sans: 'धर्मार्थयोर्हि कस्यचित्केनचित्सादृश्ये वर्णिते तस्याप्यन्येन सादृश्यमर्थसिद्धमपि मुखतो वर्ण्यमानं तृतीयसदृशव्यवच्छेदं फलति॥',
                eng: '<h3>Word meanings</h3><table><tr><td>त्वयि </td><td>In thee</td></tr><tr><td>धर्मः </td><td>(thy) virtue</td></tr><tr><td>अर्थः इव</td><td>Like (thy) riches</td></tr><tr><td>पूर्ण श्रीः</td><td>Full</td></tr><tr><td>अर्थः</td><td>(thy) riches</td></tr><tr><td>धर्मः इव</td><td>Like (thy) virtue</td></tr></table><p>In you, O King! thy virtue is as full as (thy) riches ; and thy riches as full as thy virtue.</p><p>Here, the object of comparing the king’s virtue with his riches and again his riches with his virtue excluding the other similar objects is to show that there is nothing else equal to the virtue &c., of the king.</p><p>This figure is possible only in two sentences as the interchange of comparisons is impossible in one sentence. The Upamana in the first sentence becomes Upameya in the second and the Upameya in the first becomes Upamana in the second in the total absence of a third thing to be compared to. But the figure अनन्वयः No. II. Is possible in one sentence, the object compared to and that compared being the same in the total absence of a second thing to he compared to.</p>'
              }
            },
            {
              text: 'खमिव जलं जलमिव खं हंस इव चन्द्रश्चन्द्र इव हंस”।<br>कुमुदाकारास्तारास्ताराकाराणि कुमुदानि॥',
              explanation: {
                sans: 'पूर्वत्र पूर्णश्रीइति धर्म उपात्तः।<br>इह निर्मलत्वादिधर्मो नोपात्त इति भेदः।<br>उदाहरणद्वयेऽपि प्रकृतयोरेवोपमानोपमेयत्वकल्पनम्‌।<br>राज्ञिधर्मार्थसमृद्धेः शरदि गगनसलिलादिर्नैर्मल्यस्य च वर्णनीयत्वात्‌ प्रकृताप्रकृतयोरप्येषा संभवति॥',
                eng: ' '
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'प्रतीपालङ्कारः',
      title_eng: 'Pratīpālaṅkāra - Converse',
      id: 5,
      slokas: [
        {
          sloka: 'प्रतीपमुपमानस्योपमेयत्वप्रकल्पनम्‌।<br>',
          sloka_explanation: {
            sans: 'प्रसिद्धोपमानोपमेयभावः प्रातिलोम्यात्प्रतीपम्‌।',
            eng: '<h3>Word Meanings</h3><table><tr><td>उपमानस्य - </td><td>Of the object compared to</td></tr><tr><td>उपमेयत्वप्रकल्पनम् - </td><td>Assumption as the object compared</td></tr><tr><td>प्रतीपम् - </td><td>The figure converse </td></tr></table><h3>Definition:</h3><p>The assumption of the object compared to as the object compared‘ i.e., when Upamana (moon &c.) is compared to Upameya (Face &c.), or in other words, when the usual form of comparison is inverted, it is the Converse.</p>'
          },
          examples: [
            {
              text: 'त्वल्लोचनसमं पद्म त्वद्वक्त्रसदृशो विधुः',
              explanation: {
                sans: 'हे सुंदरि- पद्मंत्वल्लोचन समंभवनेत्र तुल्यंतधाविधुश्चन्द्रः त्वद्वक्त्र सदृशः भवन्मुख तुल्यः ॥',
                eng: '<h3>Word Meanings</h3><table><tr><td>पद्मम् - </td><td>Lotus</td></tr><tr><td>विधुः - </td><td>Moon</td></tr><tr><td>त्वल्लोचनसमम् - </td><td>Equal to thy eye</td></tr><tr><td>त्वद्वक्त्रसदृशः - </td><td>Equal to thy face</td></tr></table>(Lady ! ) The lotus is like thy eyes ; and the moon is like thy face.'
              }
            }
          ]
        }
      ],
      types: 4,
      type: [
        {
          sloka: 'अन्योपमेयलाभेन वर्ण्यस्यानादरश्च तत्‌।',
          sloka_explanation: {
            sans: '<p>अत्युत्कृष्टगुणतया वर्ण्यमानस्यान्यत्र स्वसादृश्यमसहमानस्योपमेयं किंचित्प्रदर्श्य तावता तस्य तिरस्कारो द्वितीयं प्रतीपं पूर्वस्मादपि विच्छित्तिविशेषशालि।</p>',
            eng: '<h3>Word meanings</h3><table><tr><td>अन्योपमेयलाभेन - </td><td>By reason of gain of another, i.e., the object compared to as the object compared</td></tr><tr><td>वर्ण्यस्य - </td><td>Of the object on hand (face & c)</td></tr><tr><td>अनादरः - </td><td>Disregard</td></tr><tr><td>च</td><td>Also</td></tr><tr><td>तत् - </td><td>That i.e., the figure converse</td></tr></table><h3>Definition</h3><p>When the subject on hand (face &c.) is disregarded by reason-of the gain of another object (i.e., moon &c.) which is not the subject under discourse it is also termed Converse.</p>'
          },
          examples: [
            {
              text: 'अलं गर्वेण ते वक्त्र! कान्त्या चन्द्रोऽपि तादृशः॥',
              explanation_sans: 'हे वक्त्र हे मुख- तेतव गर्वेण अहंकारेण- अलं- कांत्या मत्तुल्योनास्तीति गर्वं जहिकुतः – कान्त्या शोभयाभवादृशः त्वत्तुल्यः चंद्रः विद्यत इतिशेषः अत्राप्युपमेय भूत चन्द्रस्यलाभेन प्रकृतमुख तिरस्कार वर्णनात् लक्षण संगतिः ॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>वक्त्र! - </td><td>Face!</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>गर्वेण - </td><td>By the pride</td></tr><tr><td>अलम् - </td><td>Enough</td></tr><tr><td>कान्त्या - </td><td>In splendor</td></tr><tr><td>चन्द्रः - </td><td>The moon</td></tr><tr><td>भवादृशः - </td><td>Like thee</td></tr></table>O Face! enough of thy pride ; (there is) the moon equal to thee in splendor.'
            }
          ]
        },
        {
          sloka: 'वर्ण्योपमेयलाभेन तथान्यस्याप्यनादरः ।<br>',
          sloka_explanation: {
            sans: 'अत्युत्कृष्टगुणतया द्वचिदप्युपप्मानभावमसहमानस्यावर्ण्यस्य वर्ण्योपमेयं परिकल्प्य तावता तस्य तिरस्कारः पूर्वप्रतीपवैपरीत्येन तृतीयं प्रतीपम्‌।',
            eng: '<h3>Word meanings</h3><table><tr><td>वर्ण्योपमेयलाभेन</td><td>By reason of the gain of the object compared which is the subject on hand</td></tr><tr><td>अन्यस्य - </td><td>Of the object which is not the subject on hand</td></tr><tr><td>अपि</td><td>Also</td></tr><tr><td>अनादरः - </td><td>Disregard</td></tr><tr><td>तथा - </td><td>So, i.e., the converse</td></tr></table><h3>Definition</h3><p>When the object which is not the subject on hand is disregarded by reason of gain of another object which is the subject on hand, it is declared the third kind of Converse.</p>'
          },
          examples: [
            {
              text: 'कः क्रौर्यदर्पस्ते मृत्यो त्वत्तुल्याः सन्ति हि स्त्रियः',
              explanation_sans: 'हे मृत्योते तव- क्रौर्यदर्पः क्रूरत्व गतोगर्वः पमेय लाभेन तथान्यस्याप्यनादरः । कः क्रौर्य दर्पस्तेमृत्योत्वत्तुल्या स्संतिहस्त्रियः ॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>मृत्यो! - </td><td>Death!</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>क्रौर्यदर्पः - </td><td>Pride on account of cruelty</td></tr><tr><td>कः - </td><td>What</td></tr><tr><td>हि - </td><td>Because</td></tr><tr><td>स्त्रियः - </td><td>Women</td></tr><tr><td>त्वत्तुल्याः - </td><td>Equal to you</td></tr><tr><td>सन्ति - </td><td>There are</td></tr></table><p>O death! wherefore dost thou bear the pride on account of cruelty; because, there are (many) Women equal to thee (in cruelty).</p>'
            }
          ]
        },
        {
          sloka: 'वर्ण्येनान्यस्योपमाया अनिष्पत्तिवचश्च तत्‌।<br>',
          sloka_explanation: {
            sans: 'अवर्ण्ये वर्ण्योपमित्यनिष्पत्तिवचनं पूर्वेभ्य उत्कर्षशालि चतुर्थं प्रतीपम्‌।',
            eng: '<h3>Word Meanings</h3><table><tr><td>वर्ण्येन - </td><tdBy the object on hand (i.e., face & c.)</td></tr><tr><td>अन्यस्य - </td><td>Of the object not on hand</td></tr><tr><td>उपमायाः - </td><td>Of the resemblance</td></tr><tr><td>अनिष्पत्तिवचः - </td><td>The assertion of non accomplishment</td></tr><tr><td>च - </td><td>Also</td></tr><tr><td>तत् - </td><td>That i.e., the converse</td></tr></table><h3>Definition</h3><p>The assertion of non-accomplishment of the resemblance of the object not on hand with the object on hand is also termed the Converse.</p>'
          },
          examples: [
            {
              text: 'मिथ्यावादो हि मुग्धाक्षि ! त्वन्मुखाभं किलांबुजम् ॥',
              explanation_sans: 'उदाहरणे मुदापवादत्वोक्त्योपमित्यनिष्पत्तिरुद्धाटिता।',
              explanation_eng: '<h3>Word Meanings</h3><table><tr><td>मुग्धाक्षि! - </td><td>O beautiful-eyed lady!</td></tr><tr><td>अंबुजम् - </td><td>Lotus</td></tr><tr><td>त्वन्मुखाभम् - </td><td>Equal to thy face</td></tr><tr><td>मिथ्यावादः - </td><td>Untrue assertion</td><td>किल - </td><td>Truly</td></tr></table>O beautiful-eyed lady! The assertion that the lotus has the likeness of thy face is an untrue one. Hence, we see here that the resemblance between the two objects lotus and face being stated as untrue becomes an unaccomplished one and so it is the Converse.'
            }
          ]
        },
        {
          sloka: 'प्रतीपमुपमानस्य कैमर्थ्यमपि मन्वते।<br>',
          sloka_explanation: {
            sans: 'उपमेयस्यैवोपमानप्रयोजनधूर्वहत्वेनोपमानकैमर्थ्यमुपमानप्रातिलोम्यात्‌ पञ्चमं प्रतीपम्‌।',
            eng: '<table><tr><td>उपमानस्य - </td><td>Of the object compared to</td></tr><tr><td>कैमर्थ्यम् - </td><td>The sense of “what is the use of”</td></tr><tr><td>अपि</td><td>also</td></tr><tr><td>प्रतीपम् - </td><td>the Converse</td></tr><tr><td>मन्यते - </td><td>Is considered</td></tr></table><p>The assertion ‘ what is the use of the upamana ’ (With reference to the upameya which is the subject on hand) is also considered as one of the Pratipas.</p>'
          },
          examples: [
            {
              text: 'दृष्टं चेद्वदनं तन्व्याः किं पद्मेन किमिन्दुना ॥',
              explanation_sans: 'विषय्यभेदताद्रूप्यरञ्जनं विषयस्ययत् । रूपकं तत्त्रिधाधिकः क्रौर्यविषयेत्तुल्यो नास्तीत्यभिमानः मर्धः – कुतः – हियस्मात्कारणात् त्वत्तुल्याः क्रौर्यविषयेत्वत्समाः स्त्रियस्संति- त्वत्तुल्यानां क्रूर स्त्रीणां संभवा दहमेव क्रूर इतिवृदाभिमानं माकृथा इत्यर्थः – अत्र वर्ण्यानां क्रूरस्त्रीणां लाभेन अवर्ण्यस्य मृत्योस्तिरस्कारा ल्लक्षण संगतिः ',
              explanation_eng: '<table><tr><td>तन्व्याः</td><td>Of that slender lady</td></tr><tr><td>वदनम् - </td><td>The face</td></tr><tr><td>दृष्टं चेत् - </td><td>If seen</td></tr><tr><td>पद्मेन किम् - </td><td>What with the lotus</td></tr><tr><td>इन्दुना किम् - </td><td>What with the moon</td></tr></table>When the face of that slender lady was seen, what is the use of the lotus or of the moon.'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'रूपकालङ्कारः ',
      title_eng: 'Rūpakālaṅkāraḥ - Metaphor',
      id: 6,
      slokas: [
        {
          sloka: 'विषय्यभेदताद्रूप्यरञ्जनं विषयस्य यत्‌।<br>रूपकं तत्त्रिधाधिक्यन्यूनत्वानुभयोक्तिभिः॥',
          sloka_explanation: {
            sans: '<p>विषय्युपमानभूतं पद्मादि, विषयस्तदुपमेयभूतं वर्णनीयं मुखादि।</p><p>विषयिणो रुपेण विषयस्य रञ्जनं रूपकम्‌, अन्यरूपेण रूपवत्त्वकरणात्‌।</p><p>तच्च क्वचित्प्रसिद्धविषय्यभेदे पर्यवसितं, क्वचिद्भेदे प्रतीयमान एव तदीयधर्मारोपमात्रे पर्यवसितम्‌।</p><p>ततश्च रूपकं तावद्विधम्‌ – </p><ul><li>अभेदरूपकं </li><li>ताद्रूप्यरूपकं चेति।</li></ul><p>द्विविधमपि प्रत्येकं त्रिविधम्‌।</p><p>प्रसिद्धविषय्याधिक्यवर्णनेन तन्न्यूनत्ववर्णनेनानुभयोक्त्या चैवम रूपकं षड्विधम्‌।</p>',
            eng: '<h3>Word meanings</h3><table><tr><td>वत् - </td><td>Which</td></tr><tr><td>विषयस्य - </td><td>Of the object compared</td></tr><tr><td>विषय्यभेदरञ्जनम् - </td><td>The gratifying representation as non different from the object compared to</td></tr><tr><td>विषयिताद्रूप्यरञ्जनम्- </td><td>The gratifying representation as identifical with the object compared to</td></tr><tr><td>तत् - </td><td>That</td></tr><tr><td>रूपकम् - </td><td>The metaphor</td></tr><tr><td>तत् - </td><td>That (metaphor)</td></tr><tr><td>आधिक्य न्यूनत्व अनुभयोक्तिभिः - </td><td>In point of superiority, inferiority and the absence of both</td></tr><tr><td>विधा - </td><td>Is three fold</td></tr></table><h3>Definition</h3><p>The gratifying representation of the object compared (1) as non-different from, and (2) as identical with, the object compared to is termed Rupaka. And each (of the said two kinds) is again three-fold in point of (1) superiority, (2) inferiority and (3) the absence of both.</p><p>The Metaphor is first hold two-fold :-</p><ol><li>अभेदरूपकम् </li><li>ताद्रूप्यरूपकम् </li></ol><br><p>Each of these is again three-fold in point of superiority &c., of the object compared over the object compared to. </p><p>Hence the Metaphor is six-fold which are :-</p><ol><li>अधिकाभेदरूपकम् </li><li>न्यूनाभेदरूपकम् </li><li>अनुभयाभेदरूपकम् </li><li>अधिकताद्रूप्यरूपकम् </li><li>न्यूनताद्रूप्यरूपकम् </li><li>अनुभयताद्रूप्यरूपकम् </li></ol>'
          },
          examples: [
            {
              text: 'अयं हि धूर्जटिः साक्षाद्येन दग्धाः पुरःक्षणात्‌।',
              explanation: {
                sans: '<h3>अनुभयाभेदरूपकम् ।</h3><p>‘अयं हि’ इत्यादिसार्धश्लोकेनाभेदरूपकाणि - ‘येन दग्धा’ इति विशेषणेन वर्णनीये राज्ञि प्रसिद्धशिवाभेदानुरञ्जनाच्छिवस्य पूर्वावास्थातो वर्णनीयराजभावावस्थायां न्यूनत्वाधिक्ययोरवर्णनाच्चानुभयाभेदरूपकमाद्यम्‌।</p>',
                eng: '<h3>अनुभयाभेदरूपकम् ।</h3><h3>Word meanings</h3><table><tr><td>अयम् (राजा) - </td><td>This (king)</td></tr><tr><td>साक्षात् - </td><td>In person, in bodily form</td></tr><tr><td>धूर्जटिः</td><td>The God Siva</td></tr><tr><td>हि - </td><td>Indeed</td></tr><tr><td>येन - </td><td>By whom</td></tr><tr><td>क्षणात् - </td><td>In a moment</td></tr><tr><td>पुरः - </td><td>The cities (of his foes)</td></tr><tr><td>दग्धाः - </td><td>Were burnt</td></tr></table><p>This (king) is indeed the very God Siva in bodily form ; because by him the cities (of his foes) were burnt.</p><p>Here, the king, the upameya, who is said to have burnt the cities of his foes is represented as non-different from the God Siva, the upamana, the destroyer of the three cities of gold, silver and iron of the demon Tripura, and in the absence of any superiority or of inferiority between these two objects, we have the example of Rupaka No. 3.</p>'
              }
            },
            {
              text: 'अयमास्ते विना शम्भुस्तार्तीयीकं विलोचनम्‌॥',
              explanation: {
                sans: '<h3>न्यूनाभेदरूपकम्</h3><p>तृतीयलोचनप्रहाणोक्त्या पूर्वावस्थातो न्यूनताप्रदर्शनान्न्यूनाभेदरुपकं द्वितीयम्‌।</p><p>न्यूनत्ववर्णनमप्यभेदादार्ढ्यापादकत्वाच्चमत्कारि।</p>',
                eng: '<h3>न्यूनाभेदरूपकम्</h3><table><tr><td>अयम् (राजा) - </td><td>This (king)</td></tr><tr><td>तर्त्तीयौकम् - </td><td>Third</td></tr><tr><td>विलोचनम् - </td><td>Eye</td></tr><tr><td>विना - </td><td>Without</td></tr><tr><td>शंभुः - </td><td>God Siva</td></tr><tr><td>आस्ते - </td><td>Is or stands</td></tr></table><p>Here stands (before us) this (king), the God Sarnbhu himself without his third eye. </p><p>Here, the king, the upameya, having only two eyes is represented as non-different from the God Sambhu, the upamana, in the absence of his third eye, i.e., with an inferiority in respect of eyes. Hence, this is the example of Rupaka No. 2.</p>'
              }
            },
            {
              text: 'शम्भुर्विश्वमवत्यद्य स्वीकृत्य समदृष्टिताम्‌।',
              explanation: {
                sans: '<h3>अधिकाभेदरूपकम् </h3><p>विषमदृष्टित्वपरित्यागेन जगद्रक्षकत्वोक्त्या शिवस्य पूर्वावस्थातो वर्णनीयराहभावावस्थायामुत्कर्षविभावनादधिकाभेदरुपकं तृतीयम्‌।</p>',
                eng: '<h3>अधिकाभेदरूपकम् </h3><h3>Word meanings</h3><table><tr><td>एषः -</td><td> This (king)</td></tr><tr><td>शंभुः - </td><td>The God Sambhu</td></tr><tr><td>समदृष्टिताम् - </td><td>Equality, even eyes,impartiality</td></tr><tr><td>स्वीकृत्य - </td><td>Having assumed</td></tr><tr><td>विश्वम् - </td><td>The universe</td></tr><tr><td>अवति - </td><td>protects</td></tr></table><p>This (king), the God Sambhu himself, protects the world assuming impartiality (lit. even eyes).</p><p>Here, the God Sambhu is said to have assumed two eyes in protecting the world While his third fiery eye clever in consuming the world was now removed in as much as his present Work is the protection of the world and not consuming. Hence, We have here the superiority, i.e., the protection of the world with reference to the destruction of the world with the विषमदृष्टि uneven eyes or three eyes, and so this is the example of Rupaka No. 1.</p>'
              }
            },
            {
              text: 'अस्या मुखेन्दुना लब्धे नेत्रानन्दे किमिन्दुना॥',
              explanation: {
                sans: '<h3>अनुभयताद्रूप्यरूपकम् </h3><p>‘अस्या मुखेन्दुना इत्यादिसार्धश्लोकेन ताद्रूप्यरूपकाणि - एवमुत्तरेषु ताद्रूप्यरुपकोदाहरणेष्वपि क्रमेणानुभयन्यूनाधिकभावा उन्नेयाः।</p>',
                eng: '<h3>अनुभयताद्रूप्यरूपकम् </h3><h3>Word meanings</h3><table><tr><td>अस्याः - </td><td>Of this (lady)</td></tr><tr><td>मुखेन्दुना -</td><td>Face-moon</td></tr><tr><td>नेत्रानन्दे - </td><td>The delight of (our) eyes</td></tr><tr><td>लब्धे - </td><td>When attained</td></tr><tr><td>इन्दुना - </td><td>By the moon</td></tr><tr><td>किम् - </td><td>what</td></tr></table><p>When the delight of (our) eyes has been attained by (seeing) the face-moon of this (lady), What is the good of seeing the moon.</h3>Here, the face of the lady in question is represented as identical with the moon and in the absence of any superiority or of inferiority between them, we have here Rupaka No. 6.</p>'
              }
            },
            {
              text: 'साध्वीयमपरा लक्ष्मीरसुधासागरोदिता।',
              explanation: {
                eng: '<h3>न्यूनताद्रूप्यरूपकम् </h3><h3>Word meanings</h3><table><tr><td>इयं साध्वौ - </td><td>This virtuous women</td></tr><tr><td>असुधासागरोदिता - </td><td>Not born of the Milky Sea.</td></tr><tr><td>अपरा - </td><td>A second</td></tr><tr><td>लक्ष्मीः - </td><td>Goddess of fortune</td></tr></table><p>This virtuous woman is a second Lakshmi (Goddess of fortune) not born of the Milky Sea. </p><p>Here, two different objects, the virtuous woman and the Goddess of fortune, are represented as identical with an inferiority in as much as the former is not born of the Milky Sea and We have therefore here the example of Rupaka No.5.</p>'
              }
            },
            {
              text: 'अयम् कलङ्किनश्चन्द्रान्मुखचन्द्रोऽतिरिच्यते॥',
              explanation: {
                eng: '<h3>अधिकताद्रूप्यरूपकम् </h3><h3>Word meanings</h3><table><tr><td>अयम्</td><td>This</td></tr><tr><td>मुखचन्द्रः - </td><td>Face –moon</td></tr><tr><td>कलंकिनः - </td><td>Spotted</td></tr><tr><td>चन्द्रात् - </td><td>From the moon</td></tr><tr><td>अतिरिच्यते - </td><td>Is superior to</td></tr></table><p>This face-moon (of this lovely woman) is superior to the spotted moon.</p><p>Here, we have the ‘superiority expressed in the example which needs no comment.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'परिणामालङ्कारः',
      title_eng: 'Pariṇāmālaṅkāra - Commutation',
      id: 7,
      slokas: [
        {
          sloka: 'परिणामः क्रियार्थश्चेद् विषयी विषयात्मना ।<br>',
          sloka_explanation: {
            sans: '<p>यत्रारोप्यमाणो विषयी किंचित्कार्योपयोगित्वेन निबध्यमानः स्वतस्तस्य तदुपयोगित्वासंभवात्प्रकृतात्मना परिणतिमपेक्षते तत्र परिणामालङ्कारः।</p>',
            eng: '<h3>Word meanings</h3><table><tr><td>विषयी - </td><td>The object compared to</td></tr><tr><td>विषयात्मना - </td><td>Under the character of the object compared</td></tr><tr><td>क्रियार्थः - </td><td>Serving the purpose on hand</td></tr><tr><td>चेत् - </td><td>If</td></tr><tr><td>परिणामः - </td><td>The figure commutation</td></tr></table><h3>Definition</h3><p> When the upamana (i.e., the lotus &c., the object superimposed) is identified with the upameya. (i.e., the eye &o., the subject of superimposition) and serves the purpose on hand (i.e., seeing &c.) it is the Commutation.</p>'
          },
          examples: [
            {
              text: 'प्रसन्नेन दृगब्जेन वीक्षते मदिरेक्षणा॥',
              explanation: {
                sans: '<p>अत्रोदाहरणम्‌ – प्रसन्नेति।</p><p>अत्र हि अब्जस्य वीक्षणोपयोगित्वं निबध्यते, न तु दृशः। मयूरव्यंसकादिसमासेन उत्तरपदार्थप्राधान्यात्‌।</p><p>न चोपमितसमासाश्रयेण दृगब्जमिवेति पूर्वपदार्थप्राधान्यमस्तीति वाच्यम्‌ ।</p><p>प्रसन्नेति सामान्यधर्मप्रयोगात्‌।</p><p>‘उपमितं व्याघ्रादिभिः सामान्याप्रयोगे’ (पा० २।१।५६) इति तदप्रयोग एवोपमितसमासानुशासनात्‌।</p><p>अब्जस्य वीक्षणोपयोगित्वं न स्वात्मना संभवति।</p><p>अतस्तस्य प्रकृतदृगात्मना परिणत्यपेक्षणात्‌ परिनामालङ्कारः।</p>',
                eng: '<h3>Word meanings</h3><table><tr><td>मदिरेक्षणा॥ - </td><td>This lovely-lady</td></tr><tr><td>प्रसन्नेन - </td><td>Bright</td></tr><tr><td>दृगब्जेन - </td><td>Eye-lotus</td></tr><tr><td>दीक्षते - </td><td>sees</td></tr></table><p>This lady of lovely eyes beholds with her bright eye-lotus.</p><p>Here, the superimposed lotus not possessed of the power of beholding is identified with the lady’s eye, the subject of superimposition, and is made to serve the purpose on hand, i.e., the act of beholding. In the Rupaka, as per instance in the sentence ‘दृगञ्जं वीक्षे I see the eye-lotus,’ the imposed lotus served only to gratify the expression. In this figure, the act of seeing belonging to the subject of superimposition, the eye, is transferred to the object superimposed, the lotus, as in the present example.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'उल्लेखालङ्कारः',
      title_eng: 'Ullekhālaṅkāra - Representation',
      id: 8,
      slokas: [
        {
          sloka_explanation: {
            sans: '<p>यत्र नानाविधधर्मयोग्येकं वस्तु तत्तद्धर्मयोगरूपनिमित्तभेदेन अनेकेन ग्रहीत्रानेकधा उल्लिख्यते तत्र उल्लेखः।</p><p>अनेकधोल्लेखने रुच्यर्थित्वभयादिकं यथार्हं प्रयोजकम्‌। </p><p>रुचिरबिह्रतिः अर्थित्वं लिप्सा।</p>',
            eng: '<h3>Word meanings</h3><table><tr><td>एकस्य - </td><td>Of one (object)</td></tr><tr><td>बहभिः - </td><td>By different persons</td></tr><tr><td>बहुधा - </td><td>Under different characters</td></tr><tr><td>उल्लेखात् - </td><td>By delineating</td></tr><tr><td>उल्लेखः - </td><td>Representation</td></tr><tr><td>इष्यते - </td><td>Is regarded</td></tr><tr><td>सः - </td><td>That God Krishna</td></tr></table><h3>Definition</h3><p>When an object is delineated by different people under different characters, it is termed Representation.</p>'
          },
          examples: [
            {
              text: 'स्त्रीभिः कामोऽर्थिभिः स्वर्द्रुः कालः शत्रुभिरैक्षि सः ॥',
              explanation: {
                sans: '<p>‘स्त्रीभिः’ इत्याद्युदाहरणम्‌ अतैक एव राजा सौन्दर्यवितरणपराक्रमशालीति कृत्वा स्त्रीभिरर्थिभिः प्रत्यर्थिभिश्च रुच्यर्थित्वभयैः कामकल्पतरुकालरूपो दृष्टः।</p>',
                eng: '<h3>Word meanings</h3><table><tr><td>स्त्रीभिः - </td><td>By the women</td></tr><tr><td>कामः - </td><td>As God of love</td></tr><tr><td>ऐक्षि - </td><td>Was seen</td></tr><tr><td>अर्थिभिः - </td><td>By the mendicants</td></tr><tr><td>स्वर्द्रुः - </td><td>As the tree of paradise</td></tr><tr><td>शत्रुभिः - </td><td>By (his) foes</td></tr><tr><td>कालः - </td><td>As God of death</td></tr></table><p>He (God Krishna) was regarded as the God of love by the women, as the tree of paradise by the mendicants, and as the God of death by (his) foes.</p><p>Here, the one and the same object is represented as distinct by different beholders on different occasions according to their liking or taste.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka: 'एकेन बहुधोल्लेखेऽप्यसौ विषयभेदतः ।<br>',
          sloka_explanation: {
            sans: '<p>ग्रहीतृभेदाभावेऽपि विषयभेदाद्बहुधोल्लेखनादसावुल्लेखः।</p>',
            eng: '<h3>Word meanings</h3><table><tr><td>(एकस्य - </td><td>Of one object)</td></tr><tr><td>एकेन - </td><td>By one person</td></tr><tr><td>विषयभेदतः - </td><td>Through difference of peculiarities</td></tr><tr><td>बहुधा</td><td>Under various characters</td></tr><tr><td>उल्लेखे - </td><td>In the delineation</td></tr><tr><td>अपि - </td><td>Also</td></tr><tr><td>असौ - </td><td>That i.e., Representation</td></tr></table><h3>Definition</h3><p>When an object is delineated by one person, i.e., by one perceiver, under various characters through difference of peculiarities. it is also termed Representation.</p>'
          },
          examples: [
            {
              text: 'गुरुर्वचस्यर्जुनो कीर्तौ भीष्मः शरासने॥',
              explanation_sans: 'उदाहरणं श्लेषसंकीर्णम्‌।वचोविषये महान्पटुरित्यादिवद्बृहस्पतिरित्याद्यर्थान्तरस्यापि क्रोडीकरणात्‌।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>अयं (राजा) - </td><td>This (King)</td></tr><tr><td>वचसि- </td><td>In speech</td></tr><tr><td>गुरूः - </td><td>(is) grave or Brihaspati</td></tr><tr><td>कीर्त्तौ - </td><td>In fame</td></tr><tr><td>अर्जुनः - </td><td>(is) white or Arjuna</td></tr><tr><td>शरासने</td><td>In bow</td></tr><tr><td>भीष्मः</td><td>(is) terrible or Bhishma</td></tr></table><p>He ( the king ) is grave ( Brihaspati ) in speech, white ( Arjuna  in fame, and terrible ( Bhishma ) in bow.</p><p>Here, one and the same king is represented as distinct by one and the same beholder but through difference of peculiarities belonging to the object delineated.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'स्मृति-भ्रान्ति- संदेहालङ्काराः',
      title_eng: 'Smṛti (Reminiscence or Rhetorical Recollection) - bhrānti (Mistaker) - saṃdehālaṅkārā (Doubt)',
      id: 9,
      slokas: [
        {
          sloka: 'स्यात्स्मृतिभ्रान्तिसंदेहैस्तदङ्कालङ्कृतित्रयम्‌।<br>',
          sloka_explanation: {
            sans: 'स्मृतिभ्रान्तिसंदेहैः सादृश्यान्निबध्यमानैः स्मृतिभ्रान्तिमान्संदेह इति स्मृत्यादि-पदाङ्कितम्‌ अलङ्कार-त्रयं भवति।',
            eng: '<h3>Word meanings</h3><table><tr><td>स्मृति-भ्रान्ति-सन्देहैः - </td><td>By (expressions of) recollection, mistake and doubt</td></tr><tr><td>तदंकालङ्कृतित्रयम् - </td><td>Three figures that go by the names of Recollection, Mistaker and Doubt (respectively)</td></tr></table><h3>Definition</h3><p>(1) Expressions of a certain object capable of arousing an impression in the mind favoring a recollection, (2) mistaking a certain object to be something else similar to it, and (3) doubting the certainty of an object are respectively termed Reminiscence, the Mistaker and Doubt. Or in other words :-</p><ol><li>A recollection of an object, experienced before, that arises from the sight of some other object similar to it, is termed Reminiscence.</li><li>The Mistaker is the representation of an object, i.e., face &c. as something else, i.e., lotus &c., as suggested by the skill of the poet, on account of the close resemblance of those two objects.</li><li>When the certainty of an object under delineation is doubted through poetical skill, it is called Doubt.</li></ol>'
          },
          examples: [
            {
              text: 'पङ्कजं पश्यतः कान्तामुखं मे गाहते मनः॥',
              explanation: {
                sans: 'पंकजं पश्यतः मेमनः – कांतामुखं प्रियावदनं गाहते- स्मरत्यीत्यर्थः – पद्ममुखयोरत्यंत सादृश्यात् पद्मसंदर्शने सतितत्सदृशं प्रियामुखं मयास्मर्यत इत्यर्थः – अत्र मुखसदृश पद्मदर्शनेनत त्सदृशस्यमुखस्य स्मृतिवर्णनाल्लक्षसंगतिः ॥',
                eng: '<h3>Example of Reminiscence</h3><h3.Word meanings</h3><table><tr><td>पंकजम् - </td><td>Lotus</td></tr><tr><td>पश्यतः - </td><td>Seeing</td></tr><tr><td>मे मनः - </td><td>My mind</td></tr><tr><td>कांतामुखम् - </td><td>The face of the beloved</td></tr><tr><td>गाहते - </td><td>Enters, i.e., recollects</td></tr></table><h3>Meaning</h3><p>Seeing this lotus, my mind recollects the face of my beloved.</p>'
              }
            },
            {
              text: 'अयं प्रमत्तमधुपस्त्वन्मुखं वेत्ति पङ्कजम् ।',
              explanation: {
                sans: 'हे कांते अतं पुरोवर्ती प्रमत्तः मधुपः – मधुपानपरवशोभ्रमरः – त्वन्मुखं पंकजंवेत्ति अत्रमुखे पंकजत्व प्रतिपत्ति वर्णानाद्भ्रांति मदलंकारः',
                eng: '<h3>Example of the Mistaker</h3><h3>Word meanings</h3><table><tr><td>अयम् - </td><td>this</td></tr><tr><td>प्रमत्तमधुपः - </td><td>Intoxicated bee</td></tr><tr><td>त्वन्मुखम् - </td><td>Thy face</td></tr><tr><td>पंकजम् - </td><td>Lotus</td></tr><tr><td>वेत्ति - </td><td>Understands</td></tr></table><h3>Meaning</h3><p> (Lady ! ) this intoxicated bee understands thy face to be the lotus (through mistake). </p><p>The difference between this figure and the Rupaka (V) is, that, in the latter, we identify the face with the lotus without mistaking the one for the other, whereas, in this figure, the mistake is clearly expressed as in the foregoing example.</p>'
              }
            },
            {
              text: 'पङ्कजं वा सुधांशुर्वेत्यस्माकं तु न निर्णयः ।',
              explanation: {
                sans: 'पंकजंवा उतसुधांशुश्चंद्रोवा इत्येवं प्रकारेणास्माकंतुन निर्णयः – अनिश्चयः पंकजं वासुधांशुर्वेत्या कारकस्संशयो भवतीत्यर्थः – अत्रमुखे पंकजत्वसुधांशुत्व कोटिकसंदेह निबंधनात्संदेहालंकारः ॥',
                eng: '<h3>Example of Doubt</h3><h3>Word meanings</h3><table><tr><td>अस्माकम् - </td><td>To us</td></tr><tr><td>पंकजम् - </td><td>Lotus</td></tr><tr><td>वा - </td><td>Or</td></tr><tr><td>सुधांशुः - </td><td>Moon</td></tr><tr><td>वा - </td><td>Or</td></tr><tr><td>इति - </td><td>So</td></tr><tr><td>निर्णयः - </td><td>Decision</td></tr><tr><td>न - </td><td>Not.</td></tr></table><h3>Meaning</h3><p>We are not able to decide whether (the object before us) is the lotus or the moon nectar-rayed.</p><p>Thus, we sec that these three figures are founded upon the close resemblance, of the objects seen and experienced before, that gave rise to a recollection, mistake or doubt.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अपह्नुत्यलङ्कारः',
      title_eng: 'Apahnutyalaṅkāra - Concealment',
      id: 10,
      types: 6,
      type: [
        {
          sloka: '<h3>शुद्धापह्नुतिः - Concealment pure</h3>शुद्धापह्नुतिरन्यस्यारोपार्थो धर्मनिह्नवः।<br>',
          sloka_explanation: {
            sans: '<p>वर्णनीये वस्तुनि तत्सदृश-धर्मारोप-फलकस्तदीय-धर्म-निह्नवः  कविमति-विकासोत्प्रेक्षित-धर्मान्तरस्यापि निह्नवः शुद्धापह्नुतिः।</p>',
            eng: '<h3>Word meanings</h3><table><tr><td>अन्यस्य - </td><td>Of the object not on hand</td></tr><tr><td>आरोपार्थः - </td><td>Causing superimposition</td></tr><tr><td>धर्मनिह्नवः - </td><td>Denial of the character</td></tr><tr><td>शुद्धा</td><td>Pure</td></tr><tr><td>अपह्नुतिः - </td><td>Concealment</td></tr></table><h3>Definition</h3><p>Pure Concealment is the denial of the real character (of an object on hand such as moon & c.) for the purpose of superimposing (upon it) the character of another (object lotus &c., not on hand). </p>'
          },
          examples: [
            {
              text: 'नायं सुधांशुः किं तर्हि? व्योमगङ्गासरोरुहम्‌॥',
              explanation_sans: 'यथा चन्द्रे वियन्नदीपुण्डरीकत्वारोपफलकस्तदीयधर्मस्य चन्द्रत्वस्यापह्नवः।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>अयं - </td><td>This</td></tr><tr><td>सुधांशुः - </td><td>Moon</td></tr><tr><td>न - </td><td>Not</td></tr><tr><td>किं तर्हि - </td><td>Then, what is that</td></tr><tr><td>व्योमगंगासरोरुहम् - </td><td>The lotus of the celestial Ganges.</td></tr></table><p>This (the object before us) is not the moon (nectar-rayed) but it is the lotus of the celestial Ganges. </p>'
            }
          ]
        },
        {
          sloka: '<h3>हेत्वपह्नुतिः- Concealment with a reason</h3>स एव युक्तिपूर्वश्चेदुच्यते हेत्वपह्नुतिः।<br>',
          sloka_explanation: {
            sans: 'स एव अन्यस्यारोपार्थः प्रकृत धर्मनिह्नवः – युक्तिपूर्वश्चेत् सहेतुकोयदि- तर्हिहेत्वपह्नुतिरित्युच्यते- यत्र प्रकृतधर्मं युक्तिपूर्वकमपह्नुत्यान्यधर्नुः अरोप्यते तत्र हेत्वपह्नुतिरिति निष्कर्षः',
            eng: '<h3>Word Meanings</h3><table><tr><td>सः (धर्मनिह्नवः) - </td><td>The same i.e., the denial of the character</td></tr><tr><td>युक्तिपूर्वः - </td><td>Based upon the reasoning</td></tr><tr><td>चेत् - </td><td>If</td></tr><tr><td>हेत्वपह्नुतिः - </td><td>Concealment with a reason</td></tr><tr><td>उच्यते - </td><td>Is called</td></tr></table><h3>Definition</h3><p>The above, i.e., the ‘Concealment pure’ when based upon a reasoning, is termed हेत्वपह्नुतिः ।</p>'
          },
          examples: [
            {
              text: 'नेन्दुस्तीव्रो न निश्यर्कः सिंधोरौर्वोयमुत्थितः ॥',
              explanation_sans: 'अत्र चन्द्र एव तीव्रत्वनैशत्वयुक्तिभ्यां चन्द्रत्वसूर्यत्वापह्नवो वडवानलत्वारोपार्थः।',
              explanation_eng: '<h3>Word Meanings</h3><table><tr><td>अयम् - </td><td>This</td></tr><tr><td>इन्दुः - </td><td>Moon</td></tr><tr><td>न - </td><td>Not</td></tr><tr><td>तीव्रः - </td><td>Hot</td></tr><tr><td>निशि - </td><td>At night</td></tr><tr><td>अर्कः - </td><td>Sun</td></tr><tr><td>न - </td><td>Not</td></tr><tr><td>सिन्धोः - </td><td>Not from the ocean</td></tr><tr><td>उत्थितः - </td><td>Sprung up</td></tr><tr><td>और्वः - </td><td>The submarine fire.</td></tr></table>This is not the moon, (because it is) hot ; (not even) the sun, (because it is) night ; but it is the submarine fire come out of the ocean.'
            }
          ]
        },
        {
          sloka: '<h3>पर्यस्तापह्नुतिः - Concealment transferred</h3>अन्यत्र तस्यारोपार्थः पर्यस्तापह्नुतिश्च सः ।<br>',
          sloka_explanation: {
            sans: '<p>यत्र क्वचिद्वस्तुनि तदीयधर्मनिह्नवः अन्यत्र वर्णनीये वस्तुनि तस्य धर्मस्यारोपार्थः स पर्यस्तापह्नुतिः।</p>',
            eng: '<h3>Word meanings</h3><table><tr><td>अन्यत्र</td><td>On another object</td></tr><tr><td>तस्य - </td><td>Of that (object on hand)</td></tr><tr><td>आरोपार्थः - </td><td>Causing superimposition</td></tr><tr><td>सः - </td><td>That</td></tr><tr><td>पर्यतिः - Concealment transferred</td></tr></table><h3>Definition</h3><p>Paryastapahnuti is that in which the real character of an object (moon &c.) is denied and the same is superimposed upon another object (face of a damsel).</p>'
          },
          examples: [
            {
              text: 'नायं सुधांशुः किं तर्हि सुधांशुः प्रेयसीसुखम् ॥',
              explanation_sans: 'यथा चन्द्रे चन्द्रत्वनिह्नवो वणनीये मुखे तदारोपार्थः।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>अयं - </td><td>This</td></tr><tr><td>सुधांशुः - </td><td>Moon</td></tr><tr><td>न - </td><td>Not</td></tr><tr><td>हिं तर्हि - </td><td>Then which (is called moon)</td></tr><tr><td>प्रेयसीसुखम् - </td><td>The face of (my) beloved</td></tr><tr><td>सुधांशुः - </td><td>Moon</td></tr></table>This is not the moon (nectar-rayed). Then which is moon ? The face of my beloved is the moon (nectar-rayed-not being endowed with burning character).'
            }
          ]
        },
        {
          sloka: '<h3>भ्रान्तापह्नुतिः - Concealment under a mistake</h3>भ्रान्तापह्नुतिरन्यस्य शंकायां भ्रान्तिवारणे ।<br>',
          sloka_explanation: {
            sans: 'अन्यस्य इतर जनस्य – शंकायां तत्वाज्ञानेन अयथार्थ वस्तुनः भ्रान्तौ सत्यां भ्रान्तिवारणे सतितत्वस्वरूपकथनेन भ्रान्तिवारणे कृते सतिभ्रान्तापह्नुतिः – केनचिद्वक्त्राकिंचित्प्रकृत मुद्दिश्यवृत्तांते कथिते सतितस्या प्रकृतसाधारण्यादि तरजनस्य श्रोतुस्तत्वाज्ञानादुद्देश्य विषयिक शंकायां सत्यांवक्त्रातत्त्व कथनेन तद्भ्रान्तिवारणे कृतेसति- भ्रान्तापह्नावाख्योलंकारः ',
            eng: '<h3>Word meanings</h3><table><tr><td>अन्यस्य - </td><td>Of another person</td></tr><tr><td>शंकायाम् - </td><td>In doubt</td></tr><tr><td>भ्रान्तिवारणे - </td><td>In the removal of the mistake</td></tr><tr><td>भ्रान्तापह्नुतिः - </td><td>It is Concealment under a mistake</td></tr></table><h3>Definition</h3><p> When a person is in doubt (i.e., under a mistaken notion as to the real character of an ‘object on hand) and when that doubt is warded of (by the mention of the real thing), it is Bhrantapahnuti.</p>'
          },
          examples: [
            {
              text: 'तापं करोति सोत्कम्पं, ज्वरः किं? न सखि स्मरः ॥',
              explanation_sans: 'अत्र तापं करोतीति स्मरवृत्तान्ते कथिते तस्य ज्वरसाधारण्यादृजुबुद्ध्या सख्या ‘ज्वरः किम्‌’ इति पृष्टे, ‘न सखि! स्मरः” इति तत्त्वोक्त्या भ्रान्तिवारणं कृतम्‌।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>सोत्कंपम् - </td><td>Accompanied by trembling</td></tr><tr><td>तापम् - </td><td>Heat</td></tr><tr><td>करोति - </td><td>Produces</td></tr><tr><td>ज्वरः किम् - </td><td>Is it fever?</td></tr><tr><td>सखि - </td><td>Friend !</td></tr><tr><td>न - </td><td>No </td></tr><tr><td>स्मरः - </td><td>The God of love.</td></tr></table>(It) produces heat accompanied by the trembling of the body* Is it fever?  No, friend ! It is the God of love. '
            }
          ]
        },
        {
          sloka: '<h3>छेकापह्नुतिः -Concealment of the skilful</h3>इति छेकापह्नुतिरन्यस्य शङ्कातस्तथ्यनिह्नवे।<br>',
          sloka_explanation: {
            sans: 'कस्यचित्कञ्चित्प्रति रहस्योक्तावन्येन श्रुतायां स्वोक्तेस्तात्पर्यान्तरवर्णनेन तथ्य निह्नवे छेकापह्नुतिः।',
            eng: '<h3>Word meanings</h3><table><tr><td>अन्यस्य - </td><td>Of another person</td></tr><tr><td>शंकातः - </td><td>Owing to fear</td></tr><tr><td>तथ्यनिह्नवे - </td><td>For the purpose of denying the real sense</td></tr><tr><td>छेकापह्नुतिः - </td><td>Concealment of the skilful</td></tr></table><h3>Definition</h3><p>When a person (having once given expression to some real object) denies the same (by interpreting it otherwise) for fear of being understood by another person (in its real sense), it is termed the Concealment of the skilful.</p>'
          },
          examples: [
            {
              text: 'प्रजल्पनमत्पदे लगनः कान्तः किं? नहि नूपुरः॥',
              explanation_sans: 'यथा नायिकाया नर्मसखीं प्रति ‘प्रजल्पनमत्पदे लग्नः इति स्वनायकवृत्तान्ते निगद्यमाने तदाकर्ण्य ‘कान्तः किम्‌’ इति शङ्कितवतीमन्यां प्रति ‘नहि, नूपुरः’ इति निह्नवः।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>प्रजल्पन् - </td><td>Prattling</td></tr><tr><td>मत्पदे - </td><td>In my foot</td></tr><tr><td>लग्नः - </td><td>Clung</td></tr><tr><td>कान्तः किम् - </td><td>Is it (thy) lover?</td></tr><tr><td>न हि - </td><td>No, no</td></tr><tr><td>नूपुरः - </td><td>Anklet</td></tr></table>Pratling (something he) clung to my foot.* Is it thy lover? No, no. It is my anklet.'
            }
          ]
        },
        {
          sloka: '<h3>कैतवापह्नुतिः - Concealment of the deceitful</h3>कैतवापह्नुतिर्व्यक्तौ व्याजाद्यैर्निह्नुतेः पदैः।<br>',
          sloka_explanation: {
            sans: 'व्याजाद्यैः व्याजच्छलकैतवादिभिः पदैग्निह्नुतेः धर्मनिह्नवस्य- व्यक्तौ सत्यांस्फुटत्वेनति- कैतवापह्नुतिरित्युच्यते- यत्रकविनाकंरतोपह्नवस्या भावेपि असत्यत्व प्रतिपादक कैतवादिपदैरेव धर्मापह्नवः क्रियते- तत्रकैतवापह्नुतिरिति निष्कर्षः',
            eng: '<h3>Word meanings</h3><table><tr><td>व्याजादौः निह्नुतैः पदैः - </td><td>By words of denial व्याजः &c.</td></tr><tr><td>व्यक्तौ - </td><td>If expressed</td></tr><tr><td>कैतवापह्नुतिः - </td><td>Concealment of the deceitful</td></tr></table><h3>Definition</h3><p>When (the denial of the real character of an object on hand) is clearly expressed by the words of denial व्याज (under the semblance of, under the pretext of) etc., it is the Concealment of the deceitful.</p><p>etc. includes such other words मिष, कपट, छल, छद्म. कैतव ।</p>'
          },
          examples: [
            {
              text: 'निर्यान्ति स्मरनाराचाः कांतादृक्पातकैतवात् ॥',
              explanation_sans: 'अत्रासत्यत्वाभिधायिना, ‘कैतव’ पदेन ;नेमे कान्ताकटाक्षाः, किन्तु स्मरनाराचाः’ इत्यपह्नवः प्रतीयते।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>कान्तादृक्पातकैतवात् - </td><td>Under the semblance of the glances of a damsel</td></tr><tr><td>स्मरनाराचाः - </td><td>The arrows of the God of love</td></tr><tr><td>निर्यान्ति - </td><td>Issue forth</td></tr></table>The arrows of the God of love issue forth under the semblance of the glances of a damsel.'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'उत्प्रेक्षालङ्कारः',
      title_eng: 'Utprekṣālaṅkāra - Poetical fancy',
      id: 11,
      slokas: [
        {
          sloka: 'संभावना स्यादुत्प्रेक्षा वस्तुहेतुफलात्मना।<br>उक्तानुक्तास्पदाद्यात्र सिद्धाऽसिद्धास्पदे परे॥',
          sloka_explanation: {
            sans: '<p>अन्य-धर्म-संबन्ध-निमित्तेनान्यस्यान्यतादात्म्य-संभावनमुत्प्रेक्षा ।</p><p>सा च वस्तु-हेतु-फलात्मतागोचरत्वेन त्रिविधा।</p><ul><li>स्वरूपोत्प्रेक्शा उक्तविषयाऽनुक्तविषया चेति द्विविधा।</li><li>हेतूफलोत्प्रेक्षे सिद्धविषयाऽसिद्धविषया चेति प्रत्येकं द्विविधे।</li></ul>',
            eng: '<h3>Word meanings</h3><table><tr><td>वस्तु-हेतु-फलात्मना - </td><td>Under the character of (1) nature (2) cause and (3) effect (of another object)</td></tr><tr><td>संभावना - </td><td>Imagining</td></tr><tr><td>उत्प्रेक्षा स्यात् - </td><td>Is Poetical fancy</td></tr><tr><td>अत्र - </td><td>Of these</td></tr><tr><td>आद्या - </td><td>First i.e., वस्तूत्प्रेक्षा</td></tr><tr><td>उक्त-अनुक्त- आस्पदा - </td><td>Where the occa- mentioned  or not mentioned</td></tr><tr><td>परे - </td><td>the other two i.e.,हेतूत्प्रेक्षा and फलोत्प्रेक्षा</td></tr><tr><td>सिद्ध-असिद्ध-आस्पदा - </td><td>Where the subject of the fancy is an  accomplished or unaccomplished one.</td></tr></table><h3>Definition</h3><p>The Poetical fancy is the imagining of an object on hand under the character of another object not on hand under three heads, viz., (1) nature, (2) cause and (3) effect. (And thus the figure is first three-fold).</p><p.these, the first वस्तूत्प्रेक्षा or as it is generally called स्वरूपोत्प्रेक्षा is two-fold according as the occasion of the fancy is mentioned or not mentioned. </p><p>The other two, i.e., हेतूत्प्रेक्षा  and फलोत्प्रेक्षा are each two-fold according as the subject of the fancy is an accomplished or unaccomplished one. </p>'
          }
        }
      ],
      types: 3,
      type: [
        {
          sloka_explanation: {
            sans: 'अत्र वस्तुनः कस्यचिद्वस्त्वन्तरतादात्म्यसंभावना प्रथमा स्वरूपोत्प्रेक्षेत्युच्यते।',
            eng: 'स्वरूपोत्प्रेक्षा is that in which the state, condition or natural appearance of an object is imagined by the poets to be the state, condition or natural appearance of another similar object. '
          },
          examples: [
            {
              text: '<h3>Example of स्वरूपोत्प्रेक्षा  (1) where the occasion of the fancy is mentioned.</h3>धूमस्तोमं तमः शंके कोकीविरहशुष्मणाम् ।',
              explanation_sans: 'रजनीमुखे सर्वत्र विसृत्वरस्य तमसो नैल्यदृष्टिप्रतिरोधकत्वादिधर्मसंबन्धेन गम्यमानेन निमित्तेन सद्यःप्रियविधटित-सर्वदेशस्थित-कोकाङ्गानाहृदुपगत-प्रज्वलिष्यद्विरहानलधूमस्तोम-तादात्म्य-संभावना-स्वरुपोत्प्रेक्षा तमसो विषयस्योपादानादुक्तविषया ।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>तमः - </td><td>The darkness</td></tr><tr><td>कोकीविरहशुष्मणाम् - </td><td>The fire of separation of Koki birds</td></tr><tr><td>धूमस्तोमं - </td><td>The mass of smoke</td></tr><tr><td>शंके - </td><td>I suspect</td></tr></table><p>I suspect (this) darkness to be the mass of smoke of the fire of separation of the koki birds.</td></tr><tr><td>Here, the darkness and the smoke are similar in appearance. The poet is aware that it is darkness. He then fancies it to be the smoke of the fire of separation of the koki birds which is the occasion of the fancy.</p>'
            },
            {
              text: '<h3>Example of स्वरूपोत्प्रेक्षा  (2) where the occasion of the fancy is not mentioned.</h3>लिम्पतीव तमोङ्गानि वर्षतीवाञ्जनं नभः॥',
              explanation_sans: 'तमोव्यापनस्य नभःप्रभृतिभूपर्यन्तसकलवस्तुसान्द्रमलिनीकरणेन निमित्तेन तमःकर्तृकलेपनतादात्म्योत्प्रेक्षा, नभःकर्तृकाञ्जनवषणतादात्म्योत्प्रेक्षा चनुक्तविषया स्वरुपोत्प्रेक्षा, उभयत्राअपि विषयभूततमोव्यापनस्यानुपादानात्‌।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>तमः - </td><td>darkness</td></tr><tr><td>अङ्गानि - </td><td>Limbs</td></tr><tr><td>लिम्पति इव - </td><td>Anoints as it were</td></tr><tr><td>नभः - </td><td>Sky</td></tr><tr><td>अञ्जनम् - </td><td>Collyrium</td></tr><tr><td>वर्षति इव - </td><td>Rains as it were</td></tr></table><p>The darkness anoints, as it were, the bodies, (lit. limbs). Sky rains, as it were, the collyrium. </p><p>This is the description of the thick darkness of a particular night. In the first sentence, the subject, i.e., the pervasion of darkness which was fancied by the poet as anointing the bodies is not mentioned.</p><p>In the second sentence too, the pouring down of the darkness which is the subject of the raining of co1lyrium is not mentioned. Hence we have two instances of  अनुक्तास्पदा वस्तूत्पेक्षा  where the occasion of the fancy is not mentioned.</p>'
            }
          ]
        },
        {
          sloka_explanation: {
            sans: 'अहेतोर्हेतुभावना हेतूत्प्रेक्षा',
            eng: 'हेतूत्प्रेक्षा is that in which something is imagined to be the effect of some other thing which cannot form its real cause.'
          },
          examples: [
            {
              text: '<h3>सिद्धविषया हेतूत्प्रेक्षा </h3> रक्तौ तवाङ्घ्री मृदुलौ भुवि विक्षेपणाद्ध्रुवम्‌।',
              explanation_sans: 'चरणयोः स्वतः सिद्धे रक्तिमनि वस्तुतो विक्षेपणं न हेतुरित्यहेतोस्तस्य हेतुत्वेन सम्भावना हेतूत्प्रेक्षा विक्षेपणस्य विषयस्य सत्त्वात्सिद्धविषया।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>तव - </td><td>thy</td></tr><tr><td>मृदुलौ - </td><td>Soft</td></tr><tr><td>अंघ्री - </td><td>Tender feet</td></tr><tr><td>भुवि - </td><td>On the floor</td></tr><tr><td>विक्षेपणात् - </td><td>By treading</td></tr><tr><td>ध्रुवम् - </td><td>Certainly</td></tr><tr><td>रक्तौ - </td><td>Red</td></tr></table><p> (Oh! Lady), thy soft feet have become red certainly by their trending on the floor.</p><p>Here, the treading on the floor is fancied as a cause for the natural redness of the lady’s feet; and the redness being an accomplished one, this is an instance of सिद्धविषया हेतूत्पेक्षा ।</p>'
            },
            {
              text: '<h3>असिद्धविषया हेतूत्प्रेक्षा</h3>त्वन्मुखाभेच्छया नूनं पद्मैर्वेरायते शशी॥',
              explanation_sans: 'चन्द्रपद्मविरोधे स्वाभाविके नायिकावदनकान्तिप्रेप्सा न हेतुरिति तत्र तद्धेतुत्वसंभावना हेतूत्प्रेक्षा वस्तुतस्तदिच्छाया अभावादसिद्धविषया।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>शशी - </td><td>moon</td></tr><tr><td>त्वन्मुखाभेच्छया - </td><td>With a desire of attaining the loveliness of thy face</td></tr><tr><td>नूनं - </td><td>Surely</td></tr><tr><td>पद्मैः - </td><td>With the lotuses</td></tr><tr><td>वैरायते - </td><td>Rivals</td></tr></table><p>Oh ! Damsel, the moon rivals with the lotuses, surely, with a desire of attaining the loveliness of thy face.</p><p>Here, the enmity, between the moon and the lotuses, on account of the latter’s contraction on the appearance of the former, is natural, and the cause ascribed to it i.e., with a desire of attaining the beauty of the lady’s face is not real and is due to the fancy of the poet. The cause not being an established one, this forms an instance of असिद्धविषया हेतूत्प्रेक्षा ।</p>'
            }
          ]
        },
        {
          sloka_explanation: {
            sans: 'अफलस्य फलत्वेनोत्प्रेक्षा फलोत्प्रेक्षेत्युच्यते।',
            eng: 'फलोत्प्रेक्षा is that in which something is imagined to be the cause of some other thing which is not its real effect. '
          },
          examples: [
            {
              text: '<h3>सिद्धविषया फलोत्प्रेक्षा</h3>मध्यः किं कुच्योर्धृत्यै बद्धः कनकदामभिः।',
              explanation_sans: 'मध्द्यः स्वयमेव कुचौ धरति न तु कनकदामबन्धत्वेनाध्यवसिताया वलित्रयशालिताया बलादिति मध्यकर्तृककुचधृतेस्तत्फलत्वेनोत्प्रेक्षा सिद्धविषया फलोत्प्रेक्षा।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>मध्यः - </td><td>waist</td></tr><tr><td>कुचयोः - </td><td>Of breasts</td></tr><tr><td>धित्यै -</td><td>For the support</td></tr><tr><td>किम् - </td><td>What</td><td>कनकदामभिः - </td><td>By the golden strings</td></tr><tr><td>बड्बः - </td><td>Was tied</td></tr></table><p>Lady ! Is it for the support of thy breasts that thy waist was tied by the golden strings (in the form of the lady’s folding) ?</p><p>Here, the lady’s breasts are naturally placed above the Waist; whereas, the poet describes the natural gold like folds over the navel of the lady as three golden strings tied round the waist as if to support the breasts. The fact being an accomplished one, this is an instance of सिद्धविषया फलोत्प्रेक्षा ।'
            },
            {
              text: '<h3>असिद्धविषया फलोत्प्रेक्षा</h3>प्रायोऽब्जं त्वत्पदेनैक्यं प्राप्तुं तोये तपस्यति॥',
              explanation_sans: 'जलजस्य जलावस्थितेरुदवासतपस्त्वेनाध्यवसितायाः कामिनीचरणसायुज्यप्राप्तिर्न फलमिति तस्या गगनकुसुमायमानायास्तपःफलत्वेनोत्प्रेक्षणादसिद्धविषया फलोत्प्रेक्षा',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>अञ्ज - </td><td>lotus</td></tr><tr><td>त्वत्पदेन - </td><td>With thy foot</td></tr><tr><td>ऐक्यम् - </td><td>The oneness, i.e., likeness</td><td>प्राप्तुं - </td><td>To get</td></tr><tr><td>प्रायः - </td><td>Perhaps</td></tr><tr><td>तोये - </td><td>In the water</td></tr><tr><td>तपस्यति - </td><td>Does penance</td></tr></table><p>Lady! the lotus does penance in the water perhaps to become identical with thy foot.</p><p>Here, the lotuses naturally grow in water, and the poet artfully attributes another cause for their अतिशयोक्तिः - standing in the water, which is no doubt the work of his imagination ; and this being an unaccomplished one, it is an instance of असिद्धविषया फलोत्प्रेक्षा ।</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अतिशयोक्त्यलङ्कारः',
      title_eng: 'Atiśayoktyalaṅkāra - Hyperbole',
      id: 12,
      types: 8,
      type: [
        {
          sloka: '<h3>शुद्धा रूपकातिशयोक्तिः - Pure Hyperbole Metaphorical</h3>रुपकातिशयोक्तिः स्यानिनिगीर्याध्यवसानतः।<br>',
          sloka_explanation: {
            sans: 'विषयस्य स्वशब्देनोल्लेखनं विनापि विषयिवाचकेनैव शब्देन ग्रहणं विषयनिगरणं तत्पूर्वकं विषयस्य विषयिरुपतयाऽध्यवसानमाहार्यनिश्चयस्तस्मिन्सति रुपकातिशयोक्तिः।',
            eng: '<h3>Word meanings</h3><table><tr><td>निगीर्य - </td><td>Having devoured</td></tr><tr><td>अध्यवसानतः - </td><td>Through introsusception</td></tr><tr><td>रूपकातिशयोक्तिः - </td><td>Metaphorical hyperbole (pure)</td></tr><tr><td>स्यात् - </td><td>Is</td></tr></table><h3>Definition<h3><p>When the object on hand (i.e., face &c. the upameya) is swallowed up, or completely taken in, by the upamana ‘moon & c.’ through introsusception, and the upameya. is therefore comprehended as upamana itself, or, in other words, (when the upamana is used for upameya), it is called ‘Hyperbole Metaphorical.</p><p>निगीर्य is indeclinable past participle in य of the root गॄ with नि ‘to devour’. अध्यवसानतः = अध्यवसान् + तस् अध्यवसान is the abstract noun formed by adding the affix अन to the root सो with prepositions अधि and अव, and तस् is a termination of the ablative case.</p><p>अध्यवसान means the identification of two objects of which the one is the object on hand and the other not on hand in such a manner that the former" is completely absorbed into the latter.</p><p>When a man comprehends face of it damsel as moon itself and calls it by the word ‘moon’ without mentioning the proper word ‘face’, then the face ‘upameya’ is said to have been swallowed up by the moon ‘upamana’.</p>'
          },
          examples: [
            {
              text: 'पश्य नीलोत्पलद्वन्द्वान्निःसरन्ति शिताः शराः॥',
              explanation_sans: 'यथा नीलोत्पलशरशब्दाभ्यां लोचनयोः कटाक्षाणां च ग्रहणपूर्वकं तद्रूपताध्यवसानम्‌।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>नीलोत्पलड्वंद्वात् - </td><td>From a pair of blue lotuses</td></tr><tr><td>शिताः - </td><td>Sharpened</td></tr><tr><td>शराः - </td><td>Shafts</td></tr><tr><td>निःसरंति - </td><td>Issue forth</td></tr><tr><td>पश्य - </td><td>See</td></tr></table><p>Behold ! There issue forth sharpened shafts from a pair of blue lotuses.</p><p>Here, the speaker, instead of saying ‘पश्यकान्ताक्षि युग्मात् कटाक्षा निःसरन्त्यहो there issue forth ogles or side-glances from a pair of eyes of this lovely woman who was before him, says thus by using the upamana words नीलोत्पल ‘blue lotus’ and शराः ‘shafts’ for their corresponding upameya. words the अक्षि ‘eye’ and कटाक्षाः ‘ogles’. Thus, we have the introsusception of the eyes and the ogles of a. beloved lady in the blue lotuses and shafts with which they are respectively identified. </p>'
            }
          ]
        },
        {
          sloka: '<h3>सापह्नवा रूपकातिशयोक्तिः - Hyperbole founded upon the ornament of Concealment </h3>यद्यपह्नतिगर्भत्वं सैव सपह्नवा मता।<br>',
          sloka_explanation: {
            sans: 'हे राजन् त्वत्सूक्तिषु भवदीय मृदुवाक्येष्वेद सुधास्थितेतिशेषः – त्वदीयमधुरवचस्येव अमृतं वर्तते नान्यत्रेर्धः – ननु चंद्रेसुधास्तीतिप्रवादः कथमिथ्यत आह- भ्रान्ताः इति- भ्रान्ताः – अज्ञानोपहताः जनाः – विधौ चन्द्रे- तांपथां पश्यन्ति- चन्द्रे सुधास्तीति व्यवहारोभ्रममूलक एवेत्यर्थः – सा चन्द्र, तासुधानभवतीत्यपह्निवगच्छेति सापह्नवा ॥',
            eng: '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>if</td></tr><tr><td>अपह्नुतिगर्भत्वम् - Founded upon the ornament ”concealment”</td></tr><tr><td>सैव सापह्नवा - </td><td>Metaphorical hyperbole pure itself founded upon the ornament of concealment</td></tr><tr><td>मता - </td><td>Is considered ( by the poet)</td></tr></table><h3>Definition</h3><p>If the same, i.e., the Metaphorical Hyperbole No. 1 (a) is founded upon the ornament of Concealment, then it is called  सापह्नवा रूपकातिशयोक्तिः ।</p>'
          },
          examples: [
            {
              text: ' त्वत्सूक्तिषु सुधा राजभ्रान्त्या पश्यन्ति तां विधौ॥',
              explanation_sans: 'अत्र ‘त्वत्सूक्तिमाधुर्यमेवामृतम्‌’ इत्यतिशयोक्तिश्चन्द्रमण्डलस्तह्ममृतं न भवतीत्यपह्नुतिगर्भा।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>राजन् - </td><td>O king</td></tr><tr><td>त्वत्सूक्तिषु - </td><td>In thy good speeches</td></tr><tr><td>सुधा - </td><td>Nectar</td></tr><tr><td>भ्रांताः - </td><td>Infatuated people</td></tr><tr><td>ताम् - </td><td>That</td></tr><tr><td>विधौ - </td><td>In the moon</td></tr><tr><td>पश्यन्ति - </td><td>See</td></tr></table><p>O king ! Nectar exists in thy good speeches ; but the infatuated people see the same in the moon.</p><p>Here, ‘the sweetness in the good speeches of the king is the nectar’—is the Hyperbole No. 1 (a) ; because the upamana. ‘nectar’ is used for upameya ‘sweetness’. Again, the nectar which is in the moon is denied and that which exists in the good speeches of the king is called nectar and hence we have the ornament of Concealment also.</p><p>* This comprehension brings about the superior excellence of the upameya over the upamana.</p>'
            }
          ]
        },
        {
          sloka: '<h3>भेदकातिशयोक्तिः - Hyperbole Asserting a difference</h3>भेदकातिशयोक्तिस्तु तस्यैवान्यत्ववर्णनम्‌।<br>',
          sloka_explanation: {
            sans: 'तस्यैवलोकसिद्धस्यैव अन्यत्ववर्णनं- सा- भेदकातिशयोक्तिस्स्यादित्यर्थः ॥',
            eng: '<h3>Word meanings</h3><table><tr><td>तस्यैव - </td><td>Of the object described</td></tr><tr><td>अन्यत्ववर्णनम् - </td><td>Description as another</td></tr><tr><td>भेदकातिशयोक्तिः - </td><td>Hyperbole asserting a difference</td></tr></table><h3>Definition</h3><p>When the thing described is comprehended as another, i.e., as extraordinary or strange or peculiar, it is called भेदकातिशयोक्तिः ।</p>'
          },
          examples: [
            {
              text: 'अन्यदेवास्य गांभीर्यमन्यड्वैर्यं महीपतेः ॥',
              explanation_sans: 'अत्र लोकप्रसिद्धगाम्भीर्याद्यभेदेऽपि भेदो वर्णितः।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>अस्य - </td><td>Of this (king)</td></tr><tr><td>गांभीर्यम् - </td><td>Profundity</td></tr><tr><td>अन्यदेव - </td><td>(is regarded) as another i.e., strange or extraordinary</td></tr><tr><td>धैर्यम् - </td><td>Courage</td></tr><tr><td>अन्यत् - </td><td>(is regarded) as another, i.e., strange</td></tr></table><p>Strange is the profundity of this king and strange is his courage also.</p><p>Here, the profundity and the courage of the king are considered as extraordinary because a difference is asserted between the profundity and courage of an ordinary man and those of the king.</p>'
            }
          ]
        },
        {
          sloka: '<h3>संबन्धातिशयोक्तिः - Hyperbole Asserting a connection</h3>संबन्धातिशयोक्तिः स्यादयोगे योगकल्पनम्‌।<br>',
          sloka_explanation: {
            sans: 'अयोगे असंबंधेयोगकल्पनं संबंधवर्णनमितियत्- सा संबंधातिशयोक्तिस्स्यात्',
            eng: '<h3>Word meanings</h3><table><tr><td>अयोगे - </td><td>When there is no connection</td></tr><tr><td>योगकल्पनम् - </td><td>Assertion of a connection</td></tr><tr><td>संबंधाक्तिः - </td><td>Hyperbole asserting a connection</td></tr><tr><td>स्यात् - </td><td>Is (called)</td></tr></table><h3>Definition</h3><p>When a connection is asserted where there is really none, it is called संबंधातिशयोक्तिः । </p>'
          },
          examples: [
            {
              text: 'सौधाग्राणि पुरस्यास्य स्पृशंति विधुमंडलम् ।',
              explanation_sans: 'अन्यपुरस्य सौधाग्राणि राजगृह शिखराणि- विधुमंडलं चंद्रमंडलं स्पृशंति- तादृगुन्नतानिभवंतीत्यर्धः – अत्र सौधाग्राणां विधुमंडल स्पर्शा संबंधेपि तत्संबंधोवर्णितः ॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>अस्य पुरस्य - </td><td>Of this town</td></tr><tr><td>सौधाग्राणि - </td><td>Tops of the mansions</td></tr><tr><td>विधुमण्डलम् - </td><td>The disc of the moon</td></tr><tr><td>स्पृशन्ति - </td><td>Touch or kiss</td></tr></table><p>The tops of the mansions of this town kiss the disc of the moon.</p><p>Here, the tops do not really touch the disc of the moon ; still they are asserted to do so on account of their extraordinary height. </p>'
            }
          ]
        },
        {
          sloka: '<h3>असंबन्धातिशयोक्तिः - Hyperbole Asserting a disconnection</h3>योगेऽप्ययोगोऽसंबन्धातिशयोक्तिरितीर्यते।<br>',
          sloka_explanation: {
            sans: 'योगेनसंबंधे सत्यपि- अयोगो संबंधवर्णनमितियत्- सा असंबंधातिशयोक्तिरिष्यते कथ्यते',
            eng: '<h3>Word meanings</h3><table><tr><td>योगे अपि - </td><td>Though there is connection</td></tr><tr><td>अयोगः - </td><td>(the assertion of) disconnection</td></tr><tr><td>असंबंधाक्तिः - </td><td>Hyperbole asserting a disconnection</td></tr></table><h3>Definition</h3><p>Denial of connection where there is really a connection is called असंबन्धातिशयोक्तिः ।</p>'
          },
          examples: [
            {
              text: 'त्वयि दातरि राजेन्द्र खर्द्रु मान्नाद्रियामहे ॥',
              explanation_sans: 'अत्र स्वर्द्रुमेषादरसंबन्धेऽपि तद्संबन्धो वर्णित इत्यसंबन्धातिशयोक्तिः।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>राजेन्द्र - </td><td>O best of kings!</td></tr><tr><td>त्वयि दातरि - </td><td>When thou art a donor</td></tr><tr><td>खर्द्रुमान् - </td><td>The trees of the paradise</td></tr><tr><td>न आद्रियामहे - </td><td>We wont devote to.</td></tr></table><p>O best of kings ! As long as thou remainest here, as our liberal-donor, we won’t devote ourselves to the wish-yielding trees of Indra’s paradise.</p><p>This is addressed by the mendicants to a king of very liberal donations. They, the mendicants, say that as long as this king is their donor, they sever their connection with the Kalpa tree. Here, the connection of the mendicants with their wish-yielding tree which is, as its very name implies, renowned for its liberality is denied.</p>'
            }
          ]
        },
        {
          sloka: '<h3>अक्रमातिशयोक्तिः - Hyperbole Asserting a want of order</h3>अक्रमातिशयोक्तिः स्यात् सहते हेतुकार्ययोः।<br>',
          sloka_explanation: {
            sans: 'हेतु कार्ययोस्पहत्वे यौगपद्येवर्णिते सति- अक्रमातिशयोक्तिः- कारणं पूर्वं कार्यं परमितिलोकमर्यादा- तामुल्लंघ्य यत्र कार्यकारणयोरेक कालत्वं वर्ण्यते तत्रा क्रमातिशयोक्तिरित्यर्धः ॥ ',
            eng: '<h3>Word meanings</h3><table><tr><td>हेतुकार्ययोः - </td><td>Of the cause and effect</td></tr><tr><td>सहत्वे - </td><td>In the simultaneously</td></tr><tr><td>अक्रमाक्तिः - </td><td>Hyperbole asserting a want of order</td></tr></table><h3>Definition</h3><p>When the cause and effect are said to have taken place simultaneously, or, in other words, when the effect is said to co-exist with the cause, it is called अक्रमातिशयोक्तिः ।</p>'
          },
          examples: [
            {
              text: 'आलिङ्गन्ति समं देव! ज्यां शराश्च पराश्च ते॥',
              explanation_sans: 'अत्र मौर्व्या यदा शरसंधानं कृतं तदानीमेव शत्रवः क्ष्तौ पतन्तीति हेतुकार्ययोः सहत्वं वर्णितम्‌।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>देव - </td><td>O king !</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>शराश्च - </td><td>Arrows</td></tr><tr><td>पराश्च - </td><td>Foes</td></tr><tr><td>ज्याम् - </td><td>(1)bow-string (2)earth</td></tr><tr><td>समम् - </td><td>Simultaneously</td></tr><tr><td>आलिंगन्ति - </td><td>Clasp</td></tr></table><p>O king I Thy arrows and thy foes both clasp the jya simultaneously.</p><p>Observe the pun on the word jya, which means ‘bow-string’ and ‘earth.’ The arrows are said to clasp the bow-string. and the foes, the earth, i.e., they fall down on earth dead being struck with the arrows of the king. It is usual that cause precedes the effect. </p><p>Here, the effect, the falling down lead on earth, is said to co-exist with the cause, the issuing of an arrow. Hence, it is called  अक्रमातिशयोक्तिः ।</p>'
            }
          ]
        },
        {
          sloka: '<h3>चपलातिशयोक्तिः - Hyperbole Asserting fickleness</h3>चपलातिशयोक्तिस्तु कार्ये हेतुप्रसक्तिजे।<br>',
          sloka_explanation: {
            sans: 'कार्येहेतु प्रसतिजे सतिहेतु प्रसक्तिमात्रेण कार्येजाते सति- चपलातिशयोक्तिः- यत्रकारणेभविष्यत्येवकार्यं वर्ण्यते तत्र चपलातिशयोक्तिः',
            eng: '<h3>Word meanings</h3><table><tr><td>कार्ये - </td><td>The effect</td></tr><tr><td>हेतुप्रसक्तिजे - </td><td>When the cause was under discussion</td></tr><tr><td>चपलाक्तिः - </td><td>Hyperbole asserting fickleness</td></tr></table><h3>Definition</h3><p>If the effect is described to have taken place without the cause, or, literally,‘ if the effect is said to have taken place when the cause was under discussion, i.e., not yet begun, it is then called चपलातिशयोक्तिः ।</p>'
          },
          examples: [
            {
              text: 'यास्यामीत्युदिते तन्व्या वलयोऽभवदूर्मिका॥',
              explanation_sans: 'अत्र नायकप्रवासप्रसक्तिमात्रेण योषितोऽतिकार्श्यं कार्यमुखेन दर्शितम्‌।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>यस्यामि इत्युदिते - </td><td>When said (by the lover) “I go”</td></tr><tr><td>तन्व्याः - </td><td>Of the slender lady</td></tr><tr><td>ऊर्मिका - </td><td>Ring</td></tr><tr><td>वलयः - </td><td>Bracelet</td><td>अभवत् - </td><td>Became</td></tr></table><p>No sooner did the lover say ‘I shall go’ than the ring of his slender lady became her bracelet. </p><p>When the lover simply said ‘I shall go’ but did not actually go, his beloved became so very thin at the very thought of her lover’s future separation that the ring of her finger served as bracelet for her hand. Here, the cause was only expressed but did not actually take place and we see the effect is produced without the cause.</p>'
            }
          ]
        },
        {
          sloka: '<h3>अत्यन्तातिशयोक्तिः - Hyperbole Of the highest degree</h3>अत्यन्तातिशयोक्तिस्तु पौर्वापर्यव्यतिक्रमे।<br>',
          sloka_explanation: {
            sans: 'तयोः कारणकार्ययोः यत्पौर्वापर्यं पूर्वोत्तरभावः तस्यव्यतिक्रमे उल्लंघने सति- अत्यंतातिशयोक्तिः – कारणं पूर्वं कार्यंपरमिति नियममुल्लंघ्य वैपरीत्येन कार्यंपूर्वं कारणं परमितियत्रवर्ण्यते तत्रात्यंतातिशयोक्तिस्स्यादित्यर्थः ',
            eng: '<h3>Word meanings</h3><table><tr><td>तत्-पौर्वापर्य-व्यतिक्रमे - </td><td>When there is a violation of the priority and posteriority of those (i.e., of the cause and effect)</td></tr><td>अत्यक्तिः - </td><td>Hyperbole of the highest degree</td></tr></table><h3>Definition</h3><p> When the relation of priority and posteriority is violated, i.e., when the due order is inverted, or in other words, when the effect is said to have preceded the cause, it is अत्यन्तातिशयोक्तिः ।</p>'
          },
          examples: [
            {
              text: 'अग्रे मानो गतः पश्चादनुनीता प्रियेण सा ॥',
              explanation_sans: 'मानः प्रणयकोपः आग्रे प्रथममेव अनुवयात्प्रागे वेत्यर्थः – गतोपसृतः – पश्चान्मानत्यागा नंतरं- साकांताप्रियेन अनुनीता उपलालिता॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>अग्रे - </td><td>In the beginning, i.e., previously</td></tr><tr><td>मानः - </td><td>Anger</td></tr><tr><td>गतः - </td><td>Subsided</td></tr><tr><td>सा - </td><td>She</td></tr><tr><td>प्रियेण - </td><td>By her lover</td></tr><tr><td>पश्चात् - </td><td>Afterwards</td></tr><tr><td>अनुनीता - </td><td>Was conciliated</td></tr></table><p>The anger (of the beloved lady) had previously subsided. Afterwards, she was conciliated by her lover. </p><p>Here, a lady’ angry, through love, at the absence of her lover removed her anger at the moment the lover came before her. The lover not knowing the subsidence of the anger of the lady excused himself of his absence which was unnecessary at that stage.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'तुल्ययोगितालङ्कारः',
      title_eng: 'Tulyayogitālaṅkāra - Equal Pairing',
      id: 13,
      slokas: [
        {
          sloka: 'वर्ण्यानामितरेषां वा धर्मैक्यं तुल्ययोगिता।<br>',
          sloka_explanation: {
            sans: 'प्रस्तुतानामप्रस्तुतानां वा गुणक्रियारुपैकधर्मान्वयस्तुल्ययोगिता।',
            eng: '<h3>Word meanings</h3><table><tr><td>वर्ण्यानाम् - </td><td>Of objects on hand</td></tr><tr><td>इतरेषाम् वा - </td><td>Or of those not on hand</td></tr><tr><td>धर्मैक्यम् - </td><td>Sameness of attribute</td></tr><tr><td>तुल्ययोगिता - </td><td>Equal Pairing</td></tr></table><h3>Definition</h3><p>The sameness of attribute of objects on hand or of objects not on hand, is called तुल्ययोगिता ।</p>'
          },
          examples: [
            {
              text: ' संकुचन्ति सरोजानि स्वैरिणीवदनानि च॥',
              explanation: {
                sans: 'संकुचन्तीति प्रस्तुततुल्ययोगिताया उदाहरणम्‌।<br>तत्र प्रस्तुतचन्द्रोदयकार्यतया वर्णनीयानां सरोजानां प्रकाशभीरुस्वैरिणीवदनानां च संकोचरुपैकक्रियान्वयो दर्शितः।',
                eng: '<h3>Word meanings</h3><table><tr><td>सरोजानि - </td><td>Lotuses</td></tr><tr><td>स्वैरणीवदनानि च - </td><td>And the faces of the adulterous women</td></tr><tr><tr><td>संकुचन्ति - </td><td>Become contracted.</td></tr><tr><td>तत्= तयोः - </td><td>of those, i.e., of the cause and effect.</td></tr></table><h3>Example of objects on hand.</h3><p>The lotuses become contracted as well as the faces of the adulterous women.</p><p>This being the description of the rise of the moon, the lotuses are said to contract; and the moonlight being an impediment to the free movements of the harlots, their faces also are said to contract or droop.</p><p><b>Observe :-</b> Here, the lotuses and the faces of the women are the objects on hand and are associated with one common attribute.</p>'
              }
            },
            {
              text: 'त्वदङ्गमार्दवे दृष्टे कस्य चित्ते न भासते।<br>मालतीशसभृल्लेखाकदलीनां कठोरता ॥',
              explanation: {
                sans: 'हे प्रिये त्वदंगमार्गवे दृष्टे सति कस्य वा चित्ते मालतीशतभृल्लेखाकदळीनां सुमनो लता चंद्ररेखा वे दृष्टेकस्य चित्तेनभासते । मालतीशशभृल्लेखाकदळीनां कठोरता॥',
                eng: '<h3>Word meanings</h3><table><tr><td>त्वदंगमार्दवे दृष्टे - </td><td>When the softness of thy limbs was perceived</td></tr><td>कस्य चित्ते - </td><td>In whose mind</td></tr><tr><td>मालती- कदलीनाम् - </td><td>Of the jasamine, moon’s ray and the plantain</td></tr><tr><td>कठोरता - </td><td>Hardness</td></tr><tr><td>न भासते - </td><td>Will not become manifest</td></tr></table><p>Lady ! In whose mind will not the hardness of the jasamine, the lunar ray and the plantain be manifest when the softness of thy limbs was perceived?</p><p>Here, the jasamine &c., the objects unconnected with the subject, are associated with one and the same attribute, that is, the quality of hardness.</p>'
              }
            }
          ]
        }
      ],
      types: 2,
      type: [
        {
          sloka: '<h3>Equal Pairing, second kind</h3>हिताहिते वृत्तितौल्यमपरा तुल्ययोगिता।<br>',
          sloka_explanation: {
            sans: 'हिताहिते मित्रेऽमित्रे चेत्यर्थः- वृत्तितौल्यं व्यापार साम्यमेक विधव्यापार इति यावत् अपरा अन्यातुल्ययोगिता- यत्र शत्रुमित्रयोर्विषये एकव्यापारो वर्ण्यते तत्रान्या तुल्ययोगितेत्यर्थः ॥ ',
            eng: '<h3>Word meanings</h3><table><tr><td>हिताहिते - </td><td>In a friend and foe</td></tr><tr><td>वृत्तितौल्यम् - </td><td>The sameness of behavior</td></tr><tr><td>अपरा - </td><td>another</td></tr><tr><td>तुल्ययोगिता - </td><td>Equal Pairing</td></tr><tr><td>त्वया - </td></table><h3>Definition</h3><p>The description of the sameness of behaviour towards a friend and a foe is another kind of Equal Pairing.</p>'
          },
          examples: [
            {
              text: 'प्रदीयते पराभूतिर्मित्रशात्रवयोस्त्वया॥',
              explanation_sans: 'अत्र हिताऽहितयोर्मित्रं – शात्रवयोरुत्कृष्टभूतिदानस्य पराभवदानस्य च श्लेषेणाभेदाध्यवसायाद्‌ वृत्तितौल्यम्‌।',
              explanation_eng: '<h3>Word meanings</h3><table><td>By thee</td></tr><tr><td>मित्रशात्रवयोः - </td><td>To the friend and foe</td></tr><tr><td>पराभूतिः - </td><td>Immense riches (to a friend)</td></tr><tr><td>पराभूतिः - </td><td>Defeat (to a foe)</td></tr><tr><td>दीयते - </td><td>Is distributed</td></tr></table><p>(O king 1) Parabuti is equally distributed by thee both to thy friend and to thy foe.</p><p>परा and भूतिः  are two separate words meaning immense riches when applied to ‘friend’ ; when taken as one word, पराभूतिः means ‘defeat’ and applies to ‘foe’ ; however the same word being used to friend and foe, this must be taken as instancing the figure without referring to its meaning.</p><p><b>Observe :-</b> This is possible only under a pun.</p>'
            }
          ]
        },
        {
          sloka: '<h3>Equal Pairing, third kind</h3>गुणोत्कृष्टे समीकृत्य वचोऽन्या तुल्ययोगिता।<br>लोकपालो यमः पाशी श्रीदः शक्रो भवानपि॥',
          sloka_explanation: {
            sans: 'गुणोत्कृष्टैश्शौर्यादार्यादिगुण गरिष्ठैः समीकृत्य समानीकृत्य वचः उक्तिः अपरातुल्ययोगिता- यत्रवर्णनीयोराजादिः उत्कृष्ट गुणैरिंद्रादिभिस्सहधर्मतः समानीकृत्य वर्ण्यते- तत्रान्यातुल्ययोगितेर्थः ',
            eng: '<h3>Word meanings</h3><table><tr><td>गुणात्कृष्टैः - </td><td>With those possessed of superior qualities</td></tr><tr><td>समीकृत्य - </td><td>Having placed on the same footing</td></tr><tr><td>वचः - </td><td>Description</td></tr><tr><td>अन्या - </td><td>Another</td></tr><tr><td>तुल्ययोगिता - </td><td>Equal Pairing</td></tr><tr><td>यमः - </td><td>God of death</td></tr><tr><td>पाशी - </td><td>Varuna</td></tr><tr><td>श्रीदः - </td><td>Kubera</td></tr><tr><td>शक्रः - </td><td>Indra</td></tr><tr><td>भवान् अपि - </td><td>As well as thyself</td></tr><tr><td>लोकपालः - </td><td>A regent of the quarter (and the ruler of the earth)</td></tr></table><h3>Definition</h3><p>The description of placing one object on a footing of equality with those possessed of superior qualities is termed a third kind of Equal Pairing.</p>'
          },
          examples: [
            {
              text: 'लोकपालो यमः पाशी श्रीदः शक्रो भवानपि॥',
              explanation_sans: 'अत्र वर्णनीयो राजा शक्रादिभिर्लोकपालत्वेन समीकृतः।',
              explanation_eng: '<p>(O Lord !), Yama, Pasi, Srida, Sakra as Well as thyself are each a Lokapala.</p><table><tr><td>Lokapala = </td><td>a regent or guardian of a quarter = a ruler of earth.</td></tr><tr><td>Yama = </td><td>the God of death, the regent of the Southern quarter.</td></tr><tr><td>Pasi = </td><td>Varuna, the regent of the Western quarter and of the oceans.</td></tr><tr><td>Srida = </td><td>Kubera, the regent of the Northern quarter and the God of riches and treasure.</td></tr><tr><td>Sakra = </td><td>Indra, the regent of the Eastern quarter and the king of the Gods.</td></tr>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'दीपकालङ्कारः',
      title_eng: 'Dīpakālaṅkāra - The ‘Illuminator’',
      id: 14,
      slokas: [
        {
          sloka: 'वदन्ति वर्ण्यावर्ण्यानां धर्मैक्यं दीपकं बुधाः।<br>',
          sloka_explanation: {
            sans: 'प्रस्तुताप्रस्तुतानामेकधर्मान्वयो दीपकम्‌।',
            eng: '<h3>Word meanings</h3><table><tr><td>वर्ण्यावर्ण्यानाम् - </td><td>Of objects on hand and those not on hand</td></tr><tr><td>धर्मैक्यम् - </td><td>The common attribute</td></tr><tr><td>बुधाः - </td><td>The learned</td></tr><tr><td>दीपकम् - </td><td>Illuminator</td></tr><tr><td>वदन्ति - </td><td>Call</td></tr></table><h3>Definition</h3><p>When objects on hand and those‘ not on hand are associated with a common attribute (mentioned only once), the learned call it the Illuminator.</p>'
          },
          examples: [
            {
              text: 'मदेन भाति कलभः प्रतापेन महीपतिः॥',
              explanation: {
                sans: 'यथा कलभमहीपालयोः प्रस्तुताप्रस्तुतयोर्भानक्रियान्वयः।',
                eng: '<h3>Word meanings</h3><table><tr><td>कलभः - </td><td>Young elephant</td></tr><tr><td>मदेन - </td><td>By ichor</td></tr><tr><td>भाति - </td><td>Shines</td></tr><tr><td>महीपतिः - </td><td>Lord of earth</td></tr><tr><td>प्रतापेन - </td><td>By valour</td></tr></table><p>The young elephant shines by its ichor and this lord of earth by his valour.</p><p>Here, the elephant, the object not on hand, and the king, the object on hand, are together associated with one and the same attribute, the action of shining. Just as a lamp standing in one place illumines the several objects round it, so in the present figure one finite verb serves as predicate to two-or more nominatives. Compare the maxim of the lamp placed over a threshold देहलीदोपन्यायः । It takes its origin from a lamp hanging over the threshold of a house which, by its peculiar position, serves to light the rooms on both sides, and is used to denote something which serves a two-fold purpose at the same time. Apte.</p><p>In the Equal Pairing No. 1 (Fig. XIV), the objects on hand if associated with one and the same attribute formed one kind of the figure ; and the objects not on hand if associated with one and the same attribute formed another kind of the same figure (observe the word वा in the Definition). In the Illuminator, the objects on hand and those not on hand are together associated with one common attribute mentioned only once.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'आवृत्तिदीपकालङ्कारः',
      title_eng: 'āvṛttidīpakālaṅkāra - The Illuminator by repetition',
      id: 15,
      slokas: [
        {
          sloka: 'त्रिविधम् दीपकावृत्त्तौ भवेदावृत्तिदीपकम्‌।<br>',
          sloka_explanation: {
            sans: 'दीपकस्यानेकोपकारार्थतया दीपस्थानीयस्य पदस्यार्थस्योभयोर्वाऽऽवृत्तौ त्रिविधमावृत्तिदीपकम्‌।',
            eng: '<h3>Word meanings</h3><table><tr><td>दीपकावृत्तौ - </td><td>In the repetition of the Illuminator</td></tr><tr><td>त्रिविधम् - </td><td>Three kinds</td></tr><tr><td>आवृत्तिदीपकम् - </td><td>Illuminator by repetition</td></tr><tr><td>भवेत् - </td><td>Will be</td></tr></table><p>त्रिविधम् i.e., by repetition of 1 पद ‘word’, 2 अर्थ ‘signiﬁcation’ and 3 उभय ‘both word and signiﬁcation’.</p><h3>Definition</h3><p>By repetition of (1) Word, (2) signification and (3) both, We have the three kinds of the figure आवृत्तिदीपकम् ।</p>'
          },
          examples: [
            {
              text: 'वर्षत्यम्बुदमालेयं वर्षत्येषा च शर्वरी॥',
              explanation: {
                sans: 'वर्षासमये विरहतओताकाचित्कांचिदाह ॥ इयंपुरोवर्तिनी अंबुदमालामेघपङ्क्तिः वर्षतिवर्षं मुंचतीत्यर्थः ',
                eng: '<h3>Word meanings</h3><table><tr><td>इयं अंबुदमाला - </td><td>This range of clouds</td></tr><tr><td>वर्षति - </td><td>Rains</td></tr><tr><td>एषा शर्वरी च - </td><td>And this night</td></tr><tr><td>वर्षति - </td><td>Looks like a year</td></tr></table><p>This range of clouds rains and this night looks like a year.</p><p>This is the example of No. 1 पदावृत्ति ।  Here, the verb वर्षति, a. पद, is repeated though with different significations. The first is the form of the third person, singular number, present tense of the root 515; ‘to rain’, and the second is the form of the third person, singular number, present tense of the nominal verb derived from the noun वर्ष ‘a year’.</p>'
              }
            },
            {
              text: '<h3>Example of No. 2. अर्थावृत्ति ।</h3>उन्मीलन्ति कदम्बानि स्फुटन्ति कुटजोद्गमाः।',
              explanation: {
                sans: 'कदंबानिकदंब कुसुमानि उन्मीलंति विकसंति- तथाकुटजोद्गमाः गिरिमल्लिकाः स्फुटंतिइकसंति- अत्रोन्मीलंति स्फुटंतीतिशब्दयोः भेदेपि विकासरूपार्थस्य एकत्वात्तस्यावृत्तत्वेन इदमर्थावृतिदीपकम्',
                eng: '<h3>Word meanings</h3><table><tr><td>कदंबानि - </td><td>Kadamba flowers</td></tr><tr><td>उन्मीलन्ति - </td><td>Blossom</td></tr><tr><td>कुटकद्रुमाः - </td><td>Kutaja creepers</td></tr><tr><td>स्फुटन्ति - </td><td>Bloom forth</td></tr></table><p>The kadamba ﬂowers blossom and the kutaja creepers bloom forth.</p><p>उन्मीलन्ति and स्फुटन्ति mean the same thing and we have here a repetition of signification.</p>'
              }
            },
            {
              text: '<h3>Example of No. 3. उभयावृत्ति ।</h3>माद्यन्ति चातकास्तृप्ता माद्यन्ति च शिखावलाः॥',
              explanation: {
                sans: 'तृप्ताः अंतराळ एवमेघोदक पानेन संतुष्टास्संतः – माद्यंति मदंगच्छंतितथा शिखावळाः – मयूराश्चमाद्यंति अत्रमद प्राप्ति रूपस्य अर्थस्य माद्यंतीति पदस्य उभयस्याप्यावृत्तात्वादुभयावृत्तिदीपकम् ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>तृप्ताः - </td><td>Satiated</td></tr><tr><td>चातकाः - </td><td>Chataka birds</td></tr><tr><td>माद्यन्ति - </td><td>Rejoice</td></tr><tr><td>शिखावलाः - </td><td>Peacocks</td></tr><tr><td>माद्यन्ति - </td><td>Rejoice</td></tr></table><p>The satiated chataka. birds rejoice and the peacocks also rejoice (at the sight of the clouds).</p><p>Here, the same word माद्यन्ति  is repeated in the same meaning and hence it is called उभयावृत्तिदीपकम् ।</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'प्रतिवस्तुपमालङ्कारः',
      title_eng: 'Prativastupamālaṅkāra - Typical Comparison',
      id: 16,
      slokas: [
        {
          sloka: 'वाक्ययोरेकसमान्ये प्रतिवस्तूपमा मता।<br>',
          sloka_explanation: {
            sans: 'यत्रोपमानोपमेयपरवाक्ययोरेकः समनो धर्मः पृथङ्निर्दिश्यते सा प्रतिवस्तूपमा।<br>प्रतिवस्तु प्रतिवाक्यार्थमुपमासमानधर्मोऽस्यामिति व्युत्पत्तेः।',
            eng: '<h3>Word meanings</h3><table><tr><td>वाक्ययोः - </td><td>In (the sense of) two sentences</td></tr><tr><td>एकसामान्ये - </td><td>If one common  attribute (is expressed)</td></tr><tr><td>प्रतिवस्तूपमा - </td><td>Typical Comparison</td></tr><tr><td>मता - </td><td>Is recognized</td></tr></table><h3>Definition</h3><p>When, in two sentences one of which describes the object compared and the other the object compared to, the same common attribute is expressed but by different words, it is termed Typical Comparison.</p>'
          },
          examples: [
            {
              text: 'तापेन भ्राजते सूरः शूरश्चापेन राजते॥',
              explanation: {
                sans: 'यथाऽत्रैव भ्राजते राजत इत्येक एव धर्म उपमानोपमेयवाक्ययोः पृथग्भिन्नपदाभ्यां निर्दिष्टः।',
                eng: '<h3>Word meanings</h3><table><tr><td>सूरः - </td><td>The sun</td></tr><tr><td>तापेन - </td><td>With intense heat</td></tr><tr><td>भ्राजते - </td><td>Shines</td></tr><tr><td>शूरश्च - </td><td>And this warrior</td></tr><tr><td>चापेन - </td><td>with (his) bow</td></tr><tr><td>राजते - </td><td>Looks brilliant</td></tr></table><p>The sun shines with intense heat and this warrior looks brilliant with his bow.</p><p>Here, the actions of shining and looking brilliant, though mean the same thing, are expressed by different words to avoid the fault of repetition.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'दृष्टान्तालङ्कारः',
      title_eng: 'Dṛṣṭāntālaṅkāra - Exemplification',
      id: 17,
      slokas: [
        {
          sloka: 'चेत्-बिंबप्रतिबिंबत्वं दृष्टान्तस्तदलंकृतिः।<br>',
          sloka_explanation: {
            sans: 'यत्रोपमनोपमेयवाक्ययोर्भिन्नावेव धर्मौ बिम्बप्रतिबिम्बभावेन निर्दिष्टौ तत्र दृष्टान्तः।',
            eng: '<h3>Word meanings</h3><table><tr><td>चेत् - </td><td>if</td></tr><tr><td>वाक्ययोः - </td><td>In (the sense of ) two sentences</td></tr><tr><td>बिंबप्रतिबिंबत्वम् - </td><td>Relation of type and proto-type</td></tr><tr><td>तत् - </td><td>Then</td></tr><tr><td>दृष्टान्तः - </td><td>Exemplification</td></tr></table><h3>Definition</h3><p>If two sentences, one of which contains the object compared and the other the object compared to, stand in relation of type and proto-type, or, in other words, contain similar attributes reflectively expressed, it is called Exempliﬁcation.</p>'
          },
          examples: [
            {
              text: ' त्वमेव कीर्तिमान्‌ राजन्‌! विधुरेव हि कान्तिमान्‌॥',
              explanation: {
                sans: '‘त्वमेव कीर्तिमान्‌’ इत्यत्र कीर्तिकान्त्योर्बिम्बप्रतिबिम्बबहवः।',
                eng: '<h3>Word meanings</h3><table><tr><td>राजन् - </td><td>O king!</td></tr><tr><td>त्वमेव - </td><td>Thou only</td></tr><tr><td>कीर्त्तिमान् - </td><td>Possessed of fame</td></tr><tr><td>विधुरेव हि - </td><td>Moon only</td></tr><tr><td>कान्तिमान् - </td><td>Radiant</td></table><p>O king l Thou art the only being possessed of fame and the moon is the only object having radiance.</p><p>Here, possessing fame and having radiance are similar attributes and the two sentences stand in relation of type and proto-type. The first sentence is exemplified by the second in which a renowned object, the moon, whose radiance has been experienced taken from the preceding verse.</p><p>The difference between this figure and प्रतिवस्तूपमा  is that the common attributes here are similar but in the latter they are identical. In the प्रतिवस्तूपमा the couple of sentences terminates in conveying the same sense; whilst in the example of the present figure the sentences have similar sense reflectively expressed and not the same.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'निदर्शनालङ्कारः',
      title_eng: 'Nidarśanālaṅkāra - Illustration ',
      id: 18,
      types: 3,
      type: [
        {
          sloka: '<h3>First kind</h3>वाक्यार्थयोः सदृशयोरैक्यारोपो निदर्शना।<br>',
          sloka_explanation: {
            sans: 'सदृशयोर्वाक्या पदार्धवृत्तिमप्येकेवदंत्यन्यां निदर्शनाम् ।',
            eng: '<h3>Word meanings</h3><table><tr><td>सदृशयोः - </td><td>similar</td></tr><tr><td>वाक्यार्थयोः - </td><td>In the significations of two sentences</td></tr><tr><td>ऐक्यारोपः - </td><td>Attribution of identity</td></tr><tr><td>निदर्शना - </td><td>Illustration</td></tr></table><h3>Definition</h3><p>A description, resulting in the identity of the significations, of two sentences, which are similar, i.e., which terminate in a. comparison or similarity, is called Illustration.</p>'
          },
          examples: [
            {
              text: 'यद्दातुः सौम्यता सेयं पूर्णेन्दोरकलङ्कता॥',
              explanation_sans: 'अत्र दातृपुरुषसौम्यत्वस्योपमेयवाक्यार्थस्य पुर्णेन्दोरकलङ्कत्वस्योपमानवाक्यार्थस्य यत्तद्द्भ्यामैक्यारोपः।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>या - </td><td>Which</td></tr><tr><td>दातुः - </td><td>Of a donor</td></tr><tr><td>सौम्यता - </td><td>Mildness</td></tr><tr><td>सेयम् - </td><td>That itself</td></tr><tr><td>पूर्णेन्दोः - </td><td>Of the full moon</td></tr><tr><td>अकलंकता - </td><td>Stainlessness</td></tr></table><p>That mild nature if possessed by a donor answers to the stainlessness of the full moon.</p><p>Here, the impossibility of the existence of the full moon without the black spot corresponds to the Non existence of a. donor destitute of anger. Thus, we see that the two sentences terminate in a comparison.</p><p>The difference between this figure and the दृष्टान्त is that दृष्टान्त  Similar attributes are stated whereas here they are not stated. Here, the two sentences employed are dependent upon each other in their meanings but in the दृष्टान्त they are independent.</p>'
            }
          ]
        },
        {
          sloka: '<h3>2nd kind of Illustration</h3>पदार्थवृत्तिमप्येके वदन्त्यां निदर्शनाम्‌।<br>तन्नेत्रयुगलं धत्ते नीलाम्बुजन्मनोः॥',
          sloka_explanation: {
            sans: 'एकेकेचिदालंकारिकाः पदार्थवृत्तिमपि निदर्शनामन्यां वदंति- यत्रान्यस्मिन् पदार्थेन्य धर्मस्य आरोपो वर्ण्यते सापदार्थ वृत्ति निदर्शनेत्यर्धः ॥ ',
            eng: '<h3>Word meanings</h3><table><tr><td>एके - </td><td>Certain writers on Rhetoric</td></tr><tr><td>पदार्थवृत्तिम्- पदार्थे - </td><td>In a thing</td></tr><tr><td>वृत्तिम् ऐक्यारोपस्थितिम् - </td><td>The state of being identical</td></tr><tr><td>अन्याम् निदर्शनाम् - </td><td>Another kind of Illustration</td></tr><tr><td>वदन्ति - </td><td>Say</td></tr><tr><td>त्वन्नेचयुगलम् - </td><td>Thy two eyes</td></tr><tr><td>नीलांबुजन्मनोः - </td><td>Of the two blue lotuses</td></tr><tr><td>लीलाम् - </td><td>Charmingness</td></tr><tr><td>धत्ते - </td><td>Bears</td></tr></table><h3>Definition</h3><p>If a thing is described as bearing the property of another, then it is another kind of Illustration according to certain writers on Rhetoric.</p>'
          },
          examples: [
            {
              text: 'तन्नेत्रयुगलं धत्ते नीलाम्बुजन्मनोः॥',
              explanation_sans: 'अत्र नेत्रयुगले नीलाम्बुजगतलॉलापदार्थारोपो निदर्शना।',
              explanation_eng: '(Lady !) Thy two eyes bear the charmingness of the two blue lotuses.'
            }
          ]
        },
        {
          sloka: '<h3>3rd kind of Illustration</h3> अपरां बोधनं प्राहुः क्रिययाऽसत्सदर्थयोः।<br>नश्येद्राजविरोधीति क्षीणं चन्द्रोदये तमः॥',
          sloka_explanation: {
            sans: 'कस्यचित्किंचित्क्रियाविशिष्टस्य स्वक्रियया परान्प्रति असतः सतो वाऽर्थ्स्य बोधनं यन्निबध्यते तदपरां निदर्शनामाहुः।',
            eng: '<h3>Word meanings</h3><table><tr><td>क्रियया - </td><td>By an action of a certain object</td></tr><tr><td>असत्सदर्थयोः - </td><td>Of the unreal and real objects</td></tr><tr><td>बोधनम् - </td><td>Intimation</td></tr><tr><td>अपरां - </td><td>Third kind of Illustration</td></tr><tr><td>प्राहुः - </td><td>(the learned) call</td></tr><tr><td>तमः - </td><td>Darkness</td></tr><tr><td>चंद्रोदये - </td><td>At the rise of the moon</td></tr><tr><td>राजविरोधी - </td><td>The enemy of a king or moon</td></tr><tr><td>नश्येत् - </td><td>Will perish</td></tr><tr><td>इति - </td><td>So intimating</td></tr><tr><td>क्षीणाम् - </td><td>Vanished</td></tr></table><h3>Definition</h3><p>The intimation, by an agent engaged in a certain action, of the unreal and the real state of things signified by the action itself, it is" termed the third kind of Illustration.</p>'
          },
          examples: [
            {
              text: 'नश्येद्राजविरोधीति क्षीणं चन्द्रोदये तमः॥',
              explanation_sans: 'तत्र नश्येदिति बोधयदिति वक्तव्ये बोधयदित्यस्य गम्यमनत्वादप्रयोगः तत्श्च राज्ञा चन्द्रेण सह विरुध स्वयं नाशक्रियाविशिष्टं तमः स्वकीयनाशक्रियया दृष्टान्तभूतया अन्योऽप्येवं राजविरुद्धश्चेन्नश्येदित्यनिष्टपर्यवसायिनमर्थं बोधयदेव नष्टमित्यर्थनिबन्धनादसदर्थनिदर्शना।',
              explanation_eng: '<p>The enemy of a king (moon) will perish telling this, the darkness, on the rise of the moon, vanished.</p><p>Here, the darkness is the agent in the act of intimating to the world the above fact, the result of its own experience which is certainly unreal. This forms the example of unreal state of things.</p>'
            },
            {
              text: '<h3>Example of the real state of things :- </h3>उदयन्नेव सविता दमेष्वर्पयति श्रियम्।<br>विभावयन् समृद्धीनां फलं सुहृदनुग्रहः॥',
              explanation_sans: 'सविता स्वोदयसमय एव पद्मषु लक्ष्मीमादधानः स्वया पद्मलक्ष्म्याधानक्रियया परान्प्रति समृद्धीनां फलं सुहृदनुग्रह एवेति श्रेयस्करमर्थं बोधयन्निबद्ध इत सदर्थनिदर्शना।',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>सविता - </td><td>The sun</td></tr><tr><td>उदयन्नेव - </td><td>Just when it rises</td></tr><tr><td>सुहृदनुग्रहम् - </td><td>Rewarding the friends</td></tr><tr><td>समृद्धीनाम् - </td><td>Of one’s riches</td></tr><tr><td>फलम् - </td><td>The chief object</td></tr><tr><td>विभावयन् - </td><td>(thus) intimating</td></tr><tr><td>पद्मेषु - </td><td>On the lotuses</td></tr><tr><td>श्रियम् - </td><td>Splendor</td></tr><tr><td>अर्पयति - </td><td>Consigns</td></tr></table><p>"The chief” object of one’s having riches consists in rewarding his friends’-thus intimating (to the world), the sun, just on its rise, consigns its own treasures (splendour) to the lotuses.</p><p>Here, the sun is the agent in the act of intimating to the world the above fact which is real as the lotuses bloom only on the rise of the sun.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'व्यतिरेका ',
      title_eng: 'व्यतिरेका - Dissimilitude or Contrast',
      id: 19,
      slokas: [
        {
          sloka: 'व्यतिरेकोविशेषश्चेदुपमानोपमेययोः।',
          sloka_explanation: {
            sans: 'उपमेयोपमानयोः विशेषः – वैलक्षण्यं वर्णितं चेदयं व्यतिरेक इत्यर्थः अयं त्रिप्रकारः उपमेयाधिक्यवर्यवसायी उपमेयन्यूनत्वपर्यवसायी अनुभयवर्यवसायी चेति ॥',
            eng: '<h3>Word meanings</h3><table><tr><td>उपमानोपमेययोः - </td><td>Between the object compared to and that compared</td></tr><tr><td>विशेषः - </td><td>Any peculiarity</td></tr><tr><td>चेत् - </td><td>If asserted</td></tr><tr><td>व्यतिरेकः - </td><td>Dissimilitude or Contrast</td></tr></table><h3>Definition</h3><p>If any characteristic difference is asserted between the object compared to and that compared, then it is called Dissimilitude or Contrast.</p>'
          },
          examples: [
            {
              text: 'शैलाइवोन्नताःसन्तःकिंतुप्रकृतिकोमलाः॥',
              explanation: {
                sans: 'संतः सत्पुरुषाः शैलाः पर्वता इवोन्नताः किंतु प्रकृत्याकोमलाः शैलास्तु प्रकृतकठिना इतिभावः -  अत्रोपमानशैलापेक्षया प्रकृतिकोमलत्वेन सतामाधिक्य पर्यवसायित्वादय मुपमेयाधिक्य पर्यवसायीव्यतिरेकः एवमन्यत्रा व्यूहनीयम् ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>संतः - </td><td>Good people</td></tr><tr><td>शैलाः इव - </td><td>As mountains</td></tr><tr><td>उन्नताः - </td><td>Are high</td></tr><tr><td>किंतु - </td><td>But</td></tr><tr><td>प्रकृतिकोमलाः - </td><td>Are delicate by nature</td></tr></table><p>Good men are as high as mountains ; but they (good men) are delicate by nature.</p><p>Here, we see a similitude between the good men, upameya, and the mountains, upamana, in one respect and a dissimilitude in another respect.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'सहोक्तिः',
      title_eng: 'सहोक्तिः  Connected Description or a Speech with सह ‘with’',
      id: 20,
      slokas: [
        {
          sloka: 'सहोक्तिःसहभावश्चेद्भासतेजनरञ्जनः।',
          sloka_explanation: {
            sans: 'जनरंजनः लोकानंदकरः सहभावः साहित्यं चेत्सहोक्तिर्नामालंकार इति निष्कर्षः यत्र सहृदयहृदयाह्लादकरः कस्यचित्केन चित्सहभावः वर्ण्यते तत्र सहोक्तिः जनरंजन इति विशेषणात् अनेन सार्धमित्यादि प्रयोगेतुन सहोक्तिः तत्र सहभावस्य चमत्कारकारित्वाभावात्',
            eng: '<h3>Word meanings</h3><table><tr><td>चेत् - </td><td>if</td></tr><tr><td>जनरंजनः - </td><td>Pleasing to the people’s mind</td></tr><tr><td>सहभावः - </td><td>Simultaneity</td></tr><tr><td>भासते - </td><td>Shines forth</td></tr><tr><td>सहोक्तिः - </td><td>Connected Speech</td></tr></table><h3>Definition</h3><p>A description of simultaneity or conjunction which will excite a pleasing (poetical) delight in the people’s (mind) is called the Connected Description.</p>'
          },
          examples: [
            {
              text: ' दिगन्तमगमत्तस्यकीर्तिःप्रत्यर्थिभिःसह॥',
              explanation: {
                sans: 'तस्यराज्ञः कीर्तिः प्रत्यर्थिभिः शत्रुभिस्सहदिगंतमगमत् प्राप्ता- अत्र यदानिज प्रतापादि जनिता कीर्तिर्दिगंतं व्याप्ता- तदानीमेवशत्रवः पलाय्यदिगंतानेव प्राप्ता इत्येवं विधतात्पर्यगर्भत्वेन चमत्कारकारिणस्सहभावस्य वर्णनात्सहोक्तिः ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>तस्य - </td><td>Of that (king)</td></tr><tr><td>कीर्त्तिः - </td><td>Fame</td></tr><tr><td>प्रत्यर्थिभिः सह - </td><td>Together with (his) foes</td></tr><tr><td>दिगंतम् - </td><td>To the end of the quarter</td></tr><tr><td>अगमत् - </td><td>Reached</td></tr></table><p>The fame of that king has reached the end of the quarters together with his foes.</p><p>Here, the reaching of the fame to the end of the quarters is directly expressed and that of the foes is indirectly expressed by the word सह । सह  denotes simultaneity of two actions that are of one and the same kind. The idea. conveyed in the present example is that both the king’s fame and the enemies reached the end of the quarters at the same time. Thus we see that this figure consists in the description of simultaneous action connected with सह ।</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विनोक्तिः',
      title_eng: 'विनोक्तिः - Speech of Absence or Speech',
      id: 21,
      slokas: [
        {
          sloka: 'विनोक्तिश्चेद्विनाकिंचित्प्रस्तुतंहीनमुच्यते।',
          sloka_explanation: {
            sans: 'किंचिद्विना प्रस्तुतं वर्ण्यं हीनं निकृष्टं उच्यते हीनत्वेन वर्ण्यते यदीत्यर्धः- तर्हिविनोक्ति नामालंकारः ',
            eng: '<h3>Word meanings</h3><table><tr><td>चेत् - </td><td>if</td></tr><tr><td>किंचिड्बिना - </td><td>In the absence of some other thing</td></tr><tr><td>प्रस्तुतम् - </td><td>The object on hand</td></tr><tr><td>हीनम् - </td><td>As inferior</td></tr><tr><td>उच्यते - </td><td>Is represented</td></tr><tr><td>विनोक्तिः - </td><td>Speech of Absence</td></tr></table><h3>Definition</h3><p>When an object on hand is represented as inferior in the absence of some other object, it is termed the Speech of Absence.</p>'
          },
          examples: [
            {
              text: 'विद्याहृद्यापिसावद्याविनाविनयसंपदम्॥',
              explanation: {
                sans: 'हृद्यामनोहरापिविद्या- विनयसंपदं विनाविनय समृद्धिमंतरा सावद्यासदोषा- अत्र विद्यायाः विनयसंपत्तिं विनाहैन्य वर्णनाद्विनोक्तिः ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>विद्या - </td><td>The learning</td></tr><tr><td>हृद्या अपि - </td><td>Though pleasing</td></tr><tr><td>विनयसंपदम् - </td><td>Excellence of good behavior</td></tr><tr><td>विना - </td><td>Without</td></tr><tr><td>सा - </td><td>That, i.e., the learning</td></tr><tr><td>अवद्या - </td><td>Censurable</td></tr></table><p>In the absence of excellent good behaviour, the learning, though pleasing, is censurable.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka: 'तच्चोत्किंचिद्विनारम्यंविनोक्तिःसापिकथ्यते।',
          sloka_explanation: {
            sans: 'तत् प्रस्तुतं किंचिद्वस्रु विनारम्यं चेत् सुंदरं यदितर्हि- सापिविनोक्तिरितिकथ्यत इत्यर्थः ॥ ',
            eng: '<h3>Word meanings</h3><table><tr><td>चेत् - </td><td>if</td></tr><tr><td>तत् - </td><td>The object on hand</td></tr><tr><td>किंचिद्विना - </td><td>Without some thing else</td></tr><tr><td>रम्यम् - </td><td>As charming</td></tr><tr><td>सापि - </td><td>That too</td></tr><tr><td>विनोक्तिः - </td><td>Speech of Absence</td></tr><tr><td>कथ्यते - </td><td>Is termed</td></tr></table><h3>Definition</h3><p>When an object on hand is represented as charming in the absence of some other object, it is also called Speech of Absence.</p>'
          },
          examples: [
            {
              text: 'विनाखलैर्विभात्येषाराजेन्द्रभवतःसभा॥',
              explanation_sans: 'हे राजेंद्र भवतः एषासभा आस्थानमंटपः – खलैर्विनादुर्जन संपर्कं विनाविभाति- अत्र सभायाह् खलसंपर्कं विनारम्यत्व वर्णानाद्विनोक्तिः ',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>राजेंद्र - </td><td>O best of kings!</td></tr><tr><td>एषा - </td><td>This</td></tr><tr><td>भवतः - </td><td>Of thy honour</td></tr><tr><td>सभा - </td><td>Council hall</td></tr><tr><td>खलैः विना - </td><td>In the absence of wicked persons</td></tr><tr><td>विभाति - </td><td>Shines</td></tr></table>O best of kings 1 Thy council hall shines splendid in the absence of wicked persons.'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'समासोक्तिः ',
      title_eng: 'समासोक्तिः – Modal Metaphor or Speech of Brevity',
      id: 22,
      slokas: [
        {
          sloka: 'समासोक्तिःपरिस्फूर्त्तिःप्रस्तुतेऽप्रस्तुतस्यचेत्।',
          sloka_explanation: {
            sans: 'नानार्थ संश्रयश्श्लेषो वर्ण्यावर्ण्योभप्रस्तुते प्रस्तुत वृत्तांते वर्णिते सति- अप्रस्तुतस्या प्रकृतस्य परिस्फूर्तिश्चेत् प्रतीतिव्यदितर्हि समासोक्तिः – समासेन संक्षेपेण प्रकृता प्रकृत वृत्तांत वर्णनादियमन्वर्थ संज्ञा ॥ ',
            eng: '<h3>Word meanings</h3><table><tr><td>चेत् - </td><td>if</td></tr><tr><td>प्रस्तुते - </td><td>In the description of an object on hand</td></tr><tr><td>अप्रस्तुतस्य - </td><td>Of an object not on hand</td></tr><tr><td>परिस्फूर्त्तिः - </td><td>Apprehension</td></tr><tr><td>समासोक्तिः - </td><td>Speech of Brevity</td></tr></table><h3>Definition</h3><p>If, by the description of an object on hand, an object not on hand is apprehended, or in other words, when the description of an object on hand conveys a reference to an object, not on hand, it is called Modal Metaphor.</p>'
          },
          examples: [
            {
              text: 'अयमैन्द्रीमुखंपश्यरक्तश्चुम्बतिचन्द्रमाः॥',
              explanation: {
                sans: 'कस्यचित्कामुकस्य कांचित्कामुकीमुद्दिश्य उयमुक्तिः- हे प्रिये अयं परिदृश्यमानः – चंद्रमाश्चंद्रः रक्तः लोहितः स एवैंद्र्याः प्राच्याः मुखं अग्रभागं चुंबति स्पृशति-पश्यविलोकयेति- प्रस्तुते वर्ण्यमाने वृत्तांते मुखशब्दस्य प्रारंभ वदन साधारण्यात् चुंबतीत्यस्य संस्पर्शवदन संयोग साधारण्याद्रक्त शब्दस्यलोहित कामुक साधारण्याच्चंद्रमश्शब्दगत पुंलिंगेन ऐंद्रीशब्दगत स्त्रीलिंगेन च अयंरक्तः कामुकस्सन् ऐंद्राः इंद्र संबंधोपस्कृत परांगनायाः मुखं वदनं चुंबतिस्ववदनेन तद्वदनं संयोजयतीत्यर्थः – एवं प्रकारः इंद्र संबंधोपस्कृत परवतानिरक्त कामुकवृत्तांतः प्रतीयत इति समासोक्तिः ॥ ',
                eng: '<h3>Word meanings</h3><table><tr><td>अयम् - </td><td>This</td></tr><tr><td>चंद्रमाः - </td><td>The moon</td></tr><tr><td>रक्ताः - </td><td>Red</td></tr><tr><td>ऐंद्रीमुखं - </td><td>The face of the castern quarter</td></tr><tr><td>चुंबति - </td><td>Kisses</td></tr><tr><td>पश्य - </td><td>See !</td></tr></table><p>My beloved ! see, this moon becoming red kisses the face of the Eastern (Indra’s) quarter.</p><p>Here, by the use of the words-(1) चुम्बति the action of which belongs to a human being, (2) चन्द्रमाः in the masculine gender and (3) ऐन्द्री in the feminine gender, we understand that a lover, the subject of discourse, out of passion, kisses the face of some beautiful damsel residing in the east.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'परिकरः ',
      title_eng: 'परिकरः - Insinuator',
      id: 23,
      slokas: [
        {
          sloka: 'अलंकारःपरिकरःसाभिप्रायेविशेषणे।',
          sloka_explanation: {
            sans: 'साभिप्राय विशेषणैः अर्धविशेष विषयक तात्पर्यगर्भैर्विशेषणैर्हेतुभिः परिकरः परिकराख्योलंकारः – यत्रसाभिप्राय विशेषणान्युपपाद्यंते तत्र परिकरालंकार इत्यर्थः ',
            eng: '<h3>Word meanings</h3><table><tr><td>विशेषणे - </td><td>If the epithet</td></tr><tr><td>साभिप्राये - </td><td>Signifying the import</td></tr><tr><td>परिकरः - </td><td>Insinuator</td></tr><tr><td>अलंकारः - </td><td>Figure</td></tr></table><h3>Definition</h3><p>A speech with epithets signifying the import (of the speaker) is termed Insinuator.</p>'
          },
          examples: [
            {
              text: 'सुधांशुकलितोत्तंसस्तापंहरतुवःशिवः॥',
              explanation: {
                sans: 'सुधांपकलितोत्तंसः –चंद्रपरिष्कृतः उत्तंसः शेखरोयस्य सतधोक्तः – शिवःवः तापं मनस्तापं हरतुनिवर्तयतु- अत्र सुधांशुकलितेत्यादि विशेषणं तापहरणसामार्थ्याभिप्राय गर्भं अतः परिकरः ',
                eng: '<h3>Word meanings</h3><table><tr><td>सुधांशुकलितोत्तंसः - </td><td>Whose crest has been adorned by the moon</td></tr><tr><td>शिवः - </td><td>The God “Siva”</td></tr><tr><td>वः तापम् - </td><td>Your misery</td></tr><tr><td>हरतु - </td><td>Remove</td></tr></table><p>Let God Siva whose crest has been adorned with nectar-rayed (moon) remove your misery (lit. mental heat).</p><p>Here, the charming epithet सुधांशुकलितोत्तंसः  suggests that the heat is removable. This‘ figure occurs even when only one epithet is employed and when that epithet invests the verse with as peculiar charm agreeable to the effect like the present one.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'परिकरांकुरः',
      title_eng: 'परिकरांकुरः - Sprout of an Insinuator.',
      id: 24,
      slokas: [
        {
          sloka: 'साभिप्रायेविशेष्येतुभवेत्परिकरांकुरः।',
          sloka_explanation: {
            sans: 'विशेष्ये साभिप्राये सतितु परिकरांकुराख्योलंकारः भवेत् यत्र विशेष्यमभिप्राय गर्भंस्यात्तत्र परिकरांकुरस्स्यादित्यर्धः',
            eng: '<h3>Word meanings</h3><table><tr><td>विशेष्येतु - </td><td>When the noun itself</td></tr><tr><td>साभिप्राये - </td><td>Signifying the import</td></tr><tr><td>परिकरांकुरः - </td><td>Sprout of an Insinuator</td></tr><tr><td>भवेत् - </td><td>Is</td></tr></table><h3>Definition</h3><p>When the noun itself (i.e., Without epithets) signifies the import of the speaker, it is called the Sprout of an Insinuator.</p>'
          },
          examples: [
            {
              text: 'चतुर्णांपुरुषार्थानांदातादेवश्चतुर्भुजः॥',
              explanation: {
                sans: 'चतुर्णां पुरुषार्थानां धर्मार्थ काममोक्षाणां दातादेवः – तद्दान समर्था देवता चतुर्भुजः विष्णुरेव- अत्र चतुर्भुजत्वाद्विष्णुरेव युगपच्चतुर्विध पुरुषार्थ प्रदान समर्थः नान्योदेव इत्यभिप्राय गर्भं चतुर्भुजवि.....पादानम्',
                eng: '<h3>Word meanings</h3><table><tr><td>चतुर्भुजो देवः - </td><td>The four armed God Vishnu</td></tr><tr><td>चतुर्णां पुरूषार्थानां - </td><td>Of the four objects of human life</td></tr><tr><td>दाता - </td><td>Giver</td></tr></table><p>The four-armed God (Vishnu) is the giver of the four principal objects of life.</p><p>Four objects of life are धर्मः - ‘merit’, अर्थः - ‘wealth’, कामः - ‘enjoyment’ and मोक्षः - ‘liberation’.</p><p>“Here, the word चतुर्भुजः is one of the thousand names of the Lord Vishnu and is used here without epithets, The import of the speaker is that God Vishnu alone (being -four-armed) is able to distribute the four objects of life.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'श्लेषः',
      title_eng: 'श्लेषः - Paronomasia',
      id: 25,
      slokas: [
        {
          sloka: 'नानार्थसंश्रयःश्लोषोवर्ण्यावर्ण्योभयाश्रितः (वर्ण्यावर्ण्योभयास्पदः) ।',
          sloka_explanation: {
            sans: 'अनेकार्थगोचरः वर्णावर्णोभयाश्रयः- केवल प्रकृत गोचरः – केवला प्रकृतगोचरः- उदुभयविषयशब्दविन्यासरूप स्त्रिविधः – श्लेष इत्यर्थः',
            eng: '<h3>Word meanings</h3><table><tr><td>वर्ण्यावर्ण्योभयास्पदः - </td><td>Relating to 1. An object on hand, 2. An object not on hand and 3. both</td></tr><tr><td>नानार्थसंश्रयः - </td><td>Depending upon words having many meanings</td></tr><tr><td>श्लेषः - </td><td>Paronomasia</td></tr></table><h3>Definition</h3><p>Paronomasia is the expression by words having more than one signification referring: <ol><li> to an object on hand, </li><li> to an object not on hand and </li><li> to both.</li></ul></p>'
          },
          examples: [
            {
              text: 'सर्वदोमाधवःपायात्सयोगंगामदोधरत् (योऽगंगामदीधरत्) ॥',
              explanation: {
                sans: 'सर्वदः सर्वार्थप्रदः सःमाधवः पायात् रक्षतुयः अगंगोवर्धनाख्यंगांभुवं अदीधरत् भृशं बिभर्तिस्मयाश्रितः । ',
                eng: '<h3>Word meanings</h3><table><tr><td>सर्वदः - </td><td>All-giver</td></tr><tr><td>स माधवः - </td><td>The husband of मा  Lakshmi, the Lord Vishnu</td></tr><tr><td>पायात् - </td><td>May protect</td></tr><tr><td>यः - </td><td>Who</td></tr><tr><td>अगम् - </td><td>The mountain Govardhana</td></tr><tr><td>गाम् - </td><td>The earth</td></tr><tr><td>अदीधरत् - </td><td>Head up</td></tr><tr><td>सर्वदा - </td><td>Always</td></tr><tr><td>सः उमाधवः - </td><td>The husband of Uma, the Lord Shiva</td></tr><tr><td>पायात् - </td><td>May protect</td></tr><tr><td>यः - </td><td>Who</td></tr><tr><td>गंगाम् - </td><td>The river Ganges</td></tr><tr><td>अदीधरत् - </td><td>Bore (on his head)</td></tr></table><p>The all-giver Madhava who held up the mountain (Govardhana on his head) and the earth may protect (you).</p><p>The husband of Uma (Siva) who bore (on his head) the river Ganges may protect (you)</p><p>सर्वदो माधवः may be split into: <ol><li>सर्वदः माधवः </li><li>सर्वदा उमाधवः ।</li></ol></p><p>यो गंगाम्  may be split into: <ol><li> –यः अगं </li><li>यः गंगाम् ।</li></ol><p>Here both Madhava and Umadhava are objects on hand and this is therefore the Example of No. 1</p>'
              }
            },
            {
              text: '<h3>Example of No. 2</h3><br><br>अब्जेनत्वन्मुखंतुल्यंहरिणाहितसक्तिना।',
              explanation: {
                sans: 'अब्जेनेति हे प्रिये हरिणासूर्येण आहितानिहिता सक्तिरासक्तिर्वस्यतेन अब्जेन पद्मेन तधाहरिणेन मृगेण सक्तिर्यस्यतेन अब्जेव चंद्रेणत्वन्मुखंत्वद्वदनं तुल्यं समम्- अत्र अज्जपदस्योपमानत्वने अप्रकृतपद्म चंद्रगोचरत्वाद प्रकृतः श्लेषः अत्राब्जेनेत्यत्र एकनाहावलंबिफलद्वय वदर्धद्वय प्रतीतेरर्थ श्लेषः – हरिणाहितसक्ति नेत्यत्र बतुकाष्ठवच्छब्दश्लेषः ',
                eng: '<h3>Word meanings</h3><table><tr><td>त्वन्मुखम् - </td><td>Thy face</td></tr><tr><td>हरिणाहितसक्तिना हरिणेन - </td><td>by the deer आहिता effected सक्तिः attachment येन having the attachement effected by the deer in the form of the spot</td></tr><tr><td>अब्जेन - </td><td>By the moon</td></tr><tr><td>तुल्यम् - </td><td>Is equal</td></tr></table><p>Or</p></table><p>(Lady !) thy face resembles the moon having an attachment effected by the deer (in the form of the spot).</p><p>Or</p><p>(Lady !) thy face resembles the lotus having an attachment effected by the sun (in the act of blooming at the dawn).</p><p>Here, अब्ज “moon” and  अब्ज  “lotus” which are upamanas are both objects not on hand.</p>'
              }
            },
            {
              text: '<h3>Example of No. 3.</h3><br><br>उच्चरद्भूरिकीलालःशुशुभेवाहिनीपतिः॥',
              explanation_sans: 'उच्चरदुद्गच्छद्भूरिबहुळं कीलालं शोणितं यस्यसः शोणितेंभसिकीलालमित्यमरः वाहीनीपतिः सेनापतिः शुशुभेदिदीपे- तथा उज्जृंभमाणं भूरिकीलाल मुदकं यस्यसह् वाहिनीपतिः समुद्रः शुशुभे- अत्र सेनापतेः प्रकृतत्वं समुद्रस्या प्रकृतत्वमतः प्रकृता प्रकृतगोचरः श्लेषः ',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>उच्चरड्भूरिकीलालः - </td><td>Having profuse effusion of blood</td></tr><tr><td>वाहिनीपतिः - </td><td>The commander of the army (Bhishma)</td></tr><tr><td>शुशुभे - </td><td>shone</td></tr></table><p>or</p><table><tr><td>उच्चरड्भूरिकीलालः - </td><td>having a vast expanse of water</td></tr><tr><td>वाहिनीपतिः - </td><td>The lord of the rivers (ocean)</td></tr><tr><td>शुशुभे - </td><td>shone</td></tr></table><p>The commander of the army, Bhishma, shone by the profuse effusion of blood</p><p>or</p><p>The Lord of the rivers, the ocean, shone by the vast expanse of water.</p><p>Here, the commander Bhishma is the object on. hand and the ocean is the object not on hand.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अप्रस्तुतप्रशंसा  ',
      title_eng: 'अप्रस्तुतप्रशंसा - Indirect Description.',
      id: 26,
      slokas: [
        {
          sloka: 'अप्रस्तुतप्रशंसास्यात्सायत्रप्रस्तुताश्रया।',
          sloka_explanation: {
            sans: 'तत्रा प्रस्तुत प्रशंसास्यादितियोजना- प्रथमंज्ञेयाकुत्रेत्यत्राहसेति- यत्रसा अप्रस्तुत प्रशंसा अप्रस्तुतवृत्तांत वर्णनं प्रस्तुताश्रया प्रस्तुतवृत्तांतप्रतीति परुअवसायिनीस्यादिति संबंधः – यत्र प्रस्तुत वृत्तांत प्रत्यायनाया प्रस्तुत वृत्तांतो वर्ण्यतेतत्रा प्रस्तुत प्रशंसाख्योलंकार इति निष्कर्षः',
            eng: '<h3>Word meanings</h3><table><tr><td>यत्र - </td><td>where</td></tr><tr><td>सा - </td><td>That (description of an object not on hand)</td></tr><tr><td>प्रस्तुताश्रया - </td><td>Referring to an object on hand</td></tr><tr><td>अप्रस्तुतप्रशंसा स्यात् - </td><td>Is called Indirect Description</td></tr></table><h3>Definition</h3><p>When the description of an object not on hand conveys a reference to an object on hand, it is called Indirect Description.</p>'
          },
          examples: [
            {
              text: 'एकःकृतीशकुन्तेषुयोऽन्यंशक्रान्नयाचते॥',
              explanation: {
                sans: 'सर्वं सहा पतितमंबुन चातकानामिति वचनादिंद्रोयदान वर्षतितावत्पर्यंतं प्रतीक्ष्यतत्सृष्टोदकमंतराळ एवचातको गृह्णातीति प्रसिद्धिः – सः एक एव चातकः शकुंतेषु पक्षिषु मध्येकृतिनिपुणः नत्वन्येपक्षिण इत्यर्थः – अत्र सार्वभौमं विनान्यं क्षुद्रं राजानंन प्रार्धयामीत्यभिमानशालिनो वृत्तांतस्य वर्णनीयस्य प्रत्यायनार्थं तत्सरूपा प्रस्तुत चारकवृत्तांतोवर्णित इतीयम प्रस्तुत प्रशंसा उदाहरणांतराण्यूह्यानि ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>शकुन्तेषु - </td><td>Among the birds</td></tr><tr><td>एकः - </td><td>One only</td></tr><tr><td>(चातकः) - </td><td>Chataka bird</td></tr><tr><td>कृती - </td><td>Fortunate one</td></tr><tr><td>यः - </td><td>Who</td></tr><tr><td>शक्रादन्यं - </td><td>Other than Indra</td></tr><tr><td>न याचते - </td><td>Never begs</td></tr></table><p>(The chataka bird) is the only fortunate one, among the birds, which never begs of any other than Indra.</p><p>It is a known fact that chataka bird lives on rain drops and that Indra is the bestower of rain.</p><p>Here, the object in question is a noble man who never begs of any man except the Indra -like king and this is conveyed through the description of a chataka bird which is not the object on hand.</p><p>This is not समासोक्ति where a description of an object on hand conveys a reference to an object not on hand ; whilst, in this figure, it is quite contrary.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'प्रस्तुतांकुरः ',
      title_eng: 'प्रस्तुतांकुरः -The Sprout of Direct Description',
      id: 27,
      slokas: [
        {
          sloka: 'प्रस्तुतेनप्रस्तुतस्यद्योतनेप्रस्तुताङ्कुरः।',
          sloka_explanation: {
            sans: 'प्रस्तुतेन प्रस्तुत वर्णनेन प्रस्तुतस्य प्रस्तुत वृत्तांतस्यद्योतने सति  प्रस्तुतांकुरालंकारः – यत्र प्रस्तुत वृत्तांत प्रत्यायनाय प्रस्तुतांतरवृत्तंत एव वर्ण्यते- तत्र प्रस्तुतांकुरालंकारः ॥ ',
            eng: '<h3>Word meanings</h3><table><tr><td>प्रस्तुतेन - </td><td>By (description of) an object on hand</td></tr><tr><td>प्रस्तुतस्य - </td><td>Of (another) object on hand</td></tr><tr><td>द्योतने - </td><td>In the apprehension</td></tr><tr><td>प्रस्तुतांकुरः - </td><td>(it is) the Sprout of Direct Description</td></tr><h3>Definition</h3><p>When the description of an object on hand conveys a, reference to another object on hand, it is called Prastutankura.</p>'
          },
          examples: [
            {
              text: 'किंभृंगसत्यांमालत्यांकेतक्याकण्टकेद्धया॥',
              explanation: {
                sans: 'हे भृंगमालत्यां सुमनोलतायां सत्यांविद्यमानायां कंटकैस्सूचिकल्पै सूक्ष्मावयवैरिदस्तुतांकुरः । किंभृंगसत्यांघलत्यां केतक्याकंटकेद्धया ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>भृंग ! - </td><td>O bee !</td></tr><tr><td>मालत्यां सत्यां -When there is the Malati flower</td></tr><tr><td>कण्टकेड्बया - </td>Full of thorns</td></tr><tr><td>केतक्या - </td><td>By the Ketaki</td></tr><tr><td>किं - </td><td>What is the use.</td></tr></table><p>O Bee! What (is the use of thy amusement) with the (un blown) Ketaki full of thorns while thou hast here the Malati (Jasamine) flower.</p><p>Here, a lady, by the description of the bee’s act with the unblown  Ketaki bud witnessed by her in her pleasure garden indirectly intimates the same to her lover, the subject of discourse, who is at present in love with a maiden who has not yet arrived at puberty. </p><p>N. B. The bee and the lover are both objects on hand. </p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'पर्य्यायोक्तम् ',
      title_eng: 'पर्य्यायोक्तम् - Periphrasis',
      id: 28,
      slokas: [
        {
          sloka: 'पर्यायोक्तंतुगम्यस्यवचोभङ्ग्यन्तराश्रयम्।',
          sloka_explanation: {
            sans: 'पर्यायोक्तं तदप्याहुर्यद्व्याजेनेष्टसाधनम् । गम्यस्य भंग्यंतराश्रयं रूपांतर प्रतिपादकं वचनं वर्णनमित्यर्धः – पर्यायोत्तरयोयद्रूपेण गम्यः तस्यैवरूपांतरेण वर्ननमितियत्तत्पर्यायोक्तं ',
            eng: '<h3>Word meanings</h3><table><tr><td>गम्यस्य - </td><td>Of the fact intended to be expressed</td></tr><tr><td>भंग्यंतराश्रयम् - </td><td>Referring to another by a turn of speech</td></tr><tr><td>वचः तु - </td><td>The description</td></tr><tr><td>पर्य्यायोक्तम् - </td><td>Periphrasis</td></tr></table><h3>Definition</h3><p>When a fact intended to be intimated is conveyed by a. circumlocutory speech, or in other words, when a fact intended to be described is expressed by a turn of speech, or if the intended fact is expressed in a different manner it is Periphrasis.</p>'
          },
          examples: [
            {
              text: 'नमस्तस्मैकृतौयेनमुधाराहुवधूकुचौ॥',
              explanation: {
                sans: 'तस्मै- वासुदेवाय नमः – योराहुं स्वचक्रेण शिरोमात्रावशेषं कृत्वातं तदंगनालिंगनजनित सुखान्निवर्त्यतद्वधूस्तनयोर्वैयर्ध्यं संपादितवान्- तस्मै राहुवधू स्तनवैयर्ध्यकारणे भगवतेनम इत्यर्थः – अस्य वासुदेवस्य आ साधारणधर्मेण लक्ष्मीपतित्वादिना गम्यस्य राहुवधूकुचवैयर्ध्यकारुत्वेन प्रतिपादनं पर्यायोक्तम् ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>तस्मै - </td><td>To him</td></tr><tr><td>नमः - </td><td>Homage</td></tr><tr><td>येन - </td><td>By whom</td></tr><tr><td>राहुवधूकुचौ - </td><td>The breast of Rahu’s spouse</td></tr><tr><td>सुधा - </td><td>Useless</td></tr><tr><td>कृतौ - </td><td>Were made</td></tr></table><p>Homage to him (God Vishnu) by Whom the breasts of Rahu’s spouse were rendered useless.</p><p>Here, the intended fact is that homage is to the God Vishnu only, because he was the killer of Rahu and thus rendered the breasts of Rahu’s spouse useless and this fact has been expressed by a turn of speech, i.e., by different words which do not express it but by words which suggest it, simply for the purpose of giving a particular strikingness to the description.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka: '<h3>Periphrasis- A second kind</h3>पर्यायोक्तंतदप्याहुर्यद्व्याजेनेष्टसाधनम्।',
          sloka_explanation: {
            sans: 'व्याजेनान्यकार्यच्छलेन- इष्टस्यार्थन्व साधनमितियत्- तदपिपर्यायोक्तं कवय आहुरित्यर्थः – यत्र स्वाभीष्टकार्यं कार्यांतर व्याजेन साध्यते- तदपि पर्यायोक्तमिति निष्कर्षः ',
            eng: '<h3>Word meanings</h3><table><tr><td>व्याजिन - </td>Under a pretext</td></tr><tr><td>यत् इष्टसाधनम् - </td><td>The fulfillment of one’s own wish</td></tr><tr><td>तदपि - </td><td>Even that</td></tr><tr><td>पर्य्यायोक्तम् - </td><td>Periphrasis</td></tr><tr><td>आहुः - </td><td>(some) call</td></tr><tr><td>अहम् - </td><td>I</td></tr><tr><td>चूतलताम् - </td><td>The mango creeper</td></tr><tr><td>यामि - </td>Go</td></tr><tr><td>युवाभ्याम् - </td><td>By you both</td></tr><tr><td>इह - </td><td>Here</td></tr><tr><td>आस्यताम् - </td><td>Shall be stayed</td></tr></table><h3>Definition</h3><p>Even the fulfillment of one’s own wish under an artful pretext of doing some thing else is also called Periphrasis by some.</p>'
          },
          examples: [
            {
              text: 'यामिचूतलतांद्रष्टुंयुवाभ्यामास्यतामिह॥',
              explanation_sans: 'कस्याश्चित्सख्याः स्वसन्निधौ लज्जापरयोर्दंपत्योः स्वस्यचूतलता दर्शनार्थंगमन व्याजेन यथेच्छाविहार संपादनमिच्छंत्या इदं वचनं – अहं चूतलतां सहकारशाखां द्रष्टुंयामिगच्छामि- युवाभ्यांभवद्भ्यामत्त्रेव कुसुमितनीरंध्र कुंजेगृहे अन्यतांस्थीयतां ॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>अहम् - </td><td>I</td></tr><tr><td>चूतलताम् - </td><td>The mango creeper</td></tr><tr><td>द्रष्टुं - </td><td>to see</td></tr><tr><td>यामि - </td>Go</td></tr><tr><td>युवाभ्याम् - </td><td>By you both</td></tr><tr><td>इह - </td><td>Here</td></tr><tr><td>आस्यताम् - </td><td>Shall be stayed</td></tr></table><p>Lovers! I depart hence for the purpose of seeing (my) mango creeper and it shall be stayed here by you both.</p><p>Here, the speaker is a female messenger who having united her mistress with her intended lover departs from that place under the pretext of seeing her own chuta creeper so that the couple may freely enjoy in the absence of a third person.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'व्याजस्तुतिः',
      title_eng: 'व्याजस्तुतिः - Artful Praise or Irony',
      id: 29,
      slokas: [
        {
          sloka: 'उक्तिर्व्याजस्तुतिर्निन्दास्तुतिभ्यांस्तुतिनिन्दयोः।',
          sloka_explanation: {
            sans: 'निंदास्तुतिभ्यां स्तुतिनिंदयिरुक्ति व्याजस्तुत्यलंकारः – यत्र निंदा व्याजेन स्तुतिरेव क्रियते- यत्र स्तुतिव्याजेन विंदैव क्रियते- सापि व्याजस्तुतिरित्यर्धः ',
            eng: '<h3>Word meanings</h3><table><tr><td>निंदास्तुतिभ्याम् - </td><td>By (apparent) censure and praise</td></tr><tr><td>स्तुतिनिंदयोः - </td><td>Of the praise and censure</td></tr><tr><td>उक्तिः - </td><td>speech</td></tr><tr><td>व्याजस्तुतिः - </td><td>Artful Praise</td></tr><tr><td>स्वर्धुनि ! - </td><td>Celestial Ganges !</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>विवेकः - </td><td>Judgment</td></tr><tr><td>कः - </td><td>What</td></tr><tr><td>यत् - </td><td>Because</td></tr><tr><td>पापिनः - </td><td>The sinners</td></tr><tr><td>दिवम् - </td><td>To the heaven</td></tr><tr><td>नयसे - </td><td>Take</td></tr></table><h3>Definition</h3><p>when (1) the praise is understood by apparent censure and (2) censure by apparent praise, it is termed Artful Praise.</p>'
          },
          examples: [
            {
              text: '<h3>Example of No. 1 - when the praise is understood by apparent censure</h3>कःस्वर्धुनि! विवेकस्तेपापिनोनयसेदिवम्॥',
              explanation: {
                sans: 'हे स्वर्धिनि गंगे- तेतवको विवेकः – विवेको नास्तीत्यर्थः – यद्यस्मात्पापिनः पापनिलयान् दिवं स्वर्गं नयने- प्रापयसे- पापिनो पिष्वजलनय सेपापिनोदिनम् ॥',
                eng: '<p>O celestial river Ganga! Thou art devoid of judgment in that thou conveyest the sinners to the heaven.</p><p>Here, the real praise has resulted by the apparent censure and it consists in representing the Ganga as taking the sinners to heaven provided they once bathe in her waters.</p><p>N.B. - व्याजस्तुतिः = व्याजेन स्तुतिः  Praise by an artifice-when praise is understood by apparent censure.</p><p>When censure is understood by apparent praise, व्याजस्तुतिः  is explained as व्याजरूपा स्तुतिः  praise consisting in an artifice or a pretended praise.</p>'
              }
            },
            {
              text: 'साधुदूतिपुनःसाधुकर्तव्यंकिमतःपरम्।<br>यन्मदर्थेविलूनासिदन्तैरपिनखैरपि॥',
              explanation: {
                sans: 'प्रियविरहमसहमानाका चिन्नायिकानायकं समानेतुंदूतीम् । प्रेषयित्वा तदुपभुक्तां नखचिह्नादिभिः ज्ञात्वास्तुतिव्याजेनता मुपालभते- हे दूतिसाधुसम्यक् पुनरपि साधुत्वया साध्वाचरितं- अत श्श्लाघ्यासीत्यर्धः ',
                eng: '<h3>Word meanings</h3><table><tr><td>दूति! - </td><td>Messenger !</td></tr><tr><td>साधु - </td><td>Well</td></tr><tr><td>अतःपरम् - </td><td>Than this</td></tr><tr><td>किम् - </td><td>What other</td></tr><tr><td>साधु - </td><td>Good</td></tr><tr><td>पुनः - </td><td>Again</td></tr><tr><td>कर्तव्यम् - </td><td>To be done</td></tr><tr><td>यत् - </td><td>Because</td></tr><tr><td>मदर्थे - </td><td>On my account</td></tr><tr><td>दंतैरपि - </td><td>Even by the teeth</td></tr><tr><td>नखैरपि - </td><td>Even by the nails</td></tr><tr><td>विलूना असि - </td>Wast injured</td></tr></table><h3>Well (done) messenger ! What other good than this can again be done; because thou, on my account, wast injured even by (my lover’s) teeth and nails.</p><p>Here, the speaker a lady pining under separation sent her maid-servant as a messenger to her lover and on seeing her returning with marks, in her body, of her having toyed with her (lady‘s) lord, censures her under pretext of Praise saying that she (lady) was saved by her (the maid servant) from the injury by her lord’s teeth and nails ; whereas in fact she was angry when she saw her servant coming single without her lord and was more angry when she observed on her body the marks of sexual intercourse with her own lord. Hence a censure resulted in the apparent praise.</p><p>N. B.-This is not अप्रस्तुतप्रशंसा (XXVII),  for, in it, there is no strikingness consisting either in censure or praise.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'व्याजनिन्दा',
      title_eng: 'व्याजनिन्दा - Artful Censure',
      id: 30,
      slokas: [
        {
          sloka: 'निन्दायानिन्दयाव्यक्तिर्व्याजनिन्देतिगीयते।',
          sloka_explanation: {
            sans: 'निंदयान्य निंदायाः व्यक्तिः प्रतीतिस्सव्याजनिंदाख्योलंकार इति गीयते कथ्यते इत्यर्थः ',
            eng: '<h3>Word meanings</h3><table><tr><td>निंदया - </td><td>By censure</td></tr><tr><td>निंदायाः - </td><td>Of censure</td></tr><tr><td>व्यक्तिः - </td><td>Manifestation</td></tr><tr><td>व्याजनिंदा - </td><td>Artful Censure</td></tr><tr><td>इति - </td><td>As</td></tr><tr><td>गीयते - </td><td>Is called</td></tr></table><h3>Definition</h3><p>When an apparent censure (of an object not on hand) results in the censure (of an object not on hand), it is Artful Censure.</p>'
          },
          examples: [
            {
              text: 'विधेसनिन्द्योयस्तेप्रागेकमेवाहरच्छिरः॥',
              explanation: {
                sans: 'संसार निर्विण्नस्तत्प्रवर्तकं विधिमुपालभते- हे विधे ब्रह्मन् सहरः निंद्यः निंदार्हः – कुतः –यतः – प्राक् पूर्वकालेतव एकमेवशिरः – अहरत् चिच्छेद- नतुमस्तक चतुष्टयमित्यर्थः – समस्तमस्तकच्छेदेतु पुनस्संसार निर्मातुर भावात्सर्वेपि संसारभार क्लेशविमुक्तास्संतः सुखमाप्नुयुरित्यर्थः – तवनिर्मूलनमकृतवान् शिव एव निंद्य इति श्लोक तात्पर्यं- अत्रहरविंदया विषम संसार स्रष्टुर्विथेः निंदाभिव्यज्यत इति व्याजनिंदा भवति ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>विधे - </td><td>Creator !</td></tr><tr><td>सः - </td><td>He</td></tr><tr><td>निम्द्यः - </td><td>Is to be censured</td></tr><tr><td>यः - </td><td>who</td></tr><tr><td>ते - </td><td>Thy </td></tr><tr><td>प्राक् - </td><td>Formerly</td></tr><tr><td>एकमेव - </td><td>Only one</td></tr><tr><td>शिरः - </td><td>Head</td></tr><tr><td>अहरत् - </td><td>Took away</td></tr></table><p>O Creator 1 he (Siva) is to be censured-he that has lopped off only one head of thine formerly.</p><p>Here, the speaker, a poor man in very distressed circumstances, fancies himself that, if all the five heads of the God Brahmi were lopped off by Siva, then both the creator and the sufferings of the created would have been simultaneously put an end to. </p><p>Instead of directly censuring the God Brahma, the creator, the object on hand, the speaker censured the God Siva, the object not on hand, in having imprudently suffered the other four heads of Brahmi to remain.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'आक्षेपः',
      title_eng: 'आक्षेपः - Hint',
      id: 31,
      slokas: [
        {
          sloka: 'आक्षेपःस्वयमुक्तस्यप्रतिषेधोविचारणात्।',
          sloka_explanation: {
            eng: '<h3>Word meanings</h3><table><tr><td>स्वयम् -</td><td>By self</td></tr><tr><td>उक्तस्य - </td><td>Told or expressed</td></tr><tr><td>विचारणात् - </td><td>On deliberation</td></tr><tr><td>प्रतिषेधः - </td><td>Denial</td></tr><tr><td>आक्षेपः - </td><td>Hint</td></tr></table><h3>Definition</h3><p>A denial, after some deliberation, of what has been expressed, is called Hint. </p>'
          },
          examples: [
            {
              text: 'चन्द्र ! संदर्शयात्मानमथवास्तिप्रियामुखम्॥',
              explanation: {
                eng: '<h3>Word meanings</h3><table><tr><td>चंद्र ! - </td><td>O moon !</td></tr><tr><td>आत्मानम् - </td><td>Self</td></tr><tr><td>संदर्शय - </td><td>Show or discover</td></tr><tr><td>अथवा - </td><td>Or, or why</td></tr><tr><td>प्रियामुखम् - </td><td>Face of (my) beloved</td></tr><tr><td>अस्ति - </td><td>Is</td></tr></table><p>O moon ! Discover thy self (to me). Why? Here is the face of (my) beloved.</p><p>Here, we see only a semblance of denial. This figure is distinct from the Concealment (XI) Where the property of an object on hand is denied and that of another not on hand is superimposed upon it.</p>'
              }
            }
          ]
        }
      ],
      types: 2,
      type: [
        {
          sloka: '<h3>A second kind of Hint</h3>निषेधाभासमाक्षेपंबुधाःकेचनमन्वते।',
          sloka_explanation: {
            eng: '<h3>Word meanings</h3><table><tr><td>केचन - </td><td>Some poets</td></tr><tr><td>बुधाः - </td><td>Learned people</td></tr><tr><td>निषेधाभासम् - </td><td>Semblance of a denial</td></tr><tr><td>आक्षेपम् - </td><td>Hint</td></tr><tr><td>अन्वते - </td><td>Regard</td></tr><h3>Definition</h3><p>Some learned people regard the semblance of a denial as the figure Hint.</p>'
          },
          examples: [
            {
              text: 'नाहंदूतीतनोस्तापस्तस्याह्कालानलोपमः॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>अहम् - </td><td>I</td></tr><tr><td>दूतौ - </td><td>Go- between</td></tr><tr><td>न - </td><td>Not</td></tr><tr><td>तस्याः - </td><td>Of her</td></tr><tr><td>तनोः - </td><td>Of the body</td></tr><tr><td>कालानलोपमः - </td><td>Resembling the destructive fire at the end of the world</td></tr><tr><td>तापः - </td><td>Fever of separation</td></tr></table><p>I am no go-between but the love-fever (residing in ) her (mistress) body, resembling the destructive fire at the end of the world.</p><p>Here, the character of a person- that of the go- between, is denied. The fact of excessive hardship, experienced by the lady under the pangs of separation, which was intended to be conveyed by the go-between, the speaker, is suppressed in order to suggest more strikingly that the lady is sure to die if her lover delays even for a moment in meeting her.</p>'
            }
          ]
        },
        {
          sloka: '<h3>A third kind of Hint</h3>आक्षेपोऽन्योविधौव्यक्तेनिषेधेचतिरोहिते।',
          sloka_explanation: {
            eng: '<h3>Word meanings</h3><table><tr><td>विधौ - </td><td>Command or permission</td></tr><tr><td>व्यक्ते - </td><td>When apparent</td></tr><tr><td>निषेधे च - </td><td>And the denial</td></tr><tr><td>तिरोहिते - </td><td>When hidden</td></tr><tr><td>अन्यः - </td><td>Another kind</td></tr><tr><td>आक्षेपः - </td><td>Hint</td></tr><h3>Definition</h3><p>When the permission (to do some thing) is apparent (in words) but the denial (to do that thing) is hidden, it is a third kind of Hint.</p>'
          },
          examples: [
            {
              text: 'गच्छगच्छसिचेत्कान्ततत्रैवस्याज्जनिर्मम॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>कांत ! - </td><td>Lover !</td></tr><tr><td>गच्छसि चेत् - </td><td>If thou goest</td></tr><tr><td>गच्छ - </td><td>Goest</td></tr><tr><td>मम - </td><td>My</td></tr><tr><td>जनिः - </td><td>Birth</td></tr><tr><td>तत्रैव - </td><td>In that same place</td></tr><tr><td>स्यात् - </td><td>May be</td></tr></table><p>Departest (thou), my love, if thou art determined to go, and may my rebirth take place in that same place (where thou hast gone).</p><p>Here, the apparent permission of going granted by the lady suggests a clear prohibition, the meaning conveyed thereby being that the lover ought to desist from departing from her presence.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विरोधाभासः',
      title_eng: 'विरोधाभासः or विरोधः - Contradiction',
      id: 32,
      slokas: [
        {
          sloka: 'आभासत्वेविरोधस्यविरोधाभासइष्यते।',
          sloka_explanation: {
            eng: '<h3>Word meanings</h3><table><tr><td>विरोधस्य - </td><td>Of incongruity</td></tr><tr><td>आभासत्वे - </td><td>When apparent</td></tr><tr><td>विरोधाभासः - </td><td>Contradiction</td></tr><tr><td>इष्यते - </td><td>Is called</td></tr></table><h3>Definition</h3><p>When an incongruity (between two things) is apparent (in Words), then it is called Contradiction.</p>'
          },
          examples: [
            {
              text: 'विनापितन्वि !हारेणवक्षोजौतवहारिणौ॥',
              explanation: {
                eng: '<h3>Word meanings</h3><table><tr><td>तन्वि ! - </td><td>O slender woman !</td></tr><tr><td>तव - </td><td>thy</td></tr><tr><td>वक्षोजौ - </td><td>Breasts</td></tr><tr><td>हारेणा - </td><td>By the pearl- necklace</td></tr><tr><td>विनापि - </td><td>Though devoid of</td></tr><tr><td>हारिणौ - </td><td>Are charming or lit. possesses of necklace</td></tr></table><p>O slender lady ! thy breasts though devoid of pearl necklace are yet possessed of pearl necklaces, i.e., are yet charming.</p><p>Here, the apparent contradiction is to be explained by taking the word हारिणौ in the sense of ‘charming’ only.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विभावना',
      title_eng: 'विभावना - Peculiar Causation',
      id: 33,
      slokas: [
        {
          sloka: 'विभावनाविनापिस्यात्कारणंकार्यजन्मचेत्।',
          sloka_explanation: {
            eng: '<h3>Word meanings</h3><table><tr><td>कारणम् विना अपि - </td><td>Though without cause</td></tr><tr><td>कार्यजन्म चेत् - </td><td>If the production of the  effect take place</td></tr><tr><td>विभावना - </td><td>Peculiar Causation</td></tr><tr><td>स्यात् - </td><td>Is called</td></tr><h3>Definition</h3><p>When the production of an effect is represented as being without cause, it is Peculiar Causation.</p>'
          },
          examples: [
            {
              text: 'अपिलाक्षारसासिक्तंरक्तंत्वच्चरणद्वयम्॥',
              explanation: {
                eng: '<h3>Word meanings</h3><table><tr><td>त्वच्चरणाड्बयम् - </td><td>Thy two feet</td></tr><tr><td>लाक्षारसासिक्तम् अपि - </td><td>Though not dyed with red lac</td></tr><tr><td>रक्तम् - </td><td>Red</td></tr></table><p>Lady! thy two feet are red though they were not dyed with red lac.</p><p>Here, the contradiction in the red feet without its cause, the lac, is due to the redness of the lady’s feet being natural. Therefore, we see that the production of an effect in the absence of its cause is not inconsistent in as much as the denial of a known cause suggests that the effect produced must be natural or is due to some other hidden cause.</p>'
              }
            }
          ]
        }
      ],
      types: 5,
      type: [
        {
          sloka: '<h3>A second kind of Peculiar Causation </h3>हेतूनामसमग्रत्वेकार्योत्पत्तिश्चसामता।',
          sloka_explanation: {
            eng: '<h3>Word meanings</h3><table><tr><td>हेतूनाम् - </td><td>Of the causes</td></tr><tr><td>अमग्रत्वे - </td><td>When incomplete</td></tr><tr><td>कार्य्योत्पत्तिः - </td><td>The production of an effect</td></tr><tr><td>च - </td><td>Also</td></tr><tr><td>सा मता - </td><td>Is termed that Peculiar Causation</td></tr><h3>Definition</h3><p>When the production of an effect is represented as having taken place while its causes are apparently incomplete, (to produce such an effect), then it is the second kind of Peculiar Causation.</p>'
          },
          examples: [
            {
              text: 'अस्त्रैरतीक्ष्णकठिनैर्जगज्जयतिमन्मथः॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>मन्मथः - </td><td>God of love</td></tr><tr><td>अतीक्ष्णाकठिनैः - </td><td>Neither sharp nor hard</td></tr><tr><td>अस्त्रैः - </td><td>By weapons</td></tr><tr><td>अगत् - </td><td>The world</td></tr><tr><td>जयति - </td><td>Conquers</td></tr></table><p>By weapons, neither sharp nor hard, the God of love conquers the whole world.</p><p>Here, the conquest of the world by the God of love is represented as having taken place though his weapons are neither sharp nor hard (being only five flowers) and are therefore quite inadequate to produce such an effect. The contradiction here must be removed by the supposition of some superhuman cause specially gifted by the Supreme Spirit.</p>'
            }
          ]
        },
        {
          sloka: '<h3>A third kind of Peculiar Causation.</h3> कार्योत्पत्तिस्तृतीयासासत्यपिप्रतिबन्धके।',
          sloka_explanation: {
            eng: '<h3>Word meanings</h3><table><tr><td>प्रतिबंधके - </td><td>When an impediment</td></tr><tr><td>सत्यपि - </td><td>Though present</td></tr><tr><td>कार्य्योत्पत्तिः - </td><td>Production of an effect</td></tr><tr><td>तृतीया - </td><td>Third kind</td></tr><tr><td>सा - </td><td>That - “ Peculiar Causation”</td></tr><h3>Definition</h3><p>When the production of an effect is said to have taken place though there was an impediment (to such an effect), it is the third kind of Peculiar Causation.</p>'
          },
          examples: [
            {
              text: 'नरेन्द्रानेवतेराजन्दशत्यसिभुजङ्गमः॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>राजन् - </td><td>O king !</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>असिभुजंगमः - </td><td>Sword serpent i.e., the serpent in the form of thy sword</td></tr><tr><td>नरेंद्रान् एव - </td><td>Only the cures of poisons or kings</td></tr><tr><td>दशति - </td><td>Bites</td></tr></table><p>O king! thy sword-serpent bites only Narendran, i.e., curers of poisons only (lit. kings).</p><p>नरेन्द्र = king =dealer in antidotes. Here, serpent biting the curers of poison implies an impediment to the effect.</p>'
            }
          ]
        },
        {
          sloka: '<h3>ourth kind of Peculiar Causation. </h3>अकारणात्कार्यजन्मचतुर्थीस्याद्विभावना।',
          sloka_explanation: {
            eng: '<h3>Word meanings</h3><table><tr><td>अकारणात् - </td><td>From a different cause</td></tr><tr><td>कार्यजन्म - </td><td>Production of an effect</td></tr><tr><td>चतुर्थी - </td><td>Fourth kind</td></tr><tr><td>विभावना - </td><td>Peculiar Causation</td></tr><tr><td>स्यात् - </td><td>Is</td></tr></table><h3>Definition</h3><p>When the production of an effect is represented as being from a different cause, or, more literally, from a similar cause, it is the fourth kind of Peculiar Causation.</p>'
          },
          examples: [
            {
              text: 'शङ्खाद्वीणानिनादोऽयमुदेतिमहदद्भुतम्॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>शंखात् - </td><td>From a conch- shell</td></tr><tr><td>अयम् - </td><td>This</td></tr><tr><td>वीणानिनादः - </td><td>Sound of a lute</td></tr><tr><td>उदेति - </td><td>Proceeds</td></tr><tr><td>महदद्भुतम् - </td><td>Great wonder</td></tr></table><p>It is a great wonder that this musical sound of a lute proceeds from a. conch- shell(i.e., conch-shell-like neck of a damsel).</p><p>We know that a conch-shell cannot produce the sound of a lute and therefore this is a. Peculiar Causation.</p><p>N.B.- We have a Metaphorical Hyperbole in शंख , the upamana, because it was used For its upameya, the neck of a damsel.</p>'
            }
          ]
        },
        {
          sloka: '<h3>Fifth kind of Peculiar Causation. </h3>विरुद्धात्कार्यसंपत्तिर्दृष्टाकाचिद्विभावना।',
          sloka_explanation: {
            eng: '<h3>Word meanings</h3><table><tr><td>विरुड्वात् - </td><td>From an incongruous cause</td></tr><tr><td>कार्यसंपत्तिः - </td><td>Production of an effect</td></tr><tr><td>काचित् - </td><td>A certain kind</td></tr><tr><td>विभावना - </td><td>Peculiar Causation</td></tr><tr><td>दृष्टा - </td><td>Is seen</td></tr><tr><td>हंत - </td><td>Alas !</td></tr></table><h3>Definition</h3><p>When the production of an effect is produced from an incongruous cause, i.e., from a cause quite opposite to the real one, it is the fifth kind of Peculiar Causation.</p>'
          },
          examples: [
            {
              text: 'शीतांशुकिरणास्तन्वींहन्तसंतापयन्तिताम्॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>शीतांशुकिरणाः - </td><td>Moon’s (cool-rayed) rays</td></tr><tr><td>ताम् - </td><td>That</td></tr><tr><td>तन्वीम् - </td><td>The slender lady</td></tr><tr><td>संतापयन्ति - </td><td>Inflame</td></tr></table><p>Alas ! the rays of the moon (lit. cool-rayed) inflame that slender lady.</p><p>This is the state of a damsel, the object on hand, pining under separation from her lover. The rays of the moon have a peculiar charm of exciting the passions of such women and therefore it is said so.</p>'
            }
          ]
        },
        {
          sloka: 'Sixth kind of Peculiar Causation. कार्यात्कारणजन्मापिदृष्टाकाचिद्विभावना।',
          sloka_explanation: {
            eng: '<h3>Word meanings</h3><table><tr><td>कार्यात् - </td><td>From an effect</td></tr><tr><td>कारणजन्म - </td><td>Production of a cause</td></tr><tr><td>अपि - </td><td>Also</td></tr><tr><td>काचित् - </td><td>A certain kind</td></tr><tr><td>विभावना - </td><td>Peculiar Causation</td></tr><tr><td>दृष्टा - </td><td>Is seen</td></tr><h3>Definition</h3><p>When the cause is said to have been produced from its effect, it is also termed Peculiar Causation.</p>'
          },
          examples: [
            {
              text: 'यशःपयोराशिरभूत्करकल्पतरोस्तव॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>तव - </td><td>Thy</td></tr><tr><td>करकल्पतरोः - </td><td>Hand-kalpa-tree i.e., wish-yielding tree in the form of the hand</td></tr><tr><td>यशः पयोराशिः - </td><td>Ocean of fame</td></tr><tr><td>अभूत् - </td><td>Is produced</td></tr></table><p>O king! An ocean of fame has been formed out of thy hand-kalpataru (wish-yielding tree in the form of thy hand).</p><p>Here, the king referred to is Karna renowned for his liberal donations.</p><p>The kalpa tree was produced from the ocean at the time of churning. Here, the kalpa tree in the form of the king’s hand is said to be the cause of the ocean in the form of the kings fame for his unusual liberality.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विशेषोक्तिः',
      title_eng: 'विशेषोक्तिः  Peculiar Allegation',
      id: 34,
      slokas: [
        {
          sloka: 'कार्याजनिर्विशेषोक्तिःसतिपुष्कलकारणे।',
          sloka_explanation: {
            sans: 'संपूर्णकारणे सत्यपि- कार्याजनिः कार्यानिष्पत्तिः विशेषोक्तिः ',
            eng: '<h3>Word meanings</h3><table><tr><td>पुष्कलकारणे - </td><td>Abundant cause</td></tr><tr><td>सति - </td><td>When there is</td></tr><tr><td>कार्याजनिः - </td><td>Non-production of an effect</td></tr><tr><td>विशेषोक्तिः - </td><td>Peculiar Allegation</td></tr><h3>Definition</h3>The non-production of an effect when there existed abundant cause (for the same) is called Peculiar Allegation.</p>'
          },
          examples: [
            {
              text: 'हृदिस्नेहक्षयोनाभूत्स्मरदीपेज्वलत्यपि॥',
              explanation: {
                sans: 'स्मर एवदीपः तस्मिन् ज्वलत्यपि- हृदिकांता हृदये- स्नेहस्य प्रेष्णुः तैलस्य चक्षयोनाभूत् लोकेदीपज्वलने सतिस्नेहक्षयोभवति अत्रतुस्मरदीपज्वलने सत्यपि तैलंन क्षीणमितितैलनाशकारणे दीपज्वलने सत्यपि तदनिष्पत्तिवर्णनाद्विशेषोक्तिः ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>स्मरदीपे - </td><td>Cupid-lamp</td></tr><tr><td>हृदि - </td><td>In the heart</td></tr><tr><td>ज्वलत्यपि - </td><td>Though burning</td></tr><tr><td>स्नेहक्षयः - </td><td>Diminution of oil (affection)</td></tr><tr><td>न अभूत - </td><td>Did not take place</td></tr></table><p> The diminution of oil (lit affection) did not take place in the heart (of this lady pining under separation) even though the cupid lamp is burning (there).</p><p>Here, the burning of the cupid-lamp, the cause, is present and yet the effect, the diminution of oil, is represented as not taking place. The contradiction can, however, be removed by explaining the Word स्नेह in the sense of ‘affection’ only.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'असंभवः',
      title_eng: 'असंभवः - Improbability',
      id: 35,
      slokas: [
        {
          sloka: 'असंभवोऽर्थनिष्पत्तेरसंभाव्यत्ववर्णनम्।',
          sloka_explanation: {
            sans: 'असंभव इति अर्धनिष्पत्तेः कार्यसिद्धेरसभाव्यत्व वर्णनं संभावनाशक्यत्व वर्णनमसंभवालंकारः –यस्यकस्य चित्कार्यस्य निष्पत्तौ विषये इदं संभावयितुमेव नशक्यत इति यत्र वर्ण्यते तत्रा संभवः ॥ ',
            eng: '<h3>Word meanings</h3><table><tr><td>अर्थनिष्पत्तेः - </td><td>Of the accomplishment of an object</td></tr><tr><td>असंभाव्यत्ववर्णनम् - </td><td>The description of impossibility</td></tr><tr><td>असंभवः - </td><td>Improbability</td></tr><h3>Definition</h3><p>Improbability is the description of the accomplishment of a truly impossible act.</p>'
          },
          examples: [
            {
              text: 'कोवेदगोपशिशुकःशैलमुत्पाटयेदिति॥',
              explanation: {
                sans: 'गोपशिशुः गोपबालकः कृष्णः- शैलमुत्पाटयेत् उन्मूलयिष्यतीति- कोवेदकोवाजानाति- नकोपि संभावयितुं शक्नुयादितित्यर्थः – अत्र शिशुकृतस्य गोत्रोद्धारस्य कोवेदेत्य संभाव्यत्ववर्णनाद संभवालंकारः ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>गोपशिशुकः - </td><td>This shepherd boy</td></tr><tr><td>शैलम् - </td><td>The mountain</td></tr><tr><td>गोवर्धन उत्पाटयेदिति - </td><td>Would have eradicated</td></tr><tr><td>कः - </td><td>Who</td></tr><tr><td>वेद - Knew</td></tr></table><p>Who knew that this shepherd boy would have eradicated the Mountain Govardhana.</p><p>The shepherd boy is the Lord Krishna. who held up the Mountain Govardhana. for seven days as a large umbrella. to shelter his beloved Gopis and their cattle from the heavy and incessant rain caused by Indra to deluge the Gokula, the land of the shepherds.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'असंगतिः',
      title_eng: 'असंगतिः - Disconnection',
      id: 36,
      slokas: [
        {
          sloka: 'विरुद्धंभिन्नदेशत्वंकार्यहेत्वोरसंगतिः।',
          sloka_explanation: {
            sans: 'ययोः कार्यहेत्वोः भिन्नदेशत्वं भिन्नदेशावस्थानं विरुद्धमनुपपन्नंतयोः तद्वर्ण्यते चेत्- सः असंगत्यलंकारः',
            eng: '<h3>Word meanings</h3><table><tr><td>कार्यहेत्वोः - </td><td>Of the effect and the cause</td></tr><tr><td>विरुड्वं - </td><td>Inconsistent</td></tr><tr><td>भिन्नदेशत्वम् - </td><td>Different location</td></tr><tr><td>असंगतिः - </td><td>Disconnection</td></tr><h3>Definition</h3><p>The description of the effect and the cause as inconsistent and as occupying different locations, is termed Disconnection.</p>'
          },
          examples: [
            {
              text: 'विषंजलधरैःपीतंमूर्च्छितापथिकाङ्गनाः॥',
              explanation: {
                sans: 'जलधरैर्मेघैः- विषंकलंकालकूटश्चपीतम्- पधिकांगनाः वियोगिवध्वः- मूर्छिताः- जलपूर्णमेघानामुद्दीपकत्वात्तद्दर्शनान्मूर्च्छा क्रांताबभूवुरित्यर्थः – अत्रविषमितिश्लेषमूलाभेदाध्यवसायेन मेघानां कालकूटपाने सतिपधिक स्त्रीणां मूर्छेति प्रतीयते- लोकेही यस्य विषपानं तस्यैवमूर्छेति विषमूर्छयोस्समान देशत्वमुचितं भिन्नदेशत्वंतु विरुद्धं- इहतुमेघानां विषपानं स्त्रीणां मूर्छेतितयोर्विरुद्धभिन्नदेशत्व वर्णनाद संगतिः ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>जलधरैः - </td><td>By the clouds</td></tr><tr><td>विषम् - </td><td>Poison (lit. water)</td></tr><tr><td>पीतम् - </td><td>Was drunk</td></tr><tr><td>पथिकांगनाः - </td><td>The consorts of the travelers</td></tr><tr><td>मूर्छिताः - </td><td>Fainted</td></tr></table><p>The poison (lit. water) was drunk by the clouds and the consorts of the travelers fainted.</p><p>This figure is only an exception to the ornament of Contradiction (XXXIII) and not Contradiction itself, where the mutual inconsistency of two objects resides in one place ; but in this figure in two different places.</p><p>The drinking of poison (water) by the clouds and its effect, the fainting of the consorts, take place in two different localities. It is a. convention of poets that the women are affected at the sight of the clouds in the rainy season being separated from their lovers who therefore hasten to meet their beloved.</p>'
              }
            }
          ]
        }
      ],
      types: 2,
      type: [
        {
          sloka: '<h3>Second kind of Disconnection </h3>अन्यत्रकरणीयस्यततोऽन्यत्रकृतिश्चसा।',
          sloka_explanation: {
            sans: 'अन्यत्रकरणीयस्य कर्तुमर्हस्यततस्तस्मादुचित देशात्- अन्यत्रानुचितस्थले कृतिः करणं चान्या संगतिः',
            eng: '<h3>Word meanings</h3><table><tr><td>अन्यत्र - </td><td>In another place</td></tr><tr><td>करणीयस्य - </td><td>Of a thing to be done</td></tr><tr><td>ततः - </td><td>Other than</td></tr><tr><td>अन्यत्र - </td><td>Another place</td></tr><tr><td>कृतिः च - </td><td>Accomplishment too</td></tr><tr><td>सा - </td><td>That i.e., Disconnection</td></tr></table><p>When the accomplishment or effect of an object to be produced in a certain locality is represented as having taken place in a quite different locality, it is called the second kind of Disconnection.</p>'
          },
          examples: [
            {
              text: 'अपारिजातांवसुधांचिकीर्षन्द्यांतथाऽकृथाः।',
              explanation_sans: 'अपारिजातामिति- पारिजातवृक्षं भूमिं नयंतं कृष्णमुद्दिश्य शक्रस्येदं सोपालं भवचनम्- हे कृष्णवसुधांभूमिं- अपारिजातां अपगतशत्रुकां पारिजातरहितां च चिकीर्षन् विधातुमिच्छन् द्यां स्वर्गं तथा अपारिजातां पारिजातरहितां- अकरोः कृतवान्- अत्र श्लेषमूलाभेदाध्यवसायेन भुवमपारिजातां कर्तुमिच्छन् स्वर्गमेवतादृशं कृतवानिति- अन्यत्रभुविकर्तव्यस्या पारिजातत्वस्यततोन्यत्र स्वर्गे क्रियावर्णनाद संगतिः ॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>(कृष्णाः) - </td><td>(Lord Krishna)</td></tr><tr><td>वसुधां - </td><td>The earth</td></tr><tr><td>अपारिजाताम् - </td><td>Devoid of परिजात or अरिजात</td></tr><tr><td>चिकीर्षन् - </td><td>Wishing to do</td></tr><tr><td>द्यां - </td><td>The paradise</td></tr><tr><td>तथा अकृथाः - </td><td>Did so</td></tr></table><p>Lord Krishna who wished to make the earth Aparijata devoid of the multitude of foes made the celestial world so i.e. अपारिजाता devoid of Parijata tree.</p><p>Parijata is a celestial tree produced at the churning of the milky-ocean. Krishna at the request of one of his wives Satyabhama carried off this tree from Indra’s garden (Nandana). A conflict ensued between Indra and Krishna in which the latter was victorious. The tree was brought to the city Dvaraka and was planted in the Satyabhama’ s pleasure-garden.</p><p>N. B.-This figure is possible only under a pun.</p>'
            }
          ]
        },
        {
          sloka: '<h3>Third kind of Disconnection </h3> अन्यत्कर्तुंप्रवृत्तस्यतद्विरुद्धकृतिस्तथा॥',
          sloka_explanation: {
            sans: 'अन्यत्कार्यं कर्तुं प्रवृत्तस्य- तद्विरुद्धकृतिः कार्यविरुद्धकार्यकरणं च सा असंगतिः ॥ ',
            eng: '<h3>Word meanings</h3><table><tr><td>अन्यम् - </td><td>Another (thing)</td></tr><tr><td>कर्तुं - </td><td>To do</td></tr><tr><td>प्रवृत्तस्य - </td><td>Of a person engaged</td></tr><tr><td>तत् विरुड्वकृतिः - </td><td>The accomplishment quite contrary to the above</td></tr><tr><td>तथा - </td><td>So i.e., the figure Disconnection</td></tr></table><p>An incongruous effect of an object obtained by an agent engaged to do a quite different thing is termed a third kind of Disconnection.</p>'
          },
          examples: [
            {
              text: 'गोत्रोद्धारप्रवृत्तोऽपिगोत्रोद्भेदंपुराऽकरोः॥',
              explanation_sans: 'गोत्रोद्धार प्रवृत्तोपि गोत्राया ऊर्व्याः उद्धाराय उद्धरणाय प्रवृत्तोपित्वं- गोत्रोद्भेदं गोत्राणां पर्वतानामुद्भेदंखुर घट्टनैर्दळनं भुवोदळनं च- पुरावराहावतारे अकरोकृतवानसीत्यर्थः – इदमपितदानी मेव कृष्नमुद्दिश्य शक्रन्यसोपालंभ वचनम्- अत्रापि श्लेषमूलाभेदाध्यवसायेनैव भूम्युद्धरण प्रवृत्तोपि  तद्दळनमेवकृतवानिति- अन्यद्भूम्युद्धरणं कर्तुं प्रवृत्तस्य कृष्णस्य तद्विरुद्धकृतिः भूम्युद्धरणरूपकार्य विरुद्धतद्धनरूपकार्यकरणं वर्णितमितिलक्षणसंगतिः ॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>(विष्णो) - </td><td>(O Lord Vishnu)</td></tr><tr><td>गोत्रोद्वारप्रवृत्तः अपि - </td><td>Though engaged in raising the earth</td></tr><tr><td>गोत्रोद्भेदम् - </td><td>The splitting of the earth</td></tr><tr><td>पुरा - </td><td>Formerly</td></tr><tr><td>अकरोः - </td><td>Thou didst.</td></tr></table><p>O Lord Vishnu; formerly though thou wert engaged in the raising of the earth, thou didst (the opposite, i.e.) the splitting of the earth (by the foot-prints of the Varaha).</p><p>This refers to the third incarnation of Vishnu in the form of a boar in order to raise the earth which was immersed in water. After raising the earth he walked on the earth and the foot prints made by him are referred to here.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विषमम्',
      title_eng: 'विषमम्- Incongruity',
      id: 37,
      slokas: [
        {
          sloka: 'विषमंवर्ण्यतेयत्रघटनाऽननुरूपयोः।',
          sloka_explanation: {
            sans: 'यत्राननुरूपयोर्विसदृशयोर्घटना संबंधोवर्ण्यते तद्विषममित्यर्थः ',
            eng: '<h3>Word meanings</h3><table><tr><td>यत्र - </td><td>where</td></tr><tr><td>अननुरूपयोः - </td><td>Of two incongruous (things)</td></tr><tr><td>घटना - </td><td>Combination</td></tr><tr><td>वर्ण्यते - </td><td>Is described</td></tr><tr><td>विषमम् - </td><td>Incongruity</td></tr></table><h3>Definition</h3><p>Vishama is a figure where a combination of two incongruous things is described.</p>'
          },
          examples: [
            {
              text: 'क्वेयंशिरीषमृद्वङ्गीक्वतादृङ्मदनज्वरः॥',
              explanation: {
                sans: 'शिरीषमृद्वंगीशिरीष कुसुममृदुलगात्री इयं क्व- कुत्र- तादृक्तथाविधः मदनज्वरश्चक्व अतिमृदुलत्वेन अतिदुस्सहत्वेन चाननुरूपत्वादनयोर्घटनात्तादृक्संतापं कथं सोढुं शक्नुयोः । क्वेयं शिरीषमृद्वंगीक्वतादृङ्मदनज्वरः ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>शिरीषमृद्वङ्गी - </td><td>Having the body soft as the Sirisha flower</td></tr><tr><td>इयम् - </td><td>This (lady)</td></tr><tr><td>क्व - </td><td>Where</td></tr><tr><td>तादृक् - </td><td>That</td></tr><tr><td>मदनज्वरः - </td><td>Love-fever or torments of God of love</td></tr><tr><td>क्व - </td><td>Where</td></tr></table><p>Where this lady with body as soft as the Sirisha flower and where these torments or fever of the God of love.</p><p>Here, we see the incongruity or incompatible relation of two things which are opposed to each other, i.e., the nature of the God of love is quite opposed to the nature of the lady, under description, whose body is soft as the Sirisha flower.</p>'
              }
            }
          ]
        }
      ],
      types: 2,
      type: [
        {
          sloka: '<h3>Second kind of Incongruity.</h3>विरूपकार्यस्योत्पत्तिरपरंविषमंमतम्।',
          sloka_explanation: {
            sans: 'विरूपकार्यस्यकारणविरुद्धकार्य्स्य उत्पत्तिर्जननमप्यपरमन्यद्विषमं- मतमिष्टं',
            eng: '<h3>Word meanings</h3><table><tr><td>विरूपकार्यस्य - </td><td>Of the opposite effect</td></tr><tr><td>उत्पत्तिः - </td><td>Production</td></tr><tr><td>अपरम् - </td><td>Another kind</td></tr><tr><td>विषमम् - </td><td>Incongruity</td></tr><tr><td>मतम् - </td><td>Is considered</td></tr></table><h3>Definition</h3><p>The production of an effect from an incongruous cause is considered a second kind of Incongruity. Or in other words, when the quality of the effect is opposed to that of its cause, it is Incongruity.</p>'
          },
          examples: [
            {
              text: 'कीर्त्तिंप्रसूतेधवलांश्यामातवकृपाणिका॥',
              explanation_sans: 'हे राजन् तवश्यामानीलवर्णाकृपाणिखड्गः दवळां शुभ्रांकीर्तिं प्रसूते- भवत्खड्गमहिम्ना शुभ्राकीर्तिर्जातेत्यर्थः – कारणं यद्गुणकंकार्यं तद्गुणकमेवेतिलोकस्थितिः – अत्रश्यामखड्गरूपकारणे नतद्विरुद्ध शुभ्रकीर्तिजननवर्णनाद्द्वितीयं विषमम्॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>तव - </td><td>Thy</td></tr><tr><td>श्यामा - </td><td>Dark</td></tr><tr><td>कृपाणिका - </td><td>Sword</td></tr><tr><td>धवलाम् - </td><td>White</td></tr><tr><td>कीर्त्तिं - </td><td>Fame</td></tr><tr><td>प्रसूते - </td><td>Produces</td></tr></table><p>O king ! Thy dark sword produces a white fame. </p><p>Here, We have White fame arising from the dark sword which has been figured here as the cause in contravention to the general convention-that the quality of an effect must conform to its cause.</p>'
            }
          ]
        },
        {
          sloka: '<h3>Third kind of Incongruity.</h3>अनिष्टस्याप्यवाप्तिश्चतदिष्टार्थसमुद्यमात्।',
          sloka_explanation: {
            sans: 'इष्टार्थ समुद्यमात् अभिलषितार्धोद्योगादनिष्टस्यानर्थस्य अवाप्तिश्च प्राप्तिरपितद्द्विषमित्यर्थः – यत्रेष्टलाभाशयाप्रवृत्तौ सत्यांन केवलमिष्टानवाप्तिः- प्रत्युतानर्थावाप्तिरपियस्मात्- तदव्यपरं विषममितिनिष्कर्षः ',
            eng: '<h3>Word meanings</h3><table><tr><td> इष्टार्थसमुद्यमात् - </td><td>From an endeavor made for a desired object</td></tr><tr><td>अनिष्टस्य अपि - </td><td>Of an undesired object</td></tr><tr><td>अवाप्तिः - </td><td>Attainment</td></tr><tr><td>तत् - </td><td>It i.e., Incongruity</td></tr></table><h3>Definition</h3><p>The attainment of an undesired object from an Endeavour made for a desired one is termed the third kind of Incongruity. Or in other words, when a desired object for which an endeavor is made is not obtained but, on the contrary, an unfavorable result is obtained, it is the third kind of Incongruity.</p>'
          },
          examples: [
            {
              text: 'भक्ष्याशयाहिमञ्जूषांदृष्ट्वाखुस्तेनभक्षितः॥',
              explanation_sans: 'आखुर्मूषिकः भक्ष्याशयाभक्षणार्ह द्रव्यलाभकृष्णया- अहिमंजूषां सर्पपेटिकां दष्ट्वादंतैश्छित्वा- तेन सर्पेणभक्षितः- भक्ष्यभ्रमेण सर्पपेटिकां दष्ट्वातद्विवरेण मुखं प्रसार्यतत्रस्थसर्पेण स्वयमेवदष्टस्सन् मृत्योभूदित्यर्धः- अत्र भक्ष्यार्धं प्रवृत्तेन केवलं भक्ष्यानवाप्तिः – प्रत्युतस्वमरणरूपानर्थावाप्तिरपि जातेतितृतीयं विषमम्॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>आखुः - </td><td>Rat</td></tr><tr><td>भक्ष्याशया - </td><td>With the hope of getting some eatables</td></tr><tr><td>अहिमंजूषाम् - </td><td>The snake basket</td></tr><tr><td>दृष्ट्वा - </td><td>Having seen</td></tr><tr><td>(प्रविष्टः) - </td><td>(entered)</td></tr><tr><td>तेन - </td><td>By it</td></tr><tr><td>भक्षितः - </td><td>Was devoured</td></tr></table><p>The rat seeing the snake-basket (entered into the same) in the hope of obtaining some eatables and was itself devoured by it (snake).</p><p>Here, the object of the rat to obtain some eatables for it by boring the basket was not attained and it became a pray to the hungry snake lying in the basket.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'समम्',
      title_eng: 'समम्- The Equal',
      id: 38,
      slokas: [
        {
          sloka: 'समंस्याद्वर्णनंयत्रद्वयोरप्यनुरूपयोः ।',
          sloka_explanation: {
            sans: 'यत्रानुरूपयोर्वर्णनं क्रियतेतत्र समालंकारः- यत्र अनुपयोर्द्वयोः घटनं वर्ण्यते तत्र सममितिनिष्कर्षः ',
            eng: '<h3>Word meanings</h3><table><tr><td>यत्र - </td><td>Where</td></tr><tr><td>अनुरूपयोः ड्वयोः - </td><td>Of two agreeable objects</td></tr><tr><td>वर्णनम् - </td><td>Description</td></tr><tr><td>समम् - </td><td>The Equal</td></tr><tr><td>स्यात् - </td><td>Is</td></tr></table><h3>Definition</h3><p>सम is the description of the combination of two agreeable objects.</p>'
          },
          examples: [
            {
              text: 'स्वानुरूपंकृतंसद्महारेणकुचमण्डलम् ॥',
              explanation: {
                sans: 'हारेणमुक्ताहारेणकुचंडलं स्वानुरूपं स्वसदृशं सद्मथानं कृतं- अस्यांगस्य तदाश्रयण योग्यत्वादितिभावः- अत्रमुक्ताहारस्य कुचमंडलमनुरूपं स्थानमित्यनुरूपयोर्घटनं वर्णितमतस्समम् ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>हारेण - </td><td>By the pearl-necklace</td></tr><tr><td>कुचमण्डलम् - </td><td>The circular bosoms</td></tr><tr><td>स्वानुरूपम् - </td><td>Worthy of itself</td></tr><tr><td>सद्म - </td><td>Place</td></tr><tr><td>कृतम् - </td><td>selected</td></tr></table><p>The circular bosoms were selected by the pearl-necklace as the (fit) place worthy of itself.</p>'
              }
            }
          ]
        }
      ],
      types: 2,
      type: [
        {
          sloka: '<h3>Second kind of समम्</h3>सारूप्यमपिकार्यस्यकारणेनसमंविदुः ।',
          sloka_explanation: {
            sans: 'कार्यस्य कारणेन सारूप्यं आनुरूप्यवर्ननमपि समं विदुः ॥ ',
            eng: '<h3>Word meanings</h3><table><tr><td> कार्य्यस्य - </td><td>Of the effect</td></tr><tr><td>कारणेन - </td><td>By the cause</td></tr><tr><td>सारूप्यम् अपि - </td><td>Sameness also</td></tr><tr><td>समम् - </td><td>Equal</td></tr><tr><td>विदुः - </td><td>Know</td></tr></table><h3>Definition</h3><p>The sameness of an effect with its cause is termed a second kind of Sama.</p>'
          },
          examples: [
            {
              text: 'नीचप्रवणतालक्ष्मि !जलजायास्तवोचिता ॥ ',
              explanation_sans: 'प्रायशः नीचानुवर्तनशीलां लक्ष्मिमुद्दिश्य इदं सोत्प्रास वचनं- हे लक्ष्मीः जलजायास्समुद्रोत्पन्नायास्तवनी च प्रवणता निकृष्टानुसरणशीलत्वं निम्नदेधाभिमुख्यं च- उचिता आर्हा जलेनीच प्रावण्यस्य स्वाभाविकत्वात्तदुत्पन्ना यास्तवापिनी च प्रवणता कथं नस्यात्- अतः कारणगुण क्रमागत नीचप्रावण्यविषयेत्वं नोपालभ्येतिभावः- अत्रजलस्यनीच प्रावण्यं निम्नदेशाभिमुख्यं लक्ष्म्यास्तुनिस्तवोचिता॥ ',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>लक्ष्मि ! - </td><td>O Goddess of riches!</td></tr><tr><td>जलजायाः - </td><td>born of water</td></tr><tr><td>तव - </td><td>thy</td></tr><tr><td>नीचप्रवणता - </td><td>Resorting to the low people</td></tr><tr><td>उचिता - </td><td>Is worthy</td></tr></table><p>O Goddess of riches ! Thy character of resorting to the low (people) is worthy of thyself born of water.</p><p>The Goddess Lakshmi was produced at the churning of the Ocean. Here, the character of Lakshmi is said to be the same as that of its cause, the Water which naturally flows in a low direction.</p>'
            }
          ]
        },
        {
          sloka: '<h3>Third kind of  समम् ।</h3>विनानिष्टं च तत्सिद्धिर्यमर्थंकर्तुमुद्यतः ।',
          sloka_explanation: {
            eng: '<h3>Word meanings</h3><table><tr><td> यम् अर्थम् - </td><td>Which thing</td></tr><tr><td>कर्तुम् - </td><td>To do</td></tr><tr><td>उद्यमः - </td><td>Endeavour</td></tr><tr><td>अनिष्टम् विना - </td><td>Without an obstacle</td></tr><tr><td>तत्सिड्विः - </td><td>The accomplishment of that</td></tr><tr><td>समम् - </td><td>The equal</td></tr></table><h3>Definition</h3><p>The accomplishment, without any obstacle, of an object for which an effort has been made, is termed a third kind of Sama.</p>'
          },
          examples: [
            {
              text: 'युक्तोवारणलाभोऽयंस्यान्नतेवारणार्थिनः ॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>वारणार्थिनः - </td><td>Seeking for an elephant</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>अयम् - </td><td>This </td></tr><tr><td>वारणालाभः - </td><td>Attainment of वारणा (impediment)</td></tr><tr><td>युक्तः स्यात् न - </td><td>Is it not worthy</td></tr></table><p>Friend! Is not this acquisition of (वारणा) impediment worthy of thee that sought for an elephant (वारणा).</p><p>This is possible only under a pun.</p><p>The speaker here is a person that went to his king for an elephant. He was obstructed by the door- keeper of the king’s palace and this was addressed in jest by his (speaker’s) brother-in-law who accompanied him saying that this वारणा (impediment) is equal to hat वारणा (elephant) sought for.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विचित्रम् ',
      title_eng: 'विचित्रम् - Strange',
      id: 39,
      slokas: [
        {
          sloka: 'विचित्रंतत्प्रयत्नश्चेद्विपरीतःफलेच्छया ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>चेत् विपरीतफलेच्छया - </td><td>With a desire to obtain its opposite effect</td></tr><tr><td>प्रयत्नः - </td><td>An Endeavour</td></tr><tr><td>तत् - </td><td>That</td></tr><tr><td>विचित्रम् - </td><td>Strange</td></tr></table><h3>Definition</h3><p>If an endeavour is made by a person desiring to attain the exact opposite effect, it is called the Strange.</p>'
          },
          examples: [
            {
              text: 'नमन्तिसन्तस्त्रैलोक्यादपिलब्धुंसमुन्नतिम् ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>संतः - </td><td>Good people</td></tr><tr><td>त्रिलोक्यादपि - </td><td>Higher than the tripled world</td></tr><tr><td>समुन्नतिम् - </td><td>Exalted position</td></tr><tr><td>लब्धुम् - </td><td>To attain</td></tr><tr><td>नमन्ति - </td><td>Bow down</td></tr></table><p>The good people bow down for the purpose of attaining an exalted position higher than’ the triple World.</p><p>Here, the act is bowing down and the desired effect is elevation over the triple world.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अधिकम् ',
      title_eng: 'अधिकम् - Exceeding',
      id: 40,
      slokas: [
        {
          sloka: 'अधिकंपृथुलाधारादाधेयाधिक्यवर्णनम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td> पृथुलाधारात् - </td><td>Than the more spacious containment</td></tr><tr><td>आधेयाधिक्यवर्णनम् - </td><td>The description of the contained as greater</td></tr><tr><td>अधिकम् - </td><td>The exceeding</td></tr><tr><td>यत्र जले - </td><td>In which water</td></tr><tr><td>ब्रह्मांडानि - </td><td>The mundane worlds</td></tr><tr><td>तत्र - </td><td>In that</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>गुणाः - </td><td>Merits</td></tr><tr><td>न मांति - </td><td>Do not contain</td></tr></table><h3>Definition</h3><p>When the object contained is described as vaster than the containant itself (which is really more spacious), it is termed the Exceeding.</p>'
          },
          examples: [
            {
              text: 'ब्रह्माण्डानिजलेयत्रतत्रमान्ति न तेगुणाः ॥ ',
              explanation: {
                sans: '',
                eng: '<p>Lord ! The waters which contain these mundane worlds could not contain (within themselves all) thy good qualities.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka: '<h3>Second kind of Exceeding.</h3>पृथ्वाधेयाद्यदाधाराधिक्यंतदपितन्मतम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>पृथ्वाधेयात् - </td><td>Than the vast contained</td></tr><tr><td>यत् - </td><td>Which</td></tr><tr><td>आधाराधिक्यम् - </td><td>The description of the containant as exceeding</td></tr><tr><td>तदपि - </td><td>It too</td></tr><tr><td> तत् - </td><td>That i.e., Exceeding</td></tr><tr><td>मतम् - </td><td>Is regarded</td></tr></table><h3>Definition</h3><p>When the containant itself is described as vaster than the vast contained, then we have a second kind of Exceeding.</p>'
          },
          examples: [
            {
              text: 'कियद्वाग्ब्रह्मयत्रैतेविश्राम्यन्तिगुणास्तव ॥ ',
              explanation_sans: '',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>यत्र - </td><td>Where</td></tr><tr><td>एते - </td><td>These</td></tr><tr><td>तव - </td><td>Thy</td></tr><tr><td>गुणाः - </td><td>Good qualities</td></tr><tr><td> विश्राम्यंति - </td><td>Come to an end</td></tr><tr><td>वाग्ब्रह्म - </td><td>The speech Brahman= Vedas</td></tr><tr><td>कियत् - </td><td>How great</td></tr></table><p>How great is the speech Brahman =Vedas, where all these thy good qualities come to an end, i.e., become completely described.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अल्पम् ',
      title_eng: 'अल्पम् - Smallness',
      id: 41,
      slokas: [
        {
          sloka: 'अल्पंतुसूक्ष्मादाधेयाद्यदाधारस्यसूक्ष्मता ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>सूक्ष्मात् - </td><td>Small</td></tr><tr><td>आधेयात् - </td><td>Than the object contained</td></tr><tr><td>यत् - </td><td>Which</td></tr><tr><td>आधारस्य - </td><td>Of the containant</td></tr><tr><td>सूक्ष्मता - </td><td>Smallness</td></tr><tr><td>अल्पम् - </td><td>Smallness</td></tr></table><h3>Def. When the containant is described as smaller than the object contained which is really very small, it is called Smallness.</p>'
          },
          examples: [
            {
              text: 'मणिमालोर्मिकातेऽद्यकरेजपवटीयते ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>अद्य - </td><td>To-day</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>करे - </td><td>In the hand</td></tr><tr><td>मणिमालोर्मिका - </td><td>Ring inlaid with precious stones</td></tr><tr><td>जपमालायते - </td><td>Becomes a rosary</td></tr></table><p>Lady I Thy ring inlaid with precious stones has become to-day a rosary in thy hand.</p><p>Here, the thinness of the hand or the finger which contained the ring is meant. The lady under description was suffering from the pangs of separation from her lover on a certain day and so her hand or finger, the containant, became so thin that the ring, the object contained, became greater than the hand, the containant, and served as a rosary.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अन्योन्यम् ',
      title_eng: 'अन्योन्यम् - The Reciprocal',
      id: 42,
      slokas: [
        {
          sloka: 'अन्योन्यंनामयत्रस्यादुपकारःपरस्परम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td> यत्र - </td><td>where</td></tr><tr><td>परस्परम् - </td><td>Mutual</td></tr><tr><td>उपकारः - </td><td>Benefit</td></tr><tr><td>स्यात् - </td><td>Is</td></tr><tr><td>(तत्र) - </td><td>There</td></tr><tr><td>अन्योन्यम् नाम - </td><td>The figure called Reciprocal</td></tr></table><h3>Definition</h3><p>When two things benefit each other (by doing the same act causing each other’s beauty), it is the Reciprocal.</p>'
          },
          examples: [
            {
              text: 'त्रियामाशशिनाभातिशशीभातित्रियामया ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>त्रियामा - </td><td>the night</td></tr><tr><td>शशिना - </td><td>By the moon</td></tr><tr><td>भाति - </td><td>Looks splendid</td></tr><tr><td> शशी - </td><td>The moon</td></tr><tr><td>     त्रियामया - </td><td>By the night</td></tr><tr><td>भाति - </td><td>Looks splendid</td></tr></table><p>The night is splendid by (the presence of ) the moon and the moon looks splendid on account of the night.</p><p>Here, the night and the moon beautify each other. The night is the cause of the moon looking splendid and the moon is the cause of the night looking splendid.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विशेषः ',
      title_eng: 'विशेषः - The Extraordinary',
      id: 43,
      slokas: [
        {
          sloka: 'विशेषःख्यातमाधारंविनाप्याधेयवर्णनम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>ख्यातम् - </td><td>Well-known</td></tr><tr><td>आधारम् - </td><td>The containant</td></tr><tr><td>विनापि - </td><td>Even without</td></tr><tr><td>आधेयवर्णनम् - </td><td>The description of the object contained</td></tr><tr><td>विशेषः - </td><td>Extraordinary</td></tr></table><h3>Definition</h3><p>The description of something dependent, i,e., the object contained as existing without its well-known supporter, i.e., the containant, or in other words, the representation of the independent existence of the object contained without its supporter on which it depends, is termed the Extraordinary.</p>'
          },
          examples: [
            {
              text: 'गतेऽपिसूर्येदीपस्थास्तमश्छिन्दन्तितत्कराः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>सूर्ये - </td><td>The sun</td></tr><tr><td>गते अपि  - </td><td>Though set</td></tr><tr><td>दीपस्थाः - </td><td>Abiding in the lamp</td></tr><tr><td>तत्कराः - </td><td>Its (sun’s) rays</td></tr><tr><td>तमः - </td><td>The darkness</td></tr><tr><td>छिंदंति - </td><td>Expel</td></tr></table><p>Though the sun has set in, yet its rays abiding in the lamp expel the darkness.</p><p>The statement that lamps expel the darkness only by the rays of the sun which has gone to the other side of the earth is Extraordinary.</p><p>N.B.-The Vedas declare that the lustre of the sun enters the ﬁre in the evening. Compare Raghu-vansa, IV. 1.</p><p>स राज्यं गुरूणादत्तं प्रतिपद्याधिकं बभौ ।<br>दिनान्ते निहितं तेजः सवित्रेव हुताशनः ॥</p><p>He (Raghu) obtained the kingdom given by (his) father and shone the more just as the ﬁre that got the lustre deposited with (it) by the sun at the close of the day.</p>'
              }
            }
          ]
        }
      ],
      types: 2,
      type: [
        {
          sloka: '<h3>Second kind of the Extraordinary.</h3>विशेषःसोऽपियद्येकंवस्त्वनेकत्रवर्ण्यते ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>if</td></tr><tr><td>एकं - </td><td>One</td></tr><tr><td>वस्तु - </td><td>Object</td></tr><tr><td>अनेकत्र - </td><td>In many places</td></tr><tr><td>वर्ण्यते - </td><td>Is described</td></tr><tr><td>सोऽपि - </td><td>That too</td></tr><tr><td>विशेषः - </td><td>The Extraordinary</td></tr></table><h3>Definition</h3><p>If one and the same object is described as existing in many places, it is also termed the Extraordinary.</p>'
          },
          examples: [
            {
              text: 'अन्तर्बहिःपुरःपश्चात्सर्वदिक्ष्वपिसैवमे ॥',
              explanation_sans: '',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td> अंतः - </td><td>In</td></tr><tr><td>बहिः - </td><td>Out</td></tr><tr><td> पुरः - </td><td>In the front</td></tr><tr><td>पश्चात् - </td><td>Behind</td></tr><tr><td>मे सर्वदिक्षु अपि - </td><td>In all the directions</td></tr><tr><td> सैव - </td><td>Only she</td></tr></table><p>In my mind, in the outside, in the front, behind my back, in all the directions too (wherever I turn my face), only she (my beloved) appears (to me).</p><p>Here, one single object is said to exist uniformly in many places.</p><p>N.B.- A1though these as well as certain other representations are impossible and opposed to ordinary experience, yet they are said to have been represented as possible only metaphorically.</p>'
            }
          ]
        },
        {
          sloka: '<h3>Third kind of the Extraordinary.</h3>किंचिदारम्भतोऽशक्यवस्त्वन्तरकृतिश्चसः ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>किंचित् - </td><td>A certain (act)</td></tr><tr><td>आरंभतः - </td><td>Commencing to do</td></tr><tr><td>अशक्यस्त्वंतरकृतिश्च - </td><td>Even the performance of another impossible act</td></tr><tr><td>सः - </td><td>The Extraordinary</td></tr></table><h3>Definition</h3><p>When some one who has commenced to do an act chances to do another impossible act (unconnected with the former), it is the third kind of the Extraordinary.</p>'
          },
          examples: [
            {
              text: 'त्वांपश्यतामयालब्धंकल्पवृक्षनिरीक्षणम् ॥',
              explanation_sans: '',
              explanation_eng: '<h3>Word meaning</h3><table><tr><td>त्वां - </td><td>Thee</td></tr><tr><td>पश्यता - </td><td>Seeing</td></tr><tr><td>मया - </td><td>By me</td></tr><tr><td>कल्पद्रुमनिरीक्षणम् - </td><td>The sight of the Kalpa tree</td></tr><tr><td>लब्धम् - </td><td>Was got</td></tr></table><p>By seeing you, (O king !) I got the sight of the Wish-yielding tree of the paradise.</p><p>Here, the speaker who ﬁrst commenced to do an act, i.e., seeing the king, the liberal donor, says that he has seen the kalpa tree (instead of seeing the king himself who has now been identiﬁed by the speaker with the kalpa tree) of the paradise very difﬁcult to obtain.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'व्याघातः',
      title_eng: 'व्याघातः - Frustration',
      id: 44,
      slokas: [
        {
          sloka: 'स्याद्व्याधातोऽन्यथाकारितथाकारिक्रियेतचेत् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td></td>चेत् - <td></td>if</td></tr><tr><td>तथाकारि - </td><td>The thing which produces its natural effect</td></tr><tr><td>अन्यथाकारि - </td><td>As the one which produces another effect</td></tr><tr><td>क्रियेत - </td><td>Is represented</td></tr><tr><td>व्याघातः स्यात् - </td><td>It is Frustration</td></tr></table><h3>Definition</h3><p>When a thing which produces the established result, i.e., the effect natural to its cause is represented to have produced the exact opposite result, it is called Frustration.</p>'
          },
          examples: [
            {
              text: 'यैर्जगत्प्रीयतेहन्तितैरेवकुसुमायुधः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>यैः (पुष्पैः) - </td><td>By which (flowers)</td></tr><tr><td>जगत् - </td><td>The world</td></tr><tr><td>प्रीयते - </td><td>Is pleased</td></tr><tr><td>तैः एव - </td><td>By the same (flowers)</td></tr><tr><td>कुसुमायुधः - </td><td>The flower-shafted God of love</td></tr><tr><td>हंति - </td><td>Torments</td></tr></table><p>By the (same) ﬂowers by which the people of the world become pleased, Cupid (lit. ﬂower-shafted God of love) torments the world.</p><p>Here, the effect, i.e., tormenting is produced by the ﬂowers- the cause, which are well-known to produce a quite opposite one, i.e., pleasure. Hence this is called Frustration on account of the frustration of an established effect already fulﬁlled in an object.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka: '<h3>Second kind of Frustration</h3>सौकर्येणनिबद्धापिक्रियाकार्यविरोधिनी ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td></td>सौकर्येण - </td><td>With facility</td></tr><tr><td>निबड्वा - </td><td>Begun</td></tr><tr><td>क्रिया - </td><td>An act</td></tr><tr><td>कार्यविरोधिनी - </td><td>The contrary of that act</td></tr><tr><td>अपि - </td><td>(here)also</td></tr><tr><td>(व्याघातः) - </td><td>Frustration</td></tr></table><h3>Definition</h3><p>If a certain act commenced (by one) on the ground of its being facile turns out contrary, it is the second kind of Frustration.</p>'
          },
          examples: [
            {
              text: 'दयाचेद्वालइतिमय्यपरित्याज्यएवते ॥ ',
              explanation_sans: '',
              explanation_eng: '<h3>Word meaning</h3><table><tr><td>मयि - </td><td>On me</td></tr><tr><td>बाल इति - </td><td>On account of being a boy</td></tr><tr><td>दया चेत् - </td><td>It (thou hast) compassion</td></tr><tr><td>ते - </td><td>By thee</td></tr><tr><td>अपरित्याज्य एव - </td><td>Cannot be abandoned</td></tr></table><p>O King! If thou hast compassion on me, then I, being a. boy, should not be abandoned here (now by thee going to battle-ﬁeld).</p><p>This is said by a crown-prince to this king going to war. The king seems to have asked him to stay at home for he being a boy could not bear the terrible toils of a battle ﬁeld. The crown-prince mentions the same reason to accompany the king for he being a youth must go to the war and become skilled in the arts of war, or, as one commentator says, he (the youth) could not bear the separation from the king. Thus We see the frustration of the object which the king had at ﬁrst.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'कारणमाला ',
      title_eng: 'कारणमाला -  Garland of Causes',
      id: 45,
      slokas: [
        {
          sloka: 'गुम्फःकारणमालास्याद्यथाप्राक्प्रान्तकारणैः ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td></td>यथाप्राक्प्रांतकारणैः - </td><td>By the causes in which a preceding object is spoken of as the cause of the succeeding one</td></tr><tr><td>गुंफः - </td<td>Arrangement</td></tr><tr><td> कारणमाला - </td><td>Garland of causes</td></tr><tr><td> स्यात् - </td><td>Is called</td></tr></table><h3>Definition</h3><p>When a preceding object is spoken of as the cause of one succeeding it, which in turn is spoken of as the cause of what comes next and so on, it is termed the Garland of Causes.</p>'
          },
          examples: [
            {
              text: 'नयेनश्रीःश्रियात्यागस्त्यागेनविपुलंयशः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>नयेन - </td><td>By morality</td></tr><tr><td>श्रीः - </td><td.Wealth</td></tr><tr><td>श्रिया - </td><td>By wealth</td></tr><tr><td> त्यागः - </td><td>Donation</td></tr><tr><td>त्यागेन - </td><td>By donation</td></tr><tr><td> विपुलं यशः - </td><td>Wide fame</td></tr></table><p>From morality wealth (is acquired); from wealth, the donation ; from donation, the wide fame.</p><p>Here, the morality mentioned ﬁrst is spoken of as the cause of the succeeding object, the Wealth, which in turn is spoken of as the cause of donation, etc.</p><p>This ﬁgure occurs also when one object, mentioned afterwards, is spoken of as the cause of what precedes and so on.</p><p>Ex . भवन्ति नरकाः पापात् पाप दारिद्रासंभवम् ।<br>दारिद्रामप्रदानेन तस्माद्दानपरो भव ॥</p><p>(People) go to hell on account of (their) sin; sin results from poverty; poverty from non giving. Therefore (friend) be always muniﬁcient.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'एकावली ',
      title_eng: 'एकावली -  The Necklace',
      id: 46,
      slokas: [
        {
          sloka: 'गृहीतमुक्तरीत्यार्थश्रेणिरेकावलिर्मता ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td></td>गृहीतमुक्तरीत्यार्थश्रेणिः - </td><td>A series of statements in which each succeeding thing is taken as an attribute of each preceding thing and then made to cease as such</td></tr><tr><td>एकाकली मता - </td><td>Is considered the Necklace</td></tr></table><h3>Definition</h3><p>A successive series of statements made in a manner in which each succeeding thing is taken (गृहीत  as an attribute of each preceding thing and that thing which was ﬁrst taken as an attribute is made to cease (मुक्त )  as such by being afterwards made a. subject and qualiﬁed by another succeeding thing and so on, it is the Necklace.</p>'
          },
          examples: [
            {
              text: 'नेत्रेकर्णान्तविश्रान्तेकर्णौदोःस्तम्भदोलितौ ॥<br>दोस्तम्भौजानुपर्यन्तप्रलम्बनमनोहरौ ।<br>जानुनीरत्नमकुराकारेतस्यहिभूभुजः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td></td>तस्य महीभुजः - </td><td>Of that king</td></tr><tr><td>नेत्रे - </td><td>Eyes</td></tr><tr><td>कर्णां तविश्रांते - </td><td>Extending as far as the ears</td></tr><tr><td>कर्णौ - </td><td>Ears</td></tr><tr><td>दोस्तंभदोलितौ - </td><td>Extending as far as the post-like arms</td></tr><tr><td>दोस्तभौ - </td><td>Post-like arms</td></tr><tr><td>जानुपर्यंतप्रलंबनमनोहरौ - </td><td>Charming on account of their extension as far as the knees</td></tr><tr><td>जानुनौ - </td><td>Knees</td></tr><tr><td>रत्नमुकुराकारे - </td><td>Appearing like jeweled mirrors</td></tr></table><p>The eyes of that king extend as far as the ears. His ears extend as far as his post-like arms. His post-like arms are charming by their extension as far his knees. And his kness are, in appearance, jewelled mirrors.</p><p>Here, the ears are taken as an attribute of the preceding thing, the eyes; arms, of the ears; knees, of arms; and the mirrors, of the knees.</p><p>In this example, a preceding thing is qualiﬁed by the succeeding thing aﬂirmatively. In the following example, the thing mentioned ﬁrst is qualiﬁed negatively by what follows.</p>'
              }
            },
            {
              text: 'न तज्जलं यन्न सुचारूपङ्कजं<br>न पङ्कजं तद् यदलीनषट्पदम् ।<br>न षट्पदोऽसौ न जुगुञ्ज यः कलं<br> न गुञ्जितं तन्न जहार यन्मनः ॥<br> Bhatti Kavya, II. 19.',
              explanation: {
                sans: '',
                eng: '<p> There was no water on which there were no beautiful lotusses; there was not a lotus in the interior of which there was not a bee reposing; there was not a bee which hummed not sweetly ; and there was not a hum which did not attract the mind.</p><p>Here, of water, lotuses must be considered as denied; of lotuses, bees; of bees, humming; and of humming, attraction.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'मालादीपकम् ',
      title_eng: 'मालादीपकम् The Serial Illuminator',
      id: 47,
      slokas: [
        {
          sloka: 'दीपकैकावलीयोगान्मालादीपकमिष्यते ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td></td>दीपकैकावलीयोगात् - </td><td>From a combination of the figures the Illuminator and the Necklace</td></tr><tr><td>मालादीपकम् - </td><td>The Serial Illuminator</td></tr><tr><td>उच्यते - </td><td>Is called</td></tr></table><h3>Definition</h3><p>A combination of the ﬁgures, दीपकम् (Illuminator XV) and एकावली (Necklace XLII), is called the Serial Illuminator.Or, in other words, the Serial Illuminator is that wherein a number of different objects is successively associated with one and the same attribute.</p>'
          },
          examples: [
            {
              text: 'स्मरेणहृदयेतस्यास्तेनत्वयिकृतास्थितिः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td></td>स्मरेण - </td><td>By Cupid</td></tr><tr><td>तस्याः हृदये - </td><td>In her heart</td></tr><tr><td>थितिः - </td><td>Setting one’s foot</td></tr><tr><td>कृता - </td><td>Was made</td></tr><tr><td>तेन - </td><td>By him</td></tr><tr><td>त्वयि - </td><td>In thee</td></tr></table><p>Cupid set his foot in the heart of that lady, and by it, i.e., the heart of the lady, in thee.</p><p> This is addressed to a lover by a go-between sent by her mistress pining under separation.</p><p>Here, the one and the same attribute स्थितिः कृता being associated with two objects प्रकृत and अप्रकृत, it is the Illuminator ; and by गृहीतमुक्तरीत्या of the lady’s heart, it is the Necklace (see the preceding ﬁgure). Thus, we have a blending of the two.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'सारः ',
      title_eng: 'सारः - The Climax',
      id: 48,
      slokas: [
        {
          sloka: 'उत्तरोत्तरमुत्कर्षःसारइत्यभिधीयते ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>उत्तरोत्तरम् - </td><td>successively</td></tr><tr><td>उत्कर्षः - </td><td> Excellence</td></tr><tr><td>सार इति - </td><td> The figure Climax</td></tr><tr><td>अभिधीयते - </td><td> Is called</td></tr></table><h3>Definition</h3><p>Excellence (rising) successively is termed the Climax.</p>'
          },
          examples: [
            {
              text: 'मधुरंमधुतस्माच्चसुधातस्याःकवेर्वचः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>मधु - </td><td>Honey</td></tr><tr><td>मधुरम् - </td><td>Sweet</td></tr><tr><td>तस्मात् - </td><td>Than that</td></tr><tr><td>पीयुषम् - </td><td>The nectar</td></tr><tr><td>तस्मात् - </td><td>Than that</td></tr><tr><td>कवेः वचः - </td><td>Poet’s speech</td></tr></table><p>The honey is sweet ; the nectar is sweeter than that ; and, than that, poet’s speech.</p><p>Here, each succeding thing, nectar etc., rises gradually in excellence.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'यथासंख्यम् ',
      title_eng: 'यथासंख्यम् - The Relative Order',
      id: 49,
      slokas: [
        {
          sloka: 'यथासंख्यंक्रमेणैवक्रमिकाणांसमन्वयः ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>क्रमिकाणाम् - </td><td>of serial objects</td></tr><tr><td>क्रमेणैव - </td><td>In due order</td></tr><tr><td>समन्वयः - </td><td>Mitual connection</td></tr><tr><td>यथासंख्यम् - </td><td>The relative order</td></tr><tr></table><h3>Definition</h3><p> The Relative Order is a mutual connection of a series of objects mentioned in their due order.</p>'
          },
          examples: [
            {
              text: 'शत्रुंमित्रंविपत्तिं च जयरञ्जयभञ्जय ॥ ',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>शत्रुम् - </td><td>The foe</td></tr><tr><td>जव - </td><td>Conquer</td></tr><tr><td>मित्रम् - </td><td>The friend</td></tr><tr><td>रंजय - </td><td>Gratify</td></tr><tr><td>विपत्तिम् - </td><td>The calamity</td></tr><tr><td>भंजय - </td><td>Destroy</td></tr></table><p> O king! Conquer, gratify, destroy (thy) foe, friend and the calamity respectively.</p><p>Here, a series of objects शत्रुम्, मित्रम् and विपत्तिम् is respectively connected with जय, रञ्जय and भञ्जय in their due order.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'पर्यायः ',
      title_eng: 'पर्यायः -The Sequence',
      id: 50,
      slokas: [
        {
          sloka: 'पर्यायोयदिपर्यायेणैकस्यानेकसंश्रयः ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>if</td></tr><tr><td>एकस्य - </td><td>Of one object</td></tr><tr><td>पर्यायेण - </td><td> In succession</td></tr><tr><td>अनेकसंशयः - </td><td> Residing in many places</td></tr><tr><td>पर्यायः - </td><td> The Sequence</td></tr></table><h3>Definition</h3><p>When one object is described as residing in many places in succession, it is termed the Sequence.</p>'
          },
          examples: [
            {
              text: 'पद्मंमुक्त्वागताचन्द्रंकामिनीवदनोपमा ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>कामिनीवदनप्रभा - </td><td>The lusture of this lovely woman’s face</td></tr><tr><td>पद्मम् - </td><td>The lotus</td></tr><tr><td>मुक्त्वा - </td><td>Having left</td></tr><tr><td>चंद्र - </td><td> The moon</td></tr><tr><td>गता - </td><td>Resorted to.</td></tr></table><p>Having left the lotus, the lustre of this lovely wornarfs face now resorted to the moon.</p><p>Here, the lustre which is stated as one is said to reside in many places in succession.,</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka: '<h3>Second kind of the Sequence</h3>एकस्मिन्यद्यनेकंवापर्यायःसोऽपिसंमतः ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>यदि वा - </td><td>Or if</td></tr><tr><td>एकस्मिन् - </td><td> In one object</td></tr><tr><td>अनेकम् - </td><td>Many</td></tr><tr><td>सोऽपि - </td><td>That too</td></tr><tr><td>पर्यायः - </td><td>The sequence</td></tr><tr><td>संमतः - </td><td>Is regarded</td></tr></table><p>Or, if many objects are said to reside in one and the same place in succession, that too is regarded as the Sequence.</p>'
          },
          examples: [
            {
              text: 'अधुनापुलिनंतत्रयत्रस्रोतःपुराजनि ॥ ',
              explanation_sans: '',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>यत्र - </td><td>Where</td></tr><tr><td>पुरा - </td><td>Formerly</td></tr><tr><td>सोतः - </td><td>Water</td></tr><tr><td>अजनि - </td><td>Was</td></tr><tr><td>अधुना - </td><td>Now</td></tr><tr><td>तत्र - </td><td>There</td></tr><tr><td>पुलिनम् - </td><td>Sand bank</td></tr></table><p>Sand bank is now seen in the place where there was water formerly.</p><p>Here, the water and the sand bank are said to be successively residing in the same place.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'परिवृत्तिः',
      title_eng: 'परिवृत्तिः -The Return',
      id: 51,
      slokas: [
        {
          sloka: 'परिवृत्तिर्विनिमयो न्यूनाभ्यधिकयोर्मिथः ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>न्यूनाभ्यधिकयोः - </td><td>Of lesser and greater things</td></tr><tr><td>मिथः - </td><td>Mutual</td></tr><tr><td>विनिमयः - </td><td>Exchange</td></tr><tr><td>परिवृत्तिः - </td><td>The return</td></tr></table><p>The Return is a mutual exchange of things lesser or greater.</p>'
          },
          examples: [
            {
              text: 'जग्राहैकं शरं मुक्त्वा कटाक्षात्स रिपुश्रियम् ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>(स राजा) - </td><td>That king</td></tr><tr><td>एकम् शरम् - </td><td>One arrow</td></tr><tr><td>मुक्त्वा - </td><td>Having discharged</td></tr><tr><td>रिपुश्रियः - </td><td>Of the enemy’s Goddess of wealth</td></tr><tr><td>कटाक्षात् - </td><td>(many) side-glances</td></tr><tr><td>जग्राह - </td><td>Received</td></tr></table><p>The king discharged (i.e., gave) one arrow and received (in turn, many) side-glances of the Goddess of wealth of his foes.<p><p>Here, we have an exchange for what is greater, i.e. giving the lesser (शरम्) for the greater (कटाक्षान्).</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'परिसङ्ख्या',
      title_eng: 'परिसङ्ख्या-The Special Mention or The Exclusion of Speciﬁcation.',
      id: 52,
      slokas: [
        {
          sloka: 'परिसंख्या  निषिध्यैकमेकस्मिन्वस्तुयन्त्रणम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>एकस्मिन् - </td><td>In one object on hand</td></tr><tr><td>एकम् वस्तु - </td><td>One object</td></tr><tr><td>निषिध्य - </td><td>Having denied</td></tr><tr><td>यन्त्रणाम् - </td><td>Restriction</td></tr><tr><td>परिसङ्ख्या - </td><td>The Special Mention</td></tr></table><p>The denial of the existence of something in a certain object and the restriction of its existence in another object constitutes the ﬁgure the Special Mention.</p>'
          },
          examples: [
            {
              text: 'स्नेहक्षयः प्रदीपेषु न स्वान्तेषु नतभ्रुवाम् ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>स्नेहक्षयः - </td><td>Diminution of oil</td></tr><tr><td>                प्रदीपेषु - </td><td>In the lamps</td></tr><tr><td>नतभ्रुवाम् - </td><td>Of women of curved eye-brows</td></tr><tr><td>स्वान्तेषु - </td><td>In the hearts</td></tr><tr><td>न - </td><td>Not</td></tr></table><p>The diminution of oil (i.e. aﬁection) was in the lamps and not in the hearts of Women of curved eye-brows.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विकल्पः',
      title_eng: 'विकल्पः-The Alternative',
      id: 53,
      slokas: [
        {
          sloka: 'विरोधे तुल्यबलयोर्विकल्पालंकृतिर्मता ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>तुल्यबलयोः - </td><td>Of equal probability</td></tr><tr><td> विरोधे - </td><td>When there is opposition</td></tr><tr><td>विकल्पालंकृतिः - </td><td>The Alternative</td></tr><tr><td>मता - </td><td>Is considered</td></tr></table><p>When there is an opposition of two things of equal probability, or, in other words, when the performance of two such things becomes impossible at the same time and thus restricts the agent to have recourse to only one of them, it is called the Alternative. </p>'
          },
          examples: [
            {
              text: 'सद्यः शिरांसि चापान्वा नमयन्तु महीभुजः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>महीभुजः - </td><td>The kings</td></tr><tr><td>सद्यः - </td><td>At once</td></tr><tr><td> शिरांसि - </td><td>Their heads</td></tr><tr><td>नमयन्तु - </td><td>Let bend</td></tr><tr><td>चापान् वा - </td><td>Or their bows</td></tr></table><p>Let the kings bend at once their heads or their bows.</p><p>Here, we see the impossibility of simultaneous action of the bending of the heads and that of the bows which are opposed to each other, the former being the mark of surrender and the latter, of war.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'समुच्चयः',
      title_eng: 'समुच्चयः -The Conjunction',
      id: 54,
      slokas: [
        {
          sloka: '',
          sloka_explanation: {
            sans: 'बहूनां युगपद्मावभाजां गुम्फः समुच्चयः ।',
            eng: '<h3>Word meanings</h3><table><tr><td>यगपड्भावभाजाम् - </td><td>Of actions of simultaneously</td></tr><tr><td>वड्वनाम् - </td><td>Of many</td></tr><tr><td>गुम्फः - </td><td>Combination</td></tr><tr><td>समुच्चयः - </td><td>The Conjunction</td></tr></table><p>The Conjunction is a combination of many actions that are described as being simultaneously produced.</p>'
          },
          examples: [
            {
              text: 'नश्यन्ति पश्चात्पश्यन्ति त्रस्यन्ति च भवद्द्विषः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>नश्यन्ति - </td><td>Take flight</td></tr><tr><td>पश्चात् - </td><td>On back</td></tr><tr><td> पश्यन्ति - </td><td>See</td></tr><tr><td>भ्रश्यन्ति च - </td><td>And fall down</td></tr></table><p>O King! thy enemies ﬂee, turning their backs, see thee and fall down.</p><p>Here, though the actions of ﬂeeing, seeing, falling down took place in succession, yet we have the simulteniety of those actions considering their speedy performance.</p><p>Compare the celebrated laconic report which Caesar sent to Rome concerning his victory over Pharnaces at Tela ‘I came, saw, conquered’ (veni, vedi, vici).</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka: 'अहंप्राथमिकाभाजामेककार्यान्वयेऽपि सः ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>अहंप्राथमिकाभाजाम् - </td><td>Of things with emulation</td></tr><tr><td>एककार्यान्वयः - </td><td>That go to effect one thing</td></tr><tr><td> अपि - </td><td>Also</td></tr><tr><td>सः - </td><td>That i.e., the conjunction</td></tr></table><p>A combination of many things that go to effect a thing with emulation or competition, is also termed the Conjunction. Or, in other words, a combination of many things independent of each other but represented as simultaneously producing the same common effect is called the Conjunction.</p>'
          },
          examples: [
            {
              text: 'कुलं रूपं वयो विद्या धनं च मदयन्त्यमुम् ॥',
              explanation_sans: '',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>कुलम् - </td><td>Noble birth</td></tr><tr><td>रूपम् - </td><td>Handsome appearance</td></tr><tr><td>वयः - </td><td>The pime of youth</td></tr><tr><td>विद्या - </td><td>Learning</td></tr><tr><td>धनं च - </td><td>And the wealth</td></tr><tr><td>असुम् - </td><td>Him</td></tr><tr><td>मदयन्ति - </td><td>Exhilarate</td></tr></table><p>Noble birth, handsome appearance, the prime of youth, learning and the wealth exhilarate him.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'कारकदीपकम्',
      title_eng: 'कारकदीपकम् -The Case-llluminator',
      id: 55,
      slokas: [
        {
          sloka: 'क्रमिकैकगतानां तु गुम्फः कारकसीपकम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>क्रमिकैकगतानाम् - </td><td>Of actions connected with one Karaka in succession</td></tr><tr><td>गुम्फः - </td><td>Combination</td></tr><tr><td>कारकदीपकम् - </td><td>The Case-Illuminator</td></tr></table><p>Acombination of actions that are successively connected with one Karaka (case-noun) is called कारकदीपकम्. Or, in other words, when the same Karaka. (case-noun) is connected with many verbs in succession, it is कारकदीपकम्.</p>'
          },
          examples: [
            {
              text: 'गच्छत्यागच्छति पुनः पान्थः पश्यति पृच्छति ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>पान्थः - </td><td>Traveler</td></tr><tr><td>गच्छति - </td><td>Goes</td></tr><tr><td>पुनः - </td><td>Again</td></tr><tr><td>आगच्छति - </td><td>Comes</td></tr><tr><td>पश्यति - </td><td>Sees</td></tr><tr><td> पृच्छति - </td><td>Asks</td></tr></table><p>The traveller goes, again comes, sees and asks (something).</p><p>Here, पान्थः -a noun in the nominative case, is connected with 4 verbs गच्छति, etc, in Succession but not simultaneously as in the preceding ﬁgure समुच्चयः where simultaniety is desired.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'समाधिः',
      title_eng: 'समाधिः -The Convenience',
      id: 56,
      slokas: [
        {
          sloka: 'समाधिः कार्यसौकर्यं कारणान्तरसंनिधेः ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>कारणान्तरसन्निधेः - </td><td>Through the presence of some other cause</td></tr><tr><td>कार्य्यसौकर्य्यम् - </td><td>Facility of an act</td></tr><tr><td>समाधिः - </td><td>The Convenience</td></tr></table><p>When the accomplishment of an act is facilitated by the presence of some other cause, or in other Words, when the facilitation of an act is obtained through the accidental operation of another agency, it is called the Convenience.</p>'
          },
          examples: [
            {
              text: 'उत्कण्ठिता च तरुणी जगामास्तं च भानुमान् ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>तरुणी - </td><td>Young lady</td></tr><tr><td>उत्कण्ठिता - </td><td>Lodged for (her lover)</td></tr><tr><td>भानुमान् - </td><td>The sun</td></tr><tr><td>अस्तम् जगाम - </td><td>Set in</td></tr></table><p>No sooner did this young lady long for her lover than the sun set in.</p><p>Here, we see the simultaneous occurrence of two actions-the lady’s longing for her lover and the sun’s setting (expressed by the two च in the two sentences).</p><p>The lady longed for her lover and was about to go to meet him; and this was easily accomplished by the accidental operation of another cause-the ,setting of the sun, which enabled the lady to set out freely under the protecting mantle of the dark.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'प्रत्यनीकम्',
      title_eng: 'प्रत्यनीकम् - The Rivalry',
      id: 57,
      slokas: [
        {
          sloka: 'प्रत्यनीकं बलवतः शत्रोः पक्षे पराक्रमः ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>बलवतः - </td><td>strong</td></tr><tr><td>शत्रोः - </td><td>Of the enemy</td></tr><tr><td>पक्षे - </td><td>On any partisan</td></tr><tr><tdपराक्रमः - </td><td>Attempt</td></tr><tr><td>प्रत्यनीकम् - </td><td>The Rivalry</td></tr></table><h3>Definition</h3><p>When any act of injury or mortiﬁcation is attempted on a partisan of one’s powerful enemy (by somebody who is unable to avenge himself directly on his enemy), it is called the Rivalry.</p>'
          },
          examples: [
            {
              text: 'जैत्रनेत्रानुगौ कर्णावुत्पलाभ्यामधःकृतौ ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>उत्पलाभ्याम् - </td><td>By the lilies</td></tr><tr><td>जैत्रनेत्रानुगौ - </td><td>The servants of the victorious eyes</td></tr><tr><td> कर्णौ - </td><td>The ears</td></tr><tr><td>अधः कृतौ - </td><td>Made to bow down</td></tr></table><p>The ears, the servants (lit. neighbours) of the victorious eyes, have been made to bow down by the lilies. Women’s eyes and lilies are often compared to each other, the one excelling the other in beauty.</p><p>Here, the lilies unable to conquer the eyes avenge themselves on their neighbours, the ears, by making them bend down.</p><p>N.B.-The lilies are usually worn as ornaments on the ears which bend by their weight. </p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'काव्यार्थपत्तिः',
      title_eng: 'काव्यार्थपत्तिः-The Necessary Conclusion',
      id: 58,
      slokas: [
        {
          sloka: 'कैमुत्येनार्थसंसिद्धिः काव्यार्थापत्तिरिष्यते ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>कैमुत्येन - </td><td>By the expression how much more</td></tr><tr><td>अर्थसंसिड्विः - </td><td>Accomplishment of an act</td></tr><tr><td>काव्यार्थापत्तिः - </td><td>The Necessary conclusion in the province of Poetry</td></tr><tr><td>इष्यते - </td><td>Is called</td></tr></table><p>The accomplishment of an act founded upon the popular maxim कैमुतिकन्यायः ‘argument with a stronger reason’, is termed the Necessary Conclusion.</p><p>कैमुत्य is the abstract noun of किमुत ‘how much more’. कैमुतिकन्यायः is usually called दण्डापूपन्यायः  the maxim of the stick and the cakes. When a stick and some cakes are tied together and, when the stick has been eaten away by a rat, we are naturally led to believe that the cakes also have been eaten by the rat, the two things being so closely connected. Thus, when we say something of the one of two such things, the same naturally applies to the other thing also. </p>'
          },
          examples: [
            {
              text: 'स जितर्स्त्वन्मुखेनेन्दुः का वार्ता सरसीरुहाम् ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>त्वन्मुखेन - </td><td>By thy face</td></tr><tr><td>सः इन्दुः - </td><td>That moon</td></tr><tr><td>जितः - </td><td>Was conquered</td></tr><tr><td>सरसीरूहाम् - </td><td>Of the lotuses</td></tr><tr><td>का - </td><td>What</td></tr><tr><td>वार्ता - </td><td>Mention</td></tr></table><p>(Lady !) That moon has been conquered by thy face. What necessity is there to speak of (or why we speak of ) lotuses.</p><p>It is an acknowledged fact that lotuses begin to shrink and become faded on the rise of the moon. When that moon, the subduer of the lotuses, has been conquered, the fact that lotuses too have been conquered much more becomes a necessary conclusion.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'काव्यलिंगम् ',
      title_eng: 'काव्यलिंगम् -  The Poetical Reason.',
      id: 59,
      slokas: [
        {
          sloka: 'समर्थनीयस्यार्थस्य काव्यलिङ्गं समर्थनम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>समर्थनीयस्य - </td><td>To be established</td></tr><tr><td>अर्थस्य - </td><td>Of a fact</td></tr><tr><td>समर्थनम् - </td><td>Justifying</td></tr><tr><td>काव्यलिंगम् - </td><td>The Poetical Reason</td></tr></table><p>The Poetical Reason is a reason justifying a statement which requires to be established.</p>'
          },
          examples: [
            {
              text: 'जितोऽसि मन्द कन्दर्प मच्चित्तेऽस्ति त्रिलोचनः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>मन्द - </td><td>Foolish</td></tr><tr><td>कन्दर्प - </td><td>Cupid</td></tr><tr><td>जितः असि - </td><td>Thou hast been conquered</td></tr><tr><td>मच्चित्ते - </td><td>In my mind</td></tr><tr><td>विलोचनः - </td><td>Three-eyed God Siva</td></tr><tr><td>अस्ति - </td><td>Resides</td></tr></table><p>O foolish God of love ! Thou hast been conquered (by me). For, in my mind, there resides the three-eyed God Siva.</p><p>Here, the fact of the presence of the God Siva. in the mind of the speaker is a reason for the speaker’s conquest of the God of Love who has once been burnt by Siva. </p>'
              }
            }
          ]
        }
      ]
    }, {
      title_sans: 'अर्थान्तरन्यासः',
      title_eng: 'अर्थान्तरन्यासः -The Transition',
      id: 60,
      slokas: [
        {
          sloka: 'उक्तिरर्थान्तरन्यासः स्यात्सामान्यविशेषयोः ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>सामान्यविशेषयोः - </td><td>Of a universal proposition and a particular instance</td></tr><tr><td>उक्तिः - </td><td>assertion</td></tr><tr><td>अर्थान्तरन्यासः - </td><td>The Transition</td></tr></table><p>The assertion of a universal (proposition) and a particular (instance) is termed the Transition. Or, in other words, when a universal proposition is introduced to support a particular instance, or a particular instance to support a universal proposition, it is called the Transition.</p>'
          },
          examples: [
            {
              text: 'हनूमानब्धिमतरद्दुष्करं किं महात्मनाम् ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>हनूमान् - </td><td>The monkey- God Hanuman</td></tr><tr><td>अब्धिम् - </td><td>The ocean</td></tr><tr><td>अतरर् - </td><td>Crossed</td></tr><tr><td>महात्मनाम् - </td><td>Of great men</td></tr><tr><td>दुष्करम् - </td><td>Impossible</td></tr><tr><td>किम् - </td><td>What</td></tr></table><p>Hanuman crossed the ocean ; what is impossible for great men ?</p><p>Here, a particular instance is conﬁrmed by a universal proposition.</p><p>Example of a universal proposition supported by a particular instance.</p>'
              }
            },
            {
              text: 'गुणवद्वस्तुसंसर्गाद् याति स्वल्पोऽपि गौरवम् ।<br>पुष्पमालानुषंगेण सूत्रं शिरसि धार्यते ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>गुणवद्वस्तुसंसर्गाद् - </td><td>By association of the meritorious</td></tr><tr><td>स्वल्पोऽपि - </td><td>Even the meanest creature</td></tr><tr><td>गौरवम् - </td><td>Greatness</td></tr><tr><td>याति - </td><td>Attains</td></tr><tr><td>पुष्पमालानुषंगेण - </td><td>By the union with a wreath of flowers</td></tr><tr><td>सूत्रं - </td><td>Thread</td></tr><tr><td>शिरसि - </td><td>On the head</td></tr><tr><td>धार्यते - </td><td>Is worn</td></tr></table><p>Even the meanest creature, by the association of the meritorious, attains to the greatness. A thread united with a wreath of ﬂowers is worn on the head.</p><p>Here, a universal proposition is conﬁrmed by a particular instance.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विकस्वरः',
      title_eng: 'विकस्वरः - The Expansion',
      id: 61,
      slokas: [
        {
          sloka: 'यस्मिन्विशेषसामान्यविशेषाः स विकस्वरः ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>यस्मिन् - </td><td>In which</td></tr><tr><td>विशेषसामान्यविशेषाः - </td><td>Particular, general and particular assertions</td></tr><tr><td>सः - </td><td>That</td></tr><tr><td>विकस्वरः - </td><td>The Expansion</td></tr></table><p>When a particular is supported by a general which again is supported by a particular, it is called the Expansion. Or, in other words, when a Transition in which a particular instance is supported by a general proposition with a Simile, it is termed the Expansion (of the Transition).</p>'
          },
          examples: [
            {
              text: 'स न जिग्ये महान्तो हि दुर्धर्षोः सागरा इव ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>सः - </td><td>That (King)</td></tr><tr><td>न जिग्ये - </td><td>Was not conquered</td></tr><tr><td>हि - </td><td>Because</td></tr><tr><td>महान्तः - </td><td>Great men</td></tr><tr><td>सागरा इव - </td><td>Like the oceans</td></tr><tr><td> दुर्ड्वर्षाः - </td><td>Unassailable</td></tr></table><p>That (king) was not conquered (by his enemies). For the great men are as unassailable as the oceans.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'प्रौढोक्तिः',
      title_eng: 'प्रौढोक्तिः-The Bold Speech',
      id: 62,
      slokas: [
        {
          sloka: 'प्रौढोक्तिरुत्कर्षाहेतौ तद्धेतुत्वप्रकल्पनम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>उत्कर्षाहेतौ - </td><td>Which connot form as a cause of excellence</td></tr><tr><td>तड्वेतुत्वप्रकल्पनम् - </td><td>Attribution of a certain cause to it</td></tr><tr><td>प्रौढोक्तिः - </td><td>The Bold Speech</td></tr></table><p>The attribution of a certain cause, to a statement asserted, which cannot form the cause of excellence (of the object described) is called the Bold Speech.</p>'
          },
          examples: [
            {
              text: 'कचाः कलिन्दजातीरतमालस्तोममेचकाः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>कचाः - </td><td>The tresses</td></tr><tr><td>कलिन्दजातीरतमालस्तोममेचकाः - </td><td>As black as the Tamala group grown on the bank of the Yamuna river.</td></tr></table><p>The tresses (of the Lord Krishna) are as black as the group of tamala trees grown on the banks of Kalinda’s daughter Yamuna.</p><p>The water of the Yamuna is naturally black as also the tamala trees. The blackness of the tamala trees cannot therefore be attributed to their having grown on the banks of the Yamuna river. Still, it is asserted to be so here. Hence it is called the Bold Speech.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'संभावना',
      title_eng: 'संभावना-The Supposition',
      id: 63,
      slokas: [
        {
          sloka: 'संभावना यदीत्थं स्यादित्यूहोऽन्यस्य सिद्धये ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>अन्यस्य - </td><td>Of another act</td></tr><tr><td>सिड्बये - </td><td>For the accomplishment</td></tr><tr><td>यदि इत्थं स्यात् - </td><td>If it were so</td></tr><tr><td>इति - </td><td>So</td></tr><tr><td>ऊहः - </td><td>Conjecture</td></tr><tr><td>संभावना - </td><td>The Supposition</td></tr></table><p>A conjecture assumed through the use of the expression ‘if it were so’ for the accomplishment of another (impossible) act, is termed the Supposition.</p>'
          },
          examples: [
            {
              text: 'यदि शेषो भवेद्वक्ता कथिताः स्युर्गुणास्तव ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>If</td></tr><tr><td>शेषः - </td><td>Lord of serpents</td></tr><tr><td>वक्ता - </td><td>Narrater</td></tr><tr><td>भवेत् - </td><td>Happen</td></tr><tr><td>तव - </td><td>Thy</td></tr><tr><td>गुणाः - </td><td>Merits</td></tr><tr><td>कथिताः स्युः - </td><td>Would have been described</td></tr></table><p>O God! If the Lord of the serpents were to be the narrater, then all thy merits would have been described. </p><p>This form of supposition introduced by a subjunctive clause is reckoned by the author of Kavyaprakasa as the third kind of अतिशयोक्ति.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'मिथ्याध्यवसितिः',
      title_eng: 'मिथ्याध्यवसितिः — The False Determination',
      id: 64,
      slokas: [
        {
          sloka: 'किंचिन्मिथ्यात्वसिद्ध्यर्थं मिथ्यार्थान्तरकल्पनम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>किञ्चिन्मिथ्यात्वसिड्ब्यर्थं - </td><td>For the purpose of establishing false assertion</td></tr><tr><td>मिथ्यार्थान्तरकल्पनम् - </td><td>A statement of another absolute false thing</td></tr></table><p>When, for purposes of establishing a false assertion, another absolute false one is introduced, or, in other words, if one false assertion is made to depend upon another absolute false one, then it "is called the False Determination. (Reductio ad absurdum= reducing a position to an absurdity).</p>'
          },
          examples: [
            {
              text: 'मिथ्याध्यवसितिर्विश्यां वशयेत्खस्रजं वहन् ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>मिथ्याध्यवसितिः - </td><td>The False Determination</td></tr><tr><td>खस्रजम् - </td><td>Garland of sky-flowers</td></tr><tr><td>वहन् - </td><td>Wearing</td></tr><tr><td>वेश्याम् - </td><td>The prostitute</td></tr><tr><td>वशयेत् - </td><td>Can win over.</td></tr></table><p>Wearing a garland of sky-ﬂowers, one can Win over a prostitute.</p><p>Sky-ﬂower is an absolute nonentity and does not exist in any period, past, present or future. So the winning over a prostitute becomes also a non-entity. This ornament is also reckoned as one of the kinds of अतिशयोक्ति by the author of K. P.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'ललितम्',
      title_eng: 'ललितम् — The Artful Indication',
      id: 65,
      slokas: [
        {
          sloka: 'वर्ण्ये स्याद्वर्णवृत्तान्तप्रतिबिम्बस्य वर्णनम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>वर्ण्ये - </td><td>In the object on hand</td></tr><tr><td>वर्ण्यवृत्तान्तप्रतिबिम्बस्य - </td><td>Of the reflective representation of an incident on hand</td></tr><tr><td>वर्णनम् - </td><td>Delineation</td></tr><tr><td>ललितम् स्यात् - </td><td>Is the Artful Indication</td></tr></table><p>ललितम् is a delineation of an incident not on hand which ends in a reﬂective comparison to an incident on hand.</p>'
          },
          examples: [
            {
              text: 'ललितं निर्गते नीरे सेतुमेषा चिकीर्षति ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>एषा - </td><td>This (maiden)</td></tr><tr><td>नीरे - </td><td>When water</td></tr><tr><td>निर्गते - </td><td>Had gone out</td></tr><tr><td>सेतुम् - </td><td>Bund</td></tr><tr><td>चिकीर्षति - </td><td>Wishes</td></tr></table><p>This (maiden) wishes to raise a bund when all the water had gone out. </p><p>This is said by a maid to her mistress who wanted to send for her once neglected lover. The maid instead of telling her mistress that she missed the opportunity and now foolishly wants to bring her lover who has now fallen in love with another lady indirectly intimates the same meaning which is reﬂectively represented in the expression given in the text</p><p>The sending for the lover who once came to the lady and was neglected by  is the same as the raising of at bund after all the water had gone out.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'प्रहर्षणम्',
      title_eng: 'प्रहर्षणम्-The Enrapturing',
      id: 66,
      slokas: [
        {
          sloka: 'उत्कण्ठितार्थसंसिद्धिर्विना यत्नं प्रहर्षणम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>यत्नम् विना - </td><td>without an effort</td></tr><tr><td>उत्कण्ठितार्थसंसिड्बिः - </td><td>Accomplishment of a thing longed for</td></tr><tr><td>प्रहर्षणम् - </td><td>The Enrapturing</td></tr></table><p>When the accomplishinent of a. thing eagerly longed for takes place without any effort for it, or, in other words, when the desired object is obtained by chance, it is called the Enrapturing.</p>'
          },
          examples: [
            {
              text: 'तामेव ध्यायते तस्मै निसृष्टा सैव दूतिका ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>ताम् एव - </td><td>Only her</td></tr><tr><td>ध्यायते तस्मै - </td><td>To him thinking</td></tr><tr><td>सैव दूतिका - </td><td>That same messenger</td></tr><tr><td>निसृष्टा - </td><td>Was sent</td></tr></table><p>That same messenger-a conﬁdante-was sent (by a, lady) to him (her lover) who was thinking of her only.</p><p>This incident took place without any effort on the part of the lover. He was thinking that her lady would send him a disagreeable messenger and, when he saw his own conﬁdante coming as a messenger to him, he could not contain for joy and hence this is called the Enrapturing—the delight beyond measure.</p>'
              }
            }
          ]
        }
      ],
      types: 2,
      type: [
        {
          sloka: '<h3>The Second kind of the Enrapturing.</h3>वाञ्छितादधिकार्थस्य संसिद्धिश्च प्रहर्षणम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>वाच्छितात् - </td><td>Than the desired</td></tr><tr><td>अधिकार्थस्य - </td><td>Of something more</td></tr><tr><td>संसिड्विः - </td><td>Attainment</td></tr><tr><td>प्रहर्षणम् - </td><td>The Enrapturing</td></tr></table><p>The attainment of something more than what was desired is called the second kind of the Enrapturing.</p>'
          },
          examples: [
            {
              text: 'दीपमुद्द्योजयेद्यावत्तावदभ्युदितो रविः ॥',
              explanation_sans: '',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>यावत् - </td><td>No sooner</td></tr><tr><td>दीपम् - </td><td>The lamp</td></tr><tr><td>उद्योजयेत् - </td><td>Kindle</td></tr><tr><td>तावत् - </td><td>Than</td></tr><tr><td>रविः - </td><td>The sun</td></tr><tr><td>अभ्युदितः - </td><td>Rose</td></tr></table><p> No sooner did she kindle the lamp, than the sun rose.</p><p>Here the lady rose and wanted to kindle the lamp and, when she came out of her room, she saw the sun risen. This is more than what was desired.</p>'
            }
          ]
        },
        {
          sloka: '<h3>Third kind of the Enrapturing.</h3>यत्नादुपायसिद्ध्यर्थात्साक्षाल्लाभः फलस्य च । ',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>उपायसिड्व्यर्थात् - </td><td>to get the object desired</td></tr><tr><td>यत्नात् - </td><td>Attainment of a means</td></tr><tr><td>साक्षात् फलस्य - </td><td>Of the object itself</td></tr><tr><td>लाभः च - </td><td>Attainment also</td></tr></table><p>When, by an effort made for the attainment of a means to get the object desired, the desired object itself is obtained, it is the third kind of the Enrapturing.</p>'
          },
          examples: [
            {
              text: 'निध्यञ्जनौषधीमूलं खनता साधितो निधिः ॥',
              explanation_sans: '',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>निध्यंजनौषधीमूलम् - </td><td>The root of a magic plant</td></tr><tr><td>खनता - </td><td>By a digger</td></tr><tr><td>निधिः - </td><td>Treasure</td></tr><tr><td>साधितः - </td><td>Was obtained</td></tr></table><p>By him who dug the root of the magic plant for the purpose of discovering the treasure hidden under the earth, the treasure itself was obtained.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विषादनम्',
      title_eng: 'विषादनम् - The Despondency',
      id: 67,
      slokas: [
        {
          sloka: 'इष्यमाणविरुद्धार्थसंप्राप्तिस्तु विषादनम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>इष्यमाणविरुड्वार्थसंप्राप्तिः तु - </td><td>The attainment of a thing opposed to what was desired</td></tr><tr><td>विषादनम् - </td><td>The Despondency</td></tr></table><p>The attainment of a thing quite opposed to what was desired is termed the Despondency.</p>'
          },
          examples: [
            {
              text: 'दीपमुद्योजयेद्यावन्निर्वाणस्तावदेव सः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>यावत् - </td><td>No sooner</td></tr><tr><td>दीपम् - </td><td>The lamp</td></tr><tr><td>उद्योजयेत् - </td><td>Kindles</td></tr><tr><td>तावदेव - Than</td></tr><tr><td>सः - That</td></tr><tr><td>निर्वाणः - </td><td>Extinguished</td></tr></table><p>No sooner did she kindle the lamp, than it extinguished.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'उल्लासः',
      title_eng: 'उल्लासः - Abandonment',
      id: 68,
      slokas: [
        {
          sloka: 'एकस्य गुणदोषाभ्यामुल्लासोऽन्यस्य तौ यदि ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>एकस्य - </td><td>Of one object</td></tr><tr><td>गुणादोषाभ्याम् - </td><td>By merit and demerit</td></tr><tr><td>अन्यस्य - </td><td>Of another object</td></tr><tr><td>यदि तौ - </td><td>If those two</td></tr><tr><td>उल्लासः - </td><td>Abandonment</td></tr></table><p>If the delineation of merit and demerit of one object conveys a reference to the merit and demerit of another object, or, in other words, if: <ol><li>the merit of one object refer to the merit of another object</li><li>the demerit, to the demerit</li><li>the merit, to the demerit,</li><li>the demerit, to the merit, then it is called the Abandonment</li></ol></p.'
          },
          examples: [
            {
              text: '<h3>1. The merit of one object refer to the merit of another object</h3>अपि मां पावयेत्साध्वी स्नात्वेतीच्छति जाह्नवी ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>साध्वी - </td><td>Chaste woman</td></tr><tr><td>स्नात्वा - Having bathed</td></tr><tr><td>माम् अपि - </td><td>Me also</td></tr><tr><td>पावयेत् - </td><td>May purify</td></tr><tr><td>इति - </td><td>So</td></tr><tr><td>जाह्नवी - </td><td>The river Ganga</td></tr><tr><td>इच्छति - </td><td>Desires</td></tr></table><p>‘Will not a chaste woman (come and) bathe (in my waters) and purify me also’, so the river Ganga desires.</p><p>Here the merit-the purificating character of a chaste woman refers to the merit of the Ganga who prays for purification. Hence this is the example of  No. 1 merit referring to a merit.</p>'
              }
            },
            {
              text: '<h3>(2) Demerit reffering to a demerit.</h3>काठिन्यं कुचयोः स्रष्टुं वाञ्छन्त्यः पादपद्मयोः ।<br>निन्दन्ति च विधातारं त्वद्धटीष्वरियोषितः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>कुचयोः - </td><td>Of the bosoms</td></tr><tr><td>काठिन्यम् - </td><td>Hardness</td></tr><tr><td>पादपद्मयोः - </td><td>Lotus like feet</td></tr><tr><td>सृष्टम् - </td><td>Created</td></tr><tr><td>वाच्छन्त्यः - </td><td>Desiring</td></tr><tr><td>अरियोषितः - </td><td>The women of (thy) foes</td></tr><tr><td>त्वड्वाटीषु - </td><td>In thy cavalry</td></tr><tr><td>विधातारम् - </td><td>The Creator</td></tr><tr><td>निन्दंति - </td><td>Censure</td></tr></table><p>O king ! the widows of thy foemen desiring, (when they are pursued by) thy cavalry, the hardness created for their bosoms to be created for their lotus- like feet censure the Creator (Brahma).</p><p>Here, the widows of the foemen censure the creator for not having created the hardness of their bosoms in their soft feet, the former being useless because of their Widow-hood and the latter being now useful to enable them to flee away from the pursuing cavalry of the king. The demerit of the bosoms in their widow-hood refers to the demerit of their soft feet unfit for fleeing away from the enemy.</p>'
              }
            },
            {
              text: '<h3>3. Merit referring to at demerit</h3>तदभाग्यं धनस्यैव यन्नाश्रयति सज्जनम् ।',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>यत् - </td><td>because</td></tr><tr><td>सज्जनम् - </td><td>The good man</td></tr><tr><td>न आश्रयति - </td><td>Does not resort to</td></tr><tr><td>तत् - </td><td>that</td></tr><tr><td>धनस्य एव - </td><td>Of the riches only</td></tr><tr><td>अभाग्यम् - </td><td>Misfortune</td></tr></table><p>It is the misfortune of riches themselves in that they do not resort to the good people.</p><p>Here, the merit of the good people refers to the demerit of the riches in their not resorting to the good people.</p>'
              }
            },
            {
              text: '<h3>4. Demerit reffering to a merit</h3>लाभोऽयमेव भूपालसेवकानां न चेद्वधः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>चेत् - </td><td>if</td></tr><tr><td>भूपालसेवकानाम् - </td><td>Of the servants of the king</td></tr><tr><td>वधः - </td><td>Killing</td></tr><tr><td>न - </td><td>Not</td></tr><tr><td>अयम् एव - </td><td>This itself</td></tr><tr><td>लाभः - </td><td>A boon</td></tr></table><p>If the servants of this king are not killed, then it itself is a boon (to them).</p><p>The king referred to is such a cruel man that non- killing his servants is considered a great boon even if they do not get their pay. Here, the cruelty, the demrit of the king, refers to the merit on the part of his servants, i.e., their continuance without being killed.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अवज्ञालंकृतिः',
      title_eng: 'अवज्ञालंकृतिः - Non-Abandonment',
      id: 69,
      slokas: [
        {
          sloka: 'ताभ्यां तौ यदि न स्यातामवज्ञालंकृतिस्तु सा ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>if</td></tr><tr><td>ताभ्याम् - </td><td>By those two</td></tr><tr><td>तौ - </td><td>Those two</td></tr><tr><td>न स्याताम् - </td><td>Do not occur</td></tr><tr><td>सा - </td><td>That</td></tr><tr><td>अवज्ञालंकृतिः - </td><td>Non- Abandonment</td></tr></table><p>If, by the delineation of them, i.e., merit and demerit of one object, they-the merit and demerit of another object-do not occur, then it is called the Non-Abandonment.</p>'
          },
          examples: [
            {
              text: 'स्वल्पमेवाम्बु लभते प्रस्थं प्राप्यापि सागरम् ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>प्रस्थम् - </td><td>A measure</td></tr><tr><td>सागरम् - </td><td>Ocean</td></tr><tr><td>प्राप्यापि - </td><td>Though reached</td></tr><tr><td>स्वल्पमेव - </td><td>Only a small quantity</td></tr><tr><td>अंबु - </td><td>Water</td></tr><tr><td>लभते - </td><td>Gets</td></tr></table><p>This measure (of 32 palas) gets only a small quantity into it even though it reached the ocean. </p><p>The particular measure holds the same quantity of water even in the ocean which is the receptacle of immense water and which is not able to supply more water.</p><p>Here, the merit of the measure refers to no merit of the ocean.</p>'
              }
            },
            {
              text: '<h3>Example of demerit occasioning no demerit.</h3>मीलंति यदि पद्मानि का हानिरमृतद्युतेः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>it</td></tr><tr><td>पद्मानि - </td><td>Lotuses</td></tr><tr><td>मीलंति - </td><td>Contract</td></tr><tr><td>अमृतद्युतेः - </td><td>To the moon</td></tr><tr><td>का - </td><td>What</td></tr><tr><td>हानिः - </td><td>Detriment</td></tr></table><p>If the lotuses were to contract (at night), then what detriment accrues to the moon (nectar-rayed).</p><p.Here, the demerit of the lotus refers to no demerit of the moon.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अनुक्षा',
      title_eng: 'अनुक्षा - The Permission',
      id: 70,
      slokas: [
        {
          sloka: 'दोषस्याभ्यर्थनानुज्ञा तत्रैव गुणदर्शनात् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>दोषस्य - </td><td>Of an undesired object</td></tr><tr><td>अभ्यर्थना - </td><td>Praying for</td></tr><tr><td>तत्रैव - </td><td>In itself</td></tr><tr><td>गुणदर्शनात् - </td><td>On account of the result of good qualities</td></tr><tr><td>अनुज्ञा - </td><td>The Permission</td></tr></table><p>The praying for an undesired object on the ground of the acquirement of virtuous qualities resulting from it, is called the Permission.</p>'
          },
          examples: [
            {
              text: 'विपदः सन्तु नः शश्वद्यासु संकीर्त्यते हरिः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>नः - </td><td>To us</td></tr><tr><td>शश्वत् - </td><td>Always</td></tr><tr><td>विपदः - </td><td>Calamities</td></tr><tr><td>सन्तु - </td><td>Let occur</td></tr><tr><td>यासु - </td><td>In which</td></tr><tr><td>हरिः - </td><td>God Vishnu</td></tr><tr><td>संकीर्त्यते - </td><td>Is glorified</td></tr></table><p>Lord Krishna ! Let calamities always occurto us-the calamities in which the God Hari is gloriﬁed.</p><p>This is a request made to Krishna by Kunti, the mother of the Pandavas.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'लेशः',
      title_eng: 'लेशः-The Suggestion',
      id: 71,
      slokas: [
        {
          sloka: 'लेशः स्याद्दोषगुणयोर्गुणदोषत्वकल्पनम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>दोषगुणयोः - </td><td>Of demerit and merit</td></tr><tr><td>गुणादोषत्वकल्पनम् - </td><td>Attribution of merit and demerit</td></tr><tr><td>लेशः स्यात् - </td><td>Is the suggestion</td></tr><tr><td>लेशः - </td><td>is a ﬁgure in which the merit and demerit of one thing are respectively construed to be the demerit and merit of the other.</td></tr></table>'
          },
          examples: [
            {
              text: 'अखिलेषु विहङ्गेषु हन्त स्वच्छन्दचारिषु ॥ <br>शुक पञ्जरबन्धस्ते मधुराणां गिरां फलम् ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>हन्त - </td><td>Alas !</td></tr><tr><td>अखिलेषु विहंगेषु - </td><td>When all the birds</td></tr><tr><td>स्वच्छन्दचारिषु - </td><td>Freely wander</td></tr><tr><td>शुक ! - </td><td>Parrot !</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>पञ्चरबन्धः - </td><td>Confinement in a cage</td></tr><tr><td>मधुराणाम् - </td><td>Melodious</td></tr><tr><td>गिराम् - </td><td>Of songs</td></tr><tr><td>फलम् - </td><td>Result</td></tr></table><p>Alas ! parrot ! when all other birds freely wander about at their will, thy confinement in the cage is the result of thy melodious songs. </p><p>Here, the utterance of melodious sounds is construed to be a demerit in a parrot and the non-utterance is construed to be a merit in other birds.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'मुद्रा',
      title_eng: 'मुद्रा - The Sealing',
      id: 72,
      slokas: [
        {
          sloka: 'सूच्यार्थसूचनं मुद्रा प्रकृतार्थपरैः पदैः ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>प्रकृतार्थपरैः - </td><td>Serving the sense on hand</td></tr><tr><td>पदैः - </td><td>By words</td></tr><tr><td>सूच्यार्थसूचनम् - </td><td>Intimation of the object to be hinted at</td></tr><tr><td>मुद्रा - </td><td>The Sealing</td></tr></table><p>If the words that serve to signify the sense on hand intimate also the object to be hinted at, than it is called the Sealing.</p>'
          },
          examples: [
            {
              text: 'नितम्बगुर्वी तरुणी दृग्युग्मविपुला च सा ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>सा तरुणी - </td><td>That young maiden</td></tr><tr><td>नितंबगिर्वीं - </td><td>Having large buttocks</td></tr><tr><td>दृग्युग्मविपुला च - </td><td>Having a couple of spacious eyes</td></tr></table><p>This maiden has large buttocks and a couple of spacious eyes.</p><p>Here, युग्मविपुला serves to signify the sense required for the description of the lady the subject on hand. The same word is also the name of a metre of अनुष्टुम् class containing 8 syllables for each quarter wherein the seventh syllable of the 2nd and 4th quarters must be short. Thus, we see that the same word that served the purpose on hand- the description of the lady-also names the metre of the verse to be hinted at by the poet, the stanza being the illustration of that metre. </p><p>It is usual among the Sanskrit prosodians to illustrate a metre, deﬁned, by a stanza containing the name of that metre which will also serve to explain the sense contained in the stanza. Hence the ﬁgure is called मुद्रा an expression of things by their right names.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'रत्नावली',
      title_eng: 'रत्नावली-The Jewelled Necklace',
      id: 73,
      slokas: [
        {
          sloka: 'क्रमिकं प्रकृतार्थानां न्यासं रत्नावलीं विदुः ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>प्रकृतार्थानाम् - </td><td>Of the words serving the sense on hand </td></tr><tr><td>क्रमिकं - </td><td>Serial</td></tr><tr><td>न्यासम् - </td><td>Putting</td></tr><tr><td>रत्नावलीम् - </td><td>The Jewelled Necklace</td></tr><tr><td>विदुः - </td><td>(poets) know</td></tr></table><p>Ratnavali is a ﬁgure containing a number of  words serving the sense on hand but put in an established order of succession (with reference to objects not on hand).</p>'
          },
          examples: [
            {
              text: 'चतुरास्यः पतिर्लक्ष्म्याः सर्वज्ञस्त्वं महीपते ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>महीपते - </td><td>O king !</td></tr><tr><td>त्वम् - </td><td>Thou</td></tr><tr><td>चतुराम्यः - </td><td>Having handsome face or four headed God Brahma</td></tr><tr><td>लक्ष्म्याः - </td><td>Of riches = of Goddess Lakshmi</td></tr><tr><td>पतिः - </td><td>Lord                सर्वज्ञः - </td><td>Omniscient or God Siva.</td></tr></table><p>O Lord of earth! thou hast a handsome face (art god Brahma) ; thou art the lord of wealth (the Lord Vishnu) ; thou art omniscient (Lord Siva).</p><p>Here, the words चतुरास्यः etc., serve the sense on hand in describing the king and are also names of <br> चतुरं आस्यं यस्य सः <br> चत्वारि आस्यानि यस्य सः<br>The Hindu Triad, in their order-Brahma, Vishnu and Siva, the objects not on hand to which the king is identiﬁed in succession.</p><p>The difference between this ﬁgure and the ﬁgure मुद्रा is that in this figure the sense of the words referring to objects not on hand - i. e. the sense to be hinted at—also serves to explain the sentence in another way under a pun, but it is not so in the Mudra.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'तद्गुणः ',
      title_eng: 'तद्गुणः  -The Borrower',
      id: 74,
      slokas: [
        {
          sloka: 'तद्गुणः स्वगुणत्यागादन्यदीयगुणग्रहः ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>स्वगुणात्यागात् - </td><td>By quitting one’s own quality</td></tr><tr><td>            अन्यदीयगुणाग्रहः - </td><td>Assuming the quality of another</td></tr><tr><td>तद्गुणाः - </td><td>The Borrower</td></tr></table><p>When a thing quits its own quality and assumes that of another (excellent one), it is the Borrower.</p>'
          },
          examples: [
            {
              text: 'पद्मरागायते नासामौक्तिकं तेऽधरत्विषा ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>ते - </td><td>Thy </td></tr><tr><td>नासामौक्तिकम् - </td><td>Nose-pearl</td></tr><tr><td>अधरत्विषा - </td><td>By the luster of the lower lip.</td></tr><tr><td> पद्मरागायते - </td><td>Becomes Padmaraga (ruby of lotus colour)</td></tr></table><p>O Lady! The pearl of the nose-ornament becomes a padmaraga ruby by coming in contact with the luster of thy (red) lower lip.</p><p>Here, the colour of the lady’s lower lip, being superior, makes the white pearl of her nose ornament appear like a padmaraga ruby. </p><p>The pearl has been eclipsed by the lady’s lip.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'पूर्वरूपम्',
      title_eng: 'पूर्वरूपम् -The Original',
      id: 75,
      slokas: [
        {
          sloka: 'पुनः स्वगुणसंप्राप्तिः पूर्वरूपमुदाहृतम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>पुनः - </td><td>again</td></tr><tr><td>स्वगुणासंप्राप्तिः - </td><td>Assumption of one’s own quality</td></tr><tr><td>पूर्वरूपम् - </td><td>The original</td></tr><tr><td>उदाहृतम् - </td><td>Is called</td></tr></table><p>When an object that has quitted its form as in the preceding figure is again restored to its original state by the presence of some other agency, it is called the Original.</p>'
          },
          examples: [
            {
              text: 'हरकण्ठांशुलिप्तोऽपि शेषस्त्वद्यशसा सितः ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>हरकण्ठांशुलिप्तोऽपि - </td><td>Though covered with the luster of Siva’s neck</td></tr><tr><td>शेषः - </td><td>The present lord</td></tr><tr><td>त्वद्यशसा - </td><td>By thy fame</td></tr><tr><td>सितः - </td><td>White</td></tr></table><p>O king! The lord of the serpents शेषः, though covered with the lustre of Siva’s neck, is made white by thy fame.</p><p>Here, the serpentlord worn round Siva’s neck of dark-blue colour-on account of the existence of the Kalakuta poison in it-changed his colour and thus became a borrower and by the operation of another agency- the white fame of the king-he is restored to his former state.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka: '<h3>Second kind of the Original.</h3>पूर्वावस्थानुवृत्तिश्च विकृते सति वस्तुनि ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>वस्तुनि - </td><td>An object</td></tr><tr><td>विकृते सति - </td><td>When disappeared</td></tr><tr><td>पूर्वावस्थानुवृत्तिः - </td><td>Continuity of the original state</td></tr><tr><td>च - </td><td>Also</td></tr></table><p>The continuity of the original condition, not with standing the disappearance of an object the cause of such continuance, by the operation of another agency, is called the second kind of the Original.</p>'
          },
          examples: [
            {
              text: 'दीपे निर्वापितेऽप्यासीत्काञ्चीरत्नैर्महन्महः ॥',
              explanation_sans: '',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>दीपे - </td><td>Lamp</td></tr><tr><td>निर्वापिते अपि - </td><td>Though extinguished</td></tr><tr><td>कांचीरत्नैः - </td><td>By the jems inlaid in the girdle of a lady</td></tr><tr><td>महत् - </td><td>Ample </td></tr><tr><td>महः - </td><td>Light</td></tr><tr><td>आसीत् - </td><td>Was</td></tr></table><p> Although the lamp was put out (by a lady in the bed chamber), still there was ample light issuing from the jerns of the girdle (of that lady).</p><p>Here, a pretty young maiden but an artless one ( मुग्धा ) put out the lamp of the bed chamber through bashfulness; still the light continued as before by the lustre of the jems inlaid in the girdle of that maiden.</p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अतद्गुणाः',
      title_eng: 'अतद्गुणाः- The Non-Borrower',
      id: 76,
      slokas: [
        {
          sloka: 'संगतान्यगुणानङ्गीकारमाहुरतद्गुणम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>संगतान्यगुणानंमीकारम् - </td><td>Non-assuming the quality of another object though connected with it.</td></tr><tr><td>अतद्गुणम् - </td><td>Non-Borrower</td></tr><tr><td>आहः - </td><td>Call</td></tr></table><p>The non-assuming, by an object, of the quality of another though connected with it (or in other words, when an object does not borrow the quality of another object, it) is called the Non- Borrower.</p>'
          },
          examples: [
            {
              text: 'चिरं रागिणि मच्चित्ते निहितोऽपि न रञ्जसि ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>चिरम् - </td><td>For a long time</td></tr><tr><td>रागिणि - </td><td>Red (affectionate)</td></tr><tr><td>मच्चित्ते - </td><td>In my mind</td></tr><tr><td>निहितोऽपि - </td><td>Though seated</td></tr><tr><td>न रञ्जसि - </td><td>Dost not become red (affectionate)</td></tr></table><p>O Lover! though seated long in my red (affectionate) mind, yet thou dost not become red (affectionate).</p><p>The strikingness of this example rests upon the use of the word राग which means both redness and affection.</p><p>Here, the lover does not become red (affectionate) though he is seated in the red (more affectionate) mind of the lady. Hence it is the Non Borrower</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अनुगुणाः',
      title_eng: 'अनुगुणाः -The Conformity',
      id: 77,
      slokas: [
        {
          sloka: 'प्रक्सिद्धत्वगुणोत्कर्षोऽनुगुणः परसंनिधेः ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>परसन्निधेः - </td><td>By the presence of another object</td></tr><tr><td>प्राक्सिड्वस्वगुण्त्कर्षः - </td><td>The pre-eminence of one’s own previously settled quality</td></tr><tr><td>अनुगुणाः - </td><td>The Conformity</td></tr></table><p>The pre-eminence, of ones own previously settled quality, by the presence of another agency, (or, in other words, when the original quality of an oject is made pre-eminent by the proximity of another object, it) is called the Conformity</p>'
          },
          examples: [
            {
              text: 'नीलोत्पलानि दधते कटाक्षैरतिनीलनम् ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>नीलोत्पलानि - </td><td>Blue lotuses</td></tr><tr><td>कटाक्षैः - </td><td>By the side-glances</td></tr><tr><td>अतिनीलताम् - </td><td>Extreme blueness</td></tr><tr><td>दधते - </td><td>Bear</td></tr><tr><td>The blue lotuses attain more blueness by the side-glances (of a lady falling on them)</td></tr></table><p>Here, the dark blue lustre of the lotuses is increased by the pre-eminent blue side-glances. of the lady falling on them.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'मिलितम्',
      title_eng: 'मिलितम्-The Lost',
      id: 78,
      slokas: [
        {
          sloka: 'मीलितं यदि सादृश्याद्भेद एव न लक्ष्यते ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>if</td></tr><tr><td>सादृश्यात् - </td><td>On account of resemblance</td></tr><tr><td>भेदः - </td><td>A distinction</td></tr><tr><td>एव - </td><td>Alone</td></tr><tr><td>न लक्ष्यते - </td><td>Is not perceived</td></tr><tr><td>मीलितम् - </td><td>The Lost</td></tr></table><p>When distinction alone p is net perceived (between two objects on hand) on account of their resemblance, then it is the Lost.</p>'
          },
          examples: [
            {
              text: 'रसो नालक्षि लाक्षायाश्चरणे सहजारुणे ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>सहजारुणे - </td><td>Naturally red</td></tr><tr><td>चरणे - </td><td>In the foot</td></tr><tr><td>लाक्षायाः - </td><td>Of the red lac</td></tr><tr><td>रसः - </td><td>Dye</td></tr><tr><td>न अलक्षि - </td><td>Was not perceived</td></tr></table><p>The dye of the red lac was not perceived in the naturally red feet (of this beautiful maiden).</p><p>Here, we see the disappearance of the dye of the red lac on account of its having been eclipsed by the natural redness of the maiden’s feet.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'सामान्यम्',
      title_eng: 'सामान्यम्-The Sameness',
      id: 79,
      slokas: [
        {
          sloka: 'सामान्यं यदि सादृश्याद्विशेषो नोपलक्ष्यते ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>यदि - </td><td>if</td></tr><tr><td>सादृश्यात् - </td><td>On account of resemblance</td></tr><tr><td>विशेषः - </td><td>Distinguishable peculiarity</td></tr><tr><td>नैव लक्ष्यते - </td><td>Is not at all perceived</td></tr><tr><td>सामान्यम् - </td><td>The Sameness</td></tr></table><p>When any distinguishable peculiarity what- ever is not perceived (between two objects coming in contact) on account of their close resemblance, it is called the Sameness.</p>'
          },
          examples: [
            {
              text: 'पद्माकरप्रविष्टानां मुखं नालक्षि सुभ्रुवाम् ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>पद्माकरप्रविष्टानाम् - </td><td>That entedred the lotus-pool</td></tr><tr><td>सुभ्रुवाम् - </td><td>Of women of beautiful eye-brows</td></tr><tr><td>मुखम् - </td><td>Face</td></tr><tr><td>न अलक्षि - </td><td>Was not perceived</td></tr></table><p>The faces of the women of beautiful eye-brows that entered the lotus-pool are not perceived.</p><p>Here, the faces of the women were not distinguishable from the lotuses in the absence of any dis- criminative quelity between the two which are spoken of as having become identical.</p><p>In the मिलित (LXXLX), one of the objects is inferior in quality and is not apprehended by its being eclipsed by the superior quality of the other.</p><p>In this ﬁgure, the two objects could not be discriminated through their close resemblance. In the मीलित, the inferior object gives up its own quality. Here both the objects do not give up their qualities.</p><p>Hence, this ﬁgure is different from the मीलित.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'उन्मीलितम् & विशेषकः',
      title_eng: 'उन्मीलितम्-The Un-Lost and विशेषकः-The Un-Sameness',
      id: 80,
      slokas: [
        {
          sloka: 'भेदवैशिष्ट्ययोः स्फूर्तावुन्मूलितविशेषकौ ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>भेदवैशिष्ट्ययोः - </td><td>Of any distinction and of any discriminating peculiarity</td></tr><tr><td>स्फूर्तौ - </td><td>In the manifestation</td></tr><tr><td>उन्मीलित विशेषकौ - </td><td>The Un-Lost and The Un-Sameness</td></tr></table><h3>Definition</h3><p>If any distinction prohibited in the मीलित(LXXIX) become manifest afterwards, it is called the उन्मीलितम्.</p><h3>Definition</h3><p>If any discriminating peculiarity prohibited in the सामान्य become manifest afterwards, it is called the विशेषकः .</p>'
          },
          examples: [
            {
              text: '<h3>Example of the figure उन्मीलित</h3>हिमाद्रिं त्वद्यशो मग्नं सुराः शीतेन जानते ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>सुराः - </td><td>The celestial beings</td></tr><tr><td>त्वद्यशोमग्नम् - </td><td>Eclipsed by thy fame</td></tr><tr><td>हिमाद्रिम् - </td><td>The Himalaya mountain</td></tr><tr><td>शीतेन - </td><td>By chilliness</td></tr><tr><td>जानते - </td><td>Recognize</td></tr></table><p>O king ! The celestial beings recognize the Himalaya mountain, eclipsed by thy (all-pervading) fame, through its chillness.</p><p>Here, the Himalaya which is white was lost in the whiter fame of the king and was afterwards recognized by the Gods on account of its chillness.</p>'
              }
            },
            {
              text: '<h3>Example of the figure विशेषकः </h3>लक्षितान्युदिते चन्द्रे पद्मानि च मुखानि च ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>चन्द्रे उदिते - </td><td>When the moon had risen</td></tr><tr><td>पद्मानि - </td><td>Lotuses</td></tr><tr><td>मुखानि च - </td><td>And the faces</td></tr><tr><td>लक्षितानि - </td><td>Became distinguishable</td></tr></table><p>After the rise of the moon, the lotuses and the faces of the damsels became distinguishable.</p><p>In the सामान्य, the faces of the damsels that entered the lotus-pool were undistinguishable from the lotuses on account of their likeness but after the rise of the moon the lotuses faded and the faces began to appear more beautiful and hence they became discriminated.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'उत्तरम्',
      title_eng: 'उत्तरम् -The Reply',
      id: 81,
      slokas: [
        {
          sloka: 'किंचिदाकूतसहितं स्याद्गूढोत्तरमुत्तरम् ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>किंचिदाकूतसहितम् - </td><td>Containing some import</td></tr><tr><td>गूढोत्तरम् - </td><td>A secret reply</td></tr><tr><td>उत्तरं स्यात् - </td><td>Is The Reply</td></tr><tr><td>पान्थ ! - </td><td>O traveler !</td></tr></table><p>A secret reply containing some indirect import (of the speaker) is called the Reply. Or, in other words, when the speaker indirectly expresses his or her own intention in a reply made to a query previously put by some person (which query is to be inferred from the answer), it is called the Reply.</p>'
          },
          examples: [
            {
              text: 'यत्रासौ वेतसी पान्थ तत्रेयं सुतरा सरित् ॥',
              explanation: {
                sans: '',
                eng: '<h3>Word meanings</h3><table><tr><td>यत्र - </td><td>Where</td></tr><tr><td>असौ वेतसौ - </td><td>That rattan</td></tr><tr><td>तत्र - </td><td>There</td></tr><tr><td>इयं सरित् - </td><td>This river</td></tr><tr><td>सुतरा - </td><td>Is fordable</td></tr></table><p>O Traveller! (the place) where that ratan is seen-there this river is fordable.</p><p>From this, we understand theta traveller has asked the speaker, a lady here, the place where a particular river can be crossed. The lady becoming enumoured of him makes this reply by showing a particular place which was also indirectly named by her as a place of assignatiou for their meeting.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka: '<h3>Second kind of the Reply.</h3>पश्नोत्तरान्तराभिन्नमुत्तरं चित्रमुच्यते ।',
          sloka_explanation: {
            sans: '',
            eng: '<h3>Word meanings</h3><table><tr><td>प्रश्न+उत्तरान्तर+अभिन्नम् - </td><td>Consisting of same words of the query and its two replies</td></tr><tr><td>चित्रमुत्तरम् - </td><td>A skilful reply</td></tr><tr><td>उत्तरम् - </td><td>The Reply</td></tr></table><p>When a skilful reply is not different from the query, or in other words, when a reply made consists of the same words of the question asked, and when one reply made serves for two queries asked, then it is called also the Reply.</p>'
          },
          examples: [
            {
              text: 'के दारपोषणरताः के खेटाः किं चलं वयः ॥',
              explanation_sans: '',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>के - </td><td>Who</td></tr><tr><td>दारपोषणरताः - </td><td>Those that are engaged in maintaining their wives</td></tr><tr><td>केदारपोषणरताः - </td><td>Those that are bent upon bringing the lands to perfection= husbandmen</td></tr><tr><td>के खेटाः - </td><td>Who move in the air</td></tr><tr><td>किं चलम् - </td><td>Which is transitory</td></tr><tr><td>वयः - </td><td>(1) Birds (2) the age</td></tr></table><p>Q. Who are those that are engaged in maintaining their wives ?</p><p>R. Those that are bent upon bringing the lands to perfection or husbandmen.</p><p>Q. Who move in the air and which is transitory-</p><p>R. वयः (1) birds (2) age.</p><p>केदारः = a ﬁeld. The ﬁrst question के दारपोषणरताः and its answer केदारपोषणरताः consist of the same words (lit. letters). वयः is the one reply made to the two questions asked. वयः when it means, ‘birds’ is the nominative plural of the word वि; and when it means ‘the age’ it is the nominative singular of the neuternoun वयस्. Hence these are styled the skilful replies. </p>'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'सूक्ष्मम्',
      title_eng: 'सूक्ष्मम्-The Subtle',
      id: 82,
      slokas: [
        {
          sloka: 'सूक्ष्मं पराशयाभिज्ञे तरसाकूतचेष्टितम् ।',
          sloka_explanation: {
            sans: 'पराशयाभिज्ञः अन्याभिप्रायवेदी इतरोयस्तस्य साकूतचेष्टितं साभिप्रायचेष्टाविशेष स्सूक्ष्ममित्युच्यते- केनचिच्चतुरजनेनलोचनादि चेष्टयैवस्वाभीष्टे प्रार्थिते सति तदभिप्रायवेदिनः कस्यचिज्जनस्यतदुचित स्वाभिप्रायसूचक चेष्टाविशेष स्सूक्ष्माख्योलंकार इतिनिष्कर्षः ',
            eng: '<h3>Word meanings</h3><table><tr><td>परा+चेष्टितम् - </td><td>Skilled in understanding the import of another</td></tr><tr><td>इतरः - </td><td>A second person</td></tr><tr><td>तस्य - </td><td>His</td></tr><tr><td>साकूतचेष्टितम् - </td><td>A significant act</td></tr><tr><td>सूक्ष्मम् - </td><td>The Subtle</td></tr></table><p>A signiﬁcant act or gesture, of a person, intimated to another who is able to understand such gestures of others is called the Subtle.</p>'
          },
          examples: [
            {
              text: 'मयि पश्यति सा केशैः सीमन्तमणिमावृणोत् ॥',
              explanation: {
                sans: 'प्रिहितं परवृत्तांत ज्ञातुस्साकूतचेष्टितम् । प्रियेगृहागते प्रातः कांतातल्पमकल्पयत् ॥व्याजोक्तिरन्य हेतूक्त्यायदाकारस्यगोपनम् । सखिपश्यगृहारामपरागै रस्मिधूसरा ॥ गूढोक्ति                यिकयाकिमाचरित मितिकेन चत्सलाख्यापृष्टस्य कस्यचिदेवं वचनं- मयिपश्यतिसाभिप्रायं विलोकयति सतिसानायिकासीमंतमणिं स्वीयकेश बद्धभूषण रत्नं केशैरावृणोदाच्छादितवती- आवयोस्संकेतकालः क इत्याशयेन तत्परिज्ञानार्थं मयिसाकूतं पश्यतिसतिसामदाशयं ज्ञात्वास्सूर्यास्तमया नंतर मंधकारोदये सति आवयोस्संकेत काल इत्यभिप्रायसूचकं स्वकीय केशैस्सीमंतमणि तिरोधानरूपं चेष्टाविशेषं कृतवतीत्यर्थः – अत्रनायकाभिप्रायं जानंत्यानायिकायास्पाकूतं केशैर्मण्यावरणं कृतमिति भवति सूक्ष्मम् ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>सा - </td><td>That (maiden)</td></tr><tr><td>मयि पश्यति - </td><td>When I was looking</td></tr><tr><td>केशैः - </td><td>By the tresses</td></tr><tr><td>सीमन्तमणिम् - </td><td>The crest-jewel</td></tr><tr><td>आवृणोत् - </td><td>Concealed</td></tr></table><p>( Friend ! ) When I was seeing (her anxiously for time of assignation), she concealed her crest jewel under her tresses.</p><p>Here, the time of assignation eagerly inquired for by the lover is guessed from the lady’s act of concealing her bright crest-jewel under her dark tresses-a mark indicating the time of night when the bright sun is concealed under the darkness of the night.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'पिहितम्',
      title_eng: 'पिहितम् - The Covering',
      id: 83,
      slokas: [
        {
          sloka: 'पिहितं परवृत्तान्ताज्ञातुः साकूतचेष्टितम् ।',
          sloka_explanation: {
            sans: 'परवृत्तांतज्ञातुः परकीयवृत्तांतज्ञस्या साकूतचेष्टितं साभिप्राय चेष्टाविशेषः पिहितमित्युच्यते- परवृत्तांतंतदीयलक्षणैः ज्ञात्वाकं रतोद्घाट्यैवस्वस्य ॥ तदभिज्ञतास्थित्यभिप्रायगर्भः इतर जनचेष्टा विशेषः पिहितमित्युच्यते ॥',
            eng: '<h3>Word meanings</h3><table><tr><td>परवृत्तान्तज्ञातुः - </td><td>Of one that knows the secret of the other</td></tr><tr><td>साकूतचेष्टितम् - </td><td>Significant act or an insinuation</td></tr><tr><td>पिहितम् - </td><td>The Covering</td></tr></table><p>A signiﬁcant act or an insinuation of a person that he or she knows the secret of another is called The Covering.</p>'
          },
          examples: [
            {
              text: 'प्रिये गृहागते प्रातः कान्ता तल्पमकल्पयत् ॥',
              explanation: {
                sans: 'प्रियेकांते प्रातः प्रातः कालेगृहागते स्वगृहं प्रत्यागतेसति कांतातप्रियातल्पं शय्यां अकल्पयत् आस्तरणादिना सज्जीकृतवतीत्यर्थः – रात्रौ स पत्नीगृहेयधेष्ट विहारेण जागरणं कृत्वा प्रातः काले प्रियेसापराध इवस्वकीय गृहं प्रत्यागते सतितद्गत कुंकुमादि चिह्नैस्तदीयवृत्तांतं ज्ञात्वा गांभीर्यात्कं रतस्तमनुद्घाट्यैव रात्रौ मत्सपत्नीगृहे जागरणाच्छ्रांतोसि- अतोस्यांशय्यायां सुखंशेष्वे त्यभिप्रायेणेयं तल्पकल्पन चेष्टेति भवति पिहितम् ॥ ',
                eng: '<h3>Word meanings</h3><table><tr><td>प्रातः - </td><td>In the morning</td></tr><tr><td>प्रिये गृहागते - </td><td>When the lover came to the house</td></tr><tr><td>कान्ता - </td><td>The lady</td></tr><tr><td>तल्पम् - </td><td>The bed</td></tr><tr><td>अकल्पयत् - </td><td>Prepared</td></tr></table><p>Early in the morning, when the lover came to the house, his lady prepared bed (for him).</p><p>Here, a lady when she saw her husband coming to her house in the morning with the marks of his having toyed with another lady, a rival one, at once prepared bed for his rest thus intimating to him that she has known his secrets.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'व्याजोक्तिः',
      title_eng: 'व्याजोक्तिः - The Disembler',
      id: 84,
      slokas: [
        {
          sloka: 'व्याजोक्तिरन्यहेतूक्त्या यदाकारस्य गोपनम् ।',
          sloka_explanation: {
            sans: 'अन्यहेतूक्त्या हेत्वंतरकथनेन आकारगोपनं स्वीयविलक्षणाकार निगूहनमितियत्साव्याजोक्तिः यत्र केनचिन्निपुणे नगोप्य हेतुकृतमाकारवैलक्षण्यं हेत्वंतरकल्पनेन निगूह्यते- तत्र व्याजोक्तिरिति निष्कर्षः',
            eng: '<h3>Word meanings</h3><table><tr><td>अन्यहेतूक्त्या - </td><td>By an attribution to a different cause</td></tr><tr><td>यत् - </td><td>Which</td></tr><tr><td>आकारस्य - </td><td>Of the appearance</td></tr><tr><td>गोपनम् - </td><td>Concealment</td></tr><tr><td>व्याजोक्तिः - </td><td>The Disembler</td></tr></table><h3>Definition</h3><p>The Disembler is the dissimulation of ones appearance hy attributing to a different cause.</p>'
          },
          examples: [
            {
              text: 'सखि पश्य गृहारामपरागैरस्मि धूसरा ॥',
              explanation: {
                sans: 'चौर्यकृतरतिकालेभूतललुं रनेनलग्नधूळिधूसरित स्वांगविकारः सख्यामाविज्ञेय इति हेत्वंतरकथनेन  तद्गोपनं कुर्वंत्याः कस्याश्चिदिदं वचनं – हे सखि अहंगृहारामपरागैः गृहोपवनपुष्परेणुभिः धूसराधूसरवर्णाकृतास्मिमां पश्य- अत्र चौर्यकृतसुरत हेतुकं स्वांगवैवर्ण्यमारामविहारकालीन पुष्पपराग रूपहेत्वंतरकल्पने नाच्छादितमिति भवति व्याजोक्तिः ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>सखि! - </td><td>Friend !</td></tr><tr><td>पश्य - </td><td>See</td></tr><tr><td>गृहारामपरागैः - </td><td>By the pollens of the house-garden</td></tr><tr><td>धूसरा अस्मि - </td><td>I am made grayish</td></tr></table><p>Friend ! See I am made grayish by the pollens of (my) house-garden. </p><p>Here, a lady, the speaker, having her body made dirty by the dust in her toying with her lover, artfully conceals the same by saying that she was made greyish by the pollens, i.e., by attributing it to some different cause. Her first state was not expressed and then denied and so this is different from the ornament of Concealment (XI) where an object is ﬁrst mentioned by a person who then conceals it.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'गूढोक्तिः',
      title_eng: 'गूढोक्तिः-The Secrecy',
      id: 85,
      slokas: [
        {
          sloka: 'गूढोक्तिरन्योद्देश्यं चेद्यदन्यं प्रति कथ्यते ।',
          sloka_explanation: {
            sans: 'अन्यः उद्देश्योयस्यास्सा अन्यं प्रतिवक्तव्येत्यर्थः- गीर्वाक्यं अन्यं प्रत्युदेश्यं कंचिदप्रकृतं प्रतिकध्यत इतियत् सागूढोक्तिः यमुद्दिश्य किंचिद्वक्तुमर्हं तद्गोप्यत्वं परैर्माव्यज्ञायीति तदेववाक्यंतदन्यमप्रकृतमुद्दिश्य श्लेषभंग्याकथ्यते चेत्सागूढोक्तिंति निष्कर्षः कन्योद्देश्यागीर्यदन्यं प्रतिकथ्यते । ',
            eng: '<h3>Word meanings</h3><table><tr><td>चेद् - </td><td>if</td></tr><tr><td>अन्योद्देश्यम् - </td><td>Intended for another</td></tr><tr><td>अन्यम् प्रति - </td><td>To another</td></tr><tr><td>कथ्यते - </td><td>Is told</td></tr><tr><td>गूढोक्तिः - </td><td>The Secrecy</td></tr></table><p>When a speech intended to be communicated to a particular person is addressed to another whoyis also before the speaker, and when that speech conveys also the intended meaning of the speaker, it is termed the Secret Speech.</p> '
          },
          examples: [
            {
              text: 'वृषापेहि परक्षेत्रादायाति क्षेत्ररक्षकः ॥',
              explanation: {
                sans: 'कस्मिंश्चित्कामुके परकळत्रमुपभुंजाने सति तत्पत्युरागमनं दूरतो दृष्ट्वा- ह हेटविटत्वं परकळत्र मुत्सृज्यागच्छ तत्पतिरयमायातीति साक्षादुक्त्यातटस्थानां प्रकाशस्व्यादितिमनपि कृत्वाददन्यं परक्षेत्रस्य भक्षकं समीपस्थं कंचिदृषभमुद्दिश्यत द्रहस्यस्थल समीपस्थायादूत्या इयमुक्तिः – हे वृषभ बलीवर्द परक्षेत्रात्परकीय सस्यभूमैः परकळत्राच्चत्वमपेह्यपसर- कुतः क्षेत्रपालकः सस्यभूमीश्वरः – कळत्रस्वामी च आयात्यागच्छति अत्रश्लेषभंग्यागूषमिममर्थं कामुकोजानीयान्नान्य इत्याशयेनतं प्रति साक्षादनुक्त्वातदुद्देश्यकमेव वाक्यमिदं तटस्थवंचनार्धमन्यं प्रतिकथनमिति भवतिगूढोक्तिः ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>वृष ! - </td><td>O bull ! or luster !</td></tr><tr><td>परक्षेत्रात् - </td><td>From another’s field or wife</td></tr><tr><td>अपेहि - </td><td>Begone</td></tr><tr><td>क्षेत्ररक्षकः - </td><td>The land-lord or husband</td></tr><tr><td>मायाति - </td><td>Comes</td></tr></table><p>O bull! begone, yonder comes the land-lord.</p><p>This speech is intended to be communicated to a person toying with the wife of another person and this is addressed to the bull that was grazing in a third man’s field. The intended meaning to be conveyed is :-</p><p>O Luster ! begone, yonder comes the husband of the lady with whom thou art boldly toying.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विवृतोक्तिः',
      title_eng: 'विवृतोक्तिः - Open Speech',
      id: 86,
      slokas: [
        {
          sloka: 'विवृतोक्तिः श्लिष्टगुप्तं कविनाविष्कृतं यदि ।',
          sloka_explanation: {
            sans: 'श्लिष्टगुप्तमुक्तरीत्याश्लेष निगूहितं वस्तुकविनाविष्कृतं स्पष्टीकृतं यलितदानिवृतोक्तिः ॥ ',
            eng: '<h3>Word meanings</h3><table><tr><td>श्लिष्टगुप्तम् - </td><td>Hidden under a pun</td></tr><tr><td>कविना - </td><td>By the poet</td></tr><tr><td>आविष्कृतम् यदि - </td><td>If purposely expressed</td></tr><tr><td>विहितोक्तिः - </td><td>Open Speech</td></tr></table><p>Open Speech is that which is hidden under spun as in the preceding figure but purposely expressed by the poet by some kind of indication.</p>'
          },
          examples: [
            {
              text: 'वृषापेहि परक्षेत्रादिति वक्ति ससूचनम् ॥',
              explanation: {
                sans: 'हे वृषत्वं परक्षेत्रादपेहि अपसर इतिन सूचसंकामुकस्य प्रकाशनं यथा स्यात् तधावक्तिवदति- तद्भर्त्रागमनात्प्रागेवत्व मपसरेति तत्सहचरः कश्चित्तमुद्दिश्यहित मुपदिशतीत्यर्थः – अत्र श्लेषिगुप्तार्थस्यक विनैवसूचनमिति स्पष्टीकृतत्वाद्भवति विवृतोक्तिः ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>वृष ! - </td><td>Bull ! or luster !</td></tr><tr><td>परक्षेत्रात् - </td><td>From another’s field or wife</td></tr><tr><td>अपेहि - </td><td>Begone</td></tr><tr><td>इति - </td><td>So</td></tr><tr><td>ससूचनम् - </td><td>With a gesticulation</td></tr><tr><td>वक्ति - </td><td>(he) speakes</td></tr></table><p>“O bull! begone from another’s ﬁeld", so the speaker speaks with a gesticulation.</p><p>By use of the word वृषापेहि, this is also hidden under a pun; and, by the employment of the word ससूचनम्, in the example by the poet, the secrecy becomes expressed. </p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'युक्तिः',
      title_eng: 'युक्तिः - Covert Speech',
      id: 87,
      slokas: [
        {
          sloka: 'युक्तिः पराभिसन्धानं क्रियया मर्मगुप्तये ।',
          sloka_explanation: {
            sans: 'मर्मगुप्तयेस्वरहस्य गोपनायक्रिययास्व मर्मच्छादकभ्रम संपादकव्याजेन पराभिसंधानमाप्त पुरुषवंचनं युक्तिरत्युच्यते व्यळीकंछाभिसंधानमित्यमरः – अतिरहस्ये कर्मणिप्रवृत्तेन केरचित्स्वरहस्य प्रकाशभीरुणामध्येकस्मिन्नप्यनापै समागते स्वमर्म प्रकाशोमाभूदितिकया चित्प्रिययातस्य भ्रांतिं संपाद्य यत्र वचनं क्रियते तत्र युक्तिरितिनिष्कर्षः ॥',
            eng: '<h3>Word meanings</h3><table><tr><td>मर्मगुप्तये - </td><td>For concealment of one’s own design</td></tr><tr><td>क्रियया - </td><td>By an act</td></tr><tr><td>परातिसंधानम् - </td><td>Deception played upon another</td></tr><tr><td>युक्तिः - </td><td>Covert speech</td></tr></table><p>Covert Speech is a deception of a. person by an act played upon another for concealment of his or her own design.</p>'
          },
          examples: [
            {
              text: 'त्वामालिखन्ती दृष्ट्वान्यं धनुः पौष्पं करेऽलिखत् ॥',
              explanation: {
                sans: 'विरहातुरां नायिकामुपेक्षमाणं नायकमुद्दिश्य सखीवचनमिदं- हे नायकत्वत्प्रियात्वामालिखंती विनोदार्थं तत्प्रतिनिधिं पटादौलिखंती सती अन्यामनाप्तां कांचिद्दृष्ट्वाकरे पौष्पंधनुः मन्मथचापमलिखदित्यनेन लेखनेन हेतुना इयं मन्मथं लिखतीतस्य भ्रमं निष्पाद्यस्वकीय प्रियविषयाति कामनामाच्छादितवतीत्यर्थः अत्र रहस्यनिगूहनाय पौष्पनुसु र्नर्माणक्रियया तटस्थायाः वंचनं कृतमिति भवतियुक्तिः ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>त्वाम् - </td><td>Thee</td></tr><tr><td>आलिखन्ती - </td><td>painting</td></tr><tr><td>अन्यं दृष्ट्वा - </td><td>Seeing another (lady)</td></tr><tr><td>पौष्पं धनुः - </td><td>Flowery bow</td></tr><tr><td>करे - </td><td>In the hand</td></tr><tr><td>अलिखत् - </td><td>Draw</td></tr></table><p>Lover! Thy lady painted thee and, seeing another person coming to her at that time, drew the ﬁgure of a flowery bow in the hand, thus intimating to that stranger than she painted the cupid and not thee.</p><p>This is said by a go-between.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'लोकोक्तिः',
      title_eng: 'लोकोक्तिः - Popular Saying',
      id: 88,
      slokas: [
        {
          sloka: 'लोकप्रवादानुकृतिर्लोकोक्तिरिति भण्यते ।',
          sloka_explanation: {
            sans: 'लोकप्रवादस्य लौकिक सुभाषणस्यानुकृतिरनुकरणं तदनुकरणालाप इतियावत्- सालोकोक्तिरिति कथ्यत इत्यर्थः ॥',
            eng: '<h3>Word meanings</h3><table><tr><td>लोकप्रवादानुकृतिः - </td><td>Resembling a pro- verb</td></tr><tr><td> लोकोक्तिरिति - </td><td>Popular Saying</td></tr><tr><td>भण्यते - </td><td>Is called</td></tr></table><p>An expression resembling a proverb is called the Popular Saying.</p>'
          },
          examples: [
            {
              text: 'सहत्व कतिचिन्मासान्मीलयित्वा विलोचने ॥',
              explanation: {
                sans: 'सुदूरवर्ति भर्तृकां तद्दर्शनोत्सुकां नायिकामुद्दिश्यकस्याश्चित्सख्या इयमुक्तिः हे सखिलोचने नेत्रेमीलयित्वाविलोचने ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>विलोचने - </td><td>The eyes</td></tr><tr><td> मीलयित्वा - </td><td>Having closed</td></tr><tr><td> कतिचित् मासान् - </td><td>A few months</td></tr><tr><td>सहस्व - </td><td>Wait or be patient</td></tr></table><p>Lady ! wait for a few months with thy eyes closed.</p><p>This is one of the messages sent by a separated lover to his lovely wife. The Full meaning is :-</p><p>“Lady ! Let a few months be spent unmarked by thee ; and then we shall both meet, and have full scope to reward our desires entertained in our separation, “</p><p>With thy eyes closed is even now more current in the sphere of the lovers and distressed people.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'छेकोत्किः',
      title_eng: 'छेकोत्किः -The Skilful Speech',
      id: 89,
      slokas: [
        {
          sloka: 'छेकोक्तिर्यदि लोकोक्तेः स्यादर्थान्तरगर्भिता ।',
          sloka_explanation: {
            sans: 'यत्रलोकोक्तिरर्थांतरगर्भितास्यात्तत्र छेकोक्तिः – यत्रलोकवादानुकारि वाक्यमेब अर्थांतरगत्भिताकारेण प्रयुज्यते तत्रछेकोक्तिरितिनिष्कर्षः ॥ ',
            eng: '<h3>Word meanings</h3><table><tr><td>लोकोक्तेः - </td><td>Of the Popular Saying</td></tr><tr><td>अर्थान्तरगर्भिता - </td><td>Containing another sense</td></tr><tr><td>यदि स्यात् - </td><td>If</td></tr><tr><td>छेकोक्तिः - </td><td>Skilful Speech</td></tr></table><p>If the Popular Saying were to contain another sense, then it is called the Skilful Speech.</p>'
          },
          examples: [
            {
              text: 'भुजङ्ग एव जानीते भुजङ्गचरणं सखे ॥',
              explanation: {
                sans: 'केनचित्कस्यचिद्वृत्तांते पृष्टे सतिन्वयमजानन्निवस्व समीपवर्तिनं कंचिन्निर्दिश्य अयमेव तद्वृत्तांतं जानातीतियस्सोपहासं क्रियते तस्योक्तिरियं हे सखेभुजंग एच सर्प एवभुजंगचरणं सर्पपादं जानातिनकोप्यन्यस्तत्पादं वेत्ति अतोयमेवधनार्जनादौ तत्सहचारित्वात्तद्वृत्तां मपिजानातीतिलोक प्रवादाभिप्रायेनति भुजंगशब्दस्य विटवाचित्वात्सचायं द्वावपिविटावतस्तदीय व्यभिचारादिरहस्यं सर्वमप्ययमेववेत्तीत्यर्थांतर गर्भितेयं लोकोक्तिर्भवति॥',
                eng: '<h3>Word meanings</h3><table><tr><td>सखे ! - </td><td>Friend !</td></tr><tr><td>भुजंगः एव - </td><td>Only the serpent or villain</td></tr><tr><td>भुजंगचरणम् - </td><td>The feet of the serpent or the behavior of a villain</td></tr><tr><td>जानीते - </td><td>Knows</td></tr></table><p>A serpent alone knows the feet of a serpent.</p><p>Another sense is - A villain alone knows the behaviour of a villain.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'वक्रोक्तिः',
      title_eng: 'वक्रोक्तिः - The Crooked Speech',
      id: 90,
      slokas: [
        {
          sloka: 'वक्रोक्तिः श्लेषकाकुभ्यामपरार्थप्रकल्पनम् ।',
          sloka_explanation: {
            sans: 'श्लेषेणकाक्वा अपरार्थ प्रकल्पनं वक्त्रभिप्रेतादन्यार्थे वाक्यकल्पनं वक्रोक्तिः केनचिदृजुबुद्ध्येव वाक्ये प्रयुक्ते सति कोपादिवशादन्येन तद्वचनस्यार्थांतरं कल्पयित्वा यत्र वक्रभाषणं क्रियते तत्र वक्रोक्तिरिति निष्कर्षः ',
            eng: '<h3>Word meanings</h3><table><tr><td>श्लेषकाकुभ्याम् - </td><td>By means of a pun or by an affected change of voice</td></tr><tr><td>अपरार्थ प्रकल्पनम् - </td><td>Construing one’s speech differently</td></tr><tr><td>वक्रोक्तिः - </td><td>The Crooked Speech</td></tr></table><p>When a person construes aspeech of another in a different sense by means of a pun or by an affected change of voice, it is called the Crooked Speech.</p>'
          },
          examples: [
            {
              text: 'मुञ्च मानं दिनं प्राप्तं नेह नन्दी हरान्तिके ॥',
              explanation: {
                sans: 'अन्य संगादिकृतोकोपवशेन सुरत सुखपराङ्मुखीं कांचिन्नायुकामुद्दिश्यकश्चिन्नायकः प्राहमुंचेति॥ हे प्रियेदिनमः प्राप्तं प्रभातसमयः प्राप्त इत्यर्थह् अतोमानं कोपं मुंचत्यजेत्येवमृजुमतिना नायकेन वाक्ये प्रयुक्ते सतिकोपवशान्नायिकान्य वाक्यासार्थं प्रकल्प्यवक्रोक्त्योत्तरमाह ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>मुञ्च मानम् - </td><td>Remove thy anger</td></tr><tr><td> दिनं प्राप्तम् - </td><td>Day appeared</td></tr><tr><td>इह - </td><td>Here</td></tr><tr><td>नन्दी न - </td><td>No Nandin</td></tr><tr><td> हरान्तिके - </td><td>Near the God Siva</td></tr></table><p> Lady! Remove thy anger as day has appeared.</p><p>Here the lady construing it otherwise by at division of words मानं दिनम् into मा नन्दिनम् and reading it thus "मुञ्च मा नन्दिनं प्राप्तम् =leavest not the Nandin that has arrived here ” angrily replies thus, “No Nandin here; but he is near the God Siva."</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'स्वभावोक्तिः',
      title_eng: 'स्वभावोक्तिः - Description of Nature',
      id: 91,
      slokas: [
        {
          sloka: 'स्वभावोक्तिः स्वभावस्य जात्यादिस्थस्य वर्णनम् ।',
          sloka_explanation: {
            sans: 'जात्यादिस्थस्य कुरंगत्वादि जातौवर्तमानस्य- अत्रादिशब्देन क्रियादिः गृहते स्वभावस्यवर्णनं यदितदा स्वभावोक्तिरित्युच्यते यत्र यथार्थ वस्तुवर्णनं चारु यथातथा क्रियतेतत्र स्वभाक्तिर्नामालंकार इति निष्कर्षः ॥ ',
            eng: '<h3>Word meanings</h3><table><tr><td>जात्यादिस्थस्य - </td><td>Belonging to a genus &c., i.e., quality, an action and a subastance</td></tr><tr><td>            स्वभावस्य - </td><td>Of one’s own state</td></tr><tr><td>            वर्णनम् - </td><td>Description</td></tr><tr><td>            स्वभावोक्तिः - </td><td>Description of Nature</td></tr></table><p>        Description of Nature is the delineation of of a peculiar state of an object belonging to a genus etc., i.e., a quality, an action and a substance.</p>'
          },
          examples: [
            {
              text: 'कुरङ्गैरुत्तरङ्गाक्षैः स्तब्धकर्णैरुदीक्ष्यते ॥',
              explanation: {
                sans: 'ऊट्तरंगाक्षैः उद्गततरंगलोचनैरति चंदललोचनैरित्यर्धः – स्तब्धकर्णैर चांचल्यं यथातधोर्ध्व प्रसारितकणैरित्यर्धः – कुरुगैरुदीक्षितं दृष्टं व्यारंगाक्षैः स्तब्धकर्णैरुदीक्षितम् ',
                eng: '<h3>Word meanings</h3><table><tr><td>उत्तरङ्गाक्षैः - </td><td>Tremulous eyes</td></tr><tr><td>                स्तब्धकर्णैः - </td><td>Pricking up ears</td></tr><tr><td>                कुरङ्गः - </td><td>By antelopes</td></tr><tr><td>                उदीक्ष्यतं - </td><td>Is looked at</td></tr></table><p>             These antelopes having tremulous eyes and pricking up their ears behold !</p><p>As the term ‘antelopes’ denotes many, we have here the description of nature of a genus.</p><p>Another name of this ﬁgure is जातिः according to Dandi. This kind of description is considered the best by the poets.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'भाविकम्',
      title_eng: 'भाविकम्-The Vision',
      id: 92,
      slokas: [
        {
          sloka: 'भाविकं भूतभाव्यर्थसाक्षात्कारस्य वर्णनम् ।',
          sloka_explanation: {
            sans: 'भूतभाव्यर्थ साक्षात्कारस्य गतार्थस्य भविष्यदर्थस्य च यस्साक्षात्कारस्तस्य वर्णनं यत्तद्भाविकमित्युच्यते – यत्रातीतानागते प्रत्यक्षत्वेन महाश्चर्यकरार्ध वर्णनाल्लक्ष्येते- तत्र द्विविधोभाविकालंकार इति निष्कर्षः ',
            eng: '<h3>Word meanings</h3><table><tr><td>भूत भावि अर्थ-साक्षात्कारस्य - </td><td>Of perception of things pas or future</td></tr><tr><td>            वर्णनम् - </td><td>Description</td></tr><tr><td>            भाविकम् - </td><td>The vision</td></tr></table><p>          When something past or future is delineated by a poet in such a manner as can bring the subject of descviption vividly before the mind’s eye, it is called the Vision.</p>'
          },
          examples: [
            {
              text: 'अहं विलोकयेऽद्यापि युध्यन्तेऽत्र सुरासुराः ॥',
              explanation: {
                sans: 'सुरासुराः देवदानवा अत्रप्रदेशे युद्ध्यंते युद्धं कुर्वंति- अहमद्यापि विलोकये- अत्रकस्यापि कर्तुमशक्यत्वेन महाश्चर्यकरदेवदानव युद्धरूपार्थोक्त्याभाविकानां हृदिभावनमित्याशयेन तत्प्रत्यक्षत्वेन वर्णितत्वाद्भाविकालंकारोभवत्येव- एवम् द्वितीयमव्यूह्यम् ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>अत्र - </td><td>In this place</td></tr><tr><td>                सुरासुराः - </td><td>The gods and demons</td></tr><tr><td>                युध्यन्ते - </td><td>Fight</td></tr><tr><td>                अहम् - </td><td>I</td></tr><tr><td>                अद्यापि - </td><td>Even now</td></tr><tr><td>                विलोकये - </td><td>Behold</td></tr><tr></table><p>The gods and demons ﬁght in this place-even now I seem to behold it!</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'उदात्तम्',
      title_eng: 'उदात्तम् - The Exalted',
      id: 93,
      slokas: [
        {
          sloka: 'उदात्तमृद्धेश्चरितं श्लाघ्यं चान्योपलक्षणम् ।',
          sloka_explanation: {
            sans: 'श्लाघ्यं श्लाघार्हं बुद्धिस्समृद्धिमच्चरितं वाकाकवद्देवदत्त गृहमित्यादिवद्वाच्योप लक्षणं सद्वर्ण्यते यदितदुदात्तमित्युच्यते',
            eng: '<h3>Word meanings</h3><table><tr><td>ऋड्वेः - </td><td>Of prosperity</td></tr><tr><td>            चरितम् - </td><td>Description</td></tr><tr><td>            उदात्तम् - </td><td>The Exalted</td></tr><tr><td>            च - </td><td>Also</td></tr><tr><td>            श्लाघ्यम् - </td><td>Commendable action</td></tr><tr><td>            अन्यस्य - </td><td>of another</td></tr><tr><td>            उपलक्षणम् - </td><td>Indirect representation of importance</td></tr></table><p>        A description of prosperity of an object is termed the Exalted. </p><p>And any commendable action of some great personage represented indirectly or collaterally to the object under delineation is termed also the Exalted. </p>'
          },
          examples: [
            {
              text: 'सानौ यस्याभवद्युद्धं तद्धूर्जटिकिरीटिनोः ॥',
              explanation: {
                sans: 'धूर्जटिकिरीटिनोश्शिवार्जुनयोः यत्रसानौयुद्धमभवत्- तत्सानुमयादृष्टमिति कस्यचिदिदं वचनं- अत्र शौर्यादि समृद्धिमच्छिवार्जुन युद्धरूपचरितं सानुरूपवाच्यार्थस्य उपलक्षणं नद्वर्णितमिति भवत्युदात्तालंकारः ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>यस्य - </td><td>Of which (Himalaya mountain)</td></tr><tr><td>               सानौ - </td><td>In the summit</td></tr><tr><td>                तत् - </td><td>That= celebrated</td></tr><tr><td>                धूर्जटिकिरीटिनोः - </td><td>Between God Siva and Arjuna</td></tr><tr><td>                युड्वम् - </td><td>Fight</td></tr><tr><td>                अभवत् - </td><td>Took place</td></tr></table><p>         This is that Himalaya Mountain in whose summit that celebrated fight between the God Siva and Arjuna took place.</p><p>Here, the celebrated fight of the great God Siva. with Arjuna is represented collaterally to the Himalaya Mountain-the object under delineation.</p><p>This kind of representation attaches much importance to the subject on hand-now the Himalaya Mountain.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अत्युक्तिः',
      title_eng: 'अत्युक्तिः - The Exaggeration',
      id: 94,
      slokas: [
        {
          sloka: 'अत्युक्तिरद्भुतातथ्यशौर्यौदार्यादिवर्णनम् ।',
          sloka_explanation: {
            sans: 'अद्भुता तथ्य शौर्यादिवर्णनमाश्चर्यकरमिध्याभूत शौर्यौदार्यादिगुणवर्णनं यदितदात्युक्तिरित्युच्यते',
            eng: '<h3>Word meanings</h3><table><tr><td>अद्भुत - </td><td>marvellous</td></tr><tr><td>अतथ्य - </td><td>False</td></tr><tr><td>शौर्य - </td><td>Valour</td></tr><tr><td>औदार्यादि - </td><td>Generosity etc</td></tr><tr><td>वर्णनम् - </td><td>Description</td></tr><tr><td>अत्युक्तिः - </td><td>Exaggeration</td></tr></table><p>A description of marvellous and also false statement of ones valour, generosity, etc., is called the Exaggeration.</p>'
          },
          examples: [
            {
              text: 'त्वयि दातरि राजेन्द्र याचकाः कल्पशाखिनः ॥',
              explanation: {
                sans: 'हे राजेंद्रत्वयिदातरि सकलाभीष्टप्रदेसति- याचकाः अर्धिनः कल्पशाखिनस्सुरतरवो भवन्- त्वद्दत्तापरिमित धनादिपरिपूर्णास्संतः याचका अपिस्वार्थिभ्योभीष्टान् ददुरित्यर्थः – अत्र राजदानस्य याचकाः कल्पशाखिन इत्युक्त्याऽ परिमितत्वं प्रतिपादितमतोद्भुतत्वं मिध्याभूतत्वं तथाचाद्भुतमिध्याभूत दानगुणोवर्णित इति भवत्यत्युक्त्यलंकारः ',
                eng: '<h3>Word meanings</h3><table><tr><td>राजेन्द्र ! - </td><td>O King !</td></tr><tr><td> त्वयि दातरि - </td><td>When thou art a donor</td></tr><tr><td> कल्पशाखिनः - </td><td>Kalpa tree</td></tr><tr><td>   याचकाः - </td><td>Mendicants</td></tr><tr><td>   भवन्ति - </td><td>Become</td></tr></table><p>O king! When thou art a donor, even the wish-yielding (kalpa) trees of paradise become thy mendicants.</p><p>This is a false exaggeration of a king’s liberal munificence. </p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'निरुक्तिः',
      title_eng: 'निरुक्तिः -Exposition',
      id: 95,
      slokas: [
        {
          sloka: 'निरुक्तिर्योगतो नाम्नामन्यार्थत्वप्रकल्पनम् ।',
          sloka_explanation: {
            sans: 'योगतः अवयवशक्तिवशात् नाम्नांदोषाकरादि नामधेयानां अन्यार्धत्व  प्रकल्पनं यदितदानिरुक्तिरित्युच्यते ',
            eng: '<h3>Word meanings</h3><table><tr><td>नाम्नाम् - </td><td>Of words</td></tr><tr><td>योगतः - </td><td>By derivation</td></tr><tr><td> अन्यार्थत्वप्रकल्पनम् - </td><td>Construing in a sense different from what is intended</td></tr><tr><td>निरुक्तिः - </td><td>Exposition</td></tr></table><p>Exposition consists in construing words, in a sense different from what is intended, by an artificial derivation of those Words.</p>'
          },
          examples: [
            {
              text: 'ईदृशैश्चरितैर्जाने सत्यं दोषाकरो भवान् ॥',
              explanation: {
                sans: 'चंद्रोपालंभन परंविरहिण्या वचनमिदं- हे चंद्र र्योगता नाम्नामन्यार्थत्व प्रकल्पनम् । ईदृशैश्चरितैर्जाने सत्यं दोषाकरोभवान् ',
                eng: '<h3>Word meanings</h3><table><tr><td>चन्द्र ! - </td><td>O moon !</td></tr><tr><td> ईदृशैः - </td><td>These</td></tr><tr><td>  चरितैः - </td><td>By acts of thine</td></tr><tr><td>भवान् - </td><td>Thy honour</td></tr><tr><td>दोषाकरः - </td><td>Maker of night or faulty</td></tr><tr><td> सत्यम् - </td><td>Verily</td></tr><tr><td> जाने - </td><td>I know</td></tr></table><p>O Moon! By these acts of thine, I know, truly, as much that thou art faulty (lit. the mine of faults).</p><p>This is addressed to the moon by a damsel pining under separation.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'प्रतिषेधः',
      title_eng: 'प्रतिषेधः -Prohibition',
      id: 96,
      slokas: [
        {
          sloka: 'प्रतिषेधः प्रसिद्धस्य निषेधस्यानिकीर्तनम् ।',
          sloka_explanation: {
            sans: 'प्रसिद्धस्य विज्ञातस्य निषेधस्य अनुवर्णनमनुभाषणं प्रतिषेधः – यत्रकथ्यमानो निषेधः निर्ज्ञातत्वेन स्वतोनुपयोगादर्थांतरगर्भतया चमत्कारकारी- भवति तत्र निषेधालंकार इति निष्कर्षः',
            eng: '<h3>Word meanings</h3><table><tr><td>प्रसिड्वस्य - </td><td>Well-known</td></tr><tr><td>निषेधस्य - </td><td>Of prevention</td></tr><tr><td>अनुकीर्तनम् - </td><td>Announcement</td></tr><tr><td>प्रतिषेधः - </td><td>Prohibition</td></tr></table><p>Prohibition is the announcement of preven- tion of a well-known act. </p>'
          },
          examples: [
            {
              text: 'न द्यूतमेतत्कितव क्रीडनं निशितैः शरैः ॥',
              explanation: {
                sans: 'युद्धरंगेसन्नद्धं शकुनिमुद्दिश्यसोपहास वचनमिदम्- हेकितवधूर्त शकुने  एतत्परिदृश्यमानं युद्धकर्मम्यातमक्षदेवं नभवति- किंतुनिशितैस्तीक्ष्णेः शरैः क्रीडनं विहारः – अत्र युद्धस्य द्यूतत्वनिषेधोज्ञात एवतथापिनज्ञात इति निषेधः पुनः कीर्त्यमानस्सन् तवद्यूतकर्मण्येव प्रागल्भ्यंनतु युद्धरंग इति परिहासगर्भत्वेन चारुता हेतुर्भवतीति भवति प्रतिषेधालंकारः – एतच्चकितव पदेन स्पष्टं कृतम् ॥',
                eng: '<h3>Word meanings</h3><table><tr><td>कितव ! - </td><td>Gambler !</td></tr><tr><td>एतत् द्यूतम् न - </td><td>This is not the playing at dice</td></tr><tr><td> निशितैः शरैः - </td><td>By sharpened arrows</td></tr><tr><td> क्रीडनम् - </td><td>Playing</td></tr></table><p>O Gambler Sakuni ! This is not the playing at dice but this is the playing by sharpened arrows (the famous battle of Kurukshetra).</p><p>This is addressed by a true warrior to Sakuni, the uncle of Duryodhana, who at the celebrated gambling match threw the dice, won the game and obliged the good Pandavas to go into exile and thus became the cause of that dreadful war. The statement that this is not the place of gambling but of war-an expression of a true fact-conveys the intended meaning of the speaker that Sakuni could do well at the gambling and not at this battle ﬁeld.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'विधिः',
      title_eng: 'विधिः -Fitness',
      id: 97,
      slokas: [
        {
          sloka: 'सिद्धस्यैव विधानं यत्तदाहुर्विध्यलंकृतिम् ।',
          sloka_explanation: {
            sans: 'सिद्धस्यैवज्ञातस्यैव विधानमितियत्तां विध्यलंकृतिमाहुः कधयंति यत्र विज्ञातस्यैव वस्तुनो विधिरनुपयुक्त स्सन्नर्धांतरगर्भत्वेन चमुत्कार हेतुर्भवति तत्र विध्यलंकृतिरिति निष्कर्षः',
            eng: '<h3>Word meanings</h3><table><tr><td>यत् - </td><td>which</td></tr><tr><td>सिड्वस्य एव - </td><td>Of that thing previously effected</td></tr><tr><td>विधानम् - </td><td>Declaration</td></tr><tr><td>तत् - </td><td>That</td></tr><tr><td>विधि+अलंकृतिम् - </td><td>The figure Fitness</td></tr><tr><td>आहुः - </td><td>The learned call</td></tr></table><p>A declaration of a thing previously effected, the learned call as the figure Fitness.</p> '
          },
          examples: [
            {
              text: 'पञ्चमोदञ्चने काले कोकिलः कोकिलोऽभवत् ॥',
              explanation: {
                sans: 'पंचमोदंचनेपंचमस्वरोत्पादके कालेवसंते- कोकिलः कोकिलोभवेदि दानीमेवकोकिल इति व्यपदेशार्होभवति- नत्वितरकाले तथा पंचमस्वरोत्पत्त्यभावादितिभावः – अत्र कोकिलत्वे सिद्धेतस्यैव पुनः कोकिलेविधानं निरर्थकं सद्वसंतसमये पंचमस्वरशालितया सर्वजन हृद्योभवतीत्यर्थांतरं गर्भीकरोतीतिभवति विधिः',
                eng: '<h3>Word meanings</h3><table><tr><td>पञ्चम+उदञ्जने काले - </td><td>In the spring season</td></tr><tr><td>कोकिलः - </td><td>Kokila bird or the Indian cuckoo</td></tr><tr><td>कोकिलः - </td><td>Kokila, i.e., charming</td></tr><tr><td>भवेत् - </td><td>Shall become</td></tr></table><p>Only in the spring season, the kokila bird shall become a kokila, i.e., charming.</p><p>Here, the re-declaration of kokila bird, a thing already effected, is to show its extreme charmingness in the spring season-a season for singing in the panchama tone.</p>'
              }
            }
          ]
        }
      ]
    },
    {
      title_sans: 'हेतुः',
      title_eng: 'हेतुः - The Cause',
      id: 98,
      slokas: [
        {
          sloka: 'हेतोर्हेतुमता सार्धं वर्णनं हेतुरुच्यते ।',
          sloka_explanation: {
            sans: 'हेतोः कारणस्य हेतुमताकार्येण वर्णनं संबंधवर्णनं यदितदा हेत्वलंकृतिरित्युच्यते',
            eng: '<h3>Word meanings</h3><table><tr><td>हेतोः - </td><td>Of a cause हेतुमता सार्धम् - </td><td>Along with its effect</td></tr><tr><td>वर्णनम् - </td><td>Description</td></tr><tr><td>हेतुः - </td><td>The cause</td></tr><tr><td>उच्यते - </td><td>Is termed</td></tr></table><p>The description of a cause along with its intended effect is termed the Cause.</p>'
          },
          examples: [
            {
              text: 'असावुदेति शीतांशुर्मानच्छेदाय सुभ्रुवाम् ॥',
              explanation: {
                sans: 'असौशीतांशुश्चंद्रः सुभ्रुवां स्त्रीणां मानभेदायकोपशमनाय- उदेति- अत्र विधूदयरूपहेतो श्मानभेदनरूपकातिशीतां शुर्मानभेदाय सुभ्रुवाम् ',
                eng: '<h3>Word meanings</h3><table><tr><td>असौ शीतांशुः - </td><td>That moon</td></tr><tr><td>सुभ्रुवाम् - </td><td>Of women of beautiful eye-brows</td></tr><tr><td>मानच्छेदाय -</td><td>For quelling the pride</td></tr><tr><td>उदेति - </td><td>Rises</td></tr></table><p>That moon rises for quelling the pride of women of beautiful eye-brows.</p>'
              }
            }
          ]
        }
      ],
      types: 1,
      type: [
        {
          sloka: '<h3>Second sort of  हेतुः</h3>हेतुहेतुमतोरैक्यं हेतुं केचित्प्रचक्षते ।',
          sloka_explanation: {
            sans: 'यस्य च संबंधवर्णनाद्भवति हेतुः । हेतुमतोः कारणकार्ययोरैक्यमभेदं केचित्कवयः हेतुं प्रचक्षते कथयंति- यत्रकार्यावश्यंभावतश्शैघ्य्रादि सूचनाय हेतुकार्ययोरभेदो वर्ण्यते सापि हेत्वलंकृतिरिति केचिदाहुरित्यर्थः ।',
            eng: '<h3>Word meanings</h3><table><tr><td>हेतुहेतुमतोः - </td><td>Of cause and effect</td></tr><tr><td>ऐक्यम् - </td><td>Identity</td></tr><tr><td>प्रचक्षते - </td><td>Call</td></tr><tr><td>केचित् - </td><td>Certain rhetoricians</td></tr><tr><td>हेतुम् - </td><td>As the figure Reason</td></tr></table><p>The identity of a cause with its effect is reckoned by some as the figure the Cause.</p>'
          },
          examples: [
            {
              text: 'लक्ष्मीविलासा विदुषां कटाक्षा वेङ्कटप्रभोः ॥',
              explanation_sans: 'हे वेंकट प्रभोवेंकटस्वामिन् – तेतव कटाक्षाः विदुषां पंडितानां सदात्वत्पदकमल ध्यानवतामित्यर्थः – लक्ष्मीविलासास्संपत्समृद्धयोभवंतीत्यर्थः – अत्र भवत्कटाक्षमात्रेणैव ज्ञानिनां समृद्धयो भवंतीतिवक्तव्ये कार्यशैघ्र्यादि सूचनायकटाक्षा एवलक्ष्मीविलासा इत्यभेद वर्णनाद्भवति हेत्वंलंकारः ॥',
              explanation_eng: '<h3>Word meanings</h3><table><tr><td>वेङ्कटप्रभोः - </td><td>Of the Lord of the mount Venkata</td></tr><tr><td>कटाक्षाः - </td><td>Glances</td></tr><tr><td>विदुषाम् - </td><td>Of learned poets</td></tr><tr><td>लक्ष्मीविलासाः - </td><td>Graces of the Goddess of Fortune</td></tr></table><p>The glances of the God Vishnu (lit. the Lord of the Mount Venkata) are the graces of the Goddess of Furtune to the learned.</p><p>Here, the glance, the cause, is mentioned as identical with its effect, the graces of the Goddess of Fortune. This representation rests on the complete identiﬁcation and indicates the speedy simultaneous effect.</p>इत्थं शतमलंकारा लक्षयित्वा निदर्शिताः ।<br>प्राचामाधुनिकानां च मतान्यालोच्य सर्वशः ॥<p>These one hundred figures of speech have been thus defined and exemplified (by the author) after having studied all the dogmas of the rhetoricians, ancient as well as modern.</p><p>Or the King Venkata, the patron of our author Appaya Dikshita.</p>'
            }
          ]
        }
      ]
    },
    {
      title_eng: ' ',
      id: 100,
      common: '<a href="/exercises">Go to exercises</a>'
    }
  ],
  titles: [
    {
      title: 'Introduction',
      sl_num: '1',
      to: '/lessons/1'
    },
    {
      title: 'उपमालङ्कारः',
      sl_num: '2',
      to: '/lessons/2'
    },
    {
      title: 'अनन्वयालङ्कारः',
      sl_num: '3',
      to: '/lessons/3'
    },
    {
      title: 'उपमेयोपमालङ्कारः',
      sl_num: '4',
      to: '/lessons/4'
    },
    {
      title: 'प्रतीपालङ्कारः',
      sl_num: '5',
      to: '/lessons/5'
    },
    {
      title: 'रुपकालङ्कारः',
      sl_num: '6',
      to: '/lessons/6'
    },
    {
      title: 'परिणामालङ्कारः',
      sl_num: '7',
      to: '/lessons/7'
    },
    {
      title: 'उल्लेखालङ्कारः',
      sl_num: '8',
      to: '/lessons/8'
    },
    {
      title: 'स्मृति-भ्रान्ति-संदेहालङ्काराः',
      sl_num: '9',
      to: '/lessons/9'
    },
    {
      title: 'अपह्नुत्यलङ्कारः',
      sl_num: '10',
      to: '/lessons/10'
    },
    {
      title: 'उत्प्रेक्षालङ्कारः',
      sl_num: '11',
      to: '/lessons/11'
    },
    {
      title: 'अतिशयोक्त्यलङ्कारः',
      sl_num: '12',
      to: '/lessons/12'
    },
    {
      title: 'तुल्ययोगितालङ्कारः',
      sl_num: '13',
      to: '/lessons/13'
    },
    {
      title: 'दीपकालङ्कारः',
      sl_num: '14',
      to: '/lessons/14'
    },
    {
      title: 'आवृत्तिदीपकालङ्कारः',
      sl_num: '15',
      to: '/lessons/15'
    },
    {
      title: 'प्रतिवस्तुपमालङ्कारः',
      sl_num: '16',
      to: '/lessons/16'
    },
    {
      title: 'दृष्टान्तालङ्कारः',
      sl_num: '17',
      to: '/lessons/17'
    },
    {
      title: 'निदर्शनालङ्कारः',
      sl_num: '18',
      to: '/lessons/18'
    },
    {
      title: 'व्यतिरेका',
      sl_num: '19',
      to: '/lessons/19'
    },
    {
      title: 'सहोक्तिः',
      sl_num: '20',
      to: '/lessons/20'
    },
    {
      title: 'विनोक्तिः',
      sl_num: '21',
      to: '/lessons/21'
    },
    {
      title: 'समासोक्तिः',
      sl_num: '22',
      to: '/lessons/22'
    },
    {
      title: 'परिकरः',
      sl_num: '23',
      to: '/lessons/23'
    },
    {
      title: 'परिकरांकुरः',
      sl_num: '24',
      to: '/lessons/24'
    },
    {
      title: 'श्लेषः',
      sl_num: '25',
      to: '/lessons/25'
    },
    {
      title: 'अप्रस्तुतप्रशंसा',
      sl_num: '26',
      to: '/lessons/26'
    },
    {
      title: 'प्रस्तुतांकुरः',
      sl_num: '27',
      to: '/lessons/27'
    },
    {
      title: 'पर्य्यायोक्तम्',
      sl_num: '28',
      to: '/lessons/28'
    },
    {
      title: 'व्याजस्तुतिः',
      sl_num: '29',
      to: '/lessons/29'
    },
    {
      title: 'व्याजनिन्दा',
      sl_num: '30',
      to: '/lessons/30'
    },
    {
      title: 'आक्षेपः',
      sl_num: '31',
      to: '/lessons/31'
    },
    {
      title: 'विरोधाभासः',
      sl_num: '32',
      to: '/lessons/32'
    },
    {
      title: 'विभावना',
      sl_num: '33',
      to: '/lessons/33'
    },
    {
      title: 'विशेषोक्तिः',
      sl_num: '34',
      to: '/lessons/34'
    },
    {
      title: 'असंभवः',
      sl_num: '35',
      to: '/lessons/35'
    },
    {
      title: 'असंगतिः',
      sl_num: '36',
      to: '/lessons/36'
    },
    {
      title: 'विषमम्',
      sl_num: '37',
      to: '/lessons/37'
    },
    {
      title: 'समम्',
      sl_num: '38',
      to: '/lessons/38'
    },
    {
      title: 'विचित्रम्',
      sl_num: '39',
      to: '/lessons/39'
    },
    {
      title: 'अधिकम्',
      sl_num: '40',
      to: '/lessons/40'
    },
    {
      title: 'अल्पम्',
      sl_num: '41',
      to: '/lessons/41'
    },
    {
      title: 'अन्योन्यम्',
      sl_num: '42',
      to: '/lessons/42'
    },
    {
      title: 'विशेषः',
      sl_num: '43',
      to: '/lessons/43'
    },
    {
      title: 'व्याघातः',
      sl_num: '44',
      to: '/lessons/44'
    },
    {
      title: 'कारणमाला',
      sl_num: '45',
      to: '/lessons/45'
    },
    {
      title: 'एकावली',
      sl_num: '46',
      to: '/lessons/46'
    },
    {
      title: 'मालादीपकम्',
      sl_num: '47',
      to: '/lessons/47'
    },
    {
      title: 'सारः',
      sl_num: '48',
      to: '/lessons/48'
    },
    {
      title: 'यथासंख्यम्',
      sl_num: '49',
      to: '/lessons/49'
    },
    {
      title: 'पर्यायः',
      sl_num: '50',
      to: '/lessons/50'
    },
    {
      title: 'परिवृत्तिः',
      sl_num: '51',
      to: '/lessons/51'
    },
    {
      title: 'परिसङ्ख्या',
      sl_num: '52',
      to: '/lessons/52'
    },
    {
      title: 'विकल्पः',
      sl_num: '53',
      to: '/lessons/53'
    },
    {
      title: 'समुच्चयः',
      sl_num: '54',
      to: '/lessons/54'
    },
    {
      title: 'कारकदीपकम्',
      sl_num: '55',
      to: '/lessons/55'
    },
    {
      title: 'समाधिः',
      sl_num: '56',
      to: '/lessons/56'
    },
    {
      title: 'प्रत्यनीकम्',
      sl_num: '57',
      to: '/lessons/57'
    },
    {
      title: 'काव्यार्थपत्तिः',
      sl_num: '58',
      to: '/lessons/58'
    },
    {
      title: 'काव्यलिंगम्',
      sl_num: '59',
      to: '/lessons/59'
    },
    {
      title: 'अर्थान्तरन्यासः',
      sl_num: '60',
      to: '/lessons/60'
    },
    {
      title: 'विकस्वरः',
      sl_num: '61',
      to: '/lessons/61'
    },
    {
      title: 'प्रौढोक्तिः',
      sl_num: '62',
      to: '/lessons/62'
    },
    {
      title: 'संभावना',
      sl_num: '63',
      to: '/lessons/63'
    },
    {
      title: 'मिथ्याध्यवसितिः',
      sl_num: '64',
      to: '/lessons/64'
    },
    {
      title: 'ललितम्',
      sl_num: '65',
      to: '/lessons/65'
    },
    {
      title: 'प्रहर्षणम्',
      sl_num: '66',
      to: '/lessons/66'
    },
    {
      title: 'विषादनम्',
      sl_num: '67',
      to: '/lessons/67'
    },
    {
      title: 'उल्लासः',
      sl_num: '68',
      to: '/lessons/68'
    },
    {
      title: 'अवज्ञालंकृतिः',
      sl_num: '69',
      to: '/lessons/69'
    },
    {
      title: 'अनुक्षा',
      sl_num: '70',
      to: '/lessons/70'
    },
    {
      title: 'लेशः',
      sl_num: '71',
      to: '/lessons/71'
    },
    {
      title: 'मुद्रा',
      sl_num: '72',
      to: '/lessons/72'
    },
    {
      title: 'रत्नावली',
      sl_num: '73',
      to: '/lessons/73'
    },
    {
      title: 'तद्गुणाः',
      sl_num: '74',
      to: '/lessons/74'
    },
    {
      title: 'पूर्वरूपम्',
      sl_num: '75',
      to: '/lessons/75'
    },
    {
      title: 'अतद्गुणाः',
      sl_num: '76',
      to: '/lessons/76'
    },
    {
      title: 'अनुगुणाः',
      sl_num: '77',
      to: '/lessons/77'
    },
    {
      title: 'मिलितम्',
      sl_num: '78',
      to: '/lessons/78'
    },
    {
      title: 'सामान्यम्',
      sl_num: '79',
      to: '/lessons/79'
    },
    {
      title: 'उन्मीलितम् & विशेषकः',
      sl_num: '80',
      to: '/lessons/80'
    },
    {
      title: 'उत्तरम्',
      sl_num: '81',
      to: '/lessons/81'
    },
    {
      title: 'सूक्ष्मम्',
      sl_num: '82',
      to: '/lessons/82'
    },
    {
      title: 'पिहितम्',
      sl_num: '83',
      to: '/lessons/83'
    },
    {
      title: 'व्याजोक्तिः',
      sl_num: '84',
      to: '/lessons/84'
    },
    {
      title: 'गूढोक्तिः',
      sl_num: '85',
      to: '/lessons/85'
    },
    {
      title: 'विवृतोक्तिः',
      sl_num: '86',
      to: '/lessons/86'
    },
    {
      title: 'युक्तिः',
      sl_num: '87',
      to: '/lessons/87'
    },
    {
      title: 'लोकोक्तिः',
      sl_num: '88',
      to: '/lessons/89'
    },
    {
      title: 'छेकोत्किः',
      sl_num: '90',
      to: '/lessons/90'
    },
    {
      title: 'वक्रोक्तिः',
      sl_num: '91',
      to: '/lessons/91'
    },
    {
      title: 'स्वभावोक्तिः',
      sl_num: '92',
      to: '/lessons/92'
    },
    {
      title: 'भाविकम्',
      sl_num: '93',
      to: '/lessons/93'
    },
    {
      title: 'उदात्तम्',
      sl_num: '94',
      to: '/lessons/94'
    },
    {
      title: 'अत्युक्तिः',
      sl_num: '95',
      to: '/lessons/95'
    },
    {
      title: 'निरुक्तिः',
      sl_num: '96',
      to: '/lessons/96'
    },
    {
      title: 'प्रतिषेधः',
      sl_num: '97',
      to: '/lessons/98'
    },
    {
      title: 'विधिः',
      sl_num: '98',
      to: '/lessons/98'
    },
    {
      title: 'हेतुः',
      sl_num: '99',
      to: '/lessons/99'
    }
  ]
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
