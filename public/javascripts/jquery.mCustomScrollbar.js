



<!DOCTYPE html>
<html>
<head>
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = null;
 
 
 var CS_env = {"profileUrl":null,"token":null,"assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/16216231599268812631","projectHomeUrl":"/p/sabconnectplusplus","relativeBaseUrl":"","projectName":"sabconnectplusplus","loggedInUserEmail":null};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 
 </script>
 
 
 <title>jquery.mCustomScrollbar.js - 
 sabconnectplusplus -
 
 
 SABnzbd extension for Google Chrome - Google Project Hosting
 </title>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16216231599268812631/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16216231599268812631/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16216231599268812631/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16216231599268812631/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 <a href="#" id="projects-dropdown" onclick="return false;"><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=http%3A%2F%2Fcode.google.com%2Fp%2Fsabconnectplusplus%2Fsource%2Fbrowse%2Fbranches%2Fnew-popup%2Fthird_party%2Fjquery%2Fjquery.mCustomScrollbar.js%3Fr%3D178&amp;followup=http%3A%2F%2Fcode.google.com%2Fp%2Fsabconnectplusplus%2Fsource%2Fbrowse%2Fbranches%2Fnew-popup%2Fthird_party%2Fjquery%2Fjquery.mCustomScrollbar.js%3Fr%3D178" onclick="_CS_click('/gb/ph/signin');"><u>Sign in</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->




 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 <td id="plogo">
 <link itemprop="url" href="/p/sabconnectplusplus">
 <a href="/p/sabconnectplusplus/">
 
 
 <img src="/p/sabconnectplusplus/logo?cct=1318380808"
 alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/sabconnectplusplus/"><span itemprop="name">sabconnectplusplus</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/sabconnectplusplus/"><span itemprop="description">SABnzbd extension for Google Chrome</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/sabconnectplusplus/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 
 
 <a href="/p/sabconnectplusplus/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/sabconnectplusplus/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/sabconnectplusplus/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/p/sabconnectplusplus/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/sabconnectplusplus/source/browse/trunk">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/sabconnectplusplus/source/list">Changes</a></span> &nbsp;
 
 &nbsp;
 
 <form action="/p/sabconnectplusplus/source/search" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 
 
 
 
 
 </form>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 
<!-- IE -->




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/sabconnectplusplus/source/browse/?r=178">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/sabconnectplusplus/source/browse/branches/?r=178">branches</a><span class="sp">/&nbsp;</span><a href="/p/sabconnectplusplus/source/browse/branches/new-popup/?r=178">new-popup</a><span class="sp">/&nbsp;</span><a href="/p/sabconnectplusplus/source/browse/branches/new-popup/third_party/?r=178">third_party</a><span class="sp">/&nbsp;</span><a href="/p/sabconnectplusplus/source/browse/branches/new-popup/third_party/jquery/?r=178">jquery</a><span class="sp">/&nbsp;</span>jquery.mCustomScrollbar.js</span>
 
 

 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper"><b>r178</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn178_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn178_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn178_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn178_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn178_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn178_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn178_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn178_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn178_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn178_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn178_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn178_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn178_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn178_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn178_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn178_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn178_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn178_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn178_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn178_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn178_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn178_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn178_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn178_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn178_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn178_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn178_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn178_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn178_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn178_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn178_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn178_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn178_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn178_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn178_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn178_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn178_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn178_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn178_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn178_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn178_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn178_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn178_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn178_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn178_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn178_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn178_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn178_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn178_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn178_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn178_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn178_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn178_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn178_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn178_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn178_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn178_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn178_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn178_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn178_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn178_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn178_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn178_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn178_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn178_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn178_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn178_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn178_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn178_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn178_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn178_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn178_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn178_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn178_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn178_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn178_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn178_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn178_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn178_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn178_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn178_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn178_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn178_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn178_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn178_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn178_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn178_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn178_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn178_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn178_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn178_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn178_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn178_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn178_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn178_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn178_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn178_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn178_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn178_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn178_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn178_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn178_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn178_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn178_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn178_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn178_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn178_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn178_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn178_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn178_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn178_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn178_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn178_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn178_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn178_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn178_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn178_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn178_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn178_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn178_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn178_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn178_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn178_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn178_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn178_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn178_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn178_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn178_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn178_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn178_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn178_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn178_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn178_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn178_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn178_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn178_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn178_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn178_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn178_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn178_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn178_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn178_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn178_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn178_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn178_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn178_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn178_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn178_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn178_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn178_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn178_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn178_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn178_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn178_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn178_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn178_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn178_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn178_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn178_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn178_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn178_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn178_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn178_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn178_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn178_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn178_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn178_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn178_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn178_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn178_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn178_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn178_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn178_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn178_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn178_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn178_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn178_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn178_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn178_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn178_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn178_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn178_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn178_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn178_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn178_185"

><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn178_186"

><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn178_187"

><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn178_188"

><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn178_189"

><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn178_190"

><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn178_191"

><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn178_192"

><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn178_193"

><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn178_194"

><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn178_195"

><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn178_196"

><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn178_197"

><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn178_198"

><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn178_199"

><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn178_200"

><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn178_201"

><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn178_202"

><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn178_203"

><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn178_204"

><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn178_205"

><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn178_206"

><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn178_207"

><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn178_208"

><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn178_209"

><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn178_210"

><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn178_211"

><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn178_212"

><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn178_213"

><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn178_214"

><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn178_215"

><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn178_216"

><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn178_217"

><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn178_218"

><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn178_219"

><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn178_220"

><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn178_221"

><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn178_222"

><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn178_223"

><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn178_224"

><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn178_225"

><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn178_226"

><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn178_227"

><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn178_228"

><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn178_229"

><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn178_230"

><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn178_231"

><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn178_232"

><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn178_233"

><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn178_234"

><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn178_235"

><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn178_236"

><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn178_237"

><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn178_238"

><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn178_239"

><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn178_240"

><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn178_241"

><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn178_242"

><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn178_243"

><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn178_244"

><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn178_245"

><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn178_246"

><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn178_247"

><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn178_248"

><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn178_249"

><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn178_250"

><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn178_251"

><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn178_252"

><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn178_253"

><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn178_254"

><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn178_255"

><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn178_256"

><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn178_257"

><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn178_258"

><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn178_259"

><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn178_260"

><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn178_261"

><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn178_262"

><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn178_263"

><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn178_264"

><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn178_265"

><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn178_266"

><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn178_267"

><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn178_268"

><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn178_269"

><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn178_270"

><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn178_271"

><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn178_272"

><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn178_273"

><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn178_274"

><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn178_275"

><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn178_276"

><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn178_277"

><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn178_278"

><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn178_279"

><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn178_280"

><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn178_281"

><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn178_282"

><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn178_283"

><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn178_284"

><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn178_285"

><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn178_286"

><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn178_287"

><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn178_288"

><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn178_289"

><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn178_290"

><td id="290"><a href="#290">290</a></td></tr
><tr id="gr_svn178_291"

><td id="291"><a href="#291">291</a></td></tr
><tr id="gr_svn178_292"

><td id="292"><a href="#292">292</a></td></tr
><tr id="gr_svn178_293"

><td id="293"><a href="#293">293</a></td></tr
><tr id="gr_svn178_294"

><td id="294"><a href="#294">294</a></td></tr
><tr id="gr_svn178_295"

><td id="295"><a href="#295">295</a></td></tr
><tr id="gr_svn178_296"

><td id="296"><a href="#296">296</a></td></tr
><tr id="gr_svn178_297"

><td id="297"><a href="#297">297</a></td></tr
><tr id="gr_svn178_298"

