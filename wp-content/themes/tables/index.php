<?php
/*
Template Name: Table template page
*/
?>
<?php get_header(); ?>

    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri() ?>/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.16/css/dataTables.bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/1.5.1/css/buttons.bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/fixedheader/3.1.3/css/fixedHeader.bootstrap.min.css"/>

    <style>
        .dataTables_wrapper {
            margin-top: 20px;
            border-top: 1px solid #ccc;
            padding-top: 10px;
        }
        .dataTables_wrapper:first-child {
            border: none;
        }

        /*.dropdown-submenu{position:relative;}*/
        /*.dropdown-submenu>.dropdown-menu{top:0;left: 100%;max-width:180px;margin-top:-6px;margin-right:-1px;-webkit-border-radius:6px 6px 6px 6px;-moz-border-radius:6px 6px 6px 6px;border-radius:6px 6px 6px 6px;}*/
        /*.dropdown-submenu:hover>.dropdown-menu{display: inherit;!* right: inherit; *!}*/
        /*!*.dropdown-submenu>a:after{display:block;content:" ";float:left;width:0;height:0;border-color:transparent;border-style:solid;border-width:5px 5px 5px 0;border-right-color:#999;margin-top:5px;margin-right:10px;}*!*/
        /*.dropdown-submenu:hover>a:after{border-left-color:#ffffff;}*/
        /*.dropdown-submenu.pull-left{float:none;}.dropdown-submenu.pull-left>.dropdown-menu{left:-100%;margin-left:10px;-webkit-border-radius:6px 6px 6px 6px;-moz-border-radius:6px 6px 6px 6px;border-radius:6px 6px 6px 6px;}*/
        /*.dropdown-menu-right {margin-left:0;}*/

        /*.dropdown-menu-right {*/
            /*right:inherit !important;*/
            /*left: auto;*/
        /*}*/

    </style>

<div class="row">

    <div class="col-md-12">
        <div class="btn-group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">Username <span id="username-val"></span> <span class="caret"></span></button>
            <ul class="dropdown-menu username_dropdown">
<!--                <li><a href="#">Action</a></li>-->
<!--                <li><a href="#">Another action</a></li>-->
<!--                <li><a href="#">Something else here</a></li>-->
<!--                <li class="dropdown-submenu dropdown-menu-right">-->
<!--                    <a tabindex="-1" href="#">More options</a>-->
<!--                    <ul class="dropdown-menu">-->
<!--                        <li><a tabindex="-1" href="#">Second level</a></li>-->
<!--                        <li class="dropdown-submenu">-->
<!--                            <a href="#">More..</a>-->
<!--                            <ul class="dropdown-menu">-->
<!--                                <li><a href="#">3rd level</a></li>-->
<!--                                <li><a href="#">3rd level</a></li>-->
<!--                            </ul>-->
<!--                        </li>-->
<!--                        <li><a href="#">Second level</a></li>-->
<!--                        <li><a href="#">Second level</a></li>-->
<!--                    </ul>-->
<!--                </li>-->
            </ul>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">Session <span id="session-val"></span> <span class="caret"></span></button>
            <ul class="dropdown-menu session_dropdown">
            </ul>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">Sample <span id="sample-val"></span> <span class="caret"></span></button>
            <ul class="dropdown-menu sample_dropdown">
            </ul>
        </div>
        <div class="btn-group btn-group-sm">
            <button type="button" class="btn btn-default show-info-btn hidden" data-toggle="modal" data-target="#showInfo">Show info</button>
        </div>

        <div id="showInfo" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body"></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="col-md-12 tables-hav-holder" style="display: none">
        <ul class="nav nav-tabs">
            <li class=""><a href="#tab1" class="tab1" data-tab="1" data-toggle="tab">Data_1</a></li>
            <li class=""><a href="#tab2" class="tab2" data-tab="2" data-toggle="tab">Data_2</a></li>
            <li class=""><a href="#tab3" class="tab3" data-tab="3" data-toggle="tab">Data_3</a></li>

            <li class=""><a href="#tab4" class="tab4" data-tab="4" data-toggle="tab">Tremor_1</a></li>
            <li class=""><a href="#tab5" class="tab5" data-tab="5" data-toggle="tab">Tremor_2</a></li>
            <li class=""><a href="#tab6" class="tab6" data-tab="6" data-toggle="tab">Tremor_3</a></li>

            <li class=""><a href="#tab7" class="tab7" data-tab="7" data-toggle="tab">Tremor_Negentropic</a></li>
        </ul>
    </div>

