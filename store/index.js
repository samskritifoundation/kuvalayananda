export const state = () => ({
  sidebar: false,
  lessons: [
    {
      title_sans: 'श्रीगणेशाय नमः',
      title_eng: 'Introductory verse - Mangala śloka ',
      id: 1,
      definition_sans: 'अमरीकबरीभारभ्रमरीकृतम्‌।<br>दूरीकरोतु दुरितं गौरीचरणपङ्कजम्‌॥१॥<br>परस्परतपःसम्पत्फलायितपरस्परौ।<br>प्रपञ्चमातापितरौ प्राञ्चौ जायापती स्तुमः॥२॥<br>उद्धाटुअ योगकलया हृदयाब्जकोशं धन्यैशइरादपि यथारुचि गृहमाणः।<br>यः प्रस्फुरित्यविरतं परिपूर्णरुपः श्रेयः स मे दिशतु शाश्वतिकं मुकुन्दः॥३॥<br>अलङ्कारेषु बालानामवगाहनसिद्धये।<br>ललितः क्रियते तेषां लक्ष्यलक्षणसंग्रहः॥४॥<br>येषां चन्द्रालिके दृश्यन्ते लक्ष्यलक्षणश्लोकाः।<br>प्रायस्त एव तेषामितरेषां त्वभिनवा विरच्यन्ते॥५॥',
      definition_eng: ''
    },
    {
      title_sans: 'उपमालङ्कारः',
      title_eng: 'Upamālaṅkāra - Simile',
      id: 2,
      slokas: [
        {
          sloka: 'उपमा यत्र सादृश्यलक्ष्मीरुल्लसति द्वयोः। <br>हंसीव कृष्ण! ते कीर्तिः स्वर्गङ्गामवगाहते॥',
          sloka_explanation: {
            sans: 'यत्र उपमान-उपमेययोः सहृदय-हृदयाह्लादकत्वेन चारुसादृश्यम् उद्भूततया उल्लसति व्यङ्ग्यमर्यादा विना स्पष्टं प्रकाशत तत्र उपमालङ्कारः।',
            eng: 'When the beauty of equality between the thing equated and the thing equated to pleases the hearts of connoisseurs, it is known as "Upamā"'
          },
          examples: [
            {
              text: 'हंसीव इत्युदाहरणम्‌। ',
              explanation: {
                sans: '<p>इयं च पूर्णोपमा इत्युच्यते। <br>हंसी कीर्तिः स्वर्गङ्गावगाहनमिव शब्दश्चेत् एतेषाम् उपमान-उपमेय-साधारण-धर्मोपमा-वाचकानां चतुर्णामपि उपादानात्‌। </p>',
                eng: '<p>O Krishna, thy fame like a she-swan enters the celestial Ganges (or pervades the celestial regions and this earth).</p><p>This is an example of ‘simile complete’; for, it contains all the four essentials of comparison,which are –</p><table><th><td></td><td>In the present example </td></th><tr><td>1. उपमेयम्, वर्ण्यम् or विषयः</td><td>The object compared, i.e, the subject of comparison, such as face etc.</td><td>कीर्तिः - Fame</td></tr><tr><td>2. उपमानम्, अवर्ण्यम् or विषयी</td><td>The object compared to, i.e, the standard of comparison, such as moon, lotus etc.</td><td>हंसी - swan </td></tr><tr><td>3. साधारणधर्मः or सामान्यधर्मः or simply धर्मः </td><td>The common attribute, i.e, the characteristic resemblance between the two objects (the object compared and the object compared to); or the quality of the said two objects that occasions their similitude such as charmingness or the like.</td><td>अवगाहते i.e, अवगाहनक्रिया - ‘The act of entering or pervading’ – the common attribute</td></tr><tr><td>4. उपमावाचकः or simply वाचकः </td><td>The word implying comparison, such as इव ‘as’ or the like.</td><td>इव - like</td></tr></table><br><p>कीर्तिः ‘fame’, यशस् ‘reputation’ and हासः ‘laughter’ are always described as white according to the convention of the poets. Hence, the fame of Krishna is compared to a swan which is of white colour.</p>'
              }
            }
          ]
        },
        {
          sloka: 'वर्ण्योपमानधर्माणामुपमावाचकस्य च।<br>          एकद्वित्र्यनुपादानैर्भिन्ना लुप्तोपमाष्टधा॥',
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
          sloka: 'पर्यायेण द्वयोस्तच्चेदुपमेयोपमा मता ।<br>धर्मोऽर्थ इव पूर्णश्रीरर्थो धर्म इव त्वयि ॥',
          sloka_explanation: {
            sans: 'द्वयोः पर्यायेणोपमानोपमेयत्वकल्पनं तृतीयसदृशव्यवच्छेदार्थम्‌।',
            eng: '<h3>Word meanings</h3><table><tr><td>द्वयोः</td><td>Of the two, i.e., the object compared to and that compared</td></tr><tr><td>पर्यायेण</td><td>In turn, i.e., alternation</td></tr><tr><td>तत्</td><td>That i.e., the position of upamana and upameya (taken from the preceding sloka)</td></tr><tr><td>चेत्</td><td>If</td></tr><tr><td> उपमेयोपमा</td><td>Reciprocal comparison</td></tr><tr><td>मता </td><td>Is termed</td></tr><tr><td>त्वयि </td><td>In thee</td></tr><tr><td>धर्मः </td><td>(thy) virtue</td></tr><tr><td>अर्थः इव</td><td>Like (thy) riches</td></tr><tr><td>पूर्ण श्रीः</td><td>Full</td></tr><tr><td>अर्थः</td><td>(thy) riches</td></tr><tr><td>धर्मः इव</td><td>Like (thy) virtue</td></tr></table><h3>Definition</h3><p>That, i.e., the position of Upamana and Upameya, when alternated is declared the Reciprocal Comparison.</p>'
          },
          examples: [
            {
              text: 'धर्मोऽर्थ इव पूर्णश्रीरर्थो धर्म इव त्वयि ॥',
              explanation: {
                sans: 'धर्मार्थयोर्हि कस्यचित्केनचित्सादृश्ये वर्णिते तस्याप्यन्येन सादृश्यमर्थसिद्धमपि मुखतो वर्ण्यमानं तृतीयसदृशव्यवच्छेदं फलति॥',
                eng: '<p>In you, O King! thy virtue is as full as (thy) riches ; and thy riches as full as thy virtue.</p><p>Here, the object of comparing the king’s virtue with his riches and again his riches with his virtue excluding the other similar objects is to show that there is nothing else equal to the virtue &c., of the king.</p><p>This figure is possible only in two sentences as the interchange of comparisons is impossible in one sentence. The Upamana in the first sentence becomes Upameya in the second and the Upameya in the first becomes Upamana in the second in the total absence of a third thing to be compared to. But the figure अनन्वयः No. II. Is possible in one sentence, the object compared to and that compared being the same in the total absence of a second thing to he compared to.</p>'
              }
            },
            {
              text: 'खमिव जलं जलमिव खं हंस इव चन्द्रश्चन्द्र इव हंस”।<br>कुमुदाकारास्तारास्ताराकाराणि कुमुदानि॥',
              explanation: {
                sans: 'पूर्वत्र पूर्णश्रीइति धर्म उपात्तः।<br>इह निर्मलत्वादिधर्मो नोपात्त इति भेदः।<br>उदाहरणद्वयेऽपि प्रकृतयोरेवोपमानोपमेयत्वकल्पनम्‌।<br>राज्ञिधर्मार्थसमृद्धेः शरदि गगनसलिलादिर्नैर्मल्यस्य च वर्णनीयत्वात्‌ प्रकृताप्रकृतयोरप्येषा संभवति॥',
                eng: ' '
              }
            },
            {
              text: 'गिरिरिव गजराजोऽयं गजराज इवोच्चकैर्विभाति गिरिः।<br>निर्झर इव मदधारा मदधारेवास्य निर्झरः स्रवति॥'
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
          sloka: 'प्रतीपमुपमानस्योपमेयत्वप्रकल्पनम्‌।<br>त्वल्लोचनसमं पद्म त्वद्वक्त्रसदृशो विधुः॥',
          sloka_explanation: {
            sans: 'प्रसिद्धोपमानोपमेयभावः प्रातिलोम्यात्प्रतीपम्‌।',
            eng: '<h3>Word Meanings</h3><table><tr><td>उपमानस्य - </td><td>Of the object compared to</td></tr><tr><td>उपमेयत्वप्रकल्पनम् - </td><td>Assumption as the object compared</td></tr><tr><td>प्रतीपम् - </td><td>The figure converse </td></tr><tr><td>पद्मम् - </td><td>Lotus</td></tr><tr><td>विधुः - </td><td>Moon</td></tr><tr><td>त्वल्लोचनसमम् - </td><td>Equal to thy eye</td></tr><tr><td>त्वद्वक्त्रसदृशः - </td><td>Equal to thy face</td></tr></table><h3>Definition:</h3><p>The assumption of the object compared to as the object compared‘ i.e., when Upamana (moon &c.) is compared to Upameya (Face &c.), or in other words, when the usual form of comparison is inverted, it is the Converse.</p>'
          },
          examples: [
            {
              text: 'त्वल्लोचनसमं पद्म त्वद्वक्त्रसदृशो विधुः',
              explanation: {
                sans: '',
                eng: '(Lady ! ) The lotus is like thy eyes ; and the moon is like thy face.'
              }
            },
            {
              text: 'यत्त्वन्नेत्रसमानकान्ति सलिले मग्नं तदिन्दीवरं<br>          मेघैरन्तरितः प्रिये! तव मुखच्छायानुकारी शशी।<br>येऽपि त्वद्गमनानुसारिगतयस्ते राजहंसा गता-<br>स्त्वत्सादृश्यविनोदमात्रमपि मे दैवेन न क्षम्यते॥',
              explanation: {
                sans: '',
                eng: ''
              }
            }
          ]
        }
      ],
      types: 4,
      type: [
        {
          sloka: 'अन्योपमेयलाभेन वर्ण्यस्यानादरश्च तत्‌।<br>अलं गर्वेण ते वक्त्र! कान्त्या चन्द्रोऽपि तादृशः॥',
          sloka_explanation: {
            sans: '<p>अत्युत्कृष्टगुणतया वर्ण्यमानस्यान्यत्र स्वसादृश्यमसहमानस्योपमेयं किंचित्प्रदर्श्य तावता तस्य तिरस्कारो द्वितीयं प्रतीपं पूर्वस्मादपि विच्छित्तिविशेषशालि।</p>',
            eng: '<h3>Word meanings</h3><table><tr><td>अन्योपमेयलाभेन - </td><td>By reason of gain of another, i.e., the object compared to as the object compared</td></tr><tr><td>वर्ण्यस्य - </td><td>Of the object on hand (face & c)</td></tr><tr><td>अनादरः - </td><td>Disregard</td></tr><tr><td>च</td><td>Also</td></tr><tr><td>तत् - </td><td>That i.e., the figure converse</td></tr><tr><td>वक्त्र! - </td><td>Face!</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>गर्वेण - </td><td>By the pride</td></tr><tr><td>अलम् - </td><td>Enough</td></tr><tr><td>कान्त्या - </td><td>In splendor</td></tr><tr><td>चन्द्रः - </td><td>The moon</td></tr><tr><td>भवादृशः - </td><td>Like thee</td></tr></table><h3>Definition</h3><p>When the subject on hand (face &c.) is disregarded by reason-of the gain of another object (i.e., moon &c.) which is not the subject under discourse it is also termed Converse.</p>'
          },
          examples: [
            {
              text: 'अलं गर्वेण ते वक्त्र! कान्त्या चन्द्रोऽपि तादृशः॥',
              explanation_sans: '',
              explanation_eng: 'O Face! enough of thy pride ; (there is) the moon equal to thee in splendor.'
            },
            {
              text: 'गर्वमसंवाह्यमिमं लोचनयुगलेन किं वहसि भद्रे! ।<br>सन्तीदृशानि दिशि दिशि सर;सु ननु नीलनलिनानि॥'
            }
          ]
        },
        {
          sloka: 'वर्ण्योपमेयलाभेन तथान्यस्याप्यनादरः ।<br>कः क्रौर्यदर्पस्ते मृत्यो! त्वत्तुल्याः सन्ति हि स्त्रियः॥',
          sloka_explanation: {
            sans: 'अत्युत्कृष्टगुणतया द्वचिदप्युपप्मानभावमसहमानस्यावर्ण्यस्य वर्ण्योपमेयं परिकल्प्य तावता तस्य तिरस्कारः पूर्वप्रतीपवैपरीत्येन तृतीयं प्रतीपम्‌।',
            eng: '<h3>Word meanings</h3><table><tr><td>वर्ण्योपमेयलाभेन</td><td>By reason of the gain of the object compared which is the subject on hand</td></tr><tr><td>अन्यस्य - </td><td>Of the object which is not the subject on hand</td></tr><tr><td>अपि</td><td>Also</td></tr><tr><td>अनादरः - </td><td>Disregard</td></tr><tr><td>तथा - </td><td>So, i.e., the converse</td></tr><tr><td>मृत्यो! - </td><td>Death!</td></tr><tr><td>ते - </td><td>Thy</td></tr><tr><td>क्रौर्यदर्पः - </td><td>Pride on account of cruelty</td></tr><tr><td>कः - </td><td>What</td></tr><tr><td>हि - </td><td>Because</td></tr><tr><td>स्त्रियः - </td><td>Women</td></tr><tr><td>त्वत्तुल्याः - </td><td>Equal to you</td></tr><tr><td>सन्ति - </td><td>There are</td></tr></table><h3>Definition</h3><p>When the object which is not the subject on hand is disregarded by reason of gain of another object which is the subject on hand, it is declared the third kind of Converse.</p>'
          },
          examples: [
            {
              text: 'कः क्रौर्यदर्पस्ते मृत्यो त्वत्तुल्याः सन्ति हि स्त्रियः',
              explanation_sans: '',
              explanation_eng: '<p>O death! wherefore dost thou bear the pride on account of cruelty; because, there are (many) Women equal to thee (in cruelty).</p>'
            },
            {
              text: 'अहमेव गुरुः सुदारुणानामिति हालाहल! तात ! मा स्म दृप्यः।<br>ननु सन्ति भवादृशानि भूयो भुवनेऽस्मिन्वचनानि दुर्जनानाम्‌॥'
            }
          ]
        },
        {
          sloka: 'वर्ण्येनान्यस्योपमाया अनिष्पत्तिवचश्च तत्‌।<br>मुधापवादो मुग्धाक्षि! त्वन्मुखाभं किलाम्बुजम्‌॥',
          sloka_explanation: {
            sans: 'अवर्ण्ये वर्ण्योपमित्यनिष्पत्तिवचनं पूर्वेभ्य उत्कर्षशालि चतुर्थं प्रतीपम्‌।',
            eng: '<h3>Word Meanings</h3><table><tr><td>वर्ण्येन - </td><tdBy the object on hand (i.e., face & c.)</td></tr><tr><td>अन्यस्य - </td><td>Of the object not on hand</td></tr><tr><td>उपमायाः - </td><td>Of the resemblance</td></tr><tr><td>अनिष्पत्तिवचः - </td><td>The assertion of non accomplishment</td></tr><tr><td>च - </td><td>Also</td></tr><tr><td>तत् - </td><td>That i.e., the converse</td></tr><tr><td>सुग्धाक्षि! - </td><td>O beautiful-eyed lady!</td></tr><tr><td>अंबुजम् - </td><td>Lotus</td></tr><tr><td>त्वन्मुखाभम् - </td><td>Equal to thy face</td></tr><tr><td>मिथ्यावादः - </td><td>Untrue assertion</td><td>किल - </td><td>Truly</td></tr></table><h3>Definition</h3><p>The assertion of non-accomplishment of the resemblance of the object not on hand with the object on hand is also termed the Converse.</p>'
          },
          examples: [
            {
              text: 'मिथ्यावादो हि मुग्धाक्षि ! त्वन्मुखाभं किलांबुजम् ॥',
              explanation_sans: 'उदाहरणे मुदापवादत्वोक्त्योपमित्यनिष्पत्तिरुद्धाटिता।',
              explanation_eng: 'O beautiful-eyed lady! The assertion that the lotus has the likeness of thy face is an untrue one. Hence, we see here that the resemblance between the two objects lotus and face being stated as untrue becomes an unaccomplished one and so it is the Converse.'
            },
            {
              text: 'आकर्णय सरोजाक्षी वचनीयमिदं भुवि।<br>शशाङ्कस्त्वव वक्त्रेण पामरैरुपमीयते॥'
            }
          ]
        },
        {
          sloka: 'प्रतीपमुपमानस्य कैमर्थ्यमपि मन्वते।<br>दृष्टम चेद्वदनं तस्याः किं पद्मेन किमिन्दुना॥',
          sloka_explanation: {
            sans: 'उपमेयस्यैवोपमानप्रयोजनधूर्वहत्वेनोपमानकैमर्थ्यमुपमानप्रातिलोम्यात्‌ पञ्चमं प्रतीपम्‌।',
            eng: '<table><tr><td>उपमानस्य - </td><td>Of the object compared to</td></tr><tr><td>कैमर्थ्यम् - </td><td>The sense of “what is the use of”</td></tr><tr><td>अपि</td><td>also</td></tr><tr><td>प्रतीपम् - </td><td>the Converse</td></tr><tr><td>मन्यते - </td><td>Is considered</td></tr><tr><td>तन्व्याः</td><td>Of that slender lady</td></tr><tr><td>वदनम् - </td><td>The face</td></tr><tr><td>दृष्टं चेत् - </td><td>If seen</td></tr><tr><td>पद्मेन किम् - </td><td>What with the lotus</td></tr><tr><td>इन्दुना किम् - </td><td>What with the moon</td></tr></table><p>The assertion ‘ what is the use of the upamana ’ (With reference to the upameya which is the subject on hand) is also considered as one of the Pratipas.</p>'
          },
          examples: [
            {
              text: 'दृष्टं चेद्वदनं तन्व्याः किं पद्मेन किमिन्दुना ॥',
              explanation_sans: '',
              explanation_eng: 'When the face of that slender lady was seen, what is the use of the lotus or of the moon.'
            },
            {
              text: 'तदोजसस्तद्यशसः स्थिताविमौ वृथेति चित्ते कुरुते यदा यदा।<br>तनोति भानोः परिवेषकैतवा- त्तदा विधिः कुण्डलनाम विधोरपि॥'
            },
            {
              text: 'केचिदनन्वयोपमेयोपमाप्रतीपानामुपमाविशेषत्वेन तदन्तर्भावं मन्यते।<br>अन्ये तु पञ्चमं प्रतीपमुपमानाक्षेपरुपत्वादाक्षेपालङ्कारमाहुः॥'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'रुपकालङ्कारः ',
      title_eng: 'rūpakālaṅkāraḥ',
      id: 6,
      definition_sans: '<p>विषय्यभेदताद्रूप्यञ्जनं विषयस्य यत्‌।<br>रुपकं तत्त्रिधाधिक्यन्यूनत्वानुभयोक्तिभिः॥१७॥</p><p>अयं हि धूर्जटिः साक्षाद्येन दग्धाः पुरःक्षणात्‌।<br>अयमास्ते विना शम्भुस्तार्तीयीकं विलोचनम्‌॥१८॥</p><p>शम्भुर्विश्वमवत्यद्य स्वीकृत्य समदृष्टिताम्‌।<br>अस्या मुखेन्दुना लब्धे नेत्रानन्दे किमिन्दुना॥१९॥</p><p>साध्वीयमपरा लक्ष्मीरसुधासागरोदिता।<br>अयम कलङ्किनश्चन्द्रान्मुखचन्द्रोऽतिरिच्यते॥२०॥</p><p>विषय्युपमानभूतं पद्मादि, विषयस्तदुपमेयभूतं वर्णनीयं मुखादि।<br>विषयिणो रुपेण विषयस्य रञ्जनं रुपकम्‌, अन्यरुपेण रुपवत्त्वकरणात्‌।</p><p>तच्च क्वचित्प्रसिद्धविषय्यभेदे पर्यवसितं, क्वचिद्भेदे प्रतीयमान एव तदीयधर्मारोपमात्रे पर्यवसितम्‌।<br>ततश्च रुपकं तावद्विधम्‌ – अभेदरुपकं ताद्रूप्यरुपकं चेति।</p><p>द्विविधमपि प्रत्येकं त्रिविधम्‌।</p><p>प्रसिद्धविषय्याधिक्यवर्णनेन तन्न्यूनत्ववर्णनेनानुभयोक्त्या चैवम रुपकं षड्विधम्‌।</p><p>‘अयं हि’ इत्यादिसार्धश्लोकेन अभेदरुपकाणि</p><p>‘अस्या मुखेन्दुना इत्यादिसार्धश्लोकेन ताद्रूप्यरुपकाणि</p><p>आधिक्यन्युनत्वानिभयोक्त्युद्देशक्रमपातिलोम्येनोदाहृतानि।</p><p>‘येन दग्धा’ इति विशेषणेन वर्णनीये राज्ञि प्रसिद्धशिवाभेदानुरञ्जनाच्छिवस्य पूर्वावास्थातो<p>वर्णनीयराजभावावस्थायां न्यूनत्वाधिक्ययोरवर्णनाच्चानुभयाभेदरुपकमाद्यम्‌।</p><p>तृतीयलोचनप्रहाणोक्त्या पूर्वावस्थातो न्यूनताप्रदर्शनान्न्यूनाभेदरुपकं द्वितीयम्‌।</p><p>न्यूनत्ववर्णनमप्यभ्ददार्ढ्यापादकत्वाच्चमत्कारि।</p><p>विषमदृष्टित्वपरित्यागेन जगद्रक्षकत्वोक्त्या शिवस्य पूर्वावस्थातो वर्णनीयराहभावावस्थायामुत्कर्षविभावनादधिकाभ्दरुपकं तृतीयम्‌। </p><p>एवमुत्तरेषु ताद्रूप्यरुपकोदाहरणेष्वपि क्रमेणानुभयन्यूनाधिकभावा उन्नेयाः।</p><p>रुपकस्य सावयवत्वनिरवयत्वादिभेदप्रपञ्चनं तु चित्रमीमांसायां द्रष्टव्यम्‌॥१७-२०॥</p>',
      definition_eng: '',
      types: 2,
      type: [
        {
          text_sans: '<h3>अभेदरुपकं</h3>',
          ex: '<p>1. चन्द्रज्योत्स्नाविशदपुलिने सैकतेऽस्मिञ्छरय्वा वादद्यूतं चिरतरमभूत्सिद्धयूनोः कयोश्चित्‌।<br>एको वक्ति प्रथमनिहतं कैटभं कंसमन्य- स्तत्त्वं स त्वं कथय भगवन्‌! को हत्स्तत्र पूर्वम्‌॥</p><br>अत्र ‘स त्वम्‌’ इत्यन्बेन यः कंसकैटभयोर्हन्ता पौर्वापर्यप्रश्नव्याजेन तत्तादात्म्यदार्ढ्यकरणात्पूर्वावस्थात उत्कर्षापकर्षयोरविभावनाच्चानुभयाभेदरुपकम्‌।<p>2. वेधा द्वेधा भ्रमम चक्रे कान्तासु कनकेषु च।<br>तासु तेष्वप्यनासक्तः साक्षाद्भर्गो नराकृतिः।।<br><p>अत्र साक्षादिति विशेषणेन विरक्तर्य प्रसिद्धशिवतादात्म्यमुपदर्श्य नराकृतिरिति दिव्यमूर्तिवैकल्यप्रतिपादनान्न्यूनाभेदरुपकम्‌।</p><p>3. त्वय्यागते किमिति वेपत एष सिन्धुस्त्वं सेतुमन्थकृदत; किमसौ बिभेति।<br>द्वीपान्तरेऽपि न हि तेऽस्त्यवशंवदोऽद्य त्वां राजपुङ्गव! निषेवत एव लक्ष्मीः॥<br>अत्र ‘त्वम सेतुमन्थकृत्‌’ इति सेतोर्मन्थनस्य च कर्त्रा पुरुषोत्तमेन सह वर्णनीयस्य तादात्म्यमुक्त्वा तथापि त्वदागमनं सेतुबन्धनाय वा मन्थनाय वेति समुद्रेण न भेतव्यम्‌।<br>द्वीपान्तराणामपि त्वद्वशंवदत्वएन पूर्ववद्द्वीपान्तरे जेतव्याभावात्‌ प्राप्तलक्ष्मीकत्वेन मन्थनप्रसक्त्यभावाच्चेति पूर्वावस्थात उत्कर्षविभावनादधिकाभेदरुपकम्‌।</p>'
        },
        {
          text_sans: '<h3> ताद्रूप्यरुपकं </h3>',
          ex: '<p>1. किं पद्मस्य रुधिं न हन्ति नयनानन्दं विधत्ते न किं वृद्धि वा झषकेतनस्य कुरुते नालोकमात्रेण किम्‌।<br>वक्त्रेन्दौ तव सत्ययं यदपरः शीतांशुरुज्जृम्भते दर्पः स्यादमृतेन चेदिह तदप्यस्त्येव बिम्बाधरे॥</p><p>अत्र ‘अपरः शीतांशुः’ इत्यनेन वक्त्रेन्दोः प्रसिद्धचन्द्राद्भेदमाविष्कृत्य तस्य च प्रसिद्धचन्द्रकार्यकारित्वमात्रप्रतिपादनेनोत्कर्षापकर्षयोरप्रदर्थनाद्दनुभयताद्रूप्यरुपकम्‌।</p><p>2. अचतुर्वदनो ब्रह्मा द्विबाहुरपरो हरिः।<br>अभाललोचनः शम्भुर्भगवान्बादरायणः॥</p><br>अत्रहर्यादौ ‘अपर’ इति विशेषणात्त्रिष्वपि ताद्रूप्यमात्रविवक्षा विभाविता, चतुर्वदनत्वादिवैकल्यं चोक्तमिति न्यूनताद्रूप्यरुपकम्‌।<br>इदं विशेषोक्त्युदाहरणमिति वामनमतम्‌।</p><p>3. किमसुभिर्ग्लपितैर्जड! मन्यसे मयि निमज्जतु भीमसुतामनः।<br>मम किल श्रुतिमाह तदर्थिकां नलमुखेन्दुपरां विबुधः स्मरः॥<br>(नै० ४।५२) अत्र दमयन्तीकृतचन्द्रोपालम्भे प्रसिद्धचन्द्रो न निर्याणकालिकमनः प्रव्शश्रुतितात्पर्यविषयः, किंतु नलमुखचन्द्र एवेति ततोऽस्याधिक्यप्रतिपादनादधिकताद्रुप्यरुपकम्‌।</p>'
        }
      ]
    },
    {
      title_sans: 'परिणामालङ्कारः',
      title_eng: 'Pariṇāmālaṅkāra',
      id: 7,
      definition_sans: 'परिणामः क्रियार्थश्चेद्विषयी विषयात्मना।<br>प्रसन्नेन दृगब्जेन वीक्षते मदिरेक्षणा॥२१॥<br><br>यत्रारोप्यमाणो विषयी किंचित्कार्योपयोगित्वेन निबध्यमानः स्वतस्तस्य तदुपयोगित्वासंभवात्प्रकृतात्मना परिणतिमपेक्षते तत्र परिणामालङ्कारः।<br>अत्रोदाहरणम्‌ – प्रसन्नेति।<br>अत्र हि अब्जस्य वीक्षणोपयोगित्वं निबध्यते, न तु दृशः।मयूरव्यंसकादिसमासेनोत्तरपदार्थप्राधान्यात्‌।<br>न चोपमितसमासाश्रयेण दृगब्जमिवेति पूर्वपदार्थप्राधान्यमस्तीति वाच्यम्‌ ।<br>प्रसन्नेति सामान्यधर्मप्रयोगात्‌।<br>‘उपमितं व्याघ्रादिभिः सामान्याप्रयोगे’ (पा० २।१।५६) इति तदप्रयोग एवोपमितसमासानुशासनात्‌।<br>अब्जस्य वीक्षणोपयोगित्वं न स्वात्मना संभवति।<br>अतस्तस्य प्रकृतदृगात्मना परिणत्यपेक्षणात्‌ परिनामालङ्कारः।',
      definition_eng: '',
      common: 'यथा वा – तीर्त्वा भूतेशमौलिस्रजममरधुनीमात्मनासौ तृतीय - स्तम्बहि सौमित्रिमैत्रीमयमुपकृतवानातरं नाविकाय। <br>व्यामग्राह्यस्तनीबिः शबरयुवतिभिः कौतुकोदञ्चदक्षं कृच्छ्रादन्वीयमानः क्षणमचलमथो चित्रकूटं प्रतस्थे॥<br>अत्रारोप्यमाण आतरः सौमित्रिमैत्रीरुपतापत्त्या गुहोपकारलक्षणकार्योपयोगी न<br>स्वात्मना, गुहस्य रघुनाथप्रसादैकार्थित्वेन वेतनार्थित्वाभावात्‌॥२१॥'
    },
    {
      title_sans: 'उल्लेखालङ्कारः',
      title_eng: 'Ullekhālaṅkāra',
      id: 8,
      definition_sans: 'बहुभिर्बहुधोल्लेखादेकस्योल्लेख इष्यते।<br>स्त्रीभिः कामोऽर्थिभिः स्वर्द्रुः कालः शत्रुभिरैक्षि सः॥२२॥<br>यत्र नानाविधधर्मयोग्येकं वस्तु तत्तद्धर्मयोगरुपनिमित्तभेदेनानेकेन ग्रहीत्रानेकधोल्लिख्यते तत्रोल्लेखः।<br>अनेकधोल्लेखने रुच्यर्थित्वभयादिकं यथार्हं प्रयोजकम्‌।<br>रुचिरबिह्रतिः अर्थित्वं लिप्सा।<br>‘स्त्रीभिः’ इत्याद्युदाहरणम्‌ अतैक एव राजा सौन्दर्यवितरणपराक्रमशालीति कृत्वा<br>स्त्रीभिरर्थिभिः प्रत्यर्थिभिश्च रुच्यर्थित्वभयैः कामकल्पतरुकालरुपो दृष्टः।',
      definition_eng: ' ',
      common: 'यथा वा – गजत्रातेति वृद्धाभिः श्रीकान्त इति यौवतैः।<br>यथास्थितश्च बालाभिर्दृष्टः शौरिः सकौतुकम्‌॥<br>अत्र यस्तथा भीतं भक्तं गजं त्वरया त्रायते स्म सोऽयमादिपुरुषोत्तम इति ‘वृद्धाभिः संसारभीत्या तदभयार्थिनीभिः कृष्णोऽयं मथुरापुरं प्रविशन्‌ दृष्टः।<br>यस्तथा चञ्चलत्वेन प्रसिद्धायाः श्रियोऽपि कामोपचारवैदग्ध्येन नित्यं वल्लभः सोऽयं दिव्ययुवेति युवतिसमूहैः सोत्कण्ठैर्दृष्टः।<br>बालाभिस्तु तद्बाह्यगतरुपवेषालङ्कारदर्शनमात्रलालसाभिर्यथास्थितवेषादियुक्तो दृष्ट इति बहुधोल्लेखः।<br>पूर्वः कामत्वाद्यारोपरुपकसंकीर्णः।<br>अयं तु शुद्ध इति भेदः॥२२॥<br> एकेन बहुधोल्लेखेऽप्यसौ विषयभेदतः।<br> गुरुर्वचस्यर्जुनो कीर्तौ भीष्मः शरासने॥२३॥<br> ग्रहीतृभेदाभावेऽपि विषयभेदाद्बहुधोल्लेखनादसावुल्लेखः।<br> उदाहरणं श्लेषसंकीर्णम्‌।वचोविषये महान्पटुरित्यादिवद्बृहस्पतिरित्याद्यर्थान्तरस्यापि क्रोडीकरणात्‌। <br> शुद्धो यथा- अकृशं कुचयोः कृशं विलग्ने विपुलं चक्षुषि विस्तृतं नितम्बे।<br> अधरेऽरुणमाविरस्तु चित्ते करुणाशालि कपालिभागधेयम्‌॥२३॥'
    },
    {
      title_sans: 'स्मृति-भ्रान्ति- संदेहालङ्काराः',
      title_eng: 'Smṛti-bhrānti- saṃdehālaṅkārā',
      id: 9,
      definition_sans: 'स्यात्स्मृतिभ्रान्तिसंदेहैस्तदङ्कालङ्कृतित्रयम्‌। <br> पङ्कजं पश्यतः कान्तामुखं मे गाहते मनः॥२४॥ <br> अयं प्रमत्तमधुपस्त्वन्मुखं वेत्ति पङ्कजम्‌। <br> पङ्कजं वा सुधांशुर्वेत्यस्माकं तु न निर्णयः॥२५॥ <br> स्मृतिभ्रान्तिसंदेहैः सादृश्यान्निबध्यमानैः स्मृतिभ्रान्तिमान्संदेह इति स्मृत्यादिपदाङ्कितमलङ्कारत्रयं भवति।',
      definition_eng: '',
      common: 'तच्च क्रमेणोदाहृतम्‌। <br> यथा वा <br> (माघ० ८।६४) - दिव्यानामपि कृतविस्मयां पुरस्ताद- म्बह्स्तः स्फुरदरविन्दचारुहस्ताम्‌।<br> उद्वीक्ष्य श्रियमिव काञ्चिदुत्तरन्ती- मस्मार्षीज्जनिधिमन्थनस्य शौरिः॥ <br> पूर्वत्र स्मृतिमदुदाहरणे सदृशस्यैव स्मृतिरत्र सदृशलक्ष्मीस्मृतिपूर्वकं तत्सम्बन्धिनो जलनिधिमन्थनस्यापि स्मृतिरिति भेदः। <br> पलाशामुकुलभ्रान्त्या शुकतुण्डे पतत्यलिः। <br> सोऽपि जम्बूफलभ्रान्त्या तमलिं धर्तुमिच्छति॥ <br>       अत्रान्योन्यविषयभ्रान्तिनिबन्धनः पूर्वोदाहरणाद्विशेषः। <br> जीवनग्रहणे नम्रा गृहीत्वाअ पुनरुन्नताः। <br> किमु ज्येष्ठा घटीयन्त्रस्य दुर्जनाः॥ <br>      पूर्वोदाहृतसंदेहः प्रसिद्धकोटिकः, अयंतु कल्पितकोटिक इति भेदः॥२४-२५॥'
    },
    {
      title_sans: 'अपह्नुत्यलङ्कारः',
      title_eng: 'Apahnutyalaṅkāra',
      id: 10,
      definition_sans: 'शुद्धापह्नुतिरन्यस्यारोपार्थो धर्मनिह्नवः। <br>नायं सुधांशुः किं तर्हि? व्योमगङ्गासरोरुहम्‌॥२६॥ <br>वर्णनीये वस्तुनि तत्सदृशधर्मारोपफलकस्तदीयधर्मनिह्नवः कविमतिविकासोत्प्रेक्षितधर्मान्तरस्यापि निह्नवः शुद्धापह्नुतिः।',
      definition_eng: ' ',
      common: 'यथा चन्द्रे वियन्नदीपुण्डरीकत्वारोपफलकस्तदीयधर्मस्य चन्द्रत्वस्यापह्नवः। <br> यथा वा - अङ्कं केऽपि शशङ्किरे, जलनिधेः पङ्कं परे मेनिरे, सारंगं कतिचिच्च संजगदिरे, भूच्छायमैच्छन्‌ परे। <br> इन्दौ यद्दलितेन्द्रनीलशकलश्यामं दरीदृश्यते तत्सान्द्रं निशि पीतमन्धतमां कुक्षिस्थमाचक्ष्महे॥ <br>       अत्रौत्प्रेक्षिकधर्माणामप्यपह्नवःपरपक्षत्वोपन्यासादर्थसिद्धः॥२६॥ <br> स एव युक्तिपूर्वश्चेदुच्यते हेत्वपह्नुतिः। <br> नेन्दुस्तीव्रो न निश्यर्कः सिन्धोरौर्वोऽयमुत्थितः॥२७॥ <br> अत्र चन्द्र एव तीव्रत्वनैशत्वयुक्तिभ्यां चन्द्रत्वसूर्यत्वापह्नवो वडवानलत्वारोपार्थः। <br> यथा वा - मन्थानभूमिधरमूलशिलासहस्र- संघट्टनव्रणकिणः स्फुरतीन्दुमध्ये। <br> छायामृगः शशक इत्यतिपामरोक्ति- स्तेषां कथंचिदपि तत्र हि न प्रसक्तिः॥ <br> अत्र चन्द्रमध्ये मन्थनकालिकमन्दरशिलासंघट्टनव्रणकिणस्यैव छायादीनां सम्भवो नास्तीति छायात्वाद्यपह्नवः पामरवचनत्वोपन्यासेनाविष्कृतः॥२७॥ <br> अन्यत्र त्स्यारोपार्थः पर्यस्तापह्नुतिस्तु सः‌॥२८॥ <br> यत्र क्वचिद्वस्तुनि तदीयधर्मनिह्नवः अन्यत्र वर्णनीये वस्तुनि तस्य धर्मस्यारोपार्थः स पर्यस्तापह्नुतिः। <br> यथा चन्द्रे चन्द्रत्वनिह्नवो वणनीये मुखे तदारोपार्थः। <br> यथा वा- हालाहलो नैव विषं, विषं रमा, जनाः परं व्यत्ययमत्र मन्वते। <br> निपीय जागर्ति सुखेन तं शिवः, पृशन्निमां मुह्यति निद्रया हरिः॥ <br> पूर्वोदाहरणे हेतूक्तिर्नास्ति, अत्र तु सास्तीति विशेषः। <br> ततश्च पूर्वापह्नुतिवदत्रापि द्वैविध्यमपि द्रष्टवयम्‌ ॥२८॥ <br> भ्रान्तापह्नुतिरन्यस्य शङ्कायां भ्रान्तिवारणे। <br> तापं करोति सोत्कम्पं, ज्वर किं? न, सखि! स्मरः॥१९॥ <br> अत्र तापं करोतीति स्मरवृत्तान्ते कथिते तस्य ज्वरसाधारण्यादृजुबुद्ध्या सख्या ‘ज्वरः किम्‌’ इति पृष्टे, ‘न सखि! स्मरः” इति तत्त्वोक्त्या भ्रान्तिवारणं कृतम्‌। <br> यथा वा - नागरिक! समधिकोन्नतिरिह महिषः कोऽयमुभयतः पुच्छः। <br> नहि नहि करिकलभोऽयं शुण्डादण्डोऽयमस्य न तु पुच्छम्‌॥ <br> इदं सम्भवद्‌ भ्रान्तिपूर्विकायां भ्रान्तापह्नुतावुदाहरणम्‌। <br> कल्पित भ्रान्तिपूर्वा यथा- जटा नेयं वेणीकृतकचकलापो न गरलं गले कस्तूरीयं शिरसि शशिलेखा न कुसुमम्‌। <br> इयं भूतिर्नाङ्गे प्रियविरहजन्मा धवलिमा पुरारातिभ्रान्त्या कुसुमशर! किं मां प्रहरसि॥ <br> अत्र कल्पितभ्रान्तिः ‘जटा नेयम्‌’ इत्यादिनिषेधमात्रोन्नेया, पूर्ववत्प्रश्नाभावात्‌। <br> दण्डी त्वत्र तत्त्वाख्यानोपमेत्युपमाभेदं मेने। <br> यदाह - ‘न पद्मं मुखमेवेदम, न भृङ्गो चक्षुषी इमे। <br> इति विस्पष्टसादृश्यात्तत्त्वाख्यानोपमैव सा’॥२६॥ <br> इति छेकापह्नुतिरन्यस्य शङ्कातस्तथ्यनिह्नवे। <br> प्रजल्पनमत्पदे लगनः कान्तः किं? नहि नूपुरः॥३०॥ <br> कस्यचित्कञ्चित्प्रति रहस्योक्तावन्येन श्रुतायां स्वोक्तेस्तात्पर्यान्तरवर्णनेन तथ्य निह्नवे छेकापह्नुतिः। <br> यथा नायिकाया नर्मसखीं प्रति ‘प्रजल्पनमत्पदे लग्नः इति स्वनायकवृत्तान्ते निगद्यमाने तदाकर्ण्य ‘कान्तः किम्‌’ इति शङ्कितवतीमन्यां प्रति ‘नहि, नूपुरः’ इति निह्नवः। <br> सीत्कारं शिक्षयति व्रणयत्यधरं तनोति रोमाञ्चम्‌। <br> नागरिकः किं मिलितो? नहि नहि, सखि! हैमनः पवनः॥ <br> इदमर्थयोजनया तथ्यनिह्नवे उदाहरणम्‌। <br> शब्दयोजनया यथा – पद्मे! त्वन्नयने स्मरामि सततं भावो भवत्कुन्तले नीले मुह्यति किं करोमि महितं क्रीतोऽस्मि ते विभ्रमैः। <br> इत्युस्वप्नवचो निशम्य सरुषा निर्भर्त्सितो राधया कृष्णस्तत्परमेव तद्व्यपदिह्सन्‌ क्रीडाविटः पातु वः॥ <br>  सर्वमिदं विषयान्तरयोजने उदाहरणम्‌। <br> विषयैक्येऽप्यवस्थाभेदेन योजने यथा - वदन्ती जारवृत्तान्तं पत्यौ धूर्ता सखीधिया। <br> पतिं बुद्ध्वा, ‘सखि! ततः प्रबुद्धास्मी’त्यपूरयत्‌॥३०॥ <br> कैतवापह्नुतिर्व्यक्तौ व्याजाद्यैर्निह्नुतेः पदैः। <br> निर्यान्ति स्मरनाराचाः कान्तादृक्पातकैतवात्‌॥३१॥ <br>      अत्रासत्यत्वाभिधायिना, ‘कैतव’ पदेन ;नेमे कान्ताकटाक्षाः, किन्तु स्मरनाराचाः’ इत्यपह्नवः प्रतीयते। <br> यथा वा – रिक्तेषु वारिकथया विपिनोदरेषु मध्याह्नजृम्भितमहातपतापतप्ताः। <br> स्कन्धान्तरोत्थितदवागिन्शिखाच्छलेन जिह्वाम प्रसार्य तरवो जलमर्थयन्ते ॥३१॥'
    },
    {
      title_sans: 'उत्प्रेक्षालङ्कारः',
      title_eng: 'Utprekṣālaṅkāra',
      id: 11,
      definition_sans: 'संभावना स्यादुत्प्रेक्षा वस्तुहेतुफलात्मना। <br>      उक्तानुक्तास्पदाद्यात्र सिद्धाऽसिद्धास्पदे परे॥३२॥<br> धूमस्तोयं तमः शङ्क्व कोकीविरहशुष्मणाम्‌। <br> लिम्पतीव तमोङ्गानि वर्षतीवाञ्जनं नभः॥३३॥ <br> रक्तौ तवाङ्घ्री मृदुलौ भुवि विक्षेपणाद्ध्रुवम्‌। <br> त्वन्मुखाभेच्छया नूनं पद्मैर्वेरायते शशी॥३४॥ <br> मध्यः किं कुच्योर्धृत्यै बद्धः कनकदामभिः। <br> प्रायोऽब्जं त्वत्पदेनैक्यं प्राप्तुं तोये तपस्यति॥३५॥<br> अन्यधर्मसंबन्धनिमित्तेनान्यस्यान्यतादात्म्यसंभावनमुत्प्रेक्षा।<br>सा च वस्तु-हेतु-फलात्मतागोचरत्वेन त्रिविधा।<br><br> एता एवोत्प्रेक्षाः। <br>   ‘मन्ये-शङ्के-ध्रुवं-प्रायो-नूनमित्येवमादिभिः। <br>  उत्प्रेक्षा व्यज्यते शब्दैरिवशब्दोऽपि तादृशः’॥ <br>  इत्युत्प्रेक्षाव्यञ्जकत्वेन परिगणितानां शब्दानां प्रयोगे वाच्याः। <br> तेषामप्रयोगे गम्योत्प्रेक्षा। <br> यथा – त्वत्कीर्तिर्भ्रमनश्रान्ता विवेश स्वर्गनिम्नगाम्‌॥३३-३५ ',
      definition_eng: ' ',
      common: ' ',
      types: 3,
      type: [
        {
          text_sans: 'अत्र वस्तुनः कस्यचिद्वस्त्वन्तरतादात्म्यसंभावना प्रथमा स्वरूपोत्प्रेक्षेत्युच्यते।<br>स्वरूपोत्प्रेक्शा उक्तविषयाऽनुक्तविषया चेति द्विविधा।',
          ex: '1. रजनीमुखे सर्वत्र विसृत्वरस्य तमसो नैल्यदृष्टिप्रतिरोधकत्वादिधर्मसंबन्धेन गम्यमानेन निमित्तेन सद्यःप्रियविधटितसर्वदेशस्थितकोकाङ्गानाहृदुपगतप्रज्वलिष्यद्विरहानलधूमस्तोमतादात्म्यसंभावनास्वरुपोत्प्रेक्षा तमसो विषयस्योपादानादुक्तविषया।<br>तमोव्यापनस्य नभःप्रभृतिभूपर्यन्तसकलवस्तुसान्द्रमलिनीकरणेन निमित्तेन तमःकर्तृकलेपनतादात्म्योत्प्रेक्षा, नभःकर्तृकाञ्जनवषणतादात्म्योत्प्रेक्षा चनुक्तविषया स्वरुपोत्प्रेक्षा, उभयत्राअपि विषयभूततमोव्यापनस्यानुपादानात्‌।नन्वत्र तमसो व्यापनेन निमित्तेन लेपनकर्तृतादात्म्योत्प्रेक्षा नभसो भूपर्यन्तं गाढनीलिमव्याप्तत्वेन निमित्तेनाञ्जनवर्षणकर्तृतादात्म्योत्प्रेक्षा, चेत्युत्प्रेक्षाद्वयमुक्तविषयमेवास्तु। <br> मैवम्‌; लिम्पति – वर्षतीत्याख्यातयोः कर्तृवाचकत्वेऽपि ‘भावप्रधानमाख्याय‌म्’ इति स्मृतेर्धात्वर्थक्रियाया एव प्राधान्येन तदुपसर्जनत्वेनान्वितस्य कर्तुरुप्रेक्षणीयतया अन्यत्रान्वयासंभवात्‌। <br> अत एव। [आख्यातार्थस्य कर्तुः क्रियोपसर्जनत्वेनान्यत्रान्वयासंभवादेव] <br> अस्योपमायामुपमानतयान्वयोऽपि दण्डिना निराकृतः - ‘कर्ता यद्युपमानं स्यान्न्यग्भूतोऽसौ क्रियापदे। <br> स्वक्रियासाधनव्यग्रो नालमन्यद्व्यपिक्षितुम्‌॥ <br> (काव्यादर्शे २।२३०) इति। <br> केचित्तु – तमोनभसोर्विषययोस्तत्कर्तृकलेपनवर्षणस्वरुपधर्मोत्प्रेक्षेत्याहुः। <br> तन्मते स्वरुपोत्प्रेक्षायां धर्म्युत्प्रेक्षा चेत्येवम्द्वैविध्यं द्रष्टव्यम्‌।<br><br>2. बालेन्दुवक्रान्यविकासभावाद्बभुः पलाशान्यतिलोहितानि। <br> सद्यो वसन्तेनसमागतानां नखक्षतानीव वनस्थलीनाम्‌॥ <br> अत्रपलाशकुसुमानां वक्रत्वलोहितत्वेन संबन्धेन निमित्तेन सद्यःकृतनखक्षततादात्म्यसंभावनादुक्तविषया स्वरुपोत्प्रेक्षा। <br>     पूरोव्दाहरणे निमित्तभूतधर्मसंबन्धो गम्यः, इह तूपात इति भेदः। <br>        नन्विवशब्दस्य सादृश्यपरत्वेन प्रसिद्धरतत्वादुपमैवास्तु। <br>        ‘लिम्पतीत्युदाहरणे लेपान्कर्तुरुपमानत्वार्हस्य क्रियोपसर्जनत्ववदिह नखक्षतानामन्योपसर्जनत्वस्योपमाबधाकस्याभावादिति चेत्‌, उच्यते – उपमाया यत्र क्वाचित्स्थिरैरपि नखक्षतेइः सह वक्तुं शक्यतया वसन्तनायकसमागतवनस्थलसंबन्घित्वस्य विशेषणस्यानपेक्षितत्वादिह तदुपादानं नखक्षततादात्म्यसंभावनायामिवशब्दमवस्थपयति। <br> तथात्व एव तद्विशिषणसाफल्यात्‌। अस्ति च संभावनायां ‘इव’शब्दो ‘दूरे तिष्ठान्देवदत्त इवाभाति’ इति<br><br>3. पिनष्टीव तरङ्गाग्रैः समुद्रः फेनचन्दन‌म्‌।<br> तदादाय करैरिन्दुर्लिम्पतीव दिवङ्गनाः॥<br>अत्र तरङ्गाग्रैः फेनचन्दनस्य प्रेरणं पेषणतयोत्प्रेक्ष्यते। <br>समुद्रादुत्थितस्य चन्द्रस्य प्रथमं समुद्रपूरे प्रसृतानां कराणां दिक्षु व्यापनं च समुद्रोपान्तफेनचन्दनकृतलेपनत्वेनोत्प्रेक्ष्यते। <br>उभयत्र क्रमेण समुद्रप्रान्तगतफेनचन्दनपुञ्जीभवनं दिशां धवलीकरणं च निमित्तमिति फेनचन्दनप्रेरणव्यापनयोर्विषययोरनुपादानादनुक्तविषये स्वरुपोत्प्रेक्षे। <br> येषं तूपात्तयोः समुद्रचन्द्रयोरेव-तत्कर्तृकपेषण-लेपनरुपधर्मोत्प्रेक्षेति मतं, तेषां मते पूर्वोदाहरणे धर्मिणि धर्म्यन्तरतादात्म्योत्प्रेक्षा। <br> इह तु धर्मिणि धर्मसंसर्गोत्प्रेक्शेति भेदोऽवगन्तव्यः।'
        },
        {
          text_sans: 'अहेतोर्हेतुभावेन उत्प्रेक्षा हेतूत्प्रेक्षा <br> सिद्धविषयाऽसिद्धविषया चेति द्विविधे।',
          ex: '1. चरणयोः स्वतः सिद्धेरक्तिमनि वस्तुतो विक्षेपणं न हेतुरित्यहेतोस्तस्य हेतुत्वेन सम्भावना हेतूत्प्रेक्षा विक्षेपणस्य विषयस्य सत्त्वात्सिद्धविषया। <br> चन्द्रपद्मविरोधे स्वाभाविके नायिकावदनकान्तिप्रेप्सा न हेतुरिति तत्र तद्धेतुत्वसंभावना हेतूत्प्रेक्षा वस्तुतस्तदिच्छाया अभावादसिद्धविषया। <br><br>2. रात्रौ रवेर्दिवा चेन्दोरभावादिव सप्रभुः। <br> भूमौ प्रतापयशसी सृष्टवान्‌ सततोदिते॥ <br><br> रात्री रवेर्दिवा चन्द्रस्याभावः सन्नपि प्रतापयशसोः सर्गेन हेतुरिति तस्य तद्धेतुत्वसंभावना सिद्धविषया हेतूत्प्रेक्षा। <br><br>3. विवस्वताऽनायिषतेव मिश्राः स्वगोसहस्रेण समं जनानाम्‌। <br> गावोऽपि नेत्रापरनामधेयास्तेनेदमान्ध्यं खलु नान्धकारैः॥ <br><br> गावोऽपि विवस्वता कृतं स्वकिरणैः सह जनलोचनानां नयनमसदेव रात्रावान्ध्यं प्रति हेतुत्वेनोत्प्रेक्ष्यत इत्यसिद्धविषया हेतूत्प्रेक्षा। '
        },
        {
          text_sans: 'फलस्य फलत्वेनोत्प्रेक्षा फलोत्प्रेक्षेत्युच्यते। <br> सिद्धविषयाऽसिद्धविषया चेति द्विविधे।',
          ex: '1. मध्द्यः स्वयमेव कुचौ धरति न तु कनकदामबन्धत्वेनाध्यवसिताया वलित्रयशालिताया बलादिति मध्यकर्तृककुचधृतेस्तत्फलत्वेनोत्प्रेक्षा सिद्धविषया फलोत्प्रेक्षा। <br> जलजस्य जलावस्थितेरुदवासतपस्त्वेनाध्यवसितायाः कामिनीचरणसायुज्यप्राप्तिर्न फलमिति तस्या गगनकुसुमायमानायास्तपःफलत्वेनोत्प्रेक्षणादसिद्धविषया फलोत्प्रेक्षा <br><br> 2. पूरं विधुर्वर्धयितुं पयोधेः शङ्केऽयमेणाङ्कमणिं कियन्ति। <br> पयांसि दोग्धि प्रियविप्रयोगे सशोककोकीनयने कियन्ति॥ <br> <br> अत्र चन्द्रेण कृतं समुद्रस्य बृंहणं सदेव ताअ तेन कृतस्य चन्द्रकान्तद्रावणस्य कोकाङ्गानाबाष्पस्रावणस्य च फलत्वेनोत्प्रेक्ष्यत इति सिद्धविषया फलोत्प्रेक्षा। <br><br> रथस्थितानां परिवर्तनाय पुरातनानामिव वाहनानाम्‌।<br>उत्पत्तिभूमौ तुरगोत्तमानाअं दिशि प्रतस्थी रविरुत्तरस्याम्‌॥ <br>  अत्रोत्तरायणस्याश्वपरिवर्तनमसदेव फलत्वेनोत्प्रेक्ष्यत इत्यदिद्धविषया फलोत्प्रेक्षा। <br><br>'
        }
      ]
    },
    {
      title_sans: 'अतिशयोक्त्यलङ्कारः',
      title_eng: 'Atiśayoktyalaṅkāra',
      id: 12,
      definition_sans: ' रुपकातिशयोक्तिः स्यानिनिगीर्याध्यवसानतः। <br> पश्य नीलोत्पलद्वन्द्वान्निःसरन्ति शिताः शराः॥३६॥ <br><br> विषयस्य स्वशब्देनोल्लेखनं विनापि विषयिवाचकेनैव शब्देन ग्रहणं विषयनिगरणं तत्पूर्वकं विषयस्य विषयिरुपतयाऽध्यवसानमाहार्यनिश्चयस्तस्मिन्सति रुपकातिशयोक्तिः। <br> यतह नीलोत्पलशरशब्दाभ्यां लोचनयोः कटाक्षाणां च ग्रहणपूर्वकं तद्रूपताध्यवसानम्‌। <br><br>तेनात्राप्यभेदातिशयोक्तिस्ताद्रूप्यातिशयोक्तिरिति द्वैविध्यं द्रष्टव्यम्‌।<br> तत्राप्याधिक्यन्यूनताविभागश्चेति सर्वमनुसंधेयम्‌।',
      definition_eng: '',
      common: 'यथा वा – <br> 1. वापी कापि स्फुरति गगने तत्परं सूक्ष्मपद्या सोपानालीमधिगतवती काञ्चनीमैन्द्रनीली। <br> अग्रे शैलौ सुकृतिसुगमौ चन्दनच्छन्नदेशौ तत्रत्यानां सुलभममृतं संनिधानात्सुधांशोः॥ <br> अत्र वाप्यादिशब्दैर्नाभिप्रभृतयो निगीर्णाः। <br> अत्रातिशयोक्तौ रुपकविशेषणं रुपके दर्शितानां विधानामिहापि संभवोऽस्तीत्यतिदेशेन प्रदर्शनार्थम्‌। <br><br>2. यथा वा (विद्भ. भं) – सुधाबद्धग्रासैरुपवचनचकोरैरनुसृतां किरञ्ज्योत्स्नामच्छां लवलिफलपाकप्रणयिनीम्‌। <br> उपमाप्राकाराग्रं प्रहिणु नयने तर्कय मना- जनाकाशे कोऽयं गलितहरिणः शीतकिरणः॥ <br> इत्यत्र ‘कोऽयं गलितहरिणः शीतकिरण’ इत्युक्त्या प्रसिद्धचन्द्राद्भेदस्तत उत्कर्षश्च गर्भितः। <br> एवमन्यत्राप्यूहनीयम्‌॥३६॥ <br> यद्यपह्नतिगर्भत्वं सैव सपह्नवा मता। <br> त्वत्सूक्तिषु सुधा राजभ्रान्त्या पश्यन्ति तां विधौ॥३७॥ <br> अत्र ‘त्वत्सूक्तिमाधुर्यमेवामृतम्‌’ इत्यतिशयोक्तिश्चन्द्रमण्डलस्तह्ममृतं न भवतीत्यपह्नुतिगर्भा। <br> यथा वा - मुक्ताविद्रुममन्तरा मधुरसः पुष्पं परं धूर्वहं प्रालेयद्युतिमण्डले खलु तयोरेकासिका नार्णवे। <br> त्चोदञ्चति शङ्खमूर्ध्नि न पुनः पूर्वाचलाभ्यन्तरे तानीमानि विकल्पयन्ति त इमे येषां न सा दृक्पथे॥ <br> अत्राधररस एव मधुरस इत्याद्यतिशयोक्तिः पुष्परसो मधुरसो न भवतीत्यपह्नुतिगर्भा । <br>       अलङ्कारसर्वस्वकृता तु स्वरूपोत्प्रेक्षायां सपह्नवत्वमुदाहृतम्‌ - गतासु तीरं तिमिघट्टनेन ससंभ्रमं पौरविलासिनीषु। <br> यत्रोल्लस्त्फेनततिच्छलेन मुक्ताट्टहासेव विभाति शिप्रा॥ <br> इति । <br> ततस्त्वियानत्र भेदः। <br>   एतत्तु शुद्धापह्नुतिगर्भम्‌। <br> यत्र फेनततित्वमपह्नुतं तत्रैवाट्टहासत्वोत्प्रेक्षणात्‌, इह तु पर्यस्तापह्नुतिगर्भत्वमिन्दुमण्डलादावपह्नुतस्यामृतादेः सूक्त्यादिषु निवेशनात्‍। इदं ह पर्यस्तापह्नुतिगर्भत्वमुत्प्रेक्षायामपि संभवति। <br>       तत्र स्वरुपोत्प्रेक्षायां यथा (नै ० ७।३९) - जानेऽतिरागादिदमेव बिम्बं बिम्बस्य च व्यक्तमितोऽधरत्वम्‌। <br> द्वयोर्विशेषावगमाक्षमाणां नाम्नि भ्रमोऽभूदनयोर्जनानाम्‌॥ <br> अत्र प्रसिद्धबिम्बफले बिम्बतामपह्नुत्यातिरागेण निमित्तेन दमयन्त्यधरे तदुत्प्रेक्षा पर्यस्तापह्नुतिगर्भा। <br> हेतूत्प्रेक्षायाम तद्गर्भत्वं प्राग्लिखिते हेतूत्प्रेक्षोदाहरण एव दृश्यते। <br> तत्र चान्धकारेष्वान्ध्यहेतुत्वमपह्नुत्यान्यत्र तन्निवेशितम्‌। <br>      फलोत्प्रेक्षायां यथा - रवितप्तो गजः पद्मांस्तद्गृह्यान्बाधितुं ध्रुवम्‌। <br> सरो विशति न स्नातुं गजस्नानं हिन निष्फलम्‌॥ <br> अत्र गजस्य सरःप्रवेशं प्रति फले स्नाने फलत्वमपह्नुत्य पद्मबाधने तन्निवेशितम्‌ । <br> अलमनया प्रसक्तानुप्रसक्त्या, प्रकृतमनुसरामः॥३७॥ <br> <p>भेदकातिशयोक्तिस्तु तस्यैवान्यत्ववर्णनम्‌।<br /> अन्यदेवास्य गाम्भीर्यमन्यद्धैर्यं महीपतेः॥३८॥<br /> अत्र लोकप्रसिद्धगाम्भीर्याद्यभेदेऽपि भेदो वर्णितः।<br /> यथा वा - अन्येयं रुपसंपत्तिरन्या वैदग्ध्यधोरणी।<br /> नैषा नलिनपत्राक्षी सृष्टिः सादारणी विधेः॥३८॥<br /> सम्बन्दातिशयोक्तिः स्यादयोगे योगकल्पनम्‌।<br />सौधाग्राणि पुरस्यास्य स्पृशन्ति विधुमण्डलम्‌॥३९॥<br />यथा वा - कतिपयदिवसैः क्षयं प्रयायात्‌ कनकगिरिः कृतवासरावसानः।<br />इति मुदमुपयाति चक्रवाकी वितरणशालिनि वीररुद्रदेवे॥<br />अत्र चक्रवाक्याः सूर्यास्तमयकारकमहामेरुक्षयसम्भावनाप्रयुक्तसम्तोषासंबन्धेऽपि तत्संबन्धो वर्णितः॥३९॥<br />योगेऽप्ययोगोऽसंबन्धातिशयोक्तिरितीर्यते।<br />त्वयि दातरि राजेन्द्र! स्वर्द्रुमान्नाद्रियामहे॥४०॥<br />अत्र स्वर्द्रुमेषादरसंबन्धेऽपि तद्संबन्धो वर्णित इत्यसंबन्धातिशयोक्तिः।<br />यथा वा - अनयोरनवद्याङ्गि! स्तनयोर्जृम्भमाणयोः।<br />अवकाशो न पर्याप्तस्तव बाहुलान्तरे॥४०॥<br />अक्रमातिशयोक्तिः स्यात् सहते हेतुकार्ययोः।<br />आलिङ्गन्ति समं देव! ज्यां शराश्च पराश्च ते॥४१॥<br />अत्र मौर्व्या यदा शरसंधानं कृतं तदानीमेव शत्रवः क्ष्तौ पतन्तीति हेतुकार्ययोः सहत्वं वर्णितम्‌।<br />यथा वा - मुञ्चति मुञ्चति कोशं भजति च भजति प्रकम्पमरिवर्गः।<br />हम्मीरवीरखड्गे त्यजति त्यजति क्षमामाशु॥<br />अत्र खड्गस्य कोशत्यागादिकाल एव रिपूणां धनगृहत्यागादि वर्णितम्‌॥४१॥<br />चपलातिशयोक्तिस्तु कार्ये हेतुप्रसक्तिजे।<br />यास्यामीत्युदिते तन्व्या वलयोऽभवदूर्मिका॥४२॥<br />अत्र नायकप्रवासप्रसक्तिमात्रेण योषितोऽतिकार्श्यं कार्यमुखेन दर्शितम्‌।<br />यथा वा - आदातुं सकृदीक्षितेऽपि कुसुमे हस्ताग्रमालोहितं लाक्षारञ्जनवार्तयापि सहसा रक्तं तलं पादयोः।<br />अङ्गानामनुलेपनस्मरणमप्यत्यन्तखेदावहं हन्ताऽधीरदृशः किमन्यदलकामोदोऽपि भारायते॥<br />यथा वा – यामि न यामीति धवे वदति पुरस्तात्क्षणेन तन्वङ्ग्याः।<br />गलितानि पुरो वलयान्यपराणि तथैव दलितानि॥४२॥<br />अत्यन्तातिशयोक्तिस्तु पौर्वापर्यव्यतिक्रमे।<br />अग्रे मानो गतः पश्चादनुनीता प्रियेण सा॥४३॥<br />(अत्यन्तातिशयोक्तिस्तु कार्ये हेतुप्रसक्तिजे।<br />यास्यामीत्युदीते तन्व्या वलयोऽभवदूर्मिका॥) यथा वा - कवीन्द्रानाणामासन्‌ प्रथमतरमेवाङ्गणभुव-श्चलद्भृङ्गासङ्गाकुलकरिमदामोदमधुराः।<br />अमी पश्चात्तेषामुपरि पतिता रुद्रनृपतेः कटाक्षाः क्षीरोदप्रसरदुरुवीचीसहचराः॥<br />एतास्तिस्रोऽप्यतिशयोक्तयः कार्यशैघ्र्यप्रत्यायनार्थाः॥४३॥<br /></p> '
    },
    {
      title_sans: 'तुल्ययोगितालङ्कारः',
      title_eng: 'Tulyayogitālaṅkāraḥ',
      id: 13,
      definition_sans: '<p>वर्ण्यानामितरेषां वा धर्मैक्यं तुल्ययोगिता।<br />      संकुचन्ति सरोजानि स्वैरिणीवदनानि च॥४४॥<br /> त्वदङ्गमार्दवे दृष्टे कस्य चित्ते न भासते।<br />मालतीशसभृल्लेखाकदलीनां कठोरता ॥४५॥<br />    प्रस्तुतानामप्रस्तुतानां वा गुणक्रियारुपैकधर्मान्वयस्तुल्ययोगिता।<br />   संकुचन्तीति प्रस्तुततुल्ययोगिताया उदाहरणम्‌।<br />तत्र प्रस्तुतचन्द्रोदयकार्यतया वर्णनीयानां सरोजानां प्रकाशभीरुस्वैरिणीवदनानां च संकोचरुपैकक्रियान्वयो दर्शितः।<br />उत्तरश्लोके नायिकासौकुमार्यवर्णने प्रस्तुतेऽप्रतस्तुतानां मालत्यादीनां कठोरतरुपैकगुणान्वयः।<br /></p>',
      definition_eng: ' ',
      common: '<p>यथा वा - संजातपत्रप्रकरान्वितानि समुद्वहन्ति स्फुटपाटलत्वम्‌।<br /> विकस्वराण्यर्ककराभिमर्शाद्दिनानि पद्मानि च वृद्धिमीयुः॥<br />    नागेन्द्रहस्तास्त्वचि कर्कशत्वादेकान्तशैत्यात्‌ कदलीविशेषाः ।<br />    लब्ध्वापि लोके परिणाहि रुपं हातास्तदूर्वोरुपमानबाह्याः॥<br />अत्र ग्रीष्मवर्णने तदीयत्वेन प्रस्तुतानां दिनानां पद्मानां चैकक्रियान्वयः।उरुवर्णनेऽप्रस्तुतानां करिकराणां कदलीविशेषाणां चैकगुणान्वयः॥४४-४५॥<br /> हिताहिते वृत्तितौल्यमपरा तुल्ययोगिता।<br />  प्रदीयते पराभूतिर्मित्रशात्रवयोस्त्वया॥४६॥<br />अत्र हिताऽहितयोर्मित्रं – शात्रवयोरुत्कृष्टभूतिदानस्य पराभवदानस्य च श्लेषेणाभेदाध्यवसायाद्‌ वृत्तितौल्यम्‌।<br />यथा वा- यश्च निम्बं परशुना यश्चैनं मधुसर्पिषा।<br />  यश्चैनं गन्धमाल्याख्याद्यैः सर्वस्य कटुरेव सः॥<br />अत्र वृश्चति-सिञ्चति-अर्चति इत्यध्याहारेण वाक्यानि पूरणीयानि।पूर्वोदाहरणं स्तुतिपर्यवसायि, इदं तु निन्दापर्यवसयीति भेदः।<br />इयम सरस्वतीकण्ठाभरणोक्ता तुल्ययोगिता॥४६॥<br />गुणोत्कृष्टे समीकृत्य वचोऽन्या तुल्ययोगिता।<br />   लोकपालो यमः पाशी श्रीदः शक्रो भवानपि॥४७॥<br />अत्र वर्णनीयो राजा शक्रादिभिर्लोकपालत्वेन समीकृतः।<br />यथा वा - संगतानि मृगाक्षीणां तडिद्विलसितान्यपि।<br />क्षणद्वयं न तिष्ठन्ति धनारब्धान्यपि स्वयम्‌॥<br />    पुर्वत्र स्तुतिः इह तु निन्दा।<br /> इयं काव्यादर्शे दर्शिता।<br /> इमां तुल्ययोगितां सिद्धिरिति केचिद्व्यजह्नुः।<br />यदाह जयदेवः - सिद्धिः ख्यातेषु चेन्नाम कीर्त्यते तुल्योक्तये।<br />युवामेवेह विख्यातौ त्वं बलैजलधिर्जलैः॥<br />इति।<br />मतन्तरेष्वत्र वक्ष्यमाणं दीपकमेव॥४७॥<br /></p>'
    },
    {
      title_sans: 'दीपकालङ्कारः',
      title_eng: 'Dīpakālaṅkāra',
      id: 14,
      definition_sans: '<p>वदन्ति वर्ण्यावर्ण्यानां धर्मैक्यं दीपकं बुधाः।<br />   मदेन भाति कलभः प्रतापेन महीपतिः॥४८॥<br />प्रस्तुताप्रस्तुतानामेकधर्मान्वयो दीपकम्‌।<br /> यथा कलभमहीपालयोः प्रस्तुताप्रस्तुतयोर्भानक्रियान्वयः।<br /></p>',
      definition_eng: ' ',
      common: '<p>यथा वा - मणिः शाणोल्लीढः समरविजयी हेतिदलितो मदक्षीणो नागः शरदि सरितः श्यानपुलिनां।<br />कलाशेषश्चन्द्रः सुरतमृदिता बालवनिता तनिम्ना शोभन्ते गलितविभवाश्चार्थिषु नृपाः॥<br />अत्र प्रस्तुतानां नृपाणामप्रस्तुतानां मण्यादीनाम च शोभैकधर्मान्वयः।<br />प्रस्तुतैकनिष्ठः समानो धर्मः प्रसङ्गादन्यत्रोपकरोति प्रासादार्थमारोपितो दीप इव रथ्यायामिति दीपसाम्याद्दीपकम्‌।<br /> ‘संज्ञायां च (वा० २४५८) इति दिवार्थे कन्‌ प्रत्ययः यद्यपि - सुवर्णपुष्पां पृथिवी चिन्वन्ति पुरुषास्त्रयः।<br /> शूरश्च कृतविद्यश्च यश्च जानाति सेवितुम्‌॥<br />इत्यत्र प्रस्तुतानामप्रस्तुतानां युगपद्धर्मान्वयः प्रतिभाति।<br /> ‘मदेन भाति कलभ’ इत्यत्राप्रस्तुतस्यैव प्रथमं धर्मान्वयः तथापि प्रासङ्गिकत्वं न हीयते वस्तुगत्या प्रस्तुतूद्देशेन प्रवृत्तस्यिव वर्णनस्याग्रप्रस्तुतेऽन्वयात्‌।<br /> नहि दीपस्य रथ्याप्रासादयोर्युगपदुपकारित्वेन जामात्रर्थं श्रपितस्य सूपस्यातिथिभ्यः प्रथमपरिवेषणेन च प्रासण्गिकत्वं हियते।<br /> तुल्ययोगितायां त्वेकं प्रस्तुतम्‌ अन्यदप्रस्तुतमिति विशेषाग्रहणात्‌ सर्वोद्देशेनैव धर्मान्वय इति विशेषः।<br />  अयम चानयोरपरो विशेषः – उभयोरनयोरुपमालङ्कारस्य गम्यत्वाविशेषेऽप्यत्राप्रस्तुतमुपमानं प्रस्तुतमुपमेयमिति व्यवस्थित उपमानोपमेयभावः तत्र तु विशेषाग्रहणादैच्छिकः स इति॥४८॥<br /></p>'
    },
    {
      title_sans: 'आवृत्तिदीपकालङ्कारः',
      title_eng: 'āvṛttidīpakālaṅkāra',
      id: 15,
      definition_sans: '<p>त्रिविधम दीपकावृत्त्तौ भवेदावृत्तिदीपकम्‌।<br />      वर्षत्यम्बुदमालेयं वर्षत्येषा च शर्वरी॥४९॥<br /> उन्मीलन्ति कदम्बानि स्फुटन्ति कुटजोद्गमाः।<br /> माद्यन्ति चातकास्तृप्ता माद्यन्ति च शिखावलाः॥५०॥<br />   दीपकस्यानेकोपकारार्थतया दीपस्थानीयस्य पदस्यार्थस्योभयोर्वाऽऽवृत्तौ त्रिविधमावृत्तिदीपकम्‌।<br /> क्रमेणार्धत्रयेनोदाहरणानि दर्शितानि।<br /></p>',
      definition_eng: '',
      common: '<p>यथा वा - उत्कण्ठयतिए मेघानां माला वर्गं कलापिनम्‌।<br />यूनाम चोत्कण्ठययद्य मानसं मकरध्वजः॥<br /> शमयति जलधरधारा चतकयूनां तृषं चिरोतनताम्‌।<br /> क्षपयति च वधूलिचनजलधारा कामिनां प्रवाअसरुचिम्‌॥<br />    वदनेन निर्जितं तव निलीयते चन्द्रबिम्बमम्बुधरे।<br /> अरविन्दमपि च सुन्दरि! निलीयते पाथसां पूरे॥<br /> एवं चावृत्तीनां प्रस्तुताप्रस्तुतोभयविषयत्वाभावेऽपि दीपकच्छायापत्तिमात्रेण दीपकव्यपदेशः॥४९-५०॥</p> '
    },
    {
      title_sans: 'प्रतिवस्तुपमालङ्कारः',
      title_eng: 'Prativastupamālaṅkāraḥ',
      id: 16,
      definition_sans: '<p>वाक्ययोरेकसमान्ये प्रतिवस्तूपमा मता।<br /> तापेन भ्राजते सूरः शूरश्चापेन राजते॥५१॥<br /> यत्रोपमानोपमेयपरवाक्ययोरेकः समनो धर्मः पृथङ्निर्दिश्यते सा प्रतिवस्तूपमा।<br /> प्रतिवस्तु प्रतिवाक्यार्थमुपमासमानधर्मोऽस्यामिति व्युत्पत्तेः।<br /> यथाऽत्रैव भ्राजते राजत इत्येक एव धर्म उपमानोपमेयवाक्ययोः पृथग्भिन्नपदाभ्यां निर्दिष्टः।<br /></p>',
      definition_eng: '',
      common: '<p>1. यथा वा - स्थिरा शैली गुणवतां खलबुद्ध्या न बाध्यते।<br />    रत्नदीपस्य हि शिखा वात्ययापि न नाश्यते॥<br /> 2. यथा वा – तवामृतस्यन्दिनि पादपङ्कजे निवेशितात्मा कथमन्यदिच्छति।<br /> स्थितेऽरविन्दे मकरन्दनिर्भरे मधुवतो नेक्षुरसं समीक्षते॥<br />अत्र यद्यपि उपमेयवाक्ये अनिच्छा उपमानवाक्ये अवीक्षेति धर्मभेदः प्रतिभाति तथापि बीक्षणमात्रस्यावजनीयस्य प्रतिषेधानर्हत्वादिच्छापूर्वकवीक्षाप्रतिषेधोऽयमनिच्छापर्यवसित एवेति धर्मैक्यमनुसंधेयम्‌।<br /> अर्थावृत्तिदीपकं प्रस्तुतानामप्रस्तुतानां वा प्रतिवस्तूपमा तु प्रस्तुताप्रस्तुतानामिति विशेषः।<br /> अयं चापरो विशेषः – आवृत्तिदीपकं वैधर्म्येण न संभवति प्रतिवस्तूपमा तु वैधर्म्येणापि दृश्यते।<br /> 3. यथा - विद्वानेव हि जानाति विद्वज्जनपरिश्रमम्‌।<br /> न हि वन्ध्या विजानाति गुर्वीं प्रसववेदनाम्‌॥<br />यदि सन्ति गुणाः पुंसां विकसन्त्येव ते स्वयम्‌।<br /> न हि कस्तूरिकामोदः शपथेन विभाव्यते॥५१॥<br /> </p>'
    },
    {
      title_sans: 'दृष्टान्तालङ्कारः',
      title_eng: 'Dṛṣṭāntālaṅkāra',
      id: 17,
      definition_sans: '<p>च्द्बिम्बप्रतिबिम्बत्वं दृष्टान्तस्तदलंकृतिः।<br />    त्वमेव कीर्तिमान्‌ राजन्‌! विधुरेव हि कान्तिमान्‌॥५२॥<br />     यत्रोपमनोपमेयवाक्ययोर्भिन्नावेव धर्मौ बिम्बप्रतिबिम्बभावेन निर्दिष्टौ तत्र दृष्टान्तः।<br /> ‘त्वमेव कीर्तिमान्‌’ इत्यत्र कीर्तिकान्त्योर्बिम्बप्रतिबिम्बबहवः।</p>',
      definition_eng: '',
      common: '<p>1. यथा वा (रघु० ६।२२) – कामं नृपाः सन्ति सहस्रशोऽन्ये राजन्वतीमाहुरनेन भूमिम्‌।<br /> नक्षत्रताराग्रहसंकुलापि ज्योतिष्मती चन्द्रमसैव रात्रिः॥<br /> 2. यथा वा - देवीं वाचमुपासते हि बहवः सारं तु सारसतं जानीते नितरामसौ गुरुकुलक्लिष्टो मुरारिः कविः।<br /> अब्धिर्लङ्घित एव वान्ररभटैः किं त्वस्य गम्भीरता- मापातालनिमग्नपीवरतनुर्जानाति मन्थाचलः॥<br />  नन्वत्रोपमानोपमेयवाक्ययोर्ज्ञानमेक एव धर्म इति प्रतिवस्तूपमा युक्ता।<br />   मैवम्‌, अचेतने मन्थाचले ज्ञानस्य बाधितत्वेन तत्र जानातीत्यनेन सागराघस्तलावधिसंस्पर्शमात्रस्य विवक्षितत्वात्‌।<br /> अत्रोदाहरणे पदावृत्तिदीपकाद्विशेषः पूर्ववत्प्रस्तुताप्रस्तुतविषयकृतो द्रष्टव्यः।<br />   वैधर्म्येणाप्ययं दृश्यते - कृतं च गर्वाभिमुखं मनस्त्वया किमन्यदेवं निहताश्च नो द्विषः।<br /> तमांसि तिष्ठन्ति हि तावदंशुमान्न यादवायात्युदयाद्रिमौलिताम्‌॥५२॥<br /> </p>'
    },
    {
      title_sans: 'निदर्शनालङ्कारः',
      title_eng: 'Nidarśanālaṅkāra',
      id: 18,
      definition_sans: '<p>वाक्यार्थयोः सदृशयोरैक्यारोपो निदर्शना।<br />      यद्दातुः सौम्यता सेयं पूर्णेन्दोरकलङ्कता॥५३॥<br /> अत्र दातृपुरुषसौम्यत्वस्योपमेयवाक्यार्थस्य पुर्णेन्दोरकलङ्कत्वस्योपमानवाक्यार्थस्य यत्तद्द्भ्यामैक्यारोपः।<br /></p>',
      definition_eng: '',
      common: '<p>1. यथा वा- अरण्यरुदितं कृतं शवशरीरमुद्वर्तितं स्थलेऽब्जमवरोपितं सुचिरमूषरे वर्षितम्‌।<br /> श्वपुच्छमवनामितं बधिरकर्णजापः कृतो धृतोऽन्धमुखदर्पणो यदबुधो जनः सेवितः॥<br /> अत्राबुधजनसेवया अरण्यरोदनादीनां च यत्तद्द्भ्यामैक्यारोपः॥५३॥<br /> पदार्थवृत्तिमप्येके वदन्त्यां निदर्शनाम्‌।<br />  तन्नेत्रयुगलं धत्ते नीलाम्बुजन्मनोः॥५४॥<br /> अत्र नेत्रयुगले नीलाम्बुजगतलॉलापदार्थारोपो निदर्शना।<br />  2. यथा वा – वियोगे गौडनारीनां यो गण्डतलपाण्डिमा अदृश्यत स खर्जूरीमञ्जरीगर्भरेणूषु॥<br />  पूर्वस्त्मिन्नुदाहरने उपमेये उपमानधर्मारोपः, इह तूपमाने उपमेयधर्माओप इति भेदः।<br />    उभयत्राप्यन्यधर्मस्यान्यत्रासंभवेन तत्सदृशधर्माक्षेपादौपम्ये पर्यवसानं तुल्यम्‌।<br /> इयं पदार्थवृत्तिनिदर्शना ललितोपमेति जयदेवेन व्याहृता।<br /> यद्यपि ‘वियोगे गौडनारीणाम्‌’ इति श्लोकः प्राचीनैर्वाक्यार्थवृत्तिनिदर्शनायामुदाहृतः, तथापि विशिष्तयोर्धर्मयोरैक्यारोपो वाक्यार्थवृत्तिनिदर्शना।<br />  उपमानोपमेययोरन्यतरस्मिन्नन्यतरधर्मारोपः पदार्थवृत्तिनिदर्शनेतिव्यवस्थामाश्रित्यास्माभिरिहोदाहृतः।<br />  3. एवं च - ‘त्वयि सति शिव! दातर्यस्मदभ्यर्थितामा- मितरमनुसरन्तो दर्शयन्तोऽर्थ्मुद्राम्‌।<br />  चरमचरणपातैर्दुर्ग्रहः दोग्धुकामाः करभमनुसरामः कामधेनौ स्थितायाम्‌॥’ ‘दिर्भ्यामब्धिं तितीर्षन्तस्तुष्टुवुस्ते गुणार्णवम्‌॥’ इत्यादिषु वाक्यभेदाभावेऽपिवाक्यवृत्तिरेव निदर्शना, विशिष्ट्योरैक्यारोपसद्भावात्‌।<br /> ‘ वाक्यार्थयोःसदृशयोः’ इति लक्षणवाक्ये वाक्यार्थशब्देन बिम्बप्रतिबिम्बभावापन्नवस्तुविशिष्टास्वरुपयोः प्रस्तुताप्रस्त्तुतधर्मयोर्विवक्षितत्वादिति।<br /> 4. एवं च - ‘राजसेवा मनुष्याणामसिधारावलेहनम्‌।<br />  पञ्चाननपरिष्वङ्गो व्यालीवदनचुम्बनम्‌॥’ इत्यत्र प्रस्तुताप्रस्तुतवृत्तान्तयोरेकैकपदोपात्तत्वेऽपि वाक्यार्थवृत्तिनिदर्श्नाया न क्षतिः।<br />    तयोर्बिम्बप्रतिबिम्बभावापन्नवस्तुविशिष्टव्यवहाररुपत्वात्‌।<br /> अत एव निदर्शनाया रुपकाद्भेदः।<br /> रुपके ह्यविशिष्टयोर्रेव मुखचन्द्रादिकयोरैक्यारोपः।<br /> ‘अङ्घ्रिदण्डो हरेरुर्ध्वमुत्क्षिप्तो बलिनिग्रहे।<br /> विधिविष्टरपद्मस्य नालदण्डो मुदेऽस्तु वः॥’ इति विशिष्टत्वरुपकोदाहरणेऽपि न बिम्बप्रतिबिम्बभावापनावस्तुविशिष्टरुपता; विधिविष्टारकमलदण्डविशिष्टात्वरुपसाधारणधर्मवत्तासंपादनार्थमेव तद्विशेषणोपादानात्‌।<br /> ‘यद्दातुः सौम्यता’ इत्यादिनिदर्शनोदाहरणेषु दातृपूर्णेन्द्वादीनामानन्दकरत्वादिनेवात्र विशेषणयोर्बिम्बभावात्‌।<br /> यत्र तु विषयविषयिविशेषणानां परस्परसादृश्येन बिम्बप्रतिबिम्बभावोऽस्ति।<br />    ‘ज्योत्स्नाभस्मच्छुरणधवला बिभ्रती तारकास्थी- न्यन्तर्धानव्यसनरसिका रात्रिकापालिकीयम्‌।<br />द्वीपाद्द्वीपं भ्रमति दधती चन्द्रमुद्राकपाले न्यस्तं सिद्धाञ्जनपरिमलं लाञ्छनस्य च्छलेन॥’ इति सवयवरुपकोदाहरणे।<br /> तत्रापि विषयविषयिणोस्तद्विशेषणानां च प्रत्येकमेवैक्यारोपः, न तु ज्योत्स्नादिविशिषिष्टरात्रिरुपविषयस्य भस्मादिविशिष्टाकापालिकीरुपविषयिणश्च विशिष्टरुपेणैक्यारोप्पोऽस्तीति।<br /> तस्मात्‌ ‘राजसेवा मनुष्याणाम्‌’ इत्यादावपि वाक्यार्थवृत्तिनिदर्शनैव युक्ता।<br /> मतान्तरे त्विह पदार्थवृत्त्यैव निदर्शनया भाव्यमिति॥५४॥<br /> 5. अपरां बोधनं प्राहुः क्रिययाऽसत्सदर्थयोः।<br /> नश्येद्राजविरोधीति क्षीणं चन्द्रोदये तमः॥५५॥<br /> उदयन्नेव सविता दमेष्वर्पयति श्रियम्।<br /> विभावयन् समृद्धीनां फलं सुहृदनुग्रहः॥५६॥<br /> कस्यचित्किंचित्क्रियाविशिष्टस्य स्वक्रियया परान्प्रति असतः सतो वाऽर्थ्स्य बोधनं यन्निबध्यते तदपरां निदर्शनामाहुः।<br />   असदर्थबोधने उत्तरार्धमुदाहरणम्‌।<br /> तत्र नश्येदिति बोधयदिति वक्तव्ये बोधयदित्यस्य गम्यमनत्वादप्रयोगः तत्श्च राज्ञा चन्द्रेण सह विरुध स्वयं नाशक्रियाविशिष्टं तमः स्वकीयनाशक्रियया दृष्टान्तभूतया अन्योऽप्येवं राजविरुद्धश्चेन्नश्येदित्यनिष्टपर्यवसायिनमर्थं बोधयदेव नष्टमित्यर्थनिबन्धनादसदर्थनिदर्शना।<br /> तथा उत्त्रश्लोके सविता स्वोदयसमय एव पद्मषु लक्ष्मीमादधानः स्वया पद्मलक्ष्म्याधानक्रियया परान्प्रति समृद्धीनां फलं सुहृदनुग्रह एवेति श्रेयस्करमर्थं बोधयन्निबद्ध इत सदर्थनिदर्शना।<br /> 6. यथा वा उन्नतं पदमवाओय यो लघुर्हेलयैव स पतेदिति व्रुवन्।<br />  सहिलशेखरगतः पृषद्गणश्चारुमारुतधुतः पतत्यधः॥<br />अत्र गिरिशेखरगतः वृष्टिबिन्दुगणो मन्दमारुतमात्रेणापि कम्पितः पतन् लघोरुन्नतपदप्राप्तिः पतनहेतुरित्यसदर्थं बोधयन्निबद्ध इत्यसदर्थनिदर्शना।<br />चूडामणिपदे धत्ते यो देवं रविमागतम्।<br />7. सतां कार्याऽऽतिथेयीति बोधयन् गृहमेधिनः}} अत्र समागतं रविं शिरसा संभावयन्नुदयाअह्लः स्वनिष्ठ्या रविधारणक्रियया समागतानां सतामेवं गृहमेधिभिरातिथ्यं कार्यमिति सदर्तहं बोधयन्निबद्ध इति सदर्थनिदर्शना।<br />   अत्र केचित् वाक्यार्थवृत्ति-पदार्थवृत्तिनिदर्शनाद्वयमसंभवद्वस्तुसंबन्धनिवन्धनमिति, तृतीया तु संभवद्वस्तुसंबन्धनिवन्धनेति अह व्यवहरन्ति।<br /> 8. तथा हि – आद्यनिदर्शनायां वाक्यार्थयोरैक्यमसंभवत्तयोः साम्ये पर्यवसस्यति।<br />    तृतीयनिदर्शनायां तु स्वक्रियया परान्प्रति सदसदर्थबोधनं संभवदेव समतां गर्भीकरोति।<br /> ‘बोधयन् गृहमेधिनः’ इत्यादौ हि ‘कारीषोऽग्निः शीतापनयनेन बटूनध्ययनसमर्थान्करोति एवं वर्ण्यमानः पर्वतः स्वयमुपमानभावेन गृहमेधिन उक्तबोधनसमर्थान्कर्तुं क्षमते।<br /> यथाऽयं पर्वतः समागतं रविं शिरसा संभावयति, एवं गृहमेधी समागतं सन्तमुचितपूजया संभावयेदिति।<br /> अतः संभवति बोधनसंबन्ध इति॥५५-५६॥<br /></p>'
    },
    {
      title_eng: ' ',
      id: 19,
      common: '<a href="/exercises">Go to exercises</a>'
    }
  ]
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
