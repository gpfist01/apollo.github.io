var store = {};store['en'] = {};


        $(document).ready(function () {
        
            
            index  = lunr(function () {

            

                this.field('title', {boost: 10});
                this.field('body');
                this.ref('id');
            

        
this.add({ id: 1, 
title: "Product voice and tone", 
body: " product voice tone the  voice & tone section explains how write general sense. it explain voice & tone for: product copy technical documentation help articles non-marketing client documents (e.g., plan pdf)\n this does not apply for: marketing documents sales documents contracts legal documents difference voice tone a company's voice represents companies personality values. you identify loved one's voice crowd way content based voice. our consistant types identified above. tone  is akin someones attitude speaking. you say sentence certain way convey you're agitated excited. writing. by knowing writing writing, tailor word choices sentences motivational, supportive, more. your voice remain tone change depending user experience. " });
this.add({ id: 2, 
title: "Product voice strategy", 
body: " product voice strategy northwestern mutual creates products platforms myriad users. as such, need voice applicable useful any situation. we want enable users accomplish tasks rapidly comprehend complex information quickly. using unified platoforms. no matter words choose writing, voice remain same. our is: simple straightforward approachable encouraging clear concise we don't use jargon.\n\n we don't use big words excessive terminology sake it. when it, specific purpose make clear possible. we write similar how speak exude casual feel (e.g., using contractions, etc.).\n\n we aim positive language reasonable appropriate. we describe precisely what’s needed, unnecessary decoration, given audience.\n\n avoid creating new concepts things necessary.\n\n we aim content short possible sacrificing it's usefulness. " });
this.add({ id: 3, 
title: "Tone framework", 
body: " tone framework the correct tone relies user’s needs corresponding emotions experience. northwestern mutual's voice constant change suit user   tone guide the table shows how certain tones used, attitudes embody example. tone attitude frequency platform usage motivational positive encouraging we’re looking cheering on. you’ve got this! rarely cx, fx helpful polite respectful we know you’re busy, so we’ll make brief. occasionally px, cx, fx instructive neutral direct here information need. often px, cx, fx, hc reassuring professional reliable. we know you’re worried issue, we’re help. occasionally px, cx supportive concerned empathetic something bad happened understand how feel. we want inform, guide, support this. rarely cx the points spectrum aren’t necessarily binary. for example, right tone experience motivational helpful, exist points. " });
this.add({ id: 4, 
title: "Grammar & Mechanics", 
body: " grammar & mechanics the grammar & mechanics section contains symbols use clarify meaning structure language use. " });
this.add({ id: 5, 
title: "Grammar", 
body: " grammar the grammar section contains knowledge usage preferred prescribed forms speaking writing. " });
this.add({ id: 6, 
title: "Person", 
body: " person in general, write second person cx px. example : you add asset information accounts section. in instances writing fx products, appropriate write person. example : how client medical history? the image shows common pronouns used first, second, person. " });
this.add({ id: 7, 
title: "Singular They", 
body: " singular they it's ok use singular pronoun. as gender-neutral pronoun, helps include writing, it's line with conversational product voice. avoid writing \"he\/she,\" \"he she,\" alternating \"he\" \"she.\" correct: if question financial advisor, send message. they reply soon possible. incorrect: your advisor received message. he\/she reply soon possible. " });
this.add({ id: 8, 
title: "Contractions", 
body: " contractions contractions fine use. they conversational help shorten sentences, make sure use same, everyday words conversation. use common contractions, as it’s, you’re, that's, and don’t, to create friendly, informal tone. avoid ambiguous awkward contractions, as there’d, it’ll, and they’d. " });
this.add({ id: 9, 
title: "Mechanics", 
body: " mechanics the mechanics section review how use punctuation writing. " });
this.add({ id: 10, 
title: "Footnotes", 
body: " footnotes when using footnotes, first use asterisks (*, **, ***, ****). after that, use †, ‡ , §. if need than numbers starting with eighth footnote. footnote # icon use 1 * 2 ** 3 *** 4 **** 5 † 6 ‡ 7 § ≥8 use superscript numbers than 7 footnotes. e.g., lima1 " });
this.add({ id: 11, 
title: "Hyphens", 
body: " hyphens used join words indicate combined meaning linked grammar sentence (as in pick-me-up, rock-forming ), division word end line, missing implied element in short- long-term ). rule example use hyphens using hyphen cause confusion, words modifying word. e.g., consider phrase 'a high achieving student' vs. high-achieving student.' the latter correct, 'high' 'achieving' working modify word 'student.' otherwise, misconstrued student achieving. tech-savvy millennials professionally dressed construction workers i reevaluate life prenuptial agreementpre-tax dollars real-time progress we track progress real time. never hyphenate words end -ly. include hyphen prefix 're' word means 'again' and doing so cause confusion. e.g., 'repress' vs. 're-press.' if you’re unsure hyphenate prefix, check chicago manual style see correct form listed there. word question isn’t included cms, use merriam webster says. " });
this.add({ id: 12, 
title: "Periods", 
body: " periods a period (.) stop. it's a punctuation mark end sentence. it shows sentence finished. to complete clause, with verb subject. rules header example normal example if you're writing headline, don't use period. know dollar know dollar go. for header, use (duh). " });
this.add({ id: 13, 
title: "Oxford Comma", 
body: " oxford comma also called serial comma. the comma used penultimate item list items, ‘and’ ‘or’ (e.g., italian painter, sculptor, architect) rule correct incorrect use oxford comma possible. i bread, peanut butter, jelly lunch today. i bread, peanut butter jelly lunch today. " });
this.add({ id: 14, 
title: "Content Structure", 
body: " content structure the content structure section contains information how content look displayed experience. " });
this.add({ id: 15, 
title: "Data Formatting", 
body: " data formatting data type format examples usage time 6am 6:15pm 6:20pm est 7am ct no periods no lower case am\/pm no spaces time am\/pms space am\/pm timezone if time rounded hour, don't need minutes use central time default (where hq located) if need distinguish timezone [[ daylight savings ]] [[ review w\/ josh c ]] [[ talk w\/ gavin time rounding\/cutting minutes ]] [[ reasoning - space time pm detracts ]] dates current year: sep 13 past year: sept 13, 2016 future year: sept 13, 2040 no day: sept 2018 today: today yesterday: yesterday abbreviate month no period date comma date you're providing year no ordinal numbers timestamps absolute: sept 13 12:00pm relative: seconds ago 1-59 minutes ago 1-23 hours ago 1-30 days ago 1-11 months ago 1-xx years ago units switch minutes hours 59 (59 ago → 1 hour ago) units switch hours days 23 (23 ago -&amp;gt; 1 day) overtime references \"in x days\" when referring progress specific timeframe past. abbreviations jan\/feb\/mar\/apr\/may\/jun mon\/tue\/wed\/thur\/fri\/sat\/sun abbreviate days months charts & graphs daily increments: sept 1, 2, 3...31 \/ oct 3... dec 1 monthly increments: nov, dec, jan '18 (or 2018), feb, mar yearly:  jan '16  (or 2016) when deciding truncating year using year, evaluate space constraints constancy app\/page for monthly increments, carry year, say so. dollar amounts $1,102,071,842.51 → $1.1b $1,460,732.23 → $1.4m use design limited space:$12,500 → $12.5k $2500.55 → $2.5k for display situations dollar amounts larger than $1,000,000 abbreviated these abbreviations used higher level pages (ex: summary page) percentages 25.677% → 25.68% 25.67% → 25.7% 25.7% → 26% use % sign instead spelling word percent data redaction vanguard xxxxxx1234 when referring concealed account numbers, use lowercase \"x\" mask numbers last digits remain visible frequencies (e.g., daily, weekly, etc.) $x\/yr $x\/mo $x\/wk $x\/day $x\/hr $x\/min $x\/sec when need abbreviate unit time measurement nm phone number(s) 866-xxx-xxxx don't include parentheses area code " });
this.add({ id: 16, 
title: "Heading titles", 
body: " heading titles for headings, subheadings, titles, use sentence case opposed title case. sentence easier read, allows translations, distinguish proper noun. good example bad example how enter annuities px how enter annuities px   for information heading sizes, typography section ui toolkit. " });
this.add({ id: 17, 
title: "Hyperlinks", 
body: " hyperlinks when adding hyperlink document, video, webpage, use title destination text. this descriptive so users better understand them. for hyperlinks any action, don't ask user click here. it's better describe destination content. consider options like view see. correct: for information retirement, view retirement glance video. incorrect: for information retirement, click . " });
this.add({ id: 18, 
title: "Writing for UI Components", 
body: " writing ui components " });
this.add({ id: 19, 
title: "Button Labels", 
body: " button labels label length absolute max characters (including spaces):  15-20\n suggested characters (including spaces):  as possible maintaining clarity button action. title case use title case instead sentence case. good example:  delete insurance bad example:  delete insurance cta oriented labels labels call-to-actions (ctas) tell user action they'll complete click button. good example:  view pdf, add insurance, delete expense bad example:  pdf, no dialogs answering questions for dialog boxes modals copy language asks question, don't use ok, yes, no. instead, verbs indicate happen clicked. never yes ok verb instead. good example: discard draft? cancel    discard bad example: discard draft? no    yes additional resources: https:\/\/hackernoon.com\/let-the-action-buttons-in-the-dialog-box-scream-its-outcome-b319c5efc698 https:\/\/uxplanet.org\/primary-secondary-action-buttons-c16df9b36150 https:\/\/material.io\/design\/components\/dialogs.html#dialogs-alerts " });
this.add({ id: 20, 
title: "Calls to Action", 
body: " calls action general rules cta rule what means notes use title case capitalize letter way headline. like headlines, punctuation case-by-case. button: \"get started pay price\" button: \"got beef?\" title cta congruency frequently, button appears flow, header\/title. given context, it's important relationship title clear. title: \"are you sure?\"  button: \"yes, continue\" on flip side... button: \"connect account\" title screen: \"connect your bank america account\" use sentence case secondary ctas secondary cta (ctas aren't button underlined text) sentance case adding multiple thing when you're adding multiple things thing (e.g., add account, assign loan...) need say \"another\" button: \"add account\" bad example \"add another account\" specific ctas use cta connect account when connect account you're aggregating to nm.com and making available assign goal. assign account when assign connected account goal start tracking progress goal.when goal. this comes associating\/assigning accounts goals log signing secure account continue when inputting field larger process flow continues on. for example, you're setting security question registration longer registration, hit \"continue\" rest registration. submit when inputting field final step process ends flow. for example, you're setting security question standalone set up, you'd hit \"submit\" end flow with life. maybe later hyperlink cta, cta button, allows user action right lets know later. " });
this.add({ id: 21, 
title: "Error States", 
body: " error states error message rules rule explanation example error: xxxx errors written red, colorblind person able detect color realize severity messaging. **a design request submitted investigate solutions error states. error: this field left blank. " });
this.add({ id: 22, 
title: "Messages", 
body: " messages message type copy example where processing message we're processing request. don't refresh browser close window submitting requests nm.com loading experience message loading... wherever loading takes than 3 seconds experience survey request header: tell think. body: we value input! would like quick survey help improve experience? across cx experience " });
this.add({ id: 23, 
title: "Placeholder text", 
body: " placeholder text placeholder text, located inside form field, additional hint, description, example information required particular field. these hints typically disappear user types do don't use placeholder text provide clarity format data entered (e.g., dd\/mm\/yyyy).\n use placeholder text sparingly. use placeholder text user enter isn't obvious. don't overuse placeholder text. don't use placeholder text commonly understood fields (e.g., name, description, net income). " });
this.add({ id: 24, 
title: "Notes, Tips, Warnings, and Errors", 
body: " notes, tips, warnings, errors notes : used things aren't necessarily need know, won't irreversible unintended consequences. tips : added information make users experience easier, isn't crucial completing task hand. warnings : reserved potential data loss unintended consequences (irreversibly change something), user able proceed. errors : if issue blocks user proceeding, presented error message. " });
this.add({ id: 25, 
title: "Word List", 
body: " word list " });
this.add({ id: 26, 
title: "Frequently Used Terms", 
body: " frequently used terms term avoid term use instead pop up, popup pop-up sub header, sub-header subheader drop down, drop-down dropdown tool barm tool-bar toolbar screen shot, screen-shot screenshot read read-only home screen home page etc. for example, e,g., that (don't use place 'for example') draw down drawdown (only used noun) dialog box, window modal term definition alert any message user ignore. example, invalid input brings alert letting know change value entered continuing. notification any message user ignore. " });
this.add({ id: 27, 
title: "NM Word List", 
body: " nm word list the nm word list section contains terminology, northwestern mutual products sites, how they're used, definition, addtional details. " });
this.add({ id: 28, 
title: "PX Factfinder, eFactfinder & factfinder", 
body: " px factfinder, efactfinder & factfinder definition efactfinder new px factfinder tools frs use with client gather facts them. those used build plan. usage notes when referring tools: use don't use efactfinder efactfinder px factfinder efactfinder efactfinder efactfinder when referring finding facts verb use don't use factfinder factfinder factfinder (when starting sentence section heading) factfinder " });
this.add({ id: 29, 
title: "No-Nos", 
body: " no-nos word\/action reasoning abbreviating northwestern mutual \"nm\" client facing material legal strongly advised abbreviation. \"nm\" referred life company don't want users think acting broker\/dealer. calling specific, non-credentialed (or unknown credentialed) fr \"advisor\" we use term advisor refer fr's northwesternmutual.com, there's disclaimer stating doesn't necessarily apply everyone. this because, technically–and legally-- officially credentialed one. cash value, surrender &amp; net value now it's accumulated value. new regulations led nm add new component design whole life products called dividends upon surrender (dus).  the dus dividend paid owner surrender (full partial) policy (and, new york, death). just like annual dividends, dus subject board discretion guaranteed.  exclusive uu series contracts applies wl plus survivorship additional background regulations require companies selling whole life hold higher reserves (company liabilities future claims). nm’s focus long term product value (i.e. cv rate return) mutual values led introduce dividends upon surrender. while policy force, extra reserves work client generally increase annual dividends. if wl policy surrendered, longer hold reserves.  in acknowledgement premiums paid extra reserves, plan pay form dus. nest egg too colloquial, so ceased using term px. refer \"fund\" instead emergency fund, retirement etc. " });

        store['en'][1]= {
        'title': "Product voice and tone",
        'href': 'UUID-0a64543d-01fe-a6c8-ebbc-47174c9bdf3d.html'
        
            , 'breadcrumbs': "Style Guide \/ Product voice and tone"
                , 'snippet': ''
            
        };
        
        

        store['en'][2]= {
        'title': "Product voice strategy",
        'href': 'UUID-d12d71ad-ebce-377f-8c29-aa1b25a97cf5.html'
        
            , 'breadcrumbs': "Style Guide \/ Product voice and tone \/ Product voice strategy"
                , 'snippet': ''
            
        };
        
        

        store['en'][3]= {
        'title': "Tone framework",
        'href': 'UUID-db74125f-80b9-a6c3-1703-7d38e3bedd12.html'
        
            , 'breadcrumbs': "Style Guide \/ Product voice and tone \/ Tone framework"
                , 'snippet': ''
            
        };
        
        

        store['en'][4]= {
        'title': "Grammar & Mechanics",
        'href': 'UUID-39a28eab-1ed0-d6af-c451-69030c8e45dd.html'
        
            , 'breadcrumbs': "Style Guide \/ Grammar & Mechanics"
                , 'snippet': ''
            
        };
        
        

        store['en'][5]= {
        'title': "Grammar",
        'href': 'UUID-99e26553-e3c9-10e7-e15c-63760ae29ce7.html'
        
            , 'breadcrumbs': "Style Guide \/ Grammar & Mechanics \/ Grammar"
                , 'snippet': ''
            
        };
        
        

        store['en'][6]= {
        'title': "Person",
        'href': 'UUID-12802e7e-163f-fcc0-e181-fce67dce0a64.html'
        
            , 'breadcrumbs': "Style Guide \/ Grammar & Mechanics \/ Grammar \/ Person"
                , 'snippet': ''
            
        };
        
        

        store['en'][7]= {
        'title': "Singular They",
        'href': 'UUID-8451aafc-f0fc-d0c5-4411-e9c7d7db85b8.html'
        
            , 'breadcrumbs': "Style Guide \/ Grammar & Mechanics \/ Grammar \/ Singular They"
                , 'snippet': ''
            
        };
        
        

        store['en'][8]= {
        'title': "Contractions",
        'href': 'UUID-a5f34e97-e69d-06d6-40e5-60d16779ccc7.html'
        
            , 'breadcrumbs': "Style Guide \/ Grammar & Mechanics \/ Grammar \/ Contractions"
                , 'snippet': ''
            
        };
        
        

        store['en'][9]= {
        'title': "Mechanics",
        'href': 'UUID-ac89c282-345f-3c45-f4cf-802e593e0820.html'
        
            , 'breadcrumbs': "Style Guide \/ Grammar & Mechanics \/ Mechanics"
                , 'snippet': ''
            
        };
        
        

        store['en'][10]= {
        'title': "Footnotes",
        'href': 'UUID-3187de77-cd98-53d2-2139-559d7e3e82db.html'
        
            , 'breadcrumbs': "Style Guide \/ Grammar & Mechanics \/ Mechanics \/ Footnotes"
                , 'snippet': ''
            
        };
        
        

        store['en'][11]= {
        'title': "Hyphens",
        'href': 'UUID-55014ca8-d6a8-14ca-c722-13d3664317c1.html'
        
            , 'breadcrumbs': "Style Guide \/ Grammar & Mechanics \/ Mechanics \/ Hyphens"
                , 'snippet': ''
            
        };
        
        

        store['en'][12]= {
        'title': "Periods",
        'href': 'UUID-5ca2d404-1883-f278-6b90-90727486abd2.html'
        
            , 'breadcrumbs': "Style Guide \/ Grammar & Mechanics \/ Mechanics \/ Periods"
                , 'snippet': ''
            
        };
        
        

        store['en'][13]= {
        'title': "Oxford Comma",
        'href': 'UUID-395fb310-fa93-f0a0-0c6a-eed75c28e531.html'
        
            , 'breadcrumbs': "Style Guide \/ Grammar & Mechanics \/ Mechanics \/ Oxford Comma"
                , 'snippet': ''
            
        };
        
        

        store['en'][14]= {
        'title': "Content Structure",
        'href': 'UUID-a58e9b25-45ea-eb47-7210-1ed69cda3ca8.html'
        
            , 'breadcrumbs': "Style Guide \/ Content Structure"
                , 'snippet': ''
            
        };
        
        

        store['en'][15]= {
        'title': "Data Formatting",
        'href': 'UUID-6ae950aa-ec48-99ea-b13a-b237fb71602d.html'
        
            , 'breadcrumbs': "Style Guide \/ Content Structure \/ Data Formatting"
                , 'snippet': ''
            
        };
        
        

        store['en'][16]= {
        'title': "Heading titles",
        'href': 'UUID-ca387ca8-e3f8-1f88-cec4-b14536fe88c2.html'
        
            , 'breadcrumbs': "Style Guide \/ Content Structure \/ Heading titles"
                , 'snippet': ''
            
        };
        
        

        store['en'][17]= {
        'title': "Hyperlinks",
        'href': 'UUID-2a51cf34-640e-c1d1-10c8-efe02cf43b72.html'
        
            , 'breadcrumbs': "Style Guide \/ Content Structure \/ Hyperlinks"
                , 'snippet': ''
            
        };
        
        

        store['en'][18]= {
        'title': "Writing for UI Components",
        'href': 'UUID-2924f08b-31d2-2d81-f517-927116962d21.html'
        
            , 'breadcrumbs': "Style Guide \/ Writing for UI Components"
                , 'snippet': ''
            
        };
        
        

        store['en'][19]= {
        'title': "Button Labels",
        'href': 'UUID-f9ebcaae-ea87-3b24-d975-1d9e25f1d8a4.html'
        
            , 'breadcrumbs': "Style Guide \/ Writing for UI Components \/ Button Labels"
                , 'snippet': ''
            
        };
        
        

        store['en'][20]= {
        'title': "Calls to Action",
        'href': 'UUID-b51f29c1-4af9-d957-d6a6-e3e249de4a70.html'
        
            , 'breadcrumbs': "Style Guide \/ Writing for UI Components \/ Calls to Action"
                , 'snippet': ''
            
        };
        
        

        store['en'][21]= {
        'title': "Error States",
        'href': 'UUID-7df6636f-42ac-29c3-d6df-0a45d041de55.html'
        
            , 'breadcrumbs': "Style Guide \/ Writing for UI Components \/ Error States"
                , 'snippet': ''
            
        };
        
        

        store['en'][22]= {
        'title': "Messages",
        'href': 'UUID-fec0c3ad-029a-1397-699d-e6b6a639c195.html'
        
            , 'breadcrumbs': "Style Guide \/ Writing for UI Components \/ Messages"
                , 'snippet': ''
            
        };
        
        

        store['en'][23]= {
        'title': "Placeholder text",
        'href': 'UUID-ed66f3fc-4c5e-5584-96c8-8c17e53d1b27.html'
        
            , 'breadcrumbs': "Style Guide \/ Writing for UI Components \/ Placeholder text"
                , 'snippet': ''
            
        };
        
        

        store['en'][24]= {
        'title': "Notes, Tips, Warnings, and Errors",
        'href': 'UUID-bd051340-0893-14bc-295a-4db702d9fcc7.html'
        
            , 'breadcrumbs': "Style Guide \/ Writing for UI Components \/ Notes, Tips, Warnings, and Errors"
                , 'snippet': ''
            
        };
        
        

        store['en'][25]= {
        'title': "Word List",
        'href': 'UUID-9691a6b8-0903-1ad6-56c4-35d9f3e57caf.html'
        
            , 'breadcrumbs': "Style Guide \/ Word List"
                , 'snippet': ''
            
        };
        
        

        store['en'][26]= {
        'title': "Frequently Used Terms",
        'href': 'UUID-8d625659-39fa-fba0-2860-c3a2acaca4c3.html'
        
            , 'breadcrumbs': "Style Guide \/ Word List \/ Frequently Used Terms"
                , 'snippet': ''
            
        };
        
        

        store['en'][27]= {
        'title': "NM Word List",
        'href': 'UUID-cb60f709-cc6c-188f-7661-7b51bd19f221.html'
        
            , 'breadcrumbs': "Style Guide \/ NM Word List"
                , 'snippet': ''
            
        };
        
        

        store['en'][28]= {
        'title': "PX Factfinder, eFactfinder & factfinder",
        'href': 'UUID-2c624170-d4fe-100c-38a4-a7a30265f8f4.html'
        
            , 'breadcrumbs': "Style Guide \/ NM Word List \/ PX Factfinder, eFactfinder & factfinder"
                , 'snippet': ''
            
        };
        
        

        store['en'][29]= {
        'title': "No-Nos",
        'href': 'UUID-dd263021-b539-3601-db68-accba4f942b2.html'
        
            , 'breadcrumbs': "Style Guide \/ NM Word List \/ No-Nos"
                , 'snippet': ''
            
        };
        
        


            });

            $(document).trigger('search.ready');
       }); 

        