</div>

    <div class="tab-content ">
        <div class="tab-pane" id="tab1" style="display: none"></div>
        <div class="tab-pane" id="tab2" style="display: none"></div>
        <div class="tab-pane" id="tab3" style="display: none"></div>

        <div class="tab-pane" id="tab4" style="display: none"></div>
        <div class="tab-pane" id="tab5" style="display: none"></div>
        <div class="tab-pane" id="tab6" style="display: none"></div>

        <div class="tab-pane" id="tab7" style="display: none"></div>
    </div>

    <div class="snippets" style="display: none">
        <div class="data-snippet">

            <a href="#" class="btn btn-default download-data-btn">Download</a>

            <table class="table table1">
                <thead>
                <tr>
                    <th>_</th>
                    <th>time</th>
                    <th>iPad</th>
                    <th>outMic0ed</th>
                    <th>outMicFiltered</th>
                    <th>outMicNrmalz</th>
                    <th>outMicM50</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>count</td>
                    <td>_</td>
                    <td class="count forIPad"></td>
                    <td class="count forMic0ed"></td>
                    <td class="count forMicFilt"></td>
                    <td class="count forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>median</td>
                    <td>_</td>
                    <td class="median forIPad"></td>
                    <td class="median forMic0ed"></td>
                    <td class="median forMicFilt"></td>
                    <td class="median forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>3 quartile</td>
                    <td>_</td>
                    <td class="threequartile forIPad"></td>
                    <td class="threequartile forMic0ed"></td>
                    <td class="threequartile forMicFilt"></td>
                    <td class="threequartile forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>1 quartile</td>
                    <td>_</td>
                    <td class="onequartile forIPad"></td>
                    <td class="onequartile forMic0ed"></td>
                    <td class="onequartile forMicFilt"></td>
                    <td class="onequartile forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>_</td>
                    <td class="average forIPad"></td>
                    <td class="average forMic0ed"></td>
                    <td class="average forMicFilt"></td>
                    <td class="average forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>Maximum</td>
                    <td>_</td>
                    <td class="maximum forIPad"></td>
                    <td class="maximum forMic0ed"></td>
                    <td class="maximum forMicFilt"></td>
                    <td class="maximum forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>Minimum</td>
                    <td>_</td>
                    <td class="minimum forIPad"></td>
                    <td class="minimum forMic0ed"></td>
                    <td class="minimum forMicFilt"></td>
                    <td class="minimum forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                </tbody>
            </table>
            <table class="table table2">
                <caption>DATA 1</caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>time</th>
                        <th>iPad</th>
                        <th>outMic0ed</th>
                        <th>outMicFiltered</th>
                        <th>outMicNrmalz</th>
                        <th>outMicM50</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
        <div class="tremor-snippet">
            <table class="table table1"></table>
            <div class="simple-tables-container"></div>
            <table class="table table4">
                <caption>allFftData</caption>
                <thead>
                    <tr>
                        <th>_</th>
                        <th>maxFrequency</th>
                        <th>maxPower</th>
                        <th>averagePower</th>
                        <th>maxNote</th>
                        <th>minNote</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            <table class="table table5">
                <caption>colSum</caption>
                <thead><tr></tr></thead>
                <tbody></tbody>
            </table>
            <table class="table table6">
                <caption>Tremor 1</caption>
                <thead>
                <tr>
                    <th>ID</th>
                </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
        <div class="negentropic-snippet">
            <table class="table negentropic negentropic0 table-bordered">
                <thead>
                <tr>
                    <th>title</th>
                    <th>line9</th>
                    <th>line10</th>
                </tr>
                </thead>
            </table>

            <table class="table negentropic negentropic1 table-bordered">
                <thead>
                <tr>
                    <th>title</th>
                    <th>line9</th>
                    <th>line10</th>
                </tr>
                </thead>
            </table>
            <table class="table negentropic negentropic2 table-bordered">
                <thead>
                <tr>
                    <th>title</th>
                    <th>line9</th>
                    <th>line10</th>
                </tr>
                </thead>
            </table>
            <table class="table negentropic negentropic3 table-bordered">
                <thead>
                <tr>
                    <th>title</th>
                    <th>line9</th>
                    <th>line10</th>
                </tr>
                </thead>
            </table>

            <table class="table negentropic negentropic4 table-bordered">
                <thead>
                <tr>
                    <th>title</th>
                    <th>line9</th>
                    <th>line10</th>
                </tr>
                </thead>
            </table>
            <table class="table negentropic negentropic5 table-bordered">
                <thead>
                <tr>
                    <th>title</th>
                    <th>line9</th>
                    <th>line10</th>
                </tr>
                </thead>
            </table>
            <table class="table negentropic negentropic6 table-bordered">
                <thead>
                <tr>
                    <th>title</th>
                    <th>line9</th>
                    <th>line10</th>
                </tr>
                </thead>
            </table>
            <div class="col-md-6">
            <table class="table negentropic-result table-bordered">
                <tbody>
                <tr>
                    <th>Result:</th>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>

    <script src="<?php echo get_template_directory_uri() ?>/js/jquery-1.12.4.min.js"></script>
    <script src="<?php echo get_template_directory_uri() ?>/js/bootstrap.min.js"></script>

    <script type="text/javascript" src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.16/js/dataTables.bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.flash.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.html5.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.print.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/fixedheader/3.1.3/js/dataTables.fixedHeader.min.js"></script>


    <script src="<?php echo get_template_directory_uri() ?>/js/config.js"></script>
    <script src="<?php echo get_template_directory_uri() ?>/js/main.js"></script>

<?php get_footer(); ?>