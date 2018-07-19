@if($ro->contact)

    <?php
    $order = array('electronic_email', 'electronic_url', 'electronic_other');
    $contactInfo = '';
    $streetAddress = false;
    $postalAddress = false;

    ?>


    @foreach($ro->contact as $contact)
        <?php
        //let's print out the postal address first if it exists
        if($contact['contact_type']=='postalAddress_addressLine'&& $contact['contact_value']!='')
        {
           if(!$postalAddress) {
               $contactInfo .= "Postal Address: <br/>";
               $postalAddress = true;
           }
            $contactInfo .= $contact['contact_value'].'<br/>';
        }
        ?>
    @endforeach


    @foreach($ro->contact as $contact)
        <?php
        //lets print out the street address if it exists
        if($contact['contact_type']=='streetAddress_addressLine'&& $contact['contact_value']!='')
        {
            if(!$streetAddress) {
                if($postalAddress) $contactInfo .= "<br/>";
                $contactInfo .= "Street Address: <br/>";
                $streetAddress = true;
            }
            $contactInfo .= $contact['contact_value'].'<br/>';
        }
        ?>
    @endforeach

    <?php if($postalAddress || $streetAddress) $contactInfo .= "<br />"; ?>

    @foreach($order as $o)
        @foreach($ro->contact as $contact)
        <?php
            if($contact['contact_type'] == $o){

                if($contact['contact_type']=='electronic_url'&& $contact['contact_value']!=''){
                    $contactInfo .= '<a href="'.$contact['contact_value'].'">'.$contact['contact_value'].'</a><br/>';
                }
                else{
                    $contactInfo .=  $contact['contact_value'].'<br/>';
                }

            }
        ?>
        @endforeach
    @endforeach
    @foreach($ro->contact as $contact)
        <?php
            if($contact['contact_type']=='telephoneNumber'&& $contact['contact_value']!='')
            {
                $contactInfo .=  'Ph: '.$contact['contact_value'].'<br/>';
            }
            elseif($contact['contact_type']=='faxNumber'&& $contact['contact_value']!='')
            {
                $contactInfo .=  'Fax: '.$contact['contact_value'].'<br/>';
            }
            elseif($contact['contact_value']!=''
                    && str_replace("electronic_","",$contact['contact_type']) == $contact['contact_type']
                    && str_replace("_addressLine","",$contact['contact_type']) == $contact['contact_type']){
                $contactInfo .= html_entity_decode($contact['contact_value'])."<br/>";
            }
            elseif(str_replace("electronic_","",$contact['contact_type']) != $contact['contact_type'] && !in_array($contact['contact_type'],$order)){
                $contactInfo .=  $contact['contact_value'].'<br/>';
            }
            elseif($contact['contact_type'] == "end") {
                $contactInfo .="<br/>";
            }
        ?>
    @endforeach
    @if(trim($contactInfo)!='' && trim($contactInfo)!='<br/>')
    <div id="contact">
        <h4>Contact Information</h4>
        {{$contactInfo}}
    </div>

    @endif
@endif