><td id="298"><a href="#298">298</a></td></tr
><tr id="gr_svn178_299"

><td id="299"><a href="#299">299</a></td></tr
><tr id="gr_svn178_300"

><td id="300"><a href="#300">300</a></td></tr
><tr id="gr_svn178_301"

><td id="301"><a href="#301">301</a></td></tr
><tr id="gr_svn178_302"

><td id="302"><a href="#302">302</a></td></tr
><tr id="gr_svn178_303"

><td id="303"><a href="#303">303</a></td></tr
><tr id="gr_svn178_304"

><td id="304"><a href="#304">304</a></td></tr
><tr id="gr_svn178_305"

><td id="305"><a href="#305">305</a></td></tr
><tr id="gr_svn178_306"

><td id="306"><a href="#306">306</a></td></tr
><tr id="gr_svn178_307"

><td id="307"><a href="#307">307</a></td></tr
><tr id="gr_svn178_308"

><td id="308"><a href="#308">308</a></td></tr
><tr id="gr_svn178_309"

><td id="309"><a href="#309">309</a></td></tr
><tr id="gr_svn178_310"

><td id="310"><a href="#310">310</a></td></tr
><tr id="gr_svn178_311"

><td id="311"><a href="#311">311</a></td></tr
><tr id="gr_svn178_312"

><td id="312"><a href="#312">312</a></td></tr
><tr id="gr_svn178_313"

><td id="313"><a href="#313">313</a></td></tr
><tr id="gr_svn178_314"

><td id="314"><a href="#314">314</a></td></tr
><tr id="gr_svn178_315"

><td id="315"><a href="#315">315</a></td></tr
><tr id="gr_svn178_316"

><td id="316"><a href="#316">316</a></td></tr
><tr id="gr_svn178_317"

><td id="317"><a href="#317">317</a></td></tr
><tr id="gr_svn178_318"

><td id="318"><a href="#318">318</a></td></tr
><tr id="gr_svn178_319"

><td id="319"><a href="#319">319</a></td></tr
><tr id="gr_svn178_320"

><td id="320"><a href="#320">320</a></td></tr
><tr id="gr_svn178_321"

><td id="321"><a href="#321">321</a></td></tr
><tr id="gr_svn178_322"

><td id="322"><a href="#322">322</a></td></tr
><tr id="gr_svn178_323"

><td id="323"><a href="#323">323</a></td></tr
><tr id="gr_svn178_324"

><td id="324"><a href="#324">324</a></td></tr
><tr id="gr_svn178_325"

><td id="325"><a href="#325">325</a></td></tr
><tr id="gr_svn178_326"

><td id="326"><a href="#326">326</a></td></tr
><tr id="gr_svn178_327"

><td id="327"><a href="#327">327</a></td></tr
><tr id="gr_svn178_328"

><td id="328"><a href="#328">328</a></td></tr
><tr id="gr_svn178_329"

><td id="329"><a href="#329">329</a></td></tr
><tr id="gr_svn178_330"

><td id="330"><a href="#330">330</a></td></tr
><tr id="gr_svn178_331"

><td id="331"><a href="#331">331</a></td></tr
><tr id="gr_svn178_332"

><td id="332"><a href="#332">332</a></td></tr
><tr id="gr_svn178_333"

><td id="333"><a href="#333">333</a></td></tr
><tr id="gr_svn178_334"

><td id="334"><a href="#334">334</a></td></tr
><tr id="gr_svn178_335"

><td id="335"><a href="#335">335</a></td></tr
><tr id="gr_svn178_336"

><td id="336"><a href="#336">336</a></td></tr
><tr id="gr_svn178_337"

><td id="337"><a href="#337">337</a></td></tr
><tr id="gr_svn178_338"

><td id="338"><a href="#338">338</a></td></tr
><tr id="gr_svn178_339"

><td id="339"><a href="#339">339</a></td></tr
><tr id="gr_svn178_340"

><td id="340"><a href="#340">340</a></td></tr
><tr id="gr_svn178_341"

><td id="341"><a href="#341">341</a></td></tr
><tr id="gr_svn178_342"

><td id="342"><a href="#342">342</a></td></tr
><tr id="gr_svn178_343"

><td id="343"><a href="#343">343</a></td></tr
><tr id="gr_svn178_344"

><td id="344"><a href="#344">344</a></td></tr
><tr id="gr_svn178_345"

><td id="345"><a href="#345">345</a></td></tr
><tr id="gr_svn178_346"

><td id="346"><a href="#346">346</a></td></tr
><tr id="gr_svn178_347"

><td id="347"><a href="#347">347</a></td></tr
><tr id="gr_svn178_348"

><td id="348"><a href="#348">348</a></td></tr
><tr id="gr_svn178_349"

><td id="349"><a href="#349">349</a></td></tr
><tr id="gr_svn178_350"

><td id="350"><a href="#350">350</a></td></tr
><tr id="gr_svn178_351"

><td id="351"><a href="#351">351</a></td></tr
><tr id="gr_svn178_352"

><td id="352"><a href="#352">352</a></td></tr
><tr id="gr_svn178_353"

><td id="353"><a href="#353">353</a></td></tr
><tr id="gr_svn178_354"

><td id="354"><a href="#354">354</a></td></tr
><tr id="gr_svn178_355"

><td id="355"><a href="#355">355</a></td></tr
><tr id="gr_svn178_356"

><td id="356"><a href="#356">356</a></td></tr
><tr id="gr_svn178_357"

><td id="357"><a href="#357">357</a></td></tr
><tr id="gr_svn178_358"

><td id="358"><a href="#358">358</a></td></tr
><tr id="gr_svn178_359"

><td id="359"><a href="#359">359</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn178_1

><td class="source">/* malihu custom scrollbar plugin - http://manos.malihu.gr */<br></td></tr
><tr
id=sl_svn178_2

