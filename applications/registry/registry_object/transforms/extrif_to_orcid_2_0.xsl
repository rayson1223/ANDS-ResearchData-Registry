<?xml version="1.0" encoding="UTF-8"?>
<!-- https://intranet.ands.org.au/display/TEAM/ANDS+Registry+-+RIF-CS+to+ORCID+V2.0+Crosswalk -->
<xsl:stylesheet xmlns:ro="http://ands.org.au/standards/rif-cs/registryObjects" xmlns:common="http://www.orcid.org/ns/common" xmlns:work="http://www.orcid.org/ns/work" xmlns:extRif="http://ands.org.au/standards/rif-cs/extendedRegistryObjects" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0" exclude-result-prefixes="work common ro extRif">
<xsl:param name="base_url"/>
<xsl:param name="rda_url"/>
    <xsl:param name="put_code" select="''"/>
<!-- http://support.orcid.org/knowledgebase/articles/118795-->
    <xsl:output indent="yes" omit-xml-declaration="no"/>
    <xsl:strip-space elements="*"/>

    <xsl:template match="/">
        <xsl:apply-templates/>
    </xsl:template>   
    
    <xsl:template match="ro:registryObject">
        <work:work xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xmlns:common="http://www.orcid.org/ns/common" 
            xmlns:work="http://www.orcid.org/ns/work" xsi:schemaLocation="http://www.orcid.org/ns/common 
            https://raw.githubusercontent.com/ORCID/ORCID-Source/master/orcid-model/src/main/resources/common_2.0/common-2.0.xsd 
            http://www.orcid.org/ns/work 
            https://raw.githubusercontent.com/ORCID/ORCID-Source/master/orcid-model/src/main/resources/record_2.0/work-2.0.xsd">
            <xsl:if test="$put_code != ''">
            <xsl:attribute name="put-code">
                <xsl:value-of select="$put_code"/>
            </xsl:attribute>
            </xsl:if>
            <work:title>
                <xsl:if test="$title != ''">
                    <common:title xmlns:common="http://www.orcid.org/ns/common">
                        <xsl:value-of select="$title"/>
                    </common:title>
                </xsl:if>
                <xsl:if test="ro:collection/ro:name[@type='alternative']">
                    <xsl:apply-templates select="ro:collection/ro:name[@type='alternative']"/>
                </xsl:if>
            </work:title>

            <xsl:if test="$description != ''">
                <work:short-description>
                    <xsl:value-of select="$description"/>
                </work:short-description>
            </xsl:if>

            <xsl:if test="$citationType != ''">
                <work:citation-type>
                    <xsl:value-of select="$citationType"/>
                </work:citation-type>
            </xsl:if>

            <xsl:if test="$citationValue != ''">
                <work:citation-value>
                    <xsl:value-of select="$citationValue"/>
                </work:citation-value>
            </xsl:if>

            <xsl:if test="ro:collection/ro:citationInfo/ro:fullCitation">
                <work:citation>
                    <work:citation-type>
                        <xsl:variable name="style" select="ro:collection/ro:citationInfo/ro:fullCitation/@style"/>
                        <xsl:choose>
                            <xsl:when test="$style = 'Harvard'"><xsl:text>formatted-harvard</xsl:text></xsl:when>
                            <xsl:when test="$style = 'APA'"><xsl:text>formatted-apa</xsl:text></xsl:when>
                            <xsl:when test="$style = 'IEEE'"><xsl:text>formatted-ieee</xsl:text></xsl:when>
                            <xsl:when test="$style = 'MLA'"><xsl:text>formatted-mla</xsl:text></xsl:when>
                            <xsl:when test="$style = 'Vancouver'"><xsl:text>formatted-vancouver</xsl:text></xsl:when>
                            <xsl:when test="$style = 'Chicago'"><xsl:text>formatted-chicago</xsl:text></xsl:when>
                            <xsl:when test="($style = 'Bibtex') or $style = 'bibtex'"><xsl:text>bibtex</xsl:text></xsl:when>
                            <xsl:otherwise>
                                <xsl:text>formatted-unspecified</xsl:text>
                            </xsl:otherwise>
                        </xsl:choose>
                    </work:citation-type>
                    <work:citation-value><xsl:value-of select="ro:collection/ro:citationInfo/ro:fullCitation/text()"/></work:citation-value>
                </work:citation>
            </xsl:if>
            <work:type>
                <xsl:choose>
                    <xsl:when test="ro:collection/@type='collection'">data-set</xsl:when>
                    <xsl:when test="ro:collection/@type='dataset'">data-set</xsl:when>
                    <xsl:when test="ro:collection/@type='publication'">journal-article</xsl:when>
                    <xsl:otherwise>other</xsl:otherwise>
                </xsl:choose>
            </work:type>

            <work:url><xsl:value-of select="$rda_url"/></work:url>

            <xsl:if test="$publicationDate != ''">
                <common:publication-date xmlns:common="http://www.orcid.org/ns/common">
                    <xsl:if test="$publicationDateYear != ''">
                        <common:year>
                            <xsl:value-of select="$publicationDateYear"/>
                        </common:year>
                    </xsl:if>
                    <xsl:if test="$publicationDateMonth != ''">
                        <common:month>
                            <xsl:value-of select="$publicationDateMonth"/>
                        </common:month>
                    </xsl:if>
                    <xsl:if test="$publicationDateDay != ''">
                        <common:day>
                            <xsl:value-of select="$publicationDateDay"/>
                        </common:day>
                    </xsl:if>
                </common:publication-date>
            </xsl:if>

            <common:external-ids xmlns:common="http://www.orcid.org/ns/common">
                <!--view?key= as a permanent external-id-->
                <common:external-id xmlns:common="http://www.orcid.org/ns/common">
                    <common:external-id-type>other-id</common:external-id-type>
                    <common:external-id-value><xsl:value-of select="$rda_url_key"/></common:external-id-value>
                    <common:external-id-relationship>self</common:external-id-relationship>
                </common:external-id>
                <xsl:if test="ro:collection/ro:identifier[text()!=''] |
         ro:collection/ro:citationInfo/ro:citationMetadata/ro:identifier[text()!='']">
                <xsl:apply-templates select="ro:collection/ro:identifier[text()!=''] |
                ro:collection/ro:citationInfo/ro:citationMetadata/ro:identifier[text()!='']"/>
                </xsl:if>
            </common:external-ids>


            <xsl:if test="ro:collection/ro:citationInfo/ro:citationMetadata/ro:contributor">
                <work:contributors>
                    <xsl:apply-templates select="ro:collection/ro:citationInfo/ro:citationMetadata/ro:contributor"/>
                </work:contributors>
            </xsl:if>          
        </work:work>
    </xsl:template>

    <xsl:template match="ro:name[@type='alternative']">
        <common:subtitle xmlns:common="http://www.orcid.org/ns/common"> <xsl:value-of select="."/></common:subtitle>
    </xsl:template>

    <xsl:template match="ro:identifier">
        <common:external-id xmlns:common="http://www.orcid.org/ns/common">
            <common:external-id-type>
                <xsl:choose>
                    <xsl:when test="(@type='arxiv') 
                        or (@type='asin') 
                        or (@type='asin-tld') 
                        or (@type='bibcode') 
                        or (@type='doi')
                        or (@type='eid')
                        or (@type='isbn')
                        or (@type='issn')
                        or (@type='jfm')
                        or (@type='jstor')
                        or (@type='lccn')
                        or (@type='mr')
                        or (@type='oclc')
                        or (@type='ol')
                        or (@type='osti')
                        or (@type='pmc')
                        or (@type='pmid')
                        or (@type='rfc')
                        or (@type='ssrn')
                        or (@type='zbl')
                        ">
                        <xsl:value-of select="@type"/>
                    </xsl:when>
                    <xsl:otherwise>other-id</xsl:otherwise>
                </xsl:choose>
                <!-- http://support.orcid.org/knowledgebase/articles/118807 -->
            </common:external-id-type>
          <common:external-id-value><xsl:value-of select="."/></common:external-id-value>
          <common:external-id-relationship>self</common:external-id-relationship>
        </common:external-id>
    </xsl:template>

    <xsl:template match="ro:namePart">
        <xsl:value-of select="."/><xsl:text>, </xsl:text>
    </xsl:template>

    <xsl:template match="ro:contributor">
      <work:contributor>
        <work:credit-name>
            <xsl:variable name="title">
                <xsl:apply-templates select="ro:namePart[@type = 'family']"/>
                <xsl:apply-templates select="ro:namePart[@type = 'given']"/>
                <xsl:apply-templates select="ro:namePart[@type = 'title']"/>
                <xsl:apply-templates select="ro:namePart[@type = '' or not(@type)]"/>
            </xsl:variable>
            <xsl:value-of select="substring($title,1,string-length($title)-2)"/>
        </work:credit-name>
        <work:contributor-attributes>
          <work:contributor-sequence>
            <xsl:choose>
                <xsl:when test="@seq=1">first</xsl:when>
                <xsl:otherwise>additional</xsl:otherwise>
            </xsl:choose>
        </work:contributor-sequence>
            <!-- author, assignee, editor, chair-or-translator, co-investigator, co-inventor, graduate-student, other-inventor, principal-investigator, postdoctoral-researcher, support-staff-->
        <work:contributor-role>author</work:contributor-role>
        </work:contributor-attributes>
      </work:contributor>
    </xsl:template>

</xsl:stylesheet>