><td class="source">(function ($) {<br></td></tr
><tr
id=sl_svn178_3

><td class="source">$.fn.mCustomScrollbar = function (scrollType,animSpeed,easeType,bottomSpace,draggerDimType,mouseWheelSupport,scrollBtnsSupport,scrollBtnsSpeed){<br></td></tr
><tr
id=sl_svn178_4

><td class="source">	var id = $(this).attr(&quot;id&quot;);<br></td></tr
><tr
id=sl_svn178_5

><td class="source">	var $customScrollBox=$(&quot;#&quot;+id+&quot; .customScrollBox&quot;);<br></td></tr
><tr
id=sl_svn178_6

><td class="source">	var $customScrollBox_container=$(&quot;#&quot;+id+&quot; .customScrollBox .container&quot;);<br></td></tr
><tr
id=sl_svn178_7

><td class="source">	var $customScrollBox_content=$(&quot;#&quot;+id+&quot; .customScrollBox .content&quot;);<br></td></tr
><tr
id=sl_svn178_8

><td class="source">	var $dragger_container=$(&quot;#&quot;+id+&quot; .dragger_container&quot;);<br></td></tr
><tr
id=sl_svn178_9

><td class="source">	var $dragger=$(&quot;#&quot;+id+&quot; .dragger&quot;);<br></td></tr
><tr
id=sl_svn178_10

><td class="source">	var $scrollUpBtn=$(&quot;#&quot;+id+&quot; .scrollUpBtn&quot;);<br></td></tr
><tr
id=sl_svn178_11

><td class="source">	var $scrollDownBtn=$(&quot;#&quot;+id+&quot; .scrollDownBtn&quot;);<br></td></tr
><tr
id=sl_svn178_12

><td class="source">	var $customScrollBox_horWrapper=$(&quot;#&quot;+id+&quot; .customScrollBox .horWrapper&quot;);<br></td></tr
><tr
id=sl_svn178_13

><td class="source">	<br></td></tr
><tr
id=sl_svn178_14

><td class="source">	//get &amp; store minimum dragger height &amp; width (defined in css)<br></td></tr
><tr
id=sl_svn178_15

><td class="source">	if(!$customScrollBox.data(&quot;minDraggerHeight&quot;)){<br></td></tr
><tr
id=sl_svn178_16

><td class="source">		$customScrollBox.data(&quot;minDraggerHeight&quot;,$dragger.height());<br></td></tr
><tr
id=sl_svn178_17

><td class="source">	}<br></td></tr
><tr
id=sl_svn178_18

><td class="source">	if(!$customScrollBox.data(&quot;minDraggerWidth&quot;)){<br></td></tr
><tr
id=sl_svn178_19

><td class="source">		$customScrollBox.data(&quot;minDraggerWidth&quot;,$dragger.width());<br></td></tr
><tr
id=sl_svn178_20

><td class="source">	}<br></td></tr
><tr
id=sl_svn178_21

><td class="source">	<br></td></tr
><tr
id=sl_svn178_22

><td class="source">	//get &amp; store original content height &amp; width<br></td></tr
><tr
id=sl_svn178_23

><td class="source">	if(!$customScrollBox.data(&quot;contentHeight&quot;)){<br></td></tr
><tr
id=sl_svn178_24

><td class="source">		$customScrollBox.data(&quot;contentHeight&quot;,$customScrollBox_container.height());<br></td></tr
><tr
id=sl_svn178_25

><td class="source">	}<br></td></tr
><tr
id=sl_svn178_26

><td class="source">	if(!$customScrollBox.data(&quot;contentWidth&quot;)){<br></td></tr
><tr
id=sl_svn178_27

><td class="source">		$customScrollBox.data(&quot;contentWidth&quot;,$customScrollBox_container.width());<br></td></tr
><tr
id=sl_svn178_28

><td class="source">	}<br></td></tr
><tr
id=sl_svn178_29

><td class="source">	<br></td></tr
><tr
id=sl_svn178_30

><td class="source">	CustomScroller();<br></td></tr
><tr
id=sl_svn178_31

><td class="source">	<br></td></tr
><tr
id=sl_svn178_32

><td class="source">	function CustomScroller(reloadType){<br></td></tr
><tr
id=sl_svn178_33

><td class="source">		//horizontal scrolling ------------------------------<br></td></tr
><tr
id=sl_svn178_34

><td class="source">		if(scrollType==&quot;horizontal&quot;){<br></td></tr
><tr
id=sl_svn178_35

><td class="source">			var visibleWidth=$customScrollBox.width();<br></td></tr
><tr
id=sl_svn178_36

><td class="source">			//set content width automatically<br></td></tr
><tr
id=sl_svn178_37

><td class="source">			$customScrollBox_horWrapper.css(&quot;width&quot;,999999); //set a rediculously high width value ;)<br></td></tr
><tr
id=sl_svn178_38

><td class="source">			$customScrollBox.data(&quot;totalContent&quot;,$customScrollBox_container.width()); //get inline div width<br></td></tr
><tr
id=sl_svn178_39

><td class="source">			$customScrollBox_horWrapper.css(&quot;width&quot;,$customScrollBox.data(&quot;totalContent&quot;)); //set back the proper content width value<br></td></tr
><tr
id=sl_svn178_40

><td class="source">			<br></td></tr
><tr
id=sl_svn178_41

><td class="source">			if($customScrollBox_container.width()&gt;visibleWidth){ //enable scrollbar if content is long<br></td></tr
><tr
id=sl_svn178_42

><td class="source">				$dragger.css(&quot;display&quot;,&quot;block&quot;);<br></td></tr
><tr
id=sl_svn178_43

><td class="source">				if(reloadType!=&quot;resize&quot; &amp;&amp; $customScrollBox_container.width()!=$customScrollBox.data(&quot;contentWidth&quot;)){<br></td></tr
><tr
id=sl_svn178_44

><td class="source">					$dragger.css(&quot;left&quot;,0);<br></td></tr
><tr
id=sl_svn178_45

><td class="source">					$customScrollBox_container.css(&quot;left&quot;,0);<br></td></tr
><tr
id=sl_svn178_46

><td class="source">					$customScrollBox.data(&quot;contentWidth&quot;,$customScrollBox_container.width());<br></td></tr
><tr
id=sl_svn178_47

><td class="source">				}<br></td></tr
><tr
id=sl_svn178_48

><td class="source">				$dragger_container.css(&quot;display&quot;,&quot;block&quot;);<br></td></tr
><tr
id=sl_svn178_49

><td class="source">				$scrollDownBtn.css(&quot;display&quot;,&quot;inline-block&quot;);<br></td></tr
><tr
id=sl_svn178_50

><td class="source">				$scrollUpBtn.css(&quot;display&quot;,&quot;inline-block&quot;);<br></td></tr
><tr
id=sl_svn178_51

><td class="source">				var totalContent=$customScrollBox_content.width();<br></td></tr
><tr
id=sl_svn178_52

><td class="source">				var minDraggerWidth=$customScrollBox.data(&quot;minDraggerWidth&quot;);<br></td></tr
><tr
id=sl_svn178_53

><td class="source">				var draggerContainerWidth=$dragger_container.width();<br></td></tr
><tr
id=sl_svn178_54

><td class="source">		<br></td></tr
><tr
id=sl_svn178_55

><td class="source">				function AdjustDraggerWidth(){<br></td></tr
><tr
id=sl_svn178_56

><td class="source">					if(draggerDimType==&quot;auto&quot;){<br></td></tr
><tr
id=sl_svn178_57

><td class="source">						var adjDraggerWidth=Math.round(totalContent-((totalContent-visibleWidth)*1.3)); //adjust dragger width analogous to content<br></td></tr
><tr
id=sl_svn178_58

><td class="source">						if(adjDraggerWidth&lt;=minDraggerWidth){ //minimum dragger width<br></td></tr
><tr
id=sl_svn178_59

><td class="source">							$dragger.css(&quot;width&quot;,minDraggerWidth+&quot;px&quot;);<br></td></tr
><tr
id=sl_svn178_60

><td class="source">						} else if(adjDraggerWidth&gt;=draggerContainerWidth){<br></td></tr
><tr
id=sl_svn178_61

><td class="source">							$dragger.css(&quot;width&quot;,draggerContainerWidth-10+&quot;px&quot;);<br></td></tr
><tr
id=sl_svn178_62

><td class="source">						} else {<br></td></tr
><tr
id=sl_svn178_63

><td class="source">							$dragger.css(&quot;width&quot;,adjDraggerWidth+&quot;px&quot;);<br></td></tr
><tr
id=sl_svn178_64

><td class="source">						}<br></td></tr
><tr
id=sl_svn178_65

><td class="source">					}<br></td></tr
><tr
id=sl_svn178_66

><td class="source">				}<br></td></tr
><tr
id=sl_svn178_67

><td class="source">				AdjustDraggerWidth();<br></td></tr
><tr
id=sl_svn178_68

><td class="source">		<br></td></tr
><tr
id=sl_svn178_69

><td class="source">				var targX=0;<br></td></tr
><tr
id=sl_svn178_70

><td class="source">				var draggerWidth=$dragger.width();<br></td></tr
><tr
id=sl_svn178_71

><td class="source">				$dragger.draggable({ <br></td></tr
><tr
id=sl_svn178_72

><td class="source">					axis: &quot;x&quot;, <br></td></tr
><tr
id=sl_svn178_73

><td class="source">					containment: &quot;parent&quot;, <br></td></tr
><tr
id=sl_svn178_74

><td class="source">					drag: function(event, ui) {<br></td></tr
><tr
id=sl_svn178_75

><td class="source">						ScrollX();<br></td></tr
><tr
id=sl_svn178_76

><td class="source">					}, <br></td></tr
><tr
id=sl_svn178_77

><td class="source">					stop: function(event, ui) {<br></td></tr
><tr
id=sl_svn178_78

><td class="source">						DraggerRelease();<br></td></tr
><tr
id=sl_svn178_79

><td class="source">					}<br></td></tr
><tr
id=sl_svn178_80

><td class="source">				});<br></td></tr
><tr
id=sl_svn178_81

><td class="source">			<br></td></tr
><tr
id=sl_svn178_82

><td class="source">				$dragger_container.click(function(e) {<br></td></tr
><tr
id=sl_svn178_83

><td class="source">					var $this=$(this);<br></td></tr
><tr
id=sl_svn178_84

><td class="source">					var mouseCoord=(e.pageX - $this.offset().left);<br></td></tr
><tr
id=sl_svn178_85

><td class="source">					if(mouseCoord&lt;$dragger.position().left || mouseCoord&gt;($dragger.position().left+$dragger.width())){<br></td></tr
><tr
id=sl_svn178_86

><td class="source">						var targetPos=mouseCoord+$dragger.width();<br></td></tr
><tr
id=sl_svn178_87

><td class="source">						if(targetPos&lt;$dragger_container.width()){<br></td></tr
><tr
id=sl_svn178_88

><td class="source">							$dragger.css(&quot;left&quot;,mouseCoord);<br></td></tr
><tr
id=sl_svn178_89

><td class="source">							ScrollX();<br></td></tr
><tr
id=sl_svn178_90

><td class="source">						} else {<br></td></tr
><tr
id=sl_svn178_91

><td class="source">							$dragger.css(&quot;left&quot;,$dragger_container.width()-$dragger.width());<br></td></tr
><tr
id=sl_svn178_92

><td class="source">							ScrollX();<br></td></tr
><tr
id=sl_svn178_93

><td class="source">						}<br></td></tr
><tr
id=sl_svn178_94

><td class="source">					}<br></td></tr
><tr
id=sl_svn178_95

><td class="source">				});<br></td></tr
><tr
id=sl_svn178_96

><td class="source"><br></td></tr
><tr
id=sl_svn178_97

><td class="source">				//mousewheel<br></td></tr
><tr
id=sl_svn178_98

><td class="source">				$(function($) {<br></td></tr
><tr
id=sl_svn178_99

><td class="source">					if(mouseWheelSupport==&quot;yes&quot;){<br></td></tr
><tr
id=sl_svn178_100

><td class="source">						$customScrollBox.unbind(&quot;mousewheel&quot;);<br></td></tr
><tr
id=sl_svn178_101

><td class="source">						$customScrollBox.bind(&quot;mousewheel&quot;, function(event, delta) {<br></td></tr
><tr
id=sl_svn178_102

><td class="source">							var vel = Math.abs(delta*10);<br></td></tr
><tr
id=sl_svn178_103

><td class="source">							$dragger.css(&quot;left&quot;, $dragger.position().left-(delta*vel));<br></td></tr
><tr
id=sl_svn178_104

><td class="source">							ScrollX();<br></td></tr
><tr
id=sl_svn178_105

><td class="source">							if($dragger.position().left&lt;0){<br></td></tr
><tr
id=sl_svn178_106

><td class="source">								$dragger.css(&quot;left&quot;, 0);<br></td></tr
><tr
id=sl_svn178_107

><td class="source">								$customScrollBox_container.stop();<br></td></tr
><tr
id=sl_svn178_108

><td class="source">								ScrollX();<br></td></tr
><tr
id=sl_svn178_109

><td class="source">							}<br></td></tr
><tr
id=sl_svn178_110

><td class="source">							if($dragger.position().left&gt;$dragger_container.width()-$dragger.width()){<br></td></tr
><tr
id=sl_svn178_111

><td class="source">								$dragger.css(&quot;left&quot;, $dragger_container.width()-$dragger.width());<br></td></tr
><tr
id=sl_svn178_112

><td class="source">								$customScrollBox_container.stop();<br></td></tr
><tr
id=sl_svn178_113

><td class="source">								ScrollX();<br></td></tr
><tr
id=sl_svn178_114

><td class="source">							}<br></td></tr
><tr
id=sl_svn178_115

><td class="source">							return false;<br></td></tr
><tr
id=sl_svn178_116

><td class="source">						});<br></td></tr
><tr
id=sl_svn178_117

><td class="source">					}<br></td></tr
><tr
id=sl_svn178_118

><td class="source">				});<br></td></tr
><tr
id=sl_svn178_119

><td class="source">				<br></td></tr
><tr
id=sl_svn178_120

><td class="source">				//scroll buttons<br></td></tr
><tr
id=sl_svn178_121

><td class="source">				if(scrollBtnsSupport==&quot;yes&quot;){<br></td></tr
><tr
id=sl_svn178_122

><td class="source">					$scrollDownBtn.mouseup(function(){<br></td></tr
><tr
id=sl_svn178_123

><td class="source">						BtnsScrollXStop();<br></td></tr
><tr
id=sl_svn178_124

><td class="source">					}).mousedown(function(){<br></td></tr
><tr
id=sl_svn178_125

><td class="source">						BtnsScrollX(&quot;down&quot;);<br></td></tr
><tr
id=sl_svn178_126

><td class="source">					}).mouseout(function(){<br></td></tr
><tr
id=sl_svn178_127

><td class="source">						BtnsScrollXStop();<br></td></tr
><tr
id=sl_svn178_128

><td class="source">					});<br></td></tr
><tr
id=sl_svn178_129

><td class="source">				<br></td></tr
><tr
id=sl_svn178_130

><td class="source">					$scrollUpBtn.mouseup(function(){<br></td></tr
><tr
id=sl_svn178_131

><td class="source">						BtnsScrollXStop();<br></td></tr
><tr
id=sl_svn178_132

><td class="source">					}).mousedown(function(){<br></td></tr
><tr
id=sl_svn178_133

><td class="source">						BtnsScrollX(&quot;up&quot;);<br></td></tr
><tr
id=sl_svn178_134

><td class="source">					}).mouseout(function(){<br></td></tr
><tr
id=sl_svn178_135

><td class="source">						BtnsScrollXStop();<br></td></tr
><tr
id=sl_svn178_136

><td class="source">					});<br></td></tr
><tr
id=sl_svn178_137

><td class="source">				<br></td></tr
><tr
id=sl_svn178_138

><td class="source">					$scrollDownBtn.click(function(e) {<br></td></tr
><tr
id=sl_svn178_139

><td class="source">						e.preventDefault();<br></td></tr
><tr
id=sl_svn178_140

><td class="source">					});<br></td></tr
><tr
id=sl_svn178_141

><td class="source">					$scrollUpBtn.click(function(e) {<br></td></tr
><tr
id=sl_svn178_142

><td class="source">						e.preventDefault();<br></td></tr
><tr
id=sl_svn178_143

><td class="source">					});<br></td></tr
><tr
id=sl_svn178_144

><td class="source">				<br></td></tr
><tr
id=sl_svn178_145

><td class="source">					btnsScrollTimerX=0;<br></td></tr
><tr
id=sl_svn178_146

><td class="source">				<br></td></tr
><tr
id=sl_svn178_147

><td class="source">					function BtnsScrollX(dir){<br></td></tr
><tr
id=sl_svn178_148

><td class="source">						if(dir==&quot;down&quot;){<br></td></tr
><tr
id=sl_svn178_149

><td class="source">							var btnsScrollTo=$dragger_container.width()-$dragger.width();<br></td></tr
><tr
id=sl_svn178_150

><td class="source">							var scrollSpeed=Math.abs($dragger.position().left-btnsScrollTo)*(100/scrollBtnsSpeed);<br></td></tr
><tr
id=sl_svn178_151

><td class="source">							$dragger.stop().animate({left: btnsScrollTo}, scrollSpeed,&quot;linear&quot;);<br></td></tr
><tr
id=sl_svn178_152

><td class="source">						} else {<br></td></tr
><tr
id=sl_svn178_153

><td class="source">							var btnsScrollTo=0;<br></td></tr
><tr
id=sl_svn178_154

><td class="source">							var scrollSpeed=Math.abs($dragger.position().left-btnsScrollTo)*(100/scrollBtnsSpeed);<br></td></tr
><tr
id=sl_svn178_155

><td class="source">							$dragger.stop().animate({left: -btnsScrollTo}, scrollSpeed,&quot;linear&quot;);<br></td></tr
><tr
id=sl_svn178_156

><td class="source">						}<br></td></tr
><tr
id=sl_svn178_157

><td class="source">						clearInterval(btnsScrollTimerX);<br></td></tr
><tr
id=sl_svn178_158

><td class="source">						btnsScrollTimerX = setInterval( ScrollX, 20);<br></td></tr
><tr
id=sl_svn178_159

><td class="source">					}<br></td></tr
><tr
id=sl_svn178_160

><td class="source">				<br></td></tr
><tr
id=sl_svn178_161

><td class="source">					function BtnsScrollXStop(){<br></td></tr
><tr
id=sl_svn178_162

><td class="source">						clearInterval(btnsScrollTimerX);<br></td></tr
><tr
id=sl_svn178_163

><td class="source">						$dragger.stop();<br></td></tr
><tr
id=sl_svn178_164

><td class="source">					}<br></td></tr
><tr
id=sl_svn178_165

><td class="source">				}<br></td></tr
><tr
id=sl_svn178_166

><td class="source"><br></td></tr
><tr
id=sl_svn178_167

><td class="source">				//scroll<br></td></tr
><tr
id=sl_svn178_168

><td class="source">				var scrollAmount=(totalContent-visibleWidth)/(draggerContainerWidth-draggerWidth);<br></td></tr
><tr
id=sl_svn178_169

><td class="source">				function ScrollX(){<br></td></tr
><tr
id=sl_svn178_170

><td class="source">					var draggerX=$dragger.position().left;<br></td></tr
><tr
id=sl_svn178_171

><td class="source">					var targX=-draggerX*scrollAmount;<br></td></tr
><tr
id=sl_svn178_172

><td class="source">					var thePos=$customScrollBox_container.position().left-targX;<br></td></tr
><tr
id=sl_svn178_173

><td class="source">					$customScrollBox_container.stop().animate({left: &quot;-=&quot;+thePos}, animSpeed, easeType);<br></td></tr
><tr
id=sl_svn178_174

><td class="source">				}<br></td></tr
><tr
id=sl_svn178_175

><td class="source">			} else { //disable scrollbar if content is short<br></td></tr
><tr
id=sl_svn178_176

><td class="source">				$dragger.css(&quot;left&quot;,0).css(&quot;display&quot;,&quot;none&quot;); //reset content scroll<br></td></tr
><tr
id=sl_svn178_177

><td class="source">				$customScrollBox_container.css(&quot;left&quot;,0);<br></td></tr
><tr
id=sl_svn178_178

><td class="source">				$dragger_container.css(&quot;display&quot;,&quot;none&quot;);<br></td></tr
><tr
id=sl_svn178_179

><td class="source">				$scrollDownBtn.css(&quot;display&quot;,&quot;none&quot;);<br></td></tr
><tr
id=sl_svn178_180

><td class="source">				$scrollUpBtn.css(&quot;display&quot;,&quot;none&quot;);<br></td></tr
><tr
id=sl_svn178_181

><td class="source">			}<br></td></tr
><tr
id=sl_svn178_182

><td class="source">		//vertical scrolling ------------------------------<br></td></tr
><tr
id=sl_svn178_183

><td class="source">		} else {<br></td></tr
><tr
id=sl_svn178_184

><td class="source">			var visibleHeight=$customScrollBox.height();<br></td></tr
><tr
id=sl_svn178_185

><td class="source">			if($customScrollBox_container.height()&gt;visibleHeight){ //enable scrollbar if content is long<br></td></tr
><tr
id=sl_svn178_186

><td class="source">				$dragger.css(&quot;display&quot;,&quot;block&quot;);<br></td></tr
><tr
id=sl_svn178_187

><td class="source">				if(reloadType!=&quot;resize&quot; &amp;&amp; $customScrollBox_container.height()!=$customScrollBox.data(&quot;contentHeight&quot;)){<br></td></tr
><tr
id=sl_svn178_188

><td class="source">					$dragger.css(&quot;top&quot;,0);<br></td></tr
><tr
id=sl_svn178_189

><td class="source">					$customScrollBox_container.css(&quot;top&quot;,0);<br></td></tr
><tr
id=sl_svn178_190

><td class="source">					$customScrollBox.data(&quot;contentHeight&quot;,$customScrollBox_container.height());<br></td></tr
><tr
id=sl_svn178_191

><td class="source">				}<br></td></tr
><tr
id=sl_svn178_192

><td class="source">				$dragger_container.css(&quot;display&quot;,&quot;block&quot;);<br></td></tr
><tr
id=sl_svn178_193

><td class="source">				$scrollDownBtn.css(&quot;display&quot;,&quot;inline-block&quot;);<br></td></tr
><tr
id=sl_svn178_194

><td class="source">				$scrollUpBtn.css(&quot;display&quot;,&quot;inline-block&quot;);<br></td></tr
><tr
id=sl_svn178_195

><td class="source">				var totalContent=$customScrollBox_content.height();<br></td></tr
><tr
id=sl_svn178_196

><td class="source">				var minDraggerHeight=$customScrollBox.data(&quot;minDraggerHeight&quot;);<br></td></tr
><tr
id=sl_svn178_197

><td class="source">				var draggerContainerHeight=$dragger_container.height();<br></td></tr
><tr
id=sl_svn178_198

><td class="source">		<br></td></tr
><tr
id=sl_svn178_199

><td class="source">				function AdjustDraggerHeight(){<br></td></tr
><tr
id=sl_svn178_200

><td class="source">					if(draggerDimType==&quot;auto&quot;){<br></td></tr
><tr
id=sl_svn178_201

><td class="source">						var adjDraggerHeight=Math.round(totalContent-((totalContent-visibleHeight)*1.3)); //adjust dragger height analogous to content<br></td></tr
><tr
id=sl_svn178_202

><td class="source">						if(adjDraggerHeight&lt;=minDraggerHeight){ //minimum dragger height<br></td></tr
><tr
id=sl_svn178_203

><td class="source">							$dragger.css(&quot;height&quot;,minDraggerHeight+&quot;px&quot;).css(&quot;line-height&quot;,minDraggerHeight+&quot;px&quot;);<br></td></tr
><tr
id=sl_svn178_204

><td class="source">						} else if(adjDraggerHeight&gt;=draggerContainerHeight){<br></td></tr
><tr
id=sl_svn178_205

><td class="source">							$dragger.css(&quot;height&quot;,draggerContainerHeight-10+&quot;px&quot;).css(&quot;line-height&quot;,draggerContainerHeight-10+&quot;px&quot;);<br></td></tr
><tr
id=sl_svn178_206

><td class="source">						} else {<br></td></tr
><tr
id=sl_svn178_207

><td class="source">							$dragger.css(&quot;height&quot;,adjDraggerHeight+&quot;px&quot;).css(&quot;line-height&quot;,adjDraggerHeight+&quot;px&quot;);<br></td></tr
><tr
id=sl_svn178_208

><td class="source">						}<br></td></tr
><tr
id=sl_svn178_209

><td class="source">					}<br></td></tr
><tr
id=sl_svn178_210

><td class="source">				}<br></td></tr
><tr
id=sl_svn178_211

><td class="source">				AdjustDraggerHeight();<br></td></tr
><tr
id=sl_svn178_212

><td class="source">		<br></td></tr
><tr
id=sl_svn178_213

><td class="source">				var targY=0;<br></td></tr
><tr
id=sl_svn178_214

><td class="source">				var draggerHeight=$dragger.height();<br></td></tr
><tr
id=sl_svn178_215

><td class="source">				$dragger.draggable({ <br></td></tr
><tr
id=sl_svn178_216

><td class="source">					axis: &quot;y&quot;, <br></td></tr
><tr
id=sl_svn178_217

><td class="source">					containment: &quot;parent&quot;, <br></td></tr
><tr
id=sl_svn178_218

><td class="source">					drag: function(event, ui) {<br></td></tr
><tr
id=sl_svn178_219

><td class="source">						Scroll();<br></td></tr
><tr
id=sl_svn178_220

><td class="source">					}, <br></td></tr
><tr
id=sl_svn178_221

><td class="source">					stop: function(event, ui) {<br></td></tr
><tr
id=sl_svn178_222

><td class="source">						DraggerRelease();<br></td></tr
><tr
id=sl_svn178_223

><td class="source">					}<br></td></tr
><tr
id=sl_svn178_224

><td class="source">				});<br></td></tr
><tr
id=sl_svn178_225

><td class="source">				<br></td></tr
><tr
id=sl_svn178_226

><td class="source">				$dragger_container.click(function(e) {<br></td></tr
><tr
id=sl_svn178_227

><td class="source">					var $this=$(this);<br></td></tr
><tr
id=sl_svn178_228

><td class="source">					var mouseCoord=(e.pageY - $this.offset().top);<br></td></tr
><tr
id=sl_svn178_229

><td class="source">					if(mouseCoord&lt;$dragger.position().top || mouseCoord&gt;($dragger.position().top+$dragger.height())){<br></td></tr
><tr
id=sl_svn178_230

><td class="source">						var targetPos=mouseCoord+$dragger.height();<br></td></tr
><tr
id=sl_svn178_231

><td class="source">						if(targetPos&lt;$dragger_container.height()){<br></td></tr
><tr
id=sl_svn178_232

><td class="source">							$dragger.css(&quot;top&quot;,mouseCoord);<br></td></tr
><tr
id=sl_svn178_233

><td class="source">							Scroll();<br></td></tr
><tr
id=sl_svn178_234

><td class="source">						} else {<br></td></tr
><tr
id=sl_svn178_235

><td class="source">							$dragger.css(&quot;top&quot;,$dragger_container.height()-$dragger.height());<br></td></tr
><tr
id=sl_svn178_236

><td class="source">							Scroll();<br></td></tr
><tr
id=sl_svn178_237

><td class="source">						}<br></td></tr
><tr
id=sl_svn178_238

><td class="source">					}<br></td></tr
><tr
id=sl_svn178_239

><td class="source">				});<br></td></tr
><tr
id=sl_svn178_240

><td class="source"><br></td></tr
><tr
id=sl_svn178_241

><td class="source">				//mousewheel<br></td></tr
><tr
id=sl_svn178_242

><td class="source">				$(function($) {<br></td></tr
><tr
id=sl_svn178_243

><td class="source">					if(mouseWheelSupport==&quot;yes&quot;){<br></td></tr
><tr
id=sl_svn178_244

><td class="source">						$customScrollBox.unbind(&quot;mousewheel&quot;);<br></td></tr
><tr
id=sl_svn178_245

><td class="source">						$customScrollBox.bind(&quot;mousewheel&quot;, function(event, delta) {<br></td></tr
><tr
id=sl_svn178_246

><td class="source">							var vel = Math.abs(delta*10);<br></td></tr
><tr
id=sl_svn178_247

><td class="source">							$dragger.css(&quot;top&quot;, $dragger.position().top-(delta*vel));<br></td></tr
><tr
id=sl_svn178_248

><td class="source">							Scroll();<br></td></tr
><tr
id=sl_svn178_249

><td class="source">							if($dragger.position().top&lt;0){<br></td></tr
><tr
id=sl_svn178_250

><td class="source">								$dragger.css(&quot;top&quot;, 0);<br></td></tr
><tr
id=sl_svn178_251

><td class="source">								$customScrollBox_container.stop();<br></td></tr
><tr
id=sl_svn178_252

><td class="source">								Scroll();<br></td></tr
><tr
id=sl_svn178_253

><td class="source">							}<br></td></tr
><tr
id=sl_svn178_254

><td class="source">							if($dragger.position().top&gt;$dragger_container.height()-$dragger.height()){<br></td></tr
><tr
id=sl_svn178_255

><td class="source">								$dragger.css(&quot;top&quot;, $dragger_container.height()-$dragger.height());<br></td></tr
><tr
id=sl_svn178_256

><td class="source">								$customScrollBox_container.stop();<br></td></tr
><tr
id=sl_svn178_257

><td class="source">								Scroll();<br></td></tr
><tr
id=sl_svn178_258

><td class="source">							}<br></td></tr
><tr
id=sl_svn178_259

><td class="source">							return false;<br></td></tr
><tr
id=sl_svn178_260

><td class="source">						});<br></td></tr
><tr
id=sl_svn178_261

><td class="source">					}<br></td></tr
><tr
id=sl_svn178_262

><td class="source">				});<br></td></tr
><tr
id=sl_svn178_263

><td class="source"><br></td></tr
><tr
id=sl_svn178_264

><td class="source">				//scroll buttons<br></td></tr
><tr
id=sl_svn178_265

><td class="source">				if(scrollBtnsSupport==&quot;yes&quot;){<br></td></tr
><tr
id=sl_svn178_266

><td class="source">					$scrollDownBtn.mouseup(function(){<br></td></tr
><tr
id=sl_svn178_267

><td class="source">						BtnsScrollStop();<br></td></tr
><tr
id=sl_svn178_268

><td class="source">					}).mousedown(function(){<br></td></tr
><tr
id=sl_svn178_269

><td class="source">						BtnsScroll(&quot;down&quot;);<br></td></tr
><tr
id=sl_svn178_270

><td class="source">					}).mouseout(function(){<br></td></tr
><tr
id=sl_svn178_271

><td class="source">						BtnsScrollStop();<br></td></tr
><tr
id=sl_svn178_272

><td class="source">					});<br></td></tr
><tr
id=sl_svn178_273

><td class="source">				<br></td></tr
><tr
id=sl_svn178_274

><td class="source">					$scrollUpBtn.mouseup(function(){<br></td></tr
><tr
id=sl_svn178_275

><td class="source">						BtnsScrollStop();<br></td></tr
><tr
id=sl_svn178_276

><td class="source">					}).mousedown(function(){<br></td></tr
><tr
id=sl_svn178_277

><td class="source">						BtnsScroll(&quot;up&quot;);<br></td></tr
><tr
id=sl_svn178_278

><td class="source">					}).mouseout(function(){<br></td></tr
><tr
id=sl_svn178_279

><td class="source">						BtnsScrollStop();<br></td></tr
><tr
id=sl_svn178_280

><td class="source">					});<br></td></tr
><tr
id=sl_svn178_281

><td class="source">				<br></td></tr
><tr
id=sl_svn178_282

><td class="source">					$scrollDownBtn.click(function(e) {<br></td></tr
><tr
id=sl_svn178_283

><td class="source">						e.preventDefault();<br></td></tr
><tr
id=sl_svn178_284

><td class="source">					});<br></td></tr
><tr
id=sl_svn178_285

><td class="source">					$scrollUpBtn.click(function(e) {<br></td></tr
><tr
id=sl_svn178_286

><td class="source">						e.preventDefault();<br></td></tr
><tr
id=sl_svn178_287

><td class="source">					});<br></td></tr
><tr
id=sl_svn178_288

><td class="source">				<br></td></tr
><tr
id=sl_svn178_289

><td class="source">					btnsScrollTimer=0;<br></td></tr
><tr
id=sl_svn178_290

><td class="source">				<br></td></tr
><tr
id=sl_svn178_291

><td class="source">					function BtnsScroll(dir){<br></td></tr
><tr
id=sl_svn178_292

><td class="source">						if(dir==&quot;down&quot;){<br></td></tr
><tr
id=sl_svn178_293

><td class="source">							var btnsScrollTo=$dragger_container.height()-$dragger.height();<br></td></tr
><tr
id=sl_svn178_294

><td class="source">							var scrollSpeed=Math.abs($dragger.position().top-btnsScrollTo)*(100/scrollBtnsSpeed);<br></td></tr
><tr
id=sl_svn178_295

><td class="source">							$dragger.stop().animate({top: btnsScrollTo}, scrollSpeed,&quot;linear&quot;);<br></td></tr
><tr
id=sl_svn178_296

><td class="source">						} else {<br></td></tr
><tr
id=sl_svn178_297

><td class="source">							var btnsScrollTo=0;<br></td></tr
><tr
id=sl_svn178_298

><td class="source">							var scrollSpeed=Math.abs($dragger.position().top-btnsScrollTo)*(100/scrollBtnsSpeed);<br></td></tr
><tr
id=sl_svn178_299

><td class="source">							$dragger.stop().animate({top: -btnsScrollTo}, scrollSpeed,&quot;linear&quot;);<br></td></tr
><tr
id=sl_svn178_300

><td class="source">						}<br></td></tr
><tr
id=sl_svn178_301

><td class="source">						clearInterval(btnsScrollTimer);<br></td></tr
><tr
id=sl_svn178_302

><td class="source">						btnsScrollTimer = setInterval( Scroll, 20);<br></td></tr
><tr
id=sl_svn178_303

><td class="source">					}<br></td></tr
><tr
id=sl_svn178_304

><td class="source">				<br></td></tr
><tr
id=sl_svn178_305

><td class="source">					function BtnsScrollStop(){<br></td></tr
><tr
id=sl_svn178_306

><td class="source">						clearInterval(btnsScrollTimer);<br></td></tr
><tr
id=sl_svn178_307

><td class="source">						$dragger.stop();<br></td></tr
><tr
id=sl_svn178_308

><td class="source">					}<br></td></tr
><tr
id=sl_svn178_309

><td class="source">				}<br></td></tr
><tr
id=sl_svn178_310

><td class="source">				<br></td></tr
><tr
id=sl_svn178_311

><td class="source">				//scroll<br></td></tr
><tr
id=sl_svn178_312

><td class="source">				if(bottomSpace&lt;1){<br></td></tr
><tr
id=sl_svn178_313

><td class="source">					bottomSpace=1; //minimum bottomSpace value is 1<br></td></tr
><tr
id=sl_svn178_314

><td class="source">				}<br></td></tr
><tr
id=sl_svn178_315

><td class="source">				var scrollAmount=(totalContent-(visibleHeight/bottomSpace))/(draggerContainerHeight-draggerHeight);<br></td></tr
><tr
id=sl_svn178_316

><td class="source">				function Scroll(){<br></td></tr
><tr
id=sl_svn178_317

><td class="source">					var draggerY=$dragger.position().top;<br></td></tr
><tr
id=sl_svn178_318

><td class="source">					var targY=-draggerY*scrollAmount;<br></td></tr
><tr
id=sl_svn178_319

><td class="source">					var thePos=$customScrollBox_container.position().top-targY;<br></td></tr
><tr
id=sl_svn178_320

><td class="source">					$customScrollBox_container.stop().animate({top: &quot;-=&quot;+thePos}, animSpeed, easeType);<br></td></tr
><tr
id=sl_svn178_321

><td class="source">				}<br></td></tr
><tr
id=sl_svn178_322

><td class="source">			} else { //disable scrollbar if content is short<br></td></tr
><tr
id=sl_svn178_323

><td class="source">				$dragger.css(&quot;top&quot;,0).css(&quot;display&quot;,&quot;none&quot;); //reset content scroll<br></td></tr
><tr
id=sl_svn178_324

><td class="source">				$customScrollBox_container.css(&quot;top&quot;,0);<br></td></tr
><tr
id=sl_svn178_325

><td class="source">				$dragger_container.css(&quot;display&quot;,&quot;none&quot;);<br></td></tr
><tr
id=sl_svn178_326

><td class="source">				$scrollDownBtn.css(&quot;display&quot;,&quot;none&quot;);<br></td></tr
><tr
id=sl_svn178_327

><td class="source">				$scrollUpBtn.css(&quot;display&quot;,&quot;none&quot;);<br></td></tr
><tr
id=sl_svn178_328

><td class="source">			}<br></td></tr
><tr
id=sl_svn178_329

><td class="source">		}<br></td></tr
><tr
id=sl_svn178_330

><td class="source">		<br></td></tr
><tr
id=sl_svn178_331

><td class="source">		$dragger.mouseup(function(){<br></td></tr
><tr
id=sl_svn178_332

><td class="source">			DraggerRelease();<br></td></tr
><tr
id=sl_svn178_333

><td class="source">		}).mousedown(function(){<br></td></tr
><tr
id=sl_svn178_334

><td class="source">			DraggerPress();<br></td></tr
><tr
id=sl_svn178_335

><td class="source">		});<br></td></tr
><tr
id=sl_svn178_336

><td class="source"><br></td></tr
><tr
id=sl_svn178_337

><td class="source">		function DraggerPress(){<br></td></tr
><tr
id=sl_svn178_338

><td class="source">			$dragger.addClass(&quot;dragger_pressed&quot;);<br></td></tr
><tr
id=sl_svn178_339

><td class="source">		}<br></td></tr
><tr
id=sl_svn178_340

><td class="source"><br></td></tr
><tr
id=sl_svn178_341

><td class="source">		function DraggerRelease(){<br></td></tr
><tr
id=sl_svn178_342

><td class="source">			$dragger.removeClass(&quot;dragger_pressed&quot;);<br></td></tr
><tr
id=sl_svn178_343

><td class="source">		}<br></td></tr
><tr
id=sl_svn178_344

><td class="source">	}<br></td></tr
><tr
id=sl_svn178_345

><td class="source">	<br></td></tr
><tr
id=sl_svn178_346

><td class="source">	$(window).resize(function() {<br></td></tr
><tr
id=sl_svn178_347

><td class="source">		if(scrollType==&quot;horizontal&quot;){<br></td></tr
><tr
id=sl_svn178_348

><td class="source">			if($dragger.position().left&gt;$dragger_container.width()-$dragger.width()){<br></td></tr
><tr
id=sl_svn178_349

><td class="source">				$dragger.css(&quot;left&quot;, $dragger_container.width()-$dragger.width());<br></td></tr
><tr
id=sl_svn178_350

><td class="source">			}<br></td></tr
><tr
id=sl_svn178_351

><td class="source">		} else {<br></td></tr
><tr
id=sl_svn178_352

><td class="source">			if($dragger.position().top&gt;$dragger_container.height()-$dragger.height()){<br></td></tr
><tr
id=sl_svn178_353

><td class="source">				$dragger.css(&quot;top&quot;, $dragger_container.height()-$dragger.height());<br></td></tr
><tr
id=sl_svn178_354

><td class="source">			}<br></td></tr
><tr
id=sl_svn178_355

><td class="source">		}<br></td></tr
><tr
id=sl_svn178_356

><td class="source">		CustomScroller(&quot;resize&quot;);<br></td></tr
><tr
id=sl_svn178_357

><td class="source">	});<br></td></tr
><tr
id=sl_svn178_358

><td class="source">};  <br></td></tr
><tr
id=sl_svn178_359

><td class="source">})(jQuery);<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn178_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn178_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/sabconnectplusplus/source/detail?spec=svn178&amp;r=178">r178</a>
 by rcdailey
 on Nov 1, 2011
 &nbsp; <a href="/p/sabconnectplusplus/source/diff?spec=svn178&r=178&amp;format=side&amp;path=/branches/new-popup/third_party/jquery/jquery.mCustomScrollbar.js&amp;old_path=/branches/new-popup/third_party/jquery/jquery.mCustomScrollbar.js&amp;old=">Diff</a>
 </div>
 <pre>Incomplete progress on new popup</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/sabconnectplusplus/source/detail?r=178&spec=svn178';
 var publish_url = '/p/sabconnectplusplus/source/detail?r=178&spec=svn178#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/branches/new-popup/third_party/jquery/jquery.easing.js');
 changed_urls.push('/p/sabconnectplusplus/source/browse/branches/new-popup/third_party/jquery/jquery.easing.js?r\x3d178\x26spec\x3dsvn178');
 
 
 changed_paths.push('/branches/new-popup/third_party/jquery/jquery.mCustomScrollbar.css');
 changed_urls.push('/p/sabconnectplusplus/source/browse/branches/new-popup/third_party/jquery/jquery.mCustomScrollbar.css?r\x3d178\x26spec\x3dsvn178');
 
 
 changed_paths.push('/branches/new-popup/third_party/jquery/jquery.mCustomScrollbar.js');
 changed_urls.push('/p/sabconnectplusplus/source/browse/branches/new-popup/third_party/jquery/jquery.mCustomScrollbar.js?r\x3d178\x26spec\x3dsvn178');
 
 var selected_path = '/branches/new-popup/third_party/jquery/jquery.mCustomScrollbar.js';
 
 
 changed_paths.push('/branches/new-popup/third_party/jquery/jquery.mousewheel.min.js');
 changed_urls.push('/p/sabconnectplusplus/source/browse/branches/new-popup/third_party/jquery/jquery.mousewheel.min.js?r\x3d178\x26spec\x3dsvn178');
 
 
 changed_paths.push('/trunk/css/popup.css');
 changed_urls.push('/p/sabconnectplusplus/source/browse/trunk/css/popup.css?r\x3d178\x26spec\x3dsvn178');
 
 
 changed_paths.push('/trunk/popup.html');
 changed_urls.push('/p/sabconnectplusplus/source/browse/trunk/popup.html?r\x3d178\x26spec\x3dsvn178');
 
 
 changed_paths.push('/trunk/project/sabconnect++.pnproj');
 changed_urls.push('/p/sabconnectplusplus/source/browse/trunk/project/sabconnect++.pnproj?r\x3d178\x26spec\x3dsvn178');
 
 
 changed_paths.push('/trunk/scripts/pages/popup.js');
 changed_urls.push('/p/sabconnectplusplus/source/browse/trunk/scripts/pages/popup.js?r\x3d178\x26spec\x3dsvn178');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/sabconnectplusplus/source/browse/branches/new-popup/third_party/jquery/jquery.easing.js?r=178&amp;spec=svn178"
 
 >...rd_party/jquery/jquery.easing.js</option>
 
 <option value="/p/sabconnectplusplus/source/browse/branches/new-popup/third_party/jquery/jquery.mCustomScrollbar.css?r=178&amp;spec=svn178"
 
 >...uery/jquery.mCustomScrollbar.css</option>
 
 <option value="/p/sabconnectplusplus/source/browse/branches/new-popup/third_party/jquery/jquery.mCustomScrollbar.js?r=178&amp;spec=svn178"
 selected="selected"
 >...query/jquery.mCustomScrollbar.js</option>
 
 <option value="/p/sabconnectplusplus/source/browse/branches/new-popup/third_party/jquery/jquery.mousewheel.min.js?r=178&amp;spec=svn178"
 
 >.../jquery/jquery.mousewheel.min.js</option>
 
 <option value="/p/sabconnectplusplus/source/browse/trunk/css/popup.css?r=178&amp;spec=svn178"
 
 >/trunk/css/popup.css</option>
 
 <option value="/p/sabconnectplusplus/source/browse/trunk/popup.html?r=178&amp;spec=svn178"
 
 >/trunk/popup.html</option>
 
 <option value="/p/sabconnectplusplus/source/browse/trunk/project/sabconnect++.pnproj?r=178&amp;spec=svn178"
 
 >/trunk/project/sabconnect++.pnproj</option>
 
 <option value="/p/sabconnectplusplus/source/browse/trunk/scripts/pages/popup.js?r=178&amp;spec=svn178"
 
 >/trunk/scripts/pages/popup.js</option>
 
 </select>
 </td></tr></table>
 
 
 



 <div style="white-space:nowrap">
 
 <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=http%3A%2F%2Fcode.google.com%2Fp%2Fsabconnectplusplus%2Fsource%2Fbrowse%2Fbranches%2Fnew-popup%2Fthird_party%2Fjquery%2Fjquery.mCustomScrollbar.js%3Fr%3D178&amp;followup=http%3A%2F%2Fcode.google.com%2Fp%2Fsabconnectplusplus%2Fsource%2Fbrowse%2Fbranches%2Fnew-popup%2Fthird_party%2Fjquery%2Fjquery.mCustomScrollbar.js%3Fr%3D178"
 >Sign in</a> to write a code review</div>


 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 <a href="/p/sabconnectplusplus/source/list?path=/branches/new-popup/third_party/jquery/jquery.mCustomScrollbar.js&start=178">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 12841 bytes,
 359 lines</div>
 
 <div><a href="//sabconnectplusplus.googlecode.com/svn-history/r178/branches/new-popup/third_party/jquery/jquery.mCustomScrollbar.js">View raw file</a></div>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="http://www.gstatic.com/codesite/ph/16216231599268812631/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="http://www.gstatic.com/codesite/ph/16216231599268812631/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://kibbles.googlecode.com/files/kibbles-1.3.3.comp.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/16216231599268812631/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn178': '/branches/new-popup/third_party/jquery/jquery.mCustomScrollbar.js'}
 codereviews = CR_controller.setup(
 {"profileUrl":null,"token":null,"assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/16216231599268812631","projectHomeUrl":"/p/sabconnectplusplus","relativeBaseUrl":"","projectName":"sabconnectplusplus","loggedInUserEmail":null}, '', 'svn178', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/16216231599268812631/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/16216231599268812631/js/ph_core.js"></script>
 
 
 
 
 <script type="text/javascript" src="/js/codesite_product_dictionary_ph.pack.04102009.js"></script>
</div> 
<div id="footer" dir="ltr">
 <div class="text">
 &copy;2011 Google -
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>
 
 


 
 </body>
</html>

